<template>
    <nav class="navbar">
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
      </ul>
      <router-link to="/login" class="login-button">登录/注册</router-link> <!-- 添加登录/注册按钮 -->
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar"
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between; /* 确保导航项在两侧对齐 */
    background-color: black; /* 底色改为黑色 */
    padding: 10px 20px; /* 为导航栏添加内边距 */
    height: 60px; /* 固定高度 */
    position: fixed; /* 固定在页面顶部 */
    top: 0;
    left: 0; /* 确保从页面左侧开始 */
    right: 0; /* 确保到达页面右侧 */
    z-index: 1000; /* 确保在其他内容之上 */
  }
  
  .logo {
    height: 40px; /* Logo 的高度适应导航栏 */
    margin-right: 15px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px; /* 项目之间的间距 */
    margin: 0; /* 移除默认边距 */
    padding: 0; /* 移除默认内边距 */
  }
  
  .nav-links li {
    margin: 0; /* 移除默认边距 */
  }
  
  .nav-links a {
    text-decoration: none;
    color: white; /* 字体为白色 */
    font-size: 1rem;
    font-weight: bold; /* 字体加粗 */
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #007BFF; /* 鼠标悬停颜色 */
  }
  
  .login-button {
    text-decoration: none;
    color: black; /* 字体为白色 */
    background-color: #ffbb00; /* 按钮背景颜色 */
    padding: 10px 15px; /* 按钮内边距 */
    border-radius: 5px; /* 按钮圆角 */
    font-weight: bold; /* 字体加粗 */
    transition: background-color 0.3s; /* 背景颜色过渡效果 */
  }
  
  .login-button:hover {
    background-color: #bb5500; /* 鼠标悬停颜色 */
  }
  </style>
  