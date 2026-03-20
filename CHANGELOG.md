# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased / v1.0.0-MVP]

### Added (Features)
- **StateFeedback Components**: Introduced `LoadingSkeleton` (with dynamic marquee text), `ErrorState`, and `EmptyState` to manage AI generation latency and errors gracefully.
- **Custom UI Components**: 
  - Added Radar Chart placeholder for "定位诊断" (Positioning Strategy).
  - Added a vertical Timeline component ("地铁线路图") for the 30-Day Roadmap.
  - Added horizontal swipeable Tabs and a Mobile Mockup layout for the 7-Day Launch Script.
- **AI Reliability**: Implemented a robust `fetchWithRetry` in `AIService` handling timeouts (60s), 429 Too Many Requests, and 5xx Server Errors with exponential backoff.
- **Data Persistence**: Upgraded `LarkService` to support single-table multi-type records, enabling the storage of history, playbook, and prompt_version dynamically.

### Changed
- **Schema Contracts**: Refactored `AgentManager` prompt generation to enforce strict JSON outputs. Implemented a robust `formatProcessResponse` parser with a text-fallback mechanism to prevent UI crashes on malformed AI responses.
- **State Injection**: Fixed a critical bug in `strategy` and `process` pages where hardcoded configurations bypassed user settings. All agent requests now correctly utilize `useAppStore` data.
- **Documentation**: Updated `README.md` to reflect the completed MVP core loop (Plan -> Design -> Code -> Review -> Ship).

### Fixed
- Handled edge cases where AI response contains Markdown code blocks (e.g., ` ```json `).
- Corrected the template variable replacement regex to support fallback values seamlessly.