
# FitPlanHub – Trainers & Users Platform

## 1. Project Overview

FitPlanHub is a fitness platform where certified trainers create structured fitness plans and users can browse, subscribe, and follow trainers. The system implements role-based behavior for regular users and trainers, paid-like subscriptions (simulated), and a personalized feed based on followed trainers.

The project includes:
- A Node.js/Express backend  
- MongoDB with Mongoose for data persistence  
- EJS-based frontend with Bootstrap for UI  

## 2. Setup and Installation

### 2.1 Prerequisites

- Node.js (version 14 or higher)  
- MongoDB installed and running locally  

### 2.2 Project Setup

1. Clone the repository:
   - `git clone https://github.com/AngelG2503/fitPlanHub.git`
   - `cd fitPlanHub`
2. Install dependencies:
   - `npm install`
3. Create an `.env` file in the project root with:
   - `MONGO_URL=mongodb://localhost:27017/fitplanhub`
   - `SESSION_SECRET=yourSecretKeyHere`
4. Start MongoDB:
   - `mongod`
5. Run the application:
   - `node app.js`
6. Open in browser:
   - `http://localhost:3000`

## 3. Features Implemented

### 3.1 Authentication and Roles

- Signup and login for both trainers and regular users  
- Password hashing using Passport-local-mongoose  
- Session-based authentication with role field (`user` or `trainer`)  
- Role-based UI and access (trainer-only actions protected)  

### 3.2 Trainer Dashboard and Plans

Trainers can:
- Create fitness plans  
- Edit and delete only their own plans  

Each plan includes:
- Title  
- Description  
- Price (numeric)  
- Duration (e.g. number of weeks)  
- Category and difficulty  
- Reference to trainer  

### 3.3 User Subscriptions

Users can:
- View all available fitness plans  
- Subscribe to a plan (simulated payment – single button click)  
- After subscribing, get full access to the plan details  

### 3.4 Access Control

- Non-subscribers see only preview fields on plan details:
  - Title  
  - Trainer name  
  - Price  
- Subscribed users (or the trainer who owns the plan) see full content:
  - Detailed description  
  - Duration  
  - Category and difficulty  
  - Reviews section  

### 3.5 Follow / Unfollow Trainers

Users can:
- Follow trainers from their profile pages  
- Unfollow trainers  
- View a list of all trainers they follow  

The model uses many-to-many relations (`following` and `followers` arrays on User).

### 3.6 Personalized Feed

After login, users get a personalized feed:
- Shows all plans created by trainers the user follows  
- Marks which plans the user has already subscribed to  
- Includes basic trainer information in each feed item  


## 4. Database Design

### 4.1 User Schema

Key fields:
- `email` (unique)  
- `name`  
- `role` (`user` or `trainer`)  
- `subscriptions`: array of objects referencing plans  
- `following`: array of User IDs (trainers followed by this user)  
- `followers`: array of User IDs (users who follow this trainer)  

Relationships:
- Many-to-many between users and trainers via `following` / `followers`  

### 4.2 Plan Schema

Key fields:
- `title`  
- `description`  
- `price` (Number)  
- `duration` (Number, e.g. weeks)  
- `category` and `difficulty`  
- `image` (URL or path)  
- `trainer`: reference to a User (with role `trainer`)  
- `reviews`: array of Review IDs  

Relationships:
- One trainer to many plans  
- One plan to many reviews  

### 4.3 Review Schema

Key fields:
- `rating` (1–5)  
- `comment`  
- `author`: reference to User  
- `plan`: reference to Plan  

Relationships:
- Many reviews to one plan  
- Many reviews to one user  

## 5. API Design and Endpoints

### 5.1 Authentication

- `GET /signup` – Render signup page  
- `POST /signup` – Register user or trainer (with role)  
- `GET /login` – Render login page  
- `POST /login` – Authenticate user  
- `GET /logout` – Logout and destroy session  

### 5.2 Plans (CRUD)

- `GET /plans` – List all plans (landing and explore page)  
- `GET /plans/new` – Render create-plan form (trainer only)  
- `POST /plans` – Create a new plan (trainer only)  
- `GET /plans/:id` – Show plan details (preview or full based on access)  
- `GET /plans/:id/edit` – Render edit form (plan owner only)  
- `PUT /plans/:id` – Update plan (owner only)  
- `DELETE /plans/:id` – Delete plan (owner only)  

### 5.3 Subscriptions

- `POST /plans/:id/subscribe` – Subscribe to a plan (simulated payment); after this, user gains full access  

### 5.4 Trainers

- `GET /trainers` – List all trainers  
- `GET /trainers/:id` – Show trainer profile with their plans and follower count  
- `POST /trainers/:id/follow` – Follow a trainer (logged-in user)  
- `POST /trainers/:id/unfollow` – Unfollow a trainer  

### 5.5 User Feed and Following

- `GET /feed` – Personalized feed of plans created by followed trainers, with subscription status markers  
- `GET /following` – List all trainers the current user follows  

### 5.6 Reviews

- `POST /plans/:id/reviews` – Add a review to a plan (subscribed user)  
- `DELETE /plans/:id/reviews/:reviewId` – Delete own review  

## 6. Frontend Screens

### 6.1 Landing / Explore Page

- Route: `GET /plans`  
- Shows all plans with:
  - Image  
  - Title  
  - Trainer name  
  - Price  
  - Category and difficulty  

### 6.2 Login / Signup

- Pages for registration and authentication  
- On success, redirect to plans or previous protected page  

### 6.3 Trainer Dashboard

- Accessible when logged in as trainer  
- Create, edit, and delete own plans  

### 6.4 Plan Details Page

- Shows preview to non-subscribers  
- Shows full description, duration, and reviews to subscribers/owner  
- Subscribe button for non-subscribed users  

### 6.5 User Feed

- `GET /feed`  
- Shows plans from trainers the user follows  
- Highlights which plans are already subscribed  

### 6.6 Trainer Profile

- `GET /trainers/:id`  
- Shows trainer info, follower count, follow/unfollow button  
- Lists all plans created by that trainer  

### 6.7 Following List

- `GET /following`  
- Displays all trainers the user is following with links to their profiles  


## 7. Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** Passport.js with passport-local-mongoose  
- **Templating:** EJS with ejs-mate for layouts  
- **Styling:** Bootstrap 5 and custom CSS  
- **Sessions & Flash:** express-session, connect-flash  
- **Utilities:** method-override, dotenv  

## 8. Project Structure (High-Level)

- `app.js` – Main server entry point  
- `models/` – Mongoose schemas (User, Plans, Review)  
- `routes/` – Route modules (User, plan, trainer, subscription, review, follow)  
- `controllers/` – Controller logic for each domain  
- `views/` – EJS templates (plans, users, trainers, layouts, includes)  
- `public/` – Static assets (CSS, images, JS)  
- `middleware.js` – Custom middleware (auth guards, validation)  

## 9. Deliverables Mapping

- **Database design (their own schema):**  
  Implemented via Mongoose models in `/models`, with documented relationships in this doc.  

- **API design:**  
  All endpoints listed in Section 5, implemented in `/routes` and `/controllers`.  

- **Node.js project with working endpoints:**  
  Complete Node/Express app in repository, with tested routes and controllers.  

- **Postman collection in Git (recommended):**  
  Can be exported from Postman as `FitPlanHub.postman_collection.json` and added to the repo root.  

- **Proper README explaining how to run the project:**  
  Provided via the setup and feature sections above (can also be mirrored in `README.md` in the repo).  
