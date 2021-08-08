<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

export default {
  computed: {
    layout() {
      const LayoutName = this.$route.meta.layout || 'Empty';
      return () => import(`@/layouts/${LayoutName}Layout.vue`)
    }
  }
}
</script>