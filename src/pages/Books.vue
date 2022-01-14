<template>
    <h2>Books</h2>
    <div class="grid">
        <Card v-for="b of books" :key="b.id" :my_obj="b" :my_id="10" />
    </div>
    <p>
        <router-link :to="{name: 'add'}">Ajouter un nouveau livre</router-link>
    </p>
    <div class="children">
        <router-view />
        <!--
        Bug au changement de route entre les details de livres :
        -> Pas de rechargement automatique du composant puisque la route est surveillée,
        mais pas les paramétres.
        -> La vrai architecture serait soit de faire un vrai page différente ( dans le router-view principal )
        -> Soit de passer par un composant enfant avec des props.
        -->
    </div>
</template>

<script>
    import axios from 'axios';
    import Card from "../components/Card";
    export default {
        components: {Card},
        data: () => ({
            books : [],
            api_url: 'http://localhost:3000/books'
        }),
        methods: {
            getBooks: async function () {
                try {
                    const {data} = await axios.get(this.api_url);
                    console.log(data);
                    this.books = data;
                } catch (e) {
                 //   alert(e.message);
                    console.error(e);
                }
            }
        },
        mounted: function () {
            this.getBooks();
        }

    }
</script>

<style scoped>

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
    }

    .children {
        width: 80%;
        margin: 30px auto;
        border: solid 1px;
    }

</style>
