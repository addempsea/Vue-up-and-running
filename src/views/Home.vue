<template>
  <div class="home">
    <ChapterOne/>
    <tea color="red"></tea>
  </div>
</template>

<script>
import ChapterOne from '../components/ChapterOne.vue'
import Tea from '../components/Tea.vue'


export default {
  name: 'home',
  components: {
    ChapterOne,
    Tea
  }
}
</script>
