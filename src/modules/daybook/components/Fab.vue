<template>
    <button class="btn btn-primary">
        <i class="fa fa-2x"
        :class="icon"></i>
    </button>
</template>

<script>
export default {
    props:{
        icon:{
            default: 'fa-plus',
            type: String
        }
    }
}
</script>