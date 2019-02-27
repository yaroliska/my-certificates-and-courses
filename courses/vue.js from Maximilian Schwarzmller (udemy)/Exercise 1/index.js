new Vue({
            el:'#exercise',
            data:{
                name:'YAROSLAVNA',
                age:'21',
                link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYeEvJVh0SuzZYFwOaKa_M7Aahb6Aqb8jWWRScKFn__tVRK8x'
            },
            methods: {
                output: function(){
                    return Math.random();
                
                }
            }
        })