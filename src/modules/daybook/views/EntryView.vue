<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="">{{ day }}</span>
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
        <textarea placeholder="Que sucedio hoy?" v-model="entry.text"></textarea>
    </div>

    <Fab icon="fa-save"/>

    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="entry-picture" class="img-tumbail">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

import { mapGetters } from 'vuex'
import getDayMonthYear from '../helpers/getDateMonthYear'

export default {

    props:{
        id: {
            type: String,
            required: true
        }
    },
    components:{ 
        Fab: defineAsyncComponent(() => import('../components/Fab'))
    },
    methods:{
        loadEntry() {   
            const entry = this.getEntryById( this.id )
            console.log(entry)

            if(!entry) this.$router.push({ name: 'no-entry'})

            this.entry = entry
        }
    },
    created() {
        // console.log(this.id)
        this.loadEntry()
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        },
    },
    data() {
        return {
            entry: null
        }
    }

}
</script>

<style lang="sass" scoped>

</style>