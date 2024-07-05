const axios = require('axios');

module.exports.config = {
    name: "sms",
    version: "1.0.0",
    permission: 2,
    credits: "Rahad", // Do not change my Credit 🙂🤝
    description: "Send an SMS to the specified number",
    prefix: true,
    category: "sms send",
    usages: "sms <phone_number> <message>",
    cooldowns: 5,
    dependencies: {
        "axios": "^0.21.1"
    }
};

module.exports.run = async function({ api, event, args }) {
    const { senderID, threadID } = event;
    const phoneNumber = args[0];
    const message = args.slice(1).join(" ");

    if (!phoneNumber || !message) {
        api.sendMessage("Please provide both phone number and message in the format: sms <phone_number> <message>", threadID, senderID);
        return;
    }

    try {
        const response = await axios.get('http://api.smsinbd.com/sms-api/sendsms', {
            params: {
                api_token: 'F1rwO3fY6hAFVKvjXF6T3dH6qRTpfxgKrylcJc56',
                senderid: '8809612442476',
                message: message,
                contact_number: phoneNumber
            }
        });

        const { status, message: responseMessage } = response.data;

        const maskedPhoneNumber = `${phoneNumber.slice(0, 5)}***${phoneNumber.slice(-2)}`;

        if (status === 'success') {
            api.sendMessage(`Success: ${responseMessage}. Sent to ${maskedPhoneNumber}`, threadID, senderID);
        } else {
            api.sendMessage(`Error: ${responseMessage}. Tried to send to ${maskedPhoneNumber}`, threadID, senderID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage(`An error occurred: ${error.message}`, threadID, senderID);
    }
};
