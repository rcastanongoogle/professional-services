Edge

mvn -Ptest  -Pdeployonly install -Dapigee.config.options=create  -Dusername=apigeeenero20222@gmail.com

1era ejecución par el el deploy 02_deploy-componentes-apigee

----------
Apigee X
Obtener token

Dbearer=$(gcloud auth print-access-token)

mvn -Pprod -Pdeployonly install -Dapigee.config.options=create -Dusername=lourdesrojas@google.com -Dpassword=mypassword Dorg=rolandos-appmod-demos -Denv=test-env -Dbearer=$Dbearer




