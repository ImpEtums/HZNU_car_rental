<template>
    <section class="car-rental-selector">
      <div class="selector">
        <div class="location-selection">
          <div class="city-select">
            <n-select
              v-model:value="selectedCity"
              :options="cityOptions"
              placeholder="选择取车城市"
              @update:value="handleCityChange"
            />
          </div>
          <div class="station-select">
            <n-select
              v-model:value="selectedStation"
              :options="stationOptions"
              placeholder="选择取车网点"
              :disabled="!selectedCity"
            />
          </div>
        </div>
  
        <div class="date-selection">
          <div class="date-picker">
            <n-date-picker
              v-model:value="pickupDate"
              type="date"
              placeholder="选择取车日期"
              clearable
            />
          </div>
          <div class="time-picker">
            <n-time-picker
              v-model:value="pickupTime"
              format="HH:mm"
              :minute-step="30"
              :minutes="allowedMinutes"
              placeholder="选择取车时间"
              clearable
            />
          </div>
        </div>
  
        <button class="rent-button" @click="confirmRental">确认租车</button>
      </div>
    </section>
  </template>
  
  <script>
  import { NDatePicker, NSelect, NTimePicker } from 'naive-ui'

  export default {
    name: "CarRentalSelector",
    components: {
      NDatePicker,
      NSelect,
      NTimePicker
    },
    data() {
      // 获取当前时间并调整到最近的半点或整点
      const now = new Date()
      const minutes = now.getMinutes()
      const roundedMinutes = minutes >= 30 ? 30 : 0
      now.setMinutes(roundedMinutes)
      now.setSeconds(0)
      now.setMilliseconds(0)

      return {
        selectedCity: 'HZ',
        selectedStation: 'HZNU',
        pickupDate: now.getTime(),
        pickupTime: now.getTime(),
        // 城市数据，后续可从数据库获取
        cityOptions: [
          { label: '杭州', value: 'HZ' },
          { label: '北京', value: 'BJ' },
          { label: '上海', value: 'SH' },
          { label: '广州', value: 'GZ' }
        ],
        // 网点数据映射，后续可从数据库获取
        stationsMap: {
          'HZ': [
            { label: '杭州师范大学', value: 'HZNU' },
            { label: '武林门', value: 'WLM' }
          ],
          'BJ': [
            { label: '北京站', value: 'BJZ' },
            { label: '首都机场', value: 'PEK' }
          ]
        },
        allowedMinutes: [0, 30] // 只允许选择 0 分和 30 分
      }
    },
    computed: {
      stationOptions() {
        return this.selectedCity ? this.stationsMap[this.selectedCity] || [] : []
      }
    },
    methods: {
      handleCityChange(cityValue) {
        this.selectedStation = null // 清空已选网点
        // 这里可以添加从数据库获取对应城市网点的逻辑
        console.log('选择的城市：', cityValue)
      },
      confirmRental() {
        const cityName = this.cityOptions.find(city => city.value === this.selectedCity)?.label
        const stationName = this.stationOptions.find(station => station.value === this.selectedStation)?.label
        const dateTime = new Date(this.pickupDate)
        const time = new Date(this.pickupTime)
        dateTime.setHours(time.getHours(), time.getMinutes())
        alert(`你选择的租车城市是: ${cityName}，网点是: ${stationName}，取车时间是: ${dateTime.toLocaleString()}`)
      }
    }
  }
  </script>
  
  <style scoped>
    .car-rental-selector {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    }

    .selector {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 1000px;
    }

    .location-selection {
    flex: 3;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    gap: 10px;
    }

    .city-select,
    .station-select {
    flex: 1;
    }

    /* 覆盖 naive-ui select 的默认样式 */
    :deep(.n-select) {
      width: 100%;
    }

    :deep(.n-input) {
      background: transparent;
    }

    .date-selection {
    flex: 2;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    gap: 10px;
    }

    .date-picker,
    .time-picker {
    flex: 1;
    }

    /* 覆盖 naive-ui 日期和时间选择器的默认样式 */
    :deep(.n-date-picker),
    :deep(.n-time-picker) {
      width: 100%;
    }

    .rent-button {
    height: 42px;
    padding: 0 20px;
    background-color: #ffbb00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    white-space: nowrap;
    }

    .rent-button:hover {
    background-color: #bb5500;
    }

    /* 覆盖 naive-ui 日期选择器的默认样式 */
    :deep(.n-date-picker) {
      width: 100%;
    }

    :deep(.n-input) {
      background: transparent;
    }

    :deep(.n-input__input-el) {
      cursor: pointer;
    }

    /* 覆盖 naive-ui 级联选择器的默认样式 */
    :deep(.n-cascader) {
      width: 100%;
    }
  </style>
  