import React, { useState } from "react";
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
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const permissionGroups = {
  General: ["Read", "Export"],
  Content: ["Write", "Update", "Delete"],
};

const initialRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete", "Update", "Export"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write", "Update"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

const RoleManagement = (props) => {
  const [roles, setRoles] = useState(initialRoles);
  const [open, setOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [auditTrail, setAuditTrail] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ border: "2px solid black", padding: "12px" }}><h1 >Role Permissions Management</h1></div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>ID</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Role Name</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Permissions</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}>{role.id}</TableCell>
                <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}>{role.name}</TableCell>
                <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}>{role.permissions.join(", ")}</TableCell>

                {/* Action Buttons */}
                <TableCell>
                  {/* Modify Permissions Button */}
                  <Button
                    style={{ margin: "2px" }}
                    variant={props.btn}
                    color="primary"
                    onClick={() => {
                      setCurrentRole(role);
                      setSelectedPermissions(role.permissions);
                      setOpen(true);
                    }}
                  >
                    Modify Permissions
                  </Button>
                  {/* Duplicate Role Button */}
                  <Button
                    variant={props.btn}
                    color="secondary"
                    onClick={() =>
                      setRoles((prev) => [
                        ...prev,
                        {
                          id: roles.length + 1,
                          name: `${role.name} Copy`,
                          permissions: [...role.permissions],
                        },
                      ])
                    }
                    style={{ margin: "2px" }}
                  >
                    Duplicate Role
                  </Button>
                  {/* Delete Role Button */}
                  {role.name.includes("Copy") && (
                    <Button
                      style={{ margin: "2px" }}
                      variant={props.btn}
                      color="error"
                      onClick={() =>
                        setRoles((prev) => prev.filter((r) => r.id !== role.id))
                      }
                    >
                      Delete Role
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for modifying permissions */}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setCurrentRole(null);
        }}
      >
        <DialogTitle>
          Modify Permissions for {currentRole?.name}
        </DialogTitle>
        <DialogContent>
          {Object.entries(permissionGroups).map(([group, permissions]) => (
            <div key={group}>
              <h4>{group}</h4>
              {permissions.map((permission) => (
                <FormControlLabel
                  key={permission}
                  control={
                    <Checkbox
                      checked={selectedPermissions.includes(permission)}
                      onChange={() =>
                        setSelectedPermissions((prev) =>
                          prev.includes(permission)
                            ? prev.filter((perm) => perm !== permission)
                            : [...prev, permission]
                        )
                      }
                    />
                  }
                  label={permission}
                />
              ))}
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button style={{ margin: "2px" }}
            onClick={() => {
              setOpen(false);
              setCurrentRole(null);
            }}
            color="secondary"
          >
            Cancel
          </Button>
          <Button style={{ margin: "2px" }}
            onClick={() => {
              const changeLog = {
                roleId: currentRole.id,
                roleName: currentRole.name,
                oldPermissions: currentRole.permissions,
                newPermissions: selectedPermissions,
                modifiedAt: new Date().toISOString(),
              };
              setAuditTrail((prev) => [...prev, changeLog]);
              setRoles((prev) =>
                prev.map((role) =>
                  role.id === currentRole.id
                    ? { ...role, permissions: selectedPermissions }
                    : role
                )
              );
              setOpen(false);
              setCurrentRole(null);
            }}
            color="primary"
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Audit Trail */}
      <div style={{ border: "2px solid black", padding: "12px", margin: "10px" }}><h2 >Audit Trail</h2></div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Role</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Old Permissions</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>New Permissions</b></TableCell>
              <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Modified At</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auditTrail.map((log, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}>{log.roleName}</TableCell>
                <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}>{log.oldPermissions.join(", ")}</TableCell>
                <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}>{log.newPermissions.join(", ")}</TableCell>
                <TableCell style={{ color: props.mode === "dark" ? "white" : "black" }}>{new Date(log.modifiedAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RoleManagement;
