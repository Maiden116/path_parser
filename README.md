### Rest Server on Nodejs

Remember to run befor start the app
```
npm install
```

to start the application
'''
npm run start 
'''

to parse a url

'''
curl --location --request POST 'localhost:3000/parsepath' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url": "/6/api/listings/3?sort=desc&limit=10",
    "url_format" : "/:version/api/:collection/:id"
}
'
'''
