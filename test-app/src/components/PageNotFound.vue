<template>
    <div class="home">
        <h1>404</h1> 
        <p>Page Not Found</p>
        <button @click="$router.push('/')">Go Back</button>
    </div>
</template>

<script>

export default {
    name:`PageNotFound`
}
</script>

<style scoped>
h1,p{
    color:red
}
</style>
