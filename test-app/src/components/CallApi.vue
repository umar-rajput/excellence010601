<template>
    <div class="call-api">

        <h1>Api Calling.... </h1>
        <p v-for="(item,index) in list" v-bind:key="index">
            {{ item.id }} 
            {{ item.first_name }}
            {{ item.last_name }}
            {{ item.email }}
        </p>
        <table>
            <tr>
                <th v-for="(column,index) in columns" v-bind:key="index">{{ column }}</th>
            </tr>
            <tr v-for="(row,index) in rows" v-bind:key="index">
                <td>{{ row.id }}</td>
                <td>{{ row.first_name }}</td>
                <td>{{ row.last_name }}</td>
                <td>{{ row.email }}</td>
            </tr>
        </table>

        <div class="card">
            <div class="card-main" v-for="(item,index) in list" v-bind:key="index">
                <div class="image">
                    <img :src="item.avatar" alt="">
                </div>
                <div class="name">
                    <p>{{ item.first_name }} {{ item.last_name }}</p>
                </div>
                <!-- <div class="email">
                    <p>{{ item.email }}</p>
                </div> -->
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'CallApi',
    data() {
        return{
            list:[],
            columns:["Id","First Name","Last Name","Email"],
            rows:[],
        }
    },
    async mounted(){
        let res=await axios.get("https://reqres.in/api/users?page=1");
        console.log(res.data.data);
        this.list=res.data.data;
        this.rows=res.data.data;
    }
}
</script>

<style scoped>

table{
    width: 100%;
}

table,tr,th,td{
    border: 1px solid #000;
    border-collapse: collapse;
    padding: 5px;
}
.card{
    margin: 50px 30px;
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
}
.card-main{
    height: 250px;
    width: 200px;
    border: 3px solid #755139;
    background: #f3ecd7;
    border-radius: 5px;
    box-shadow: 0px 0px 30px 10px #f3ecd7;
}

.image img{
    border-radius: 3px;
    border: 1px solid #755139;
    margin: 10px 10px;
    height: 180px;
}
.name p{
    border: 1px solid #755139;
    color: #f3ecd7;
    background: #755139;
    margin: 0px 10px;
    border-radius: 10px;
    padding: 6px;
}

</style>