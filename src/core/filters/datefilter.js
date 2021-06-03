//datefilter.js, /filters
//Filtre pour le format des date
//Maud Harvey et Guillaume Labrecque
//3 juin 2021
import Vue from "vue";
import moment from "moment";
Vue.filter('date', 
  function (value) {  
                   return moment(value).format('MM/DD/YYYY');
                })
