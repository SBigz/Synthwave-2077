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
    try {
      // Check if the HTML file exists
      if (!fs.existsSync(htmlFile)) {
        vscode.window.showErrorMessage(
          "Synthwave 2077: Unable to locate VSCode workbench file. This feature may not work in your VSCode version."
        );
        return;
      }

      // Check if style file exists
      if (enable && !fs.existsSync(styleFilePath)) {
        vscode.window.showErrorMessage(
          "Synthwave 2077: Unable to locate custom styles file."
        );
        return;
      }

      // Show warning about modification
      if (enable) {
        const choice = await vscode.window.showWarningMessage(
          "Synthwave 2077: This will modify VSCode's internal files. VSCode may show 'Installation Corrupt' warnings. Continue?",
          "Yes", "No"
        );

        if (choice !== "Yes") {
          return;
        }
      }

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

      // Show success message and reload
      if (enable) {
        vscode.window.showInformationMessage(
          "Wake up Samurai, we have a city to burn! VSCode will now reload."
        );
      } else {
        vscode.window.showInformationMessage(
          "There's no spoon. VSCode will now reload."
        );
      }

      // Reload VS Code window
      await vscode.commands.executeCommand('workbench.action.reloadWindow');

    } catch (error) {
      vscode.window.showErrorMessage(
        `Synthwave 2077: Failed to apply neon effects. ${error.message}\n\nYou may need to run VSCode with elevated permissions.`
      );
      console.error("Synthwave 2077 error:", error);
    }
  }

  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.disable", async () => {
      await patchHtmlFile(false);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.enable", async () => {
      await patchHtmlFile(true);
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
