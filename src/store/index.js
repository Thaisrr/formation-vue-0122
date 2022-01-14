import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        username: 'Jane Doe',
        panier: [],
        joke: 'There is no joke'
    },
    getters: {
        username: (state) => state.username,
        panier: (state) => state.panier,
        count_panier: (state) => state.panier.length,
        joke: (state) => state.joke
    },
    mutations: { // fonction synchrones
        setUsername: function (state, value) {
            state.username = value;
        },
        addToBasket: function (state, value) {
            state.panier.push(value);
        },
        emptyBasket: function (state) {
            state.panier = []
        },
        setJoke: (state, value) => state.joke = value
    },
    actions: { // fonction asynchrone
        getJoke: async function(state) {
            const {data} = await axios.get('https://icanhazdadjoke.com', {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Dawan - Test for Vue JS formation'
                }
            });
            state.commit('setJoke', data.joke);
        }
    }
});

export default store;

