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
      <v-card-subtitle>{{ stagiaires.length }} stagiaires </v-card-subtitle>
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
      <!-- v-slot pour l'affichage des stagiaires(avatar, nom, spécialites) -->
      <template v-slot:[`item.identification`]="{ item }">
        <div class="d-flex justify-content-between my-1">
          <div class="d-flex justify-content-start">
            <div class="symbol symbol-50 symbol-light my-auto">
              <span class="symbol-label">
                <img
                  :src="item.identification.img"
                  class="h-75 align-self-end"
                  alt="avatar"
                />
              </span>
            </div>
            <div class="my-auto">
              <p
                class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
              >
                {{ item.identification.name }}
              </p>
              <span class="text-muted font-weight-bold d-block">{{
                item.identification.desc
              }}</span>
            </div>
          </div>
        </div>
      </template>
      <!-- v-slot Pour les étoiles de l'évaluation dynamique -->
      <template v-slot:[`item.evaluation`]="{ item }">
        <div class="ml-5">
          <!-- La class="ml-5" c'est pour lui donner de la margin à droite. -->
          <div>
            <star-rating
              v-model="item.evaluation"
              :read-only="true"
              :increment="0.1"
              :star-size="14"
              :show-rating="false"
              :padding="2"
              :border-width="2"
              border-color="#ffd055"
              inactive-color="#ffffff"
            >
            </star-rating>
            <!-- ######################################## -->
            <span class="text-muted font-weight-bold d-block">{{
              item.rate
            }}</span>
            <!-- ######################################## -->
          </div>
        </div>
      </template>
      <!-- v-slot pour les boutons d'action -->
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
    </v-data-table>
  </div>
</template>

<script>
//Composant pour la gestion de la notation par étoiles
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  name: "TableauStagiaires",
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Stagiaires",
          align: "left",
          value: "identification",
        },
        { text: "Hôte", value: "hote" },
        { text: "Évaluation", value: "evaluation" },
        { text: "ACTION", value: "action", sortable: false },
      ],
      stagiaires: [
        {
          identification: {
            img: "media/svg/avatars/001-boy.svg",
            name: "Brad Simmons",
            desc: "HTML, JS, ReactJS",
          },

          hote: "Cégep de Trois-Rivières",
          evaluation: 3.4,
        },
        {
          identification: {
            img: "media/svg/avatars/018-girl-9.svg",
            name: "Jessie Clarcson",
            desc: "C#, ASP.NET, MS SQL",
          },
          hote: "Poka",
          evaluation: 1,
        },
        {
          identification: {
            img: "media/svg/avatars/014-girl-7.svg",
            name: "Lebron Wayde",
            desc: "PHP, Laravel, VueJS",
          },
          hote: "Action Web",
          evaluation: 2,
        },
        {
          identification: {
            img: "media/svg/avatars/047-girl-25.svg",
            name: "Natali Trump",
            desc: "Python, PostgreSQL, ReactJS",
          },
          hote: "Acolyte",
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