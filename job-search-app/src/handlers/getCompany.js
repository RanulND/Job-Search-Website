const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const seekerTable = process.env.SEEKER_TABLE
const companyTable = process.env.COMPANY_TABLE

"use strict";

module.exports.getCompany = async (event) => {
    const id = event.pathParameters.id
    
    const company = await db.get({
        TableName: companyTable,
        Key: {
            id: id,
        },
    }).promise()

  return { 
    statusCode: 200,
    headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
		},
    body: JSON.stringify(company) 
  }
}