<template>
    <div class="my-orders">
      <h1>我的订单</h1>
      <div v-if="orders.length === 0" class="no-orders">
        <p>您还没有订单</p>
      </div>
      <div v-else>
        <table class="orders-table">
          <thead>
            <tr>
              <th>订单ID</th>
              <th>用户ID</th>
              <th>车辆信息</th>
              <th>租赁时间</th>
              <th>订单状态</th>
              <th>支付状态</th>
              <th>总价</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.orderId">
              <td>{{ order.orderId }}</td>
              <td>{{ order.userId }}</td>
              <td>{{ order.carModel }}</td>
              <td>{{ order.rentalStart }} - {{ order.rentalEnd }}</td>
              <td><span :class="statusClass(order.orderStatus)">{{ order.orderStatus }}</span></td>
              <td><span :class="statusClass(order.paymentStatus)">{{ order.paymentStatus }}</span></td>
              <td>￥{{ order.totalPrice.toFixed(2) }}</td>
              <td>
                <button @click="viewOrder(order.orderId)">查看订单</button>
                <button v-if="order.orderStatus === '待取车'" @click="cancelOrder(order.orderId)" class="cancel-button">取消订单</button>
              </td>
            </tr>
          </tbody>
        </table>
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
  
  .orders-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .orders-table th,
  .orders-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
    white-space: nowrap; /* 防止文本换行 */
  }
  
  .orders-table th {
    background-color: #f4c256;
    color: white;
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
  
  .cancel-button {
    margin-left: 10px; /* 增加左侧间距 */
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
  </style>