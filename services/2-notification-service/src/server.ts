import { winstonLogger } from '@piyushpatel2005/jobber-shared';
import 'express-async-errors';
import { Logger } from 'winston';
import { config } from '@notifications/config';
import { Application } from 'express';
import http from 'http';
import { healthRoutes } from '@notifications/routes';
import { checkConnection } from '@notifications/elasticsearch';
import { createConnection } from '@notifications/queues/connection';
import { Channel } from 'amqplib';
import { consumeAuthEmailMessages, consumeOrderEmailMessages } from './queues/email.consumer';

const SERVER_PORT = 4001;
const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationServer', 'debug');

export function start(app: Application): void {
    startServer(app);
    app.use('', healthRoutes());
    startQueues();
    startElasticSearch();
}

async function startQueues(): Promise<void> {
    const emailChannel: Channel = await createConnection() as Channel;
    await consumeAuthEmailMessages(emailChannel);
    await consumeOrderEmailMessages(emailChannel);

    await emailChannel.assertExchange('jobber-email-notification', 'direct');
    await emailChannel.assertExchange('jobber-order-notification', 'direct');

    const message = JSON.stringify({ name: 'jobber', service: 'email notification service' });
    emailChannel.publish('jobber-email-notification', 'auth-email', Buffer.from(message));

    const message2 = JSON.stringify({ name: 'jobber', service: 'order notification service' });
    emailChannel.publish('jobber-order-notification', 'order-email', Buffer.from(message2));
}

function startElasticSearch(): void {
    checkConnection();
}

function startServer(app: Application): void {
    try {
        const httpServer: http.Server = new http.Server(app);
        log.info(`Worker with process id of ${process.pid} on notification server has started`);
        log.info(`Worker with process id of ${process.pid} on notification server has started`);
        httpServer.listen(SERVER_PORT, () => {
            log.info(`Notification server listening on port ${SERVER_PORT}`);
        });
    } catch (error) {
        log.log('error', 'NotificationService startServer() method:', error);
    }
}