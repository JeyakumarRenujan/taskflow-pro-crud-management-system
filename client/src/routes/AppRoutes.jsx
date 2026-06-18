import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import Tasks from "../pages/tasks/Tasks";
import Profile from "../pages/profile/Profile";

import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/tasks"
                        element={<Tasks />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                </Route>

                <Route
                    path="*"
                    element={<Navigate to="/dashboard" />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;