var requestBody = JSON.parse(context.getVariable("request.content"));

var filter = requestBody.filter;
var parsedFilter = "";
var baseStr = "attributes.resourceType = ";

for(var i=0; i<filter.length; i++) {
  if (i != filter.length - 1)
    parsedFilter = parsedFilter + baseStr.concat('\"', filter[i], '\"', ' OR ');
  else 
    parsedFilter = parsedFilter + baseStr.concat('\"', filter[i], '\"');   
}

var topicId = "mcm-patient-streaming-topic-webhook";
var topic = "projects/mcm-monoproject-777/topics/" +topicId;
var content = {
  "topic": topic,
  "pushConfig": {
    "pushEndpoint": requestBody.endpoint
  },
  "retainAckedMessages": true,
  "messageRetentionDuration": "432000s",
  "filter": parsedFilter
}

print (content);

context.setVariable("request.content", JSON.stringify(content));

context.setVariable("request.verb", "PUT");