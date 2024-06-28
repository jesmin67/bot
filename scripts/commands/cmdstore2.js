const axios = require("axios");
const availableCmdsUrl = "https://raw.githubusercontent.com/sharifvau/Emon-Server/main/availableCmds.json";
const cmdUrlsJson = "https://raw.githubusercontent.com/sharifvau/Emon-Server/main/cmdUrls.json";

const itemsPerPage = 10;

module.exports.config = {
  name: "cmdstore",
  credits: "Dipto",
  permission: 0,
  version: "2.0",
  description: "Commands Store of Dipto",
  cooldowns: 3,
  prefix: 'awto',
  category: "Tools",
  usages: "cmdstore"
};

module.exports.run = async function ({ api, event, args }) {
  const page = parseInt(args[0]) || 1;
  try {
    const response = await axios.get(availableCmdsUrl);
    const cmds = response.data.cmdName;
    const totalPages = Math.ceil(cmds.length / itemsPerPage);

    if (page < 1 || page > totalPages) {
      return api.sendMessage(
        `❌ | Invalid page number. Please enter a number between 1 and ${totalPages}.`,
        event.threadID,
        event.messageID
      );
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cmdsToShow = cmds.slice(startIndex, endIndex);

    let msg = `╭─────⭓${page}⭓──────⭓\n`;

    cmdsToShow.forEach((cmd, index) => {
      msg += `│ 『 ${startIndex + index + 1}. ${cmd.cmd} \n│ AUTHOR: ${cmd.author} \n│ UPDATE: ${cmd.update || "N/A"}』\n│────────────⭓\n`;
    });

    msg += `╰─────⭓${page}⭓──────⭓`;

    if (page < totalPages) {
      msg += `\nType "${this.config.name} ${page + 1}" for more commands.`;
    }

    api.sendMessage(
      msg,
      event.threadID,
      (error, info) => {
        if (error) return api.sendMessage("❌ | Failed to send the message.", event.threadID, event.messageID);

        global.client.handleReply.push({
          name: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          cmdName: cmds,
          page: page
        });
      },
      event.messageID
    );
  } catch (error) {
    api.sendMessage(
      "❌ | Failed to retrieve commands. Please check the URLs or your network connection.",
      event.threadID,
      event.messageID
    );
  }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (handleReply.author != event.senderID) {
    return api.sendMessage("you are no permission use this command", event.threadID, event.messageID);
  }

  const reply = parseInt(event.body);
  const startIndex = (handleReply.page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (isNaN(reply) || reply < startIndex + 1 || reply > endIndex) {
    return api.sendMessage(
      `❌ | Please reply with a number between ${startIndex + 1} and ${Math.min(endIndex, handleReply.cmdName.length)}.`,
      event.threadID,
      event.messageID
    );
  }

  try {
    const cmdName = handleReply.cmdName[reply - 1].cmd;
    const { status } = handleReply.cmdName[reply - 1];
    const response = await axios.get(cmdUrlsJson);
    const selectedCmdUrl = response.data[cmdName];

    if (!selectedCmdUrl) {
      return api.sendMessage(
        "❌ | Command URL not found.",
        event.threadID,
        event.messageID
      );
    }

    api.unsendMessage(handleReply.messageID);
    const msg = `╭───⭓EMON⭓───⭓\n│ EMon-BHai-Bot : Command \n│▰▰▰▰▰▰▰▰▰▰▰▰\n│ ╰┈➤ ❝ [ Command Url ]= ${selectedCmdUrl}\n╰──EMon-BHai-Bot──⭓`;
    api.sendMessage(msg, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage(
      "❌ | Failed to retrieve the command URL. Please check the URL or your network connection.",
      event.threadID,
      event.messageID
    );
  }
};
