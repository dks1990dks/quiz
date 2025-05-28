const questions = [
    {
        question: "What is the capital of Andhra Pradesh?",
        answers: [
            { text: "Itanagar", correct: false },
            { text: "Chandigarh", correct: false },
            { text: "Amaravati", correct: true },
            { text: "Dehradun", correct: false }
        ]
    },
    {
        question: "What is the capital of Arunachal Pradesh?",
        answers: [
            { text: "Kolkata", correct: false },
            { text: "Bhopal", correct: false },
            { text: "Itanagar", correct: true },
            { text: "Patna", correct: false }
        ]
    },
    {
        question: "What is the capital of Assam?",
        answers: [
            { text: "Lucknow", correct: false },
            { text: "Dispur", correct: true },
            { text: "Dehradun", correct: false },
            { text: "Aizawl", correct: false }
        ]
    },
    {
        question: "What is the capital of Bihar?",
        answers: [
            { text: "Shimla", correct: false },
            { text: "Shillong", correct: false },
            { text: "Patna", correct: true },
            { text: "Imphal", correct: false }
        ]
    },
    {
        question: "What is the capital of Chhattisgarh?",
        answers: [
            { text: "Raipur", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Bhubaneswar", correct: false },
            { text: "Imphal", correct: false }
        ]
    },
    {
        question: "What is the capital of Goa?",
        answers: [
            { text: "Shimla", correct: false },
            { text: "Dehradun", correct: false },
            { text: "Panaji", correct: true },
            { text: "Chandigarh", correct: false }
        ]
    },
    {
        question: "What is the capital of Gujarat?",
        answers: [
            { text: "Gandhinagar", correct: true },
            { text: "Bhopal", correct: false },
            { text: "Thiruvananthapuram", correct: false },
            { text: "Patna", correct: false }
        ]
    },
    {
        question: "What is the capital of Haryana?",
        answers: [
            { text: "Raipur", correct: false },
            { text: "Imphal", correct: false },
            { text: "Gangtok", correct: false },
            { text: "Chandigarh", correct: true }
        ]
    },
    {
        question: "What is the capital of Himachal Pradesh?",
        answers: [
            { text: "Ranchi", correct: false },
            { text: "Shimla", correct: true },
            { text: "Bhopal", correct: false },
            { text: "Gangtok", correct: false }
        ]
    },
    {
        question: "What is the capital of Jharkhand?",
        answers: [
            { text: "Ranchi", correct: true },
            { text: "Lucknow", correct: false },
            { text: "Patna", correct: false },
            { text: "Gangtok", correct: false }
        ]
    },
    {
        question: "What is the capital of Karnataka?",
        answers: [
            { text: "Panaji", correct: false },
            { text: "Bengaluru", correct: true },
            { text: "Shillong", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },
    {
        question: "What is the capital of Kerala?",
        answers: [
            { text: "Thiruvananthapuram", correct: true },
            { text: "Panaji", correct: false },
            { text: "Agartala", correct: false },
            { text: "Jaipur", correct: false }
        ]
    },
    {
        question: "What is the capital of Madhya Pradesh?",
        answers: [
            { text: "Gandhinagar", correct: false },
            { text: "Bhopal", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Bhubaneswar", correct: false }
        ]
    },
    {
        question: "What is the capital of Maharashtra?",
        answers: [
            { text: "Gangtok", correct: false },
            { text: "Mumbai", correct: true },
            { text: "Chennai", correct: false },
            { text: "Ranchi", correct: false }
        ]
    },
    {
        question: "What is the capital of Manipur?",
        answers: [
            { text: "Imphal", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Shimla", correct: false },
            { text: "Panaji", correct: false }
        ]
    },
    {
        question: "What is the capital of Meghalaya?",
        answers: [
            { text: "Agartala", correct: false },
            { text: "Shillong", correct: true },
            { text: "Hyderabad", correct: false },
            { text: "Itanagar", correct: false }
        ]
    },
    {
        question: "What is the capital of Mizoram?",
        answers: [
            { text: "Aizawl", correct: true },
            { text: "Gangtok", correct: false },
            { text: "Dispur", correct: false },
            { text: "Imphal", correct: false }
        ]
    },
    {
        question: "What is the capital of Nagaland?",
        answers: [
            { text: "Thiruvananthapuram", correct: false },
            { text: "Amaravati", correct: false },
            { text: "Patna", correct: false },
            { text: "Kohima", correct: true }
        ]
    },
    {
        question: "What is the capital of Odisha?",
        answers: [
            { text: "Bhubaneswar", correct: true },
            { text: "Panaji", correct: false },
            { text: "Gandhinagar", correct: false },
            { text: "Kohima", correct: false }
        ]
    },
    {
        question: "What is the capital of Punjab?",
        answers: [
            { text: "Amaravati", correct: false },
            { text: "Hyderabad", correct: false },
            { text: "Aizawl", correct: false },
            { text: "Chandigarh", correct: true }
        ]
    },
    {
        question: "What is the capital of Rajasthan?",
        answers: [
            { text: "Jaipur", correct: true },
            { text: "Shillong", correct: false },
            { text: "Dispur", correct: false },
            { text: "Panaji", correct: false }
        ]
    },
    {
        question: "What is the capital of Sikkim?",
        answers: [
            { text: "Bhubaneswar", correct: false },
            { text: "Lucknow", correct: false },
            { text: "Gangtok", correct: true },
            { text: "Chandigarh", correct: false }
        ]
    },
    {
        question: "What is the capital of Tamil Nadu?",
        answers: [
            { text: "Chennai", correct: true },
            { text: "Chandigarh", correct: false },
            { text: "Ranchi", correct: false },
            { text: "Agartala", correct: false }
        ]
    },
    {
        question: "What is the capital of Telangana?",
        answers: [
            { text: "Patna", correct: false },
            { text: "Hyderabad", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Panaji", correct: false }
        ]
    },
    {
        question: "What is the capital of Tripura?",
        answers: [
            { text: "Thiruvananthapuram", correct: false },
            { text: "Gandhinagar", correct: false },
            { text: "Agartala", correct: true },
            { text: "Kohima", correct: false }
        ]
    },
    {
        question: "What is the capital of Uttar Pradesh?",
        answers: [
            { text: "Chandigarh", correct: false },
            { text: "Bengaluru", correct: false },
            { text: "Patna", correct: false },
            { text: "Lucknow", correct: true }
        ]
    },
    {
        question: "What is the capital of Uttarakhand?",
        answers: [
            { text: "Shimla", correct: false },
            { text: "Chennai", correct: false },
            { text: "Dehradun", correct: true },
            { text: "Shillong", correct: false }
        ]
    },
    {
        question: "What is the capital of West Bengal?",
        answers: [
            { text: "Shillong", correct: false },
            { text: "Kolkata", correct: true },
            { text: "Chandigarh", correct: false },
            { text: "Bhubaneswar", correct: false }
        ]
    },
        {
        question: "What is the National Animal of India?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Tiger", correct: true },
            { text: "Leopard", correct: false }
        ]
    },
    {
        question: "What is the National Bird of India?",
        answers: [
            { text: "Peacock", correct: true },
            { text: "Eagle", correct: false },
            { text: "Pigeon", correct: false },
            { text: "Parrot", correct: false }
        ]
    },
    {
        question: "What is the National Flower of India?",
        answers: [
            { text: "Rose", correct: false },
            { text: "Sunflower", correct: false },
            { text: "Lotus", correct: true },
            { text: "Lily", correct: false }
        ]
    },
    {
        question: "What is the National Tree of India?",
        answers: [
            { text: "Banyan Tree", correct: true },
            { text: "Mango Tree", correct: false },
            { text: "Neem Tree", correct: false },
            { text: "Peepal Tree", correct: false }
        ]
    },
    {
        question: "What is the National Aquatic Animal of India?",
        answers: [
            { text: "Crocodile", correct: false },
            { text: "Ganges River Dolphin", correct: true },
            { text: "Turtle", correct: false },
            { text: "Shark", correct: false }
        ]
    },
    {
        question: "What is the National Fruit of India?",
        answers: [
            { text: "Banana", correct: false },
            { text: "Apple", correct: false },
            { text: "Mango", correct: true },
            { text: "Papaya", correct: false }
        ]
    },
    {
        question: "What is the National Sport of India?",
        answers: [
            { text: "Cricket", correct: false },
            { text: "Hockey", correct: true },
            { text: "Kabaddi", correct: false },
            { text: "Football", correct: false }
        ]
    },
    {
        question: "What is the National Emblem of India?",
        answers: [
            { text: "Ashoka Pillar", correct: true },
            { text: "Lotus Temple", correct: false },
            { text: "India Gate", correct: false },
            { text: "Taj Mahal", correct: false }
        ]
    },
     {
        question: "What is the National Anthem of India?",
        answers: [
            { text: "Vande Mataram", correct: false },
            { text: "Sare Jahan Se Achha", correct: false },
            { text: "Jana Gana Mana", correct: true },
            { text: "Maa Tujhe Salaam", correct: false }
        ]
    },
    {
        question: "What is the National Song of India?",
        answers: [
            { text: "Jana Gana Mana", correct: false },
            { text: "Vande Mataram", correct: true },
            { text: "Ae Mere Watan Ke Logon", correct: false },
            { text: "Sare Jahan Se Achha", correct: false }
        ]
    },
    {
        question: "What is the National Currency of India?",
        answers: [
            { text: "Rupee", correct: true },
            { text: "Taka", correct: false },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: false }
        ]
    },
    {
        question: "Which animal is featured in the National Emblem of India?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Elephant", correct: false },
            { text: "Lion", correct: true },
            { text: "Peacock", correct: false }
        ]
    },
    {
        question: "What is the motto inscribed on the Indian National Emblem?",
        answers: [
            { text: "Satyameva Jayate", correct: true },
            { text: "Vande Mataram", correct: false },
            { text: "Jai Hind", correct: false },
            { text: "Unity in Diversity", correct: false }
        ]
    },
    {
        question: "Which colour in the Indian flag represents courage and sacrifice?",
        answers: [
            { text: "Green", correct: false },
            { text: "White", correct: false },
            { text: "Saffron", correct: true },
            { text: "Blue", correct: false }
        ]
    },
    {
        question: "What does the Ashoka Chakra in the Indian flag represent?",
        answers: [
            { text: "Prosperity", correct: false },
            { text: "Unity", correct: false },
            { text: "Dharma (Righteousness)", correct: true },
            { text: "Power", correct: false }
        ]
    },
    {
        question: "How many spokes are there in the Ashoka Chakra?",
        answers: [
            { text: "20", correct: false },
            { text: "24", correct: true },
            { text: "22", correct: false },
            { text: "18", correct: false }
        ]
    },
    {
        question: "Which is the National River of India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Godavari", correct: false },
            { text: "Ganga", correct: true },
            { text: "Brahmaputra", correct: false }
        ],
        explanation: "The Ganga is considered sacred and is the longest river in India, symbolizing purity and life."
    },
    {
        question: "Which is the National Reptile of India?",
        answers: [
            { text: "Indian Cobra", correct: true },
            { text: "Monitor Lizard", correct: false },
            { text: "Crocodile", correct: false },
            { text: "Python", correct: false }
        ],
        explanation: "The Indian Cobra represents the rich biodiversity of India and is often associated with Indian culture and mythology."
    },
    {
        question: "What is the National Calendar of India?",
        answers: [
            { text: "Julian Calendar", correct: false },
            { text: "Gregorian Calendar", correct: false },
            { text: "Saka Calendar", correct: true },
            { text: "Hindu Calendar", correct: false }
        ],
        explanation: "The Saka Calendar was adopted as the official civil calendar in India alongside the Gregorian calendar."
    },
    {
        question: "What is the National Day of India?",
        answers: [
            { text: "August 15", correct: false },
            { text: "January 26", correct: true },
            { text: "October 2", correct: false },
            { text: "November 14", correct: false }
        ],
        explanation: "January 26 is celebrated as Republic Day, marking the day the Constitution of India came into effect in 1950."
    },
    {
        question: "Which is the National Heritage Animal of India?",
        answers: [
            { text: "Elephant", correct: true },
            { text: "Tiger", correct: false },
            { text: "Rhino", correct: false },
            { text: "Bison", correct: false }
        ],
        explanation: "The Indian Elephant was declared the National Heritage Animal in 2010 to ensure its protection and conservation."
    },
    {
        question: "Which language is inscribed in the Ashoka Chakra below the emblem?",
        answers: [
            { text: "Hindi", correct: false },
            { text: "Pali", correct: false },
            { text: "Devanagari (Sanskrit)", correct: true },
            { text: "Urdu", correct: false }
        ],
        explanation: "The words 'Satyameva Jayate' are written in Devanagari script and are taken from the Mundaka Upanishad."
    },
    {
        question: "What does the green color in the Indian flag stand for?",
        answers: [
            { text: "Courage", correct: false },
            { text: "Faith and Fertility", correct: true },
            { text: "Sacrifice", correct: false },
            { text: "Peace", correct: false }
        ],
        explanation: "Green represents faith, fertility, and the land of India."
    },
    {
        question: "Where is the Taj Mahal located?",
        answers: [
            { text: "Delhi", correct: false },
            { text: "Agra", correct: true },
            { text: "Jaipur", correct: false },
            { text: "Varanasi", correct: false }
        ],
        explanation: "The Taj Mahal, a symbol of love built by Shah Jahan, is located in Agra."
    },
    {
        question: "Who built the Qutub Minar?",
        answers: [
            { text: "Akbar", correct: false },
            { text: "Shah Jahan", correct: false },
            { text: "Qutb-ud-din Aibak", correct: true },
            { text: "Humayun", correct: false }
        ],
        explanation: "Qutub Minar was started by Qutb-ud-din Aibak in 1193 and completed by Iltutmish."
    },
    {
        question: "Which festival is known as the Festival of Lights?",
        answers: [
            { text: "Holi", correct: false },
            { text: "Diwali", correct: true },
            { text: "Eid", correct: false },
            { text: "Christmas", correct: false }
        ],
        explanation: "Diwali is celebrated with lamps, sweets, and fireworks across India."
    },
    {
        question: "What is the main sweet prepared during Pongal?",
        answers: [
            { text: "Gulab Jamun", correct: false },
            { text: "Rasgulla", correct: false },
            { text: "Chakkara Pongal", correct: true },
            { text: "Jalebi", correct: false }
        ],
        explanation: "Chakkara Pongal, a sweet rice dish, is the highlight of the Pongal festival in Tamil Nadu."
    },
     {
        question: "What planet do we live on?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ],
        explanation: "Earth is the only known planet with life."
    },
    {
        question: "Which gas do humans breathe in to survive?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ],
        explanation: "Oxygen is essential for human respiration."
    },
    {
        question: "What do plants need for photosynthesis?",
        answers: [
            { text: "Sunlight, Water, Carbon Dioxide", correct: true },
            { text: "Soil, Wind, Fire", correct: false },
            { text: "Moonlight, Water, Air", correct: false },
            { text: "Heat, Oil, Salt", correct: false }
        ],
        explanation: "Plants convert sunlight, water, and CO₂ into energy using photosynthesis."
    }
];
