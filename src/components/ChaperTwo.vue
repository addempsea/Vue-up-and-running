<template>
  <div>
    <h1>Chapter 2</h1>
    <h3>
      <p>The id is of this page {{ $route.params.teamId }}</p>
    </h3>
    <div>
      <p>{{ positiveNumbers.length }} positive numbers</p>
      <p>{{aprop}}</p>
      <button @click="handleClick">Clicked {{ clicks }} times</button>
    </div>
    <ul v-for="(item, index) in items" :key="index" :style="{ backgroundColor: randomColor }">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "chp2",
  props: {
    aprop: String
  },

  data() {
    return {
      numbers: [-5, 0, 2, -1, 1, 0.5, 7, 8],
      clicks: 0,
      items: ["one", "two", "three", "four", "five", "six"]
      // color: randomColor
    };
  },

  computed: {
    positiveNumbers() {
      return this.numbers.filter(number => number >= 0);
    },

    randomColor() {
      return `hsl(${Math.floor(Math.random() * 350)}, 75%, 85%)`;
    }
  },

  methods: {
    handleClick() {
      this.clicks++;
      this.$emit("count", this.clicks);
    }
  }
};
</script>