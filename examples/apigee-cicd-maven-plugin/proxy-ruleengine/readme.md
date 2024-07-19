Testeando para apigee hybrid

mvn -Ptest  -Pdeployonly install -Dapigee.config.options=create  -Dusername=myemail@gmail.com

1era ejecución par el el deploy del proxy de prueba

----------
Apigee X
Obtener token

Dbearer=$(gcloud auth print-access-token)

mvn -Pprod -Pdeployonly install -Dapigee.config.options=create -Dusername=lourdesrojas@google.com -Dpassword=lasdsadas -Dbearer=$Dbearer




