module.exports.config = {
  name: "bot",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "nazrul",
  description: "fun",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const query = args.join(" ");
    var name = await Users.getNameUser(event.senderID);
    var tl = ["🍒)⎯⃝লিৃ্ঁপৃ্ঁ কিৃ্ঁসৃ্ঁ কৃ্ঁরুৃ্ঁমৃুৃঁ আৃঁয়ৃুুু🥺", "⎯͢⎯⃝🩵 খাৃঁলিৃঁ ডাৃঁকেুকেৃঁ দেৃঁখৃ🔪⎯͢⎯⃝💚", "≛⃝🌺উৃঁফৃঁসৃঁ জাৃঁনসৃ✿၁'নডৃ‍ কিডৃন্ঃুদৃॢঁু 🌺🥺", "🌸💚" ];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    
    if (!query) return api.sendMessage(`${name},\n\n ${rand}\n\n`, event.threadID, event.messageID);

    try {
        const res = await axios.get(`http://fi3.bot-hosting.net:20536/sim?type=ask&ask=${query}`);
        
        if (res.data.success) {
            return api.sendMessage({
                body: res.data.message
            }, event.threadID, event.messageID);
        } else {
            return api.sendMessage('Failed to get a response', event.threadID, event.messageID);
        }
    } catch (error) {
        console.error(error);
        return api.sendMessage('An error occurred while fetching the response', event.threadID, event.messageID);
    }
};
