<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>
      <router-link :to="{name: 'demo'}">Data</router-link>
    </h2>
    <router-view></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>
