// const db;
// db.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-TypeError, Accept");
//     next();
// });
(async () => {
    
	const db = await drive('1ypO46-Dd9vLXQ9ARz6BMkNVBVHldH6670NwatsdLEaI');
    db.header("Access-Control-Allow-Origin", "*");
    db.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-TypeError, Accept");
    console.log(db);
  //document.body.innerHTML = `<pre>${JSON.stringify(db, null, 2)}</pre>`;
  
})();


// 1ypO46-Dd9vLXQ9ARz6BMkNVBVHldH6670NwatsdLEaI
// functional sheet 1fvz34wY6phWDJsuIneqvOoZRPfo6CfJyPg1BYgHt59k