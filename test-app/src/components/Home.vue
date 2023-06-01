<template>
    <div class="home">
        <h1>Home Calling...</h1>
        <button @click="$router.push('/')">Go Back</button>
    </div>
</template>

<script>

export default {
    name:`Home`
}
</script>

<style scoped>
h1{
    color:red
}
</style>
