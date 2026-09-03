# 🌞 SunHarvest — Brand & E-Commerce Website
visit on : sunharvest.vercel.app

> **Dried Naturally. Kept Perfectly.**  
> Connecting Indian agricultural produce with the power of sunshine to create nutrition-focused food concepts for everyday life.

---

## 🚀 Quick Start & Localhost Development

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit the application locally at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🛠️ Production Build Commands

To test the production build locally:

```bash
# Compile and build static pages
npm run build

# Start production server on localhost:3000
npm start
```

---

## 📌 Complete Route Map

| Route | Page Title | Description |
| :--- | :--- | :--- |
| **`http://localhost:3000/`** | Home Page | Hero with floating cards, feature strip, product portfolio, process visual, & philosophy. |
| **`http://localhost:3000/products`** | Products Portfolio | Nutrition concepts index featuring Iron+, Mother+, and Grow+. |
| **`http://localhost:3000/products/iron-plus`** | Sun Harvest Iron+ | Food-based nutrition mix for women with anaemia positioning note. |
| **`http://localhost:3000/products/mother-plus`** | Sun Harvest Mother+ | Maternal nutrition food mix for pregnant, postpartum, and lactating mothers. |
| **`http://localhost:3000/products/grow-plus`** | Sun Harvest Grow+ | Age-appropriate complementary food for children 6–23 months with development note. |
| **`http://localhost:3000/our-story`** | Our Story | Editorial page detailing the four pillars: Agriculture, Sunshine, Nutrition, Everyday Life. |
| **`http://localhost:3000/our-process`** | Our Process | Interactive 6-step timeline of solar drying and preservation. |
| **`http://localhost:3000/sustainability`** | Sustainability | Responsible preservation editorial page (no unsupported numerical claims). |
| **`http://localhost:3000/contact`** | Contact Us | Contact cards and inquiry form (`arvindh2310@gmail.com`, `6300113574`, `Amrita Vishwa Vidhyapeetham, Amaravati`). |
| **`http://localhost:3000/cart`** | Shopping Cart | Client-side cart manager with item quantity controls and `localStorage` persistence. |
| **`http://localhost:3000/checkout`** | Order Checkout | 2-column checkout with form validation and direct **WhatsApp Order placement**. |
| **`http://localhost:3000/wishlist`** | Saved Products | Wishlist page with persistent saved products. |
| **`http://localhost:3000/search`** | Catalog Search | Real-time search across products by name, target audience, category, or ingredients. |
| **`http://localhost:3000/account`** | User Account | Account UI tabs for Sign In, Create Account, Order History, and Order Tracking. |

---

## 🛒 Products Overview

### 1. Sun Harvest Iron+
- **Target**: Women
- **Category**: Food-based nutrition mix
- **Positioning**: Designed to complement an iron-rich, diverse diet.
- **Price**: `Price — Coming Soon`

### 2. Sun Harvest Mother+
- **Target**: Pregnant, postpartum and lactating mothers
- **Category**: Maternal nutrition food mix
- **Positioning**: Farm nutrition, conveniently preserved for mothers.
- **Price**: `Price — Coming Soon`

### 3. Sun Harvest Grow+
- **Target**: Children 6–23 months
- **Category**: Age-appropriate complementary food
- **Positioning**: Focus on complementary nutrition and convenient preparation for young children.
- **Price**: `Price — Coming Soon`

---

## 📲 WhatsApp Checkout Integration

Checkout details are converted into a structured message and dispatched to the official SunHarvest WhatsApp contact:

- **WhatsApp Destination**: `+91 8778374382`
- **URL Structure**: `https://wa.me/918778374382?text=...`

---

## 💻 Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
