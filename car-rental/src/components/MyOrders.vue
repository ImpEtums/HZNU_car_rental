<template>
    <div class="my-orders">
      <h1>我的订单</h1>
      <div v-if="orders.length === 0" class="no-orders">
        <p>您还没有订单</p>
      </div>
      <div v-else>
        <div v-for="order in orders" :key="order.orderId" class="order-card">
          <h2 class="order-title">订单ID: {{ order.orderId }}</h2>
          <div class="order-details">
            <div class="detail-item">
              <strong>用户ID:</strong> {{ order.userId }}
            </div>
            <div class="detail-item">
              <strong>车辆信息:</strong> {{ order.carModel }}
            </div>
            <div class="detail-item">
              <strong>租赁时间:</strong> {{ order.rentalStart }} - {{ order.rentalEnd }}
            </div>
            <div class="detail-item">
              <strong>订单状态:</strong> <span :class="statusClass(order.orderStatus)">{{ order.orderStatus }}</span>
            </div>
            <div class="detail-item">
              <strong>支付状态:</strong> <span :class="statusClass(order.paymentStatus)">{{ order.paymentStatus }}</span>
            </div>
            <div class="detail-item">
              <strong>支付ID:</strong> {{ order.paymentId }}
            </div>
            <div class="detail-item">
              <strong>保险ID:</strong> {{ order.insuranceId }}
            </div>
            <div class="detail-item">
              <strong>总价:</strong> ￥{{ order.totalPrice.toFixed(2) }}
            </div>
          </div>
          <div class="order-actions">
            <button @click="viewOrder(order.orderId)">查看订单</button>
            <button v-if="order.orderStatus === '待取车'" @click="cancelOrder(order.orderId)">取消订单</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyOrders',
    data() {
      return {
        orders: [
          {
            orderId: '1001',
            userId: 'user123',
            carModel: '丰田卡罗拉',
            rentalStart: '2024-12-01',
            rentalEnd: '2024-12-05',
            orderStatus: '待取车',
            paymentStatus: '已支付',
            paymentId: 'pay001',
            insuranceId: 'ins001',
            totalPrice: 800,
          },
          {
            orderId: '1002',
            userId: 'user124',
            carModel: '本田CR-V',
            rentalStart: '2024-12-05',
            rentalEnd: '2024-12-10',
            orderStatus: '已取车',
            paymentStatus: '已支付',
            paymentId: 'pay002',
            insuranceId: 'ins002',
            totalPrice: 1200,
          },
          {
            orderId: '1003',
            userId: 'user125',
            carModel: '宝马X5',
            rentalStart: '2024-12-10',
            rentalEnd: '2024-12-15',
            orderStatus: '已完成',
            paymentStatus: '已支付',
            paymentId: 'pay003',
            insuranceId: 'ins003',
            totalPrice: 1500,
          },
        ],
      };
    },
    methods: {
      viewOrder(orderId) {
        console.log(`查看订单: ${orderId}`);
      },
      cancelOrder(orderId) {
        console.log(`取消订单: ${orderId}`);
      },
      statusClass(status) {
        switch (status) {
          case '待取车':
            return 'status-pending';
          case '已取车':
            return 'status-active';
          case '已完成':
            return 'status-completed';
          case '已支付':
            return 'status-paid';
          default:
            return '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .my-orders {
    padding: 20px;
    max-width: 800px; /* 设置最大宽度 */
    margin: 0 auto; /* 居中对齐 */
  }
  .order-card {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px 0;
    border-radius: 12px; /* 增加圆角 */
    background-color: #ffffff; /* 背景色 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    transition: transform 0.2s; /* 动画效果 */
  }
  .order-card:hover {
    transform: translateY(-2px); /* 鼠标悬停效果 */
  }
  .order-title {
    margin: 0 0 10px 0;
    font-size: 1.5em; /* 增加标题大小 */
    color: #333; /* 标题颜色 */
  }
  .order-details {
    display: flex;
    flex-direction: column;
  }
  .detail-item {
    margin: 5px 0;
    font-size: 0.95em; /* 字体大小 */
  }
  .order-actions {
    margin-top: 15px;
  }
  .status-pending {
    color: orange;
  }
  .status-active {
    color: green;
  }
  .status-completed {
    color: rgb(242, 201, 105);
  }
  .status-paid {
    color: teal;
  }
  .no-orders {
    text-align: center;
    font-size: 18px;
    color: #888;
  }
  button {
    margin-right: 10px;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    background-color: rgb(247, 193, 69);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #f4b43e;
  }
  </style>