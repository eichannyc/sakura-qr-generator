const express = require('express');
const app = express();

// 必要なミドルウェアを設定
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ルートの定義（例）
app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;  // appをエクスポートする
