<template>
    <h2>Welcome Home !</h2>
    <p>Bonjour {{message}}</p>
    <div>
        <button @click="sayHello">Say Hello</button>
        <button @click="incrementCounter">Vous avez cliqué {{counter}} fois</button>
    </div>
    <div>
        <label for="nom">Prénom :</label>
        <input id="nom" v-model="message"/>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                message: "Jean Michel",
                counter : 0
            }
        },
        methods: {
            sayHello() {
                console.log("Hello !");
            },
            incrementCounter: function () {
                this.counter++;
            }
        }
    }
</script>

<style scoped>

</style>
