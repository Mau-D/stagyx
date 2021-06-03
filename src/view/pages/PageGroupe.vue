<!--PageGroupe.vue, partie réutilisable pour les vues contenant une carte d'identification du groupe et/ou la liste des stagiaires
Maud Harvey-Guillaume Labrecque, 26 avril 2021-->

<template>
  <b-container fluid class="principal">
    <b-row>
      <!-- La première colonne affichera la carte d'identification et la liste des stagiaires -->
      <b-col sm="3" class="p-gauche">
        <!--  Composant CarteIdentificationGroupe et Stagiaires -->
        <span v-for="group in resultsGroups" :key="group.name" >
        <div v-if="group._id === $route.params.groupeId">
          <CarteIdentificationGroupe
            :groupName="group.name"
            :schedule="group.schedule"
            :startDate="group.startDate"
            :endDate="group.endDate"
            :type="group.type"
          ></CarteIdentificationGroupe>
        </div>
         </span>
        <!-- #########################################################
          La section du composant Stagiaires doit être CACHÉ lors de l'affichage de la PageStagiaires dans la section dynamique
          ###################################################### -->
        <div>
          <Stagiaires></Stagiaires>
        </div>
      </b-col>
      <!-- Section dynamique du contenu sélectionné -->
      <b-col sm="9" class="px-0">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CarteIdentificationGroupe from "../content/components/CarteIdentificationGroupe";
import Stagiaires from "../content/components/Stagiaires";
import { MyMixinGetGroups } from "../../core/services/serviceGetGroups";
export default {
  name: "PageGroupe",
  components: {
    CarteIdentificationGroupe,
    Stagiaires,
  },
  data: function(){
    return{
      resultsGroups: []
    }
  },
  mixins:[MyMixinGetGroups],
};
</script>

<style scoped>
.principal {
  padding: 0;
}
.p-gauche {
  padding-left: -25px;
}
</style>
