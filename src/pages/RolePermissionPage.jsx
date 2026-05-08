import React from 'react'
import './RolePermissionPage.css'

const RolePermissionPage = () => {
  const roles = [
    { id: 1, name: '普通员工', desc: '打卡、查询个人工时、提交申请等', users: 1250 },
    { id: 2, name: '部门管理员', desc: '查看本部门工时与报表、管理排班、处理异常工时', users: 45 },
    { id: 3, name: '系统管理员', desc: '系统配置、集成管理、角色与权限维护等', users: 5 },
  ]

  const permissions = [
    { module: '考勤打卡', employee: '✓', manager: '✓', admin: '✓' },
    { module: '个人工时查询', employee: '✓', manager: '✓', admin: '✓' },
    { module: '部门工时查看', employee: '✗', manager: '✓', admin: '✓' },
    { module: '排班管理', employee: '✗', manager: '✓', admin: '✓' },
    { module: '异常处理', employee: '申请', manager: '✓', admin: '✓' },
    { module: '系统配置', employee: '✗', manager: '✗', admin: '✓' },
    { module: '集成管理', employee: '✗', manager: '✗', admin: '✓' },
  ]

  return (
    <div className="role-permission-page">
      <div className="page-header">
        <h1>角色与权限配置</h1>
        <p className="page-desc">基于角色与组织架构的权限模型管理</p>
      </div>

      <div className="content-section">
        <div className="section-title">
          <h2>角色列表</h2>
          <button className="btn-primary">+ 新增角色</button>
        </div>
        <div className="roles-grid">
          {roles.map(role => (
            <div key={role.id} className="role-card">
              <div className="role-header">
                <h3>{role.name}</h3>
                <span className="user-count">{role.users} 人</span>
              </div>
              <p className="role-desc">{role.desc}</p>
              <div className="role-actions">
                <button className="btn-edit">编辑</button>
                <button className="btn-delete">删除</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <div className="section-title">
          <h2>权限矩阵</h2>
        </div>
        <div className="permission-table-container">
          <table className="permission-table">
            <thead>
              <tr>
                <th>功能模块</th>
                <th>普通员工</th>
                <th>部门管理员</th>
                <th>系统管理员</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((perm, idx) => (
                <tr key={idx}>
                  <td>{perm.module}</td>
                  <td className={perm.employee === '✓' ? 'has-permission' : ''}>{perm.employee}</td>
                  <td className={perm.manager === '✓' ? 'has-permission' : ''}>{perm.manager}</td>
                  <td className={perm.admin === '✓' ? 'has-permission' : ''}>{perm.admin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-section">
        <div className="section-title">
          <h2>审计记录</h2>
          <button className="btn-secondary">查看全部</button>
        </div>
        <div className="audit-list">
          <div className="audit-item">
            <span className="audit-time">2024-01-15 14:30:25</span>
            <span className="audit-user">系统管理员</span>
            <span className="audit-action">修改角色权限：部门管理员</span>
          </div>
          <div className="audit-item">
            <span className="audit-time">2024-01-15 10:15:42</span>
            <span className="audit-user">系统管理员</span>
            <span className="audit-action">导出权限报表</span>
          </div>
          <div className="audit-item">
            <span className="audit-time">2024-01-14 16:20:18</span>
            <span className="audit-user">系统管理员</span>
            <span className="audit-action">新增角色：项目管理员</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RolePermissionPage

