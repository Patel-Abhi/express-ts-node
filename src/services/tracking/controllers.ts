import { Request, Response } from 'express';

import SQS, { queueUrl } from '../../setup/aws';
import { iciSchema } from '../../validator/validation-schema';

export const getTrackingData = async (req: Request, res: Response ) => {
  // Todo read tracking data from database
	res.send( {
		ok: true,
		data: {},
		message: 'get request success',
	});
}

export const saveTrackingData = async (req: Request, res: Response) => {
	const requestedData = req.body;

	const { error } = iciSchema.validate(requestedData);
	// will use the respective schema based on requestedData.business_unit e.g. iciSchema, armsSchema, FnDSchema

	if (error && Object.keys(error.details).length > 0) {
		res.status(422).json({
			ok: false,
			data: {},
			error: error.details[0].message,
			message: 'Data validation error'
		});
	} else {

		// TODO 1: Implementation to save the body content to database
		// TODO 2: map actual request data to be sent to SQS queue
	
		/* Post test data to SQS queue */
		const orderData = {
			'userEmail': req.body['userEmail'],
			'userName': req.body['userName'],
			'userLocationLat': req.body['userLocationLat'],
			'userLocationLong': req.body['userLocationLat']
	}

		const sqsOrderData = {
			MessageAttributes: {
				"userEmail": {
					DataType: "String",
					StringValue: orderData.userEmail
				},
				"userName": {
					DataType: "String",
					StringValue: orderData.userName
				},
				"userLocationLat": {
					DataType: "String",
					StringValue: orderData.userLocationLat
				},
				"userLocationLong": {
					DataType: "String",
					StringValue: orderData.userLocationLong
				}
			},
			MessageBody: JSON.stringify(orderData),
			QueueUrl: queueUrl
		};

		// Send the order data to the SQS queue
		const sendSqsMessage = await SQS.sendMessage(sqsOrderData).promise();

		if (!sendSqsMessage.MessageId) {
			res.status(200).send({
				ok: false,
				data: {
					sentMessageId: sendSqsMessage.MessageId,
				}
			})
		}
		res.send( {
			ok: true,
			data: {
				sentMessageId: sendSqsMessage.MessageId,
			}
		});
	}
}
