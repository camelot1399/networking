<template>
  <div class="home">
    <TestServer />
    <button @click="testHosts">test hosts</button>
  </div>
</template>

<script>
import TestServer from '../components/TestServerComponent.vue';

export default {
  name: "Home",
  data() {
    return {

    }
  },
  components: {
    TestServer
  },
  methods: {
    testHosts() {
      console.log('test hosts');

      fetch('/api/testHostsInLan');
    }
  }
  
};
</script>
