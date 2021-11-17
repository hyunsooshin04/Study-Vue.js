const vm = new Vue({
    el: '#root',
    data: {
        input: "",
    },
    methods: {

    },
    computed: {
        convertMarkdown() {
            console.log("wd")
            return marked(this.input);
        }
    },
    watch: {

    }
})