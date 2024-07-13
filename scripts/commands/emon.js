const axios = require("axios");

const getApiUrl = async () => {
  const response = await axios.get('https://raw.githubusercontent.com/sharifvau/Emon-Server/main/emonapi.json');
  return response.data.geminipro;
};

module.exports = {
  config: {
    name: "emon",
    version: "1.0",
    credit: "Dipto",
    prefix: 'awto',
    description: "gemini ai",
    cooldowns: 5,
    permission: 0,
    category: "google",
    usages: {
      en: "{pn} message | photo reply",
    },
  },
  run: async ({ api, args, event }) => {
    const prompt = args.join(" ");
    const apiUrl = await getApiUrl();

    if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
      const attachmentUrl = event.messageReply.attachments[0].url;
      try {
        const response = await axios.get(
          `${apiUrl}/gemini?q=${encodeURIComponent(attachmentUrl)}&text=${encodeURIComponent(prompt)}`
        );
        const message = response.data.response;
        api.sendMessage(`GEMINI RESPONSE: ${message}`, event.threadID, event.messageID);
      } catch (error) {
        console.error("Error:", error.message);
        api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
      }
    } else if (!prompt) {
      api.sendMessage(
        "Please provide a prompt or message reply",
        event.threadID, 
        event.messageID
      );
    } else {
      try {
        const response = await axios.get(
          `${apiUrl}/mgs?q=${encodeURIComponent(prompt)}`
        );
        const message = response.data.response;
        api.sendMessage(`GEMINI RESPONSE: ${message}`, event.threadID, event.messageID);
      } catch (error) {
        console.error("Error calling Gemini AI:", error.message);
        api.sendMessage(
          `Sorry, there was an error processing your request. ${error.message}`,
          event.threadID,
          event.messageID
        );
      }
    }
  },
};
