<template>
    <form @submit.prevent="handleSubmit">
        <fieldset>
            <legend>Ajouter un livre</legend>
            <div>
                <label for="name">Nom</label>
                <input id="name" v-model="new_book.name"/>
                <p style="color: red" v-if="name_error">{{name_error}}</p>
            </div>
            <div>
                <label for="author">Auteur.trice</label>
                <input id="author" v-model="new_book.author"/>
                <p style="color: red" v-if="author_error">{{author_error}}</p>
            </div>
            <p>
                <button type="submit">Enregistrer le livre</button>
            </p>
        </fieldset>
    </form>
</template>

<script>
    import axios from 'axios';
    export default {
        data: () => ({
            new_book: {name: '', author: ''},
            name_error: '',
            author_error: ''
        }),
        methods: {
            checkString: function (str) {
                return str && str.length > 2;
            },
            handleSubmit: function () {
                let has_error = false;

                if( !this.checkString(this.new_book.name))  {
                    has_error = true;
                    this.name_error = "Veuillez entrer un nom";
                } else { this.name_error = ''}

                if( !this.checkString(this.new_book.author)) {
                    has_error = true;
                    this.author_error = "Nom d'auteur.trice non valide";
                } else {this.name_error = ''}

                if(!has_error) {
                    this.save();
                    this.new_book = {name: '', author: ''};
                }

            },
            save: function () {
                axios.post('http://localhost:3000/books', this.new_book)
                    .then(() => console.info('livre sauvegardé'))
                    .catch(e => console.error(e.message))
            }
        }
    }
</script>

<style scoped>

</style>
