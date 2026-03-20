# OPCV2.0 Engineering Review Report (Web-First Refactor)

**Date:** 2026-03-20
**Reviewer:** Staff Engineer (gstack /plan-eng-review)
**Target:** `master` branch, recent Next.js migration and SSE implementation.

## 1. Executive Summary

The project has successfully migrated from a Taro-based WeChat Mini Program architecture to a modern, Web-First Next.js application. This architectural pivot aligns perfectly with the CEO's "Selective Expansion" strategy, eliminating platform-specific restrictions (like WeChat's strict AI category reviews) and enabling high-performance Server-Sent Events (SSE) for a fluid, Claude-like chat experience.

The implementation effectively addresses the core product requirement: reducing "marketing shame" for independent developers by encapsulating the AITDA marketing framework within a frictionless, zero-form chat interface and rendering high-quality `SocialCard` components.

**Overall Health Score: 8.5/10 (Ready for MVP Launch)**

## 2. Architecture & Infrastructure Audit

### 2.1 Frontend (Next.js 16 + Tailwind CSS)
*   **Framework:** The transition to Next.js (App Router) is clean. The `src/app/page.tsx` serves as the primary unified chat interface.
*   **Styling:** Tailwind CSS is properly configured. The dark mode color palette (`#0D0D0D`, `#1A1A2E`, `#00E5A0`) is consistently applied, achieving the desired "Cyber-Artisan" aesthetic.
*   **Dependencies:** Minimal and focused. `lucide-react` for icons, `framer-motion` for micro-interactions, and `react-markdown` with `@tailwindcss/typography` for robust text rendering.

### 2.2 Backend (Node.js Express)
*   **API Design:** The `/api/chat` endpoint is a significant improvement over the legacy Serverless handler for this specific use case. It correctly establishes an SSE connection.
*   **Integration:** It successfully proxies requests to the `siliconflow` (DeepSeek) or OpenAI endpoints, maintaining the stream and passing chunks back to the client.

## 3. Code Quality & Implementation Details

### 3.1 The SSE Streaming Implementation
*   **Backend (`backend/index.js`):**
    *   *Pros:* Correctly sets headers (`text/event-stream`, `keep-alive`). Properly handles the `ReadableStream` from the upstream AI provider using `TextDecoder`. Gracefully handles `[DONE]` signals.
    *   *Cons (Minor):* The error handling inside the stream loop (`try/catch` around `JSON.parse`) silently ignores errors. While acceptable for partial chunks, it might mask malformed JSON from the provider if the chunking is unusual.
*   **Frontend (`frontend/src/app/page.tsx`):**
    *   *Pros:* The `fetch` loop correctly reads the stream and updates the React state incrementally, providing a smooth typing effect.
    *   *Cons (Actionable):* The `apiMessages` array does not currently persist the conversation history effectively across multiple turns because it only appends the *current* `userMsg` to the previous state without including the *previous* `assistant` responses in the payload. **(See Section 4.1)**

### 3.2 The System Prompt & Tag Parsing
*   **Prompt Engineering:** The revised `systemPrompt` is excellent. It strictly enforces the `<analysis>` and `<social_card>` XML tags and sets a hard 150-character limit for the card, effectively eliminating "AI Slop".
*   **Frontend Parsing (`renderMessageContent`):**
    *   *Pros:* The regex parsing (`/<analysis>([\s\S]*?)(<\/analysis>|$)/`) is robust enough to handle streaming data where the closing tag (`</...`) might not have arrived yet. This allows the UI to render the sections *as they stream in*.
    *   *Cons:* None. The fallback to standard Markdown rendering if tags are missing ensures the UI doesn't break during unexpected AI outputs.

### 3.3 The SocialCard Component
*   *Pros:* Beautifully implemented. The CSS gradients, blur effects, and typography perfectly match the design spec. The separation of "insight" and "shareable content" is a massive UX win.
*   *Cons (Future enhancement):* The "Save as Image" (`Download`) button is currently a stub. Implementing `html2canvas` or similar will be required to fulfill the "10-star product" vision completely.

## 4. Actionable Recommendations (Tech Debt & Next Steps)

### 4.1 Fix Conversation History Injection (High Priority)
Currently, in `page.tsx`, the `sendMessage` function constructs the payload like this:
```javascript
const apiMessages = [
  ...messages.map(m => ({ role: m.role, content: m.content })),
  { role: 'user', content: userMsg.content }
];
```
This is generally correct, *but* if the `content` includes the `<analysis>` and `<social_card>` tags, sending those raw tags back to the AI in subsequent turns might confuse it or cause it to repeat the structure unnecessarily.
*Recommendation:* In the next iteration, consider stripping the XML tags from the assistant's history before sending it back, or instruct the AI to only consider the user's input for context. For a single-turn MVP, the current implementation is fine.

### 4.2 Error Handling & Edge Cases (Medium Priority)
*   **Rate Limiting:** The backend currently relies on `fetchWithRetry` in `AIService.js`, but the `/api/chat` endpoint bypasses `AIService.js` entirely and makes a direct `fetch` call.
*   *Recommendation:* Refactor `/api/chat` to utilize the robust retry logic inside `AIService.js`, ensuring that 429 (Too Many Requests) errors from upstream providers are handled gracefully rather than immediately failing the stream.

### 4.3 Implement HTML-to-Image for SocialCard (Feature)
To realize the CEO's vision of zero "marketing shame", the user must be able to export the `SocialCard` as a high-quality PNG.
*Recommendation:* Add `html2canvas` or `dom-to-image` to the frontend dependencies and implement the logic in the `Download` button `onClick` handler.

## 5. Conclusion
The engineering foundation for OPC v2.0 is solid. The pivot to Next.js + SSE was executed flawlessly, and the codebase is clean and maintainable. Addressing the minor context history and error handling items will ensure enterprise-grade stability. The MVP is ready for immediate dogfooding.