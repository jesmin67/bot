module.exports.config = {
    name: "love",
    version: "1.0.1",
    permssion: 0,
    credits: "Emon",
    prefix: 'awto',
    description: "Thả thính",
    category: "Horoscope",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",

        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?.",

        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",

        "Anh yêu ơi ới ời. Anh đang ở đâu?.",

        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",

        "Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.",

        "Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.",

        "Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.",

        "Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.",

        "Ai nào cho mượn avatar để em đỡ cô đơn đi.",

        "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?.",

        "Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy.",

        "Trời đổ mưa rồi sao anh chưa đổ em?.",

        "Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi.",

        "Anh ơi, có nóng không? Tim em đang cháy nè.",

        "Anh gì ơi ! Anh đánh rơi người yêu này.",

        "Sao anh cười mãi thế. Da em đen mất rồi.",

        "Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?.",

        "Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.",

        "Uống nhầm 1 ánh mắt cơn say theo cả đời!.",

        "Em thích anh còn nhiều hơn muối ở biển…",

        "Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế.",

        "Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.",

        "Em xinh tươi, nhưng em chưa thuộc về ai.",

        "Chán thả thính rồi, ai cưa để em đổ một lần coi.",

        "Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?.",

        "Nếu có thể hãy để em một lần được yêu anh, được không?.",

        "Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?.",

        "Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?.",

        "Nếu ngoài kia nhiều bão tố, thì về đây với em.",

        "Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi.",

        "Cây đa, giếng nước sân đinh. Khi nào em hết một mình đây anh?.",
module.exports.config = {
    name: "love",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "JRT",
    description: "Thả thính",
    commandCategory: "Horoscope",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",

        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?.",

        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",

        "Anh yêu ơi ới ời. Anh đang ở đâu?.",

        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",

        "Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.",

        "Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.",

        "Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.",

        "Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.",

        "Ai nào cho mượn avatar để em đỡ cô đơn đi.",

        "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?.",

        "Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy.",

        "Trời đổ mưa rồi sao anh chưa đổ em?.",

        "Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi.",

        "Anh ơi, có nóng không? Tim em đang cháy nè.",

        "Anh gì ơi ! Anh đánh rơi người yêu này.",

        "Sao anh cười mãi thế. Da em đen mất rồi.",

        "Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?.",

        "Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.",

        "Uống nhầm 1 ánh mắt cơn say theo cả đời!.",

        "Em thích anh còn nhiều hơn muối ở biển…",

        "Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế.",

        "Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.",

        "Em xinh tươi, nhưng em chưa thuộc về ai.",

        "Chán thả thính rồi, ai cưa để em đổ một lần coi.",

        "Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?.",

        "Nếu có thể hãy để em một lần được yêu anh, được không?.",

        "Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?.",

        "Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?.",

        "Nếu ngoài kia nhiều bão tố, thì về đây với em.",

        "Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi.",

        "Cây đa, giếng nước sân đinh. Khi nào em hết một mình đây anh?.",

        "Cả thế giới này ai cũng yêu nhau chỉ có riêng mình em hẩm hiu một góc.",

        "Cần ai đó quan tâm để thấy mình được yêu thương.",

        "Anh gì ơi,cho em mượn đèn pin được không? Trời tối quá, em không tìm thấy đường vào tim anh.",

        "Say rượu say bia làm gì? Anh say em đi này.",

        "Thách ai nói yêu em đấy.",

        "Em ăn BƠ muốn vỡ bụng rồi đây ạ. Làng Face ai HẢO TÂM làm ơn cứu em với. Chỉ cần cái status này 500 like, bụng em lại lành!.",

        "Lâu rồi chưa biết cảm giác được đi ăn đi xem phim như thế nào, bài vở nhiều quá. Hôm nay rảnh có ai mời không nhỉ?.",

        "Rảnh quá có ai muốn đi chơi với mình không …",

        "Này anh, anh xem hộ em xem trong mắt em có gì hộ cái. Thấy chưa, toàn là hình bóng anh đấy!.",

        "Anh biết nhiều về Thuốc Mê không? Còn em gói gọn lại đó là anh.",

        "Anh có thấy dạo này da em đen không? Vì mải nhìn nụ cười Toả Nắng của anh đấy.",

        "Xin lỗi anh gì ơi anh đi đứng kiểu gì thế ngã vào trái tim em rồi kìa!.",

        "Anh có biết cài Win không ạ? Cài hộ em cái hệ điều hành nào mà có giao diện chính là Anh được không!.",

        "Em nghĩ chúng mình có điểm chung đấy. Đó là anh yêu bản thân anh, còn em thì cũng yêu anh!.",

        "Anh gì ơi cho em mượn cái đèn pin được không. Trời tối quá em không biết đường nào để đi đến trái tim anh.",

        "Anh biết sửa Tivi không. Sao kênh nào cũng chiếu toàn những nhung nhớ về anh thế này!.",

        "Anh ơi anh có hiểu rõ đường đi lối lại ở đây không. Chỉ hộ em xem đi đường nào để thoát khỏi nỗi nhớ anh cái!.",

        "Này anh gì ơi, anh có Anh hay Em Trai gì không? Em không tin là trên đời này có tận 2 thiên thần đâu!",

        "Ai dám nói nơi hạnh phúc nhất là thiên đường. Người đó chắc hẳn không biết đến khoảnh khắc mỗi khi anh cười rồi!.",

        "Nếu không có gì là mãi mãi, anh có thể là “không có gì” của em được không?.",

        "Anh có thể cho em mượn một nụ hôn được không? Em hứa là sẽ trả lại đầy đủ."
    ];
    const trai = ["Em có muốn con mình sau này có ADN của anh không?.",

        "OgO  বাবু  এত্ত গুলা ভালবাসি",

      "“আমি কি তোমার কাছে একটা Kiss ধার নিতে পারি,… কথা দিচ্ছি, খুব তাড়াতাড়ি ফেরত দিয়ে দেব।”",
                  
"“যখন আমি বলি, আমি তোমাকে ভালোবাসি, তখন তা আমি অভ্যাসের বশে বলি না, তখন আমি তোমাকে মনে করিয়ে দিই যে তুমিই আমার জীবন।”",

                  "“দুনিয়ার জন্য তুমি একটা সাধারণ মানুষ, কিন্তু একটি সাধারণ মানুষের কাছে তুমি তার সম্পূর্ণ দুনিয়া।”",
                  
" “যতক্ষণ পর্যন্ত না ভালোবাসায় পাগলামো মেশে, ততক্ষন ভালোবাসা গভীর হয় না।”",

                  "“যারা বেশি কথা বলে, তাদের চুপ করানোর জন্য চুম্বন, প্রকৃতির দ্বারা সৃষ্ট শ্রেষ্ট উপহার।”",

                  "“একটি ছোট্ট আশা ভালোবাসার জন্ম দেওয়ার জন্য যথেষ্ট।”",

                  "“আমাদের জীবনে যে দৃঢ় এবং স্থায়ী খুশী আছে, তার জন্য ৯০ শতাংশ প্রেম দায়ী।”",

                  "“প্রেমে পড়লেই সবাই কবি হয়ে যায়।” – Plato",
                  "“আমরা আদর্শ প্রেম নির্মাণ করার বদলে আদর্শ প্রেমিক খুঁজতে বেশি সময় নষ্ট করি।”",

                  " “স্বর্গ আমি চাই না, কারণ আমি তোমাকে পেয়েছি। স্বপ্ন আমি দেখতে চাই না, কারণ তুমিই আমার স্বপ্ন।”",

                  "“কখনও কখনও প্রেম কঠিন হতে পারে। কিন্তু তার জন্য সব কিছু করা যেতে পারে।”",

                  "“আমি সর্বদা তোমার কোলে শুয়ে থাকতে চায়, যেখান থেকে তুমি আমাকে কখনও যেতে দেবে না।”",

                  "“ভালোবাসায় পাগলামো করা ঈশ্বরের আশীর্বাদের মত।”",

                  "“Thank you, my love, পৃথিবীর মধ্যে সব থেকে ভাগ্যবান আমি, আমাকে এই অনুভূতি টা দেওয়ার জন্য ধন্যবাদ।”",

                  "“যখন আমি তোমাকে প্রথম দেখি… অন্তর থেকে আওয়াজ আসে,… ওহ,…এই তো আমার ভালোবাসা, আমার রাজকুমারী,…যাকে আমি এতো দিন থেকে খুজছিলাম।”",

                  "“আমি তোমার প্রথম প্রেম, Kiss বা অনুভূতি না হলেও… আমি তোমার শেষের সবকিছু হতে চায়।”",

                 "“চলো, আমরা জীবনের পথটা এক সাথে হেঁটে পার করি। চলার পথে তোমার যা যা প্রয়োজন হবে আমরা ভাগাভাগি করে নিব।”",

                  " “মা বাবা আমাকে জন্ম দিয়েছে – কিন্তু তুমিই সে যে আমাকে বাঁচিয়ে রেখেছো। I am in love with you.”",

                  "“যখন আমি তোমাকে দেখি তখন আমার হৃদয় থেকে একটা কথা বেরিয়ে এসে চিৎকার করে বলতে চাই, আমি তোমাকে ছাড়া বাঁচতে পারব না। I Love You!!”",

                  "“ভালোবাসা কি তা আজ আমি জেনেছি কেবলমাত্র তোমার জন্য। I Love You so much.”",

                  "“প্রেম হওয়ার মতো,…চোখে দেখা যায় না, কিন্তু অনুভব করা যায়।”",

                  "“যখনই আমার Phone এর লাইট জ্বলে ওঠে, আমি ভাবি, ইসস এটা যদি তোমার মেসেজ হত।”",

                  "“প্রকৃত প্রেম বলার আগেই বুঝে নেবে তুমি কি বলতে চাইছো।”",

                  "“তুমি আমাকে ছেড়ে চলে গেছো,… কোনো ব্যাপার নয়। কিন্তু আমার সামনে কখনও কারো সাথে ঘুরে বেড়িও না।”",

                  "“আমার Vitamin “U” দরকার।”",

                  "“ভালোবাসা Complicated হয় না, মানুষ করে দেয়।”",

                  "“প্রেম সম্পর্কে বেশি কিছু আমি জানি না, শুধু তুমি সামনে আসলেই আমার অনুসন্ধান শেষ হয়ে যায়।”",

                  "“কখনও তোমার মনের উপর ভরসা কোরো না,… কারণ মন right side এ থাকে না (left side এ থাকে).”",

                  "“মৃত্যুর পর যম যখন আমাকে জিজ্ঞেস করবে,… জীবনে সব থেকে সুন্দর কি দেখেছ,… তখন আমি তোমার নাম বলব।”",
                
                  "এমন কোনো মানুষকে বেছে নাও যে তোমার জন্য শুধু গর্ব অনুভব করবে না, তোমার জন্য জীবনে যে কোনো ঝুঁকি নিতে প্রস্তুত থাকবে।”",

                  "“জীবনের যুদ্ধ… ঘৃণার মাধ্যমে নয়, ভালোবাসা দিয়ে জিততে হয়।”",

                  "“কারো সাথে প্রেম শুরু করা খুব সহজ, কিন্তু প্রেম করা থেকে বিরত হওয়া খুব কঠিন।”",

                  "“প্রেম দুজন কেই সরিয়ে তোলে,… যে ভালোবাসা দেয় এবং যে ভালোবাসা পায়।”",

                  "“দেখেছি তোমার চোখে স্বপ্ন আমার, থাকব বাঁধনে ভালোবাসা। যেখানেই থাকো তুমি থাকব পাশে, মনে রেখো চিরদিন আমি যে তোমার। “",

                  "“আমরা নিজেদের এজন্য ভালোবাসি না যে আমরা জীবনের দাস, ভালোবাসি কারণ আমরা প্রেমের দাস।”",
                  " “ঈশ্বরের কাছে তোমার খুশি চেয়ে নিচ্ছি, প্রার্থনাতে তোমার হাঁসি চেয়ে নিচ্ছি, ভাবছি তোমার কাছে কি চাইব, তোমার কাছে সারা জীবনের জন্য প্রেম চেয়ে নিচ্ছি।”",

                  "“কখনও কখনও মন কিছু বিষয় অনুভব করতে পারে যা চোখ দেখতে পায় না।”",

                  "“জীবনে এমন একজন থাকা প্রয়োজন যাকে সব কথা বলা যায়।”",

                  "“জীবনে এমন একজন থাকা প্রয়োজন যাকে সব কথা বলা যায়।”",

                  "″না কারো মন চাই, না কারো জীবন চাই, আমাকে বোঝার জন্য, শুধু একজন সঙ্গী চাই।”",

                  "“আয়না দেখলে আমার কথা মনে পড়বে,এক সাথে কাটানো মুহূর্ত গুলো মনে পড়বে।মুহূর্তের জন্য সময় থেমে যাবে,যখন আমার কথা মনে পড়বে।”",

      "“আমার কথা যত ভুলবার চেষ্টা করবে, আমি তত বেশি করে মনে পড়ব।”", 

                  "“ভালো লাগে, যখন কেউ আমার যত্ন আমার নিজের থেকে বেশি করে নেয়।”",

                  "“প্রেম তো মন থেকে হয়,… ভাগ্য ভালো হলে নয়,… সে তো যে কোনো সময় বদলে যেতে পারে। “",

                  " “ভালোবেসে সব কিছু চেয়ে নিও, রেগে গেলে আমার হাঁসি চেয়ে নিও, শুধু একটা কথা কখনও ধোঁকা দিও না, তারপর আমার জীবন চেয়ে নিও।”",

                  "“তোমার ভালোবাসার জন্য যে কোনো সীমা লঙ্ঘন করতে পারি, তোমাকে পেলে জীবনে কিছু করে দেখাতে পারি।”",

                  " “ইস, যদি কখনো আমার হাতটা চেপে ধরতে, ভয় পাচ্ছ কেন, আমি তো তোমারই।”",

                  "“ভালো লাগে, যখন আমি কিছু না বললেও, আমাকে দেখে তুমি ছোট্ট হাসি দাও।”",

                  "“কোনো জেদ নয়, না কোনো গর্ব, শুধু তোমাকে পাবার ইচ্ছা। ভালোবাসা দোষের হলে, দোষ করেছি আমি, শাস্তি যাই হোক, রাজি আছি আমি।”",

                  "“ভালোবাসায় জীবন। জীবনে যদি কখনো প্রেম ই না করলে, তাহলে কি করলে।”",

                  "“মনের মধ্যে ভালোবাসা রাখো। কারণ ভালোবাসা ছাড়া জীবন অনেকটা ফুলহীন বাগানের মত।”",

                  "“ঘুমানোর আগে আমার প্রথম স্মৃতি তুমি, ঘুম থেকে ওঠার পরে আমার প্রথম স্মৃতি তুমি।”",

                  "“কাউকে ভালোবেসে দূরে ঠেলা তো খুব সহজ, কাউকে দূর থেকে ভালোবাসো, তবে বুজতে পারবে ভালোবাসা কি।”",

                  "“সূর্যালোক ছাড়া ফুল যেমন ফোটে না, ঠিক তেমন ভালোবাসা ছাড়া জীবন কাটে না।”",

                  "“ভেঙ্গে দাও সেই প্রতিজ্ঞা যা তুমি করেছ, কখনও কখনও আমার কথা তো মনে করতে পারো, তোমার কথা না মনে করে থাকতেও পারি না, হৃদয়ে তুমি এমনই জায়গা তৈরী করেছ।”",

                  "“সেই মেয়েটির কথা আমার সবথেকে মিষ্টি লাগে যাকে আমি ভালোবেসেছি।”",

                  "“কারো কাছে পাওয়া ভালোবাসা তোমাকে শক্তি দেবে, আর তুমি কাউকে ভালোবাসলে তার কাছ থেকে সাহস পাবে।”",

                  "“আমার মন কে এই ভাবে বন্দি কোরো না পাগলী। আমি মনের রাজা, তোমার খাঁচায় বন্দি পাখী নয়।”",

                  "“এক দিন লক্ষ্য করি, আমি বিনা কারণেই হাসছি, তখন বুঝতে পারি আমি তোমাকে ভালোবেসে ফেলেছি।”",

                  "“কখনও অভিমান কোরো না, কারণ আমি অভিমানী কে মানাতে জানি না।”",

                  "“তোর ভালোবাসায় আমার অধিকার তো নেই, কিন্তু আমার মন বলে আমি তোর জন্য সারা জীবন অপেক্ষা করতে পারব।”",

                  "“প্রেম এমন একটা ফল, যা সব ঋতুতেই ফলে এবং সবাই পায়।”",

                  "“প্রেম হাসি দিয়ে শুরু হয়, এজন্য আমাদের হাসি মুখে সবার সাথে দেখা করা উচিত।”",

                  "“যদি কেউ, প্রতি দিন সকালে ওঠার পরে এবং রাতে ঘুমানোর আগে তোমার কথা মনে করে, তাহলে তুমি বুঝবে, তুমি তার জন্য খুব স্পেশাল।”",

                  "“জীবনের সমস্ত মুশকিল আসান করার জন্য আমার কেবল মাত্র একটি জিনিস প্রয়োজন, আর সেটা হলো তোমার মিষ্টি হাসি।”",

                  "“এই কথাটা শুনতে কতই না ভালো লাগে, যখন কেউ খুব ব্যস্ত হওয়ার পরেও বলে, তোমার থেকে জরুরি আর কিছু নেয় আমার জীবনে।”",

                  "“যখন আমার কিছু বলার আগেই তুমি বুঝে যাও, তখন তোমার প্রতি একটু বেশিই ভালোবাসা অনুভব করি।”",

                  "“লোক বদলায়, পরিস্থিথি বদলায়, প্রেমিক প্রেমিকা বদলায়, কিন্তু প্রেম কখনো বদলায় না।”",

                  "“কাউকে আপন করে পাওয়া প্রেম নয়, প্রেম হল আপন জনের মনে জায়গা করে নেওয়া।”",

                  "“সেই সময় দুনিয়া কতই না সুন্দর হয়ে যায়, যখন কোনো আপন জন বলে, তোমার কথা খুব মনে পরে।”",

                  "“তোমার ভালোবাসায় ডুবে বৃষ্টির ফোঁটা থেকে সাগর হয়ে যাব, তোমা থেকে শুরু হয়ে তোমাতেই শেষ হয়ে যাব।”",

                  "” প্রেমই জীবন। প্রেম হারিয়ে ফেললে তুমি সব কিছু হারিয়ে ফেলবে।”",

                  "“তুমি ভালোবাসা না ঈশ্বরের দান, ঠিক বুঝতে পারি না, একটা সুন্দর অনুভূতি, যা মন থেকে যায় না।”",

                  ". “ভালোবাসা কি? তা আমি জানতাম না। হঠাৎ একদিন তোমাকে দেখলাম, আর হারিয়ে গেলাম।”",

                  "শোনো পাগলী, তোমার জন্য চিন্তা করি, সন্দেহ নয়। তোমাকে অন্য কেউ দেখে, তা বরদাস্ত নয়।”",

                "“ভালোবাসার মানে এই নয় যে, তোমার কোনো গার্লফ্রেন্ড বা বয়ফ্রেন্ড থাকবে, ভালোবাসা মানে এক জন কেউ স্পেশাল থাকবে, যার জন্য তুমি চিন্তা করবে এবং সে তোমার জন্য চিন্তা করবে।”",

                  "“আমার ইচ্ছা অনেক, কিন্তু প্রয়োজন শুধু তোমাকে।”",

                  "“আমি প্রেম, তুই জেদ, আমি তোর মধ্যে, তুই আমার মধ্যে।”",

                  "“একটু শোনো, তোমার সাথে কাটানো প্রতিটা মিষ্টি মুহূর্ত এখনো আমার চোখে ভাসে, এই মুহূর্তগুলো ততদিন থাকবে যতদিন আমার চোখ খোলা থাকবে।”",

                  "“শোনো, তুমি মিছিমিছি আমার উপর অভিমান কোরো না, জানো তো, তুমি ছাড়া আমার কোনো অস্তিত্ব নেয়।”",
                  
                  "“তোমার চিন্তা আমার মন থেকে কখনই যাবে না, কারণ তুমি আমার চিন্তার চিন্তায় মিশে আছো।”",

                  "“ঈশ্বরের কাছে কেবল একটাই প্রার্থনা, যেন যখনই চোখ খুলি তোমাকেই দেখি সব জায়গা।”",

                  "“যখন থেকে পরী হয়ে বাসা বেধেঁছ আমার চোখে, তখন থেকে তুমি ছাড়া আর কিছুই ভালো লাগেনা।”",

                  "“এক মাত্র মন টাই তো ছিল আমার, তুমি সেটা কেও চুরি করে নিলে।”",

                  "“আবার যদি পৃথিবীতে বাঁচার সুযোগ পায়, তবে এবার তোমার নাম আমার হাতের রেখায় আগে থেকে লিখিয়ে নিয়ে পৃথিবীতে আসব।”",

                  "“যতই না মোবাইলে কথা বলো আর চ্যাট করো, মনের খিদে তখনই মিটে যখন দেখি তোমাকে আমার চোখের সামনে।”",

                  "“হাতটা ধরো আমার শক্ত করে, এই দুনিয়াতে হারিয়ে না যায়, এ দায়িত্ব তোমারি আছে।”",

                  "“এই চোখ দিয়ে পান করে নিই, মনের কারাগারে তোকে বন্দি করে নিই, আমার চোখের মনি তুই, আয় তোকে সবার আড়াল করে নিই।”",

                  "“তোর আমার Love story এমন হোক যেন Id তোর কিন্তু Dp আমার।”",

                  "“না চাঁদ চাই, না সূর্য চাই, শুধু তোর এক ঝলক চাই।”",

                  "“ছোট ছোট ব্যাপার নিয়েও অনেক বকাবকি করতিস তুই, আমি চুপ করে শুনতাম, তার মানে এই নয় যে দোষটা আমার ছিল, একটা সময় ছিল, যখন তোর কথা শুনলে আমার মনটা জুড়িয়ে যেত।”",

                  "“আজ আমার এই চোখের জল হয়তো কারো জন্য ঠাট্টার খোরাক, কিন্তু তা বেরিয়ে পরে প্রতিটা নিঃশাসের সাথে যেন জ্বলন্ত চিতার অগ্রিম ছাই।”",

                  "“হয়তো তুই, জীবনে আমার থেকেও ভালো কাউকে পেয়েছিস, বা কেউ হয়তো তোকেও কোনোদিন কাঁদিয়েছে ঠিক আমি যেমন কাঁদছি। কিন্তু কথা দিচ্ছি, তোর চোখের জলের প্রতিটা বিন্দুর মূল্য ভালোবাসা দিয়ে চোকাবো আমি।”",

                  "“তুই মৃত্যুর সাজা দিলে, তোর খুশির জন্য আমি হাসতে হাসতে মৃত্যুকে জড়িয়ে ধরবো।”",

                  "“যতই অভিমান কর তুই, তোর প্রতি আমার ভালোবাসা কোনো দিনই কম হবে না। আমার মতো তোর সাথে কেউ থাকবে, এমন কোনো জীবন সাথী পাবি না।”",

                  "“তোর ছোট্ট ছোট্ট অভিমান আমাকে খুব কষ্ট দিয়ে কাঁদাচ্ছে, আর তুই আমার হবি না – তা আমাকে মৃত্যুর দিকে ঠেলে দিচ্ছে।”",

                  "“বলা হয়, প্রতিটা সম্পর্কের একটা শক্তি থাকে, যার জন্য তারা একে ওপরের ওপর ভরসা করে। কিন্তু এই ভরসা যদি সন্দেহে পরিণত হয়, তখন এই শক্তিই দূর্বলতায় পরিণত হয়।”",

                  "“আমি গর্ব অনুভব করতাম সবার কাছে তোর কথা বলে, কিন্তু এক মুহূর্তও তোর প্রয়োজন মনে হলো না আমার Care করার জন্য।”",

                  "“মানুষ ততক্ষন পরিপূর্ণ হয় না, যতক্ষণ না তার বিয়ে হয়,…তার পর সে শেষ হয়ে যায়।”",
                  
                  "ভালবাসা বলতে আমি বুজি আবির খুব ভালো ছেলে অর সাথে প্রেম করতে পারেন পোলাটা আর কত সিংগেল থাকবে এইযে আবির এর আইডির লিং দিয়ে দিলাম জাও প্রেম করো",

 ];
var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[on].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
  }
        "Cả thế giới này ai cũng yêu nhau chỉ có riêng mình em hẩm hiu một góc.",

        "Cần ai đó quan tâm để thấy mình được yêu thương.",

        "Anh gì ơi,cho em mượn đèn pin được không? Trời tối quá, em không tìm thấy đường vào tim anh.",

        "Say rượu say bia làm gì? Anh say em đi này.",

        "Thách ai nói yêu em đấy.",

        "Em ăn BƠ muốn vỡ bụng rồi đây ạ. Làng Face ai HẢO TÂM làm ơn cứu em với. Chỉ cần cái status này 5
