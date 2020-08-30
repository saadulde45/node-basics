# node-basics
Node Basics 

Demo Scripts

curl -X GET 'http://localhost:3000/employees'
curl -X GET 'http://localhost:3000/employees/<id>'
curl -X POST 'http://localhost:3000/employees' -H 'content-type: application/json' --data '{"firstName":"John","lastName":"Doe","role":1,"project":"Project Name 2","location":"Nepal"}'
curl -X PUT 'http://localhost:3000/employees/<id>' -H 'content-type: application/json' --data '{"firstName":"Oli","lastName":"Doe","role":1,"project":"Project Name 2","location":"Nepal"}'
curl -X DELETE 'http://localhost:3000/employees/<id>'