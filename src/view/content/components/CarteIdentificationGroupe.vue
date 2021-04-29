<!--CarteIdentificationGroupe.vue, Carte avec les informations du groupe sélectionné
Maud Harvey-Guillaume Labrecque, 26 avril 2021-->
<template>
  <!-- Carte avec les informations du groupe -->
  <v-card>
    <div class="text-right">
      <b-dropdown
        variant="outline"
        size="sm"
        text="Changer de groupe"
        class="p-2 text-light"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
    <v-card-text class="text-light pl-1">
      <h4 class="mb-4">Développement web Front-End</h4>

      <div class="text-left pl-4">
        <p><strong>Début: </strong>2021-05-13</p>
        <p><strong>Fin: </strong>2021-07-13</p>
        <p><strong>Session: </strong>Été 2021</p>
        <p><strong>Stagiaires: </strong>17</p>
        <p><strong>Type: </strong>Alternance travail-études</p>
      </div>
      <div class="text-right">
        <h1>#1038</h1>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CarteIdentificationGroupe",
};
</script>

<style scoped>
div .v-card {
  background-color: #e63946;
}

p {
  font-size: 1rem;
}
h4 {
  font-size: 1.3rem;
}
.v-card {
  border-radius: 0% !important;
}
</style>
