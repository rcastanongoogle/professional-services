var responseBody = JSON.parse(context.getVariable("response.content"));

/*Update response*/
var content = {
  "name": responseBody.name.split("/")[3],
  "endpoint": responseBody.pushConfig.pushEndpoint,
  "state": responseBody.state
}

context.setVariable("response.content",JSON.stringify(content));