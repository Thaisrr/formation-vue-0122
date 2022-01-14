<template>
    <div v-if="book">
        <h2>Details de : {{book.name}}</h2>
        <p>Auteur.trice : {{book.author}}</p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function () {
            return {
                book: undefined,
                api_url: 'http://localhost:3000/books/'
            }
        },
        methods: {
            getBookById: async function () {
                const id = this.$route.params.id;
                const {data} = await axios.get( this.api_url + id);
                this.book = data;
            }
        },
        mounted() {
            this.getBookById();
        }
    }
</script>

<style scoped>
</style>
