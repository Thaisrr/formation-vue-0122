<template>
    <h2>Users</h2>
    <button @click="getUser">Get user</button>
    <button @click="getUser2">Get user 2</button>
    <p v-if="!user">Pas d'utilisateur.trice</p>
    <p v-else>Mon user : {{user.name}}</p>

    <div>
        <h3>All users : </h3>
        <p v-if="isLoading">Chargement...</p>
        <ul v-else-if="users && users.length > 0">
            <li v-for="u of users" :key="u.id">{{u.name}}</li>
        </ul>
        <p v-else>Aucun user trouvé</p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                a: 'Hello World',
                user: undefined,
                users: [],
                isLoading: true
            }
        },
        methods: {
            getUser() {
                axios.get('https://jsonplaceholder.typicode.com/users/9929')
                    .then(res => {
                        this.user = res.data;
                    })
                    .catch(err => alert(err.message))
                    .finally( () => console.info("Requête terminée") )
            },
            async getUser2() {
                try {
                    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/9');
                    this.user = data;
                } catch (e) {
                    console.log(e.message);
                }
            },
            getUsersList : async function () {
                try {
                    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
                    this.users = data;
                } catch (e) {
                    alert(e.message);
                } finally {
                    this.isLoading = false;
                }
            }
        },
        beforeCreate() {
            console.log('Before create ' + this.a); // undefined
        },
        created() {
            // Data, methods, ect... -> créé
            console.log('Created ' + this.a)
        },
        beforeMount() {},
        mounted() {
            // DOM virtuel créé et affiché
            this.$interval = setInterval(() => {
                console.log('Interval !')
            }, 1000);

            this.getUsersList();
        },
        beforeUpdate() {},
        updated() {
            // S'appelle en boucle lors des modifications
            console.log("updated !")
        },
        beforeUnmount() { // beforeDestroy en Vue 2
            // Annuler des souscriptions, des intervals, ....
            clearInterval(this.$interval);
        },
        unmounted() { // destroyed en Vue 2
            console.log('composant détruit');
        }


    }
</script>

<style scoped></style>
