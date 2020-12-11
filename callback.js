const userLeft = false;
const userWatchingCatmeme = true;

const watchTutorialCallback = (callback, errorCallBack) => {
    if(userLeft){
        errorCallBack({
            name:"user left",
            message: ";)"
        })
    }else if(userWatchingCatmeme){
        errorCallBack({
            name: 'User watching cat meme',
            message: "web dev simplified < cat"
        })
    }else{
        callback("Thumb up");
    }
}
watchTutorialCallback((message)=>{
    console.log(message);
}, (error)=>{
    console.log(error.name +"  " + error.message);
})