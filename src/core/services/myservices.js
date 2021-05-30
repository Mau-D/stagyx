// Fichier contenant les services des appels à l'api
//myservices.js /services
//Maud Harvey et Guillaume Labrecque
//29 mai 2020

//service pour obtenir les groupes
export var MyMixinAPI = {
    data(){
        return{
            //Données reçues de l'API
            results: null
        }
    },
    async created() {
        //importer axios
        const axios = require('axios');
        await axios
            .get("https://stagyx-api.herokuapp.com/api/private/group/list", {
                headers: {
                Authorization:
                    "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOWMxNDlmZWYyODRjMDM1YzhmNjQwNCIsIm5hbWUiOiJoY2xvdXRpZXIiLCJpYXQiOjE2MjIzOTYwMzQsImV4cCI6MTYyMjM5OTYzNH0.tHqpw9pY1F_0bQMevXjkXFQgrse51fjLakHZN8qL6QA",
                //the token is a variable which holds the token
                },
            })
            //La variable results est le tableau dans les données de l'API data
            .then((res) => ( this.results = res.data))
            .catch((err) => console.log(err));
            
    }
  }

