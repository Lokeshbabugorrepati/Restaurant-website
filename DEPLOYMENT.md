# Separate Deployment Guide - Backend and Frontend on Vercel

This guide will help you deploy your Restaurant Booking application with separate backend and frontend deployments on Vercel.

## Overview

- **Backend**: Deployed as a Vercel serverless application
- **Frontend**: Deployed as a static site on Vercel
- Both deployments are independent and communicate via API calls

---

## Step 1: Deploy Backend to Vercel

### 1.1 Prepare Backend for Deployment

The backend is already configured with `backend/vercel.json` for Vercel deployment.

### 1.2 Deploy Backend

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Click "Add New Project"**

3. **Import your GitHub repository** (Lokeshbabugorrepati/Restaurant-website)

4. **Configure Backend Project:**
   - **Project Name**: `restaurant-booking-backend` (or your preferred name)
   - **Framework Preset**: Other
   - **Root Directory**: Select `backend` folder
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

5. **Add Environment Variables:**
   Click "Environment Variables" and add:

   ```
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=production
   ```

   Get your MongoDB URI from [MongoDB Atlas](https://cloud.mongodb.com/):
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/restaurant-booking?retryWrites=true&w=majority`

6. **Click "Deploy"**

7. **Save Your Backend URL** (e.g., `https://restaurant-booking-backend.vercel.app`)
   - Copy this URL, you'll need it for frontend configuration

### 1.3 Test Backend

Once deployed, visit: `https://your-backend-url.vercel.app`

You should see: `{"message":"Welcome to Restaurant Booking API"}`

Test the API endpoint: `https://your-backend-url.vercel.app/api/bookings`

---

## Step 2: Deploy Frontend to Vercel

### 2.1 Configure Frontend Environment

1. **In Vercel Dashboard, click "Add New Project" again**

2. **Import the same GitHub repository**

3. **Configure Frontend Project:**
   - **Project Name**: `restaurant-booking-frontend` (or your preferred name)
   - **Framework Preset**: Vite
   - **Root Directory**: Select `frontend` folder
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables:**
   Click "Environment Variables" and add:

   ```
   VITE_API_URL=https://your-backend-url.vercel.app/api
   ```

   **IMPORTANT**: Replace `https://your-backend-url.vercel.app` with your actual backend URL from Step 1.7

5. **Click "Deploy"**

6. **Your Frontend URL** will be something like: `https://restaurant-booking-frontend.vercel.app`

---

## Step 3: Update Environment Variables (If Needed)

### Backend Environment Variables (backend/.env for local development)

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Frontend Environment Variables (frontend/.env for local development)

```env
VITE_API_URL=http://localhost:5000/api
```

### Frontend Environment Variables (Vercel Production)

```env
VITE_API_URL=https://your-backend-url.vercel.app/api
```

---

## Step 4: Verify Deployment

### Test Backend:

1. Visit: `https://your-backend-url.vercel.app`
2. Check: `https://your-backend-url.vercel.app/api/bookings`

### Test Frontend:

1. Visit: `https://your-frontend-url.vercel.app`
2. Try making a booking
3. Check if bookings are saved and displayed

---

## Troubleshooting

### Backend Issues:

**MongoDB Connection Error:**

- Go to Vercel Dashboard → Your Backend Project → Settings → Environment Variables
- Verify `MONGODB_URI` is correct
- Make sure MongoDB Atlas allows connections from anywhere (IP: `0.0.0.0/0`)
- Redeploy after updating environment variables

**404 or Module Not Found:**

- Check that Root Directory is set to `backend`
- Verify all dependencies are in `backend/package.json`

### Frontend Issues:

**API Connection Error:**

- Check that `VITE_API_URL` environment variable is set correctly in Vercel
- Make sure it includes `/api` at the end
- Verify backend is deployed and accessible

**Build Error:**

- Check that Root Directory is set to `frontend`
- Verify Framework Preset is set to `Vite`
- Check Build Command is `npm run build`
- Check Output Directory is `dist`

### CORS Issues:

If you see CORS errors, the backend is already configured to allow all origins. If issues persist:

1. Go to backend Vercel project
2. Redeploy to refresh CORS settings

---

## Local Development

### Run Backend Locally:

```bash
cd backend
npm install
npm run dev
```

Backend will run on: `http://localhost:5000`

### Run Frontend Locally:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

Make sure `frontend/.env` has:

```
VITE_API_URL=http://localhost:5000/api
```

---

## Deployment URLs

After deployment, you'll have:

- **Backend API**: `https://restaurant-booking-backend.vercel.app`
- **Frontend App**: `https://restaurant-booking-frontend.vercel.app`

You can customize these URLs in Vercel project settings.

---

## Updating Your Application

### When you update code:

**Backend Changes:**

1. Push changes to GitHub
2. Vercel automatically redeploys backend
3. Or manually redeploy from Vercel Dashboard

**Frontend Changes:**

1. Push changes to GitHub
2. Vercel automatically redeploys frontend
3. Or manually redeploy from Vercel Dashboard

---

## Important Notes

1. **MongoDB Atlas**: Make sure your IP whitelist includes `0.0.0.0/0` to allow Vercel serverless functions to connect

2. **Environment Variables**: If you update environment variables in Vercel, you must redeploy for changes to take effect

3. **Custom Domains**: You can add custom domains in Vercel project settings → Domains

4. **Automatic Deployments**: Vercel automatically deploys when you push to your main branch

---

## Quick Reference

### Backend Deployment Checklist:

- ✅ Root Directory: `backend`
- ✅ Environment Variable: `MONGODB_URI`
- ✅ Environment Variable: `NODE_ENV=production`
- ✅ Framework: Other
- ✅ Build Command: (empty)

### Frontend Deployment Checklist:

- ✅ Root Directory: `frontend`
- ✅ Environment Variable: `VITE_API_URL` (with your backend URL)
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`

---

## Support

If you encounter any issues:

1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify environment variables are set correctly
4. Make sure MongoDB connection string is valid

Good luck with your deployment! 🚀
