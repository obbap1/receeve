import * as AWS from 'aws-sdk';


const s3 = new AWS.S3();

const sns = new AWS.SNS();

// The name of the bucket that you have created
const BUCKET_NAME = 'mailgun1';

export const handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const fileContent: string = JSON.stringify(event, null, 2);

    const params = {
        Bucket: BUCKET_NAME,
        Key: 'mailgunResponse.txt', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            console.log({err});
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });

    sns.createTopic({Name: 'receeve'}).promise().then(response => {
        const arn = response.TopicArn;
        sns.publish({TopicArn: arn, Message: 'Mailgun test', Subject: 'From Receeve'})
    })

    return {
        message: 'Topics have been sent out, Responses have been stored on an s3 bucket and webhook has been handled'
    }

    
}