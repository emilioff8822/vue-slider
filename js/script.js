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
nomiPizze: [
  "Pizza 1, diavola",
  "Pizza 2, margherita",
  "Pizza 3, marinara",
  "Pizza 4, capricciosa",
  "Pizza 5, con salsiccia"
],


infoPizze: {
titolo: "Slides"
  
}

  




};  



},

methods: {

  next() {
    this.counter++;
    if (this.counter === this.pizze.length) this.counter = 0;
  },
  prev() {
    this.counter--;
    if (this.counter < 0) this.counter = this.pizze.length - 1;
  }



},

mounted(){



}

}).mount("#app")