new Vue({

    el:"#app",

    //i want reverse a message like Hello World!
    data:{
        message: "Clicca su questo pulsante per modificare la parola palindroma : ",
        palindroma:"I TOPI NON AVEVANO NIPOTI",
    },
    methods:{
        reverseMessage(){
            this.palindroma = this.palindroma.split('').reverse().join('');
    },
}
});


var app2 = new Vue({
    el: '#app-2',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  });

  let app3 = new Vue ({
    el: '#app-3',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });

  let app4 = new Vue({
    el: '#app-4',
    data: {
      message: 'Hello Vue!'
    }
  });