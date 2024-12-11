<template>
  <nav class="navbar">
    <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
    <ul class="nav-links">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
      <li><router-link to="/my-orders">我的订单</router-link></li>
      <li>
        <a href="tel:666666666" class="phone-button">666-666-666</a> <!-- 电话按钮 -->
      </li>
    </ul>
    <router-link to="/login" class="login-button">登录/注册</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 导航项左右对齐 */
  background-color: black; /* 导航栏背景为黑色 */
  padding: 4px 48px; /* 内边距 */
  height: 56px; /* 固定高度 */
  position: fixed; /* 固定位置 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 确保导航栏在最上层 */
}

.logo {
  height: 32px; /* 设置Logo高度 */
  margin-right: 15px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 32px; /* 每个链接间距 */
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: white; /* 文字颜色为白色 */
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffbb00; /* 悬停时变为黄色 */
}

.login-button {
  text-decoration: none;
  color: white; /* 按钮文字为白色 */
  background-color: #ffbb00; /* 按钮背景颜色 */
  padding: 8px 12px; /* 按钮内边距 */
  border-radius: 5px; /* 按钮圆角 */
  font-weight: bold; /* 按钮文字加粗 */
  transition: background-color 0.3s; /* 背景色过渡 */
}

.login-button:hover {
  background-color: #bb5500; /* 悬停时按钮背景颜色变化 */
}

.phone-button {
  text-decoration: none;
  color: white; /* 按钮文字为白色 */
  background-color: #ffbb00; /* 按钮背景颜色 */
  padding: 8px 12px; /* 按钮内边距 */
  border-radius: 5px; /* 按钮圆角 */
  font-weight: bold; /* 按钮文字加粗 */
  transition: background-color 0.3s; /* 背景色过渡 */
}

.phone-button:hover {
  background-color: #bb5500; /* 悬停时按钮背景颜色变化 */
}
</style>