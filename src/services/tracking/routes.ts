import { getTrackingData, saveTrackingData } from './controllers'

export default [
	{
		path: '/tracking',
		method: 'get',
		handler: [getTrackingData],
	},
	{
		path: '/tracking',
		method: 'post',
		handler: [saveTrackingData],
	},
]
