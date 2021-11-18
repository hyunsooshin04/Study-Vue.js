const vm = new Vue({
    el: '#root',
    data() {
        return {
            names: "balmostory"
        }
    },
    beforeCreate() {
        console.log("beforeCreate", this.names)
    },
    created() {
        console.log("created", this.names)
    },
    beforeMount() {
        alert("beforeMount")
    }
    ,
    mounted() {
        alert("mounted")
    },
    beforeUpdate() {
        alert("beforeUpdate")
    },
    updated() {
        alert("updated")
    },
    beforeDestroy() {
        alert("beforeDestroy")
    },
    destroyed() {
        alert("destroyed")
    },
    methods: {
        dateupdate() {
            this.names = "hihihi";
        }
    }
})