/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("6tm47p5yosqd7g0")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json3217087507",
    "maxSize": 0,
    "name": "features",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json1368277760",
    "maxSize": 0,
    "name": "visibility",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("6tm47p5yosqd7g0")

  // remove field
  collection.fields.removeById("json3217087507")

  // remove field
  collection.fields.removeById("json1368277760")

  return app.save(collection)
})
