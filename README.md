# NumPeek: React + TypeScript + Vite

Welcome to **NumPeek**, a modern web application built using React, TypeScript, and Vite. This project is designed to provide a fast and efficient development experience while maintaining clean and maintainable code.

## Project Information

**NumPeek** is a lightweight and performant application that leverages the latest web development tools and practices. It is ideal for developers looking to build scalable and type-safe React applications with minimal setup.

## Features

- **React with TypeScript**: Build robust and type-safe user interfaces.
- **Vite**: Experience lightning-fast builds and Hot Module Replacement (HMR).
- **ESLint Configuration**: Enforce clean and consistent code with pre-configured linting rules.
- **SWC and Babel Support**: Choose between SWC and Babel for optimized development workflows.

## Folder Structure

The project follows a simple and intuitive folder structure:

```
NumPeek/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Page-level components
│   ├── styles/      # Global and component-specific styles
│   ├── utils/       # Utility functions and helpers
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
├── .eslintrc.js     # ESLint configuration
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Plugins Used

This project uses the following official Vite plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the Repository**:
  ```bash
  git clone https://github.com/your-username/numpeek.git
  cd numpeek
  ```

2. **Install Dependencies**:
  Use your preferred package manager:
  ```bash
  npm install
  # or
  yarn install
  ```

3. **Start the Development Server**:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

4. **Build for Production**:
  To create an optimized production build:
  ```bash
  npm run build
  # or
  yarn build
  ```

5. **Preview the Production Build**:
  Serve the production build locally:
  ```bash
  npm run preview
  # or
  yarn preview
  ```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve **NumPeek**.

Happy coding with **NumPeek**!

### Deploy link
[NumPeek](https://numpeek.netlify.app/)