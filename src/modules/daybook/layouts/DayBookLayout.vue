<template>
    <h1>daybook layout</h1>

    <NavBar/>

    <div class="row justify-content-md-center" v-if="isLoading">

        <div class="col-3 alert-info text-ccenter mt-5">
            Loading...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
 
    <div class="d-flex" v-else>
        <div class="col-4">
            <EntryList/>
        </div>

        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'


export default {
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList'))
    },
    methods: {
        ...mapActions( 'journal', ['loadEntries'] )
    },
    created(){
        this.loadEntries()
    },
    computed:{
        ...mapState('journal', ['isLoading'])
    }
}
</script>