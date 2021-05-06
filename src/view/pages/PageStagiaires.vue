<!--PageStagiaires.vue, Contenu lors de la sélection de Stagiaires dans le menu, inclus les composants: TableauStagiaires et FiltreStagiaires 
Maud Harvey-Guillaume Labrecque, 29 avril 2021-->
<template>
  <b-container class="px-0">
    <b-row>
      <!-- section tableau -->
      <b-col sm="9" class="px-0">
        <b-container>
          <!-- titre -->
          <b-row>
            <b-col>
              <h1 class="text-muted">Stagiaires</h1>
            </b-col>
          </b-row>
          <!-- Tableau -->
          <b-row>
            <b-col>
              <TableauStagiaires></TableauStagiaires>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <!-- section filtre -->
      <b-col sm="3" class="bgWhite vh-100 pl-7">
        <FiltreStagiaires></FiltreStagiaires>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TableauStagiaires from "../content/components/TableauStagiaires";
import FiltreStagiaires from "../content/components/FiltreStagiaires";

export default {
  name: "PageStagaires",
  components: {
    TableauStagiaires,
    FiltreStagiaires,
  },
};
</script>

<style scoped>
.bgWhite {
  background-color: white !important;
}
</style>