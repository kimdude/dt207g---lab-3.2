const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
require("dotenv").config();

//Connecting to database
mongoose.connect(process.env.URI).then(() => {
    console.log("Connected to MongoDB...");
}).catch((error) => {
    console.log("Error connecting: " + error);
})

//Experience schema
const expSchema = new mongoose.Schema({
    employer: { 
        type: String, 
        required: [true, "Include name of employer."]
    },
    jobtitle: { 
        type: String, 
        required: [true, "Include jobtitle."]
    },
    location: { 
        type: String, 
        required: [true, "Include location."]
    },
    startdate: { 
        type: Date, 
        required: [true, "Include start date of employment."]
    },
    enddate: { 
        type: Date, 
        required: [true, "Include end date of employment."]
    }
});

//Including Schema in database
const WorkExp = mongoose.model("Workexperience", expSchema);

//Routes
//Testing server 
app.get("/health", (req, res) =>  {
    res.status(200).send('Server is healthy');
});

app.get("/experience", async(req, res) => {
    try {
        let result = await WorkExp.find({});
        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
});

app.get("/experience/:id", async(req, res) => {
    try {
        const result = await WorkExp.findById(req.params.id).exec();
        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
});

app.post("/experience", async(req, res) => {
    try {
        let result = await WorkExp.create(req.body);
        return res.json(result);
    } catch(error) {
        return res.status(400).json(error);
    }
});

app.put("/experience/:id", async(req, res) => {
    try {
        //Updating document
        let doc = await WorkExp.findById(req.params.id).exec();
        doc.employer = req.body.employer;
        doc.jobtitle = req.body.jobtitle;
        doc.location = req.body.location;
        doc.startdate = req.body.startdate;
        doc.enddate = req.body.enddate;

        //Saving updates
        await doc.save();
        return res.json(doc);

    } catch(error) {
        return res.status(500).json(error);
    }
});

app.delete("/experience/:id", async(req, res) => {
    try {
        //Deleting chosen document
        let doc = await WorkExp.deleteOne({ "_id": req.params.id });
        return res.json(doc);
    } catch(error) {
        return res.status(500).json(error);
    }
});

//Starting server
app.listen(port, () => {
    console.log('Connected to server on port:' + port);
});