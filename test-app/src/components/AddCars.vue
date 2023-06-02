<template>
    <div class="add-cars">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="name" placeholder="Car Name..." class="inputField">
            <input type="text" v-model="price" placeholder="Car Price..." class="inputField">
            <input type="submit" value="submit" class="inputField btn">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'AddCars',
    data() {
        return{
            name:"",
            price:"",
        }
    },
    methods:{
        ...mapActions(['addCars']),
        onSubmit(){
            this.addCars({
                name:this.name,
                price:this.price
            });

        }
    }
}
</script>

<style scoped>

.inputField{
    margin-right: 15px;
    padding: 7px;
    border-radius: 5px;
}

.btn{
    background-color: antiquewhite;
}

</style>