<!--media/svg/icons/Communication/Group-chat.svg-->
<template>
  <div class="card card-custom card-stretch gutter-b p-4">
    <div class="pl-0 pt-8">
      <div class="align-items-center mb-5">
        <div class="d-flex symbol symbol-50 symbol-light mr-4 mb-5">
          <div>
            <span class="symbol-label">
              <img
                src="media/svg/avatars/001-boy.svg"
                class="h-75 align-self-end"
                alt=""
              />
            </span>
          </div>
          <div class="ml-2" align-v="center">
            <a
              class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
              >Brad Simmons</a
            >
            <span class="text-muted font-weight-bold d-block">
              Hier à 9:06
            </span>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            fuga ut ipsa perspiciatis pariatur sit repellat quaerat excepturi
            culpa.
          </p>
        </div>
      </div>
    </div>
    <div class="mb-5">
      <span class="symbol  symbol-50 symbol-light-primary mr-2">
        <span class="symbol-label">
          <span class="svg-icon svg-icon-xl svg-icon-primary p-5 d-flex">
            <!--begin::Svg Icon | path:assets/media/svg/icons/Shopping/Cart3.svg-->
            <inline-svg src="media/svg/icons/Communication/Group-chat.svg" />
            <!--end::Svg Icon-->
            <p class="pl-3">24</p>
          </span>
        </span>
      </span>
    </div>
    <!-- Séction avec les réponses -->
    <div>
      <b-row align-v="center" class="mb-5">
        <b-col cols="1">
          <div class="d-flex symbol symbol-50 symbol-light mr-4 mb-5">
            <div v-align="center">
              <span class="symbol-label">
                <img
                  src="media/svg/avatars/002-girl.svg"
                  class="h-75 align-self-end"
                  alt=""
                />
              </span>
            </div>
          </div>
        </b-col>
        <b-col cols="11" class="pl-5 pb-0">
          <b-row d-flex flex-row>
            <b-col>
              <a
                class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
              >
                Brad Simmons
              </a>
            </b-col>
            <b-col class="text-left">
              <span class="text-muted font-weight-bold d-block">
                Hier à 9:06
              </span>
            </b-col>
            <b-col class="text-right">
              <span class="text-muted font-weight-bold d-block" href="">
                Reply
              </span>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="pt-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                quos eaque aspernatur, quo perferendis doloribus assumenda
                architecto culpa dolores exercitationem!
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-v="center" class="mb-5">
        <b-col cols="1">
          <div class="d-flex symbol symbol-50 symbol-light mr-4 mb-5">
            <div v-align="center">
              <span class="symbol-label">
                <img
                  src="media/svg/avatars/004-boy-1.svg"
                  class="h-75 align-self-end"
                  alt=""
                />
              </span>
            </div>
          </div>
        </b-col>
        <b-col cols="11" class="pl-5 pb-0">
          <b-row d-flex flex-row>
            <b-col>
              <a
                class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
              >
                Brad Simmons
              </a>
            </b-col>
            <b-col class="text-left">
              <span class="text-muted font-weight-bold d-block">
                Hier à 9:06
              </span>
            </b-col>
            <b-col class="text-right">
              <span class="text-muted font-weight-bold d-block" href="">
                Reply
              </span>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="pt-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                quos eaque aspernatur, quo perferendis doloribus assumenda
                architecto culpa dolores exercitationem!
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <!-- Input pour répondre -->
    <div>
      <b-row>
        <b-col class="mt-5">
          <b-form-input placeholder="Répondre"></b-form-input>
        </b-col>
      </b-row>
    </div>
    <!-- Le btn pour envoyer -->
    <div>
        <b-row>
            <b-col class="text-right mt-5">
                <div class="my-2">
                    <v-btn color="primary" dark>Envoyer</v-btn>
                </div>
            </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
};
</script>

<style scoped></style>>
