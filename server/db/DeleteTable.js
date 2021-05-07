const AWS = require("aws-sdk");
const awsConfig = {
    region: "us-west-1",
    endpoint: "http://localhost:3000",
    accessKeyId: 'xxxx',
    secretAccessKey: 'xxxx'
};
AWS.config.update(awsConfig);

const dynamodb = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Thoughts"
};
dynamodb.deleteTable(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
    /*
    data = {
     TableDescription: {
      ItemCount: 0, 
      ProvisionedThroughput: {
       NumberOfDecreasesToday: 1, 
       ReadCapacityUnits: 5, 
       WriteCapacityUnits: 5
      }, 
      TableName: "Music", 
      TableSizeBytes: 0, 
      TableStatus: "DELETING"
     }
    }
    */
});