const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const companyTable = process.env.COMPANY_TABLE

"use strict";

module.exports.updateCompany = async (event) => {
    console.log(event, event.params)
    const {id} = event.params 
    // await db
    //     .getItem({
    //         TableName: companyTable,
    //         Key: {
    //         id: id,
    //         },
    //     })
    //     .promise()
    
        return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
        },
        body: JSON.stringify(id)
    }
  }
