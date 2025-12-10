/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3057983768")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_932644888",
    "hidden": false,
    "id": "relation3202983982",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "rabbithole",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3057983768")

  // remove field
  collection.fields.removeById("relation3202983982")

  return app.save(collection)
})
