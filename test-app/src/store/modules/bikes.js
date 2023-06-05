import axios from "axios";

const state={
    bikes:[],
};

const getters={
    allBikes: state=>state.bikes,
};

const actions={
  async getBikes({commit}){
    let res=await axios.get("http://localhost:3000/bikes");
    console.log(res.data);
    commit("setBikes",res.data);
  },

  async addBikes({commit},bike){
    let res=await axios.post("http://localhost:3000/bikes",bike);
    console.log(res.data);
    commit("addNewBikes",res.data)
  },

  async deleteBike({commit},id){
    await axios.delete(`http://localhost:3000/bikes/${id}`);
    commit("removeBike",id);
  }
};

const mutations={
    setBikes:(state,bikes)=>{state.bikes=bikes},
    addNewBikes:(state,bike)=>{state.bikes.push(bike)},
    removeBike:(state,id)=>{state.bikes.filter(bike=>bike.id!==id)}
};

export default {
    state,
    getters,
    actions,
    mutations
}