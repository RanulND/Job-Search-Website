export const amplifyconfig = {
    aws_cognito_region: 'ap-south-1',
    aws_user_pools_id: 'ap-south-1_iEkgCUldd', 
    aws_user_pools_web_client_id: '72b0bm1avmknuont7vp5f7ce07',
    aws_cognito_identity_pool_id: 'ap-south-1:ae42ca65-ae17-4d75-8d66-d492292a9784',
    aws_mandatory_sign_in: 'enable',
    aws_cloud_logic_custom: [
        {
          name: 'dev-job-search-app',
          endpoint: 'https://itwnuyua85.execute-api.ap-south-1.amazonaws.com/',
          region: 'ap-south-1'
        }
      ]
}  
 