import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LockIcon } from '../components/Icons'
import './LoginPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('employee')

  const handleLogin = (e) => {
    e.preventDefault()
    // 模拟登录，根据选择的角色设置用户信息
    const userData = {
      username: username || 'user@company.com',
      role: role,
      name: role === 'admin' ? '系统管理员' : role === 'manager' ? '部门管理员' : '普通员工',
      department: '技术部'
    }
    login(userData)
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>领航员工时系统</h1>
          <p className="login-subtitle">统一身份认证登录</p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>企业账号</label>
            <input
              type="text"
              placeholder="请输入企业账号"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>登录角色</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="employee">普通员工</option>
              <option value="manager">部门管理员</option>
              <option value="admin">系统管理员</option>
            </select>
          </div>
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span>记住我</span>
            </label>
            <a href="#" className="forgot-link">忘记密码？</a>
          </div>
          <button type="submit" className="login-btn">
            <LockIcon />
            <span>企业统一登录</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

