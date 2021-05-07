<template>
    <div>
        <b-row class="containerMessageImportant">
            <MessageImportant />
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
                        <Chat />
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
import MessageImportant from '../content/components/MessageImportant'
import Chat from '../content/components/Chat'
export default {
    name: "PageTache",
    components: {
        TacheStat,
        TacheStatDeux,
        TachesFeed,
        MessageImportant,
        Chat,
  }
}
</script>

<style>
.containerMessageImportant{
    height: fit-content;
}
.containerInfo {
    height: 65vh;
    /* background-color: pink; */
}
.containerListeTuteurs {
    height: 10vh;
    /* background-color: blue; */
}
.leftSection {
    /* background-color: rgb(77, 212, 183); */
}
.rightSection {
    /* background-color: rgb(185, 84, 172); */
}
</style>