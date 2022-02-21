<template>
    <div class="d-flex justify-content-center">
        <h2 class="align-self-center">No hay nada seleccionado</h2>
    </div>
    <Fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab'))
    }
}
</script>

<style lang="sass" scoped>

</style>