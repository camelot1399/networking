<template>
  <div class="home">
    <TestServer />
  </div>
</template>

<script>
import TestServer from '../components/TestServerComponent.vue';

export default {
  name: "Home",
  components: {
    TestServer
  },
  
};
</script>
