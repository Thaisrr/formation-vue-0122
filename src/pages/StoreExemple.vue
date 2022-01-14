<template>
    <h2>Les Stores</h2>
    <p>Bonjour {{username}}</p>
    <div>
        <button @click="getJoke">Change joke</button>
    </div>
    <div>
        <label for="name">Name</label>
        <input v-model="new_name" id="name"/>
        <button @click="save">save</button>
    </div>
    <div>
        <h3>Products : </h3>
        <ul>
            <li v-for="p of products" :key="p">
                {{p}}
                <button @click="add(p)">+</button>
            </li>
        </ul>
    </div>
    <div>
        <h3>Panier : {{count}} items</h3>
        <ul>
            <li v-for="pp of panier" :key="pp">{{pp}}</li>
        </ul>
    </div>

</template>

<script>
    import {mapMutations, mapGetters, mapActions} from 'vuex';
    export default {
        data: () => ({
            new_name: '',
            products: ['Furbys', 'Chocolat', 'Salade', 'Action Man']
        }),
        computed: {
            ...mapGetters({panier: 'panier', count: 'count_panier'}),
            username: function () {
                return this.$store.getters.username;
            }
        },
        methods: {
            ...mapMutations({add : 'addToBasket', empty: 'emptyBasket'}), // helpers de Vuex
            ...mapActions(['getJoke']),
            save: function () {
                if(this.new_name) {
                    this.$store.commit('setUsername', this.new_name);
                    // commit : pour appeler une mutation
                    // params : nom de la mutation en string, et nouvelle valeur
                }
            },
        }
    }
</script>

<style scoped>

</style>
