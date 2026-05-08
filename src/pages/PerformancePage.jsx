import React from 'react'
import { ChartIcon, ClockIcon, UsersIcon, ZapIcon } from '../components/Icons'
import './PerformancePage.css'

const PerformancePage = () => {
  return (
    <div className="performance-page">
      <div className="page-header">
        <h1>绩效分析与报表</h1>
        <p className="page-desc">多维度的工时与绩效视图</p>
      </div>

      <div className="performance-content">
        <div className="filter-section">
          <div className="card">
            <div className="filter-controls">
              <div className="filter-group">
                <label>时间区间</label>
                <select className="filter-select">
                  <option>本月</option>
                  <option>上月</option>
                  <option>本季度</option>
                  <option>自定义</option>
                </select>
              </div>
              <div className="filter-group">
                <label>分析维度</label>
                <select className="filter-select">
                  <option>部门</option>
                  <option>项目</option>
                  <option>个人</option>
                  <option>岗位</option>
                </select>
              </div>
              <button className="btn-primary">查询</button>
              <button className="btn-secondary">导出报告</button>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><ChartIcon /></div>
              <div className="stat-info">
                <div className="stat-label">出勤率</div>
                <div className="stat-value">96.5%</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ClockIcon /></div>
              <div className="stat-info">
                <div className="stat-label">加班率</div>
                <div className="stat-value">12.3%</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><UsersIcon /></div>
              <div className="stat-info">
                <div className="stat-label">人均工时</div>
                <div className="stat-value">168 小时</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ZapIcon /></div>
              <div className="stat-info">
                <div className="stat-label">人效指标</div>
                <div className="stat-value">1.25</div>
              </div>
            </div>
          </div>
        </div>

        <div className="charts-section">
          <div className="charts-grid">
            <div className="card chart-card">
              <div className="card-header">
                <h2>趋势分析</h2>
              </div>
              <div className="chart-container">
                <div className="mock-chart trend-chart">
                  <div className="chart-title">工时趋势图（近6个月）</div>
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '60%' }}></div>
                    <div className="bar" style={{ height: '75%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '70%' }}></div>
                    <div className="bar" style={{ height: '85%' }}></div>
                    <div className="bar" style={{ height: '90%' }}></div>
                  </div>
                  <div className="chart-labels">
                    <span>7月</span>
                    <span>8月</span>
                    <span>9月</span>
                    <span>10月</span>
                    <span>11月</span>
                    <span>12月</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card chart-card">
              <div className="card-header">
                <h2>对比分析</h2>
              </div>
              <div className="chart-container">
                <div className="mock-chart compare-chart">
                  <div className="chart-title">部门工时对比</div>
                  <div className="compare-items">
                    <div className="compare-item">
                      <span className="dept-name">技术部</span>
                      <div className="compare-bar">
                        <div className="bar-fill" style={{ width: '85%' }}></div>
                      </div>
                      <span className="dept-value">1680h</span>
                    </div>
                    <div className="compare-item">
                      <span className="dept-name">产品部</span>
                      <div className="compare-bar">
                        <div className="bar-fill" style={{ width: '70%' }}></div>
                      </div>
                      <span className="dept-value">1400h</span>
                    </div>
                    <div className="compare-item">
                      <span className="dept-name">运营部</span>
                      <div className="compare-bar">
                        <div className="bar-fill" style={{ width: '60%' }}></div>
                      </div>
                      <span className="dept-value">1200h</span>
                    </div>
                    <div className="compare-item">
                      <span className="dept-name">市场部</span>
                      <div className="compare-bar">
                        <div className="bar-fill" style={{ width: '55%' }}></div>
                      </div>
                      <span className="dept-value">1100h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-section">
          <div className="card">
            <div className="card-header">
              <h2>明细表</h2>
              <button className="btn-secondary">导出Excel</button>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>部门</th>
                    <th>姓名</th>
                    <th>岗位</th>
                    <th>总工时</th>
                    <th>出勤率</th>
                    <th>加班时长</th>
                    <th>异常工时</th>
                    <th>人工成本</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>技术部</td>
                    <td>张三</td>
                    <td>高级工程师</td>
                    <td>168 小时</td>
                    <td className="good">98%</td>
                    <td>12 小时</td>
                    <td className="normal">2 小时</td>
                    <td>¥15,680</td>
                  </tr>
                  <tr>
                    <td>技术部</td>
                    <td>李四</td>
                    <td>工程师</td>
                    <td>165 小时</td>
                    <td className="good">96%</td>
                    <td>8 小时</td>
                    <td className="normal">1 小时</td>
                    <td>¥12,320</td>
                  </tr>
                  <tr>
                    <td>产品部</td>
                    <td>王五</td>
                    <td>产品经理</td>
                    <td>170 小时</td>
                    <td className="good">99%</td>
                    <td>15 小时</td>
                    <td className="normal">0 小时</td>
                    <td>¥18,700</td>
                  </tr>
                  <tr>
                    <td>运营部</td>
                    <td>赵六</td>
                    <td>运营专员</td>
                    <td>160 小时</td>
                    <td className="warning">93%</td>
                    <td>5 小时</td>
                    <td className="warning">3 小时</td>
                    <td>¥9,600</td>
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

export default PerformancePage

