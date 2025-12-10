/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3057983768")

  // update collection data
  unmarshal({
    "name": "rabbits"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3057983768")

  // update collection data
  unmarshal({
    "name": "John"
  }, collection)

  return app.save(collection)
})
