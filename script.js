let chatresponse;
let API_URL = ''

async function fetchApiKey() {
  try {
    // Wait for the fetch request to complete
    const response = await fetch('https://chat-master-vv4b.onrender.com/api/data');
    
    // Wait for the response to be converted into JSON
    const data = await response.json();
    
    // Store the API key
    let apiKey = data.apiKey;

    // Now you can safely use the API key
   

    // You can now safely continue with the next code, which will run only after the above lines are complete
    // For example:
    nextFunction(apiKey);
  } catch (error) {
    console.error("Error fetching API key:", error);
  }
}

// Call the function
fetchApiKey();

 // const API_KEY = 'AIzaSyAL7BmCdsBH9v4Vv-4jmWV2gN7uM5ckm48'
 function nextFunction(apiKey) {
 API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

 }
 
 const generateBotResponse = async (userMessage) => {
  const requestOptions = {
    method : "POST",
    headers : {"Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        "parts":[{"text": userMessage}]
      }]
    })
  }
  try {
    const response = await fetch(API_URL, requestOptions)
    const data = await response.json()
    if(!response.ok) throw new Error(data.error.message)
      chatresponse = data.candidates[0].content.parts[0].text
    console.log(chatresponse)
    return chatresponse;

  }catch (error) {
    console.log(error)
  }
 }
function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");

  if (!userInput.trim()) return;

  chatBox.innerHTML += `<div class="message user">${userInput}</div>`;
  document.getElementById("userInput").value = "";

  chatBox.innerHTML += `<div class="message bot"><div class="loading"></div></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  generateBotResponse(userInput).then(botReply => {
    chatBox.innerHTML = chatBox.innerHTML.replace('<div class="message bot"><div class="loading"></div></div>', `<div class="message bot">${botReply}</div>`);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}


