<template>
    <div class="profile">
      <h1>个人信息</h1>
  
      <div class="info-section">
        <h2>用户信息</h2>
        <table class="info-table">
          <tbody>
            <tr>
              <td><strong>用户名:</strong></td>
              <td>{{ user.username }}</td>
            </tr>
            <tr>
              <td><strong>邮箱:</strong></td>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <td><strong>电话:</strong></td>
              <td>{{ user.phone }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="showChangePassword = true" class="edit-button">修改密码</button>
      </div>
  
      <div class="order-history">
        <h2>订单历史</h2>
        <div v-if="orders.length === 0" class="no-orders">
          <p>您还没有订单记录。</p>
        </div>
        <div v-else>
          <table class="orders-table">
            <thead>
              <tr>
                <th>订单ID</th>
                <th>状态</th>
                <th>日期</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.orderId">
                <td><router-link :to="`/order/${order.orderId}`">{{ order.orderId }}</router-link></td>
                <td>{{ order.status }}</td>
                <td>{{ order.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <button @click="logout" class="logout-button">退出登录</button>
  
      <div v-if="showChangePassword" class="modal">
        <div class="modal-content">
          <h3>修改密码</h3>
          <form @submit.prevent="changePassword">
            <div class="input-group">
              <label for="new-password">新密码</label>
              <input type="password" v-model="newPassword" id="new-password" required />
            </div>
            <div class="input-group">
              <label for="confirm-password">确认新密码</label>
              <input type="password" v-model="confirmPassword" id="confirm-password" required />
            </div>
            <button type="submit" class="submit-btn">提交</button>
            <button @click="showChangePassword = false" class="cancel-btn">取消</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: '用户123',
          email: 'user@example.com',
          phone: '666-666-666',
        },
        orders: [
          { orderId: '1001', status: '已完成', date: '2024-01-01' },
          { orderId: '1002', status: '待取车', date: '2024-01-05' },
        ],
        showChangePassword: false,
        newPassword: '',
        confirmPassword: '',
      };
    },
    methods: {
      logout() {
        localStorage.removeItem('user');
        this.$router.push('/login');
      },
      changePassword() {
        if (this.newPassword !== this.confirmPassword) {
          alert('两次输入的密码不一致！');
          return;
        }
        // 这里可以添加实际的密码更改逻辑，例如API调用
        alert('密码已成功更改！');
        this.showChangePassword = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .profile {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .info-section,
  .order-history {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .info-table,
  .orders-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .info-table td,
  .orders-table th,
  .orders-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  
  .orders-table th {
    background-color: #f4c256;
    color: white;
  }
  
  .edit-button,
  .logout-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #ffbb00;
    color: white;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .edit-button:hover,
  .logout-button:hover {
    background-color: #bb5500;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-btn {
    margin-top: 10px;
    background-color: #ffbb00;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cancel-btn {
    margin-top: 10px;
    background-color: #ccc;
    color: black;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>