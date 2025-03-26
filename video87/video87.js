const fs = require("fs")
// console.log(fs)

console.log("starting")

fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("javed.txt", "javed is a very good boy but little bit lazy",()=>{
    console.log("done")

    fs.readFile("javed.txt",(error,data)=>{
        console.log(error,data.toString())
    })
    
})


fs.appendFile("javed.txt"," Javed is a king", (e,d)=>{
    console.log(d)
})

console.log("ending")