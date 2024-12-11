<template>
    <section class="car-showcase">
      <div class="showcase-header">
        <div class="thumb-icon">👍</div>
        <h2>新车推荐</h2>
      </div>
      
      <div class="showcase-grid">
        <div v-for="car in cars" :key="car.id" class="car-card">
          <img :src="car.image || require('@/assets/images/car_404.png')" :alt="car.name">
          <div class="car-info">
            <h3>{{ car.name }}</h3>
            <div class="car-specs">{{ car.specs }}</div>
            <div class="car-rating">
              <span>车友推荐：</span>
              <span class="stars">★★★★★</span>
            </div>
            <button class="view-button" @click="viewCar(car.id)">立即查看</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CarShowcase',
    data() {
      return {
        cars: [
          {
            id: 1,
            name: '2021大众帕萨特',
            specs: '1.4T自动｜三厢5座',
            image: null
          },
          {
            id: 2,
            name: '宝沃BX7四驱',
            specs: '2.0T自动｜SUV5座',
            image: null
          },
          // 可以添加更多车辆数据
        ]
      }
    },
    methods: {
      viewCar(id) {
        // 处理查看车辆详情的逻辑
        console.log('查看车辆:', id)
      }
    }
  }
  </script>
  
  <style scoped>
  .car-showcase {
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .showcase-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .thumb-icon {
    background-color: #f0f0f0;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
  }
  
  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .car-card {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .car-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .car-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .car-info {
    padding: 15px;
  }
  
  .car-specs {
    color: #666;
    margin: 10px 0;
  }
  
  .car-rating {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .stars {
    color: #ffbb00;
    margin-left: 5px;
  }
  
  .view-button {
    background-color: #ffbb00;
    color: black;
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;
  }
  
  .view-button:hover {
    background-color: #bb5500;
    color: white;
  }
  </style>