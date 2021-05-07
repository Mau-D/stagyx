<template>
  <div class="carte m-5 pt-4 p-2 pb-4">
      <b-row align-v="center">
        <b-col class="logo" cols="2">
          <v-img
            height="175"
            width="175"
            src="https://image.freepik.com/free-vector/attention-attraction-important-announcement-warning-information-sharing-latest-news-loudspeaker-megaphone-bullhorn-with-exclamation-mark_335657-2387.jpg"
          ></v-img>
        </b-col>
        <b-col class="text p-2" cols="10">
          <h1>Text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            labore animi natus totam. Corrupti, numquam? Quibusdam quia
            temporibus ut perspiciatis quaerat, rerum ad sed vero, cum repellat
            cumque, cupiditate consequuntur.
          </p>
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  name: "MessageImportant",
};
</script>

<style scoped>

.carte {
    background-color: white;
    border-radius: 5px;
}
</style>
