<template>
    <div class="entry-container mb-3 pointer p-2" 
    @click="$router.push({ name: 'entry', params: { id: 10 }})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span>Juli0</span>
            <span>2121</span>
        </div>

        <div class="entry-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe fugit cupiditate omnis non ipsa esse doloremque obcaecati eius quibusdam iusto ullam rerum tempore magnam, vitae, eligendi optio blanditiis modi.
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .entry-container{
        transition: 0.2 all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2 all ease-in;
        }

        .entry-description{
            font-size: 1rem;
        }
    }

    
</style>