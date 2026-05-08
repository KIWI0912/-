# 领航员工时系统前端展示

本项目用于展示领航员工时系统用户使用手册中需要截图的7个功能页面。

## 功能页面

1. **登录页面** (`/login`) - 统一身份认证登录
2. **角色与权限配置页面** (`/role-permission`) - 权限管理
3. **考勤打卡页面** (`/attendance`) - 工时采集与考勤
4. **智能排班页面** (`/scheduling`) - 排班方案生成
5. **绩效分析页面** (`/performance`) - 报表与数据分析
6. **异常预警页面** (`/alert`) - 异常工时预警
7. **系统集成页面** (`/integration`) - SSO与系统集成

## 安装与运行

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

## 使用说明

1. 启动项目后，访问首页可以看到所有功能页面的导航卡片
2. 点击对应卡片或使用侧边栏导航跳转到需要截图的页面
3. 每个页面都包含了手册中要求的知识产权说明和标注
4. 可以直接对页面进行截图，用于制作对外材料

## 技术栈

- React 18
- React Router 6
- Vite
- CSS3

## 项目结构

```
├── src/
│   ├── components/      # 公共组件
│   │   ├── Layout.jsx   # 布局组件
│   │   └── Layout.css
│   ├── pages/           # 页面组件
│   │   ├── LoginPage.jsx
│   │   ├── RolePermissionPage.jsx
│   │   ├── AttendancePage.jsx
│   │   ├── SchedulingPage.jsx
│   │   ├── PerformancePage.jsx
│   │   ├── AlertPage.jsx
│   │   └── IntegrationPage.jsx
│   ├── App.jsx          # 主应用组件
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── index.html
├── package.json
└── vite.config.js
```

