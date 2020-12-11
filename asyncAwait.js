const { rejects } = require('assert');

const makeRequest = (api)=>{
    return new Promise((resolve, reject)=>{
        if(api ==  'google')
            resolve(api+" response");
        else
            reject("We can only take to google")
    })
};
const processResponse = new Promise((resolve, reject)=>{
    resolve("Process on reponse, Extra information added!!");
})
async function callAllService(){
    try{
        const response  = await makeRequest('google');
        console.log("responce recieved", response);
        const processedResponce  = await processResponse;
        console.log(processedResponce);
    } catch(err){
        console.log(err);
    }
}
callAllService();
// makeRequest('Facebook').then((msg)=>{
//     console.log(msg);
//     return processResponse
// }).then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })