import React from 'react'
import './IntegrationPage.css'

const IntegrationPage = () => {
  const integrations = [
    { id: 1, name: 'OA系统', type: 'SAML', status: '已启用', lastSync: '2024-01-15 14:30:25' },
    { id: 2, name: '财务系统', type: 'OAuth2', status: '已启用', lastSync: '2024-01-15 14:28:10' },
    { id: 3, name: '项目管理系统', type: 'API', status: '已启用', lastSync: '2024-01-15 14:25:45' },
    { id: 4, name: 'HR系统', type: 'SAML', status: '已启用', lastSync: '2024-01-15 14:20:30' },
    { id: 5, name: '后勤系统', type: 'API', status: '已启用', lastSync: '2024-01-15 14:15:20' },
  ]

  return (
    <div className="integration-page">
      <div className="page-header">
        <h1>系统集成与单点登录</h1>
        <p className="page-desc">系统对接和认证统一配置</p>
      </div>

      <div className="integration-content">
        <div className="config-section">
          <div className="card">
            <div className="card-header">
              <h2>SSO 配置</h2>
            </div>
            <div className="sso-config">
              <div className="form-group">
                <label>协议类型</label>
                <select>
                  <option>SAML 2.0</option>
                  <option>OAuth2</option>
                  <option>OpenID Connect</option>
                </select>
              </div>
              <div className="form-group">
                <label>SSO 服务地址</label>
                <input type="text" defaultValue="https://sso.company.com/saml" />
              </div>
              <div className="form-group">
                <label>实体ID (Entity ID)</label>
                <input type="text" defaultValue="领航员工时系统" />
              </div>
              <div className="form-group">
                <label>字段映射</label>
                <div className="mapping-table">
                  <div className="mapping-row">
                    <span className="mapping-label">用户名</span>
                    <span className="mapping-arrow">→</span>
                    <input type="text" defaultValue="username" />
                  </div>
                  <div className="mapping-row">
                    <span className="mapping-label">部门</span>
                    <span className="mapping-arrow">→</span>
                    <input type="text" defaultValue="department" />
                  </div>
                  <div className="mapping-row">
                    <span className="mapping-label">岗位</span>
                    <span className="mapping-arrow">→</span>
                    <input type="text" defaultValue="position" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sync-section">
          <div className="card">
            <div className="card-header">
              <h2>同步策略 / 任务调度</h2>
            </div>
            <div className="sync-config">
              <div className="form-group">
                <label>同步周期</label>
                <select>
                  <option>实时同步</option>
                  <option>每小时</option>
                  <option>每天</option>
                  <option>每周</option>
                </select>
              </div>
              <div className="form-group">
                <label>调度时间</label>
                <input type="time" defaultValue="02:00" />
              </div>
              <div className="form-group">
                <label>失败重试次数</label>
                <input type="number" defaultValue="3" />
              </div>
              <div className="form-group">
                <label>监控告警</label>
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>同步失败时发送告警</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="interfaces-section">
          <div className="card">
            <div className="card-header">
              <h2>接口配置</h2>
              <button className="btn-primary">+ 新增接口</button>
            </div>
            <div className="interfaces-list">
              {integrations.map(integration => (
                <div key={integration.id} className="interface-item">
                  <div className="interface-header">
                    <div className="interface-info">
                      <h3>{integration.name}</h3>
                      <span className="interface-type">{integration.type}</span>
                    </div>
                    <div className="interface-status">
                      <span className={`status-badge ${integration.status === '已启用' ? 'active' : 'inactive'}`}>
                        {integration.status}
                      </span>
                    </div>
                  </div>
                  <div className="interface-details">
                    <div className="detail-item">
                      <span className="detail-label">最后同步：</span>
                      <span className="detail-value">{integration.lastSync}</span>
                    </div>
                    <div className="interface-actions">
                      <button className="btn-edit">编辑</button>
                      <button className="btn-test">测试连接</button>
                      <button className="btn-delete">删除</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="special-interfaces">
          <div className="card">
            <div className="card-header">
              <h2>财务系统接口配置</h2>
            </div>
            <div className="special-config">
              <div className="form-group">
                <label>接口地址</label>
                <input type="text" defaultValue="https://finance.company.com/api/v1/timesheet" />
              </div>
              <div className="form-group">
                <label>同步字段</label>
                <div className="field-checkboxes">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>工时数据</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>薪酬结算</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>成本中心</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>项目费用分摊</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>后勤系统接口配置</h2>
            </div>
            <div className="special-config">
              <div className="form-group">
                <label>接口地址</label>
                <input type="text" defaultValue="https://logistics.company.com/api/v1/workorders" />
              </div>
              <div className="form-group">
                <label>同步字段</label>
                <div className="field-checkboxes">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>后勤工单</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>宿舍管理</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>餐饮管理</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationPage

