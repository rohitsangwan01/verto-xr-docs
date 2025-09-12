# VertoXR Documentation

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue?style=flat-square&logo=docusaurus)](https://docusaurus.io/)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0-green?style=flat-square&logo=node.js)](https://nodejs.org/)

> **VertoXR** - Expand Your Vision, Enhance Your Workflow

This repository contains the official documentation website for [VertoXR](https://vertoxr.com/), a powerful application for immersive XR (Extended Reality) experiences. The documentation is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rohitsangwan01/verto-xr-docs.git
   cd verto-xr-docs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run start
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the documentation.

## 🛠️ Development

### Available Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run start`     | Start the development server with hot reload |
| `npm run build`     | Build the documentation for production       |
| `npm run serve`     | Serve the built documentation locally        |
| `npm run preview`   | Build and preview with Cloudflare Pages dev  |
| `npm run clear`     | Clear Docusaurus cache                       |
| `npm run typecheck` | Run TypeScript type checking                 |

### Project Structure

```
verto-xr-docs/
├── docs/                    # Documentation content
│   ├── intro.md            # Introduction page
│   ├── getting-started.md  # Getting started guide
│   └── faq.md              # Frequently asked questions
├── src/                    # Source code
│   ├── components/         # React components
│   ├── css/               # Custom styles
│   └── pages/             # Additional pages
├── static/                # Static assets
└── docusaurus.config.ts   # Docusaurus configuration
```

## 🚀 Deployment

This documentation is automatically deployed to Cloudflare Pages. The deployment process:

1. **Manual deployment:**

   ```bash
   npm run deploy
   ```

2. **Preview deployment:**
   ```bash
   npm run preview
   ```

The site is available at: [https://rohitsangwan01.github.io/verto-xr-docs/](https://rohitsangwan01.github.io/verto-xr-docs/)

## 📚 Documentation Content

The documentation covers:

- **Introduction** - Overview of VertoXR and its capabilities
- **Getting Started** - Setup and installation guides
- **FAQ** - Frequently asked questions and troubleshooting

## 🤝 Contributing

We welcome contributions to improve the VertoXR documentation! Here's how you can help:

### Ways to Contribute

- 📝 **Improve existing content** - Fix typos, clarify instructions, add examples
- 📖 **Write new documentation** - Add guides, tutorials, or reference materials
- 🐛 **Report issues** - Found a bug or unclear documentation? Let us know!
- 💡 **Suggest improvements** - Have ideas for better organization or content?

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-improvement
   ```
3. **Make your changes**
4. **Test your changes locally**
   ```bash
   npm run start
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add: your improvement description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-improvement
   ```
7. **Create a Pull Request**

### Contribution Guidelines

- Follow the existing documentation style and structure
- Test your changes locally before submitting
- Write clear, concise commit messages
- Update the table of contents if you add new sections

## 🔗 Links

- **Website**: [vertoxr.com](https://vertoxr.com/)
- **Main Repository**: [Verto_XR](https://github.com/rohitsangwan01/Verto_XR)
- **Discord Community**: [Join our Discord](https://discord.gg/pmAErJmGk5)
- **Documentation**: [Live Documentation](https://docs.vertoxr.com)

## 📄 License

This documentation is part of the VertoXR project. Please refer to the main repository for license information.

---

**Need help?** Join our [Discord community](https://discord.gg/pmAErJmGk5) or open an issue on [GitHub](https://github.com/rohitsangwan01/verto-xr-docs/issues).
