<template>
    <li>
        {{ host.ip }}, {{ host.mac }}
    </li>
</template>
<script>
export default {
    props: {
        host: Object
    }
}
</script>