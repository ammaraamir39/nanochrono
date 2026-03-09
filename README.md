# 🕒 nanochrono

[![npm version](https://img.shields.io/npm/v/nanochrono.svg?style=flat-square)](https://www.npmjs.com/package/nanochrono)
[![install size](https://img.shields.io/bundlephobia/min/nanochrono?style=flat-square)](https://bundlephobia.com/result?p=nanochrono)
[![npm downloads](https://img.shields.io/npm/dm/nanochrono.svg?style=flat-square)](https://www.npmjs.com/package/nanochrono)
[![license](https://img.shields.io/npm/l/nanochrono.svg?style=flat-square)](https://github.com/ammaraamir39/nanochrono/blob/main/LICENSE)

**nanochrono** is a ultra-lightweight (under 500B) human-readable time formatter. Zero dependencies, 100% TypeScript, and native Internationalization support.

Built for the 2026 web, it leverages the native **Intl.RelativeTimeFormat** API to provide full i18n support without the bloat of traditional date libraries.

---

## ✨ Features

- 🪶 **Nano Size:** Under 500 bytes minzipped.
- 🌍 **Native I18n:** Supports 100+ languages natively via browser/Node APIs.
- 🚀 **Zero Dependencies:** No vulnerabilities, no bloat.
- 🛡️ **Type-Safe:** Written in TypeScript with full IDE autocompletion.
- ⚡ **Edge Ready:** Perfect for Vercel Edge, Cloudflare Workers, and Bun.

## 📦 Installation

```bash
npm install nanochrono
```

🚀 Quick Start

import { formatRelative } from 'nanochrono';

// Standard English (default)
formatRelative(Date.now() - 60000);
// Output: "1 minute ago"

// High-end Internationalization
formatRelative(Date.now() - 3600000, 'es');
// Output: "hace 1 hora"

formatRelative(Date.now() - 172800000, 'fr');
// Output: "avant-hier"

🛠 Why nanochrono?
In modern web development, performance is king. Most libraries like Moment.js or Day.js require you to import heavy "locale" files for every language you want to support, adding unnecessary kilobytes to your bundle.

nanochrono is different. It uses the "Intl" dictionary already built into the user's Operating System. You get world-class localization for free, with zero impact on your bundle size.

📖 APIformatRelative(date, locale?)ParameterTypeDescriptiondateDate | numberThe Date object or millisecond timestamp to format.localestring(Optional) BCP 47 language tag (e.g., 'en', 'es', 'ja'). Defaults to 'en'.
