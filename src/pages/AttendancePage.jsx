import React from 'react'
import './AttendancePage.css'

const AttendancePage = () => {
  return (
    <div className="attendance-page">
      <div className="page-header">
        <h1>考勤打卡</h1>
        <p className="page-desc">工时采集与考勤管理</p>
      </div>

      <div className="attendance-content">
        <div className="attendance-left">
          <div className="card today-card">
            <div className="card-header">
              <h2>今日打卡</h2>
              <span className="date-badge">2024-01-15 星期一</span>
            </div>
            <div className="clock-display">
              <div className="current-time">14:30:25</div>
              <div className="current-date">2024年1月15日</div>
            </div>
            <div className="punch-buttons">
              <button className="punch-btn punch-in">
                <span className="btn-icon">📥</span>
                <span>上班打卡</span>
              </button>
              <button className="punch-btn punch-out">
                <span className="btn-icon">📤</span>
                <span>下班打卡</span>
              </button>
            </div>
            <div className="punch-status">
              <div className="status-item">
                <span className="status-label">上班时间：</span>
                <span className="status-value success">09:00:15</span>
              </div>
              <div className="status-item">
                <span className="status-label">下班时间：</span>
                <span className="status-value">--:--:--</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>外勤打卡</h2>
            </div>
            <div className="field-work">
              <div className="location-info">
                <span className="location-icon">📍</span>
                <span>当前位置：北京市朝阳区xxx街道</span>
              </div>
              <button className="field-punch-btn">
                <span className="btn-icon">🚗</span>
                外勤打卡
              </button>
            </div>
          </div>
        </div>

        <div className="attendance-right">
          <div className="card">
            <div className="card-header">
              <h2>我的工时</h2>
              <select className="time-select">
                <option>今日</option>
                <option>本周</option>
                <option>本月</option>
              </select>
            </div>
            <div className="work-hours-stats">
              <div className="stat-item">
                <div className="stat-label">今日工时</div>
                <div className="stat-value">5.5 小时</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">本周工时</div>
                <div className="stat-value">32.5 小时</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">本月工时</div>
                <div className="stat-value">128 小时</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>异常处理</h2>
            </div>
            <div className="exception-list">
              <div className="exception-item">
                <span className="exception-type">漏打卡</span>
                <span className="exception-date">2024-01-14</span>
                <button className="btn-apply">补卡申请</button>
              </div>
              <div className="exception-item">
                <span className="exception-type">迟到</span>
                <span className="exception-date">2024-01-13</span>
                <button className="btn-view">查看详情</button>
              </div>
            </div>
            <button className="btn-new-apply">+ 新建申请</button>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>班次规则</h2>
            </div>
            <div className="shift-info">
              <div className="shift-item">
                <span className="shift-label">当前班次：</span>
                <span className="shift-value">标准班次</span>
              </div>
              <div className="shift-item">
                <span className="shift-label">上班时间：</span>
                <span className="shift-value">09:00</span>
              </div>
              <div className="shift-item">
                <span className="shift-label">下班时间：</span>
                <span className="shift-value">18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendancePage

