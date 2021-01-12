import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data:{
      exchangeRates: [], //this array now contains data taken from API with fetchExchangeRates method, which is mounted (run at start)
      base: 0,
      date: "",
      selectedCurrency: 0
    },
    computed:{ 
      }

    },
    mounted: function(){
      this.fetchExchangeRates()
      
    },
    methods:{
      fetchExchangeRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => {
          this.exchangeRates = data.rates
          this.base = data.base;
          this.date = data.date;
        })
      }
    }
  })
});