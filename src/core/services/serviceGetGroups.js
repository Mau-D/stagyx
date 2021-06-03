// Fichier contenant le service pour récupérer tous les groupes dans l'API
//servicesGetGroups.js /services
//Maud Harvey et Guillaume Labrecque
//29 mai 2020


//service pour obtenir les groupes
export var MyMixinGetGroups = {
    data(){
        return{
            //Données reçues de l'API
           // resultsGroups: []
        }
    },
    async created() {
        //importer axios
        const axios = require('axios');
            await axios.get("https://stagyx-api.herokuapp.com/api/private/group/list", {
                headers: {
                Authorization:
                    "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOWMxNDlmZWYyODRjMDM1YzhmNjQwNCIsIm5hbWUiOiJoY2xvdXRpZXIiLCJpYXQiOjE2MjI3NTEzNjEsImV4cCI6MTYyMjc1NDk2MX0.3RjwvlYDrwVqYUuJrXYuB_5ncf5SQWE99VwQDGYhtts",
                //the token is a variable which holds the token
                },
            })
            //La variable results est le tableau dans les données de l'API data
            .then((res) => ( this.resultsGroups = res.data))
            .catch((err) => console.log(err));
            console.log("dans le service" + this.resultsGroups)
    }
  }

