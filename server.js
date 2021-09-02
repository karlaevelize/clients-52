//import express
const express = require("express")

//impot the file
const data = require("./data.json")
// console.log("data", data)

//assign express
const app = express()

//define a port
const PORT = 4001

//say hello
app.get("/", (request, response) => {
  response.send("Hello")
})

//send an array of students and console.log the method
app.get("/students", (request, response) => {
  response.send(data.students)
  console.log(request.method)
})

//send an array of professors and console.log the path
app.get("/professors", (request, response) => {
  response.send(data.professors)
  console.log(request.path)
})

//get student by id
app.get("/student/:id", (request, response) => {
  const id = parseInt(request.params.id)
  //const { id } = request.params
  console.log(typeof(id))
  const student = data.students.find(student => student.id === id)
  console.log(student)
  response.send(student)
})

//get students by house
app.get("/house/:name", (request, response) => {
  const house = request.params.name

  const studentByHouse = data.students.filter(student => student.house.toLowerCase() === house.toLowerCase())
  response.send(studentByHouse)
})

//start listening
app.listen(PORT, () => console.log(`Listening on ${PORT}`))