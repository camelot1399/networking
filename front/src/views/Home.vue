<template>
  <div class="home">
    <TestServer />
    <button @click="testHosts">test hosts</button>

    <HostsList />
  </div>
</template>

<script>
import TestServer from '@/components/TestServerComponent.vue';
import HostsList from '@/components/hosts/list.vue';

export default {
  name: "Home",
  data() {
    return {

    }
  },
  components: {
    TestServer,
    HostsList
  },
  methods: {
    testHosts() {
      console.log('test hosts');

      fetch('/api/testHostsInLan');
    }
  }
  
};
</script>
<style>
.home {
  background: yellow;
  width: 100%;
}
</style>
