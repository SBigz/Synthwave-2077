const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

let isEnabled = true;

function activate(context) {
  const styleFilePath = path.join(
    context.extensionPath,
    "styles",
    "custom-style.css"
  );

  function updateStyles() {
    const styleTag = document.getElementById("custom-style");

    if (isEnabled) {
      if (!styleTag) {
        fs.readFile(styleFilePath, "utf8", (err, data) => {
          if (err) {
            console.error("Error reading custom-style.css:", err);
            return;
          }
          const newStyleTag = document.createElement("style");
          newStyleTag.type = "text/css";
          newStyleTag.id = "custom-style";
          newStyleTag.innerHTML = data;
          document.head.appendChild(newStyleTag);
        });
      }
    } else {
      if (styleTag) {
        styleTag.remove();
      }
    }
  }
  context.subscriptions.push(
  vscode.commands.registerCommand("synthwave--2077.disable", () => {
    isEnabled = false;
    vscode.window.showInformationMessage("There's no spoon");
  })
);

context.subscriptions.push(
  vscode.commands.registerCommand("synthwave--2077.enable", () => {
    isEnabled = true;
    vscode.window.showInformationMessage("Wake up Samurai, we have a city to burn");
  })
);

}

exports.activate = activate;
