# Book Net

## Folder Structure

```js
.eslintrc.json
.gitignore
README.md
db.json
installation.md
next.config.mjs
package-lock.json
package.json
postcss.config.mjs
src
   |-- app
   |   |-- (withCommonLayout)
   |   |   |-- layout.tsx
   |   |   |-- page.tsx
   |   |   |-- posts
   |   |   |   |-- [postId]
   |   |   |   |   |-- page.tsx
   |   |   |   |-- loading.tsx
   |   |   |   |-- page.tsx
   |   |-- (withDashboardLayout)
   |   |   |-- dashboard
   |   |   |   |-- create-post
   |   |   |   |   |-- page.tsx
   |   |   |   |-- page.tsx
   |   |   |-- layout.tsx
   |   |-- favicon.ico
   |   |-- globals.css
   |   |-- layout.tsx
   |   |-- not-found.tsx
   |-- assets
   |   |-- banner-img.jpg
   |   |-- logo.png
   |-- components
   |   |-- banner
   |   |   |-- Banner.module.css
   |   |   |-- Banner.tsx
   |   |-- latestPosts
   |   |   |-- LatestPost.tsx
   |   |-- shared
   |   |   |-- Footer.tsx
   |   |   |-- Navbar.tsx
   |   |-- ui
   |   |   |-- Comments.tsx
   |   |   |-- Loading.tsx
   |   |   |-- PostCard.tsx
   |   |   |-- PostDetails.tsx
   |   |   |-- PostForm.tsx
   |   |   |-- Sidebar.tsx
   |-- services
   |   |-- commentServices
   |   |   |-- index.ts
   |   |-- postServices
   |   |   |-- index.ts
   |-- types
   |   |-- index.ts
   |-- utils
   |   |-- delay.ts
tailwind.config.ts
tsconfig.json
usage.md

```

```bash
src/
│
├── app/
│ └── (withCommonLayout)
│ This folder contains the main application pages and components that share a common layout.
│ It is likely the entry point for routing and rendering different parts of the application.
│
├── assets/
│ This folder holds static files such as images, fonts, or other media that are used across the application.
│
├── components/
│ ├── banner/
│ │ Contains components related to displaying banners, such as a homepage banner or promotional banners.
│ │
│ ├── latestPost/
│ │ Includes components responsible for fetching and rendering the latest posts, typically used in blog or news sections.
│ │
│ ├── shared/
│ │ This folder contains reusable components that are shared across multiple pages or features, promoting code reusability.
│ │
│ └── ui/
│ Contains user interface components such as buttons, modals, form inputs, and other UI elements.
│
├── services/
│ └── api/
│ This folder is responsible for handling external API calls, managing requests to back-end services,
│ and interacting with data sources.
```

## Folder structure

```bash
src/
├── app/
│ └── (withCommonLayout)/
├── asset/
├── components/
│ ├── banner/
│ ├── latestPost/
│ ├── shared/
│ └── ui/
└── services/
└── api/
```

```bash
src/
|--app/
|   --(withCommonLayout)/
|--asset/
```

## Installation

[Installation](installation.md)

## Usage

[Usage](usage.md)
