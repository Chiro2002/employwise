# employwise

# EmployWise User Management App

## Purpose of This Project
The EmployWise User Management App is a React-based project designed to integrate with the Reqres API for managing user data. It provides the following functionality:
1. **User Authentication**: Secure login system using the Reqres API.
2. **User Management**: View, search, and filter users with pagination.
3. **Edit and Update Users**: Edit user details and save updates seamlessly.

This project demonstrates the use of React, React Router, and Axios for handling API calls and routing.

---

## Pages Overview

### 1. Login Page
   - **Purpose**: Authenticates users and grants access to the application.
   - **How It Works**:
     - Users log in using predefined credentials (`eve.holt@reqres.in` and `cityslicka`).
     - Upon successful login, the API returns a token which is stored in `localStorage`.
     - After login, users are redirected to the **Users List** page.
   - **Features**:
     - Basic form validation.
     - Displays error messages for invalid credentials.

### 2. Users List Page
   - **Purpose**: Displays a paginated list of users retrieved from the Reqres API.
   - **How It Works**:
     - Fetches user data using the endpoint: `GET /api/users?page=1`.
     - Provides options to:
       - Search and filter users by their name or email.
       - Navigate between pages with pagination controls.
       - Edit or delete users.
   - **Features**:
     - **Search Bar**: Dynamically filters users based on input.
     - **Edit Button**: Redirects to the **Edit User** page.
     - **Delete Button**: Removes a user and updates the list in real time.

### 3. Edit User Page
   - **Purpose**: Allows editing user details and saving updates to the API.
   - **How It Works**:
     - Pre-fills a form with the user’s existing details.
     - Sends updates to the endpoint: `PUT /api/users/{id}`.
     - Redirects back to the **Users List** page with the updated details.
   - **Features**:
     - Validates user input before saving.
     - Displays success or error messages.
     - Updates the user list upon successful edits.

---

## Steps to Run This Project

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/employwise-user-management.git
cd employwise-user-management
```

### 2. Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 3. Start the Application
Start the React development server:
```bash
npm start
```
This will launch the app in your default browser at `http://localhost:3000`.

---

## Features
1. **Login System**:
   - Validates credentials using the Reqres API.
   - Stores the authentication token in `localStorage`.

2. **User Management**:
   - Displays users in a card layout with avatars, names, and emails.
   - Search and filter functionality for a better user experience.
   - Pagination to navigate between pages of user data.

3. **Edit Functionality**:
   - Edit and save changes to user details via an intuitive form.
   - Immediate reflection of updates in the user list.

---

## Folder Structure
```
employwise-user-management/
├── src/
│   ├── Components/
│   │   ├── Login.js          // Login page component
│   │   ├── Users.js          // Users list page component
│   │   ├── EditUser.js       // Edit user page component
│   ├── App.js                // Main application routing
│   ├── index.css             // Application-wide styles
│   ├── index.js              // Application entry point
├── package.json              // Project configuration and dependencies
└── README.md                 // Project documentation
```

---

## Default Credentials for Login
- **Email**: `eve.holt@reqres.in`
- **Password**: `cityslicka`

---

## Technologies Used
1. **Frontend**: React (with Hooks)
2. **API**: Reqres API for testing
3. **Styling**: Tailwind CSS
4. **Routing**: React Router
5. **HTTP Requests**: Axios

---

## Future Enhancements
- Add a proper backend for dynamic user management.
- Improve authentication with hashed passwords.
- Include role-based access control.

---

