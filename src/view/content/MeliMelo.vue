<template>
  <div>
    <!-- Est déjà dans un v-for avec les donné dans le script (A) -->
    <div>
      <h1>StagiaireMini.vue</h1>
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
    </div>
    <!-- ################################################################################# -->
    <div>
      <!-- Est déjà dans un v-for avec les donné dans le script (B) -->
      <h1>ProgrammeMini.vue</h1>
      <div class="card-body pt-2">
        <template v-for="(item, i) in listSessionMini">
          <!--begin::Item-->
          <div class="d-flex align-items-center mb-10" v-bind:key="i">
            <!--begin::Symbol-->
            <div
              class="symbol symbol-40 mr-5"
              v-bind:class="`symbol-light-${item.style}`"
            >
              <span class="symbol-label">
                <span
                  class="svg-icon svg-icon-lg"
                  v-bind:class="`svg-icon-${item.style}`"
                >
                  <!--begin::Svg Icon-->
                  <inline-svg :src="item.svg"></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </span>
            </div>
            <!--end::Symbol-->
            <!--begin::Text-->
            <div class="d-flex flex-column font-weight-bold">
              <a class="text-dark text-hover-primary mb-1 font-size-lg">
                {{ item.title }}
              </a>
              <span class="text-muted">
                {{ item.desc }}
              </span>
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->
        </template>
      </div>
    </div>
    <!-- ################################################################################# -->
    <div>
      <!-- Est déjà dans un v-for avec les donné dans le script (B) -->
      <h1>SessionMini.vue</h1>
      <div class="card-body pt-2">
        <template v-for="(item, i) in listSessionMini">
          <!--begin::Item-->
          <div class="d-flex align-items-center mb-10" v-bind:key="i">
            <!--begin::Symbol-->
            <div
              class="symbol symbol-40 mr-5"
              v-bind:class="`symbol-light-${item.style}`"
            >
              <span class="symbol-label">
                <span
                  class="svg-icon svg-icon-lg"
                  v-bind:class="`svg-icon-${item.style}`"
                >
                  <!--begin::Svg Icon-->
                  <inline-svg :src="item.svg"></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </span>
            </div>
            <!--end::Symbol-->
            <!--begin::Text-->
            <div class="d-flex flex-column font-weight-bold">
              <a class="text-dark text-hover-primary mb-1 font-size-lg">
                {{ item.title }}
              </a>
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->
        </template>
      </div>
    </div>
    <!-- ################################################################################# -->
    <div>
      <!-- Est déjà dans un v-for avec les donné dans le script (A) -->
      <h1>Etoiles.vue</h1>
      <p>
        C'est pas exactement celui ou on peut avoir 3étoiles sur 5... va falloir
        chercher plus, mais d'ici là, c'est ce que l'on a!
      </p>
      <tbody>
        <template v-for="(item, i) in list">
          <div v-bind:key="i" class="ml-5">
            <!-- La class="ml-5" c'est pour lui donner de la margin à droite. -->
            <div>
              <img
                src="media/logos/stars.png"
                alt="image"
                style="width: 5rem"
              />
              <span class="text-muted font-weight-bold d-block">{{
                item.rate
              }}</span>
            </div>
          </div>
        </template>
      </tbody>
    </div>
    <!-- ################################################################################# -->
    <div>
      <h1>CarteTuteur.vue</h1>
      <b-card class="CarteTuteur p-0 text-left">
        <div class="d-flex flex-row">
          <div class="d-flex flex-column font-weight-bold p-2">
            <a class="text-dark text-hover-primary mb-1 font-size-lg">
              Nom du tuteur
            </a>
            <span class="text-muted">
              Entrepise
            </span>
            <v-col class="text-center" cols="12" sm="4">
              <div class="m-0">
                <b-button class="btn-info" style="font-weight: bold">
                  Contacter
                </b-button>
              </div>
            </v-col>
          </div>
          <div>
            <span class="symbol-label">
              <!--Pour la src dans un v-for      :src="item.img"       -->
              <img
                src="media/svg/avatars/001-boy.svg"
                class="h-75 align-self-end"
                alt=""
                style="width: 6rem"
                align-v="end"
              />
            </span>
          </div>
        </div>
      </b-card>
    </div>
    <!-- ################################################################################# -->
        <b-container class="d-flex flex-row">
          <b-col class="d-flex flex-column font-weight-bold p-2">
            <a class="text-dark text-hover-primary mb-1 font-size-lg">
              Nom du tuteur
            </a>
            <span class="text-muted">
              Entrepise
            </span>
            <b-button class="btn-info" style="font-weight: bold">
              Contacter
            </b-button>
          </b-col>
          <b-col>
            <span class="symbol-label">
              <!--Pour la src dans un v-for      :src="item.img"       -->
              <img
                src="media/svg/avatars/001-boy.svg"
                class="h-75 align-self-end"
                alt=""
                style="width: 6rem"
                align-v="end"
              />
            </span>
          </b-col>
        </b-container>
  </div>
</template>

<script>
export default {
  name: "MeliMelo",
  data() {
    return {
      // Les donnés (A)
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
        {
          img: "media/svg/avatars/047-girl-25.svg",
          name: "Natali Trump",
          desc: "Python, PostgreSQL, ReactJS",
          paid: "$2,600,000",
          status: "Paid",
          status2: "Pending",
          amount: "$14,000",
          company: "The Hill",
          company_desc: "Insurance",
          rate: "Average",
        },
      ],
      // Les donnés (A)
      listSessionMini: [
        {
          title: "Briefing",
          desc: "Project Manager",
          svg: "media/svg/icons/Home/Library.svg",
          style: "primary",
        },
        {
          title: "Design",
          desc: "Art Director",
          svg: "media/svg/icons/Communication/Write.svg",
          style: "warning",
        },
        {
          title: "Logics",
          desc: "Lead Developer",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          style: "success",
        },
        {
          title: "Development",
          desc: "DevOps",
          svg: "media/svg/icons/General/Attachment2.svg",
          style: "danger",
        },
        {
          title: "Testing",
          desc: "QA Managers",
          svg: "media/svg/icons/Communication/Shield-user.svg",
          style: "info",
        },
      ],
    };
  },
};
</script>

<style scoped>
.CarteTuteur {
  background-color: white;
  max-width: fit-content;
}
.card-body {
  padding: 0;
}
</style>
