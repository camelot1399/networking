<template>
    <div>
        <h2>{{ title }}</h2>
        <ul class="nomarker">
            <Host 
                v-for="host in hosts" 
                :key="host.mac"
                :host="host"
            />
        </ul>
    </div>
</template>
<script>
import Host from '@/components/hosts/host.vue';

export default {
    name: 'hosts-list',
    components: {
        Host
    },
    data() {
        return {
            title: 'Hosts list',
            hosts: [
                {ip: '10.0.0.1', mac: '00:11:aa:ss:dd:cc'},
                {ip: '10.0.0.1', mac: '00:11:aa:ss:dd:c1'}
            ]
        }
    },
}
</script>
<style>

</style>