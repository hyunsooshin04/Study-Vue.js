const vm = new Vue({
    el: '#root',
    data: {
        title: "Template Study",
    },
    template: '<h1>{{ title }} </h1>'
})
const vm2 = new Vue({
    el: '#root2',
    data: {
        message: "간단한 실습을 통해 템플릿의 역할과 수행하는 기능을 학습.",
    },
    template: '<h3>{{ message }} </h3>'
})
const vm3 = new Vue({
    el: '#root3',
    data: {
        message: "템플릿은 사용자가 볼 수는 없지만 라이브러리 내부적으로 template 속성에서 정의한 마크업 + 뷰 데이터를 가상 돔 기반의 render() 함수로 변환한다.",
        message2: " 변환된 render() 함수는 최종적으로 사용자가 볼 수 있게 화면을 그리는 역할을 한다.",
    },
    template: '<p>{{ message }} <br> {{ message2 }}</p>'
})