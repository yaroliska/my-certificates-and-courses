new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	click:function(){
        		alert('Alert!');
        	},
        	keydown: function(event) {
        		this.value = event.target.value;
          }
        }
    });