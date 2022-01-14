<template>
    <div class="card">
        <h4>{{book}}</h4>
        <p>
            <button @click="dfkdsmlfkds">Supprimer</button>
        </p>
        <p>
            <input :value="book" @input="$emit('update:book', $event.target.value )">
        </p>
    </div>
</template>

<script>
    export default {
        emits: ['update:book', 'deleteEvent'], // Dans vue 3, les emits doivent être déclarés
        props: {
            book: {
                required: true,
                type: String
            },
            index: {
                required: true,
                type: Number
            }
        },
        methods: {
            dfkdsmlfkds: function () {
                this.$emit('deleteEvent', this.index );
            }
        }
    }
</script>

<style scoped>

</style>
