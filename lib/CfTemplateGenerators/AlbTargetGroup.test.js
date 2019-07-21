const { expect } = require('chai')
const AlbTargetGroup = require('./AlbTargetGroup')

describe('AlbTargetGroup', () => {
  describe('.replaceAlbTargetGroupFunctionWithAlias', () => {
    const functionName = 'HelloWorldLambdaFunction'
    const targetGroup = {
      Type: 'AWS::ElasticLoadBalancingV2::TargetGroup',
      Properties: {
        TargetType: 'lambda',
        Targets: [
          {
            Id: {
              'Fn::GetAtt': [
                'HelloWorldLambdaFunction',
                'Arn'
              ]
            }
          }
        ],
        Name: 'sampleTargetGroupName'
      },
      DependsOn: [
        'HelloLambdaPermissionAlbTargetGroup'
      ]
    }

    it('replaces the target lambda function for an alias', () => {
      const functionAlias = 'TheFunctionAlias'
      const expected = {
        Type: 'AWS::ElasticLoadBalancingV2::TargetGroup',
        Properties: {
          TargetType: 'lambda',
          Targets: [
            {
              Id: {
                Ref: 'TheFunctionAlias'
              }
            }
          ],
          Name: 'sampleTargetGroupName'
        },
        DependsOn: [
          'HelloLambdaPermissionAlbTargetGroup',
          'TheFunctionAlias'
        ]
      }
      const actual = AlbTargetGroup.replaceAlbTargetGroupFunctionWithAlias(targetGroup, functionAlias, functionName)
      expect(actual).to.deep.equal(expected)
    })
  })
})
