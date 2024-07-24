var request_uri = context.getVariable("request.uri");

var topic_id = "mcm-patient-streaming-topic-webhook";
var final_uri = "/topics/" + topic_id + "/subscriptions";

var uri = request_uri.replace("/webhook-subscription-api/subscriptions", final_uri);
context.setVariable("target.url",context.getVariable("target.url")+ uri);