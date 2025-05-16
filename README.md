# PRODIGY_FS_1
A platform for secure user authentication

# User Authentication System (Full Stack Project)

This project implements a complete *User Authentication System* with secure *login, **registration, and **protected routes* using a full-stack approach.

## 🔐 Features

- User *Sign Up* and *Login*
- Protected Routes (accessible only after authentication)
- *MySQL Database Integration*
- *Password Hashing* for security (optional enhancement)
- *Session Management* (optional enhancement)
- Role-Based Access Control (optional)

## 🛠 Tech Stack

- *Frontend*: HTML, CSS, JavaScript , react.js(Started with npm run dev)
- *Backend*: Node.js, Express (Started with node server.js)
- *Database*: MySQL (testdb database)

## 🧱 Database Schema

```sql
CREATE DATABASE testdb;
USE testdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100),
    email VARCHAR(100),
    passwords VARCHAR(100)
);

-- Sample Data
INSERT INTO users (user_name, email, passwords) 
VALUES ("pranu", "vaidyapranav987@gmail.com", "18113");

-- View Data
SELECT * FROM users;

-- Drop Table
DROP TABLE users;

🚀 Getting Started
Prerequisites

Node.js and npm

MySQL Server

Installation
Clone the repository:  git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies for backend and frontend:

bash
npm install

Start the backend:
node server.js


Start the frontend:
npm run dev
Make sure your MySQL server is running and the testdb database is created.

📁 Project Structure
bash
Copy code
your-project/
├── frontend/        # Frontend code (react.js)
├── back/         # Backend code (Node.js + Express)


📌 Future Improvements
Add password hashing using bcrypt

Use JWT or sessions for better authentication

Add user roles like admin, user, etc.

Improve UI with frameworks like React or Tailwind CSS

Author
Pranav Vaidya
Email: vaidyapranav987@gmail.com
