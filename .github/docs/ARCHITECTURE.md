#  Project Architectural Conventions

This document defines the foundational principles that guide the structure, naming, accessibility, and maintainability of the project. These conventions ensure that every part of the codebase remains consistent, scalable, understandable, and easy to collaborate on—regardless of the underlying technologies.

---

## 1. 🧭 Core Architectural Philosophy

The project follows a clear separation of responsibilities backed by modern programming best practices:

- **SOLID Principles**
- **Clean Code**
- **Object-Oriented Design (OOP)**
- **DRY (Don’t Repeat Yourself)**

These principles shape every decision—from folder structure to naming rules—ensuring a predictable and robust codebase.

---

## 2. 🗂️ Project Structure & Domain Separation

### 2.1 Physical Structure

The project uses a standardized three-tier directory layout:

- **PUBLIC** — Web-facing files such as `index.html`.
- **SRC** — Source files that require compilation or processing.
- **DIST/BUILD** — Final optimized output delivered to users.

### 2.2 Conceptual Layers

Beyond folders, the project is organized using conceptual dependency labels:

| Layer      | Responsibilities                                   | Dependency Rules                                      |
|-----------|-----------------------------------------------------|-------------------------------------------------------|
| **SHARED**  | Low-level utilities, helpers, reusable components. | Imports nothing; exported by everything.              |
| **FEATURES** | Encapsulated business logic or domain modules.     | Imports from **SHARED**; exported to **APP**.         |
| **APP**     | Main application setup, orchestrates everything.    | Imports from **SHARED** and **FEATURES**; exports nothing. |

This ensures controlled coupling and predictable code flow.

### 2.3 Semantic Folder Roles

To keep navigation intuitive, common folder names follow consistent meanings:

- **App** — Application entry points and configuration.
- **Components** — Generic UI components.
- **Data** — Data mocking, fetching, or static objects.
- **Features** — Modular, domain-specific logic.
- **Utils** — State and effect management (custom hooks, helpers).
- **Lib** — Framework-agnostic helpers or modules.
- **Api** — API definitions, endpoints, request logic.
- **Tasks** — Scripts and automation utilities.

---

## 3. 🧩 Naming Conventions

Consistent naming ensures clarity and prevents ambiguity throughout the project.

### 3.1 Folder & File Naming

- **Folders:** `kebab-case`
- **Components:** `PascalCase`
- **Utilities & Scripts:** `camelCase` or `kebab-case`
- **Constants:** `SCREAMING_SNAKE_CASE`
- **Co-location:** Component styles, tests, and related files live inside the component's own folder.

### 3.2 CSS (BEM Methodology)

The project strictly follows **BEM** for CSS class naming:

- **Block:** `.block`
- **Element:** `.block__element`
- **Modifier:** `.block--modifier`
- **Case:** Always `kebab-case`.
- **Purpose over appearance:** Name what it *is*, not what it *looks like*.
- **IDs are for JS/A11y only**, never for styling.

---

## 4. 🎯 HTML IDs & Accessibility (ARIA)

### 4.1 ID Rules

- IDs must be **unique** within the entire document.
- Use **camelCase** or **kebab-case** consistently.
- Form input `id` values must match their associated `<label for="">` attribute.

### 4.2 ARIA Priorities

Accessible naming follows this strict order:

1. **`aria-labelledby`** — Preferred; references visible, meaningful text.
2. **`aria-label`** — For cases with no visible text (e.g., icon-only buttons).
3. **`aria-describedby`** — Extra descriptions or contextual help.
4. **Use semantic HTML first** before adding ARIA roles.

---

## 5. 🌐 Client & Server Domains

The codebase is divided between:

- **Client (Front-end):** Visuals, UI composition, interaction, and state management.
- **Server (Back-end):** Controllers, routing, database access, and API business logic.

Both adhere to the same naming and structure conventions, ensuring consistency across the full stack.

---

## 6. 📚 Tech Stack (Context Only)

Although not architectural rules, the project is built on a modern ecosystem (e.g. TypeScript, React, Python, Flask, PostgreSQL, Docker, Vite, Tailwind, Terraform, Kubernetes, Redis, Prisma/Drizzle, Storybook, Playwright, Grafana, CI/CD pipelines, etc.).

However, **the architectural conventions above remain the foundation**, regardless of technology choices or future changes.

---

## ✅ Summary

This architecture emphasizes:

- Clear separation of concerns.
- Predictable module dependencies.
- Strict naming consistency.
- Accessibility-first development.
- Scalable project structure.
- Maintainable, human-readable code.

By following these conventions, every contributor can confidently extend the project in a structured, future-proof manner.