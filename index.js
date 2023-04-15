// import the packages which installed before
/*const express = require('express') */

//another way
import express from 'express' //need to add type to package.json
import { engine } from 'express-handlebars'

const app = express() //taking object from express
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')

const students = [ 
    {
        id: 1,
        name: "Nada",
        city: "Mahallah"
    },
    {
        id: 2,
        name: "Alaa",
        city: "Tanta"
    },
    {
        id: 3,
        name: "Yousef",
        city: "Tanta"
    }
] 

const studentFunction = (request, response) => {
    response.render('students', { layout: false, students })
    /*let output = '<ul>'
    for(let i=0; i<students.length; i++){
        const student = students[i]
        output += 
            '<li><a href="/students/' +
            student.id +
            '">' +
            student.name +
            '</a></li>'
    }
    output += '</ul>'
    response.send(output)*/
}
app.get('/students', studentFunction) //make route student


app.get("/students/:id", (req, res) => {
    const id = req.params.id
    const student = students.find((item) => {
        return item.id == id
    })

    res.render('student', { layout: false, student: student })

    // res.send('<h1>' + student.id + '</h1>' + '<br>' + student.name + '<br>' + student.city)
})
/*app.get('/users', (req, res) => {
    res.send("users")
})*/

app.listen(5000) //add num. of port
