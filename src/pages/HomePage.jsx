import React from 'react'
import { useAuth } from '../context/AuthContext'
import { ClockIcon, CalendarIcon, ChartIcon, AlertIcon, WarningIcon } from '../components/Icons'
import './HomePage.css'

const HomePage = () => {
  const { user } = useAuth()

  const alerts = [
    { id: 1, type: 'warning', message: '您有3条异常工时记录待处理', time: '2024-01-15 14:30' },
    { id: 2, type: 'info', message: '本周工时统计已完成，请查看详情', time: '2024-01-15 10:00' },
  ]

  const stats = [
    { label: '今日工时', value: '5.5', unit: '小时', icon: <ClockIcon /> },
    { label: '本周工时', value: '32.5', unit: '小时', icon: <ClockIcon /> },
    { label: '本月工时', value: '128', unit: '小时', icon: <ClockIcon /> },
  ]

  const quickActions = user?.role === 'employee' ? [
    { path: '/attendance', label: '考勤打卡', icon: <ClockIcon /> },
  ] : user?.role === 'manager' ? [
    { path: '/attendance', label: '考勤打卡', icon: <ClockIcon /> },
    { path: '/scheduling', label: '智能排班', icon: <CalendarIcon /> },
    { path: '/performance', label: '绩效分析', icon: <ChartIcon /> },
    { path: '/alert', label: '异常预警', icon: <AlertIcon /> },
  ] : [
    { path: '/attendance', label: '考勤打卡', icon: <ClockIcon /> },
    { path: '/scheduling', label: '智能排班', icon: <CalendarIcon /> },
    { path: '/performance', label: '绩效分析', icon: <ChartIcon /> },
    { path: '/alert', label: '异常预警', icon: <AlertIcon /> },
  ]

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>工作台</h1>
        <p className="welcome-text">欢迎回来，{user?.name || '用户'}</p>
      </div>

      {alerts.length > 0 && (
        <div className="alerts-section">
          <div className="section-title">
            <WarningIcon />
            <h2>系统提醒</h2>
          </div>
          <div className="alerts-list">
            {alerts.map(alert => (
              <div key={alert.id} className={`alert-item ${alert.type}`}>
                <div className="alert-content">
                  <div className="alert-message">{alert.message}</div>
                  <div className="alert-time">{alert.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {user?.role === 'employee' && (
        <div className="stats-section">
          <h2>我的工时</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="quick-actions-section">
        <h2>快捷操作</h2>
        <div className="quick-actions-grid">
          {quickActions.map((action, index) => (
            <a key={index} href={action.path} className="quick-action-card">
              <div className="action-icon">{action.icon}</div>
              <div className="action-label">{action.label}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

