<template>
    <h2>Mixins</h2>
    <p>{{message}} {{a}}</p>
    <p>
        <button @click="sayHi">Say Hi !</button>
    </p>
</template>

<script>
    import {my_mixin} from "../Mixins/MyMixin";

    export default {
        mixins: [my_mixin],
        data: () => ({
            a : 'a',
            message: 'Coucou'
        })
    }
</script>

<style scoped>

</style>
