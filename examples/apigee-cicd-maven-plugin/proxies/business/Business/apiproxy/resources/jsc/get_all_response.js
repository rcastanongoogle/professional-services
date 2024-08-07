var responseBody = JSON.parse(context.getVariable("response.content"));

var subscriptionsResponse = responseBody.subscriptions
var subscriptions = [];

for(var i=0; i<subscriptionsResponse.length; i++)
  subscriptions.push(subscriptionsResponse[i].split("/")[3]);

var content = {
  "subscritions": subscriptions
}

context.setVariable("response.content",JSON.stringify(content));