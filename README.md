### Rest Server on Nodejs

Remember to run befor start the app
```
npm install
```

to save a new animal POST with body 

```
{
    "sound" : "zzzzz",
    "specie" : "sneak"
}
```
```
curl --location --request POST 'localhost:3000/animal' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sound" : "zzzzz",
    "specie" : "sneak"
}'
```

To make an animal speak 
```
curl --location --request POST 'localhost:3000/animal/speak' \
--header 'Content-Type: application/json' \
--data-raw '{
    "phrase" : "la la la ",
    "specie" : "sneak"
}'
```

To get Animal list
```
curl --location --request GET 'localhost:3000/animals'
```
