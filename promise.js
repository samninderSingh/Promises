const userLeft = false;
const userWatchingCatmeme = true;

const watchTutorialPromise = () => {
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name:"user left",
                message: ";)"
            })
        }else if(userWatchingCatmeme){
            reject({
                name: 'User watching cat meme',
                message: "web dev simplified < cat"
            })
        }else{
            resolve("Thumb up");
        }
    });
    
}
watchTutorialPromise().then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error.name +"  " + error.message);
})