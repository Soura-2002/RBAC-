
# RBAC User Management System

The RBAC (Role-Based Access Control) User Management System is a React-based web application designed for managing users, roles, and permissions. It also includes a dark mode toggle, routing, and alert notifications for user-friendly interactions.

## Features
- **User Management**: Add, edit, and delete users.
- **Role Management**: Manage roles and assign them to users.
- **Role Permissions**: Define and configure permissions for roles.
- **Dark Mode**: Toggle between light and dark modes for a better user experience.
- **Alerts**: Provide feedback notifications for various actions.
- **Routing**: Navigate seamlessly between components using `react-router-dom`.

---

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/rbac-user-management.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rbac-user-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application will run at `http://localhost:3000/`.

---

## Project Structure
```plaintext
src/
├── Components/
│   ├── Navbar.js          # Navigation bar with dark mode toggle
│   ├── UserManagement.js  # Manage user-related operations
│   ├── RoleManagement.js  # Manage roles
│   ├── RolePermissions.js # Manage role permissions
│   ├── Alert.js           # Display alert notifications
│   └── About.js           # About section of the application
├── App.js                 # Main application component
├── index.js               # Application entry point
```

---

## Key Components

### **Navbar**
- Contains links to different sections.
- Includes a dark mode toggle.

### **UserManagement**
- Manages user-related operations such as adding, editing, and deleting users.

### **RoleManagement**
- Handles the creation and management of roles.

### **RolePermissions**
- Defines and manages permissions for roles.

### **Alert**
- Provides feedback to users through notifications.

### **About**
- Explains the purpose and functionality of the application.

---

## Dark Mode
The application supports light and dark themes. Toggle the mode using the button in the navigation bar. The mode dynamically changes the background color and button styles.

---

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production.

---

## Future Enhancements
- Add authentication and authorization.
- Integrate with a backend for persistent data storage.
- Implement advanced search, filter, and sort functionalities.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.
