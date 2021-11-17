const vm = new Vue({
    el: '#root',
    data: {
        number: 0,
        TweenNumber: 0,
        message: "",
        ban_message: "",
        tmp: "",
        edit: false,
        time: '',
        timetmp: '0',
        TimeError: "",
        array: [],
        score: 0,
        worlds: 0,
        GameStartMessage: "게임을 시작하시겠습니까? 지금 까지의 점수는 모두 날라갑니다."
    },
    methods: {
        GameStart() {
            let confirmstart = confirm(this.GameStartMessage);
            if (confirmstart) {
                this.worlds = 0;
                this.score = 0;
                this.edit = true;
                this.timetmp = this.time;
                const game = setInterval(function () {
                    vm.timetmp--;
                    if (vm.timetmp == 0) {
                        vm.edit = false;
                        clearTimeout(game);
                    }
                }, 1000);
            }
        }
    },
    computed: {
        AnimeNumber() {
            return this.TweenNumber.toFixed(0);
        }
    },
    watch: {
        ban_message() {
            this.ban_message = this.ban_message.trim();
            this.array = this.ban_message.split(',');
        },
        number() {
            TweenMax.to(this.$data, 1, { TweenNumber: this.number })
        },
        message() {
            vm.worlds = vm.message.length;
            for (let i = 0; i < vm.array.length; i++) {
                let pos = vm.message.indexOf(vm.array[i]);
                if (pos >= 0) {
                    alert("금지된 문자 입력 -1점")
                    vm.score++;
                    vm.message = vm.message.substr(0, pos);
                }

                // alert(this.ban_message + "는 입력할 수 없습니다.");
            }
        }
    }
})