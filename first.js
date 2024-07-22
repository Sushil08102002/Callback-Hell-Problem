// callBack hell problem
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData()}
    },2000);
}


//This is case in which all values print at the same time. now we give nested callbacks
// getData(1);
// getData(2);
// getData(3);

//now here we use new function

//THis is the nested callBacks and it is very difficult to understand and work with
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
})