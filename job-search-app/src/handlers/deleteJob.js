const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const JobTable = process.env.JOB_TABLE

"use strict";

module.exports.deleteJob = async (event) => {
    const id = event.pathParameters.id
    await db
      .delete({
        TableName: JobTable,
        Key: {
          id: id,
        },
      })
      .promise()
  
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE',
      }
    }
  }