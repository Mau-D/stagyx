<template>
    <div>
        <b-row class="containerMessageImportant">
            <b-col cols="12">
                <h1>Message important</h1>
            </b-col>
        </b-row>
        <b-row class="containerInfo">
            <b-col cols="8" class="leftSection">
                <b-row class="graphiqueTache">
                    <b-col>
                        <TacheStat />
                    </b-col>
                    <b-col>
                        <TacheStatDeux />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h1>Test</h1>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="4" class="rightSection">
                <TachesFeed />
            </b-col>
        </b-row>
        <b-row class="containerListeTuteurs">

        </b-row>
    </div>
</template>

<script>
import TacheStat from '../content/components/TacheStat'
import TacheStatDeux from '../content/components/TacheStatDeux'
import TachesFeed from '../content/components/TachesFeed'
export default {
    name: "PageTache",
    components: {
        TacheStat,
        TacheStatDeux,
        TachesFeed,
  }
}
</script>

<style>
.containerMessageImportant{
    height: 10vh;
    background-color: green;
}
.containerInfo {
    height: 65vh;
    background-color: pink;
}
.containerListeTuteurs {
    height: 10vh;
    background-color: blue;
}
.leftSection {
    background-color: rgb(77, 212, 183);
}
.rightSection {
    background-color: rgb(185, 84, 172);
}
</style>