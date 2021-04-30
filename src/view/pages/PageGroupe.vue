<!--PageGroupe.vue, partie réutilisable pour les vues contenant une carte d'identification du groupe et/ou la liste des stagiaires
Maud Harvey-Guillaume Labrecque, 26 avril 2021-->
<template>
  <b-container class="principal">
    <b-row>
      <!-- La première colonne affichera la carte d'identification et la liste des stagiaires -->
      <b-col sm="3" class="p-gauche">
        <!--  Composant CarteIdentificationGroupe et Stagiaires -->
        <div>
          <CarteIdentificationGroupe></CarteIdentificationGroupe>
        </div>
        <div>
          <Stagiaires></Stagiaires>
        </div>
      </b-col>
      <!-- Section dynamique du contenu sélectionné -->
      <b-col sm="9"><PageStagiaires></PageStagiaires></b-col>
    </b-row>
  </b-container>
</template>

<script>
import CarteIdentificationGroupe from "../content/components/CarteIdentificationGroupe";
import Stagiaires from "../content/components/Stagiaires";
import PageStagiaires from "./PageStagiaires";

export default {
  name: "PageGroupe",
  components: {
    CarteIdentificationGroupe,
    Stagiaires,
    PageStagiaires,
  },
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
