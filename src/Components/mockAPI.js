// Simulating a mock API for CRUD operations on users and roles

export const mockAPI = {
    // Simulate fetching roles
    getRoles: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
            { id: 2, name: "Editor", permissions: ["Read", "Write"] },
            { id: 3, name: "Viewer", permissions: ["Read"] },
          ]);
        }, 500); // Simulate API delay
      });
    },
  
    // Simulate adding a new role
    addRole: (newRole) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ...newRole,
            id: Math.random().toString(36).substr(2, 9), // Generate a random id
          });
        }, 500);
      });
    },
  
    // Simulate updating a role
    updateRole: (updatedRole) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(updatedRole); // Return the updated role
        }, 500);
      });
    },
  
    // Simulate deleting a role
    deleteRole: (roleId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(roleId); // Return the deleted role ID
        }, 500);
      });
    },
  
    // Simulate fetching users
    getUsers: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, username: "admin_user", role: "Admin", status: "Active" },
            { id: 2, username: "editor_user", role: "Editor", status: "Inactive" },
          ]);
        }, 500); // Simulate API delay
      });
    },
  
    // Simulate adding a new user
    addUser: (newUser) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ...newUser,
            id: Math.random().toString(36).substr(2, 9), // Generate a random id
          });
        }, 500);
      });
    },
  
    // Simulate updating a user
    updateUser: (updatedUser) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(updatedUser); // Return the updated user
        }, 500);
      });
    },
  
    // Simulate deleting a user
    deleteUser: (userId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(userId); // Return the deleted user ID
        }, 500);
      });
    },
  };
  