# Eiger Decision Tree

A project that demonstrates a decision tree system with a frontend and backend interface. Users can choose from sample JSON inputs to execute and observe the result.

## 🚀 Getting Started

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/vazgenMikaelyan/Eiger-decision-tree.git
```

### 2. Setup the Backend

```bash
cd Eiger-decision-tree/Backend
# Install dependencies
npm install

# Run the development server
npm run dev
```

### 3. Setup the Frontend

```bash
cd Eiger-decision-tree/Frontend
# Install dependencies
npm install

# Run the development server
npm run dev
```

### 4. Using the App

- Once both servers are running, open the frontend in your browser.
- You’ll see a list of sample JSON inputs.
- Select one and press the **"Execute"** button.

### 5. View Logs

- Check your IDE or terminal console to view backend logs and outputs.

## 🛠 Tech Stack

- Node.js (Backend)
- React (Frontend)
- JSON-based decision logic


# Turning a Single Consumer Web-Based Platform into a SaaS

This document outlines key design considerations for transforming a single-tenant gaming platform (`gPlatform`) into a multi-tenant SaaS that can support multiple gaming companies, each operating on their own domain.

## 🧩 Problem Overview

Currently, `gPlatform` serves only one gaming site (`gSite`) and uses user email as the unique identifier. The goal is to make `gPlatform` multi-tenant, so it can be sold as a SaaS to multiple companies (e.g., `cool-games.com`, `luck-games.co.uk`), each with their own domain and users.

---

## ❓ Questions & Solutions

### 1. How can we design the system so every company can serve games on their own domain?

**Solution:**
- Implement **multi-tenant architecture** with **domain-based routing**.
- Use DNS and reverse proxy (e.g., NGINX) to route domains like `cool-games.com` to the shared backend.
- Dynamically load tenant-specific data/assets based on the domain.
- Support HTTPS with automated TLS (e.g., Let’s Encrypt) for custom domains.

---

### 2. What modifications should be made to the users table to support this?

**Solution:**
- Add a `tenant_id` (or `company_id`) column to identify which tenant a user belongs to.
- Change the unique constraint to `(tenant_id, email)` instead of just `email` to prevent conflicts between tenants.
- Optionally normalize into a `Tenants` table to manage company-specific data.

---

### 3. How can we ensure user login only grants access to the correct domain?

**Solution:**
- On login, issue an authentication token scoped to the `tenant_id`.
- Determine tenant from the domain and validate the token against it.
- Use middleware to block access if the token’s tenant doesn’t match the request domain.
- Store session data with tenant context to prevent cross-domain session reuse.

