import React, { useState } from "react";
import active from './Active.png';
import inactive from './Inactive.png';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const initialUsers = [
  { id: 1, name: "Souramita Debbarman", mail: "souramitadebbarmandmr@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Ashish Kumar", mail: "ashish563228@gmail.com", role: "Viewer", status: "Inactive" },
];

const roles = ["Admin", "Editor", "Viewer"];

const UserManagement = (props) => {
  const [users, setUsers] = useState(initialUsers);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", mail: "", role: "", status: "Active" });

  const [emailError, setEmailError] = useState(""); // Email validation error
  const [nameError, setNameError] = useState(""); // Name validation error

  const handleOpen = (user = null) => {
    setCurrentUser(user);
    setFormData(user || { name: "", mail: "", role: "", status: "Active" });
    setEmailError("");
    setNameError("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError(""); // Clear error
      }
    }

    if (name === "name") {
      if (value.trim() === "") {
        setNameError("Name cannot be empty");
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        setNameError("Name can only contain letters and spaces");
      } else {
        setNameError(""); // Clear error
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (emailError || nameError || !formData.mail || !formData.name) {
      if (!formData.mail) setEmailError("Email is required");
      if (!formData.name) setNameError("Name is required");
      return; // Stop if validation fails
    }

    if (currentUser) {
      // Edit existing user
      setUsers((prev) =>
        prev.map((user) =>
          user.id === currentUser.id ? { ...user, ...formData } : user
        )
      );
    } else {
      // Add new user
      setUsers((prev) => [
        ...prev,
        { id: prev.length + 1, ...formData },
      ]);
    }

    handleClose();
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>ID</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Name</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Email-ID</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Role</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Status</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{user.id}</TableCell>
                <TableCell style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{user.name}</TableCell>
                <TableCell style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{user.mail}</TableCell>
                <TableCell style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{user.role}</TableCell>
                <TableCell style={{ color: props.mode === 'dark' ? 'white' : 'black' }}><img src={user.status === "Active" ? active : inactive} alt={user.status === "Active" ? "Active Status" : "Inactive Status"} height="20px" />{user.status}</TableCell>
                <TableCell>
                  <Button
                    style={{ margin: "2px" }}
                    variant={props.btn}
                    color="primary"
                    onClick={() => handleOpen(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ margin: "2px" }}
                    variant={props.btn}
                    color="secondary"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="d-flex flex-row-reverse bd-highlight">
          <div className="p-2 bd-highlight">
            <Button
              style={{ margin: "2px" }}
              variant="contained"
              color="primary"
              onClick={() => handleOpen()}
            >
              Add User
            </Button>
          </div>
        </div>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentUser ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(nameError)} // Show red border if there's an error
            helperText={nameError} // Show the error message
          />
          <TextField
            fullWidth
            margin="dense"
            name="mail"
            label="Email-ID"
            value={formData.mail}
            onChange={handleChange}
            error={Boolean(emailError)} // Show red border if there's an error
            helperText={emailError} // Show the error message
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagement;
