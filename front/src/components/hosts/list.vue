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
            hosts: []
        }
    },
    methods: {
        async getHosts() {
            console.log('getHosts');
            let hosts = await fetch('/api/getHosts');
            let result = await hosts.json();

            this.hosts = result;
        }
    },
    mounted() {
        this.getHosts();
    }
}
</script>
<style>

</style>