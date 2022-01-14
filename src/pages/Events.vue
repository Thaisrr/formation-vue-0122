<template>
    <h2>Events</h2>
    <div class="grid">
        <Book v-for="(b, i) of books"
              :book="b"
              :index="i"
              :key="i"
              @deleteEvent="deleteMethod"
              v-model:book="books[i]"
        />
    </div>
</template>

<script>
    import Book from "../components/Book";
    export default {
        name: "Events",
        components: {Book}, // tous les composants enfants doivent être utilisés ici, et importer
        // Tous les composants définis ici doivent etre utilisés dans le template
        data: () => ({
            books: [ "Les hauts de hurlevent", "le Horla", 'Germinal']
        }),
        methods: {
            deleteMethod: function (index) {
                this.books.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

</style>
