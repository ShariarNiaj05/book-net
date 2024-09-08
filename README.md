Folder Structure

# Folder Structure

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

## Folder structure

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
