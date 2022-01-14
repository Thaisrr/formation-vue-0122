export const my_mixin = {
    data: () => ({
        message: 'Hello World !'
    }),
    methods: {
        sayHi: function () {
            console.info(this.message)
        }
    },
    created: function () {
        console.warn('In my_mixin created')
    }
};
