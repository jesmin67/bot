module.exports.config = {
    name: "bot2",
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
    var tl = ["🍒)⎯⃝লিৃপৃ কিৃসৃ কৃরুৃমৃুৃঁ আৃঁয়ৃুুু🥺", "⎯͢⎯⃝🩵 খাৃঁলিৃঁ ডাৃঁকেুকেৃঁ দেৃঁখৃ🔪⎯͢⎯⃝💚", "≛⃝🌺উৃঁফৃঁসৃঁ জাৃঁনসৃ✿၁'নডৃ‍ কিডৃনঃুদৃॢঁু 🌺🥺", "🌸💚"];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    
    try {
        if (!query) {
            return api.sendMessage(`${name},\n\n${rand}\n\n`, event.threadID, event.messageID);
        }
        
        const res = await axios.get(`https://gemini-api-production-5fa9.up.railway.app/gemini?q=${encodeURIComponent(query)}`);
        
        if (res.data && res.data.message) {
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
          
