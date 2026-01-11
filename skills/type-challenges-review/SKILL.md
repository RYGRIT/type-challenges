---
name: type-challenges-review
description: 'Review TypeScript type-challenges solutions in this repo when the user says "Review: questions/.../template.ts" or asks for feedback on a specific challenge solution; read the solution file (and its test-cases in the same folder) and provide correctness-focused review without editing files.'
---

# Type Challenges Review

## Overview

Review a specific challenge solution file and provide fast correctness feedback with minimal back-and-forth. Focus on edge cases and type-system behavior rather than style nitpicks.

## Workflow

1) Identify the target path from the user message, usually in this form:
   - `Review: questions/00007-easy-readonly/template.ts`
2) Read the referenced `template.ts`. If it is missing, ask the user to confirm the path.
3) If `template.ts` starts with a block comment that follows the user's note template, review those notes:
   - Check each field for correctness and clarity
   - Call out missing or vague fields and suggest concrete improvements
4) Read `test-cases.ts` in the same folder to infer expected behavior and edge cases.
5) Review for correctness:
   - Check constraints (`extends keyof T`, tuple readonly, etc.)
   - Check conditional/union distribution behavior
   - Check empty tuple or `never` edge cases
6) Respond with review findings:
   - Evaluate the user's notes first (if present), then the solution
   - List issues ordered by severity with file references
   - For each issue, propose a concrete fix or hint (even if the user is stuck)
   - If there is a simpler or more idiomatic solution, say so and show it briefly
   - If no issues, state that explicitly
   - Keep notes concise; do not edit files unless the user asks

## Response Style

- Respond in Chinese.
- Default to a code review: correctness, edge cases, and missing tests come first.
- Do not mention untested edge cases unless they are severe (likely to break correctness) or explicitly requested by the user.
- Use the user-provided path in your references.
- Ask a clarifying question only if the intent or file target is ambiguous.
