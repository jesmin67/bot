const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
  name: "awtodownn",
  version: "1.0.0",
  permssion: 0,
  credits: "EMon-BHai",
  prefix: false,
  description: "",
  category: "media",
  usages: "video [Text]",
  cooldowns: 10,
  }

module.exports.run = async function (api) {}

module.exports.handleEvent = async function ({ api, event }) {
    if (this.checkLink(event.body)) {
        var { type, url } = this.checkLink(event.body);
        this.downLoad(url, type, api, event);
    }
};

module.exports.downLoad = function (url, type, api, event) {
    var time = Date.now();
    var path = __dirname + `/cache/${time}.${type}`;
    this.getLink(url).then(res => {
        if (type == 'mp4') url = res;
        else if (type == 'mp3') url = res;
        axios({
            method: "GET",
            url: url,
            responseType: "arraybuffer"
        }).then(res => {
            fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
            if (fs.statSync(path).size / 1024 / 1024 > 25)  return api.sendMessage("The file is too large, cannot be sent", event.threadID, () => fs.unlinkSync(path), event.messageID);

            api.sendMessage({
              body: "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐃𝐚𝐰𝐧𝐥𝐨𝐚𝐝 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨✨🌺",
                attachment: fs.createReadStream(path)
            }, event.threadID, () => fs.unlinkSync(path), event.messageID);
        });
    }).catch(err => console.log(err));
};

module.exports.getLink = function (url) {
    if (url.includes("tiktok")) {
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `http://fi3.bot-hosting.net:20536/tiktok/downloadvideo?url=${link}`
            }).then(res => resolve(res.data.data.play)).catch(err => reject(err));
        });
    } else if (url.includes("facebook")) {
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `http://fi3.bot-hosting.net:20536/fbdownload?url=${link}`
            }).then(res => resolve(res.data.hd)).catch(err => reject(err));
        });
    } else if (url.includes("instagram")) {
         return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `http://fi3.bot-hosting.net:20536/instagram/downloadpost?url=${link}`
            }).then(res => resolve(res.data.hd)).catch(err => reject(err));
        });
    } else if (url.includes("https://youtu.be") || url.includes("https://youtube.com")) {
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `http://fi3.bot-hosting.net:20536/youtube?url=${link}`
            }).then(res => resolve(res.data.hd)).catch(err => reject(err));
        });
    } else {
        return Promise.reject("Invalid URL");
    }
};

module.exports.checkLink = function (url) {
    const regex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    const found = (url).match(regex);
    var media = ['tiktok', 'facebook', 'douyin', 'youtube', 'youtu', 'twitter', 'instagram', 'kuaishou', 'fb']
    if (this.isVaildUrl(String(found))) {
        if (media.some(item => String(found).includes(item))) {
            return {
                type: "mp4",
                url: String(found)
            };
        } else if (String(found).includes("soundcloud") || String(found).includes("zingmp3")) {
            return {
                type: "mp3",
                url: String(found)
            }
        }
    }
    return !1;
};

module.exports.isVaildUrl = function (url, api) {
    var regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (url.match(regex) == null) return !1;
    return !0;
};
