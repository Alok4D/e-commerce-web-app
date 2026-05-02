# 🚀 Project Development Rules (Production Grade)

This file defines how AI (Cursor + MCP tools) must behave in this project.
Goal: Clean, scalable, production-ready frontend with consistent architecture.

---

# 🧠 1. Core Development Philosophy

- Always prioritize production-ready, scalable code.
- Follow existing project architecture strictly.
- Do not introduce unnecessary complexity.
- Prefer reusable, component-based design.
- Keep separation of concerns (UI, State, API, Logic).
- Never modify unrelated files.
- Always prefer official documentation over assumptions.

---

# 🧱 2. Project Architecture (Strict)

## Folder Structure Rules

Follow feature-based architecture:

/app → Next.js routes (App Router)
/components → Reusable UI components
/features → Feature-based modules (recommended)
/redux → Global state management
/services → API layer (Postman MCP output)
/hooks → Custom hooks
/utils → Helper functions
/types → TypeScript types/interfaces

## Folder Safety Rules

- Do not create random folders without checking existing structure.
- Follow existing naming conventions strictly.
- Reuse existing modules before creating new ones.

---

# 🎨 3. Figma MCP (UI Rules)

## Design Source of Truth

- Figma is the ONLY source of UI truth.
- Always follow pixel-perfect design implementation.
- Match spacing, typography, colors exactly.

## Component Rules

- Break UI into reusable components.
- Avoid large monolithic components.
- Each UI section should be a separate component.

## Styling Rules

- Use TailwindCSS only.
- No inline styles unless necessary.
- Avoid hardcoded values → use design system approach.
- Reuse existing design system tokens whenever possible.

## Responsiveness

- Mobile-first approach.
- Ensure full responsiveness (mobile, tablet, desktop).

---

# 🔌 4. Postman MCP (API Rules)

## API Handling

- Always use Postman MCP as the source of truth for APIs.
- Never guess endpoints, request body, or response shape.

## API Layer Architecture

- All API calls must go through `/services` layer.
- Components must NOT directly call APIs.

## Type Safety

- Generate TypeScript interfaces for all API responses.
- Enforce strict typing (no `any` usage unless unavoidable).

## Error Handling

- Handle all API errors properly (try/catch or RTK handling).
- Show meaningful error states in UI.

---

# 🧠 5. Redux (State Management Rules)

## Core Principle

- Redux Toolkit (RTK) is the single source of truth for global state.

## Use Redux for:

- Authentication (user, token, session)
- API fetched data (server state)
- Shared UI state (modals, sidebar, theme)
- Cross-page data sharing

## Do NOT use Redux for:

- Local form state
- Temporary UI states
- Single component state

## API Flow

- Prefer RTK Query for API state management.
- Use Redux Thunks only when necessary.
- No direct API calls inside components.

## Slice Design

- Each feature must have its own slice.
- Keep slices small, modular, and reusable.

---

# 📁 6. Filesystem MCP Rules

## Project Awareness

- Always analyze existing project structure before changes.
- Understand dependencies before editing any file.

## File Modification Rules

- Prefer editing existing files over creating new ones.
- Avoid unnecessary restructuring.
- Never touch unrelated modules.

## Safety Rules

- Make minimal, focused changes only.
- Ensure backward compatibility.

---

# 📚 7. Context7 MCP (Documentation Rules)

## Documentation Source of Truth

- Always use Context7 MCP for framework, library, and package documentation.
- Prefer official and latest documentation over memory-based assumptions.

## Use Context7 For

- Next.js latest App Router patterns
- React best practices
- TailwindCSS utilities and latest syntax
- TypeScript typing patterns
- Redux Toolkit / RTK Query usage
- shadcn/ui usage patterns
- third-party package integration
- library setup and configuration

## Never Do

- Never assume package API from memory
- Never use outdated syntax without checking documentation
- Never implement deprecated patterns

## Best Practice

- Verify syntax before implementation
- Follow latest stable documentation standards
- Match project code with latest recommended official patterns

---

# ⚙️ 8. Component-Based Architecture Rules

## Component Design

- Each component must have a single responsibility.
- Reusable components go into `/components`.
- Feature-specific components go into `/features`.

## Naming Convention

- Use PascalCase for components.
- Use descriptive names (e.g. UserProfileCard, not Card1).

## Props Design

- Keep props minimal and clean.
- Avoid deeply nested props.
- Use TypeScript interfaces for props.

---

# 🚀 9. Workflow Rules (VERY IMPORTANT)

## MCP Tool Priority Order

When multiple sources exist:

1. Figma MCP → UI decisions
2. Postman MCP → API structure
3. Context7 MCP → official documentation and package usage
4. Filesystem MCP → project context and safe editing

Never override MCP data with assumptions.

---

## Before coding:

1. Analyze Figma design / Postman API / Context7 docs / codebase
2. Explain implementation plan
3. Identify required components, state, and API flow
4. Confirm approach before major changes

## While coding:

- Follow existing architecture strictly
- Reuse components whenever possible
- Keep code clean and readable
- Verify library usage through Context7 when needed

---

# ❌ Strictly Avoid

- Do not “improve entire project”
- Do not rewrite unrelated files
- Do not create random architecture
- Do not bypass Redux rules
- Do not hardcode API or UI values
- Do not skip TypeScript typing
- Do not assume library syntax without checking Context7
- Do not use deprecated package patterns

---

# 💡 10. Code Quality Standards

- Clean, readable, maintainable code
- Strict TypeScript usage
- No unnecessary re-renders
- Performance-aware implementation
- Consistent folder structure
- Official documentation aligned implementation

---

# Workflow Optimization Rule

- Each new feature/task should be handled in a fresh chat.
- Do not accumulate unrelated tasks in one session.
- Large context increases mistakes and token waste.

---

# No Assumption Rule

- Never assume API structure, UI behavior, package usage, or file logic.
- Always verify using MCP tools before implementation.

---

# 🎯 Final Goal

- Pixel-perfect UI from Figma
- Clean API integration via Postman MCP
- Scalable Redux architecture
- Verified implementation using Context7 documentation
- Fully reusable component system
- Production-ready frontend application