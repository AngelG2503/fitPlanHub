# FitPlanHub - Project Submission

**Student Name:** [Your Name]
**Student ID:** en22cs301123
**GitHub Repository:** https://github.com/AngelG2503/fitPlanHub

---

## ✅ Deliverables Checklist

### 1. Database Design ✅
- **Location:** `/models` folder in GitHub repo
- **Files:**
  - `User.js` - User schema with authentication
  - `Plans.js` - Fitness plan schema
  - `Review.js` - Review schema
- **Relationships Implemented:**
  - One-to-Many: Trainer → Plans, Plan → Reviews
  - Many-to-Many: User ↔ Trainers (following/followers)

### 2. API Design ✅
- **Location:** `/routes` folder in GitHub repo
- **Documented in:** README.md (API Endpoints section)
- **Total Endpoints:** 15+ RESTful routes
- **Categories:**
  - Authentication (signup, login, logout)
  - Plans CRUD (create, read, update, delete)
  - Subscriptions
  - Follow/Unfollow
  - Reviews
  - Personalized Feed

### 3. Node.js Project with Working Endpoints ✅
- **GitHub Repository:** https://github.com/AngelG2503/fitPlanHub
- **Main File:** `app.js`
- **All Routes Working:** Yes
- **Tested Locally:** Yes

### 4. Postman Collection ✅ (Optional but included)
- **Location:** Root folder - `FitPlanHub.postman_collection.json`
- **OR:** Available upon request

### 5. Proper README ✅
- **Location:** `README.md` in root folder
- **Includes:**
  - Setup instructions
  - Features list
  - Database schema
  - API endpoints
  - Tech stack
  - Project structure

---

## 🔗 Links
- **GitHub Repository:** https://github.com/AngelG2503/fitPlanHub
- **README:** https://github.com/AngelG2503/fitPlanHub#readme

---

## 🎯 Features Implemented

### Required Features
✅ User & Trainer Authentication  
✅ Password Hashing  
✅ Trainer Dashboard - Create Fitness Plans  
✅ Plan CRUD Operations  
✅ User Subscriptions  
✅ Access Control (Preview vs Full)  
✅ Follow/Unfollow Trainers  
✅ View Following List  
✅ Personalized Feed  

### Bonus Features
✅ Reviews & Ratings System  
✅ Search Functionality  
✅ Responsive UI with Bootstrap  
✅ Flash Messages  

---

## 📋 How to Run

1. Clone repository: `git clone https://github.com/AngelG2503/fitPlanHub.git`
2. Install dependencies: `npm install`
3. Create `.env` file with MongoDB URL
4. Start MongoDB: `mongod`
5. Run app: `node app.js`
6. Open: `http://localhost:3000`

**Full instructions in README.md**

---

**Submission Date:** December 14, 2025
