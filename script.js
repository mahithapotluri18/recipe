document.addEventListener('DOMContentLoaded', function() {
    // Recipe categories with descriptions
    const categories = {
        breakfast: { 
            title: 'Breakfast Specials', 
            description: 'Start your day with authentic Andhra breakfast dishes',
            icon: 'fa-coffee'
        },
        lunch: { 
            title: 'Lunch Delicacies', 
            description: 'Traditional Andhra lunch recipes with rich flavors',
            icon: 'fa-utensils'
        },
        snacks: { 
            title: 'Evening Snacks', 
            description: 'Spicy and tasty evening snacks from Andhra cuisine',
            icon: 'fa-cookie'
        },
        dinner: { 
            title: 'Dinner Specialties', 
            description: 'Light and delicious dinner options',
            icon: 'fa-moon'
        },
        sweets: { 
            title: 'Traditional Sweets', 
            description: 'Authentic Andhra sweet delicacies',
            icon: 'fa-candy-cane'
        }
    };

    // Sample recipe data with detailed instructions
    const recipes = [
        // Vegetarian Breakfast Recipes
        {
            id: 'b1',
            name: "Idli",
            category: "breakfast",
            type: "veg",
            rating: 4.8,
            image: "assets/breakfast/idli.jpg",
            description: "Soft and fluffy steamed rice cakes served with coconut chutney and sambar",
            prepTime: "8 hours",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "2 cups Parboiled Rice",
                "1 cup Urad Dal",
                "1/2 tsp Fenugreek Seeds",
                "Salt to taste",
                "Water for grinding",
                "Oil for greasing"
            ],
            instructions: [
                "Wash and soak rice and urad dal separately for 4-6 hours",
                "Grind urad dal to a fine, fluffy batter",
                "Grind rice to a slightly coarse batter",
                "Mix both batters with salt",
                "Ferment for 8-10 hours or overnight",
                "Grease idli molds",
                "Pour batter in molds and steam for 10-12 minutes",
                "Serve hot with coconut chutney and sambar"
            ]
        },
        {
            id: 'b2',
            name: "Masala Dosa",
            category: "breakfast",
            type: "veg",
            rating: 4.9,
            image: "assets/breakfast/masala-dosa.jpg",
            description: "Crispy rice pancakes served with potato masala, coconut chutney and sambar",
            prepTime: "8 hours",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "3 cups Dosa Rice",
                "1 cup Urad Dal",
                "1/4 cup Chana Dal",
                "1 tsp Fenugreek Seeds",
                "Salt to taste",
                "Oil for cooking",
                "For Potato Masala:",
                "4 Potatoes",
                "2 Onions",
                "Green Chilies",
                "Curry Leaves",
                "Mustard Seeds",
                "Turmeric Powder"
            ],
            instructions: [
                "Soak rice, dals, and fenugreek seeds for 6 hours",
                "Grind to smooth batter and ferment overnight",
                "Make potato masala with spices",
                "Heat dosa tawa and spread batter in circular motion",
                "Add oil and cook till crispy",
                "Place potato masala and fold",
                "Serve hot with chutneys"
            ]
        },
        {
            id: 'b3',
            name: "Pesarattu",
            category: "breakfast",
            type: "veg",
            rating: 4.7,
            image: "assets/breakfast/pesarattu.jpg",
            description: "Healthy green gram dosa served with ginger chutney",
            prepTime: "6 hours",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "2 cups Green Gram (Moong Dal)",
                "1/2 cup Rice",
                "2-3 Green Chilies",
                "1 inch Ginger",
                "Cumin Seeds",
                "Onions (finely chopped)",
                "Salt to taste",
                "Oil for cooking"
            ],
            instructions: [
                "Soak green gram and rice for 4-6 hours",
                "Grind with green chilies, ginger, and cumin",
                "Make a smooth batter and add salt",
                "Heat dosa tawa and spread batter",
                "Add chopped onions and oil",
                "Cook until crispy",
                "Serve with ginger chutney"
            ]
        },
        {
            id: 'b4',
            name: "Upma",
            category: "breakfast",
            type: "veg",
            rating: 4.6,
            image: "assets/breakfast/upma.jpg",
            description: "Savory semolina breakfast with vegetables and spices",
            prepTime: "10 mins",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "2 cups Semolina (Rava)",
                "1 Onion (chopped)",
                "2 Green Chilies",
                "Curry Leaves",
                "Mustard Seeds",
                "Urad Dal",
                "Chana Dal",
                "Peanuts",
                "Ginger (chopped)",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Dry roast semolina until light brown",
                "Heat oil and add mustard seeds",
                "Add dals, peanuts, and curry leaves",
                "Sauté onions and green chilies",
                "Add water and bring to boil",
                "Add roasted semolina and cook",
                "Garnish with coriander leaves"
            ]
        },
        {
            id: 'b5',
            name: "Andhra Style Poha",
            category: "breakfast",
            type: "veg",
            rating: 4.5,
            image: "assets/breakfast/andhra-poha.jpg",
            description: "Spicy flattened rice with peanuts and curry leaves",
            prepTime: "15 mins",
            cookTime: "15 mins",
            servings: 4,
            ingredients: [
                "3 cups Flattened Rice (Poha)",
                "1 Onion (chopped)",
                "2 Green Chilies",
                "Curry Leaves",
                "1/2 cup Peanuts",
                "Mustard Seeds",
                "Turmeric Powder",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Wash poha and drain completely",
                "Roast peanuts until golden",
                "Heat oil and add mustard seeds",
                "Add onions and green chilies",
                "Add turmeric and poha",
                "Mix well and cook for 5 minutes",
                "Garnish with roasted peanuts"
            ]
        },
        // Non-Vegetarian Breakfast Recipes
        {
            id: 'nb1',
            name: "Andhra Chicken Curry with Rice",
            category: "breakfast",
            type: "nonveg",
            rating: 4.8,
            image: "assets/breakfast/chicken-curry-rice.jpg",
            description: "Spicy morning chicken curry served with steamed rice",
            prepTime: "20 mins",
            cookTime: "40 mins",
            servings: 4,
            ingredients: [
                "500g Chicken",
                "2 Onions",
                "3 Tomatoes",
                "Ginger-Garlic Paste",
                "Green Chilies",
                "Curry Leaves",
                "Red Chili Powder",
                "Coriander Powder",
                "Garam Masala",
                "Oil",
                "Salt to taste",
                "2 cups Rice"
            ],
            instructions: [
                "Cook rice and keep aside",
                "Marinate chicken with spices",
                "Heat oil and sauté onions",
                "Add ginger-garlic paste",
                "Add marinated chicken",
                "Cook until tender",
                "Serve hot with rice"
            ]
        },
        {
            id: 'nb2',
            name: "Kodi Kura with Rice",
            category: "breakfast",
            type: "nonveg",
            rating: 4.7,
            image: "assets/breakfast/kodi-kura.jpg",
            description: "Traditional Andhra chicken curry with green chilies",
            prepTime: "20 mins",
            cookTime: "45 mins",
            servings: 4,
            ingredients: [
                "500g Chicken",
                "4 Green Chilies",
                "2 Onions",
                "2 Tomatoes",
                "Curry Leaves",
                "Ginger-Garlic Paste",
                "Coriander Powder",
                "Red Chili Powder",
                "Garam Masala",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Marinate chicken with spices",
                "Heat oil and temper spices",
                "Add onions and tomatoes",
                "Cook chicken until tender",
                "Add green chilies",
                "Garnish with curry leaves",
                "Serve with hot rice"
            ]
        },
        // Lunch Recipes - Veg
        {
            id: 'l1',
            name: "Gutti Vankaya Curry",
            category: "lunch",
            type: "veg",
            rating: 4.7,
            image: "assets/lunch/guttivankaya.jpg",
            description: "Stuffed brinjal curry with ground peanut masala",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "12-15 Small Brinjals",
                "2 Onions",
                "2 Tomatoes",
                "1/2 cup Peanuts",
                "2 tbsp Sesame Seeds",
                "Curry Leaves",
                "Tamarind",
                "Oil",
                "Spices (Red Chili, Coriander, Cumin)"
            ],
            instructions: [
                "Make cross cuts in brinjals",
                "Roast peanuts and sesame seeds",
                "Grind to make stuffing with spices",
                "Stuff the mixture in brinjals",
                "Cook stuffed brinjals in tamarind gravy",
                "Simmer until brinjals are tender",
                "Garnish with curry leaves"
            ]
        },
        {
            id: 'ln1',
            name: "Andhra Meals Thali",
            category: "lunch",
            type: "veg",
            rating: 4.9,
            image: "assets/lunch/meals-thali.jpg",
            description: "Traditional Andhra style complete meal with rice, curries, and accompaniments",
            prepTime: "1 hour",
            cookTime: "1 hour",
            servings: 4,
            ingredients: [
                "Rice",
                "Dal (Pappu)",
                "Mixed Vegetables",
                "Rasam",
                "Sambar",
                "Curd",
                "Pickle",
                "Papad",
                "Ghee"
            ],
            instructions: [
                "Cook rice until soft and fluffy",
                "Prepare dal with ghee tadka",
                "Make mixed vegetable curry",
                "Prepare rasam and sambar",
                "Serve hot with accompaniments"
            ]
        },
        {
            id: 'ln2',
            name: "Pulihora",
            category: "lunch",
            type: "veg",
            rating: 4.8,
            image: "assets/lunch/pulihora.jpg",
            description: "Tangy tamarind flavored rice with peanuts and spices",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "Rice",
                "Tamarind",
                "Peanuts",
                "Curry Leaves",
                "Mustard Seeds",
                "Chana Dal",
                "Turmeric Powder",
                "Red Chili Powder",
                "Oil"
            ],
            instructions: [
                "Cook rice and let it cool",
                "Prepare tamarind paste",
                "Roast peanuts and spices",
                "Mix with rice and temper",
                "Rest for 30 minutes before serving"
            ]
        },
        {
            id: 'ln3',
            name: "Sambar Rice",
            category: "lunch",
            type: "veg",
            rating: 4.7,
            image: "assets/lunch/sambar-rice.jpg",
            description: "Rice mixed with spicy and tangy sambar",
            prepTime: "30 mins",
            cookTime: "45 mins",
            servings: 4,
            ingredients: [
                "Rice",
                "Toor Dal",
                "Mixed Vegetables",
                "Sambar Powder",
                "Tamarind",
                "Curry Leaves",
                "Mustard Seeds",
                "Ghee"
            ],
            instructions: [
                "Cook rice and dal separately",
                "Prepare sambar with vegetables",
                "Mix rice and sambar",
                "Add final tempering",
                "Serve hot with papad"
            ]
        },
        {
            id: 'ln4',
            name: "Curd Rice",
            category: "lunch",
            type: "veg",
            rating: 4.6,
            image: "assets/lunch/curd-rice.jpg",
            description: "Cooling yogurt rice with pomegranate and tempering",
            prepTime: "15 mins",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "Rice",
                "Fresh Curd",
                "Milk",
                "Green Chilies",
                "Ginger",
                "Curry Leaves",
                "Mustard Seeds",
                "Pomegranate Seeds",
                "Coriander Leaves"
            ],
            instructions: [
                "Mash cooked rice",
                "Mix with curd and milk",
                "Prepare tempering",
                "Garnish with pomegranate",
                "Serve chilled"
            ]
        },
        // Non-Veg Recipes
        {
            id: 'nv1',
            name: "Andhra Style Chicken Biryani",
            category: "lunch",
            type: "nonveg",
            rating: 4.9,
            image: "assets/lunch/biryani.jpg",
            description: "Spicy and aromatic Andhra style chicken biryani",
            prepTime: "30 mins",
            cookTime: "45 mins",
            servings: 4,
            ingredients: [
                "1 kg Basmati Rice",
                "1 kg Chicken",
                "2 cups Yogurt",
                "4 Onions (sliced)",
                "4 Tomatoes (chopped)",
                "2 tbsp Ginger-Garlic Paste",
                "4-5 Green Chilies",
                "2 cups Mint Leaves",
                "1 cup Coriander Leaves",
                "Biryani Masala",
                "Whole Spices",
                "Salt to taste",
                "Oil/Ghee"
            ],
            instructions: [
                "Marinate chicken with yogurt and spices",
                "Soak basmati rice",
                "Prepare biryani masala",
                "Layer rice and chicken",
                "Dum cook for perfect results"
            ]
        },
        // Snacks Recipes
        {
            id: 's1',
            name: "Punugulu",
            category: "snacks",
            type: "veg",
            rating: 4.8,
            image: "assets/snacks/punugulu.jpg",
            description: "Crispy deep-fried snack made from dosa or idli batter",
            prepTime: "10 mins",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "2 cups Dosa/Idli Batter",
                "1 Onion (finely chopped)",
                "2 Green Chilies (finely chopped)",
                "Curry Leaves",
                "1 tsp Cumin Seeds",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Mix dosa/idli batter with chopped onions and chilies",
                "Add cumin seeds and curry leaves",
                "Heat oil in a deep pan",
                "Drop small portions of batter into hot oil",
                "Fry until golden brown",
                "Serve hot with coconut chutney"
            ]
        },
        {
            id: 's2',
            name: "Garelu (Vada)",
            category: "snacks",
            type: "veg",
            rating: 4.7,
            image: "assets/snacks/garelu.jpg",
            description: "Traditional Andhra-style urad dal vada",
            prepTime: "4 hours",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "2 cups Urad Dal",
                "2-3 Green Chilies",
                "1 inch Ginger",
                "Curry Leaves",
                "2 Onions (finely chopped)",
                "Black Pepper",
                "Cumin Seeds",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Soak urad dal for 4 hours",
                "Grind to a fluffy batter without water",
                "Add chopped onions, chilies, and spices",
                "Heat oil in a deep pan",
                "Shape into doughnuts",
                "Deep fry until golden brown",
                "Serve hot with coconut chutney"
            ]
        },
        {
            id: 's3',
            name: "Mirchi Bajji",
            category: "snacks",
            type: "veg",
            rating: 4.9,
            image: "assets/snacks/mirchi-bajji.jpg",
            description: "Spicy stuffed green chilies fritters",
            prepTime: "15 mins",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "8-10 Large Green Chilies",
                "2 cups Besan (Gram Flour)",
                "1/2 cup Rice Flour",
                "1 tsp Red Chili Powder",
                "1/2 tsp Ajwain (Carom Seeds)",
                "Pinch of Turmeric",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Slit green chilies lengthwise",
                "Mix besan, rice flour, and spices",
                "Make thick batter with water",
                "Dip chilies in batter",
                "Deep fry until golden brown",
                "Serve hot with tamarind chutney"
            ]
        },
        {
            id: 's4',
            name: "Chegodilu",
            category: "snacks",
            type: "veg",
            rating: 4.6,
            image: "assets/snacks/chegodilu.jpg",
            description: "Crunchy rice flour rings seasoned with spices",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "2 cups Rice Flour",
                "1/4 cup Sesame Seeds",
                "2 tbsp Cumin Seeds",
                "1 tsp Red Chili Powder",
                "1/4 cup Butter",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Mix rice flour with spices and sesame seeds",
                "Add melted butter and knead to firm dough",
                "Shape into small rings",
                "Deep fry until crispy",
                "Store in airtight container"
            ]
        },
        {
            id: 's5',
            name: "Karam Paniyaram",
            category: "snacks",
            type: "veg",
            rating: 4.7,
            image: "assets/snacks/karam-paniyaram.jpg",
            description: "Spicy rice and lentil dumplings",
            prepTime: "8 hours",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "2 cups Idli Rice",
                "1/2 cup Urad Dal",
                "2 tbsp Chana Dal",
                "Red Chilies",
                "Curry Leaves",
                "Onions (finely chopped)",
                "Oil for cooking",
                "Salt to taste"
            ],
            instructions: [
                "Soak rice and dals separately",
                "Grind to smooth batter",
                "Ferment overnight",
                "Add chopped onions and spices",
                "Pour in paniyaram pan",
                "Cook until golden brown"
            ]
        },
        {
            id: 's6',
            name: "Chakralu",
            category: "snacks",
            type: "veg",
            rating: 4.8,
            image: "assets/snacks/chakralu.jpg",
            description: "Traditional spiral-shaped rice crackers",
            prepTime: "30 mins",
            cookTime: "40 mins",
            servings: 6,
            ingredients: [
                "2 cups Rice Flour",
                "1/4 cup Urad Dal Flour",
                "2 tbsp Sesame Seeds",
                "1 tsp Cumin Seeds",
                "1/4 cup Butter",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Roast urad dal flour until light brown",
                "Mix with rice flour and spices",
                "Add melted butter and make firm dough",
                "Shape into spiral using chakralu maker",
                "Deep fry until crispy golden",
                "Store in airtight container"
            ]
        },
        {
            id: 's7',
            name: "Sundal",
            category: "snacks",
            type: "veg",
            rating: 4.5,
            image: "assets/snacks/sundal.jpg",
            description: "Healthy tempered chickpeas snack",
            prepTime: "8 hours",
            cookTime: "15 mins",
            servings: 4,
            ingredients: [
                "2 cups White Chickpeas",
                "1 Coconut (grated)",
                "2 Green Chilies",
                "Curry Leaves",
                "Mustard Seeds",
                "Urad Dal",
                "Oil for tempering",
                "Salt to taste"
            ],
            instructions: [
                "Soak chickpeas overnight",
                "Pressure cook until soft",
                "Prepare tempering with mustard and dal",
                "Add curry leaves and chilies",
                "Mix with cooked chickpeas",
                "Garnish with coconut"
            ]
        },
        {
            id: 's8',
            name: "Thattai",
            category: "snacks",
            type: "veg",
            rating: 4.6,
            image: "assets/snacks/thattai.jpg",
            description: "Crispy rice crackers with dal and spices",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "2 cups Rice Flour",
                "1/4 cup Urad Dal",
                "2 tbsp Chana Dal",
                "Curry Leaves",
                "Red Chili Powder",
                "Sesame Seeds",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Roast and powder dals",
                "Mix with rice flour and spices",
                "Make firm dough",
                "Roll into small discs",
                "Deep fry until crispy",
                "Cool and store"
            ]
        },
        {
            id: 's9',
            name: "Mixed Vegetable Bajji",
            category: "snacks",
            type: "veg",
            rating: 4.7,
            image: "assets/snacks/veg-bajji.jpg",
            description: "Assorted vegetable fritters in spiced gram flour batter",
            prepTime: "15 mins",
            cookTime: "25 mins",
            servings: 4,
            ingredients: [
                "2 cups Besan (Gram Flour)",
                "Assorted Vegetables (potato, onion, capsicum)",
                "1 tsp Red Chili Powder",
                "1/2 tsp Ajwain",
                "Curry Leaves",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Slice vegetables uniformly",
                "Make spiced besan batter",
                "Dip vegetables in batter",
                "Deep fry until golden",
                "Serve hot with chutney"
            ]
        },
        {
            id: 's10',
            name: "Boondi",
            category: "snacks",
            type: "veg",
            rating: 4.8,
            image: "assets/snacks/boondi.jpg",
            description: "Tiny, crispy gram flour pearls",
            prepTime: "10 mins",
            cookTime: "30 mins",
            servings: 6,
            ingredients: [
                "2 cups Besan (Gram Flour)",
                "1/4 tsp Red Chili Powder",
                "Pinch of Asafoetida",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Sieve besan to remove lumps",
                "Make smooth flowing batter",
                "Use boondi ladle over hot oil",
                "Fry until crispy",
                "Drain excess oil",
                "Season with salt and spices"
            ]
        },
        // Dinner Recipes
        {
            id: 'd1',
            name: "Andhra Chicken Curry",
            category: "dinner",
            type: "nonveg",
            rating: 4.9,
            image: "assets/dinner/andhra-chicken.jpg",
            description: "Spicy and aromatic traditional Andhra style chicken curry",
            prepTime: "20 mins",
            cookTime: "40 mins",
            servings: 4,
            ingredients: [
                "1 kg Chicken",
                "3 Onions (finely chopped)",
                "4 Tomatoes (chopped)",
                "2 tbsp Ginger-Garlic Paste",
                "4-5 Green Chilies",
                "2 tbsp Red Chili Powder",
                "1 tbsp Coriander Powder",
                "1 tsp Turmeric Powder",
                "Curry Leaves",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Marinate chicken with turmeric and salt",
                "Heat oil and sauté onions until golden",
                "Add ginger-garlic paste and cook",
                "Add tomatoes and spice powders",
                "Add marinated chicken and cook",
                "Simmer until chicken is tender",
                "Garnish with curry leaves"
            ]
        },
        {
            id: 'd2',
            name: "Mutton Kura",
            category: "dinner",
            type: "nonveg",
            rating: 4.8,
            image: "assets/dinner/mutton-kura.jpg",
            description: "Rich and spicy Andhra style mutton curry",
            prepTime: "30 mins",
            cookTime: "1 hour",
            servings: 4,
            ingredients: [
                "1 kg Mutton",
                "3 Onions",
                "3 Tomatoes",
                "2 tbsp Ginger-Garlic Paste",
                "2 tbsp Red Chili Powder",
                "1 tbsp Coriander Powder",
                "1 tsp Garam Masala",
                "Curry Leaves",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Pressure cook mutton with basic spices",
                "Prepare masala with onions and tomatoes",
                "Cook mutton in prepared masala",
                "Add garam masala and simmer",
                "Garnish with coriander leaves"
            ]
        },
        {
            id: 'd3',
            name: "Andhra Biryani",
            category: "dinner",
            type: "nonveg",
            rating: 4.9,
            image: "assets/dinner/andhra-biryani.jpg",
            description: "Spicy and flavorful Andhra style biryani",
            prepTime: "40 mins",
            cookTime: "1 hour",
            servings: 6,
            ingredients: [
                "3 cups Basmati Rice",
                "750g Chicken/Mutton",
                "3 Onions (sliced)",
                "2 tbsp Ginger-Garlic Paste",
                "4 Green Chilies",
                "Mint Leaves",
                "Coriander Leaves",
                "Whole Spices",
                "Saffron",
                "Ghee",
                "Salt to taste"
            ],
            instructions: [
                "Marinate meat with yogurt and spices",
                "Cook rice separately with whole spices",
                "Layer rice and meat mixture",
                "Add saffron milk",
                "Cook on dum",
                "Serve with raita"
            ]
        },
        {
            id: 'd4',
            name: "Chepala Pulusu",
            category: "dinner",
            type: "nonveg",
            rating: 4.7,
            image: "assets/dinner/chepala-pulusu.jpg",
            description: "Tangy and spicy fish curry with tamarind",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "500g Fish pieces",
                "2 Onions",
                "2 Tomatoes",
                "Tamarind (lemon sized ball)",
                "2 tbsp Red Chili Powder",
                "1 tsp Turmeric Powder",
                "Curry Leaves",
                "Mustard Seeds",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Clean and marinate fish",
                "Extract tamarind juice",
                "Prepare spicy base with onions",
                "Add tamarind juice and simmer",
                "Add fish pieces and cook",
                "Serve hot with rice"
            ]
        },
        {
            id: 'd5',
            name: "Gongura Mutton",
            category: "dinner",
            type: "nonveg",
            rating: 4.8,
            image: "assets/dinner/gongura-mutton.jpg",
            description: "Spicy mutton curry with sorrel leaves",
            prepTime: "30 mins",
            cookTime: "45 mins",
            servings: 4,
            ingredients: [
                "750g Mutton",
                "2 bunches Gongura (Sorrel Leaves)",
                "3 Onions",
                "2 tbsp Ginger-Garlic Paste",
                "3 Green Chilies",
                "Red Chili Powder",
                "Coriander Powder",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Clean and chop gongura leaves",
                "Cook mutton with basic spices",
                "Prepare gongura paste",
                "Mix cooked mutton with gongura",
                "Simmer until well combined"
            ]
        },
        {
            id: 'd6',
            name: "Vegetable Biryani",
            category: "dinner",
            type: "veg",
            rating: 4.6,
            image: "assets/dinner/veg-biryani.jpg",
            description: "Aromatic rice dish with mixed vegetables",
            prepTime: "30 mins",
            cookTime: "45 mins",
            servings: 4,
            ingredients: [
                "2 cups Basmati Rice",
                "Mixed Vegetables",
                "2 Onions",
                "2 Tomatoes",
                "Biryani Masala",
                "Mint Leaves",
                "Ghee",
                "Whole Spices",
                "Salt to taste"
            ],
            instructions: [
                "Soak rice for 30 minutes",
                "Prepare vegetable masala",
                "Layer rice and vegetables",
                "Add saffron milk",
                "Cook on dum",
                "Serve with raita"
            ]
        },
        {
            id: 'd7',
            name: "Dondakaya Fry",
            category: "dinner",
            type: "veg",
            rating: 4.5,
            image: "assets/dinner/dondakaya-fry.jpg",
            description: "Crispy ivy gourd fry with spices",
            prepTime: "15 mins",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "500g Ivy Gourd",
                "2 tsp Red Chili Powder",
                "1 tsp Coriander Powder",
                "1/2 tsp Cumin Powder",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Clean and slice ivy gourd",
                "Mix with spice powders",
                "Heat oil in pan",
                "Fry until crispy",
                "Serve hot as side dish"
            ]
        },
        {
            id: 'd8',
            name: "Ragi Mudde",
            category: "dinner",
            type: "veg",
            rating: 4.7,
            image: "assets/dinner/ragi-mudde.jpg",
            description: "Healthy finger millet balls",
            prepTime: "10 mins",
            cookTime: "20 mins",
            servings: 4,
            ingredients: [
                "2 cups Ragi Flour",
                "Water",
                "Salt to taste"
            ],
            instructions: [
                "Boil water with salt",
                "Add ragi flour gradually",
                "Stir continuously",
                "Shape into balls",
                "Serve with sambar or curry"
            ]
        },
        {
            id: 'd9',
            name: "Rasam Rice",
            category: "dinner",
            type: "veg",
            rating: 4.6,
            image: "assets/dinner/rasam-rice.jpg",
            description: "Comforting spiced lentil soup with rice",
            prepTime: "15 mins",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "1 cup Toor Dal",
                "2 Tomatoes",
                "Tamarind",
                "Rasam Powder",
                "Curry Leaves",
                "Mustard Seeds",
                "Cumin Seeds",
                "Garlic",
                "Cooked Rice",
                "Salt to taste"
            ],
            instructions: [
                "Cook toor dal until soft",
                "Prepare tamarind extract",
                "Make rasam with spices",
                "Temper with mustard and cumin",
                "Mix with hot rice and serve"
            ]
        },
        {
            id: 'd10',
            name: "Kodi Vepudu",
            category: "dinner",
            type: "nonveg",
            rating: 4.9,
            image: "assets/dinner/kodi-vepudu.jpg",
            description: "Spicy Andhra style chicken fry",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 4,
            ingredients: [
                "500g Chicken",
                "2 Onions",
                "2 tbsp Ginger-Garlic Paste",
                "3 Green Chilies",
                "2 tbsp Red Chili Powder",
                "1 tsp Coriander Powder",
                "Curry Leaves",
                "Oil",
                "Salt to taste"
            ],
            instructions: [
                "Marinate chicken with spices",
                "Heat oil in pan",
                "Add curry leaves and chilies",
                "Cook chicken until brown",
                "Fry until crispy",
                "Garnish with fried curry leaves"
            ]
        },
        // Sweet Recipes
        {
            id: 'sw1',
            name: "Pootharekulu",
            category: "sweets",
            type: "veg",
            rating: 4.9,
            image: "assets/sweets/pootharekulu.jpg",
            description: "Paper-thin sweet rolls filled with sugar and ghee",
            prepTime: "45 mins",
            cookTime: "30 mins",
            servings: 15,
            ingredients: [
                "2 cups Rice Flour",
                "1 cup Powdered Sugar",
                "1/2 cup Ghee",
                "Cardamom Powder",
                "Nuts (optional)"
            ],
            instructions: [
                "Make thin rice paper sheets",
                "Layer with ghee and sugar",
                "Roll carefully",
                "Store in airtight container"
            ]
        },
        {
            id: 'sw2',
            name: "Boorelu",
            category: "sweets",
            type: "veg",
            rating: 4.8,
            image: "assets/sweets/boorelu.jpg",
            description: "Deep-fried sweet dumplings with lentil filling",
            prepTime: "30 mins",
            cookTime: "30 mins",
            servings: 20,
            ingredients: [
                "1 cup Chana Dal",
                "1 cup Jaggery",
                "2 cups Rice Flour",
                "1/2 cup Urad Dal",
                "Cardamom Powder",
                "Oil for deep frying"
            ],
            instructions: [
                "Prepare sweet dal filling",
                "Make outer covering with rice flour",
                "Stuff and shape into balls",
                "Deep fry until golden"
            ]
        },
        {
            id: 'sw3',
            name: "Ariselu",
            category: "sweets",
            type: "veg",
            rating: 4.7,
            image: "assets/sweets/ariselu.jpg",
            description: "Traditional rice flour and jaggery sweet",
            prepTime: "2 hours",
            cookTime: "30 mins",
            servings: 15,
            ingredients: [
                "2 cups Rice Flour",
                "1.5 cups Jaggery",
                "1/4 cup Sesame Seeds",
                "Cardamom Powder",
                "Oil for deep frying"
            ],
            instructions: [
                "Mix rice flour with melted jaggery",
                "Rest the dough for 2 hours",
                "Shape into small discs",
                "Deep fry on medium heat"
            ]
        },
        {
            id: 'sw4',
            name: "Sunnundalu",
            category: "sweets",
            type: "veg",
            rating: 4.6,
            image: "assets/sweets/sunnundalu.jpg",
            description: "Roasted urad dal sweet balls",
            prepTime: "20 mins",
            cookTime: "15 mins",
            servings: 20,
            ingredients: [
                "2 cups Urad Dal",
                "1.5 cups Powdered Sugar",
                "1/2 cup Ghee",
                "Cardamom Powder"
            ],
            instructions: [
                "Roast urad dal until golden",
                "Grind to fine powder",
                "Mix with sugar and ghee",
                "Shape into small balls"
            ]
        },
        {
            id: 'sw5',
            name: "Gavvalu",
            category: "sweets",
            type: "veg",
            rating: 4.8,
            image: "assets/sweets/gavvalu.jpg",
            description: "Shell-shaped sweet crispy snack",
            prepTime: "30 mins",
            cookTime: "45 mins",
            servings: 25,
            ingredients: [
                "2 cups Maida",
                "1/2 cup Sugar",
                "1/4 cup Ghee",
                "Cardamom Powder",
                "Oil for deep frying"
            ],
            instructions: [
                "Prepare firm dough",
                "Shape into small shells",
                "Deep fry until golden",
                "Coat with sugar syrup"
            ]
        }
        // ... Rest of the recipes remain the same
    ];

    // Initialize page
    displayRecipes(recipes);

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm) ||
            recipe.type.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
        updateCategoryTitle(null);
    });

    // Filter by category
    window.filterByCategory = function(category) {
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
        updateCategoryTitle(categories[category]);
        updateActiveMenu(category);
    };

    // Filter by type (veg/nonveg)
    window.filterByType = function(type) {
        const filteredRecipes = recipes.filter(recipe => recipe.type === type);
        displayRecipes(filteredRecipes);
        updateCategoryTitle({
            title: type === 'veg' ? 'Vegetarian Dishes' : 'Non-Vegetarian Specialties',
            description: `Authentic Andhra ${type === 'veg' ? 'vegetarian' : 'non-vegetarian'} recipes`
        });
        updateActiveMenu(type);
    };

    // Show section
    window.showSection = function(section) {
        if (section === 'home') {
            displayRecipes(recipes);
            updateCategoryTitle(null);
        }
        updateActiveMenu(section);
    };

    // Update category title
    function updateCategoryTitle(category) {
        const categoryTitle = document.getElementById('categoryTitle');
        if (category) {
            categoryTitle.style.display = 'block';
            categoryTitle.querySelector('h2').textContent = category.title;
            categoryTitle.querySelector('p').textContent = category.description;
        } else {
            categoryTitle.style.display = 'none';
        }
    }

    // Display recipes function
    function displayRecipes(recipesToShow) {
        const recipeGrid = document.getElementById('recipeGrid');
        recipeGrid.innerHTML = '';

        if (recipesToShow.length === 0) {
            recipeGrid.innerHTML = '<div class="no-recipes">No recipes found</div>';
            return;
        }

        recipesToShow.forEach(recipe => {
            const recipeCard = createRecipeCard(recipe);
            recipeGrid.appendChild(recipeCard);
        });
    }

    // Create recipe card
    function createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => showRecipeDetails(recipe);
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <h3>${recipe.name}</h3>
                <div class="rating">
                    ${generateStars(recipe.rating)}
                </div>
                <p>${recipe.description}</p>
                <div class="tags">
                    <span class="category">${recipe.category}</span>
                    <span class="type">${recipe.type}</span>
                </div>
            </div>
        `;

        return card;
    }

    // Show recipe details in modal
    function showRecipeDetails(recipe) {
        const modal = document.getElementById('recipeModal');
        const detailsDiv = document.getElementById('recipeDetails');

        detailsDiv.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="rating">${generateStars(recipe.rating)}</div>
            <p>${recipe.description}</p>
            
            <div class="recipe-section">
                <h3>Details</h3>
                <p><i class="fas fa-clock"></i> Prep Time: ${recipe.prepTime}</p>
                <p><i class="fas fa-fire"></i> Cook Time: ${recipe.cookTime}</p>
                <p><i class="fas fa-users"></i> Servings: ${recipe.servings}</p>
            </div>

            <div class="recipe-section">
                <h3><i class="fas fa-list"></i> Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>

            <div class="recipe-section">
                <h3><i class="fas fa-tasks"></i> Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;

        modal.style.display = 'block';
    }

    // Close modal
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Generate star rating
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for(let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if(hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        return stars;
    }

    // Update active menu item
    function updateActiveMenu(section) {
        const menuItems = document.querySelectorAll('.menu a');
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('onclick')?.includes(section)) {
                item.classList.add('active');
            }
        });
    }
});
