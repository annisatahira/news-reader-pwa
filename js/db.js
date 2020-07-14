//open db if exist, if not create one
var dbPromised = idb.open("news-reader", 1, function (upgradeDb) {
  //create new object store
  var articlesObjectStore = upgradeDb.createObjectStore("articles", {
    keyPath: "ID",
  });

  //create index for search
  articlesObjectStore.createIndex("post_title", "post_title", {
    unique: false,
  });
});
