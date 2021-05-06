<!--TuteurDetails.vue, Section des détails du tuteur
Maud Harvey-Guillaume Labrecque, 26 avril 2021-->
<template>
  <b-container class="bg-light my-5">
    <b-row class="py-5">
      <!-- section gauche Tuteur -->
      <b-col sm="6">
        <b-container fluid>
          <b-row>
            <b-col sm="5" class="font-weight-bold p-0">
              <p class="m-0" style="font-size: 1.3rem; font-weight: bold">
                Nom du tuteur
              </p>
              <span class="text-muted d-block"> Entreprise </span>
              <p
                class="mt-3"
                style="font-size: 1.3rem; font-weight: bold; color: #8950fc"
              >
                3 stagiaires
              </p>
            </b-col>

            <b-col sm="6">
              <span class="symbol-label">
                <!--Pour la src dans un v-for      :src="item.img"       -->
                <img
                  src="media/svg/avatars/001-boy.svg"
                  class="h-75 align-self-end"
                  alt=""
                  style="width: 6rem"
                />
              </span>
            </b-col>
          </b-row>
        </b-container>
        <b-button
          class="w-75 mt-5 px-5"
          variant="success"
          style="font-weight: bold"
          >Associer un nouveau stagiaire</b-button
        >
      </b-col>
      <!-- section centre Stagiaires -->
      <b-col sm="4">
        <h4 class="text-muted d-block">Stagiaires</h4>
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center table-head-bg table-borderless"
          >
            <tbody>
              <template v-for="(item, i) in list">
                <tr v-bind:key="i">
                  <td class="pl-0 pt-8">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-50 symbol-light mr-4">
                        <span class="symbol-label">
                          <img
                            :src="item.img"
                            class="h-75 align-self-end"
                            alt=""
                          />
                        </span>
                      </div>
                      <div>
                        <a
                          class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >{{ item.name }}</a
                        >
                        <span class="text-muted font-weight-bold d-block">{{
                          item.desc
                        }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </b-col>
      <!-- section droite Action -->
      <b-col sm="2" class="text-right">
        <div>
          <!-- Modifier -->
          <span class="symbol-label">
            <span class="svg-icon svg-icon-lg svg-icon-primary">
              <!--begin::Svg Icon-->
              <inline-svg
                src="media/svg/icons/Communication/Write.svg"
              ></inline-svg>
              <!--end::Svg Icon-->
            </span>
          </span>
          <!-- Supprimer -->
          <span class="symbol-label">
            <span class="svg-icon svg-icon-lg" style="fill: #3699ff">
              <!--begin::Svg Icon-->
              <inline-svg
                src="media/svg/icons/Communication/trash-can-outline.svg"
              ></inline-svg>
              <!--end::Svg Icon-->
            </span>
          </span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TuteurDetails",
  data() {
    return {
      list: [
        {
          img: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          desc: "HTML, JS, ReactJS",
          paid: "$8,000,000",
          status: "In Proccess",
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
          status: "Pending",
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
          status: "Paid",
          status2: "Paid",
          amount: "$6,700",
          company: "RoadGee",
          company_desc: "Transportation",
          rate: "Best Rated",
        },
      ],
    };
  },
};
</script>

<style>
</style>