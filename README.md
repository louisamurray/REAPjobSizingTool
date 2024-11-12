# REAP Job Sizing Tool

The **REAP Job Sizing Tool** is a cross-platform desktop application designed to evaluate and size job roles based on various factors. Built with Tauri and React, this tool offers a modern, lightweight solution with offline support and is available for macOS, Windows, and Linux.

## Features

- Cross-platform desktop support (macOS, Windows, and Linux).
- Lightweight and secure with Tauri’s efficient Rust backend.
- Offline functionality.
- Customizable job sizing criteria.

## Technologies Used

- **Tauri** (Rust) – for the backend and cross-platform desktop functionality.
- **React** (JavaScript) – for the frontend.
- **Styled Components** – for styling and theming.
- **React Icons** – for easy-to-use, modern icons.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Rust**: Install from [Rust's official site](https://www.rust-lang.org/tools/install)
- **Node.js** and **npm**: Download from [Node.js website](https://nodejs.org/)
- **Tauri CLI**: Install via Cargo (Rust’s package manager)
  ```bash
  cargo install tauri-cli
  ```

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/louisamurray/reapjobsizingtool.git
   cd reapjobsizingtool
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Set up Tauri by installing any additional dependencies, such as platform-specific libraries, if prompted by Tauri CLI.

---

## Development

### Running in Development Mode

To start the app in development mode:

1. Start the React development server:
   ```bash
   npm start
   ```

2. Open a new terminal and start the Tauri development server:
   ```bash
   npx tauri dev
   ```

This will open the app window, loading the React frontend and automatically updating with any code changes.

---

## Building for Production

Use the following commands to build the app for each platform. These commands generate platform-specific installers in the `src-tauri/target/release/bundle` folder.

- **For Windows**:
  ```bash
  npm run build:windows
  ```

- **For macOS**:
  ```bash
  npm run build:mac
  ```

- **For Linux**:
  ```bash
  npm run build:linux
  ```

Each command will package the application in the correct format for its platform (`.msi` for Windows, `.dmg` for macOS, `.AppImage` or `.deb` for Linux).

---

## Distribution

The `src-tauri/target/release/bundle` directory will contain the generated installer files for each platform:

- **Windows**: `.msi` or `.exe`
- **macOS**: `.dmg`
- **Linux**: `.AppImage` or `.deb` / `.rpm`

Share these installer files with your users for installation on their respective platforms.

---

## Auto-Update Configuration (Optional)

This app supports auto-updating through Tauri’s built-in updater feature.

1. **Configure the Updater**:
   In `src-tauri/tauri.conf.json`, set up the `updater` configuration:
   ```json
   "updater": {
     "active": true,
     "endpoints": ["https://api.github.com/repos/louisamurray/reapjobsizingtool/releases/latest"],
     "dialog": true
   }
   ```

2. **Publishing Updates**:
   Publish new versions by creating a new release on GitHub or your preferred update server.

---

## Project Structure

- **`/src`**: Contains the React frontend source code.
- **`/src-tauri`**: Contains Tauri-specific files, including `tauri.conf.json` for configuration and Rust code in `src/main.rs`.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git commit -m "Add your commit message here"
   git push origin feature/your-feature-name
   ```
4. Create a pull request on GitHub.