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

  async function patchHtmlFile(enable) {
    // Read the current content of the HTML file
    let html = await fs.promises.readFile(htmlFile, "utf-8");

    // Clear any existing custom styles
    html = html.replace(
      /<!-- !! VSCODE-CUSTOM-CSS-START !! -->[\s\S]*?<!-- !! VSCODE-CUSTOM-CSS-END !! -->/,
      ""
    );

    if (enable) {
      // If enabling, add our custom styles
      const styleContent = await fs.promises.readFile(styleFilePath, "utf-8");
      html = html.replace(
        /<\/head>/,
        `<!-- !! VSCODE-CUSTOM-CSS-START !! -->
        <style>${styleContent}</style>
        <!-- !! VSCODE-CUSTOM-CSS-END !! -->
        </head>`
      );
    }

    // Write the modified HTML back to the file
    await fs.promises.writeFile(htmlFile, html, "utf-8");

    // Reload VS Code window
    vscode.commands.executeCommand('workbench.action.reloadWindow');
  }

  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.disable", async () => {
      await patchHtmlFile(false);
      vscode.window.showInformationMessage("There's no spoon");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.enable", async () => {
      await patchHtmlFile(true);
      vscode.window.showInformationMessage("Wake up Samurai, we have a city to burn");
    })
  );
}

exports.activate = activate;
