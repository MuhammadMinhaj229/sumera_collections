# Sumera Collections

Premium D2C Indian Women's Ethnic & Fusion Wear Storefront.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- A Google Firebase account for the Firestore database.

## Step-by-Step Installation

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and fill in the required API keys (e.g., Firebase credentials, Gemini API key if required).

## Firebase Configuration

This project uses Firestore as the backend database.

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Firestore and set up Security Rules (as defined in `firestore.rules`).
3. Set up Firebase Authentication (if required).
4. Obtain your Firebase SDK configuration object and set the corresponding environment variables in your `.env` file.

## Running Locally

- **Start development server:**
  ```bash
  npm run dev
  ```
  The application will run on `http://localhost:3000`.

## Troubleshooting

### Dependency Issues
If you encounter `module not found` errors:
- Ensure all dependencies are installed: `npm install`
- Clear cache and reinstall: `rm -rf node_modules package-lock.json && npm install`

### Database/Authentication Issues
- Check Firebase Security Rules in `firestore.rules`.
- Ensure your Firestore database is correctly provisioned and in the right region.
- Ensure all required environment variables are set in your `.env` file.

### Build Failures
- Run `npm run build` locally to ensure the project compiles correctly. If it fails, check the logs for syntax errors or missing module imports.

## Deployment Guide (GitHub & Vercel)

This project is built as a high-performance, single-page application (SPA) using React 19, Vite, and Tailwind CSS. It is fully ready to deploy instantly with zero complex server configurations.

### 1. Push to GitHub

1. Initialize git if you haven't already:
   ```bash
   git init
   ```
2. Add your files:
   ```bash
   git add .
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: configure deployment settings for Vercel and GitHub"
   ```
4. Create a new repository on GitHub (keep it public or private).
5. Link your local repository to GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy on Vercel

1. **Sign in to Vercel** and click **"Add New" -> "Project"**.
2. **Import your GitHub repository** containing this project.
3. Vercel will automatically detect the **Vite** configuration.
4. Keep the default Build and Output Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Configure Environment Variables** in the project settings before clicking "Deploy". Copy the values from your `firebase-applet-config.json` or your Firebase Console into these variables:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_DATABASE_ID`
6. Click **"Deploy"**. Your application will build, deploy, and receive a secure production URL in under a minute!
