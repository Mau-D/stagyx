<!--PageGroupes.vue, Page affichant des cartes des différents groupes avec un stage actif, inclus les composants: CarteGroupe, Annonce et Archives
Maud Harvey-Guillaume Labrecque, 14 mai 2021-->
<template>
  <b-container fluid class="px-0 h-100">
    <b-row class="h-100">
      <!-- section principale, cartes et annonce -->
      <b-col sm="10" class="p-0">
        <b-container fluid>
          <!-- titre -->
          <b-row align-h="between" class="my-5">
            <b-col sm="6">
              <h1 class="text-muted">Stages actifs</h1>
            </b-col>
            <b-col sm="4" class="text-right">
              <b-button
                style="
                  background-color: #eee5ff;
                  color: #8950fc;
                  font-weight: bold;
                "
                >Créer un nouveau stage</b-button
              >
            </b-col>
          </b-row>
          <!-- Cartes des Groupe -->
          <b-row class="my-5">
            <b-col sm="12" md="6" xl="4" v-for="(result, idx) in resultsGroups" :key="idx">
              <CarteGroupe
              :id="result._id"
              :groupName="result.name"
              :schedule="result.schedule"
              :startDate="result.startDate"
              :endDate="result.endDate"
              :type="result.type"
              ></CarteGroupe>
            </b-col>
          </b-row>
          <b-row align-h="start" class="my-5">
            <b-col sm="6">
              <h1 class="text-muted">Annonce rapide</h1>
            </b-col>
          </b-row>
          <!-- Annonce, textarea -->
          <b-row>
            <b-col><Annonce></Annonce></b-col>
          </b-row>
        </b-container>
      </b-col>
      <!-- section des archives -->
      <b-col sm="2" class="bgWhite h-100 pl-1">
        <Archives></Archives>
      </b-col>
    </b-row>

    <!-- Annonce, titre -->
  </b-container>
</template>

<script>
import CarteGroupe from "../content/components/CarteGroupe";
import Archives from "../content/components/Archives";
import Annonce from "../content/components/Annonce";
import { MyMixinGetGroups } from "../../core/services/serviceGetGroups";

export default {
  name: "PageGroupes",
  components: {
    CarteGroupe,
    Archives,
    Annonce,
  },
  data: function (){
    return{
      resultsGroups: []
      }
  },
   mixins: [MyMixinGetGroups],
}
</script>

<style scoped>
.bgWhite {
  background-color: #ffffff !important;
}
</style>