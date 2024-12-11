<template>
  <div class="login-container">
    <div class="form-box">
      <h2 class="form-title">用户登录</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">用户名</label>
          <input
            type="text"
            v-model="username"
            id="username"
            placeholder="请输入用户名"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="请输入密码"
            required
          />
        </div>
        <button type="submit" class="submit-btn">登录</button>
      </form>
      <div class="link-to-register">
        <p>没有账号？ <router-link to="/register">注册</router-link></p>
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    handleLogin() {
      // 假设的用户验证逻辑
      if (this.username === 'user123' && this.password === 'password') {
        // 登录成功，保存用户信息（可以使用 Vuex 或 localStorage）
        localStorage.setItem('user', JSON.stringify({ username: this.username }));
        this.$router.push('/profile'); // 重定向到个人信息页面
      } else {
        this.errorMessage = '用户名或密码错误'; // 显示错误信息
      }
    }
  }
};
</script>

<style scoped>
.login-container {
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

.link-to-register {
  text-align: center;
  margin-top: 15px; /* 间距 */
}

.link-to-register a {
  color: #f4c256; /* 链接颜色 */
  text-decoration: none;
}

.error {
  color: red; /* 错误信息颜色 */
  text-align: center;
  margin-top: 10px;
}
</style>