<template>
    <div class="entry-list-container">
        <div>
            <input type="text" placeholder="Buscar" v-model="term">
        </div>
    </div>

    <div class="entry-scrollable">
        <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'


export default {
    components:{
        Entry: defineAsyncComponent(() => import('./Entry'))
    },
    computed:{
        ...mapGetters('journal', ['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm( this.term )
        }
    },
    data(){
        return{
            term: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .entry-list-container{
        border-right: 1px solid red;
        // height: calc( 100vh - 56px );
    }

    .entry-scrollable{
        height: calc( 100vh - 115px);
        overflow: scroll;
    }
</style>