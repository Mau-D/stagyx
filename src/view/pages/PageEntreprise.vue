<template>
  <b-container fluid>
    <b-row>
      <b-col class="entreprise" cols="9">
        <EntrepriseDetails />
      </b-col>
      <b-col class="encadreMauve" cols="3">
        <EntrepriseEnChiffre />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import EntrepriseDetails from "../content/components/EntrepriseDetails";
import EntrepriseEnChiffre from "../content/components/EntrepriseEnChiffre";
export default {
    name:"PageEntreprise",
    components:{
      EntrepriseDetails,
      EntrepriseEnChiffre,
    }
}
</script>

<style>
/* .entreprise {
  background-color: pink;
  height: 80vh;
}
.encadreMauve {
  background-color: blue;
  height: 80vh;
} */
</style>
