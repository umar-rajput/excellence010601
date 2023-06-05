<template>
    <div class="profile">
        <h1>{{ profile }}'s Profile...</h1>
        <button @click="$router.push('/')">Go Back</button>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name:`Profile`,
    data(){
        return{
            profile:'',
        }
    },
    mounted: function(){
        const route = useRoute();
        console.log("route ",route.params.name);
        this.profile= route.params.name;
    }
}
</script>

<style scoped>
h1{
    color:red
}
</style>
