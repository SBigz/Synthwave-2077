const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

// Constants
const CUSTOM_CSS_EXTENSION_ID = "be5invis.vscode-custom-css";
const CUSTOM_CSS_CONFIG_KEY = "vscode_custom_css.imports";
const EXTENSION_NAME = "Synthwave '2077";
const THEME_NAME = "Synthwave '2077";

/**
 * Extension activation
 */
function activate(context) {
  console.log(`${EXTENSION_NAME} is now active`);

  const neonManager = new NeonEffectsManager(context);

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.enableNeon", async () => {
      await neonManager.enableNeonEffects();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.disableNeon", async () => {
      await neonManager.disableNeonEffects();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.checkStatus", async () => {
      await neonManager.showStatus();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("synthwave--2077.installDependency", async () => {
      await neonManager.installCustomCSSLoader();
    })
  );

  // Listen to theme changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("workbench.colorTheme")) {
        neonManager.onThemeChanged();
      }
    })
  );

  // Check on startup if theme is active
  setTimeout(() => {
    neonManager.checkOnStartup();
  }, 2000);
}

/**
 * Main class to manage neon effects
 */
class NeonEffectsManager {
  constructor(context) {
    this.context = context;
    this.config = vscode.workspace.getConfiguration("synthwave2077");
  }

  /**
   * Get the CSS file path for the selected intensity
   */
  getCSSFilePath() {
    const intensity = this.config.get("glowIntensity", "medium");
    const fileName = `neon-effects-${intensity}.css`;
    return path.join(this.context.extensionPath, "styles", fileName);
  }

  /**
   * Get file:// URL for CSS file
   */
  getCSSFileUrl() {
    const filePath = this.getCSSFilePath();
    return `file://${filePath.replace(/\\/g, "/")}`;
  }

  /**
   * Check if Custom CSS and JS Loader extension is installed
   */
  isCustomCSSInstalled() {
    return vscode.extensions.getExtension(CUSTOM_CSS_EXTENSION_ID) !== undefined;
  }

  /**
   * Check if our CSS is currently active
   */
  isNeonActive() {
    const config = vscode.workspace.getConfiguration();
    const imports = config.get(CUSTOM_CSS_CONFIG_KEY, []);
    const cssUrl = this.getCSSFileUrl();
    return imports.some((url) => url.includes("synthwave-2077") || url === cssUrl);
  }

  /**
   * Check if current theme is Synthwave '2077
   */
  isSynthwaveThemeActive() {
    const config = vscode.workspace.getConfiguration();
    const currentTheme = config.get("workbench.colorTheme");
    return currentTheme === THEME_NAME;
  }

  /**
   * Enable neon effects
   */
  async enableNeonEffects() {
    // Check if Custom CSS Loader is installed
    if (!this.isCustomCSSInstalled()) {
      const choice = await vscode.window.showWarningMessage(
        `${EXTENSION_NAME}: Neon effects require the "Custom CSS and JS Loader" extension.`,
        "Install Extension",
        "Learn More",
        "Cancel"
      );

      if (choice === "Install Extension") {
        await this.installCustomCSSLoader();
      } else if (choice === "Learn More") {
        vscode.env.openExternal(
          vscode.Uri.parse(
            "https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css"
          )
        );
      }
      return;
    }

    // Check if CSS file exists
    const cssPath = this.getCSSFilePath();
    if (!fs.existsSync(cssPath)) {
      vscode.window.showErrorMessage(
        `${EXTENSION_NAME}: CSS file not found at ${cssPath}`
      );
      return;
    }

    // Get current imports
    const config = vscode.workspace.getConfiguration();
    let imports = config.get(CUSTOM_CSS_CONFIG_KEY, []);

    // Remove any old Synthwave 2077 CSS
    imports = imports.filter((url) => !url.includes("synthwave-2077"));

    // Add new CSS URL
    const cssUrl = this.getCSSFileUrl();
    imports.push(cssUrl);

    try {
      // Update configuration
      await config.update(
        CUSTOM_CSS_CONFIG_KEY,
        imports,
        vscode.ConfigurationTarget.Global
      );

      // Mark as enabled in our config
      await vscode.workspace
        .getConfiguration("synthwave2077")
        .update("neonEffectsEnabled", true, vscode.ConfigurationTarget.Global);

      // Trigger Custom CSS reload
      await vscode.commands.executeCommand("extension.updateCustomCSS");

      // Show success message
      const choice = await vscode.window.showInformationMessage(
        "🌃 Wake up Samurai, we have a city to burn! Neon effects enabled. Reload VSCode to see the glow.",
        "Reload Now",
        "Later"
      );

      if (choice === "Reload Now") {
        await vscode.commands.executeCommand("workbench.action.reloadWindow");
      }
    } catch (error) {
      vscode.window.showErrorMessage(
        `${EXTENSION_NAME}: Failed to enable neon effects. ${error.message}`
      );
      console.error(error);
    }
  }

  /**
   * Disable neon effects
   */
  async disableNeonEffects() {
    const config = vscode.workspace.getConfiguration();
    let imports = config.get(CUSTOM_CSS_CONFIG_KEY, []);

    // Remove Synthwave 2077 CSS
    const originalLength = imports.length;
    imports = imports.filter((url) => !url.includes("synthwave-2077"));

    if (originalLength === imports.length) {
      vscode.window.showInformationMessage(
        `${EXTENSION_NAME}: Neon effects are not currently active.`
      );
      return;
    }

    try {
      // Update configuration
      await config.update(
        CUSTOM_CSS_CONFIG_KEY,
        imports,
        vscode.ConfigurationTarget.Global
      );

      // Mark as disabled in our config
      await vscode.workspace
        .getConfiguration("synthwave2077")
        .update("neonEffectsEnabled", false, vscode.ConfigurationTarget.Global);

      // Trigger Custom CSS reload if extension is installed
      if (this.isCustomCSSInstalled()) {
        await vscode.commands.executeCommand("extension.updateCustomCSS");
      }

      // Show success message
      const choice = await vscode.window.showInformationMessage(
        "🥄 There's no spoon. Neon effects disabled. Reload VSCode to see changes.",
        "Reload Now",
        "Later"
      );

      if (choice === "Reload Now") {
        await vscode.commands.executeCommand("workbench.action.reloadWindow");
      }
    } catch (error) {
      vscode.window.showErrorMessage(
        `${EXTENSION_NAME}: Failed to disable neon effects. ${error.message}`
      );
      console.error(error);
    }
  }

  /**
   * Show current status
   */
  async showStatus() {
    const customCSSInstalled = this.isCustomCSSInstalled();
    const neonActive = this.isNeonActive();
    const themeActive = this.isSynthwaveThemeActive();
    const intensity = this.config.get("glowIntensity", "medium");

    const status = `
**${EXTENSION_NAME} Status**

🎨 Theme Active: ${themeActive ? "✅ Yes" : "❌ No"}
⚡ Custom CSS Loader: ${customCSSInstalled ? "✅ Installed" : "❌ Not Installed"}
✨ Neon Effects: ${neonActive ? "✅ Enabled" : "❌ Disabled"}
💫 Glow Intensity: ${intensity.toUpperCase()}

${
  !customCSSInstalled
    ? "\n⚠️ Install Custom CSS and JS Loader to enable neon effects"
    : ""
}
${
  customCSSInstalled && !neonActive && themeActive
    ? "\n💡 Run 'Synthwave 2077: Enable Neon Effects' to activate the glow"
    : ""
}
    `.trim();

    const actions = [];

    if (!customCSSInstalled) {
      actions.push("Install Custom CSS Loader");
    } else if (!neonActive) {
      actions.push("Enable Neon");
    } else {
      actions.push("Disable Neon");
    }

    actions.push("Change Intensity", "Close");

    const choice = await vscode.window.showInformationMessage(
      status,
      { modal: true },
      ...actions
    );

    if (choice === "Install Custom CSS Loader") {
      await this.installCustomCSSLoader();
    } else if (choice === "Enable Neon") {
      await this.enableNeonEffects();
    } else if (choice === "Disable Neon") {
      await this.disableNeonEffects();
    } else if (choice === "Change Intensity") {
      await this.changeIntensity();
    }
  }

  /**
   * Change glow intensity
   */
  async changeIntensity() {
    const current = this.config.get("glowIntensity", "medium");
    const choice = await vscode.window.showQuickPick(
      [
        { label: "Low", description: "Subtle glow effect", value: "low" },
        { label: "Medium", description: "Balanced glow (default)", value: "medium" },
        { label: "High", description: "Intense cyberpunk glow", value: "high" },
      ],
      {
        placeHolder: `Current intensity: ${current}`,
        title: "Select Neon Glow Intensity",
      }
    );

    if (choice && choice.value !== current) {
      await vscode.workspace
        .getConfiguration("synthwave2077")
        .update("glowIntensity", choice.value, vscode.ConfigurationTarget.Global);

      if (this.isNeonActive()) {
        const reload = await vscode.window.showInformationMessage(
          "Intensity changed. Reload to apply changes?",
          "Reload Now",
          "Later"
        );

        if (reload === "Reload Now") {
          // Re-enable with new intensity
          await this.enableNeonEffects();
        }
      } else {
        vscode.window.showInformationMessage(
          `Intensity set to ${choice.value}. Enable neon effects to see changes.`
        );
      }
    }
  }

  /**
   * Install Custom CSS and JS Loader extension
   */
  async installCustomCSSLoader() {
    try {
      await vscode.window.showInformationMessage(
        "Opening Custom CSS and JS Loader in Extensions marketplace...",
        "OK"
      );

      await vscode.commands.executeCommand(
        "workbench.extensions.installExtension",
        CUSTOM_CSS_EXTENSION_ID
      );

      const choice = await vscode.window.showInformationMessage(
        "Custom CSS and JS Loader installed! Reload to activate?",
        "Reload Now",
        "Later"
      );

      if (choice === "Reload Now") {
        await vscode.commands.executeCommand("workbench.action.reloadWindow");
      }
    } catch (error) {
      vscode.window.showErrorMessage(
        `Failed to install extension: ${error.message}`
      );
    }
  }

  /**
   * Called when theme changes
   */
  async onThemeChanged() {
    const themeActive = this.isSynthwaveThemeActive();
    const autoEnable = this.config.get("autoEnableNeon", false);
    const neonActive = this.isNeonActive();

    if (themeActive && autoEnable && !neonActive && this.isCustomCSSInstalled()) {
      await this.enableNeonEffects();
    }
  }

  /**
   * Check on startup
   */
  async checkOnStartup() {
    const suppressWarnings = this.config.get("suppressWarnings", false);
    if (suppressWarnings) {
      return;
    }

    const themeActive = this.isSynthwaveThemeActive();

    if (!themeActive) {
      return;
    }

    const customCSSInstalled = this.isCustomCSSInstalled();
    const neonActive = this.isNeonActive();

    // Theme is active but Custom CSS not installed
    if (!customCSSInstalled) {
      const choice = await vscode.window.showInformationMessage(
        `🌃 ${EXTENSION_NAME} is active! Want to enable neon glow effects?`,
        "Yes, Install",
        "No",
        "Don't Ask Again"
      );

      if (choice === "Yes, Install") {
        await this.installCustomCSSLoader();
      } else if (choice === "Don't Ask Again") {
        await vscode.workspace
          .getConfiguration("synthwave2077")
          .update("suppressWarnings", true, vscode.ConfigurationTarget.Global);
      }
    }
    // Custom CSS installed but neon not active
    else if (!neonActive) {
      const choice = await vscode.window.showInformationMessage(
        `✨ ${EXTENSION_NAME}: Enable neon glow effects?`,
        "Enable",
        "Not Now",
        "Don't Ask Again"
      );

      if (choice === "Enable") {
        await this.enableNeonEffects();
      } else if (choice === "Don't Ask Again") {
        await vscode.workspace
          .getConfiguration("synthwave2077")
          .update("suppressWarnings", true, vscode.ConfigurationTarget.Global);
      }
    }
  }
}

function deactivate() {
  console.log(`${EXTENSION_NAME} is now deactivated`);
}

module.exports = {
  activate,
  deactivate,
};
