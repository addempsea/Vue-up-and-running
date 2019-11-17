<template>
    <div>
        <h1>Chapter 3</h1>
        <div>
            <p class="chp">This backgroud is {{color}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chp3',
    props: {
        color: {
            type: String,
            required: true
        }
    }
}
</script>


<style scoped>
    .chp {
        background-color: red;
        color: blue;
    }
</style>