<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="">15</span>
            <span class="">Julio</span>
            <span class="">2021, jueves</span>
        </div>

        <div>
            <button  class="btn btn-danger mx-2">Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button  class="btn btn-primary mx-2">Subir Foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy?"></textarea>
    </div>

    <Fab/>

    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="entry-picture" class="img-tumbail">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{ 
        Fab: defineAsyncComponent(() => import('../components/Fab'))
    }
}
</script>

<style lang="sass" scoped>

</style>