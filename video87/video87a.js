import fs from "fs/promises"

let a = await fs.readFile("javed.txt")

console.log(a.toString())

let b = await fs.writeFile("javed2.txt", "   this is amazing promise")

let c = await fs.appendFile("javed.txt", " what is this")

console.log(c)

