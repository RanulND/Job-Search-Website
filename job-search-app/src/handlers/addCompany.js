const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const companyTable = process.env.COMPANY_TABLE

"use strict";

module.exports.addCompany = async (event) => {
    const newCompany = {
      id: JSON.parse(event.body).id,
      username: JSON.parse(event.body).username,   
      companyName: JSON.parse(event.body).companyName,
      confirmed: JSON.parse(event.body).confirmed,
      isSeeker: JSON.parse(event.body).isSeeker
    }
  
    await db
      .put({
        TableName: companyTable,
        Item: newCompany,
      })
      .promise()
  
    return { 
      statusCode: 200, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
      },
      body: JSON.stringify(newCompany) 
    }
  }