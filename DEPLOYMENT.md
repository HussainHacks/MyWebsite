# Deployment Guide for Portfolio Website

This document provides instructions on how to install dependencies, run the site locally, and deploy it to Vercel.

## Step 1: Install Node.js
If you haven't already, download and install Node.js from https://nodejs.org/.
Ensure it's added to your system PATH.

## Step 2: Install Dependencies
Open your terminal, navigate to this project folder, and run:
```bash
npm install
```
This will install Next.js, React, Three.js, Framer Motion, and TailwindCSS.

## Step 3: Run Locally (Development Server)
To view the site on your machine and test the animations:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Deploy to Vercel
Vercel is the creator of Next.js and provides the easiest way to deploy this site.
1. Create a free account at [Vercel](https://vercel.com/)
2. Install the Vercel CLI via terminal: `npm i -g vercel`
3. Run the following command in this directory:
```bash
vercel
```
4. Follow the prompts. It will build and deploy your application automatically.
5. Alternatively, you can push this code to a GitHub repository and import it directly from the Vercel website dashboard for continuous deployment.

## Step 5: Deploy to Netlify (Alternative)
Yes, you can easily deploy to Netlify!
1. Create a free account at [Netlify](https://www.netlify.com/).
2. Push your project code to a GitHub repository.
3. In the Netlify dashboard, click **Add new site** > **Import an existing project**.
4. Connect your GitHub account and select your repository.
5. Netlify will automatically detect that it's a Next.js site. The build command (`next build`) and publish directory (`.next`) should be filled in automatically.
6. Click **Deploy site**.
Alternatively, you can install the Netlify CLI (`npm i -g netlify-cli`) and deploy from your terminal with the `netlify deploy` command.
