<!--PageStagiaire.vue, page contenant la liste des tâches , un graphiques des évaluations et les différents profils pour un stagiaires sélectionné
Maud Harvey-Guillaume Labrecque, 4 mai 2021-->
<template>
  <b-container class="px-0">
    <b-row>
      <!-- section du graphique et de la liste des tâches -->
      <b-col sm="9" class="px-2">
        <!-- Graphique -->
        <b-row>
          <b-col>
            <evaluation-taches></evaluation-taches>
          </b-col>
        </b-row>
        <!-- Titre -->
        <b-row>
          <b-col>
            <h3 class="ml-2">Tâches</h3>
          </b-col>
        </b-row>
        <!-- Faire le v-for sur la row -->
        <b-row v-for="n in 5" :key="n" class="my-3">
          <b-col><Tache></Tache> </b-col>
        </b-row>
        <!-- Bouton pour charger plus -->
        <b-row align-h="center">
          <b-col sm="4">
            <b-button class="font-weight-bold my-5">Charger plus</b-button>
          </b-col>
        </b-row>
      </b-col>
      <!-- section filtre, aside de droite -->
      <b-col sm="3" class="bg-light p-0">
        <Profils></Profils>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import EvaluationTaches from "../content/components/EvaluationTaches.vue";
import Profils from "../content/components/Profils.vue";
import Tache from "../content/components/Tache.vue";
export default {
  components: { EvaluationTaches, Tache, Profils },
  name: "PageStagiaire",
};
</script>

   
<style>
</style>