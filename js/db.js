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

function saveForLater(article) {
  dbPromised
    .then(function (db) {
      var tx = db.transaction("articles", "readwrite");
      var store = tx.objectStore("articles");
      console.log(article);
      //method add for save article
      store.add(article.result);
      return tx.complete;
    })
    .then(function () {
      console.log("Artikel berhasil di simpan.");
    });
}
