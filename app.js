console.log("Running file:", __filename); 
const PORT = 5000;
const express = require("express");

// Create an Express application
const app = express();

//middleware to parse JSON request bodies
app.use(express.json());

// Middleware
/*app.use((req, res, next) => {
    console.log("Middleware Executed");
    next();
});*/


// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to My First MERN Application");
});

//Stduent Route
app.get("/student", (req, res) => {
    res.send("Welcome to Student get Route");
});

//student post Route
app.post("/student", (req, res) => {
    res.send("Student Data Posted Successfully");
});

// Teacher Route
app.get("/teacher", (req, res) => { 
    res.send("Welcome to Teacher Route");
});

//about Route
app.get("/about",(req,res)=>{
    res.send("About Student Management System");
});


//search Route
app.get("/search",(req,res)=>{ 
    res.send(`Searching for Student ${req.query.name}`);
});

//student Route with parameter
app.get("/student/:id",(req,res)=>{
    res.send(`Student ID is ${req.params.id}`);
});

//student post Route with parameter
app.post("/student/:id",(req,res)=>{
    res.send(`Student ID is ${req.params.id} and Data Posted Successfully
        name: ${req.body.name} q
        age : ${req.body.age}`);
});

//student put with route parameter
app.put("/student/:id",(req,res)=>{
    res.send(`Student ID is ${req.params.id} and Data Updated Successfully
        name: ${req.body.name} 
        age : ${req.body.age}`);
});

//student delete with route parameter
app.delete("/student/:id",(req,res)=>{
    res.send(`Student ID is ${req.params.id} and Data Deleted Successfully`);
});

// contact Route
app.get("/contact",(req,res)=>{
    res.send("Contact Administrator");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});