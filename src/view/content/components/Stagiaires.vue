<!--Stagiaires.vue, Liste de tous les stagiaires du groupe sélectionné
Maud Harvey-Guillaume Labrecque, 26 avril 2021-->
<template>
  <!-- router-link 'to' prop. -->

  <div>
    <div class="d-flex justify-content-between p-3">
      <h5>Stagiaires</h5>
      <b-button pill variant="info" size="sm" class="ml-4">Ajouter</b-button>
    </div>
    <b-list-group>
      <b-list-group-item
        href="#some-link"
        class="d-flex justify-content-between"
      >
        <div>
          <v-avatar size="36">
            <img src="media/users/100_1.jpg" alt="étudiant" />
          </v-avatar>
          <div class="d-inline-block ml-3">
            <strong>Guillaume Labrecque</strong>
            <p class="text-muted">Nom de la compagnie</p>
          </div>
        </div>
        <i class="fas fa-dot-circle text-danger my-auto"></i>
      </b-list-group-item>
      <b-list-group-item
        href="#some-link"
        class="d-flex justify-content-between etudiantActif"
      >
        <div>
          <v-avatar size="36">
            <img src="media/users/100_2.jpg" alt="étudiant" />
          </v-avatar>
          <div class="d-inline-block ml-3">
            <strong>Maud Harvey</strong>
            <p class="text-muted">Nom de la compagnie</p>
          </div>
        </div>
        <i class="fas fa-dot-circle text-success my-auto"></i>
      </b-list-group-item>
      <b-list-group-item
        href="#some-link"
        class="d-flex justify-content-between"
      >
        <div>
          <v-avatar size="36">
            <img src="media/users/100_3.jpg" alt="étudiant" />
          </v-avatar>
          <div class="d-inline-block ml-3">
            <strong>Maud Harvey</strong>
            <p class="text-muted">Nom de la compagnie</p>
          </div>
        </div>
        <i class="fas fa-dot-circle text-warning my-auto"></i>
      </b-list-group-item>
      <b-list-group-item
        href="#some-link"
        class="d-flex justify-content-between"
      >
        <div>
          <v-avatar size="36">
            <img src="media/users/100_4.jpg" alt="étudiant" />
          </v-avatar>
          <div class="d-inline-block ml-3">
            <strong>Maud Harvey</strong>
            <p class="text-muted">Nom de la compagnie</p>
          </div>
        </div>
        <i class="fas fa-dot-circle text-danger my-auto"></i>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Stagiaires",
};
</script>

<style scoped>
p,
strong {
  font-size: 0.8rem;
}
/*Class pour l'étudiant sélectionné */
.etudiantActif {
  border-left: 5px solid red;
}
</style>