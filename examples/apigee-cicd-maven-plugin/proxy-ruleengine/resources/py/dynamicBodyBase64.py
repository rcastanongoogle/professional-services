import base64

ruleSetId = flow.getVariable("ruleset.id")

body = "{\"argument\":\"{\\\"body\\\":{\\\"ruleSetId\\\":\\\"%s\\\"},\\\"callLogLevel\\\":\\\"LOG_ALL_CALLS\\\"}\"}"%(ruleSetId)

encoded = base64.b64encode(body)

flow.setVariable("ruleset.body", encoded)