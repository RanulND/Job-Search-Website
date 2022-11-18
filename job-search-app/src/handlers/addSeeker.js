const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const seekerTable = process.env.SEEKER_TABLE

"use strict";

module.exports.addSeeker = async (event) => {
    const newSeeker = {
      id: JSON.parse(event.body).id,
      username: JSON.parse(event.body).username,   
      firstName: JSON.parse(event.body).firstName,
      lastName: JSON.parse(event.body).lastName,
      confirmed: JSON.parse(event.body).confirmed,
      isSeeker: JSON.parse(event.body).isSeeker
    }
  
    await db
      .put({
        TableName: seekerTable,
        Item: newSeeker,
      })
      .promise()
  
    return { 
      statusCode: 200, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
      },
      body: JSON.stringify(newSeeker) 
    }
  }