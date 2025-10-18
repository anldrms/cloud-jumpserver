# Contributing to Cloud Jumpserver

First off, thank you for considering contributing to Cloud Jumpserver! It's people like you that make Cloud Jumpserver such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**
* **Include browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain the behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the JavaScript style guide
* Include comments in your code where necessary
* Update the README.md with details of changes if applicable
* Ensure your code works across different browsers
* Test your changes thoroughly

## Development Setup

1. Fork the repo
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/cloud-jumpserver.git
   cd cloud-jumpserver
   ```

3. Create a branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. Make your changes and test them locally:
   ```bash
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

5. Commit your changes:
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

6. Push to your fork:
   ```bash
   git push origin feature/amazing-feature
   ```

7. Open a Pull Request

## Style Guide

### JavaScript

* Use ES6+ features
* Use camelCase for variables and functions
* Use PascalCase for classes
* Use const for constants
* Use meaningful variable names
* Add comments for complex logic
* Keep functions small and focused

### CSS

* Use CSS variables for colors and common values
* Follow BEM naming convention where applicable
* Keep selectors specific but not overly complex
* Group related styles together
* Add comments for major sections

### HTML

* Use semantic HTML5 elements
* Keep structure clean and organized
* Use meaningful IDs and classes
* Ensure accessibility (ARIA labels where needed)
* Keep markup minimal and efficient

## Adding New Features

### Adding a New Cloud Provider

1. Update `cloud-data.js`:
   ```javascript
   const cloudProviders = {
       // Add your provider here
       newprovider: {
           name: 'Provider Name',
           regions: [...],
           services: [...],
           features: {...}
       }
   };
   ```

2. Update pricing data if available
3. Add provider-specific terminal commands
4. Update the README

### Adding Network Tools

1. Add function to `tools.js`
2. Add UI element to `index.html`
3. Style in `styles.css`
4. Add terminal command if applicable
5. Document in README

### Adding Terminal Commands

1. Add command handler in `terminal.js`:
   ```javascript
   this.commands = {
       'newcommand': this.newCommandHandler.bind(this)
   };
   
   newCommandHandler(args) {
       // Implementation
   }
   ```

2. Update help text
3. Add documentation

## Testing

Before submitting your PR, please test:

* ✅ All existing features still work
* ✅ Your new feature works as expected
* ✅ Works in Chrome, Firefox, Safari, Edge
* ✅ Responsive design on mobile
* ✅ No console errors
* ✅ Code follows style guide

## Documentation

* Update README.md for user-facing changes
* Add JSDoc comments for functions
* Update CONTRIBUTING.md if adding new contribution types
* Create examples for complex features

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! 🎉
