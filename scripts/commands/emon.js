const axios = require("axios");

const emonapi = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/sharifvau/Emon-Server/main/emonapi.json"
    );
    return response.data.gemini-pro; // assuming gemini_pro is the correct key
  } catch (error) {
    console.error("Error fetching emonapi configuration:", error.message);
    throw error; // rethrow the error to handle it in the calling function
  }
};

module.exports = {
  config: {
    name: "emon",
    version: "1.0",
    credit: "Emon",
    prefix: "awto",
    description: "gemeini",
    cooldowns: 5,
    permission: 0,
    category: "gemini",
    usages: {
      en: "{pn} message | photo reply",
    },
  },
  run: async ({ api, args, event }) => {
    const q = args.join(" ");

    // Handling image replies
    if (event.type === "message_reply") {
      try {
        const t = event.messageReply.attachments[0].url;
        const apiUrl = await emonapi();
        const response = await axios.get(
          `${apiUrl}/gemini?q=${encodeURIComponent(q)}&url=${encodeURIComponent(t)}`
        );
        const data2 = response.data.response;
        api.sendMessage(data2, event.threadID, event.messageID);
      } catch (error) {
        console.error("Error processing image reply:", error.message);
        api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
      }
    } else {
      // Handling regular text replies
      if (!q) {
        api.sendMessage(
          "Please provide a query or reply to a message with an image.",
          event.threadID,
          event.messageID
        );
        return;
      }

      try {
        const apiUrl = await emonapi();
        const respons = await axios.get(
          `${apiUrl}/gemini?q=${encodeURIComponent(q)}`
        );
        const message = respons.data.generated_text;
        api.sendMessage(message, event.threadID, event.messageID);
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
