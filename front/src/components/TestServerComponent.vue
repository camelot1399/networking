<template>
    <div>
        <div v-if="status" class="connect">Сервер работает</div>
        <div v-else class="disconnect">Сервер не доступен</div>
    </div>
</template>
<script>
export default {
    name: "testServer",
    data() {
        return {
            status: false,
            checkInterval: 5000
        }
    },
    methods: {
        testServer() {
            setInterval(() => {
                console.log('чекаю сервер');

                fetch("/api/testServer")
                    .then((response) => {
                        if (response.status === 500) {
                            return this.status = false
                        }

                        if (response.status === 200) {
                            return response.json();
                        }
                    })
                    .then((data) => {
                        if (!data.status) {
                            this.status = false
                            return
                        }

                        this.status = true;
                    })
            }, this.checkInterval)
        }
    },
    mounted() {
        this.testServer();
    }
}
</script>
<style>
    .connect {
        color: green;
    }

    .disconnect {
        color: red;
    }
</style>