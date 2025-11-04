const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

function activate(context) {
  const styleFilePath = path.join(
    context.extensionPath,
    "styles",
    "custom-style.css"
  ).replace(/\\/g, '/');

  // Use vscode.env.appRoot for more reliable path resolution
  const appDir = path.dirname(vscode.env.appRoot);
  const base = path.join(appDir, 'app', 'out', 'vs', 'code');

  // Function to find the workbench file across different VS Code versions
  function resolveWorkbenchPath(base) {
    const electronBaseCandidates = [
      "electron-browser",      // v1.70-, v1.102+
      "electron-sandbox",      // v1.70 ~ v1.102
    ];

    const htmlCandidates = [
      "workbench.esm.html",    // v1.94.0+
      "workbench.html",        // other versions
    ];

    for (const electronBase of electronBaseCandidates) {
      for (const htmlFile of htmlCandidates) {
        const fullPath = path.join(base, electronBase, "workbench", htmlFile);
        if (fs.existsSync(fullPath)) {
          return fullPath;
        }
      }
    }
    return null;
  }

  async function patchHtmlFile(enable) {
    // Find the workbench HTML file
    const htmlFile = resolveWorkbenchPath(base);

    if (!htmlFile) {
      vscode.window.showErrorMessage(
        "Synthwave '2077: Could not find workbench HTML file. Your VS Code version may not be supported."
      );
      return;
    }

    try {
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
    } catch (error) {
      vscode.window.showErrorMessage(
        `Synthwave '2077: Failed to modify workbench file. ${error.message}\n\nYou may need to run VS Code with administrator/root privileges.`
      );
    }
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
