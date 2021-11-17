const vm = new Vue({
    el: '#root',
    data: {
        value: "",
        message: "",
        array: [],
        find_word: "",
    },
    methods: {
        add() {
            this.array.push(this.value)
            this.value = ''
        }
    },
    computed: {
        findItem() {
            if (this.find_word) {
                return this.array.filter(function (v) {
                    return (v.indexOf(this.find_word) > -1);
                }, this)
            }
            else {
                return this.array;
            }
        }
    }
})