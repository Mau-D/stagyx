<!--TableauStagiaires.vue, Tableau de tous les stagiaires du groupe sélectionné, informations et boutons pour modifier ou supprimer
Maud Harvey-Guillaume Labrecque, 29 avril 2021-->
<template>
  <div>
    <v-card outlined tile>
      <v-card-title>
        Stagiaires
        <v-spacer></v-spacer>
        <b-button variant="success" style="font-weight: bold">
          <span class="symbol-label">
            <span class="svg-icon">
              <!--begin::Svg Icon-->
              <inline-svg
                src="media/svg/icons/Communication/Add-user.svg"
              ></inline-svg>
              <!--end::Svg Icon-->
            </span>
          </span>
          Nouveau</b-button
        >
      </v-card-title>
      <v-card-subtitle> Nombre de stagiaires </v-card-subtitle>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="stagiaires"
      :items-per-page="15"
      item-key="name"
      show-select
      v-model="selected"
      :single-select="singleSelect"
      hide-default-footer
    >
      <!-- Problème avec eslint -->
      <!-- To disable these errors, add the following rule to your eslint configuration: "vue/valid-v-slot": ["error", { "allowModifiers": true }] -->
      <template v-slot:[`item.action`]="{ item }">
        <span class="symbol-label">
          <span
            class="svg-icon svg-icon-md svg-icon-primary"
            @click="editItem(item)"
          >
            <!--begin::Svg Icon-->
            <inline-svg
              @click="editItem(item)"
              src="media/svg/icons/Communication/Write.svg"
            ></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
        <!-- Supprimer -->
        <span class="symbol-label">
          <span
            class="svg-icon svg-icon-md"
            style="fill: #3699ff"
            @click="deleteItem(item)"
          >
            <!--begin::Svg Icon-->
            <inline-svg
              src="media/svg/icons/Communication/trash-can-outline.svg"
            ></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
      </template>
      <!-- Pour les étoiles de l'évaluation dynamique -->
      <template v-slot:[`item.evaluation`]="{ item }">
        <div class="ml-5">
          <!-- La class="ml-5" c'est pour lui donner de la margin à droite. -->
          <div v-for="n in item.evaluation" :key="n">
            <img src="media/logos/stars.png" alt="image" style="width: 5rem" />
            <span class="text-muted font-weight-bold d-block">{{
              item.rate
            }}</span>
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "TableauStagiaires",
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Stagiaires",
          align: "left",
          value: "name",
        },
        { text: "Hôte", value: "hote" },
        { text: "Évaluation", value: "evaluation" },
        { text: "ACTION", value: "action", sortable: false },
      ],
      stagiaires: [
        {
          name: "Maud Harvey",
          hote: "Cégep de Trois-Rivières",
          evaluation: 3,
        },
        {
          name: "Machin Chose",
          hote: "Cégep de Trois-Rivières",
          evaluation: 1,
        },
        {
          name: "Guillaume Labrecque",
          hote: "Action Web",
          evaluation: 2,
        },
        {
          name: "Jean Jacques",
          hote: "Cégep de Trois-Rivières",
          evaluation: 4,
        },
      ],
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.stagiaires.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      console.log("edition" + item.name);
    },

    deleteItem(item) {
      this.editedIndex = this.stagiaires.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      console.log("suppression" + item.name);
    },
  },
};
</script>

<style scoped>
table {
  background-color: white;
}
</style>