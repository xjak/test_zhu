{
  // 插件名称
  "name": "BrowerToolkit",
  // 插件作者
  "author": "Ghroth",
  // 插件版本
  "version": "1.0",
  // 插件架构
  "manifest_version": 2,
  // 插件描述
  "description": "Encode/Decode、Set Cookie",
  // 插件图标
  "icons": {
    "16": "resource/img/ico.png",
    "64": "resource/img/ico.png"
  },
  // 插件后台运行脚本
  "background": {
    // 始终运行，不会在空闲时休眠
    "persistent": true,
    // 后端运行脚本路径
    "scripts": ["resource/js/background.js"]
  },
  // 浏览器右上角插件栏设置
  "browser_action": {
    // 将鼠标悬停在操作图标上时向用户提供简短说明
    "default_title": "BrowerToolkit",
    // 插件栏图标
    "default_icon": "resource/img/ico.png",
    // 插件栏点击后弹出页面地址
    "default_popup": "resource/html/popup.html"
  },
  "permissions": [
    // API 的使用权限
    "contextMenus",
    // 对相应网站的访问权限
    "http://*/*",
    "https://*/*"
  ],
  // CSP
  // 需要内联 CSS 生效的，style-src 后面添加'unsafe-inline'
  // 需要进行 web3 模板生成的，script-src 后面添加'unsafe-eval'
  "content_security_policy": "style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval'; object-src 'self';"
}

chrome.storage.local.set({'key_s': 1100}, e => {
  console.log('local set....');
})

chrome.storage.local.get(null, e => {
  console.log('local get....', e);
})
