<template>
  <b-container fluid>
    <b-row>
      <b-col class="entreprise" cols="9">
        <Entreprise />
      </b-col>
      <b-col class="encadreMauve" cols="3">
        <h1>test2</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Entreprise from "../content/components/Entreprise";
export default {
    name:"PageEntreprise",
    components:{
      Entreprise,
    }
}
</script>

<style>
.entreprise {
  background-color: pink;
  height: 80vh;
}
.encadreMauve {
  background-color: blue;
  height: 80vh;
}
</style>
