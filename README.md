# Spreadconnect JS SDK

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

A JavaScript/TypeScript SDK for the [Spreadconnect API](https://api.spreadconnect.app/docs/), developed by [SHOP4FANS](https://shop4fans.io).
This SDK provides a simple way to interact with the Spreadconnect REST API to manage articles, orders, product types, stock levels, and subscriptions.

> **Note:** This SDK is **not an official product** of Spreadconnect.
> Spreadconnect is operated by a third party:
> **Spreadconnect** – [Website](https://www.spreadshop.com/spreadconnect) – business@spreadconnect.app
> Terms of Service: [View here](https://faq.spreadconnect.app/hc/en-us/articles/360020630280-Terms-and-Conditions-Content-Policy)

---

## 📦 Installation

```bash
npm install spreadconnect-js-sdk
```

---

## 🚀 Quick Start

### 1. Import & Initialize

```ts
import { Spreadconnect } from "spreadconnect-js-sdk";

const spreadconnect = new Spreadconnect({
  baseUrl: "https://rest.spod-staging.com", // or production API URL
  token: "YOUR_API_TOKEN",
});
```

---

### 2. Example: List Subscriptions

```ts
const res = await spreadconnect.subscriptions.list();
console.log(res.data);
```

---

### 3. Example: List Articles

```ts
const res = await spreadconnect.articles.list();
console.log(res.data);
```

---

## 📚 Supported API Modules

The SDK wraps the main Spreadconnect API endpoints:

| API Module        | Class               | Example Call                                   |
| ----------------- | ------------------- | ---------------------------------------------- |
| **Articles**      | `ArticlesApi`       | `spreadconnect.articles.list()`                |
| **Orders**        | `OrdersApi`         | `spreadconnect.orders.get(orderId)`            |
| **Subscriptions** | `SubscriptionsApi`  | `spreadconnect.subscriptions.create({...})`    |
| **Product Types** | `ProductTypesApi`   | `spreadconnect.productTypes.list()`            |
| **Stocks**        | `StocksApi`         | `spreadconnect.stocks.list()`                  |
| **Designs**       | `DesignsApi`        | `spreadconnect.designs.upload()`               |

---


## 🔗 Useful Links

- **Official Spreadconnect API Documentation:**
  [https://api.spreadconnect.app/docs/](https://api.spreadconnect.app/docs/)
- **Spreadconnect Website:**
  [https://www.spreadshop.com/spreadconnect](https://www.spreadshop.com/spreadconnect)
- **SHOP4FANS Website:**
  [https://shop4fans.io](https://shop4fans.io)

---

## 📄 License

This project is licensed under the **Apache 2.0 License** – see [LICENSE](LICENSE) for details.

---
