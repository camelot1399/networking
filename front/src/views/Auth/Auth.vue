<template>
    <div class="auth">
        <h1>{{ title }}</h1>
        <form action="#" class="authForm">
            <input v-model="login" type="text" name="login" placeholder="login" required maxlength="20" autofocus>
            <input v-model="password" v-if="passwordShow" type="password" name="password" placeholder="password" required maxlength="50">
            <button v-if="validate" @click.prevent="checkForm" type="submit">Войти</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Вход в NETWORKING',
            login: '',
            password: '',
            passwordShow: false,
            validate: false
        }
    },
    methods: {
        async checkForm() {
            let data = {
                login: this.login,
                password: this.password
            };

            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            };

            try {
                let resp = await fetch('/api/auth', options);
                let result = await resp.json();

                if (result.status === true) {
                    localStorage.setItem('user', result.sessionData);
                    this.$router.push('/');
                }

            } catch (error) {
                console.log(`ошибка: ${error}`);
            }

            

            // let result = await fetch.json();
        },
        checkLoginAndPassword() {
            if (this.login.length > 0) this.passwordShow = true;
            if (this.login.length === 0) this.passwordShow = false;
            if (this.login && this.password) return this.validate = true;
            return this.validate = false;
        }
    },
    watch: {
        login: function() {
            this.checkLoginAndPassword();
        },
        password: function() {
            this.checkLoginAndPassword();
        }
    }
}
</script>
<style>
.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
}
.authForm {
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 700px;
}
input[name="login"],
input[name="password"] {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
}
button[type="submit"] {
    padding: 10px;
    background: #ffdd2d;
    opacity: 0.6;
    border: none;
    border-radius: 6px;
    transition: opacity 0.6s;
}

button[type="submit"]:hover {
    opacity: 1
}

</style>