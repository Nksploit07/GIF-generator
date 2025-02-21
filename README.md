# 🎥 GIF Search App

A simple GIF search app using **AWS Lambda** and **Giphy API**.

## 🚀 Features
- Search and display a random GIF
- Modern dark theme UI
- AWS Lambda + API Gateway integration

## 📂 Project Structure
```
/gif-search-app
  ├── backend/        # AWS Lambda function
  │   ├── index.js   # Lambda code
  ├── frontend/       # Frontend files
  │   ├── index.html  # HTML
  │   ├── styles.css  # CSS
  │   ├── script.js   # JavaScript
  ├── README.md       # Documentation
```

## 🛠️ Setup Guide

### 1. Clone Repository
```sh
git clone https://github.com/Nksploit07/GIF-generator.git
cd GIF-generator
```

## 2. Follow these steps to generate an API key from **Giphy**:
1. Go to **[Giphy Developers](https://developers.giphy.com/)** and **Sign Up** (or **Log In** if you already have an account).
2. Click **"Create an App"**, select **"API"** as the app type, and enter a name and description for your app.
3. Click **"Create App"** and copy the **API Key** provided.

---

## 3. Use the API Key in Your Code
Replace `"API_KEY"` with the copied API key in your backend code:

```javascript
const API_KEY = "YOUR_API_KEY";
```

✅ **Now you're ready to use the Giphy API in your project! 🚀**



### 4. Deploy AWS Lambda
1. Go to **AWS Lambda** → Create Function
2. Set **Name:** `gif-generator`, **Runtime:** `Node.js 22`
3. Copy `backend/index.js` code and paste into Lambda
4. Click **Deploy**

### 5. Setup API Gateway
1. Create **HTTP API** in **API Gateway**
2. Link it to your **gif-generator** Lambda function
3. Set **Route:** `GET /gif-generator`
4. Deploy and copy **Invoke URL**

### 6. Update Frontend
1. Open `frontend/script.js`
2. Replace API URL:
   ```js
   const API_GATEWAY_URL = "YOUR_HTTP_API"
   ```

### 7 Run the App
- Open `frontend/index.html` in your browser
- Search for a GIF and enjoy! 🎉

## 📜 License
Open-source under the **MIT License**.

## ✨ Contributors
👨‍💻 **Naveen** - [GitHub](https://github.com/Nksploit07)

