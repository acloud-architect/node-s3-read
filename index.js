var AWS = require('aws-sdk')
AWS.config.update({region: 'ap-southeast-2'});
var s3 = new AWS.S3();

s3.listBuckets(function(err, data){
    if(err){
        console.log('Error', err.stack)
    }else{
        
        data.Buckets.forEach(function(item, index, arr){
            console.log(item.Name, item.CreationDate)
        })
    }
})