# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0] - 2025-11-05

### 🔧 Fixed
- **CRITICAL**: Fixed neon effect not working on modern VS Code versions (1.70+)
  - Updated workbench.html path resolution to support multiple VS Code versions
  - Now supports both `electron-browser` and `electron-sandbox` directories
  - Now supports both `workbench.html` and `workbench.esm.html` files
  - Uses `vscode.env.appRoot` instead of deprecated `require.main.filename`
  - Added robust error handling with descriptive messages

### ✨ Added
- **Semantic Highlighting**: Enabled modern semantic token highlighting
  - Added `semanticHighlighting: true` to theme
  - Added comprehensive `semanticTokenColors` configuration
  - Better syntax highlighting for modern languages (TypeScript, Rust, Go, etc.)
- **Package.json improvements**:
  - Added `activationEvents` for proper extension activation
  - Added 11 keywords for better Marketplace discoverability
  - Added `galleryBanner` for better Marketplace presentation
  - Added npm scripts for packaging and publishing
- **New files**:
  - Added `.vscodeignore` to optimize extension package size
  - Added `AUDIT_REPORT.md` documenting all improvements

### 🔄 Changed
- **Updated dependencies**:
  - Replaced obsolete `vscode@1.1.37` with `@types/vscode@^1.85.0`
  - Added `@types/node@^20.x` for modern Node.js support
- **Updated VS Code engine**: `^1.77.0` → `^1.85.0` (supports 18 months back)
- **Improved metadata**:
  - Enhanced description with "vibrant neon theme with glow effects"
  - Fixed icon path from `./icon.png` to `icon.png`
  - Changed theme name from "Cyberpunk 2077 rebuild" to "Synthwave '2077"
- **Version bump**: 0.6.0 → 0.7.0

### 📝 Documentation
- Complete audit of extension compatibility with VS Code 1.94+ (ESM migration)
- Documented limitations of CSS injection approach
- Improved code comments and error messages

### ⚠️ Important Notes
- **Requires administrator/root privileges** to modify VS Code internal files
- **CSS injection is not officially supported** by VS Code
- Tested with VS Code 1.77+, compatible with 1.85-1.107
- Some CSS selectors may change in future VS Code versions

## [0.6.0] - Date unknown

### Modifications
- Version released but changes not documented

## [0.5.0] - Date unknown

### Modifications
- Version released but changes not documented

## [0.4.0] - 2023-05-10

### Modifications
- Inforder color change
