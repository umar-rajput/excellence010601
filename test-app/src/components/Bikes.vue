<template>
    <div class="bikes">

        <div>
            <div class="form">
                <div class="form-main">
                    <h3>Bikes Details</h3>
                    <form @submit.prevent="onSubmit">
                        <input type="text" v-model="name" placeholder="Enter Bike Name...."><br>
                        <input type="text" v-model="price" placeholder="Enter Bike Price...."><br>
                        <input type="submit" value="Submit">
                    </form>
                </div>
            </div>
            <!-- <ul>
                <li v-for="(bike,index) in allBikes" v-bind:key="index">
                    {{ bike.name }} | {{ bike.price }}
                </li>
            </ul> -->
            <table>
                <thead>
                    <tr>
                        <th v-for="(column,index) in columns" v-bind:key="index">{{ column }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bike,index) in allBikes" v-bind:key="index"> 
                        <td>{{ bike.id }}</td>
                        <td>{{ bike.name }}</td>
                        <td>{{ bike.price }}$</td>
                    </tr>
                </tbody>
            </table>

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
            columns:["Id","Name","Price"],
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

table{
    border-collapse: collapse;
    width: 80%;
    margin: 50px auto;
    /* background: #FBEAEB; */
}

table,td,th,tr{
    border: 1px solid #000;
    padding: 10px;
}

.form{
    display: flex;
    justify-content: center;
}
.form-main{
    border: 1px solid #000;
    padding: 10px 20px 20px 20px;
    border-radius: 5px;
    /* background: #FBEAEB; */
}
input{
    margin-bottom: 10px;
    padding: 5px;
}
</style>