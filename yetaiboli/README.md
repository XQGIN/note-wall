# 2024年全球GDP展示 - 交互式地球模型

这是一个使用HTML、CSS和JavaScript开发的交互式3D地球模型，用于展示2024年全球各国的GDP数据。

## 功能特点

- 🌍 3D交互式地球模型，可旋转和缩放
- 📊 显示2024年全球各国GDP数据
- 🎨 根据GDP大小使用不同颜色标记国家
- 🖱️ 鼠标悬停显示国家详细信息
- 📱 响应式设计，支持移动设备
- 🌟 美观的星空背景效果

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Three.js (3D图形库)
- OrbitControls (相机控制)

## 使用方法

1. 在本地环境中启动HTTP服务器：
   ```
   python -m http.server 8000
   ```

2. 在浏览器中访问：
   ```
   http://localhost:8000/gdp-globe.html
   ```

## 交互操作

- **鼠标左键拖动**：旋转地球
- **鼠标滚轮**：缩放地球
- **鼠标悬停**：显示国家GDP信息
- **点击国家**：查看详细信息

## 文件结构

```
d:\programs\two\
├── gdp-globe.html    # 主HTML文件
├── gdp-styles.css    # 样式文件
├── gdp-data.js       # GDP数据文件
├── gdp-script.js     # 主要JavaScript逻辑
└── README.md         # 项目说明文档
```

## 数据来源

本项目使用的是2024年全球各国GDP估算数据，以万亿美元为单位。

## 注意事项

- 需要现代浏览器支持WebGL
- 首次加载可能需要一些时间来下载Three.js库
- 数据为估算值，仅供参考

## 开发者

本项目使用纯前端技术栈开发，无需后端服务器支持。