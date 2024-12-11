<template>
  <section class="hero">
    <div class="content">
      <h1 class="hero-title">欢迎来到 Yotrip</h1>
      <p class="hero-description">
        您的租车旅程从这里开始，探索更多的可能性和优惠。
      </p>
      <router-link to="/services" class="cta-button">查看服务</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.hero {
  background: url('@/assets/images/main_bg.png') no-repeat center center/cover; /* 使用背景图 */
  width: 100%;
  height: 100vh; /* 设定完整视口高度 */
  display: flex; /* 使用 Flexbox 进行布局 */
  justify-content: center; /* 内容居中 */
  align-items: center; /* 内容居中 */
  color: white; /* 文字颜色 */
  text-align: center; /* 文本居中 */
}

.content {
  max-width: 600px; /* 最大宽度 */
  padding: 20px; /* 内边距 */
}

.hero-logo {
  width: 150px; /* Logo 显示宽度 */
  margin-bottom: 20px; /* Logo 和标题之间的间距 */
}

.hero-title {
  font-size: 2.5rem; /* 标题字体大小 */
  margin-bottom: 10px; /* 标题和描述之间的间距 */
}

.hero-description {
  font-size: 1.2rem; /* 描述字体大小 */
  margin-bottom: 20px; /* 描述和按钮之间的间距 */
}

.cta-button {
  display: inline-block;
  background-color: #ffbb00; /* 按钮背景颜色 */
  color: black; /* 按钮文字颜色 */
  padding: 10px 20px; /* 按钮内边距 */
  text-decoration: none; /* 去掉下划线 */
  border-radius: 5px; /* 圆角按钮 */
  transition: background-color 0.3s; /* 背景颜色过渡效果 */
}

.cta-button:hover {
  background-color: #bb5500; /* 鼠标悬停颜色 */
}
</style>
