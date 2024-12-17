import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const client = new MongoClient(process.env.MONGO, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// Main async function
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Database is connected!");

        // Create database and collections
        const db = client.db("mernDreamer");
        const jobsCollection = db.collection("DreamerJobs");

        // Post a job
        app.post("/post-jobs", async (req, res) => {
            const body = req.body;
            body.createAt = new Date();
            const result = await jobsCollection.insertOne(body);

            if (result.insertedId) {
                return res.status(200).send(result);
            } else {
                return res.status(404).send({
                    message: "Cannot insert",
                    status: false,
                });
            }
        });


        // get all jobs on the basis of email



        // Get all jobs
        app.get("/all-jobs", async (req, res) => {
            const jobs = await jobsCollection.find({}).toArray();
            res.send(jobs);
        });

        app.get("/myJobs", async (req, res) => {
            const email = req.query.email; // Use query parameters to send email
            let jobs;
          
            if (email) {
              // If email is provided, filter by email
              jobs = await jobsCollection.find({ postedBy: email }).toArray();
            } else {
              // If no email is provided, fetch all jobs
              jobs = await jobsCollection.find({}).toArray();
            }
          
            res.send(jobs);
          });

        // Delete jobs

        app.delete('/job/:id',async (req,res) => {
                const id = req.params.id
                const filter = {_id:new ObjectId(id)}
                const result = await jobsCollection.deleteOne(filter)

                res.send(result)
        })
// singlejobs using id
        app.get('/all-jobs/:id',async (req,res) => {
            const id = req.params.id
            const jobs = await jobsCollection.findOne({
                _id: new ObjectId(id)
            })
            res.send(jobs)
        })

        // app.patch('/update-job/:id',async (req,res) => {
        //     const id = req.params.id
        //     const jobData = req.body

        //     const filter = {_id:new ObjectId(id)}
        //     const options = {upsert:true}
        //     const updateDoc = {
        //         $set:{
        //             ...jobData
        //         }
        //     }
        //     const result = await jobsCollection.updateOne(filter,updateDoc,options)
        //     res.send(result)
        // })

        // Check the connection with a ping
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}

// Call the run function to connect to the database
run();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Global error handler
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal server problem";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
