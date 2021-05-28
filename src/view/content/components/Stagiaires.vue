<!--Stagiaires.vue, Liste de tous les stagiaires du groupe sélectionné
Maud Harvey-Guillaume Labrecque, 26 avril 2021-->
<template>
  <!-- router-link 'to' prop. -->

  <div class="bg-light">
    <div class="d-flex justify-content-between p-3">
      <h5 class="my-auto">Stagiaires</h5>
      <b-button
        style="background-color: #eee5ff; color: #8950fc; font-weight: bold"
        >Ajouter</b-button
      >
    </div>

    <div class="table-responsive bg-light">
      <table
        class="table table-head-custom table-vertical-center table-head-bg table-borderless"
      >
        <tbody>
          <template v-for="(item, i) in list">
            <tr v-bind:key="i">
              <td class="pl-0 pt-8">
                <div class="d-flex justify-content-between">
                  <div class="d-flex justify-content-start">
                    <div class="symbol symbol-50 symbol-light mr-4 my-auto">
                      <span class="symbol-label">
                        <img
                          :src="item.img"
                          class="h-75 align-self-end"
                          alt=""
                        />
                      </span>
                    </div>
                    <div class="my-auto">
                      <router-link to="/stagiaire">
                        <a
                          class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >{{ item.name }}</a
                        >
                      </router-link>
                      <span class="text-muted font-weight-bold d-block">{{
                        item.desc
                      }}</span>
                    </div>
                  </div>
                  <div class="my-auto">
                    <span class="symbol-label">
                      <span class="svg-icon svg-icon-lg" style="fill: green">
                        <!--begin::Svg Icon-->
                        <inline-svg
                          :class="item.status"
                          src="media/svg/icons/Communication/star-circle.svg"
                        ></inline-svg>
                        <!--end::Svg Icon-->
                      </span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stagiaires",
  data() {
    return {
      // Les donnés (A)
      list: [
        {
          img: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          desc: "HTML, JS, ReactJS",
          paid: "$8,000,000",
          status: "red",
          status2: "Paid",
          amount: "$520",
          company: "Intertico",
          company_desc: "Web, UI/UX Design",
          rate: "Best Rated",
        },
        {
          img: "media/svg/avatars/018-girl-9.svg",
          name: "Jessie Clarcson",
          desc: "C#, ASP.NET, MS SQL",
          paid: "$23,000,000",
          status: "yellow",
          status2: "Rejected",
          amount: "$1,600",
          company: "Agoda",
          company_desc: "Houses & Hotels",
          rate: "Above Average",
        },
        {
          img: "media/svg/avatars/014-girl-7.svg",
          name: "Lebron Wayde",
          desc: "PHP, Laravel, VueJS",
          paid: "$2,600,000",
          status: "green",
          status2: "Paid",
          amount: "$6,700",
          company: "RoadGee",
          company_desc: "Transportation",
          rate: "Best Rated",
        },
        {
          img: "media/svg/avatars/047-girl-25.svg",
          name: "Natali Trump",
          desc: "Python, PostgreSQL, ReactJS",
          paid: "$2,600,000",
          status: "red",
          status2: "Pending",
          amount: "$14,000",
          company: "The Hill",
          company_desc: "Insurance",
          rate: "Average",
        },
      ],
    };
  },
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
/*Classes pour le statut, représenté par la couleur du circle-star */
.red {
  fill: #f64e60;
}
.yellow {
  fill: #ffa800;
}
.green {
  fill: #1bc5bd;
}
</style>