const express = require("express")

const app = express()
const bodyParser = require('body-parser');

const port = 4000

let todo = []

app.use(express.static("todos"))

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/process-form', (req, res) => {
    const userPassword = req.body.user_password;
    const userEmail = req.body.user_email;

    const existingUser = todo.find(user => user.email === userEmail);

    if (existingUser && existingUser.password === userPassword) {
        res.send('Welcome, existing user!');
    
    } else {
    todo.push({
        email : userEmail,
        password : userPassword
    })
    console.log(todo)
    console.log('Received form submission:', userEmail, userPassword);

    // Send a response (you can redirect or render a new page)
    res.send('Form submitted successfully!');
}
});

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})