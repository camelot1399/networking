<template>
    <div class="wrapper">
        <sidebar />
        <router-view />
    </div>
</template>

<script>
import sidebar from '@/components/nav/sidebar.vue';

export default {
  name: 'main-layout',
  components: {
      sidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: flex;
}
</style>