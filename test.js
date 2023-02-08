// const jwt = require("jsonwebtoken")

// const myFunction = async() => {

//   const token = jwt.sign({id:"Abhay"},"this is name",{expiresIn:"1s"});
//   console.log({token});

//   const data = jwt.verify(token,"this is name")
//   console.log({data});

//   }  
  
//   myFunction()
  
  
  
  
  
  
  
  
  
  
  
  
  
  // require("./db/database");
  // const createTask = require("./model-user/task.js");

  // const findAndDeleteTask = async (id) =>{

  //  const deleteTask = await createTask.findByIdAndDelete(id);
  //  console.log(deleteTask);
  //  const count = createTask.countDocuments({"completed":"true"})
  //   return count
  // }

  // findAndDeleteTask("63dcf768b8873ab32fea0265").then((result)=>{
  //   console.log(result);
  // }).catch((e)=>{
  //   console.log(e);
  // })

//   const bcrypt = require('bcrypt');
  
  
//   const myFunction = async () => {
//     const password = "Abhay!123"
//     const hashedPassword = await bcrypt.hash(password,8);
//     const hashedissamePassword = await bcrypt.hash(password,8);

//     const isSame = await bcrypt.compare("Abhay!123",hashedissamePassword)

//     console.log(password,{hashedPassword},{hashedissamePassword},isSame);
//   }

// myFunction();


// function myFunction(arr) {
//   const arrays = arr;
//   const arr2 = [];
//  arr.forEach(element => arr2.push( element * 2));
//   // const maparr = arr2.map((x)=>x*2)
//   console.log(arr2);
//   // console.log(arr2);
//   // console.log(foreacharr);
//   // console.log(maparr);
// }

// myFunction([21,12,2,2,3,5,6])






  
//   createTask.findByIdAndRemove("63e07b75fbd3c79bdd70ff44").then((user)=>{
//       console.log(user,"removed");
//       return createTask.countDocuments({"_id":"63dcf59534f75aacbb2d50b6"})
//   }).then((result)=>{
//       console.log(result);
//   })




// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// add(5, 78)
//   .then((sum) => {
//     console.log(sum);
//     return add(sum ,45)
//   }).then((sum2)=>{})
//   .catch((e) => {
//     console.log(e);
//   })



