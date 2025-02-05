import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import AdminLayout from "../pages/Admin/Layout";
import Dashboard from "../pages/Admin/Dashboard";
import TaskHall from "../pages/Admin/TaskHall";
import UserManager from "../pages/Admin/UserManager";
import PermissionManagement from "../pages/Admin/PermissionManagement";
import TaskAssignment from "../pages/Admin/TaskAssignment";
import UserProfile from "../pages/Admin/UserProfile";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Navigate to="/dashboard" /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "tasks", element: <TaskHall /> },
          { path: "users", element: <UserManager /> },
          { path: "permissions", element: <PermissionManagement /> },
          { path: "assignments", element: <TaskAssignment /> },
          { path: "profile", element: <UserProfile /> },
        ],
      },
    ],
  },
]);

function ProtectedRoute() {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default router;
