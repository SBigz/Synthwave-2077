# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
