<!--Archives.vue, Section pour choisir l'affichage des groupes pa sessions et par programme, PageGroupes
Maud Harvey-Guillaume Labrecque, 15 mai 2021-->
<template>
  <b-container class="p-4">
    <!-- Titre -->
    <b-row>
      <h1 class="text-muted mt-5 mb-20">Archives</h1>
    </b-row>
    <!-- Sélection d'une session-->
    <b-row>
      <div class="mb-4">
        <strong>Par session</strong>
      </div>
    </b-row>
    <b-row class="mb-10">
      <b-container fluid class="pl-2">
        <b-row>
          <b-col
            sm="6"
            v-for="n in 8"
            :key="n"
            class="d-flex flex-row d-flex-between my-2"
          >
            <div class="symbol symbol-25" v-bind:class="`symbol-light-success`">
              <span class="symbol-label">
                <span
                  class="svg-icon svg-icon-sm"
                  v-bind:class="`svg-icon-success`"
                >
                  <!--begin::Svg Icon-->
                  <inline-svg
                    src="media/svg/icons/Home/Library.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </span>
            </div>
            <strong class="text-dark mb-1 ml-2 font-size-xs my-auto"
              >Hiver 2021</strong
            >
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <!-- Sélection par programme-->
    <b-row>
      <div class="mb-4">
        <strong>Par programme</strong>
      </div>
    </b-row>
    <b-row>
      <b-container fluid class="pl-2">
        <b-row>
          <b-col
            sm="12"
            v-for="n in 4"
            :key="n"
            class="d-flex flex-row d-flex-between my-2"
          >
            <div class="symbol symbol-30" v-bind:class="`symbol-light-success`">
              <span class="symbol-label">
                <span
                  class="svg-icon svg-icon-sm"
                  v-bind:class="`svg-icon-success`"
                >
                  <!--begin::Svg Icon-->
                  <inline-svg
                    src="media/svg/icons/Home/Library.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </span>
            </div>
            <div class="ml-2">
              <strong class="text-dark font-size-s block"
                >Développement Web</strong
              >
              <p class="text-muted font-size-xs">Hiver2021</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Archives",
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>