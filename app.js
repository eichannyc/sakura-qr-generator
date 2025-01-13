const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 30129; // 提供されたポート番号

// ルートハンドラー
app.get("/qr", async (req, res) => {
  const qrData = "HelloFromSakura"; // QRコードに含めるデータ
  const qrSize = "150x150"; // QRコードのサイズ

  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(qrData)}`;
  
  try {
    const response = await axios.get(qrApiUrl, { responseType: "arraybuffer" });
    res.set("Content-Type", "image/png");
    res.send(response.data); // QRコード画像をブラウザに表示
  } catch (error) {
    console.error("Error fetching QR code:", error);
    res.status(500).send("Failed to generate QR code");
  }
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://jsfw.p.cyber-u.ac.jp:${PORT}/qr`);
});
