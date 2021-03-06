'use strict';

require('dotenv').load();

var AWS = require('aws-sdk');

var dynamodb = new AWS.DynamoDB({
  apiVersion: '2012-08-10',
  accessKeyId: process.env['DYNAMO_KEY'] || "AWS_KEY",
  secretAccessKey: process.env['DYNAMO_SECRET_KEY'] || "AWS_SECRET",
  region: process.env['AWS_REGION'] || "ap-northeast-1",
});

module.exports = {

  // Specify migration file path. Default is `./migrations`
  // migration: {
  //  migrationFilePath: './npdynamodb_migrations'
  // },

  development: {
    dynamoClient: dynamodb,
    migrations: {
      ProvisionedThroughput: [2, 2],
      tableName: 'npd_migrations'
    }
  },

  staging: {
    dynamoClient: dynamodb,
    migrations: {
      ProvisionedThroughput: [2, 2],
      tableName: 'npd_migrations'
    }
  },

  production: {
    dynamoClient: dynamodb,
    migrations: {
      ProvisionedThroughput: [2, 2],
      tableName: 'npd_migrations'
    }
  }
};
