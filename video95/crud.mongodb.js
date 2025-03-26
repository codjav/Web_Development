// CRUD operations


use("CrudDB")
// console.log(db)


// CREATE


// db.createCollection("courses")
// db.courses.insertOne({
//     name: "Mohammad Javed Ali",
//     age: 20,
//     religion: "Islam",
//     work: "Web Developer", 
// })
// db.courses.insertMany(
//     [
//         {
//             "name": "Amit Sharma",
//             "age": 25,
//             "religion": "Hinduism",
//             "work": "Software Engineer"
//         },
//         {
//             "name": "Fatima Noor",
//             "age": 22,
//             "religion": "Islam",
//             "work": "UI/UX Designer"
//         },
//         {
//             "name": "John Doe",
//             "age": 30,
//             "religion": "Christianity",
//             "work": "Full Stack Developer"
//         },
//         {
//             "name": "Rahul Verma",
//             "age": 27,
//             "religion": "Hinduism",
//             "work": "Backend Developer"
//         },
//         {
//             "name": "Sophia Williams",
//             "age": 24,
//             "religion": "Christianity",
//             "work": "Frontend Developer"
//         },
//         {
//             "name": "Ayesha Khan",
//             "age": 26,
//             "religion": "Islam",
//             "work": "Data Scientist"
//         },
//         {
//             "name": "David Smith",
//             "age": 28,
//             "religion": "Christianity",
//             "work": "DevOps Engineer"
//         },
//         {
//             "name": "Vikram Singh",
//             "age": 29,
//             "religion": "Hinduism",
//             "work": "Cybersecurity Analyst"
//         },
//         {
//             "name": "Sara Ali",
//             "age": 23,
//             "religion": "Islam",
//             "work": "AI/ML Engineer"
//         }
//     ]
// )


// READ


// let a= db.courses.find({religion:"Islam"})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let b=db.courses.findOne({religion:"Islam"})
// console.log(b)


// UPDATE


// db.courses.updateOne({religion:"Hinduism"}, {$set:{religion:"Islam"}})


// DELETE

db.courses.deleteOne({religion:"Islam"})