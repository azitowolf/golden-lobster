amazon = require('amazon-product-api');

var client = amazon.createClient({
	awsId: process.env['AWSAccessKeyId'],
	awsSecret: process.env['AWSSecretKey'],
	awsTag: process.env['AmazonAssociatesTag']
});

client.itemSearch({
  director: 'Quentin Tarantino',
  actor: 'Samuel L. Jackson',
  searchIndex: 'DVD',
  audienceRating: 'R',
  responseGroup: 'ItemAttributes,Offers,Images'
}).then(function(results){
  console.log(JSON.stringify(results, null, 4));
}).catch(function(err){
  console.log(err);
});
