export default {
    namespaced:true,
    state: {
        carts: [
            {
                id:1001,
                name:"灯影牛肉"
            }
        ]
    },
    mutations: {
        setCarts(state, value) {
            state.carts.push(value)
        }
    },
    actions: {
        asyncSetCarts({
            commit
        }, value) {
            commit("setCarts", value)
        }
    }
}