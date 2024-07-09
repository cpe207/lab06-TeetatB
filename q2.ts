//660610764 ธีธัช บุญธรรม
// const axios = require("axios");
import axios from "axios";
import { cp } from "fs";
import { title } from "process";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const name = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`);
    const tt = res.data.title;
    const cp = res.data.completed;

    return{
      owner:name.data.name,
      title:tt,
      completed:cp
    } 
  } catch(error){
    return "INVALID TODO ID";
  }
  

};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

