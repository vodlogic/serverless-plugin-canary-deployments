const _ = require('lodash/fp')

function replaceAlbTargetGroupFunctionWithAlias (targetGroup, functionAlias, functionName) {
  const lambdaTargets = _.get('Properties.Targets', targetGroup)
  const findTargetFunction = (configuration) => {
    const thisFunctionName = _.get('Id.Fn::GetAtt[0]', configuration)
    return thisFunctionName === functionName
  }
  const index = _.findIndex(findTargetFunction, lambdaTargets)
  const targetGroupObj = _.set(['Properties', 'Targets', index, 'Id'], { Ref: functionAlias }, targetGroup)
  targetGroupObj.DependsOn.push(functionAlias)
  return targetGroupObj
}

const AlbTargetGroup = {
  replaceAlbTargetGroupFunctionWithAlias
}

module.exports = AlbTargetGroup
