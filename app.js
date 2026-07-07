console.log("Running file:", __filename); 
const PORT = 5000;
const express = require("express");

// Create an Express application
const app = express();

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to My First MERN Application");
});

//Stduent Route
app.get("/student", (req, res) => {
    res.send("Welcome to Student Route");
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

//contact Route
app.get("/contact",(req,res)=>{
    res.send("Contact Administrator");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});