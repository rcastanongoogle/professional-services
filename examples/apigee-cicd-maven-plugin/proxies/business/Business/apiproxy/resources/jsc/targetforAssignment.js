     var request_uri = context.getVariable("request.uri");
     var nuevauri = request_uri.replace("/webhook-subscription-api","");
     context.setVariable("target.url", nuevauri);

     print(context.getVariable("target.url"));
