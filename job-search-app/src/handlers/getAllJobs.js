const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const JobTable = process.env.JOB_TABLE

"use strict";

module.exports.getAllJobs = async (event) => {
  const jobs = await db
    .scan({
      TableName: JobTable,
    })
    .promise()

  return { 
    statusCode: 200,
    headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
		},
    body: JSON.stringify(jobs) 
  }
}