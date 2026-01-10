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
3) Read `test-cases.ts` in the same folder to infer expected behavior and edge cases.
4) Review for correctness:
   - Check constraints (`extends keyof T`, tuple readonly, etc.)
   - Check conditional/union distribution behavior
   - Check empty tuple or `never` edge cases
5) Respond with review findings:
   - List issues ordered by severity with file references
   - If no issues, state that explicitly and mention any residual risk or gap
   - Keep notes concise; do not edit files unless the user asks

## Response Style

- Respond in Chinese.
- Default to a code review: correctness, edge cases, and missing tests come first.
- Use the user-provided path in your references.
- Ask a clarifying question only if the intent or file target is ambiguous.
