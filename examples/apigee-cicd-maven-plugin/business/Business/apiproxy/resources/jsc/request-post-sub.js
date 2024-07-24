var subName = context.getVariable("name");

var sub_id = "/subscriptions/" + subName;
var request_uri = context.getVariable("request.uri");
var uri = request_uri.replace("/webhook-subscription-api/subscriptions", sub_id);

context.setVariable("target.url",context.getVariable("target.url")+ uri);