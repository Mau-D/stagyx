<!--PageStagiaires.vue, Contenu lors de la sélection de Stagiaires dans le menu, inclus les composants: TableauStagiaires et FiltreStagiaires 
Maud Harvey-Guillaume Labrecque, 29 avril 2021-->
<template>
  <b-container class="p-0 h-100">
    <b-row class="h-100">
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
      <b-col sm="3" class="sectionFiltre px-0 pl-2">
        <b-row>
          <b-col>
            <h1 class="text-muted">Filtres</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <FiltreStagiaires></FiltreStagiaires>
          </b-col>
        </b-row>
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
.sectionFiltre {
  background-color: #ffffff;
}
</style>