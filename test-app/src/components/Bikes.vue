<template>
    <div class="bikes">

        <div>
            <h3>Bikes Details</h3>
            <form @submit.prevent="onSubmit">
                <input type="text" v-model="name" placeholder="Enter Bike Name....">
                <input type="text" v-model="price" placeholder="Enter Bike Price....">
                <input type="submit" value="Submit">
            </form>
            <ul>
                <li v-for="(bike,index) in allBikes" v-bind:key="index">
                    {{ bike.name }} | {{ bike.price }}
                </li>
            </ul>

        </div>

    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {

    name:`Bikes`,
    data() {
        return{
            name:"",
            price:"",
        }
    },
    computed:mapGetters(['allBikes']),
    methods:{
        ...mapActions(['getBikes','addBikes']),
        onSubmit(){
            this.addBikes({
                name:this.name,
                price:this.price,
            });
        }

    },
    created(){
        this.getBikes();
    }
}
</script>

<style scoped>
li{
    list-style-type: none;
}
</style>