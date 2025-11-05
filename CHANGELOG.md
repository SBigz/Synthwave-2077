# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.8.0] - 2025-11-05

### 🎉 Major Rewrite - Modern Extension Wrapper Approach

This release completely reimplements how neon effects are managed, using a modern, maintainable approach that delegates CSS injection to the well-maintained Custom CSS and JS Loader extension.

### Added
- **Extension Wrapper Architecture**: Smart integration with Custom CSS and JS Loader
- **Three Glow Intensity Levels**: Low, Medium (default), and High intensity options
- **Intelligent Auto-Detection**: Automatically detects theme activation and prompts for neon effects
- **Interactive Status Dashboard**: New command to check neon status with actionable options
- **One-Click Installation**: Automated Custom CSS Loader installation from within the extension
- **Smart Notifications**: Context-aware prompts that guide users through setup
- **Intensity Picker**: Quick-pick menu to change glow intensity on the fly
- **Auto-Enable Option**: Automatically enable neon when theme is activated
- **Suppress Warnings**: Option to disable repeated installation prompts
- **Comprehensive Documentation**: Complete README with troubleshooting guides

### Changed
- **Complete extension.js rewrite**: New `NeonEffectsManager` class with clean architecture
- **Modular CSS files**: Separated into `neon-effects-low.css`, `neon-effects-medium.css`, `neon-effects-high.css`
- **Better error handling**: Graceful fallbacks and informative error messages
- **Improved UX**: Clear, actionable messages throughout the user journey
- **Commands renamed** for clarity:
  - `synthwave--2077.enable` → `synthwave--2077.enableNeon`
  - `synthwave--2077.disable` → `synthwave--2077.disableNeon`
- **New commands added**:
  - `synthwave--2077.checkStatus` - View complete status dashboard
  - `synthwave--2077.installDependency` - Install Custom CSS Loader
- **Version bump**: 0.7.0 → 0.8.0

### Fixed
- **No more direct file modification**: Delegates to Custom CSS Loader for better stability
- **Better VSCode update resilience**: Less likely to break after VSCode updates
- **Improved permissions handling**: Clearer error messages when permissions are insufficient
- **Cross-platform compatibility**: Better path handling for Windows, Mac, Linux

### Configuration
New settings in `package.json`:
- `synthwave2077.neonEffectsEnabled` - Track neon state
- `synthwave2077.autoEnableNeon` - Auto-enable on theme activation
- `synthwave2077.suppressWarnings` - Hide repeated prompts
- `synthwave2077.glowIntensity` - Choose glow intensity (low/medium/high)

### Technical Improvements
- Clean separation of concerns (detection, installation, activation)
- Better TypeScript-ready code structure
- Comprehensive inline documentation
- Activation on `onStartupFinished` for better performance
- Smart URL generation for file:// paths

### Documentation
- Complete README rewrite with installation guides
- Troubleshooting section
- Configuration examples
- Recommended setup guide
- Updated screenshots and descriptions

### Notes for Users
- **Breaking Change**: Old direct file modification approach replaced
- **Action Required**: Users will need to install Custom CSS and JS Loader
- **Benefits**: More stable, easier to maintain, better user experience
- **Migration**: Extension will automatically guide existing users through migration

## [0.7.0] - 2025-11-04

### Added
- Modern VSCode theme color tokens for:
  - Testing interface (`testing.*`)
  - Inline chat and AI assistant (`inlineChat.*`)
  - Command center (`commandCenter.*`)
  - Editor inlay hints (`editorInlayHint.*`)
  - Sticky scroll (`editorStickyScroll.*`)
  - Merge editor (`mergeEditor.*`)
- `.vscodeignore` file for proper extension packaging
- Keywords in `package.json` for better marketplace discoverability
- Gallery banner configuration for marketplace appearance
- NPM scripts for packaging and publishing
- Proper error handling in extension activation
- User confirmation dialog before modifying VSCode files

### Changed
- Updated VSCode engine requirement from `^1.77.0` to `^1.85.0`
- Replaced deprecated `vscode` dev dependency with `@types/vscode` and `@types/node`
- Fixed icon path in `package.json` (removed leading `./`)
- Improved extension.js with better error handling and user warnings
- Enhanced CSS selectors for better compatibility with different VSCode versions
- Renamed theme from "Cyberpunk 2077 rebuild" to "Synthwave '2077" for consistency
- Bumped version from `0.6.0` to `0.7.0`

### Fixed
- Corrected module exports in extension.js to use modern CommonJS format
- Added missing deactivate function
- Improved file existence checks before applying custom styles
- Better error messages when VSCode workbench file cannot be located

### Documentation
- Added detailed comments to CSS file explaining potential version compatibility issues
- Enhanced README references

## [0.4.0] - 2023-05-10

### Modifications

- Inforder color change
