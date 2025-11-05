# Synthwave '2077 - VS Code Theme

![Synthwave '2077 Banner](77.png)

## 🌃 When Cyberpunk 2077 meets Synthwave '84

Get ready to dive into a futuristic, dystopian world with the **Synthwave '2077** VS Code theme! This theme combines the neon-soaked aesthetic of Cyberpunk 2077 with the retro-futuristic vibes of [Synthwave '84](https://github.com/robb0wen/synthwave-vscode).

### ✨ Key Features

- **Vibrant neon colors** inspired by the '80s and Cyberpunk 2077 aesthetic
- **Optional glow effects** that make your code shine (with 3 intensity levels!)
- **Modern implementation** using the Custom CSS and JS Loader extension
- **Smart activation** with automatic detection and user-friendly prompts
- **Fully customizable** with multiple glow intensity options
- **Compatible** with most programming languages
- **Cross-platform** support (Windows, macOS, Linux)

---

## 📦 Installation

### Quick Install (Recommended)

1. **Install the theme** from the VS Code Marketplace:
   - Open VS Code
   - Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Search for "Synthwave '2077"
   - Click Install

2. **Activate the theme**:
   - Press `Ctrl+K Ctrl+T` (`Cmd+K Cmd+T` on Mac)
   - Select "Synthwave '2077"

3. **Enable neon effects** (optional but recommended):
   - A notification will appear asking if you want to enable neon effects
   - Click "Yes, Install" to automatically install the required extension
   - Follow the prompts to reload VS Code

### Manual Installation

If you prefer manual control:

1. Install the theme (same as above)
2. Install [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)
3. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
4. Type "Synthwave 2077: Enable Neon Effects"
5. Reload VS Code when prompted

---

## ⚡ Neon Effects Setup

### What are Neon Effects?

Neon effects add beautiful glowing text-shadows to your code, giving it that authentic cyberpunk feel. This feature requires the **Custom CSS and JS Loader** extension to work.

### Available Commands

Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and use:

- `Synthwave 2077: Enable Neon Effects` - Turn on the glow
- `Synthwave 2077: Disable Neon Effects` - Turn off the glow
- `Synthwave 2077: Check Neon Status` - See current configuration
- `Synthwave 2077: Install Neon Effects` - Install Custom CSS Loader

### Glow Intensity Levels

Choose your perfect glow intensity in VS Code settings:

**Low** - Subtle glow, better performance
```json
"synthwave2077.glowIntensity": "low"
```

**Medium** - Balanced glow (default)
```json
"synthwave2077.glowIntensity": "medium"
```

**High** - Maximum cyberpunk intensity!
```json
"synthwave2077.glowIntensity": "high"
```

---

## 🎨 Screenshots

### Without Neon Effects
![Preview without neon](preview1.png)

### With Neon Effects (Medium)
![Preview with neon](preview2.png)

### High Intensity Glow
![High intensity](preview3.png)

### Full IDE View
![Full view](preview4.png)

---

## ⚙️ Configuration

### Extension Settings

This extension contributes the following settings:

* `synthwave2077.neonEffectsEnabled` - Enable/disable neon glow effects
* `synthwave2077.autoEnableNeon` - Automatically enable neon when theme is activated
* `synthwave2077.suppressWarnings` - Suppress installation prompts
* `synthwave2077.glowIntensity` - Glow intensity level (low/medium/high)

### Example Configuration

Add to your `settings.json`:

```json
{
  "workbench.colorTheme": "Synthwave '2077",
  "synthwave2077.glowIntensity": "medium",
  "synthwave2077.autoEnableNeon": true
}
```

---

## ⚠️ Important Notes

### About the "Installation Corrupt" Warning

When you enable neon effects, VS Code may show a warning that your installation appears corrupt. **This is expected and safe.** The Custom CSS and JS Loader extension modifies VS Code's internal files to inject custom styles.

**To remove the warning:**
- Follow [these instructions](https://github.com/be5invis/vscode-custom-css#getting-started)
- Or simply ignore it - your installation is not actually corrupted!

### After VS Code Updates

You may need to re-enable neon effects after VS Code updates. This is normal - just run the "Enable Neon Effects" command again.

### Performance

High-intensity glow effects may impact performance on slower machines. If you experience lag:
1. Try a lower intensity level (`synthwave2077.glowIntensity": "low"`)
2. Or disable neon effects entirely

---

## 🔧 Troubleshooting

### Neon effects not working?

1. **Check if Custom CSS Loader is installed**:
   - Go to Extensions
   - Search for "Custom CSS and JS Loader"
   - Make sure it's installed and enabled

2. **Run the status check**:
   ```
   Ctrl+Shift+P > Synthwave 2077: Check Neon Status
   ```

3. **Try re-enabling**:
   ```
   Ctrl+Shift+P > Synthwave 2077: Disable Neon Effects
   Ctrl+Shift+P > Synthwave 2077: Enable Neon Effects
   Reload VS Code
   ```

4. **Check permissions**:
   - On some systems, VS Code needs elevated permissions
   - Try running VS Code as administrator (Windows) or with sudo (Linux/Mac)

### Theme colors look wrong?

1. Make sure "Synthwave '2077" is selected as your color theme
2. Disable other theme-related extensions temporarily
3. Check your `settings.json` for conflicting theme customizations

### More Help?

- [Open an issue](https://github.com/SBigz/Synthwave-2077/issues)
- [Email us](mailto:contact@codesacha.xyz)
- Check the [Troubleshooting Guide](./TROUBLESHOOTING.md)

---

## 🎯 Recommended Setup

For the full cyberpunk experience:

1. **Font**: [Fira Code](https://github.com/tonsky/FiraCode) with ligatures
   ```json
   "editor.fontFamily": "'Fira Code', Consolas, monospace",
   "editor.fontLigatures": true
   ```

2. **Terminal**: Install [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) with a synthwave theme

3. **Icons**: [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

4. **Cursor**: Smooth cursor animation
   ```json
   "editor.cursorBlinking": "smooth",
   "editor.cursorSmoothCaretAnimation": "on"
   ```

---

## 🤝 Contributing

Feedback, suggestions, and contributions are welcome!

- Found a bug? [Report it](https://github.com/SBigz/Synthwave-2077/issues)
- Have an idea? [Share it](https://github.com/SBigz/Synthwave-2077/discussions)
- Want to contribute? Check our [Contributing Guide](./CONTRIBUTING.md)

---

## 📜 License

This theme is released under the [MIT License](LICENSE.txt).

---

## 🙏 Credits

This theme wouldn't exist without:

- **[Cyberpunk 2077](https://github.com/carlos18mz/Cyberpunk-2077-rebuild)** by [carlos18mz](https://github.com/carlos18mz) - Color inspiration
- **[Synthwave '84](https://github.com/robb0wen/synthwave-vscode)** by [robbOwen](https://github.com/robb0wen) - Original neon implementation concept
- **CD Projekt Red** - Cyberpunk 2077 game aesthetic
- **[Custom CSS and JS Loader](https://github.com/be5invis/vscode-custom-css)** by be5invis - Makes neon effects possible

---

## 💖 Support

If you enjoy this theme:

- ⭐ Star this repository
- 🔁 Share it with fellow developers
- 💬 Rate it on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=CodeSacha.synthwave--2077)
- ☕ [Buy me a coffee](https://www.buymeacoffee.com/codesacha) (optional!)

---

## 🚀 Other Projects

Check out my other VS Code extension:

**[CommentsAI](https://github.com/SBigz/CommentsAI)** - Automatic code commenting with advanced AI capabilities

---

<p align="center">
  <strong>Wake up Samurai, we have a city to burn! 🌃🔥</strong>
</p>

<p align="center">
  Made with 💜 by <a href="https://github.com/SBigz">CodeSacha</a>
</p>
