import http from 'http';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';

import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './services';
import swaggerDocument from './swagger.json';

const options = {
    swaggerOptions: {
        url: "/api-docs/swagger.json",
    },
}


const router = express();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/api-docs/swagger.json", (req, res) => res.json(swaggerDocument));
router.use('/api-docs', swaggerUI.serveFiles(swaggerDocument, options), swaggerUI.setup(null, options));

router.use(
	cors({
		credentials: true,
		origin: true,
	})
);

applyRoutes(routes, router);
applyMiddleware(middleware, router);


process.on('uncaughtException', (e) => {
	console.log(e)
	process.exit(1)
});

process.on('unhandledRejection', (e) => {
	console.log(e)
	process.exit(1)
});

const { PORT = 3000 } = process.env;

http.createServer(router).listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`)
});

