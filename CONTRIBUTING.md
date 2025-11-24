# 贡献指南 - Contributing Guide

感谢您考虑为 Note Wall 项目做出贡献！本文档将指导您如何参与项目开发。

## 🎯 贡献方式

### 1. 报告问题 (Bug Reports)
- 使用 GitHub Issues 报告 bug
- 提供详细的重现步骤
- 包含浏览器版本和操作系统信息
- 附上错误截图或录屏

### 2. 功能请求 (Feature Requests)
- 描述新功能的用途和场景
- 说明为什么这个功能对用户有益
- 提供设计建议或参考

### 3. 代码贡献 (Code Contributions)
- 修复 bug
- 实现新功能
- 改进代码质量
- 优化性能

### 4. 文档改进 (Documentation)
- 改进现有文档
- 添加使用示例
- 翻译多语言文档

### 5. 设计贡献 (Design)
- UI/UX 改进建议
- 视觉设计优化
- 动画效果增强

## 🔧 开发环境设置

### 1. 克隆仓库
```bash
git clone https://github.com/XQGIN/note-wall.git
cd note-wall
```

### 2. 本地测试
```bash
# 使用本地服务器（推荐）
python -m http.server 8000

# 或直接打开文件
open note-wall/index.html
```

### 3. 代码结构
```
note-wall/
├── index.html          # 主应用文件
├── icon/               # 图标资源
├── imgs/               # 图片资源
├── README.md           # 项目说明
├── README_CN.md        # 中文说明
├── CONTRIBUTING.md     # 贡献指南
├── DEPLOYMENT.md       # 部署指南
└── LICENSE             # 许可证
```

## 📝 代码规范

### 1. HTML 规范
- 使用语义化标签
- 属性使用双引号
- 保持代码缩进一致（2个空格）
- 添加适当的注释

### 2. CSS 规范
- 使用 CSS 变量管理主题
- 遵循 BEM 命名规范
- 按功能模块组织样式
- 添加响应式设计

### 3. JavaScript 规范
- 使用现代 ES6+ 语法
- 保持函数简洁单一
- 添加 JSDoc 注释
- 处理错误和边界情况

### 4. 提交信息规范
使用约定式提交格式：
```
类型(范围): 描述

正文（可选）

脚注（可选）
```

**类型说明：**
- `feat`: 新功能
- `fix`: bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建或辅助工具变动

## 🚀 开发流程

### 1. 创建分支
```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/issue-number
```

### 2. 开发测试
- 在本地测试所有功能
- 确保响应式设计正常
- 测试不同浏览器兼容性
- 验证主题切换功能

### 3. 提交代码
```bash
git add .
git commit -m "feat(theme): 添加新的主题切换动画"
git push origin feature/your-feature-name
```

### 4. 创建 Pull Request
- 填写清晰的 PR 标题和描述
- 关联相关 Issue
- 等待代码审查
- 根据反馈进行修改

## 🧪 测试要求

### 1. 功能测试
- [ ] 主题切换功能正常
- [ ] 窗口创建和关闭正常
- [ ] 鼠标交互效果正常
- [ ] 响应式设计正常

### 2. 浏览器测试
- [ ] Chrome 最新版
- [ ] Firefox 最新版
- [ ] Safari 最新版
- [ ] Edge 最新版

### 3. 设备测试
- [ ] 桌面设备
- [ ] 平板设备
- [ ] 手机设备

## 🎨 设计原则

### 1. 用户体验
- 保持界面简洁直观
- 确保操作响应及时
- 提供适当的视觉反馈
- 考虑可访问性需求

### 2. 视觉设计
- 保持玻璃拟态设计风格
- 使用和谐的配色方案
- 确保动画流畅自然
- 保持视觉层次清晰

### 3. 性能考虑
- 优化动画性能
- 减少重绘和重排
- 合理使用硬件加速
- 控制内存使用

## 📚 文档标准

### 1. 代码注释
```javascript
/**
 * 创建新的提醒窗口
 * @param {string} tipText - 提醒文本内容
 * @param {number} index - 窗口索引
 * @returns {HTMLElement} 创建的窗口元素
 */
function createWindow(tipText, index) {
    // 实现代码
}
```

### 2. README 更新
- 新增功能需要更新文档
- 包含使用示例和截图
- 更新功能列表和兼容性信息

### 3. 变更日志
- 记录所有重大变更
- 说明向后兼容性
- 提供升级指南

## 🤝 社区准则

### 1. 行为准则
- 保持尊重和友好
- 建设性讨论
- 帮助其他贡献者
- 遵守项目规范

### 2. 沟通渠道
- 使用 GitHub Issues 讨论问题
- 通过 PR 评论进行代码审查
- 保持沟通透明公开

### 3. 决策流程
- 主要维护者拥有最终决定权
- 重大变更需要社区讨论
- 遵循项目路线图

## 🏆 认可贡献

所有贡献者将被记录在：
- GitHub Contributors 列表
- 项目 README 文件
- 发布说明中

## ❓ 常见问题

### Q: 如何开始第一个贡献？
A: 可以从修复简单的 bug 或改进文档开始，查看带有 "good first issue" 标签的 Issue。

### Q: 代码审查需要多长时间？
A: 通常在 1-3 个工作日内会得到回复，具体取决于 PR 的复杂程度。

### Q: 如何提出新功能建议？
A: 在 Issues 中创建功能请求，详细描述使用场景和预期效果。

### Q: 是否支持多语言？
A: 当前主要支持中文，欢迎贡献其他语言版本。

---

**感谢您的贡献！** 🌟

您的参与让这个项目变得更好。如果有任何问题，请随时创建 Issue 或联系维护者。