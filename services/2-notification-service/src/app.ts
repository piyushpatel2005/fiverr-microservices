import { Logger } from 'winston';
import express, { Express } from 'express';
import { winstonLogger } from '@piyushpatel2005/jobber-shared';
import { config } from '@notifications/config';
import { start } from '@notifications/server';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationElasticSearchServer', 'debug');

function initialize(): void {
    const app: Express = express();
    start(app);
    log.info('Notification service initialized');
}

initialize();