const project1 = new Promise((resolve, reject)=>{
    resolve("project 1 completed");
})
const project2 = new Promise((resolve, reject)=>{
    resolve("project 2 completed");
})
const project3 = new Promise((resolve, reject)=>{
    resolve("project 3 completed");
})
Promise.all([project1, project2, project3]).then((message)=>{
    console.log("Message:", message);
})

// Output:
// Message: [ 'project 1 completed',
//   'project 2 completed',
//   'project 3 completed' ]