# Troubleshooting Guide - Synthwave '2077

## Common Issues and Solutions

### 1. ❌ "Failed to install extension" Error

**Error Message:**
```
Failed to install extension: The extension 'be5invis.vscode-custom-css' cannot be installed because it was not found.
```

**Solution:**

The automatic installation doesn't always work due to VSCode API limitations. Here are 3 ways to manually install:

#### Method 1: Extensions Panel (Recommended)

1. Open Extensions panel: `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
2. Search for: **"Custom CSS and JS Loader"**
3. Look for the extension by **be5invis** (important - this is the correct publisher!)
4. Click **Install**
5. Reload VS Code when prompted
6. Run command: `Synthwave 2077: Enable Neon Effects`

#### Method 2: Command Palette

1. Open Command Palette: `Ctrl+Shift+P` / `Cmd+Shift+P`
2. Type: `Extensions: Install Extensions`
3. Search: **"Custom CSS and JS Loader be5invis"**
4. Install the extension
5. Reload VS Code
6. Run: `Synthwave 2077: Enable Neon Effects`

#### Method 3: Direct Marketplace Link

1. Open this link in your browser: https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css
2. Click **Install**
3. Your browser will ask to open VS Code - click **Yes**
4. VS Code will open and install the extension
5. Reload when prompted
6. Run: `Synthwave 2077: Enable Neon Effects`

---

### 2. ⚠️ "Installation Corrupt" Warning

**What it is:**
After enabling neon effects, VS Code shows a warning that your installation appears corrupt.

**Why it happens:**
The Custom CSS and JS Loader extension modifies VS Code's internal CSS files to inject custom styles. This triggers VS Code's integrity check.

**Is it safe?**
Yes! Your installation is not actually corrupted. This is expected behavior when using custom CSS.

**Solutions:**

#### Option A: Ignore It
The warning is harmless. You can safely dismiss it.

#### Option B: Suppress the Warning

1. Open the Custom CSS and JS Loader README
2. Follow the instructions to fix the checksum
3. OR install this extension: https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums

---

### 3. 🎨 Neon Effects Not Showing

**Checklist:**

1. **Is Custom CSS Loader installed?**
   ```
   Ctrl+Shift+P > Synthwave 2077: Check Neon Status
   ```
   Look for "Custom CSS Loader: ✅ Installed"

2. **Are neon effects enabled?**
   ```
   Ctrl+Shift+P > Synthwave 2077: Check Neon Status
   ```
   Look for "Neon Effects: ✅ Enabled"

3. **Did you reload VS Code?**
   After enabling neon, you MUST reload:
   ```
   Ctrl+Shift+P > Developer: Reload Window
   ```

4. **Is the theme active?**
   ```
   Ctrl+K Ctrl+T > Select "Synthwave '2077"
   ```

5. **Try re-enabling:**
   ```
   Ctrl+Shift+P > Synthwave 2077: Disable Neon Effects
   (reload)
   Ctrl+Shift+P > Synthwave 2077: Enable Neon Effects
   (reload)
   ```

---

### 4. 🐌 Performance Issues / Lag

**Problem:**
Text rendering is slow, scrolling lags, or editor feels sluggish.

**Solutions:**

#### Reduce Glow Intensity

1. Open Settings: `Ctrl+,` / `Cmd+,`
2. Search: `synthwave2077.glowIntensity`
3. Change to **"low"**
4. Run: `Synthwave 2077: Enable Neon Effects` (to reload with new intensity)
5. Reload VS Code

#### Or via settings.json:
```json
{
  "synthwave2077.glowIntensity": "low"
}
```

#### Disable Neon Effects Entirely

If even "low" is too heavy:
```
Ctrl+Shift+P > Synthwave 2077: Disable Neon Effects
```

You'll still have the beautiful color theme, just without the glow.

---

### 5. 🔄 Effects Stopped After VS Code Update

**Problem:**
Neon effects were working but disappeared after updating VS Code.

**Why:**
VS Code updates can overwrite the modified CSS files.

**Solution:**

Simply re-enable:
```
Ctrl+Shift+P > Synthwave 2077: Enable Neon Effects
```

Reload when prompted. That's it!

---

### 6. 🔐 Permission Denied Errors

**Error:**
```
Failed to apply neon effects. EACCES: permission denied
```

**Solution:**

The Custom CSS Loader needs write access to VS Code's installation files.

#### Windows:
Run VS Code as Administrator:
1. Right-click VS Code icon
2. Select "Run as administrator"
3. Try enabling neon effects again

#### Mac:
```bash
sudo chown -R $(whoami) /Applications/Visual\ Studio\ Code.app/Contents/Resources/app/out
```

Then try again.

#### Linux:
```bash
sudo chown -R $(whoami) /usr/share/code/resources/app/out
```

Or if using VSCodium:
```bash
sudo chown -R $(whoami) /usr/share/codium/resources/app/out
```

---

### 7. 🎨 Colors Look Wrong

**Problem:**
Theme colors don't match screenshots.

**Checklist:**

1. **Correct theme selected?**
   ```
   Ctrl+K Ctrl+T > Make sure "Synthwave '2077" is selected
   ```

2. **No conflicting theme customizations?**
   Check your `settings.json` for:
   - `workbench.colorCustomizations`
   - `editor.tokenColorCustomizations`

   These might override the theme. Try temporarily removing them.

3. **Other theme extensions?**
   Disable other theme-related extensions temporarily:
   ```
   Extensions panel > Search "@category:themes" > Disable others
   ```

---

### 8. 📁 CSS File Not Found Error

**Error:**
```
Synthwave '2077: CSS file not found at [path]
```

**Solution:**

The extension files may be corrupted. Try:

1. **Reinstall the extension:**
   ```
   Extensions panel > Synthwave '2077 > Uninstall
   Then reinstall from marketplace
   ```

2. **Check installation:**
   ```
   Ctrl+Shift+P > Developer: Show Installed Extensions
   ```
   Make sure Synthwave '2077 is listed.

---

## Still Need Help?

If none of these solutions work:

1. **Check Neon Status:**
   ```
   Ctrl+Shift+P > Synthwave 2077: Check Neon Status
   ```
   Take a screenshot of the status modal

2. **Check Extensions:**
   - List installed extensions
   - Check for conflicts

3. **Get Support:**
   - [Open an issue](https://github.com/SBigz/Synthwave-2077/issues) with:
     - Your VS Code version (`Help > About`)
     - Your OS
     - Screenshot of the error
     - Screenshot of Neon Status
   - Or email: contact@codesacha.xyz

---

## Useful Commands

All commands are accessible via Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

```
Synthwave 2077: Enable Neon Effects
Synthwave 2077: Disable Neon Effects
Synthwave 2077: Check Neon Status
Synthwave 2077: Install Neon Effects (Custom CSS Loader)
```

---

## Quick Links

- [Main README](./README.md)
- [Changelog](./CHANGELOG.md)
- [Custom CSS and JS Loader Extension](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)
- [Report an Issue](https://github.com/SBigz/Synthwave-2077/issues)

---

<p align="center">
  <strong>Remember: Wake up Samurai, we have a city to burn! 🌃🔥</strong>
</p>
