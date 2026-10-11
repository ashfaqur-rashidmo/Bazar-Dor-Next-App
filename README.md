# 🛒 বাজার দর | BazarDor


BazarDor is a responsive web application that helps users explore daily prices of essential commodities, compare price changes, browse products by category, and view market-specific price information. It also provides user authentication and profile management.

**Know today's prices. Compare market trends. Shop smarter.**


---

## 📌 Project Overview

- **Project Name:** B14-A7-Bazar Dor
- **Application Name:** বাজার দর (BazarDor)
- **Project Type:** Responsive Web Application
- **Primary Language:** TypeScript
- **Framework:** Next.js App Router
- **Authentication:** Better Auth
- **Styling:** Tailwind CSS and DaisyUI

BazarDor presents product prices in Bengali, making essential market information easier to understand. Users can explore rising and falling prices, browse categories, view individual product details, and manage their accounts.

## ✨ Key Features

### 1. 📊 Daily Price Overview
- Dedicated sections for products with increasing and decreasing prices.
- Displays the top six rising and falling products.
- Shows product names, illustrations, units, current prices, and percentage changes.
- Uses visual indicators to communicate price movements.

### 2. 🛍️ Product Browsing
- Responsive product cards with Bengali names and prices.
- Product listings organized by category.
- Individual product detail pages.
- Market-specific pricing with minimum, maximum, and average price summaries where available.

### 3. 🔎 Category Filtering and Sorting
- Browse products by category.
- Sort products by default order, lowest price, or highest price.
- Compare prices numerically, including Bengali-formatted prices.
- Display appropriate loading and empty states.

### 4. 🔐 Authentication and Account Management
- User registration and sign-in with Better Auth.
- Email and password authentication.
- Google and GitHub sign-in when configured.
- Protected product detail pages for authenticated users.
- Profile information updates and sign-out functionality.
- Toast notifications for relevant authentication and validation results.

### 5. 📈 Live-Style Price Ticker
- Scrolling strip displaying product names, prices, units, and price movements.
- Quick access to individual product pages.
- Visual indicators for increasing and decreasing prices.

### 6. 📱 Fully Responsive Design
- Mobile, tablet, and desktop support.
- Responsive product grids and layouts.
- A hero section with a call-to-action that scrolls to all products.
- Navigation and price ticker designed for different screen sizes.

### 7. ⚡ Loading and Error Handling
- Loading indicators while product data is retrieved.
- User-friendly empty states for unavailable products or categories.
- A custom 404 page with navigation back to the homepage.
- Dynamic product and category routes designed to support direct navigation and page refreshes.

### 8. 🎨 Bengali-First Interface
- Bengali product names, labels, and price presentation.
- Clear typography and visual hierarchy.
- A consistent green-themed interface inspired by market and grocery shopping.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application rendering |
| Next.js App Router | File-based routing and dynamic routes |
| React | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Utility-first styling and responsive layouts |
| DaisyUI | UI components and theme utilities |
| Better Auth | Authentication and account management |
| React Hot Toast | Success, error, and validation notifications |
| React Icons | Icons throughout the interface |
| Next.js Image | Optimized image rendering |
| REST API | Product, category, and price data |
| Vercel | Deployment platform |




Invalid product or category routes should display a helpful message and provide a link to return to the homepage.




## 📱 Responsive Design

BazarDor is designed to adapt to different viewport sizes.

- **Mobile:** Single-column product cards and stacked hero layout.
- **Tablet:** Two-column product grids where appropriate.
- **Desktop:** Three- or four-column product grids and expanded layouts.
- **Navigation:** Responsive layout with accessible interactive controls.
- **Product details:** Structured price summaries and market-specific information.

## 🔒 Authentication and Security

Authentication is implemented with Better Auth.

- Registration and sign-in through the configured authentication methods.
- Protected access to product detail pages.
- Profile name updates using Better Auth's user update functionality.
- Session-aware navigation and sign-out handling.
- Feedback for authentication failures and form validation.

Protected routes must enforce authentication checks rather than relying solely on hiding links in the user interface.



## 🔗 Project Links

- **Live Demo:** [Add your deployed application URL](#project-links)
- **GitHub Repository:** [Add your repository URL](#project-links)

## 🎯 Project Objectives

BazarDor aims to make daily market price information accessible through a simple, responsive, Bengali-language interface. The project also demonstrates practical skills in modern frontend development, API integration, authentication, dynamic routing, responsive UI design, and deployment.


---

*বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।*

*সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়.*
