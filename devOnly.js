//
//
//
/*********** DEV ONLY **************/



function initDev() {
    showPage("loading")
    useDevObject();
}

function useDevObject() {

  data = {
    Color: [
      {
        en: "black",
        vi: "đen",
      },
      {
        en: "brown",
        vi: "nâu",
      },
      {
        en: "white",
        vi: "trắng",
      },
      {
        en: "red",
        vi: "đỏ",
      },
      {
        en: "green",
        vi: "xanh lá",
      },
      {
        en: "blue",
        vi: "xanh da trời",
      },
      {
        en: "yellow",
        vi: "vàng",
      },
      {
        en: "pink",
        vi: "hồng",
      },
      {
        en: "purple",
        vi: "màu tím",
      },
      {
        en: "orange",
        vi: "trái cam",
      },
    ],
    Food: [
      {
        en: "beef",
        vi: "thịt bò",
      },
      {
        en: "pork",
        vi: "thịt heo",
      },
      {
        en: "chicken",
        vi: "gà",
      },
      {
        en: "fish",
        vi: "cá",
      },
      {
        en: "eggs",
        vi: "trứng",
      },
      {
        en: "sandwich",
        vi: "bánh mì",
      },
      {
        en: "chicken feet",
        vi: "chân gà",
      },
      {
        en: "chicken wing",
        vi: "cánh gà",
      },
      {
        en: "grilled",
        vi: "nướng",
      },
      {
        en: "steamed",
        vi: "hấp",
      },
      {
        en: "hot pot",
        vi: "lẩu",
      },
      {
        en: "clam",
        vi: "sò",
      },
      {
        en: "snail",
        vi: "ốc",
      },
      {
        en: "octopus",
        vi: "bạch tuộc",
      },
      {
        en: "squid",
        vi: "mực ống",
      },
      {
        en: "seafood",
        vi: "đồ ăn biển",
      },
      {
        en: "rice",
        vi: "cơm",
      },
      {
        en: "cheese",
        vi: "phô mai",
      },
      {
        en: "peanuts",
        vi: "đậu phộng",
      },
    ],
    Drink: [
      {
        en: "water",
        vi: "nước",
      },
      {
        en: "tea",
        vi: "trà",
      },
      {
        en: "coffee",
        vi: "cà phê",
      },
      {
        en: "juice",
        vi: "nước ép",
      },
      {
        en: "apple juice",
        vi: "nước táo",
      },
      {
        en: "beer",
        vi: "bia",
      },
      {
        en: "wine",
        vi: "rượu nho",
      },
      {
        en: "red wine",
        vi: "rượu vang đỏ",
      },
      {
        en: "white wine",
        vi: "rượu trắng",
      },
      {
        en: "rice wine",
        vi: "rượu gạo",
      },
    ],
    Time: [
      {
        en: "Monday",
        vi: "thứ hai",
      },
      {
        en: "Tuesday",
        vi: "thứ ba",
      },
      {
        en: "Wednesday",
        vi: "thứ tư",
      },
      {
        en: "Thursday",
        vi: "thứ năm",
      },
      {
        en: "Friday",
        vi: "thứ sáu",
      },
      {
        en: "Saturday",
        vi: "thứ bảy",
      },
      {
        en: "Sunday",
        vi: "chủ nhật",
      },
      {
        en: "minute",
        vi: "phút",
      },
      {
        en: "hour",
        vi: "giờ",
      },
      {
        en: "day",
        vi: "ngày",
      },
      {
        en: "week",
        vi: "tuần",
      },
      {
        en: "month",
        vi: "tháng",
      },
      {
        en: "year",
        vi: "năm",
      },
      {
        en: "o'clock",
        vi: "giờ",
      },
      {
        en: "morning",
        vi: "sáng",
      },
      {
        en: "evening",
        vi: "tối",
      },
    ],
    Directions: [
      {
        en: "turn left",
        vi: "rẽ trái",
      },
      {
        en: "turn right",
        vi: "rẽ phải",
      },
      {
        en: "go straight",
        vi: "đi thẳng",
      },
      {
        en: "stop",
        vi: "dừng lại",
      },
      {
        en: "meters",
        vi: "mét",
      },
      {
        en: "turn around",
        vi: "quay lại",
      },
      {
        en: "car",
        vi: "xe hơi",
      },
      {
        en: "taxi",
        vi: "xe tắc xi",
      },
      {
        en: "motorbike",
        vi: "xe máy",
      },
    ],
    Fruit: [
      {
        en: "banana",
        vi: "trái chuối",
      },
      {
        en: "orange",
        vi: "trái cam",
      },
      {
        en: "strawberry",
        vi: "dâu",
      },
      {
        en: "watermelon",
        vi: "dưa hấu",
      },
      {
        en: "coconut",
        vi: "dừa",
      },
      {
        en: "rambutan",
        vi: "chôm chôm",
      },
      {
        en: "passion fruit",
        vi: "chanh dây",
      },
      {
        en: "peach",
        vi: "đào",
      },
      {
        en: "guava",
        vi: "trái ổi",
      },
      {
        en: "lychee",
        vi: "vải thiều",
      },
      {
        en: "apple",
        vi: "táo",
      },
    ],
    Adjectives: [
      {
        en: "big",
        vi: "lớn",
      },
      {
        en: "small",
        vi: "nhỏ bé",
      },
      {
        en: "fast",
        vi: "nhanh",
      },
      {
        en: "slow",
        vi: "chậm",
      },
      {
        en: "loud",
        vi: "to tiếng",
      },
      {
        en: "quiet",
        vi: "yên tĩnh",
      },
      {
        en: "fat",
        vi: "mập",
      },
      {
        en: "thin",
        vi: "gầy",
      },
      {
        en: "ugly",
        vi: "xấu xí",
      },
      {
        en: "beautiful",
        vi: "đẹp",
      },
      {
        en: "hot",
        vi: "nóng bức",
      },
      {
        en: "cold",
        vi: "lạnh",
      },
      {
        en: "warm",
        vi: "ấm áp",
      },
      {
        en: "happy",
        vi: "vui mừng",
      },
      {
        en: "sad",
        vi: "buồn",
      },
      {
        en: "scared",
        vi: "sợ hãi",
      },
      {
        en: "surprised",
        vi: "ngạc nhiên",
      },
      {
        en: "new",
        vi: "mới",
      },
      {
        en: "old",
        vi: "cũ",
      },
      {
        en: "drunk",
        vi: "cũ",
      },
    ],
    Verbs: [
      {
        en: "want",
        vi: "muốn",
      },
      {
        en: "need",
        vi: "nhu cầu",
      },
      {
        en: "buy",
        vi: "mua",
      },
      {
        en: "go",
        vi: "đi",
      },
      {
        en: "can",
        vi: "có thể",
      },
      {
        en: "able",
        vi: "khả năng",
      },
      {
        en: "eat",
        vi: "ăn",
      },
      {
        en: "sleep",
        vi: "ngủ",
      },
      {
        en: "walk",
        vi: "đi bộ",
      },
      {
        en: "drive",
        vi: "lái xe",
      },
      {
        en: "have",
        vi: "có",
      },
      {
        en: "work",
        vi: "công việc",
      },
      {
        en: "look",
        vi: "nhìn",
      },
      {
        en: "take",
        vi: "lấy",
      },
    ],
    Expressions: [
      {
        en: "My name is David.",
        vi: "Tên tôi là David.",
      },
      {
        en: "What's your name?",
        vi: "Bạn tên là gì?",
      },
      {
        en: "I'm from Canada.",
        vi: "Tôi đến từ Canada.",
      },
      {
        en: "I am 35 years old.",
        vi: "Tôi 35 tuổi.",
      },
      {
        en: "Where is the toliet?",
        vi: "Đâu là toliet?",
      },
      {
        en: "Where is the museum?",
        vi: "Đâu là bảo tàng?",
      },
      {
        en: "I want a sandwich.",
        vi: "Tôi muốn có một bánh sandwich.",
      },
      {
        en: "I need to go to the hospital.",
        vi: "Tôi cần phải đi đến bệnh viện.",
      },
      {
        en: "Help.",
        vi: "Cứu giúp.",
      },
      {
        en: "Good morning.",
        vi: "Buổi sáng tốt lành.",
      },
      {
        en: "Good night.",
        vi: "Chúc ngủ ngon.",
      },
      {
        en: "How much is it?",
        vi: "Cái này giá bao nhiêu?",
      },
      {
        en: "I cannot eat seafood.",
        vi: "Tôi không thể ăn hải sản.",
      },
    ],
  };

  objData.data = data;
  loadHomePage();
}
