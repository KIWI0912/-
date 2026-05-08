import React from 'react'
import './SchedulingPage.css'

const SchedulingPage = () => {
  return (
    <div className="scheduling-page">
      <div className="page-header">
        <h1>智能排班</h1>
        <p className="page-desc">排班方案生成与优化</p>
      </div>

      <div className="scheduling-content">
        <div className="config-section">
          <div className="card">
            <div className="card-header">
              <h2>排班策略配置</h2>
            </div>
            <div className="config-form">
              <div className="form-row">
                <div className="form-group">
                  <label>法定工时（小时/天）</label>
                  <input type="number" defaultValue="8" />
                </div>
                <div className="form-group">
                  <label>休息规则</label>
                  <select>
                    <option>每周至少休息1天</option>
                    <option>每周至少休息2天</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>技能要求</label>
                  <div className="skill-tags">
                    <span className="skill-tag">技术开发</span>
                    <span className="skill-tag">项目管理</span>
                    <span className="skill-tag">+ 添加</span>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>需求预测</label>
                  <div className="prediction-settings">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>基于历史数据预测</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>考虑业务周期波动</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>人工成本估算</label>
                  <input type="text" placeholder="自动计算" readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-section">
          <div className="action-buttons">
            <button className="btn-primary large">
              <span className="btn-icon">⚙️</span>
              生成方案
            </button>
            <button className="btn-secondary large">
              <span className="btn-icon">🔍</span>
              冲突检测
            </button>
            <button className="btn-secondary large">
              <span className="btn-icon">✨</span>
              优化方案
            </button>
          </div>
        </div>

        <div className="result-section">
          <div className="card">
            <div className="card-header">
              <h2>排班方案预览</h2>
              <div className="header-actions">
                <button className="btn-secondary">导出</button>
                <button className="btn-primary">发布排班表</button>
              </div>
            </div>
            <div className="schedule-table-container">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>员工</th>
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                    <th>周六</th>
                    <th>周日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>张三</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="rest-day">休息</td>
                    <td className="rest-day">休息</td>
                  </tr>
                  <tr>
                    <td>李四</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="rest-day">休息</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="rest-day">休息</td>
                  </tr>
                  <tr>
                    <td>王五</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="rest-day">休息</td>
                    <td className="work-day">09:00-18:00</td>
                    <td className="rest-day">休息</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulingPage

