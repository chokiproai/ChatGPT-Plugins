# Object Storage Service Configuration Guide

Choose either S3 or R2 as your object storage service based on your network situation. You only need to configure one of these services.

Since using R2 on an internal network often encounters issues, we recommend choosing an object storage provider that supports the S3 protocol.

## S3 Storage Service Configuration

Below is the configuration guide for `Youpai Cloud`. Please refer to the corresponding documentation for other providers.

[Reference](https://help.upyun.com/knowledge-base/aws-s3%E5%85%BC%E5%AE%B9/#e585bce5aeb9e5b7a5e585b7e7a4bae4be8b)

1. Log in to [Youpai Cloud - CDN and Cloud Storage Service](https://www.upyun.com/)
2. Register for an account
3. Go to the "Cloud Storage" dashboard [Youpai Cloud Console](https://console.upyun.com/services/file/)
4. Create a service and note your service name
5. Go to "User Management", create a "Staff" account, and assign appropriate permissions
6. Edit the "Staff" account and copy the "AccessKey" and "SecretAccessKey"
7. If read/write permissions are not selected, please select and confirm
8. Return to the ChatGPT-Next-Web-LangChain project and edit the environment variables. Fill in the following information:
   - `S3_ENDPOINT=http://s3.api.upyun.com`
   - `S3_ACCESS_KEY_ID=AccessKey`
   - `S3_SECRET_ACCESS_KEY=SecretAccessKey`
   - `S3_BUCKET=ServiceName`
9. Enjoy.

## R2 Storage Service Configuration

Log in to dash.cloudflare.com and navigate to R2 in the left menu.

1. Copy the "Account ID" from the right.

2. Click "Create Bucket".

3. Customize the bucket name and record it for later use in the environment variable configuration, then click "Create Bucket".

4. Go to the "Settings" tab, click "Add CORS Policy", paste the content below, and click "Save".

   ```json
   [
     {
       "AllowedOrigins": [
         "*"
       ],
       "AllowedMethods": [
         "PUT",
         "DELETE",
         "GET"
       ],
       "AllowedHeaders": [
         "content-type"
       ],
       "MaxAgeSeconds": 3000
     }
   ]
   ```

5. Return to the main R2 menu and click "Manage R2 API Token" on the right.

6. Click "Create API Token", select "Admin Read and Write" permissions, set TTL to "Forever", and click "Create API Token".

7. Copy the "Access Key ID" and "Secret Access Key", then click "Done".

8. Return to the ChatGPT-Next-Web-LangChain project and edit the environment variables. Fill in the following information:

   - `R2_ACCOUNT_ID=AccountID`
   - `R2_ACCESS_KEY_ID=AccessKeyID`
   - `R2_SECRET_ACCESS_KEY=SecretAccessKey`
   - `R2_BUCKET=BucketName`

9. Enjoy.