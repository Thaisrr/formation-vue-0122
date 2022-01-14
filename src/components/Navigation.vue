<template>
    <div>
        <!-- Le HTML -->
        <h1>Vue Formation</h1>
        <p>Username : {{username}}</p>
        <p v-if="joke">{{joke}}</p>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'about'}">About</router-link>
            </li>
            <li>
                <router-link :to="{name: 'users'}">Users</router-link>
            </li>
            <li>
                <router-link :to="{name: 'books'}">Books</router-link>
            </li>
            <li>
                <router-link :to="{name: 'store'}">Store</router-link>
            </li>
            <li>
                <router-link :to="{name: 'events'}">Events</router-link>
            </li>
            <li>
                <router-link :to="{name: 'mixin'}">Mixins</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Navigation", // Optionnel,
        computed: {
            ...mapGetters(["username", "joke"])
        }
    }
</script>


<style scoped>
    /* Scoped : le style ne s'applique qu'à ce composant */
    h1 {
        color: teal;
    }

    ul {
        display: flex;
        justify-content: center;
        gap: 10px;
        list-style: none;
    }
</style>
