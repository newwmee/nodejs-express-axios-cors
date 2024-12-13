// app.js

document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchMessage");
  const updateButton = document.getElementById("updateMessage");
  const deleteButton = document.getElementById("deleteMessage");
  const messageDisplay = document.getElementById("messageDisplay");

  // 서버로부터 메시지 가져오기
  fetchButton.addEventListener("click", async () => {
    try {
      const response = await axios.get("http://localhost:3000/message");
      messageDisplay.textContent = response.data.message || "메시지가 없습니다";
    } catch (error) {
      console.error("메시지 가져오기 오류:", error);
    }
  });

  // 서버에 메시지 업데이트 요청 보내기
  updateButton.addEventListener("click", async () => {
    const newMessage = prompt("새로운 메시지를 입력하세요:");
    if (newMessage) {
      try {
        // Axios를 사용하여 PUT 요청을 보냄
        // PUT 요청으로 서버의 /message 엔드포인트에서 메시지를 업데이트합니다.
        const response = await axios.put(
          "http://localhost:3000/message",
          newMessage,
          {
            headers: { "Content-Type": "text/plain" },
          }
        );
        messageDisplay.textContent = response.data;
      } catch (error) {
        console.error("메시지 업데이트 오류:", error);
      }
    }
  });

  // 서버에 메시지 삭제 요청 보내기
  deleteButton.addEventListener("click", async () => {
    try {
      const response = await axios.delete("http://localhost:3000/message");
      messageDisplay.textContent = response.data;
    } catch (error) {
      console.error("메시지 삭제 오류:", error);
    }
  });
});
