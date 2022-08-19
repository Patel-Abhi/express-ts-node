const AWS = require("aws-sdk");

// TODO: move secrets to environment config
AWS.config.update({
	credentials: {
		accessKeyId: process.env.ACCESS_KEY_ID,
		secretAccessKey: process.env.SECRET_ACCESS_KEY
	},  
  region: "us-east-1",
});

const accountId = process.env.ACCOUNT_ID;
const queueName = process.env.SQS_QUEUE_NAME;
export const queueUrl = `https://sqs.us-east-1.amazonaws.com/${accountId}/${queueName}`

const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

export default sqs;
