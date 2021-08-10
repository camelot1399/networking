<template>
    <li class="host_li">
        <span>{{ host.ip }}</span> <span>{{ host.mac }}</span>
    </li>
</template>
<script>
export default {
    props: {
        host: Object
    }
}
</script>
<style>
.host_li {
    margin-top: 5px;
}
</style>