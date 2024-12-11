<template>
    <section class="car-rental-selector">
      <div class="selector">
        <div class="location-selection" @click="toggleCityDropdown">
          <div class="city-select">
            <span>{{ selectedCity }}</span>
            <span class="arrow">{{ isCityDropdownVisible ? '▲' : '▼' }}</span>
          </div>
          <div class="district-select">
            <span>{{ selectedDistrict }}</span>
          </div>
        </div>
  
        <div class="date-selection" @click="toggleDatePicker">
          <span>选择取车日期</span>
        </div>
      </div>
  
      <div v-if="isCityDropdownVisible" class="dropdown-menu">
        <div class="hot-cities">
          <h4>热门城市</h4>
          <div v-for="city in hotCities" :key="city.code" @click="selectCity(city.name)">
            {{ city.name }}
          </div>
        </div>
  
        <div class="alphabetic-group">
          <div v-for="(group, index) in groupedCities" :key="index">
            <h4>{{ group.letter }}</h4>
            <div>
              <div v-for="city in group.cities" :key="city.code" @click="selectCity(city.name)">
                {{ city.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div v-if="isDatePickerVisible" class="date-picker">
        <input type="datetime-local" v-model="pickupDate" />
      </div>
  
      <button class="rent-button" @click="confirmRental">确认租车</button>
    </section>
  </template>
  
  <script>
  export default {
    name: "CarRentalSelector",
    data() {
      return {
        selectedCity: "杭州",
        selectedDistrict: "杭州师范大学",
        isCityDropdownVisible: false,
        isDatePickerVisible: false,
        hotCities: [
          { name: "北京", code: "BJ" },
          { name: "上海", code: "SH" },
          { name: "广州", code: "GZ" },
          { name: "深圳", code: "SZ" },
          { name: "杭州", code: "HZ" },
        ],
        cities: [
          { name: "阿坝", code: "AB" },
          { name: "安康", code: "AK" },
          { name: "安庆", code: "AQ" },
          { name: "巴中", code: "BZ" },
          { name: "杭州", code: "HZ" },
          { name: "武汉", code: "WH" },
          { name: "成都", code: "CD" },
        ],
        isDatePickerVisible: false,
        groupedCities: []
      };
    },
    created() {
      this.groupCities();
    },
    methods: {
      toggleCityDropdown() {
        this.isCityDropdownVisible = !this.isCityDropdownVisible;
      },
      toggleDatePicker() {
        this.isDatePickerVisible = !this.isDatePickerVisible;
      },
      selectCity(city) {
        this.selectedCity = city;
        this.isCityDropdownVisible = false; // 选择 city 后收起下拉框
      },
      confirmRental(event) {
        event.preventDefault(); // 阻止默认行为
        alert(`你选择的租车城市是: ${this.selectedCity}，取车时间是: ${this.pickupDate}`);
      },
      groupCities() {
        const letters = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)); // A-Z
        this.groupedCities = letters.map(letter => ({
          letter,
          cities: this.cities.filter(city => city.name.startsWith(letter))
        })).filter(group => group.cities.length); // 只保留有城市的组
      }
    }
  };
  </script>
  
  <style scoped>
    .car-rental-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    }

    .selector {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 800px; /* 最大宽度 */
    }

    .location-selection {
    display: flex;
    flex: 1;
    border: 1px solid #ccc; /* 加边框 */
    border-radius: 5px; /* 圆角 */
    cursor: pointer;
    padding: 10px; /* 内边距 */
    position: relative;
    }

    .city-select,
    .district-select {
    flex: 1;
    text-align: center;
    }

    .arrow {
    margin-left: 5px;
    }

    .date-selection {
    flex: 1;
    cursor: pointer;
    }

    .dropdown-menu {
    background-color: white; /* 下拉菜单背景颜色 */
    border: 1px solid #ccc; /* 菜单边框颜色 */
    position: absolute;
    z-index: 10;
    width: 100%;
    max-height: 300px; /* 最大高度 */
    overflow-y: auto; /* 垂直滚动条 */
    }

    .hot-cities, .alphabetic-group {
    padding: 10px; /* 内边距 */
    }

    .rent-button {
    background-color: #ffbb00; /* 按钮背景颜色 */
    color: white; /* 按钮文字颜色 */
    padding: 10px 20px; /* 按钮内边距 */
    border: none; /* 去掉按钮边框 */
    border-radius: 5px; /* 圆角按钮 */
    cursor: pointer; /* 鼠标指针变为手形 */
    transition: background-color 0.3s; /* 背景颜色过渡效果 */
    }

    .rent-button:hover {
    background-color: #bb5500; /* 鼠标悬停颜色 */
    }

    .date-picker {
    margin-top: 10px; /* 与选择区间保持间距 */
    }
  </style>
  