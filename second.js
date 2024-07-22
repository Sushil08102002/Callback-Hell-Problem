// //this is a way of creating promises
// //we have two things in promises called resolve and rejected
// let promise=new Promise((resolve,reject)=>{
//     console.log("hello world")
//     resolve("success")
// })

// //In general frontend programming we cannot return or create promised the api return the promises

// //now from promises the concept of promise chain get arises

// const getData=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("the promise get resolved");
//         resolve("success")
//     })
//     }


// let pr=getData();
// pr.then((res)=>{
//     console.log("promise fulfilled successfully",res)
// })


const getData=(dataId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId)
            resolve("success")
        },3000);
    })
}
getData(1).then((res)=>{
    return getData(2)}).then((res)=>{
        return getData(3)
    }).then((res)=>{
        return getData(4)
    })