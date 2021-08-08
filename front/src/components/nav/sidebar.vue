<template>
    <div class="sidebar">
        {{ title }}
    </div>
</template>
<script>
export default {
    name: "sidebar",
    data() {
        return {
            title: 'Навигация на сайте sidebar'
        }
    },
}
</script>
<style>
.sidebar {
    background: green;
}
</style>