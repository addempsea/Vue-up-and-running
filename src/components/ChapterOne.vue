<template>
  <div>
    <h1>Chapter 1</h1>
    <div>
      <p v-if="hours < 12">Good morning!</p>
      <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
      <p v-if="hours >= 18">Good evening!</p>
      <p>{{ seconds }} seconds have elapsed since you opened the page.</p>
      <p>Current status: {{ statusFromId(status) }}</p>
      <p>Sum of numbers: {{ numberTotal }}</p>
      <p>Product one cost: {{ productOneCost | formatCost('$') }}</p>
      
    </div>

    <ul>
      <li
        v-for="(rent, city) in averageRent"
        :key="city"
      >The average rent in {{ city }} is ${{ rent }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "chp1",
  data() {
    return {
      hours: new Date().getHours(),
      averageRent: {
        london: 1650,
        paris: 1730,
        NYC: 3680
      },
      seconds: 0,
      numbers: [5, 8, 3],
      productOneCost: 998
    };
  },

  filters: {
    formatCost(value, symbol) {
        return symbol + (value / 100).toFixed(2);
    }
  },

  created() {
    setInterval(() => {
      this.seconds++;
    }, 5000);
  },

  methods: {
    statusFromId(id) {
      const status = {
        0: "Asleep",
        1: "Eating",
        2: "Learning Vue"
      }[id];
      return status || "Unknown status: " + id;
    }
  },

    computed: {
        numberTotal: {
            get() {
                return this.numbers.reduce((sum, val) => sum + val);
            },

            // set(newValue) {
            //     const oldValue = this.numberTotal;
            //     const difference = newValue - oldValue;
            //     return this.numbers.push(difference).
            // }            
        }
    }
}
</script>