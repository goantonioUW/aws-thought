// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({
  region: 'us-west-1',
  endpoint: "http://localhost:3000"
});

// Create the DynamoDB service object
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
  TableName : "Thoughts",
  KeySchema: [       
    { AttributeName: "username", KeyType: "HASH"},  // Partition key
    { AttributeName: "createdAt", KeyType: "RANGE" }  // Sort key
  ],
  AttributeDefinitions: [       
    { AttributeName: "username", AttributeType: "S" }, //S is for string
    { AttributeName: "createdAt", AttributeType: "N" } // N is for number
  ],
  ProvisionedThroughput: {       
    ReadCapacityUnits: 10, 
    WriteCapacityUnits: 10
  }
};

// Call DynamoDB to create the table
dynamodb.createTable(params, (err, data) => {
  if (err) {
      console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
      console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
  }
});