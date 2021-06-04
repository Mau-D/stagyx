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
        <b-dropdown-item v-for="group in resultsGroups" :key="group.name" v-show="group.name != groupName"  @click="changeGroup(group._id)">{{group.name}}</b-dropdown-item>
      
      </b-dropdown>
    </div>
    <v-card-text class="text-light pl-1">
      <h4 class="mb-4">{{schedule}}</h4>

      <div class="text-left pl-4">
        <p><strong>Début: </strong>{{startDate | date}}</p>
        <p><strong>Fin: </strong>{{endDate | date}}</p>
        <p><strong>Session: </strong>Nom de la session</p>
        <p><strong>Stagiaires: </strong>Nombre de stagiaires</p>
        <p><strong>Type: </strong>{{type}}</p>
      </div>
      <div class="text-right">
        <h1>{{groupName}}</h1>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CarteIdentificationGroupe",
props:{ 
    resultsGroups: Array,
    groupName: String,
    schedule:String,
    startDate: String,
    endDate: String,
    type: String
  },
  methods:{
    changeGroup: function(id){
      this.$router.push({ name: 'BilanGroupe', params: { groupeId:  id} })
    }
  }
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
