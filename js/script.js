const {createApp}= Vue;

createApp ({

data (){

return {
counter : 0,
pizze : [
"img/uno.jpg",
"img/due.jpg",
"img/tre.jpg",
"img/quattro.jpg",
"img/cinque.jpg"

],  
infoPizze: {
titolo: "Slides"
  
}

  




};  



},

methods: {

  nextPrev(n) {
    this.counter += n;
    if (this.counter === this.pizze.length) this.counter = 0;
    if (this.counter < 0) this.counter = this.pizze.length - 1;
  }




},

mounted(){



}

}).mount("#app")