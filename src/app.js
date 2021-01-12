import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data:{
      exchangeRates: [], //this array now contains data taken from API with fetchExchangeRates method, which is mounted (run at start)
      base: 0,
      date: "",
      selectedCurrency: 0,
      amountToConvert: null,
      convertFrom: null,
      convertTo: null
    },
    computed:{ 
          calculatedResult: function() {
            if (this.convertTo === 'GBP') {
            return this.amountToConvert / this.exchangeRates['GBP']
            }
            else {
            return this.amountToConvert * this.exchangeRates['GBP']
          }
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