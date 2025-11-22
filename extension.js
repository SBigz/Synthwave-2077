const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

function activate(context) {
  const styleFilePath = path.join(
    context.extensionPath,
    "styles",
    "custom-style.css"
  ).replace(/\\/g, '/');

  const appDir = path.dirname(require.main.filename);
  const base = path.join(appDir, "vs", "code");
  const htmlFile = path.join(base, "electron-sandbox", "workbench", "workbench.html");

  async function applyStyles() {
    try {
      let html = await fs.promises.readFile(htmlFile, "utf-8");

      // Check if styles are already applied
      if (html.includes("<!-- !! SYNTHWAVE-2077-CSS-START !! -->")) {
        return;
      }

      // Clear any old custom styles
      html = html.replace(
        /<!-- !! VSCODE-CUSTOM-CSS-START !! -->[\s\S]*?<!-- !! VSCODE-CUSTOM-CSS-END !! -->/,
        ""
      );

      // Add our custom styles
      const styleContent = await fs.promises.readFile(styleFilePath, "utf-8");
      html = html.replace(
        /<\/head>/,
        `<!-- !! SYNTHWAVE-2077-CSS-START !! -->
        <style>${styleContent}</style>
        <!-- !! SYNTHWAVE-2077-CSS-END !! -->
        </head>`
      );

      await fs.promises.writeFile(htmlFile, html, "utf-8");

      const action = await vscode.window.showInformationMessage(
        "Synthwave 2077: Tab effects applied. Reload to see changes.",
        "Reload"
      );

      if (action === "Reload") {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    } catch (error) {
      // Silently fail if we can't modify the file (permissions, etc.)
    }
  }

  // Apply styles on activation
  applyStyles();
}

function deactivate() {}

exports.activate = activate;
exports.deactivate = deactivate;
