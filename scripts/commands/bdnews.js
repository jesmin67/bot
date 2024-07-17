module.exports = {
  config: {
    name: "bdnews",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "Fetches the latest news.",
    prefix: 'awto',
    category: "user",
    usages: "",
    cooldowns: 5,
  },

  handleReply: async function ({ api, event, handleReply }) {
    const { bdnews } = require('nayan-server');

    try {
      const response = await bdnews();
      const data = response.news;

      const selectedNews = data.find(item => item.heading === handleReply.head[event.body - 1]);
      
      if (selectedNews) {
        const replyMessage = `
          Title: ${selectedNews.heading}
          Time: ${selectedNews.timestamp}
          Content: ${selectedNews.content || "Not Found"}
        `;
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(replyMessage, event.threadID);
      } else {
        return api.sendMessage('News not found.', event.threadID);
      }
    } catch (error) {
      console.error('Error handling reply:', error);
      return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID);
    }
  },

  start: async function ({ api, events, args }) {
    const { bdnews } = require('nayan-server');

    try {
      const response = await bdnews();
      const data = response.news;

      if (!data.length) {
        return api.sendMessage('No news available at the moment.', events.threadID);
      }

      const head = data.map(item => item.heading);
      const msg = data.map((item, index) => `${index + 1} - ${item.heading}`).join('\n\n');

      const body = `»🔎 There are ${head.length} results:\n\n${msg}\n\n» Reply with the number of the news item you want to see.`;

      const info = await api.sendMessage(body, events.threadID);

      global.client.handleReply.push({
        type: 'reply',
        name: this.config.name,
        messageID: info.messageID,
        author: events.senderID,
        head: head
      });

    } catch (error) {
      console.error('Error fetching or sending news:', error);
      api.sendMessage('An error has occurred, please try again later.', events.threadID, events.messageID);
    }
  }
};
