<!--PageStagiaire.vue, page contenant la liste des tâches , un graphiques des évaluations et les différents profils pour un stagiaires sélectionné
Maud Harvey-Guillaume Labrecque, 4 mai 2021-->
<template>
  <b-container class="px-0 h-100">
    <b-row class="h-100">
      <!-- section du graphique et de la liste des tâches -->
      <b-col sm="9" class="px-2">
        <!-- Graphique -->
        <b-row>
          <b-col>
            <EvaluationTaches></EvaluationTaches>
          </b-col>
        </b-row>
        <!-- Titre -->
        <b-row>
          <b-col>
            <h3 class="ml-2">Tâches</h3>
          </b-col>
        </b-row>
        <!-- Faire le v-for sur la row -->
        <b-row v-for="item in taches" :key="item.name" class="my-3">
          <b-col
            ><Tache
              :name="item.name"
              :date="item.date"
              :description="item.description"
              :evaluation="item.evaluation"
            ></Tache>
          </b-col>
        </b-row>
        <!-- Bouton pour charger plus -->
        <b-row align-h="center">
          <b-col sm="4">
            <b-button class="font-weight-bold my-5">Charger plus</b-button>
          </b-col>
        </b-row>
      </b-col>
      <!-- section filtre, aside de droite -->
      <b-col sm="3" class="sectionDroite p-2">
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
  data() {
    return {
      taches: [
        {
          name: "Exploration du milieu de stage",
          date: "2021/05/11",
          description: "kjahdkashdkasjh",
          evaluation: 4,
        },
        {
          name: "Étude du projet",
          date: "2021/05/12",
          description: "kjahdkashdkasjh",
          evaluation: 4,
        },
        {
          name: "Étude du framework Metronic",
          date: "2021/05/13",
          description: "kjahdkashdkasjh",
          evaluation: 3,
        },
        {
          name: "Intégration des maquettes",
          date: "2021/05/14",
          description: "kjahdkashdkasjh",
          evaluation: 2,
        },
      ],
    };
  },
};
</script>   
<style scoped>
.sectionDroite {
  background-color: #ffffff;
}
</style>