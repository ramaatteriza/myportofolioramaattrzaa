const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatToggle = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("close-chat");

// Toggle open chatbot
chatToggle.addEventListener("click", () => {
  chatbot.classList.remove("hidden");
  chatToggle.style.display = "none";
});

// Close chatbot
closeChat.addEventListener("click", () => {
  chatbot.classList.add("hidden");
  chatToggle.style.display = "flex";
});

// Send message
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("You", message);
  userInput.value = "";

  setTimeout(() => {
    appendMessage("AI", "This is a dummy response (API belum dihubungkan).");
  }, 500);
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<b>${sender}:</b> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
