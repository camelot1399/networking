<template>
    <div class="sidebar">
        {{ title }}
        <button @click="removeUser">Выйти</button>
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
    methods: {
        removeUser() {
            localStorage.removeItem('user');
            this.$router.push('/auth');
        }
    }
}
</script>
<style>
.sidebar {
    background: green;
}
</style>