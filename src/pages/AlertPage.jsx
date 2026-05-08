import React from 'react'
import './AlertPage.css'

const AlertPage = () => {
  const alerts = [
    { id: 1, type: '连续加班超限', employee: '张三', dept: '技术部', date: '2024-01-15', score: 85, level: '高', status: '待处理', reason: '连续3天加班超过3小时' },
    { id: 2, type: '缺勤率过高', employee: '李四', dept: '产品部', date: '2024-01-14', score: 72, level: '中', status: '处理中', reason: '本月缺勤率15%' },
    { id: 3, type: '深夜工时异常', employee: '王五', dept: '技术部', date: '2024-01-13', score: 68, level: '中', status: '已处理', reason: '多次深夜23:00后打卡' },
    { id: 4, type: '打卡位置异常', employee: '赵六', dept: '运营部', date: '2024-01-12', score: 55, level: '低', status: '已处理', reason: '打卡位置与工作地点不符' },
  ]

  return (
    <div className="alert-page">
      <div className="page-header">
        <h1>异常工时预警</h1>
        <p className="page-desc">识别异常工时，及时应对用工风险</p>
      </div>

      <div className="alert-content">
        <div className="config-section">
          <div className="card">
            <div className="card-header">
              <h2>预警规则设置</h2>
            </div>
            <div className="rules-form">
              <div className="rule-item">
                <div className="rule-header">
                  <h3>连续加班超限</h3>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="rule-config">
                  <div className="config-item">
                    <label>阈值：连续</label>
                    <input type="number" defaultValue="3" className="small-input" />
                    <span>天，每天加班超过</span>
                    <input type="number" defaultValue="3" className="small-input" />
                    <span>小时</span>
                  </div>
                </div>
              </div>

              <div className="rule-item">
                <div className="rule-header">
                  <h3>缺勤率过高</h3>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="rule-config">
                  <div className="config-item">
                    <label>阈值：月度缺勤率超过</label>
                    <input type="number" defaultValue="10" className="small-input" />
                    <span>%</span>
                  </div>
                </div>
              </div>

              <div className="rule-item">
                <div className="rule-header">
                  <h3>深夜工时异常</h3>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="rule-config">
                  <div className="config-item">
                    <label>阈值：深夜</label>
                    <input type="time" defaultValue="23:00" className="small-input" />
                    <span>后打卡次数超过</span>
                    <input type="number" defaultValue="5" className="small-input" />
                    <span>次/月</span>
                  </div>
                </div>
              </div>

              <div className="rule-item">
                <div className="rule-header">
                  <h3>打卡位置异常</h3>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="rule-config">
                  <div className="config-item">
                    <label>阈值：打卡位置距离工作地点超过</label>
                    <input type="number" defaultValue="500" className="small-input" />
                    <span>米</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn-primary">保存规则</button>
            </div>
          </div>
        </div>

        <div className="alert-list-section">
          <div className="card">
            <div className="card-header">
              <h2>预警列表</h2>
              <div className="header-actions">
                <select className="filter-select">
                  <option>全部状态</option>
                  <option>待处理</option>
                  <option>处理中</option>
                  <option>已处理</option>
                </select>
                <button className="btn-secondary">批量处理</button>
              </div>
            </div>
            <div className="alert-table-container">
              <table className="alert-table">
                <thead>
                  <tr>
                    <th>异常类型</th>
                    <th>员工</th>
                    <th>部门</th>
                    <th>日期</th>
                    <th>异常评分</th>
                    <th>风险等级</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map(alert => (
                    <tr key={alert.id}>
                      <td>
                        <span className={`alert-type ${alert.level}`}>{alert.type}</span>
                      </td>
                      <td>{alert.employee}</td>
                      <td>{alert.dept}</td>
                      <td>{alert.date}</td>
                      <td>
                        <div className="score-cell">
                          <span className="score-value">{alert.score}</span>
                          <div className="score-bar">
                            <div className="score-fill" style={{ width: `${alert.score}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`level-badge ${alert.level}`}>
                          {alert.level === '高' ? '🔴' : alert.level === '中' ? '🟡' : '🟢'} {alert.level}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${alert.status}`}>{alert.status}</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-small btn-view">查看</button>
                          <button className="btn-small btn-process">处理</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertPage

