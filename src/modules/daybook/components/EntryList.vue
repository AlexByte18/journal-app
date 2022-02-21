<template>
    <div class="entry-list-container">
        <div>
            <input type="text" placeholder="Buscar">
        </div>
    </div>

    <div class="entry-scrollable">
        <Entry v-for="item in 100" :key="item"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {
    components:{
        Entry: defineAsyncComponent(() => import('./Entry'))
    }
}
</script>

<style lang="scss" scoped>
    .entry-list-container{
        border-right: 1px solid red;
        height: calc( 100vh - 56px );
    }

    .entry-scrollable{
        height: calc( 100vh - 115px);
        overflow: scroll;
    }
</style>