// window._config = {
//     cognito: {
//         userPoolId: 'ap-south-1_iEkgCUldd', // e.g. us-east-2_uXboG5pAb
//         userPoolClientId: '72b0bm1avmknuont7vp5f7ce07', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
//         region: 'ap-south-1' // e.g. us-east-2
//     },
//     api: {
//         invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
//     }
// };

// export default window._config;

export const cognitoconfig = {
    userPoolId: 'ap-south-1_iEkgCUldd', // e.g. us-east-2_uXboG5pAb
    userPoolClientId: '72b0bm1avmknuont7vp5f7ce07', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
    region: 'ap-south-1' // e.g. us-east-2
}

export const amplifyconfig = {
    aws_cognito_region: 'ap-south-1', // (required) - Region where Amazon Cognito project was created
    aws_user_pools_id: 'ap-south-1_iEkgCUldd', // (optional) -  Amazon Cognito User Pool ID
    aws_user_pools_web_client_id: '72b0bm1avmknuont7vp5f7ce07', // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
    aws_cognito_identity_pool_id: 'ap-south-1:ae42ca65-ae17-4d75-8d66-d492292a9784', // (optional) - Amazon Cognito Identity Pool ID
    aws_mandatory_sign_in: 'enable', // (optional) - Users are not allowed to get the aws credentials unless they are signed in
    aws_cloud_logic_custom: [
        {
          name: 'dev-job-search-app', // (required) - API Name (This name is used used in the client app to identify the API - API.get('your-api-name', '/path'))
          endpoint: 'https://itwnuyua85.execute-api.ap-south-1.amazonaws.com/', // (required) -API Gateway URL + environment
          region: 'ap-south-1' // (required) - API Gateway region
        }
      ]
}  
 