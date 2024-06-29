const emonapi = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/sharifvau/Emon-Server/main/emonapi.json`
  );
  return base.data.api;
};
module.exports = {
  config: {
    name: "emonai",
    version: "1.0",
    credit: "Emon",
    prefix: 'awto',
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
    //---- Image Reply -----//
    if (event.type === "message_reply") {
      var t = event.messageReply.attachments[0].url;
      try {
        const response = await axios.get(
          `${await emonapi()}/gemini?q=${encodeURIComponent(q)}&url=${encodeURIComponent(t)}`
        );
        const data2 = response.data.Emon;
        api.sendMessage(data2, event.threadID, event.messageID);
      } catch (error) {
        console.error("Error:", error.message);
        api.sendMessage(error, event.threadID, event.messageID);
      }
    }
    //---------- Message Reply ---------//
    else if (!q) {
      return api.sendMessage(
        "Please provide a q or message reply",
        event.threadID,
        event.messageID
      );
    } else {
      try {
        const response = await axios.get(
          `${await emonapi()}/gemini?q=${encodeURIComponent(q)}`
        );
        const message = response.data.Emon;
        api.sendMessage(message, event.threadID, event.messageID);
      } catch (error) {
        console.error("Error calling Gemini AI:", error);
        api.sendMessage(
          `Sorry, there was an error processing your request.${error}`,
          event.threadID,
          event.messageID
        );
      }
    }
  },
};
