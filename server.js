// server.js

const express = require("express");
const cors = require("cors");
const app = express();

// CORS 설정: 특정 출처(여기서는 127.0.0.1:5500)만 허용
app.use(
  cors({
    origin: "http://127.0.0.1:5501", // 특정 출처만 허용
    methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"], // 허용할 HTTP 메서드
  })
);

// 요청 본문을 텍스트 형식으로 처리하기 위한 미들웨어
app.use(express.text());

// 초기 데이터
let data = { message: "안녕하세요!" };

// GET 요청 처리: 메시지 데이터를 JSON 형식으로 반환
app.get("/message", (req, res) => {
  res.json(data);
});

// POST 요청 처리: 요청 본문을 메시지로 설정
app.post("/message", (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

// PUT 요청 처리: 요청 본문을 메시지로 설정
app.put("/message", (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

// DELETE 요청 처리: 메시지 데이터를 초기화
app.delete("/message", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다.");
});

// 서버를 3000 포트에서 실행
app.listen(3000, () => {
  console.log("Express 서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
