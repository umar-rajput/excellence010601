<template>
    <div class="products">
        <h3>Data is coming from my array</h3>
        <ul>
            <li v-for="products in allProducts" :key="products.id">
                {{ products.id }} - {{ products.name }} - {{ products.price }} ₹
            </li>
        </ul>
        <br><br>
        <h3>Data is coming from API</h3>
        <table>
            <tr>
                <th v-for="(column,index) in columns" v-bind:key="index">{{ column }}</th>
            </tr>
            <tr v-for="(row,index) in allRows" v-bind:key="index">
                <td>{{ row.id }}</td>
                <td>{{ row.first_name }}</td>
                <td>{{ row.last_name }}</td>
                <td>{{ row.email }}</td>
                <td><img :src="row.avatar" alt=""></td>
            </tr>
        </table>
        <br><br>
        <h3>Data is coming from json-server</h3>
        <ul>
            <li v-for="(car,index) in allCars" v-bind:key="index">
                {{ car.name }} | {{ car.price }}$
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
// import AddCars from './AddCars.vue';

export default {
    name:`Products`,
    // components:{AddCars},
    data() {
        return{
            columns:["Id","First Name","Last Name","Email","Image"],
        }
    },
    // filters:{
    //     currency:function(value){
    //         return "$" + parseFloat(value).toFixed(2)
    //     }
    // },
    computed:mapGetters(['allProducts','allRows','allCars']),
    methods:{
        ...mapActions(['getRows','getCars',])
    },
    created(){
        this.getRows();
        this.getCars();
    }

}
</script>

<style scoped>

li{
    list-style-type: none;
}

table{
    width: 100%;
}

table,tr,th,td{
    border: 1px solid #000;
    border-collapse: collapse;
    padding: 5px;
}
</style>
