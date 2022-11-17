const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const JobTable = process.env.JOB_TABLE

"use strict";

module.exports.addJobs = async (event) => {
    const newJob = {
      id: JSON.parse(event.body).id,   
      title: JSON.parse(event.body).title,
      companyId: JSON.parse(event.body).companyId
    }
  
    await db
      .put({
        TableName: JobTable,
        Item: newJob,
      })
      .promise()
  
    return { 
      statusCode: 200, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
      },
      body: JSON.stringify(newJob) 
    }
  }

