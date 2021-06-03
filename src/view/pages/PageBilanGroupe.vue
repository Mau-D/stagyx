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
            <b-col>
                <CarteTuteurs />
            </b-col>
            <b-col>
                <CarteTuteurs />
            </b-col>
            <b-col>
                <CarteTuteurs />
            </b-col>
            <b-col>
                <CarteTuteurs />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import TacheStat from '../content/components/TacheStat'
import TacheStatDeux from '../content/components/TacheStatDeux'
import TachesFeed from '../content/components/TachesFeed'
import MessageImportant from '../content/components/MessageImportant'
import CarteTuteurs from '../content/components/CarteTuteurs'
import Chat from '../content/components/Chat'

export default {
    name: "PageBilanGroupe",
    components: {
        TacheStat,
        TacheStatDeux,
        TachesFeed,
        MessageImportant,
        CarteTuteurs,
        Chat,
    },
    data(){
        return{
            results: this.resultsGroup,
        }
    },
   
   
}
</script>

<style>
.containerMessageImportant{
    height: fit-content;
}
.containerListeTuteurs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}
</style>