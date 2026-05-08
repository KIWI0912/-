import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { HomeIcon, UsersIcon, ClockIcon, CalendarIcon, ChartIcon, AlertIcon, LinkIcon, LogoutIcon } from './Icons'
import './Layout.css'

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // 根据角色过滤菜单项
  const getMenuItems = () => {
    const allItems = [
      { path: '/', label: '首页', icon: <HomeIcon />, roles: ['employee', 'manager', 'admin'] },
      { path: '/attendance', label: '考勤打卡', icon: <ClockIcon />, roles: ['employee', 'manager', 'admin'] },
      { path: '/scheduling', label: '智能排班', icon: <CalendarIcon />, roles: ['manager', 'admin'] },
      { path: '/performance', label: '绩效分析', icon: <ChartIcon />, roles: ['manager', 'admin'] },
      { path: '/alert', label: '异常预警', icon: <AlertIcon />, roles: ['manager', 'admin'] },
      { path: '/role-permission', label: '角色与权限', icon: <UsersIcon />, roles: ['admin'] },
      { path: '/integration', label: '系统集成', icon: <LinkIcon />, roles: ['admin'] },
    ]

    if (!user) return []
    const userRole = user.role === 'employee' ? 'employee' : user.role === 'manager' ? 'manager' : 'admin'
    return allItems.filter(item => item.roles.includes(userRole))
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="layout">
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>领航员工时系统</h2>
          <button 
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="sidebar-nav">
          {getMenuItems().map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          ))}
        </nav>
        {sidebarOpen && user && (
          <div className="sidebar-footer">
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-role">{user.role === 'admin' ? '系统管理员' : user.role === 'manager' ? '部门管理员' : '普通员工'}</div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <LogoutIcon />
              <span>退出登录</span>
            </button>
          </div>
        )}
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

