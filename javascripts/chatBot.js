import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyBvC-4vaRLh8IzvHSHXwHudc8kqdKh27Dw");

async function chatbot() {
  printQuestion();
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    generationConfig: {
      maxOutputTokens: 1200,
    },
  });
  const extension = document.getElementById("result-message");
  const extensionDiv = document.createElement("div");
  extensionDiv.classList.add("extension");
  extensionDiv.innerHTML = `
    <i class="bi bi-robot me-2 fs-5"></i>
    <l-tail-chase
    size="20"
    speed="1.75"
    color="black"></l-tail-chase>
  `;
  extension.appendChild(extensionDiv);
  const msg = document.getElementById("chat").value;
  document.getElementById("chat").value = "";
  document.getElementById("sendButton").disabled = true;
  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  if (text != "") {
    setTimeout(() => {
      extension.removeChild(extensionDiv);
    });
  }
  const answerContainer = document.getElementById("result-message");
  const answerDiv = document.createElement("div");
  answerDiv.classList.add("robot-chat", "mt-3");
  answerDiv.innerHTML = `<i class="bi bi-robot me-2 fs-5"></i> <b> ${text} </b>`;
  answerContainer.appendChild(answerDiv);
  answerDiv.scrollIntoView();
}
document.getElementById("sendButton").addEventListener("click", chatbot);

function printQuestion() {
  const message = document.getElementById("chat").value;
  const questionContainer = document.getElementById("result-message");
  const questionDiv = document.createElement("div");
  questionDiv.classList.add(
    "question",
    "mt-3",
    "d-flex",
    "justify-content-end"
  );
  questionDiv.innerHTML = `<b> ${message} </b> <i class="bi bi-person-fill fs-5"></i>`;
  questionContainer.appendChild(questionDiv);
  document
  .getElementById("result-message")
  questionDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.getElementById("icon-chatBot").addEventListener("click", () => {
  document.getElementById("chatbot").hidden = false;
});
document.getElementById("exit-chatBot").addEventListener("click", () => {
  document.getElementById("chatbot").hidden = true;
});
document.getElementById("chat").addEventListener("input", () => {
  document.getElementById("sendButton").disabled = false;
});
