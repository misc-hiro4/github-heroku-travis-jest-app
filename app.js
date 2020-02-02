// 名簿保存用のデータベース作成
const Database = require("nedb");
const db = new Database({ filename: "person.db" });
db.loadDatabase((error) => {
    if (error !== null) {
        console.error(error);
    }

    console.log("load database completed.");
});
var data;
db.find({}, (error, docs) => {
    data = docs;
});

// ルータを作成
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set("view engine", "ejs"); //viewエンジンをejsであることを設定
app.get('/', (req, res) => {
    res.render("index", { data: data } );
});
app.post('/', (req, res) => {
    if (req.body.cmd == "確定") {
        const doc = {
            "name": req.body.name,
            "age": req.body.age,
            "gender": req.body.gender,
            "tel": req.body.tel,
            "zipcode": req.body.zipcode,
            "address": req.body.address
        };

        // 新規ドキュメントをデータベースに保存する
        db.insert(doc, (error, newDoc) => {
            if (error !== null) {
                console.error(error);
            }
        });

        data.push(doc);
    }
    else {
        db.remove({}, { multi: true });
        data = [];
    }
    res.render("index", { data: data } );
});

module.exports = app;