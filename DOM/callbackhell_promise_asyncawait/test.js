// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     reject("Some error occured");
// });

// function getdata(data, nextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data: " + data);
//             if (nextdata) {
//                 nextdata();
//             }
//             resolve("Success");
//         }, 5000)
//     });
// }



// function getdata(data, getnextdata) {
//     setTimeout(()=>{
//         console.log(data);
//         if(getnextdata){
//             getnextdata();
//         }
//     }, 2000)
// }

// getdata(1, ()=>{
//     console.log("Getting data 2");
//     getdata(2, ()=>{
//         console.log("Getting data 3");
//         getdata(3);
//     });
// });


// const getpromise = () => {
//     return new Promise((resolve, reject)=>{
//         console.log("This is a promise");
//         // resolve("data send success");
//         reject("data send Error!");
//     });
// };

// let promise = getpromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("Promise was rejected", err);
// });

// function asyncfunction1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Return some data1");
//             resolve("Success1");
//         }, 4000);
//     });
// }

// function asyncfunction2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Return some data2");
//             resolve("Success2");
//         }, 4000);
//     });
// }

// console.log("Fetching data1");
// let p1=asyncfunction1();

// console.log("Fetching data2");
// let p2=asyncfunction2();

// p1.then((res)=>{    
//     console.log(res);
// });
// p2.then((res)=>{
//     console.log(res);
// })

// console.log("Fetching data 1");
// let p1=asyncfunction1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data 2");
//     let p2=asyncfunction2();
//     p2.then((res2)=>{
//         console.log(res2);
//     });
// });

// function getdata(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Sending data", data);
//             resolve("Success", data);
//         }, 2000);
//     });
// }

// getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2).then((res)=>{
//         console.log(res);
//     });
// });

// getdata(1).then((res)=>{
//     console.log(res);
//     return getdata(2);
// }).then((res)=>{
//     console.log(res);
//     return getdata(3);
// }).then((res)=>{
//     console.log(res);
// })

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getweatherdata(){
//     await api();
//     await api();
// }


function getdata(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Returning data", data);
        }, 2000);
    });
}

async function func(){
    await getdata(1);
    await getdata(2);
}

(async ()=>{
    console.log("Get data 1");
    await getdata(1);
    console.log("Get data 2");
    await getdata(2);
})();