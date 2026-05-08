import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import RolePermissionPage from './pages/RolePermissionPage'
import AttendancePage from './pages/AttendancePage'
import SchedulingPage from './pages/SchedulingPage'
import PerformancePage from './pages/PerformancePage'
import AlertPage from './pages/AlertPage'
import IntegrationPage from './pages/IntegrationPage'
import HomePage from './pages/HomePage'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="role-permission" element={<RolePermissionPage />} />
        <Route path="attendance" element={<AttendancePage />} />
        <Route path="scheduling" element={<SchedulingPage />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="alert" element={<AlertPage />} />
        <Route path="integration" element={<IntegrationPage />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App

