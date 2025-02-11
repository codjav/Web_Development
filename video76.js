async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
async function main() {

    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load Data")
    let data = await getdata()
    data.then((v) => {

        console.log(data)

        console.log("Process data")
        console.log("Task 2")
    })

    console.log(data)
    console.log("Process data")
    console.log("Task 2")
}

console.log(main())

async function setdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
}
async function mann() {
    console.log("loading data")
    console.log("go somewhere")
    console.log("load data")
    let data = await setdata();
    console.log("data")
}

console.log(mann())

//Code for post request
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST", headers: "applications/json",
        body: JSON.stringify(data)
    })
    return response.json();
}
// postData("https://example.com/answer",{answer:42}.then((data)=>{
//     console.log(data)
// }));
