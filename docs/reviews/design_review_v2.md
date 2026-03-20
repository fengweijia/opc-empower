# OPCV2.0 Design Review Report (gstack /plan-design-review)

**Date:** 2026-03-20
**Reviewer:** Design Lead (gstack)
**Target:** Web-First Chat UI & SocialCard Component

## 1. AI Slop Detection (Strict Slop Definition)

**Current Score:** 9/10

**What is a 10/10?**
A 10/10 under the "Strict Slop Definition" means the AI response contains absolutely ZERO generic filler words (no "在这个瞬息万变的时代", no "总而言之", no "毫无疑问"). It must read like it was written by a slightly cynical, highly experienced human developer. The structure must perfectly separate actionable insight from shareable content without any metadata leakage (e.g., printing "标题：" in the output).

**Current State Analysis:**
*   **Pros:** The implementation of the `<analysis>` and `<social_card>` XML tags effectively forces the AI to structure its thoughts. The backend system prompt explicitly bans specific cliché phrases. The hard limit of 150 characters for the card content forces brevity.
*   **Cons (Why it's a 9):** While we ban *specific* phrases, LLMs can be creative in finding new clichés. Furthermore, the AI might still occasionally output structural prefixes like "[痛点]" inside the `<social_card>` despite instructions not to.

**Plan to reach 10/10:**
1.  **Regex Scrubbing:** Add a post-processing regex step in the frontend or backend to automatically strip out common prefixes like `^标题：`, `^正文：`, `^CTA：` if the AI disobeys the prompt.
2.  **Negative Few-Shot Examples:** Update the `systemPrompt` in `backend/index.js` to include a "What NOT to do" example, showing exactly what a "Slop" response looks like and explicitly forbidding that style.

## 2. Interactive Validation (Mandatory Human Vibe Check)

**Current Score:** 8/10

**What is a 10/10?**
A 10/10 under the "Mandatory Human Vibe Check" means the system doesn't just passively render the card; it actively forces the user into a feedback loop. Before the user can generate their *next* card, the system asks: "Did this sound like you? (Yes/Too Salesy/Too Boring)". This closes the data flywheel loop mentioned in the original spec.

**Current State Analysis:**
*   **Pros:** The `SocialCard` renders beautifully. The "Copy" and "Download as Image" buttons are highly interactive and provide immediate utility, bypassing the need for the user to manually screenshot.
*   **Cons (Why it's an 8):** The feedback mechanism currently relies on passive, tiny Thumbs Up/Down icons at the bottom of the message. A user who feels the "vibe" is wrong might just abandon the app instead of clicking the thumb down. There is no forced "vibe check" gate.

**Plan to reach 10/10:**
1.  **Vibe Check Gate:** Implement an interactive prompt *after* the `SocialCard` finishes streaming. The UI should display: *"Is this ready to post?"* with options: `[Yes, it's perfect]`, `[Make it more technical]`, `[Make it less salesy]`.
2.  **Auto-Iteration:** Clicking one of those options should automatically send a pre-filled hidden prompt to the AI to re-generate the `<social_card>` portion based on that specific vibe correction.

## 3. Execution Plan (Next Steps)

Based on this design review, the following engineering tasks should be queued for the next build cycle to push both dimensions to a perfect 10/10:

*   **[Action Item 1: Anti-Slop Regex]** Update `page.tsx` parsing logic to strip structural prefixes from the `cardContent`.
*   **[Action Item 2: Vibe Check Component]** Build a `VibeCheck` React component that appears below the `SocialCard` and triggers auto-regenerations based on tone.