<template>
    <div class="register-container">
      <div class="form-box">
        <h2 class="form-title">用户注册</h2>
        <form @submit.prevent="handleRegister">
          <div class="input-group">
            <label for="username">用户名</label>
            <input type="text" v-model="username" id="username" placeholder="请输入用户名" required />
          </div>
          <div class="input-group">
            <label for="email">邮箱</label>
            <input type="email" v-model="email" id="email" placeholder="请输入邮箱" required />
          </div>
          <div class="input-group">
            <label for="password">密码</label>
            <input type="password" v-model="password" id="password" placeholder="请输入密码" required />
          </div>
          <button type="submit" class="submit-btn">注册</button>
        </form>
        <div class="link-to-login">
          <p>已有账号？ <router-link to="/login">登录</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      handleRegister() {
        console.log('注册中...', this.username, this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5; /* 背景色 */
  }
  
  .form-box {
    background-color: #ffffff; /* 白色背景 */
    padding: 40px; /* 增加内边距 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    border-radius: 12px; /* 圆角 */
    width: 400px; /* 宽度 */
  }
  
  .form-title {
    text-align: center;
    margin-bottom: 20px;
    color: #333; /* 字体颜色 */
    font-size: 24px; /* 字体大小 */
  }
  
  .input-group {
    margin-bottom: 20px; /* 间距 */
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    color: #666; /* 字体颜色 */
  }
  
  .input-group input {
    width: 100%;
    padding: 12px; /* 内边距 */
    border: 1px solid #cccccc; /* 边框颜色 */
    border-radius: 6px; /* 圆角 */
    font-size: 16px; /* 字体大小 */
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px; /* 内边距 */
    background-color: #f4c256; /* 按钮颜色 */
    color: white; /* 字体颜色 */
    border: none;
    border-radius: 6px; /* 圆角 */
    cursor: pointer;
    font-size: 16px; /* 字体大小 */
  }
  
  .submit-btn:hover {
    background-color: #f4a256; /* 鼠标悬停颜色 */
  }
  
  .link-to-login {
    text-align: center;
    margin-top: 15px; /* 间距 */
  }
  
  .link-to-login a {
    color: #f4c256; /* 链接颜色 */
    text-decoration: none;
  }
  </style>