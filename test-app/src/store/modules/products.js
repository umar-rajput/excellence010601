import axios from "axios";

const state={
    products:[
        {
            id:1,
            name:"soap",
            price:100
        },
        {
            id:2,
            name:"surf",
            price:300
        },
    ],
    rows:[],
    cars:[],
};
const getters ={
    allProducts : state=>state.products,
    allRows : state=>state.rows,
    allCars: state=>state.cars,
};
const actions={
    async getRows({commit}){
        let res=await axios.get("https://reqres.in/api/users?page=1");
        console.log(res.data.data);
        commit("setRows",res.data.data);
    },
    async getCars({commit}){
        let res=await axios.get("http://localhost:3000/cars");
        console.log(res.data);
        commit("setCars",res.data);
    },
    async addCars({commit},car){
        const res=await axios.post("http://localhost:3000/cars",car);
        console.log(res.data);
        commit("newCar",res.data);
    }

}; 
const mutations={
    setRows:(state,rows)=>(state.rows=rows),
    setCars:(state,cars)=>(state.cars=cars),
    newCar:(state,car)=>(state.cars.push(car)),
};

export default{
    state,
    getters,
    actions,
    mutations,
}