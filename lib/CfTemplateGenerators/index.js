const CodeDeploy = require('./CodeDeploy')
const Iam = require('./Iam')
const Lambda = require('./Lambda')
const ApiGateway = require('./ApiGateway')
const Sns = require('./Sns')
const S3 = require('./S3')
const CloudWatchEvents = require('./CloudWatchEvents')
const CloudWatchLogs = require('./CloudWatchLogs')

module.exports.codeDeploy = CodeDeploy
module.exports.iam = Iam
module.exports.lambda = Lambda
module.exports.apiGateway = ApiGateway
module.exports.sns = Sns
module.exports.s3 = S3
module.exports.cloudWatchEvents = CloudWatchEvents
module.exports.cloudWatchLogs = CloudWatchLogs
