const makeRequest = (api)=>{
    return new Promise((resolve, reject)=>{
        resolve(api+" response")
    })
};
const processResponse = new Promise((resolve, reject)=>{
    resolve("Process on reponse, Extra information added!!");
})
makeRequest('Facebook').then((msg)=>{
    console.log(msg);
    return processResponse
}).then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})