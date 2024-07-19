
if (context.flow=="TARGET_REQ_FLOW") {
     var request_uri = context.getVariable("request.uri");
     var uri = request_uri.replace("/business/rules-engine/rulesets/execute", 
     "/v1/projects/mcm-monoproject-777/locations/us-central1/workflows/workflow-read-firestore-params/executions");
     context.setVariable("target.url",context.getVariable("target.url")+ uri);
}

var content = JSON.parse(context.getVariable("request.content"));
var body ={
  "argument": "{\"body\": {\"ruleSetId\": \""+ content.ruleSetId +"\"}}",
  "callLogLevel": "LOG_ALL_CALLS"
}

context.setVariable('request.content',JSON.stringify( body));

