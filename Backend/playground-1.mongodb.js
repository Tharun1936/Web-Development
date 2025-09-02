
use('crudDB');

// Insert a few documents into the sales collection.
db.getCollection('languages')
db.languages.insertOne({
    "name":"java",
    "price":0,
    "name":"python",
    "price":100
})

