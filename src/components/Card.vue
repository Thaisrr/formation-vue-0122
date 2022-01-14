<template>
    <div class="card">
        <h3>{{my_obj.name}}</h3>
        <p>{{my_obj.author}}</p>
        <p>
            <router-link :to="{name: 'details', params: {id: my_obj.id}}">Détails</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        // props:  [my_obj, id, text];
        props: {
            my_obj: {
                type: Object,
                required: true,
            },
            text: {
                type: String,
                default: 'Hello !'
            },
            my_id: {
                type: Number,
                default: 0,
                validator: (value) => value > 0
                    // return boolean : ( true : donnée valide, false : donnée invalide )
                    // Uniquement en Dev
            },
            bool: Boolean
        }
    }
</script>

<style>
    .card {border: solid 1px }
</style>
