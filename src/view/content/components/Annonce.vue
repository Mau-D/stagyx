
<!--Annonce.vue, Carte avec un textarea pour faire une annonce le header offre des options d'édition
et le footer un bouton pour l'envoi avec un dropdown pour choisir le destinataire, PageGroupes
Maud Harvey-Guillaume Labrecque, 14 mai 2021--><template>
  <b-card
    header="featured"
    header-tag="header"
    footer-tag="footer"
    no-body
    class="my-3"
  >
    <b-card-body class="p-0"
      ><b-form-textarea
        class="rounded-0"
        id="textarea-rows"
        placeholder="Type message..."
        rows="9"
      ></b-form-textarea
    ></b-card-body>
    <template #header>
      <b-form-select
        v-model="selected"
        :options="options"
        style="width: 100px"
      ></b-form-select>
      <span class="symbol-label ml-3">
        <span class="svg-icon">
          <!--begin::Svg Icon-->
          <inline-svg src="media/svg/icons/Text/Bold.svg"></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
      <span class="symbol-label ml-3">
        <span class="svg-icon">
          <!--begin::Svg Icon-->
          <inline-svg src="media/svg/icons/Text/Itallic.svg"></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
      <span class="symbol-label ml-3">
        <span class="svg-icon">
          <!--begin::Svg Icon-->
          <inline-svg src="media/svg/icons/Text/Underline.svg"></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
      <span class="symbol-label ml-3">
        <span class="svg-icon">
          <!--begin::Svg Icon-->
          <inline-svg
            src="media/svg/icons/Text/format-list-bulleted.svg"
          ></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
      <span class="symbol-label ml-3">
        <span class="svg-icon">
          <!--begin::Svg Icon-->
          <inline-svg
            src="media/svg/icons/Text/format-list-numbers.svg"
          ></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
      <span class="symbol-label">
        <span class="svg-icon">
          <!--begin::Svg Icon-->
          <inline-svg
            src="media/svg/icons/Text/signature-text.svg"
          ></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
    </template>
    <template #footer>
      <b-dropdown
        id="dropdown-left"
        text="Envoyer à tous les stagiaires"
        class="m-2"
      >
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "Annonce",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Normal" },
        { value: "a", text: "ksajd" },
        { value: "b", text: "askjdh" },
        { value: { C: "3PO" }, text: "askjdg" },
      ],
    };
  },
};
</script>

<style scoped>
.card-footer,
.card-header {
  padding: 5px 12px !important;
}
</style>

<style>
/*Le changement de couleur pour le dropdown de bootstrap n'est pas pris en charge avec SCOPED */
#dropdown-left__BV_toggle_,
#dropdown-left__BV_toggle_::after {
  background-color: #6993ff !important;
  color: #ffff;
}
</style>