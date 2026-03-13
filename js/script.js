const recipes = [
  {
    id: 1,
    name: "Egg Omelette",
    cat: "Breakfast",
    cuisine: "Western",
    level: "Easy",
    size: "1 Person",
    prep: "2m",
    cook: "5m",
    total: "7m",
    cal: "150",
    prot: "12g",
    fat: "10g",
    carb: "2g",
    yt: "https://www.youtube.com/embed/ixpYIgHlU60",
    img: "images/10.jpeg",
    ing: "• Eggs – 2\n• Onion – 1\n• Salt/Pepper",
    steps: "1. Whisk eggs.\n2. Fry until golden brown.",
    tips: "Add cheese for more flavor.",
    rating: 5
  },
  {
    id: 2,
    name: "Milk Rice (Kiribath)",
    cat: "Breakfast",
    cuisine: "Sri Lankan",
    level: "Medium",
    size: "4 People",
    prep: "10m",
    cook: "30m",
    total: "40m",
    cal: "400",
    prot: "8g",
    fat: "5g",
    carb: "60g",
    yt: "https://www.youtube.com/embed/NaEffAgzvLc",
    img: "images/9.jpeg",
    ing: "• Rice – 2 cups\n• Coconut Milk\n• Salt",
    steps: "1. Cook rice with water.\n2. Add milk and salt.\n3. Simmer until creamy.",
    tips: "Serve with Lunu Miris.",
    rating: 5
  },
  {
    id: 3,
    name: "String Hoppers",
    cat: "Breakfast",
    cuisine: "Sri Lankan",
    level: "Medium",
    size: "3 People",
    prep: "15m",
    cook: "15m",
    total: "30m",
    cal: "200",
    prot: "5g",
    fat: "2g",
    carb: "50g",
    yt: "https://www.youtube.com/embed/r-rlbFySmcw",
    img: "images/8.jpeg",
    ing: "• Rice flour\n• Hot water",
    steps: "1. Make dough.\n2. Squeeze on mats.\n3. Steam for 10 mins.",
    tips: "Best with Dhal curry.",
    rating: 4
  },
  {
    id: 4,
    name: "Pancakes",
    cat: "Breakfast",
    cuisine: "Western",
    level: "Easy",
    size: "2 People",
    prep: "5m",
    cook: "10m",
    total: "15m",
    cal: "300",
    prot: "8g",
    fat: "6g",
    carb: "45g",
    yt: "https://www.youtube.com/embed/NCMKedZvnyI",
    img: "images/7.jpeg",
    ing: "• Flour\n• Milk\n• Egg",
    steps: "1. Mix batter.\n2. Cook on hot pan.",
    tips: "Top with honey.",
    rating: 5
  },
  {
    id: 5,
    name: "Bread Toast with Butter",
    cat: "Breakfast",
    cuisine: "Western",
    level: "Easy",
    size: "1 Person",
    prep: "2m",
    cook: "3m",
    total: "5m",
    cal: "150",
    prot: "4g",
    fat: "8g",
    carb: "20g",
    yt: "https://www.youtube.com/embed/YFoGGwCOC64",
    img: "images/6.jpeg",
    ing: "• Bread\n• Butter",
    steps: "1. Toast bread.\n2. Apply butter while warm.",
    tips: "Add jam if you like.",
    rating: 4
  },
  {
    id: 6,
    name: "Fruit Salad",
    cat: "Breakfast",
    cuisine: "Global",
    level: "Easy",
    size: "2 People",
    prep: "10m",
    cook: "0m",
    total: "10m",
    cal: "120",
    prot: "1g",
    fat: "0g",
    carb: "30g",
    yt: "https://www.youtube.com/embed/nTm-_KujooY",
    img: "images/5.jpeg",
    ing: "• Banana\n• Papaya\n• Apple",
    steps: "1. Chop fruits.\n2. Mix and chill.",
    tips: "Serve with a scoop of ice cream.",
    rating: 5
  },
  {
    id: 7,
    name: "Boiled Eggs",
    cat: "Breakfast",
    cuisine: "Global",
    level: "Easy",
    size: "1 Person",
    prep: "2m",
    cook: "8m",
    total: "10m",
    cal: "70",
    prot: "6g",
    fat: "5g",
    carb: "1g",
    yt: "https://www.youtube.com/embed/FTha4zARGN4",
    img: "images/4.jpeg",
    ing: "• Eggs",
    steps: "1. Boil eggs for 8 mins.\n2. Peel in cold water.",
    tips: "Use older eggs for easier peeling.",
    rating: 5
  },
  {
    id: 8,
    name: "Vegetable Sandwich",
    cat: "Breakfast",
    cuisine: "Global",
    level: "Easy",
    size: "1 Person",
    prep: "5m",
    cook: "5m",
    total: "10m",
    cal: "200",
    prot: "5g",
    fat: "10g",
    carb: "25g",
    yt: "https://www.youtube.com/embed/mOiuZ51pmX4",
    img: "images/3.jpeg",
    ing: "• Bread\n• Cucumber\n• Tomato",
    steps: "1. Slice veggies.\n2. Layer between bread slices.",
    tips: "Add mayo or cheese.",
    rating: 4
  },
  {
    id: 9,
    name: "Yogurt with Honey",
    cat: "Breakfast",
    cuisine: "Global",
    level: "Easy",
    size: "1 Person",
    prep: "2m",
    cook: "0m",
    total: "2m",
    cal: "120",
    prot: "3g",
    fat: "4g",
    carb: "18g",
    yt: "https://www.youtube.com/embed/MYlSw3eddlw",
    img: "images/2.jpeg",
    ing: "• Yogurt\n• Honey",
    steps: "1. Pour yogurt into bowl.\n2. Mix honey on top.",
    tips: "Add nuts for crunch.",
    rating: 5
  },
  {
    id: 10,
    name: "French Toast",
    cat: "Breakfast",
    cuisine: "Western",
    level: "Easy",
    size: "1 Person",
    prep: "5m",
    cook: "10m",
    total: "15m",
    cal: "250",
    prot: "10g",
    fat: "8g",
    carb: "35g",
    yt: "https://www.youtube.com/embed/sdgroNuyKdI",
    img: "images/1.jpeg",
    ing: "• Bread\n• Egg\n• Milk",
    steps: "1. Soak bread in egg mix.\n2. Fry with butter.",
    tips: "Use thick bread slices.",
    rating: 5
  },

  {
  id: 11,
  name: "Scrambled Eggs",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "3m",
  total: "5m",
  cal: "140",
  prot: "12g",
  fat: "9g",
  carb: "1g",
  yt: "https://www.youtube.com/embed/4bQCck_qO88",
  img: "images/20.jpeg",
  ing: "• Eggs – 2\n• Butter\n• Salt/Pepper",
  steps: "1. Whisk eggs.\n2. Melt butter in pan.\n3. Stir eggs gently until creamy.",
  tips: "Don't overcook to keep them soft.",
  rating: 5
},
{
  id: 12,
  name: "Poha",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: "250",
  prot: "4g",
  fat: "8g",
  carb: "45g",
  yt: "https://www.youtube.com/embed/X35gOeA8l_4",
  img: "images/19.jpeg",
  ing: "• Flattened Rice (Poha)\n• Onion\n• Peanuts\n• Turmeric",
  steps: "1. Rinse poha.\n2. Sauté onions and spices.\n3. Mix in poha and steam for 2 mins.",
  tips: "Add a squeeze of lime at the end.",
  rating: 4
},
{
  id: 13,
  name: "Upma",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "15m",
  total: "20m",
  cal: "180",
  prot: "5g",
  fat: "5g",
  carb: "30g",
  yt: "https://www.youtube.com/embed/NdfBxJzMuFY",
  img: "images/18.jpeg",
  ing: "• Semolina (Rava)\n• Mustard Seeds\n• Vegetables\n• Water",
  steps: "1. Roast rava.\n2. Boil water with veggies.\n3. Slowly add rava and stir until thick.",
  tips: "Use hot water for a fluffier texture.",
  rating: 4
},
{
  id: 14,
  name: "Idli",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Medium",
  size: "4 People",
  prep: "8h",
  cook: "15m",
  total: "8h 15m",
  cal: "50",
  prot: "2g",
  fat: "0g",
  carb: "12g",
  yt: "https://www.youtube.com/embed/Ayo80PIb-Qg",
  img: "images/17.jpeg",
  ing: "• Rice\n• Urad Dal\n• Salt",
  steps: "1. Ferment batter overnight.\n2. Pour into idli molds.\n3. Steam for 10-12 mins.",
  tips: "Grease the molds for easy removal.",
  rating: 5
},
{
  id: 15,
  name: "Dosa",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Medium",
  size: "3 People",
  prep: "8h",
  cook: "5m",
  total: "8h 5m",
  cal: "120",
  prot: "3g",
  fat: "4g",
  carb: "20g",
  yt: "https://www.youtube.com/embed/KPFAAjONfmk",
  img: "images/16.jpeg",
  ing: "• Dosa Batter\n• Oil/Ghee",
  steps: "1. Spread batter on hot tawa.\n2. Drizzle oil.\n3. Cook until crispy and brown.",
  tips: "Keep the flame medium for a crispy finish.",
  rating: 5
},
{
  id: 16,
  name: "Paratha",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "10m",
  total: "25m",
  cal: "250",
  prot: "5g",
  fat: "10g",
  carb: "35g",
  yt: "https://www.youtube.com/embed/nDKNXTc6qok",
  img: "images/15.jpeg",
  ing: "• Wheat Flour\n• Water\n• Oil/Ghee",
  steps: "1. Knead dough.\n2. Roll into circles.\n3. Fry on pan with ghee until golden.",
  tips: "Press the edges for even cooking.",
  rating: 4
},
{
  id: 17,
  name: "Aloo Sandwich",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: "280",
  prot: "6g",
  fat: "12g",
  carb: "40g",
  yt: "https://www.youtube.com/embed/CPr4_t3IPr0",
  img: "images/14.jpeg",
  ing: "• Bread\n• Boiled Potatoes\n• Spices",
  steps: "1. Mash potatoes with spices.\n2. Stuff between bread.\n3. Toast until golden.",
  tips: "Add green chutney for extra spice.",
  rating: 5
},
{
  id: 18,
  name: "Cheese Omelette",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "5m",
  total: "7m",
  cal: "220",
  prot: "15g",
  fat: "16g",
  carb: "2g",
  yt: "https://www.youtube.com/embed/pfXVx9xYXlE",
  img: "images/13.jpeg",
  ing: "• Eggs – 2\n• Cheese\n• Butter",
  steps: "1. Whisk eggs with water.\n2. Pour into pan.\n3. Add cheese and fold.",
  tips: "Use water instead of milk for fluffier eggs.",
  rating: 5
},
{
  id: 19,
  name: "Cornflakes with Milk",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "0m",
  total: "2m",
  cal: "150",
  prot: "7g",
  fat: "1g",
  carb: "25g",
  yt: "https://www.youtube.com/embed/883_6rXhvRE",
  img: "images/12.jpeg",
  ing: "• Cornflakes\n• Milk\n• Honey/Sugar",
  steps: "1. Put flakes in bowl.\n2. Add cold or warm milk.",
  tips: "Add fresh fruits for extra nutrition.",
  rating: 4
},
{
  id: 20,
  name: "Oatmeal Porridge",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "5m",
  total: "7m",
  cal: "160",
  prot: "6g",
  fat: "3g",
  carb: "28g",
  yt: "https://www.youtube.com/embed/AbmCQhxlxqw",
  img: "images/11.jpeg",
  ing: "• Oats\n• Milk/Water\n• Berries",
  steps: "1. Cook oats with liquid.\n2. Stir until thick.\n3. Top with fruit.",
  tips: "Use milk for a creamier texture.",
  rating: 5
},
{
  id: 21,
  name: "Banana Pancake",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "10m",
  total: "15m",
  cal: "220",
  prot: "6g",
  fat: "5g",
  carb: "38g",
  yt: "https://www.youtube.com/embed/NCMKedZvnyI",
  img: "images/30.jpeg",
  ing: "• Ripe Banana\n• Egg\n• Flour",
  steps: "1. Mash banana.\n2. Mix with egg and flour.\n3. Fry in small circles.",
  tips: "The riper the banana, the sweeter the pancake.",
  rating: 5
},
{
  id: 22,
  name: "Sausage and Eggs",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "10m",
  total: "15m",
  cal: "350",
  prot: "18g",
  fat: "25g",
  carb: "3g",
  yt: "https://www.youtube.com/embed/nLU6j6-4juc",
  img: "images/29.jpeg",
  ing: "• Sausages\n• Eggs\n• Cheese",
  steps: "1. Slice and fry sausages.\n2. Pour whisked eggs over sausages.\n3. Add cheese and cook until set.",
  tips: "Garnish with herbs for freshness.",
  rating: 5
},
{
  id: 23,
  name: "Peanut Butter Toast",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "2m",
  total: "4m",
  cal: "280",
  prot: "9g",
  fat: "14g",
  carb: "32g",
  yt: "https://www.youtube.com/embed/5JhGR4jo-P0",
  img: "images/28.jpeg",
  ing: "• Bread\n• Peanut Butter\n• Sliced Banana (optional)",
  steps: "1. Toast the bread slices.\n2. Spread peanut butter evenly.",
  tips: "Add a drizzle of honey for sweetness.",
  rating: 4
},
{
  id: 24,
  name: "Egg Sandwich",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: "310",
  prot: "14g",
  fat: "15g",
  carb: "28g",
  yt: "https://www.youtube.com/embed/qKcCOefgTBk",
  img: "images/27.jpeg",
  ing: "• Eggs\n• Bread Slices\n• Mayonnaise\n• Lettuce",
  steps: "1. Boil or fry eggs.\n2. Layer on bread with mayo and lettuce.",
  tips: "Toast the bread for extra crunch.",
  rating: 5
},
{
  id: 25,
  name: "Roti with Coconut Sambol",
  cat: "Breakfast",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: "380",
  prot: "6g",
  fat: "12g",
  carb: "55g",
  yt: "https://www.youtube.com/embed/71ety_23Ck4",
  img: "images/26.jpeg",
  ing: "• Flour\n• Coconut\n• Chili Powder\n• Onions",
  steps: "1. Make dough for roti and flatten.\n2. Cook on tawa until brown spots appear.\n3. Mix coconut with chili and onion for sambol.",
  tips: "Add lime juice to the sambol for a tangy kick.",
  rating: 5
},
  {
  id: 26,
  name: "Chickpea Salad",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: "210",
  prot: "10g",
  fat: "5g",
  carb: "30g",
  yt: "https://www.youtube.com/embed/c1-dB6iebDE",
  img: "images/25.jpeg",
  ing: "• Boiled Chickpeas\n• Cucumber\n• Tomato\n• Lemon Juice",
  steps: "1. Toss all ingredients in a bowl.\n2. Season with salt and pepper.",
  tips: "Add feta cheese for more flavor.",
  rating: 4
},
{
  id: 27,
  name: "Cheese Toast",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "3m",
  cook: "5m",
  total: "8m",
  cal: "250",
  prot: "10g",
  fat: "12g",
  carb: "24g",
  yt: "https://www.youtube.com/embed/CRSdpY_vI1s",
  img: "images/24.jpeg",
  ing: "• Bread Slices\n• Cheddar Cheese\n• Butter",
  steps: "1. Butter the bread.\n2. Place cheese between slices.\n3. Grill on a pan until cheese melts.",
  tips: "Rub garlic on the toast for extra aroma.",
  rating: 5
},
{
  id: 28,
  name: "Mushroom Omelette",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "7m",
  total: "12m",
  cal: "190",
  prot: "13g",
  fat: "14g",
  carb: "4g",
  yt: "https://www.youtube.com/embed/4BdSvADRF1A",
  img: "images/23.jpeg",
  ing: "• Eggs\n• Mushrooms\n• Onions\n• Chili Powder",
  steps: "1. Sauté mushrooms and onions.\n2. Add salt, pepper, and chili powder.\n3. Pour eggs and cook until firm.",
  tips: "Add coriander at the end for flavor.",
  rating: 4
},
{
  id: 29,
  name: "Avocado Toast",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "3m",
  total: "8m",
  cal: "240",
  prot: "5g",
  fat: "15g",
  carb: "22g",
  yt: "https://www.youtube.com/embed/dP6btliLGy4",
  img: "images/22.jpeg",
  ing: "• Bread\n• Avocado\n• Butter\n• Paprika",
  steps: "1. Toast and butter the bread.\n2. Mash avocado.\n3. Spread on toast and season with paprika.",
  tips: "Rub garlic on the toast before adding avocado.",
  rating: 5
},
{
  id: 30,
  name: "Smoothie Bowl",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: "320",
  prot: "8g",
  fat: "6g",
  carb: "60g",
  yt: "https://www.youtube.com/embed/fXLYqqxB2wc",
  img: "images/21.jpeg",
  ing: "• Frozen Fruits\n• Yogurt\n• Granola\n• Seeds",
  steps: "1. Blend frozen fruits with yogurt.\n2. Pour into a bowl.\n3. Top with granola and seeds.",
  tips: "Use colorful fruits for better presentation.",
  rating: 5
},
{
  id: 31,
  name: "Rice Congee (Kanji)",
  cat: "Breakfast",
  cuisine: "Asian",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "30m",
  total: "35m",
  cal: "180",
  prot: "4g",
  fat: "2g",
  carb: "40g",
  yt: "https://www.youtube.com/embed/HINWgZ1ZCNI",
  img: "images/36.jpeg",
  ing: "• Rice\n• Water/Broth\n• Ginger\n• Green Onion",
  steps: "1. Boil rice with extra water until soft.\n2. Simmer until creamy.\n3. Garnish and serve.",
  tips: "Serve with soy sauce or pickled veggies.",
  rating: 4
},
{
  id: 32,
  name: "Hoppers (Appa)",
  cat: "Breakfast",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "3 People",
  prep: "3h",
  cook: "15m",
  total: "3h 15m",
  cal: "120",
  prot: "2g",
  fat: "4g",
  carb: "18g",
  yt: "https://www.youtube.com/embed/fEMPYgqOd68",
  img: "images/35.jpeg",
  ing: "• Rice Flour\n• Coconut Milk\n• Yeast",
  steps: "1. Ferment batter.\n2. Pour into hopper pan.\n3. Cook until edges crisp.",
  tips: "Keep batter slightly thin.",
  rating: 5
},
{
  id: 33,
  name: "Egg Hoppers",
  cat: "Breakfast",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "3 People",
  prep: "3h",
  cook: "20m",
  total: "3h 20m",
  cal: "190",
  prot: "8g",
  fat: "9g",
  carb: "18g",
  yt: "https://www.youtube.com/embed/4Lpxq2nbgAQ",
  img: "images/34.jpeg",
  ing: "• Hopper Batter\n• Eggs\n• Pepper",
  steps: "1. Pour batter in pan.\n2. Crack egg in center.\n3. Cover and cook.",
  tips: "Add black pepper on egg.",
  rating: 5
},
{
  id: 34,
  name: "Steamed Buns",
  cat: "Breakfast",
  cuisine: "Asian",
  level: "Medium",
  size: "4 People",
  prep: "1h",
  cook: "20m",
  total: "1h 20m",
  cal: "210",
  prot: "5g",
  fat: "3g",
  carb: "40g",
  yt: "https://www.youtube.com/embed/EqGPF-kRKeM",
  img: "images/33.jpeg",
  ing: "• Flour\n• Yeast\n• Sugar\n• Warm Water",
  steps: "1. Knead dough.\n2. Shape buns.\n3. Steam for 20 minutes.",
  tips: "Warm water helps activate yeast.",
  rating: 4
},
{
  id: 35,
  name: "Cottage Cheese Toast",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "10m",
  total: "15m",
  cal: "260",
  prot: "15g",
  fat: "9g",
  carb: "28g",
  yt: "https://www.youtube.com/embed/JAI5hImcZec",
  img: "images/32.jpeg",
  ing: "• Whole Grain Bread\n• Cottage Cheese\n• Egg",
  steps: "1. Mix cheese and egg.\n2. Spread on bread.\n3. Bake 10 minutes.",
  tips: "Add herbs for flavor.",
  rating: 5
},
{
  id: 36,
  name: "Vegetable Upma",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "10m",
  total: "15m",
  cal: "220",
  prot: "6g",
  fat: "7g",
  carb: "34g",
  yt: "https://www.youtube.com/embed/zCz2BXJgjPI",
  img: "images/31.jpeg",
  ing: "• Rava\n• Vegetables\n• Curry Leaves",
  steps: "1. Roast rava.\n2. Cook vegetables.\n3. Mix and cook.",
  tips: "Add ghee for better taste.",
  rating: 5
},
{
  id: 218,
  name: "Oatmeal with Fruits",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: "250",
  prot: "7g",
  fat: "5g",
  carb: "45g",
  yt: "https://youtube.com/shorts/g3Un2prjsWk",
  img: "images/218.jpeg",
  ing: "• Oats\n• Milk\n• Fresh Fruits",
  steps: "1. Cook oats with milk.\n2. Top with fruits.",
  tips: "Use almond milk for flavor.",
  rating: 5
},

 {
  id: 37,
  name: "Chicken Rice & Curry",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "2 People",
  prep: "20m",
  cook: "30m",
  total: "50m",
  cal: 520,
  prot: 28,
  fat: 22,
  carb: 48,
  yt: "https://www.youtube.com/embed/J0LAvL4G_cA",
  img: "images/50.jpeg",
  ing: "• Chicken\n• Rice\n• Curry Spices\n• Coconut Milk",
  steps: "1. Cook rice.\n2. Prepare chicken curry.\n3. Serve with side curries.",
  tips: "Use fresh curry leaves for aroma.",
  rating: 5
},
{
  id: 38,
  name: "Egg Fried Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 420,
  prot: 14,
  fat: 12,
  carb: 60,
  yt: "https://www.youtube.com/embed/hiOoNEnmByw",
  img: "images/49.jpeg",
  ing: "• Rice\n• Eggs\n• Vegetables\n• Soy Sauce",
  steps: "1. Scramble eggs.\n2. Add rice and veggies.\n3. Stir-fry with sauce.",
  tips: "Use cold rice for best texture.",
  rating: 5
},
{
  id: 39,
  name: "Fish Ambulthiyal",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "25m",
  total: "40m",
  cal: 360,
  prot: 26,
  fat: 18,
  carb: 8,
  yt: "https://www.youtube.com/embed/JhnUsUVuczw",
  img: "images/48.jpeg",
  ing: "• Fish\n• Goraka\n• Garlic\n• Spices",
  steps: "1. Marinate fish.\n2. Cook with spices.\n3. Simmer until dry.",
  tips: "Cook on low heat for best flavor.",
  rating: 5
},
{
  id: 40,
  name: "Vegetable Pasta",
  cat: "Dinner",
  cuisine: "Italian",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 410,
  prot: 12,
  fat: 10,
  carb: 65,
  yt: "https://www.youtube.com/embed/Nl03DLVzYkQ",
  img: "images/47.jpeg",
  ing: "• Pasta\n• Vegetables\n• Olive Oil\n• Garlic",
  steps: "1. Boil pasta.\n2. Sauté veggies.\n3. Mix together.",
  tips: "Add parmesan for extra taste.",
  rating: 4
},
{
  id: 41,
  name: "Dhal Curry",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 280,
  prot: 12,
  fat: 9,
  carb: 35,
  yt: "https://www.youtube.com/embed/e8XfJ-fQjDg",
  img: "images/46.jpeg",
  ing: "• Red Lentils\n• Coconut Milk\n• Spices",
  steps: "1. Boil lentils.\n2. Add spices.\n3. Simmer with coconut milk.",
  tips: "Temper with mustard seeds.",
  rating: 5
},
{
  id: 42,
  name: "Beef Burger",
  cat: "Fast Food",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 550,
  prot: 25,
  fat: 30,
  carb: 45,
  yt: "https://www.youtube.com/embed/6v5ZIMDQpng",
  img: "images/45.jpeg",
  ing: "• Beef Patty\n• Bun\n• Cheese\n• Lettuce",
  steps: "1. Grill patty.\n2. Toast bun.\n3. Assemble burger.",
  tips: "Add caramelized onions.",
  rating: 5
},
{
  id: 43,
  name: "Yellow Rice",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "3 People",
  prep: "15m",
  cook: "25m",
  total: "40m",
  cal: 390,
  prot: 7,
  fat: 11,
  carb: 65,
  yt: "https://www.youtube.com/embed/QfnjEmauU38",
  img: "images/44.jpeg",
  ing: "• Rice\n• Turmeric\n• Coconut Milk\n• Spices",
  steps: "1. Wash rice.\n2. Cook with spices.\n3. Steam until done.",
  tips: "Use pandan leaf for aroma.",
  rating: 5
},
{
  id: 44,
  name: "Chicken Biryani",
  cat: "Dinner",
  cuisine: "Indian",
  level: "Hard",
  size: "3 People",
  prep: "30m",
  cook: "40m",
  total: "1h 10m",
  cal: 600,
  prot: 32,
  fat: 25,
  carb: 70,
  yt: "https://www.youtube.com/embed/Mve7xXFwrgY",
  img: "images/43.jpeg",
  ing: "• Chicken\n• Basmati Rice\n• Yogurt\n• Spices",
  steps: "1. Marinate chicken.\n2. Cook rice.\n3. Layer and steam.",
  tips: "Seal pot with dough.",
  rating: 5
},
{
  id: 45,
  name: "Grilled Salmon",
  cat: "Dinner",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "12m",
  total: "17m",
  cal: 380,
  prot: 30,
  fat: 22,
  carb: 2,
  yt: "https://www.youtube.com/embed/n7SJ2hOgqOc",
  img: "images/42.jpeg",
  ing: "• Salmon\n• Lemon\n• Garlic\n• Butter",
  steps: "1. Season fish.\n2. Grill until flaky.",
  tips: "Do not overcook salmon.",
  rating: 5
},
{
  id: 46,
  name: "Caesar Salad",
  cat: "Salad",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: 260,
  prot: 9,
  fat: 18,
  carb: 15,
  yt: "https://www.youtube.com/embed/iA7vjDuL1FY",
  img: "images/41.jpeg",
  ing: "• Lettuce\n• Croutons\n• Cheese\n• Dressing",
  steps: "1. Chop lettuce.\n2. Mix dressing.\n3. Toss together.",
  tips: "Add grilled chicken for protein.",
  rating: 4
},
{
  id: 47,
  name: "Lamprais",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Hard",
  size: "3 People",
  prep: "45m",
  cook: "1h",
  total: "1h 45m",
  cal: 650,
  prot: 35,
  fat: 28,
  carb: 70,
  yt: "https://www.youtube.com/embed/B4srr3C78AE",
  img: "images/40.jpeg",
  ing: "• Rice\n• Meat Curry\n• Banana Leaf",
  steps: "1. Prepare curries.\n2. Wrap in leaf.\n3. Bake.",
  tips: "Wrap tightly for flavor.",
  rating: 5
},
{
  id: 48,
  name: "Vegetable Fried Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 390,
  prot: 10,
  fat: 9,
  carb: 62,
  yt: "https://www.youtube.com/embed/g1Zbx81LlbE",
  img: "images/39.jpeg",
  ing: "• Rice\n• Vegetables\n• Soy Sauce\n• Garlic",
  steps: "1. Stir-fry veggies.\n2. Add rice.\n3. Mix well.",
  tips: "High heat gives best taste.",
  rating: 4
},
{
  id: 49,
  name: "Chicken Kottu",
  cat: "Dinner",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: 540,
  prot: 26,
  fat: 20,
  carb: 55,
  yt: "https://www.youtube.com/embed/mQb5KqYnsE4",
  img: "images/38.jpeg",
  ing: "• Godamba Roti\n• Chicken\n• Eggs\n• Vegetables",
  steps: "1. Chop roti.\n2. Stir-fry ingredients.\n3. Mix together.",
  tips: "Add cheese for richness.",
  rating: 5
},
{
  id: 50,
  name: "Pasta Carbonara",
  cat: "Dinner",
  cuisine: "Italian",
  level: "Medium",
  size: "2 People",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 560,
  prot: 20,
  fat: 24,
  carb: 65,
  yt: "https://www.youtube.com/embed/jlcFwYwiuwY",
  img: "images/37.jpeg",
  ing: "• Pasta\n• Eggs\n• Bacon\n• Cheese",
  steps: "1. Boil pasta.\n2. Mix eggs and cheese.\n3. Combine with bacon.",
  tips: "Mix off heat to avoid scrambling.",
  rating: 5
},
{
  id: 51,
  name: "Fish and Chips",
  cat: "Dinner",
  cuisine: "Western",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "20m",
  total: "35m",
  cal: 620,
  prot: 28,
  fat: 30,
  carb: 60,
  yt: "https://www.youtube.com/embed/QnseoKlu53k",
  img: "images/70.jpeg",
  ing: "• Fish Fillet\n• Potatoes\n• Flour\n• Oil",
  steps: "1. Batter fish.\n2. Fry potatoes.\n3. Deep fry fish.",
  tips: "Serve with tartar sauce.",
  rating: 5
},
{
  id: 52,
  name: "Chicken Wraps",
  cat: "Lunch",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 420,
  prot: 24,
  fat: 14,
  carb: 45,
  yt: "https://www.youtube.com/embed/UJi0fS1SxHg",
  img: "images/69.jpeg",
  ing: "• Tortilla\n• Chicken\n• Lettuce\n• Sauce",
  steps: "1. Grill chicken.\n2. Fill wrap.\n3. Roll tightly.",
  tips: "Warm tortilla before wrapping.",
  rating: 4
},
{
  id: 53,
  name: "Dal Palak",
  cat: "Lunch",
  cuisine: "Indian",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 290,
  prot: 14,
  fat: 8,
  carb: 38,
  yt: "https://www.youtube.com/embed/HZ67I0Ry3wI",
  img: "images/68.jpeg",
  ing: "• Lentils\n• Spinach\n• Spices\n• Onion",
  steps: "1. Boil lentils.\n2. Add spinach.\n3. Season well.",
  tips: "Use fresh spinach.",
  rating: 5
},
{
  id: 54,
  name: "Tomato Soup",
  cat: "Soup",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 180,
  prot: 5,
  fat: 6,
  carb: 28,
  yt: "https://www.youtube.com/embed/ojkZE8mTSgo",
  img: "images/67.jpeg",
  ing: "• Tomatoes\n• Onion\n• Garlic\n• Cream",
  steps: "1. Boil tomatoes.\n2. Blend.\n3. Simmer.",
  tips: "Add basil for aroma.",
  rating: 4
},
{
  id: 55,
  name: "Shrimp Scampi",
  cat: "Dinner",
  cuisine: "Western",
  level: "Medium",
  size: "2 People",
  prep: "10m",
  cook: "12m",
  total: "22m",
  cal: 430,
  prot: 26,
  fat: 22,
  carb: 18,
  yt: "https://www.youtube.com/embed/6lG_ZoF8ozk",
  img: "images/66.jpeg",
  ing: "• Shrimp\n• Garlic\n• Butter\n• Lemon",
  steps: "1. Sauté garlic.\n2. Add shrimp.\n3. Finish with lemon.",
  tips: "Do not overcook shrimp.",
  rating: 5
},
{
  id: 56,
  name: "Lentil Soup",
  cat: "Soup",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "25m",
  total: "35m",
  cal: 240,
  prot: 12,
  fat: 6,
  carb: 35,
  yt: "https://www.youtube.com/embed/mdT3tFEug00",
  img: "images/65.jpeg",
  ing: "• Lentils\n• Carrot\n• Onion\n• Spices",
  steps: "1. Boil lentils.\n2. Add veggies.\n3. Simmer.",
  tips: "Blend for creamy texture.",
  rating: 4
},
{
  id: 57,
  name: "Pork Curry",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "3 People",
  prep: "20m",
  cook: "40m",
  total: "1h",
  cal: 580,
  prot: 32,
  fat: 35,
  carb: 18,
  yt: "https://www.youtube.com/embed/fsgv96h26l8",
  img: "images/64.jpeg",
  ing: "• Pork\n• Spices\n• Coconut Milk\n• Onion",
  steps: "1. Marinate pork.\n2. Cook with spices.\n3. Simmer.",
  tips: "Cook slowly for softness.",
  rating: 5
},
{
  id: 58,
  name: "Vegetable Biryani",
  cat: "Dinner",
  cuisine: "Indian",
  level: "Medium",
  size: "3 People",
  prep: "20m",
  cook: "30m",
  total: "50m",
  cal: 480,
  prot: 14,
  fat: 16,
  carb: 68,
  yt: "https://www.youtube.com/embed/S5Ngh6CFRmc",
  img: "images/63.jpeg",
  ing: "• Rice\n• Vegetables\n• Spices\n• Yogurt",
  steps: "1. Cook veggies.\n2. Parboil rice.\n3. Layer and steam.",
  tips: "Use saffron for aroma.",
  rating: 5
},
{
  id: 59,
  name: "Quinoa Salad",
  cat: "Salad",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 310,
  prot: 11,
  fat: 9,
  carb: 42,
  yt: "https://www.youtube.com/embed/OQ9mU_zAtEs",
  img: "images/62.jpeg",
  ing: "• Quinoa\n• Tomato\n• Cucumber\n• Lemon",
  steps: "1. Cook quinoa.\n2. Mix veggies.\n3. Toss together.",
  tips: "Add feta cheese.",
  rating: 4
},
{
  id: 60,
  name: "Sushi Rolls",
  cat: "Dinner",
  cuisine: "Japanese",
  level: "Hard",
  size: "2 People",
  prep: "25m",
  cook: "20m",
  total: "45m",
  cal: 420,
  prot: 18,
  fat: 8,
  carb: 65,
  yt: "https://www.youtube.com/embed/-w8XAgkXCcE",
  img: "images/61.jpeg",
  ing: "• Sushi Rice\n• Nori\n• Fish\n• Veggies",
  steps: "1. Prepare rice.\n2. Fill rolls.\n3. Slice.",
  tips: "Wet knife before cutting.",
  rating: 5
},
{
  id: 61,
  name: "Club Sandwich",
  cat: "Lunch",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "5m",
  total: "15m",
  cal: 450,
  prot: 22,
  fat: 20,
  carb: 42,
  yt: "https://www.youtube.com/embed/S_1_ZSMxRfg",
  img: "images/60.jpeg",
  ing: "• Bread\n• Chicken\n• Egg\n• Lettuce",
  steps: "1. Toast bread.\n2. Layer fillings.\n3. Cut.",
  tips: "Secure with toothpicks.",
  rating: 4
},
{
  id: 62,
  name: "Steak & Veggies",
  cat: "Dinner",
  cuisine: "Western",
  level: "Medium",
  size: "1 Person",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 520,
  prot: 34,
  fat: 28,
  carb: 15,
  yt: "https://www.youtube.com/embed/QnyixFnDgps",
  img: "images/59.jpeg",
  ing: "• Beef Steak\n• Vegetables\n• Butter\n• Garlic",
  steps: "1. Season steak.\n2. Grill.\n3. Cook veggies.",
  tips: "Rest steak before cutting.",
  rating: 5
},
{
  id: 63,
  name: "Falafel Wrap",
  cat: "Lunch",
  cuisine: "Middle Eastern",
  level: "Medium",
  size: "1 Person",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: 410,
  prot: 14,
  fat: 16,
  carb: 48,
  yt: "https://www.youtube.com/embed/H2JaY19xHJo",
  img: "images/58.jpeg",
  ing: "• Chickpeas\n• Spices\n• Wrap\n• Sauce",
  steps: "1. Fry falafel.\n2. Fill wrap.\n3. Roll.",
  tips: "Serve with tahini.",
  rating: 4
},
{
  id: 64,
  name: "Pad Thai",
  cat: "Dinner",
  cuisine: "Thai",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: 510,
  prot: 22,
  fat: 18,
  carb: 62,
  yt: "https://www.youtube.com/embed/BXUBhqMJrLs",
  img: "images/57.jpeg",
  ing: "• Rice Noodles\n• Shrimp\n• Egg\n• Sauce",
  steps: "1. Soak noodles.\n2. Stir-fry.\n3. Add sauce.",
  tips: "Use tamarind for taste.",
  rating: 5
},
{
  id: 65,
  name: "Mutton Curry",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Hard",
  size: "3 People",
  prep: "25m",
  cook: "1h",
  total: "1h 25m",
  cal: 640,
  prot: 36,
  fat: 40,
  carb: 15,
  yt: "https://www.youtube.com/embed/be43DZG54pA",
  img: "images/56.jpeg",
  ing: "• Mutton\n• Spices\n• Coconut Milk\n• Onion",
  steps: "1. Marinate.\n2. Cook slowly.\n3. Simmer.",
  tips: "Pressure cook for softness.",
  rating: 5
},
{
  id: 66,
  name: "Tuna Salad",
  cat: "Salad",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: 260,
  prot: 22,
  fat: 12,
  carb: 10,
  yt: "https://www.youtube.com/embed/zAyvDHy7ntw",
  img: "images/55.jpeg",
  ing: "• Tuna\n• Mayo\n• Onion\n• Lettuce",
  steps: "1. Mix tuna.\n2. Add veggies.\n3. Serve.",
  tips: "Use Greek yogurt instead of mayo.",
  rating: 4
},
{
  id: 67,
  name: "Stir Fry Beef",
  cat: "Dinner",
  cuisine: "Asian",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "12m",
  total: "27m",
  cal: 480,
  prot: 30,
  fat: 22,
  carb: 25,
  yt: "https://www.youtube.com/embed/BBABeZjlRM8",
  img: "images/54.jpeg",
  ing: "• Beef\n• Vegetables\n• Soy Sauce\n• Garlic",
  steps: "1. Slice beef.\n2. Stir-fry.\n3. Add sauce.",
  tips: "Cook on high heat.",
  rating: 5
},
{
  id: 68,
  name: "Couscous with Veggies",
  cat: "Dinner",
  cuisine: "Mediterranean",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 350,
  prot: 10,
  fat: 8,
  carb: 55,
  yt: "https://www.youtube.com/embed/OFcVMYOo52U",
  img: "images/53.jpeg",
  ing: "• Couscous\n• Vegetables\n• Olive Oil\n• Herbs",
  steps: "1. Soak couscous.\n2. Cook veggies.\n3. Mix.",
  tips: "Add lemon juice.",
  rating: 4
},
{
  id: 69,
  name: "Chicken Noodle Soup",
  cat: "Soup",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "15m",
  cook: "25m",
  total: "40m",
  cal: 280,
  prot: 18,
  fat: 6,
  carb: 32,
  yt: "https://www.youtube.com/embed/evKMiaVfjvI",
  img: "images/52.jpeg",
  ing: "• Chicken\n• Noodles\n• Carrot\n• Garlic",
  steps: "1. Boil chicken.\n2. Add veggies and noodles.\n3. Simmer.",
  tips: "Add ginger for flavor.",
  rating: 5
},
{
  id: 70,
  name: "Paneer Tikka",
  cat: "Dinner",
  cuisine: "Indian",
  level: "Medium",
  size: "2 People",
  prep: "20m",
  cook: "15m",
  total: "35m",
  cal: 360,
  prot: 20,
  fat: 22,
  carb: 18,
  yt: "https://www.youtube.com/embed/hsR0JaD1TyA",
  img: "images/51.jpeg",
  ing: "• Paneer\n• Yogurt\n• Spices\n• Capsicum",
  steps: "1. Marinate paneer.\n2. Grill.\n3. Serve hot.",
  tips: "Use mustard oil for aroma.",
  rating: 5
},

{
  id: 71,
  name: "Chicken Salad Sandwich",
  cat: "Lunch",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 420,
  prot: 22,
  fat: 16,
  carb: 42,
  yt: "https://www.youtube.com/embed/-XEULqGe_Jw",
  img: "images/90.jpeg",
  ing: "• Chicken\n• Bread\n• Mayo\n• Lettuce",
  steps: "1. Mix chicken salad.\n2. Fill bread.\n3. Serve.",
  tips: "Toast bread lightly.",
  rating: 4
},

{
  id: 72,
  name: "Vegetable Wrap",
  cat: "Lunch",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "5m",
  total: "15m",
  cal: 330,
  prot: 9,
  fat: 10,
  carb: 48,
  yt: "https://www.youtube.com/embed/5r3vjmrXXmI",
  img: "images/89.jpeg",
  ing: "• Tortilla\n• Vegetables\n• Sauce\n• Cheese",
  steps: "1. Cook veggies.\n2. Fill wrap.\n3. Roll.",
  tips: "Add hummus for taste.",
  rating: 4
},

{
  id: 73,
  name: "Rice and Curry",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "3 People",
  prep: "25m",
  cook: "35m",
  total: "1h",
  cal: 540,
  prot: 20,
  fat: 22,
  carb: 62,
  yt: "https://www.youtube.com/embed/zUaQW-zEa8M",
  img: "images/88.jpeg",
  ing: "• Rice\n• Curries\n• Sambol\n• Papadam",
  steps: "1. Cook rice.\n2. Prepare curries.\n3. Serve together.",
  tips: "Serve hot with sambol.",
  rating: 5
},

{
  id: 74,
  name: "Potato Curry",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Easy",
  size: "4 People",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 180,
  prot: 3,
  fat: 12,
  carb: 22,
  yt: "https://www.youtube.com/embed/k4Su_9NdraE",
  img: "images/219.jpeg",
  ing: "• Potatoes\n• Coconut milk\n• Turmeric & Curry powder",
  steps: "1. Peel potatoes.\n2. Cook with spices.\n3. Add coconut milk.",
  tips: "Add cinnamon for aroma.",
  rating: 5
},

{
  id: 75,
  name: "Grilled Chicken",
  cat: "Dinner",
  cuisine: "Western",
  level: "Easy",
  size: "2 People",
  prep: "15m",
  cook: "20m",
  total: "35m",
  cal: 430,
  prot: 35,
  fat: 18,
  carb: 5,
  yt: "https://www.youtube.com/embed/qLL7mzXEnXA",
  img: "images/86.jpeg",
  ing: "• Chicken\n• Spices\n• Lemon\n• Garlic",
  steps: "1. Marinate chicken.\n2. Grill.\n3. Serve.",
  tips: "Baste with butter.",
  rating: 5
},

{
  id: 76,
  name: "String Hoppers with Curry",
  cat: "Breakfast",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "3 People",
  prep: "30m",
  cook: "20m",
  total: "50m",
  cal: 380,
  prot: 10,
  fat: 9,
  carb: 62,
  yt: "https://www.youtube.com/embed/jrY0pay3RGo",
  img: "images/85.jpeg",
  ing: "• Rice Flour\n• Curry\n• Coconut Sambol",
  steps: "1. Steam string hoppers.\n2. Prepare curry.\n3. Serve.",
  tips: "Serve with kiri hodi.",
  rating: 5
},

{
  id: 77,
  name: "Egg Fried Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 410,
  prot: 13,
  fat: 11,
  carb: 58,
  yt: "https://www.youtube.com/embed/hiOoNEnmByw",
  img: "images/84.jpeg",
  ing: "• Rice\n• Eggs\n• Vegetables\n• Soy Sauce",
  steps: "1. Scramble eggs.\n2. Add rice.\n3. Stir-fry.",
  tips: "Use leftover rice.",
  rating: 4
},

{
  id: 78,
  name: "Vegetable Noodles",
  cat: "Dinner",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 370,
  prot: 9,
  fat: 8,
  carb: 60,
  yt: "https://www.youtube.com/embed/xWZeQBLV6q4",
  img: "images/83.jpeg",
  ing: "• Noodles\n• Vegetables\n• Sauce\n• Garlic",
  steps: "1. Boil noodles.\n2. Stir-fry veggies.\n3. Mix.",
  tips: "Add chili sauce.",
  rating: 4
},

{
  id: 79,
  name: "Chapati with Curry",
  cat: "Dinner",
  cuisine: "Indian",
  level: "Easy",
  size: "2 People",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: 390,
  prot: 11,
  fat: 10,
  carb: 58,
  yt: "https://www.youtube.com/embed/C__UDXwC-kM",
  img: "images/82.jpeg",
  ing: "• Chapati\n• Curry\n• Flour\n• Oil",
  steps: "1. Cook chapati.\n2. Prepare curry.\n3. Serve.",
  tips: "Brush chapati with ghee.",
  rating: 4
},

{
  id: 80,
  name: "Tuna Sandwich",
  cat: "Lunch",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: 360,
  prot: 20,
  fat: 14,
  carb: 38,
  yt: "https://www.youtube.com/embed/L0O2tt7VAC8",
  img: "images/81.jpeg",
  ing: "• Tuna\n• Bread\n• Mayo\n• Lettuce",
  steps: "1. Mix tuna.\n2. Spread on bread.\n3. Serve.",
  tips: "Add cucumber slices.",
  rating: 4
},
{
  id: 81,
  name: "Masala Omelette",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "7m",
  total: "12m",
  cal: 220,
  prot: 14,
  fat: 16,
  carb: 4,
  yt: "https://www.youtube.com/embed/Mle9Vks2u84",
  img: "images/80.jpeg",
  ing: "• Eggs\n• Onion\n• Chili\n• Spices",
  steps: "1. Beat eggs.\n2. Add spices.\n3. Fry.",
  tips: "Add coriander leaves.",
  rating: 5
},

{
  id: 82,
  name: "Chicken Curry with Rice",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "2 People",
  prep: "20m",
  cook: "30m",
  total: "50m",
  cal: 520,
  prot: 28,
  fat: 22,
  carb: 48,
  yt: "https://www.youtube.com/embed/AoPqKq4Wv_E",
  img: "images/79.jpeg",
  ing: "• Chicken\n• Rice\n• Spices\n• Coconut Milk",
  steps: "1. Cook curry.\n2. Boil rice.\n3. Serve.",
  tips: "Add pandan leaf.",
  rating: 5
},
{
  id: 83,
  name: "Vegetable Fried Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 380,
  prot: 9,
  fat: 8,
  carb: 60,
  yt: "https://www.youtube.com/embed/2y-g-eNFzoI",
  img: "images/78.jpeg",
  ing: "• Rice\n• Vegetables\n• Soy Sauce\n• Garlic",
  steps: "1. Stir-fry veggies.\n2. Add rice.\n3. Mix.",
  tips: "Use sesame oil.",
  rating: 4
},
{
  id: 84,
  name: "Fish Ambul Thiyal with Rice",
  cat: "Lunch",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "25m",
  total: "40m",
  cal: 460,
  prot: 24,
  fat: 16,
  carb: 52,
  yt: "https://www.youtube.com/embed/kfz2-qvPxEY",
  img: "images/77.jpeg",
  ing: "• Fish\n• Rice\n• Goraka\n• Spices",
  steps: "1. Cook fish.\n2. Prepare rice.\n3. Serve.",
  tips: "Best with red rice.",
  rating: 5
},

{
  id: 85,
  name: "Egg Noodles",
  cat: "Dinner",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 400,
  prot: 12,
  fat: 10,
  carb: 62,
  yt: "https://www.youtube.com/embed/eLyghmKIsCo",
  img: "images/76.jpeg",
  ing: "• Egg Noodles\n• Vegetables\n• Sauce\n• Garlic",
  steps: "1. Boil noodles.\n2. Stir-fry veggies.\n3. Mix.",
  tips: "Add fried egg topping.",
  rating: 4
},

   {
  id: 86,
  name: "Chicken Chop Suey",
  cat: "Dinner",
  cuisine: "Chinese",
  level: "Easy",
  size: "2 People",
  prep: "15m",
  cook: "20m",
  total: "35m",
  cal: 420,
  prot: 26,
  fat: 14,
  carb: 38,
  yt: "https://www.youtube.com/embed/o24f1309xL4",
  img: "images/75.jpeg",
  ing: "• Chicken\n• Cabbage\n• Carrot\n• Soy Sauce\n• Garlic",
  steps: "1. Cook chicken.\n2. Stir-fry vegetables.\n3. Add sauce and mix.",
  tips: "Use high heat for better taste.",
  rating: 4
},
{
  id: 87,
  name: "Vegetable Pasta",
  cat: "Dinner",
  cuisine: "Italian",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 360,
  prot: 11,
  fat: 9,
  carb: 58,
  yt: "https://www.youtube.com/embed/Av1-7HXtxGY",
  img: "images/74.jpeg",
  ing: "• Pasta\n• Vegetables\n• Tomato Sauce\n• Cheese",
  steps: "1. Boil pasta.\n2. Cook vegetables.\n3. Mix with sauce.",
  tips: "Add oregano for aroma.",
  rating: 4
},
{
  id: 88,
  name: "Grilled Fish with Vegetables",
  cat: "Dinner",
  cuisine: "Western",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "20m",
  total: "35m",
  cal: 390,
  prot: 30,
  fat: 12,
  carb: 20,
  yt: "https://www.youtube.com/embed/fs9ScjF4J0Q",
  img: "images/73.jpeg",
  ing: "• Fish\n• Vegetables\n• Lemon\n• Pepper\n• Olive Oil",
  steps: "1. Marinate fish.\n2. Grill fish.\n3. Serve with vegetables.",
  tips: "Do not overcook fish.",
  rating: 5
},
{
  id: 89,
  name: "Cheese Sandwich",
  cat: "Breakfast",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 310,
  prot: 12,
  fat: 15,
  carb: 32,
  yt: "https://www.youtube.com/embed/cr70vljvx3Y",
  img: "images/72.jpeg",
  ing: "• Bread\n• Cheese\n• Butter\n• Pepper",
  steps: "1. Place cheese on bread.\n2. Grill sandwich.\n3. Serve hot.",
  tips: "Add tomato slices.",
  rating: 4
},
{
  id: 90,
  name: "Tomato Soup with Bread",
  cat: "Soup",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 210,
  prot: 6,
  fat: 5,
  carb: 32,
  yt: "https://www.youtube.com/embed/5K8xMOHTz8Y",
  img: "images/71.jpeg",
  ing: "• Tomato\n• Onion\n• Garlic\n• Bread\n• Butter",
  steps: "1. Boil tomatoes.\n2. Blend.\n3. Simmer.",
  tips: "Add cream for richness.",
  rating: 4
},
{
  id: 91,
  name: "Fried Chicken with Salad",
  cat: "Dinner",
  cuisine: "Western",
  level: "Medium",
  size: "2 People",
  prep: "20m",
  cook: "25m",
  total: "45m",
  cal: 520,
  prot: 32,
  fat: 26,
  carb: 34,
  yt: "https://www.youtube.com/embed/aRz7laupAzg",
  img: "images/108.jpeg",
  ing: "• Chicken\n• Flour\n• Spices\n• Oil\n• Salad",
  steps: "1. Coat chicken.\n2. Deep fry.\n3. Serve with salad.",
  tips: "Marinate overnight.",
  rating: 5
},
{
  id: 92,
  name: "Vegetable Paratha with Curry",
  cat: "Breakfast",
  cuisine: "Indian",
  level: "Medium",
  size: "2 People",
  prep: "20m",
  cook: "15m",
  total: "35m",
  cal: 410,
  prot: 12,
  fat: 14,
  carb: 58,
  yt: "https://www.youtube.com/embed/eH-qwiLlijo",
  img: "images/107.jpeg",
  ing: "• Wheat Flour\n• Vegetables\n• Spices\n• Curry",
  steps: "1. Prepare dough.\n2. Cook paratha.\n3. Serve with curry.",
  tips: "Apply butter on top.",
  rating: 4
},
{
  id: 93,
  name: "Beef Stir Fry with Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "20m",
  total: "35m",
  cal: 540,
  prot: 30,
  fat: 22,
  carb: 50,
  yt: "https://www.youtube.com/embed/BBABeZjlRM8",
  img: "images/106.jpeg",
  ing: "• Beef\n• Rice\n• Vegetables\n• Soy Sauce\n• Garlic",
  steps: "1. Fry beef.\n2. Add vegetables.\n3. Serve with rice.",
  tips: "Slice beef thinly.",
  rating: 5
},
{
  id: 94,
  name: "Mushroom Soup",
  cat: "Soup",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 190,
  prot: 7,
  fat: 6,
  carb: 24,
  yt: "https://www.youtube.com/embed/g-PT9hK8wPM",
  img: "images/105.jpeg",
  ing: "• Mushroom\n• Onion\n• Garlic\n• Cream\n• Butter",
  steps: "1. Fry mushrooms.\n2. Blend.\n3. Simmer.",
  tips: "Add black pepper.",
  rating: 4
},
{
  id: 95,
  name: "Tuna Fried Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 430,
  prot: 18,
  fat: 12,
  carb: 58,
  yt: "https://www.youtube.com/embed/y6ElFdcz3aU",
  img: "images/104.jpeg",
  ing: "• Rice\n• Tuna\n• Egg\n• Vegetables\n• Soy Sauce",
  steps: "1. Fry egg.\n2. Add tuna and rice.\n3. Stir-fry.",
  tips: "Use cold rice.",
  rating: 4
},
{
  id: 96,
  name: "Chicken Spring Rolls",
  cat: "Snack",
  cuisine: "Asian",
  level: "Medium",
  size: "2 People",
  prep: "25m",
  cook: "15m",
  total: "40m",
  cal: 460,
  prot: 20,
  fat: 18,
  carb: 50,
  yt: "https://www.youtube.com/embed/wIQmCCK_Qg0",
  img: "images/103.jpeg",
  ing: "• Chicken\n• Spring Roll Sheets\n• Vegetables\n• Oil",
  steps: "1. Prepare filling.\n2. Roll sheets.\n3. Deep fry.",
  tips: "Seal edges well.",
  rating: 5
},
{
  id: 97,
  name: "Vegetable Stew with Bread",
  cat: "Dinner",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "15m",
  cook: "25m",
  total: "40m",
  cal: 320,
  prot: 9,
  fat: 8,
  carb: 48,
  yt: "https://www.youtube.com/embed/Yl0tp79502I",
  img: "images/102.jpeg",
  ing: "• Vegetables\n• Onion\n• Tomato\n• Stock\n• Bread",
  steps: "1. Cook vegetables.\n2. Add stock.\n3. Simmer.",
  tips: "Serve hot.",
  rating: 4
},
{
  id: 98,
  name: "Seafood Noodles",
  cat: "Dinner",
  cuisine: "Asian",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: 450,
  prot: 26,
  fat: 14,
  carb: 55,
  yt: "https://www.youtube.com/embed/aWaw9m_qJaM",
  img: "images/101.jpeg",
  ing: "• Noodles\n• Shrimp\n• Squid\n• Vegetables\n• Sauce",
  steps: "1. Boil noodles.\n2. Fry seafood.\n3. Mix together.",
  tips: "Do not overcook seafood.",
  rating: 5
},
{
  id: 99,
  name: "Omelette with Toast",
  cat: "Breakfast",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "7m",
  total: "12m",
  cal: 260,
  prot: 14,
  fat: 16,
  carb: 18,
  yt: "https://www.youtube.com/embed/ny5ssI8VVHQ",
  img: "images/100.jpeg",
  ing: "• Eggs\n• Bread\n• Butter\n• Pepper\n• Salt",
  steps: "1. Beat eggs.\n2. Fry omelette.\n3. Toast bread.",
  tips: "Add cheese for extra taste.",
  rating: 4
},
{
  id: 100,
  name: "Chicken Wrap",
  cat: "Lunch",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 420,
  prot: 24,
  fat: 14,
  carb: 42,
  yt: "https://www.youtube.com/embed/qzsAA5zRHu4",
  img: "images/99.jpeg",
  ing: "• Chicken\n• Tortilla\n• Lettuce\n• Sauce\n• Cheese",
  steps: "1. Cook chicken.\n2. Fill wrap.\n3. Roll and serve.",
  tips: "Warm tortilla first.",
  rating: 5
},
{
  id: 101,
  name: "Vegetable Kottu",
  cat: "Dinner",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "2 People",
  prep: "20m",
  cook: "20m",
  total: "40m",
  cal: 480,
  prot: 14,
  fat: 16,
  carb: 62,
  yt: "https://www.youtube.com/embed/Z_XXx0aDgao",
  img: "images/98.jpeg",
  ing: "• Roti\n• Vegetables\n• Egg\n• Spices\n• Onion",
  steps: "1. Chop roti.\n2. Stir-fry veggies.\n3. Mix together.",
  tips: "Use curry leaves.",
  rating: 5
},
{
  id: 102,
  name: "Prawn Fried Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Medium",
  size: "1 Person",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 460,
  prot: 22,
  fat: 12,
  carb: 60,
  yt: "https://www.youtube.com/embed/14wDNuNDru8",
  img: "images/97.jpeg",
  ing: "• Rice\n• Prawns\n• Egg\n• Vegetables\n• Soy Sauce",
  steps: "1. Fry prawns.\n2. Add egg and rice.\n3. Stir-fry.",
  tips: "Use sesame oil.",
  rating: 5
},
{
  id: 103,
  name: "Chicken Sausage Pasta",
  cat: "Dinner",
  cuisine: "Italian",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 410,
  prot: 20,
  fat: 14,
  carb: 52,
  yt: "https://www.youtube.com/embed/HISXkib7tvY",
  img: "images/96.jpeg",
  ing: "• Pasta\n• Chicken Sausage\n• Tomato Sauce\n• Garlic",
  steps: "1. Boil pasta.\n2. Fry sausage.\n3. Mix with sauce.",
  tips: "Add basil leaves.",
  rating: 4
},
{
  id: 104,
  name: "Lentil Soup",
  cat: "Soup",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "25m",
  total: "35m",
  cal: 200,
  prot: 12,
  fat: 4,
  carb: 30,
  yt: "https://www.youtube.com/embed/ZKiDyHjdPl8",
  img: "images/95.jpeg",
  ing: "• Lentils\n• Onion\n• Garlic\n• Tomato\n• Spices",
  steps: "1. Boil lentils.\n2. Add spices.\n3. Simmer.",
  tips: "Blend for smooth texture.",
  rating: 4
},
{
  id: 105,
  name: "Chapati with Egg Curry",
  cat: "Dinner",
  cuisine: "Indian",
  level: "Medium",
  size: "2 People",
  prep: "20m",
  cook: "20m",
  total: "40m",
  cal: 440,
  prot: 18,
  fat: 16,
  carb: 56,
  yt: "https://www.youtube.com/embed/fS9o6q8zCZk",
  img: "images/94.jpeg",
  ing: "• Chapati\n• Eggs\n• Onion\n• Spices\n• Tomato",
  steps: "1. Prepare curry.\n2. Cook chapati.\n3. Serve together.",
  tips: "Use coconut milk.",
  rating: 5
},
{
  id: 106,
  name: "Baked Potatoes with Cheese",
  cat: "Snack",
  cuisine: "Western",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "30m",
  total: "40m",
  cal: 380,
  prot: 12,
  fat: 14,
  carb: 52,
  yt: "https://www.youtube.com/embed/gv3Yn3nYvHA",
  img: "images/93.jpeg",
  ing: "• Potatoes\n• Cheese\n• Butter\n• Pepper\n• Salt",
  steps: "1. Bake potatoes.\n2. Add cheese.\n3. Melt and serve.",
  tips: "Top with herbs.",
  rating: 4
},
{
  id: 107,
  name: "Fried Tofu with Rice",
  cat: "Lunch",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 420,
  prot: 20,
  fat: 16,
  carb: 48,
  yt: "https://www.youtube.com/embed/kZ9a72tGfZY",
  img: "images/92.jpeg",
  ing: "• Tofu\n• Rice\n• Soy Sauce\n• Garlic\n• Vegetables",
  steps: "1. Fry tofu.\n2. Cook rice.\n3. Serve together.",
  tips: "Marinate tofu first.",
  rating: 4
},
{
  id: 108,
  name: "Chicken Fried Momos",
  cat: "Snack",
  cuisine: "Asian",
  level: "Medium",
  size: "2 People",
  prep: "25m",
  cook: "20m",
  total: "45m",
  cal: 480,
  prot: 24,
  fat: 20,
  carb: 50,
  yt: "https://www.youtube.com/embed/B8nJGYHAAsw",
  img: "images/91.jpeg",
  ing: "• Momo Wrappers\n• Chicken\n• Onion\n• Spices\n• Oil",
  steps: "1. Prepare filling.\n2. Shape momos.\n3. Fry until crispy.",
  tips: "Serve with chili sauce.",
  rating: 5
},

  {
  id: 109,
  name: "Chocolate Brownie",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "8 Pieces",
  prep: "20m",
  cook: "25m",
  total: "45m",
  cal: 400,
  prot: 5,
  fat: 20,
  carb: 50,
  yt: "https://www.youtube.com/embed/uNsdP-md3MA",
  img: "images/143.jpeg",
  ing: "Chocolate\nButter\nSugar\nEggs\nFlour",
  steps: "Mix ingredients\nBake at 180°C\nCool and serve",
  tips: "Do not overbake for fudgy brownies",
  rating: 4.7
},
{
  id: 110,
  name: "Vanilla Cake",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "12 Slices",
  prep: "30m",
  cook: "35m",
  total: "65m",
  cal: 350,
  prot: 6,
  fat: 15,
  carb: 45,
  yt: "https://www.youtube.com/embed/6HhUnblF3Vk",
  img: "images/142.jpeg",
  ing: "Flour\nSugar\nButter\nEggs\nVanilla Extract",
  steps: "Mix ingredients\nPour into pan\nBake\nCool and frost",
  tips: "Sift flour for a fluffier texture",
  rating: 4.5
},
{
  id: 111,
  name: "Cheesecake",
  cat: "Dessert",
  cuisine: "American",
  level: "Hard",
  size: "8 Slices",
  prep: "40m",
  cook: "50m",
  total: "90m",
  cal: 450,
  prot: 8,
  fat: 28,
  carb: 35,
  yt: "https://www.youtube.com/embed/Mfig-pIyh-g",
  img: "images/141.jpeg",
  ing: "Cream Cheese\nSugar\nEggs\nGraham Crackers\nButter",
  steps: "Prepare crust\nMix filling\nBake\nChill",
  tips: "Chill overnight for best texture",
  rating: 4.8
},
{
  id: 112,
  name: "Fruit Trifle",
  cat: "Dessert",
  cuisine: "British",
  level: "Easy",
  size: "6 Servings",
  prep: "20m",
  cook: "0m",
  total: "20m",
  cal: 250,
  prot: 5,
  fat: 10,
  carb: 35,
  yt: "https://www.youtube.com/embed/X4rOUNivYwc",
  img: "images/140.jpeg",
  ing: "Cake\nCustard\nWhipped Cream\nMixed Fruits",
  steps: "Layer cake\nAdd custard\nTop with cream and fruits",
  tips: "Use fresh seasonal fruits",
  rating: 4.6
},
{
  id: 113,
  name: "Chocolate Mousse",
  cat: "Dessert",
  cuisine: "French",
  level: "Medium",
  size: "4 Servings",
  prep: "20m",
  cook: "0m",
  total: "20m",
  cal: 300,
  prot: 6,
  fat: 20,
  carb: 25,
  yt: "https://www.youtube.com/embed/YO74CgACqEY",
  img: "images/139.jpeg",
  ing: "Chocolate\nCream\nSugar\nEggs",
  steps: "Melt chocolate\nWhip cream\nFold together\nChill",
  tips: "Use high-quality chocolate",
  rating: 4.7
},
{
  id: 114,
  name: "Donut",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "6 Pieces",
  prep: "25m",
  cook: "10m",
  total: "35m",
  cal: 250,
  prot: 4,
  fat: 12,
  carb: 30,
  yt: "https://www.youtube.com/embed/OS1bu8p8GZk",
  img: "images/138.jpeg",
  ing: "Flour\nSugar\nYeast\nMilk\nOil",
  steps: "Prepare dough\nShape donuts\nFry or bake\nGlaze",
  tips: "Let dough rise well",
  rating: 4.5
},
{
  id: 115,
  name: "Tiramisu",
  cat: "Dessert",
  cuisine: "Italian",
  level: "Hard",
  size: "6 Servings",
  prep: "30m",
  cook: "0m",
  total: "30m",
  cal: 400,
  prot: 7,
  fat: 25,
  carb: 35,
  yt: "https://www.youtube.com/embed/7VTtenyKRg4",
  img: "images/137.jpeg",
  ing: "Mascarpone\nCoffee\nLadyfingers\nSugar\nCocoa Powder",
  steps: "Layer soaked ladyfingers\nAdd cream\nChill\nDust cocoa",
  tips: "Use strong coffee for flavor",
  rating: 4.8
},
{
  id: 116,
  name: "Banana Split",
  cat: "Dessert",
  cuisine: "American",
  level: "Easy",
  size: "1 Serving",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: 350,
  prot: 5,
  fat: 18,
  carb: 45,
  yt: "https://www.youtube.com/embed/-eE9LDIOKOQ",
  img: "images/136.jpeg",
  ing: "Banana\nIce Cream\nChocolate Syrup\nWhipped Cream\nNuts",
  steps: "Slice banana\nAdd ice cream\nTop with syrup and nuts",
  tips: "Use ripe bananas",
  rating: 4.6
},
{
  id: 117,
  name: "Apple Pie",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "8 Slices",
  prep: "30m",
  cook: "50m",
  total: "80m",
  cal: 300,
  prot: 3,
  fat: 15,
  carb: 40,
  yt: "https://www.youtube.com/embed/rIIYB-cg26s",
  img: "images/135.jpeg",
  ing: "Apples\nFlour\nButter\nSugar\nCinnamon",
  steps: "Prepare crust\nSlice apples\nAssemble pie\nBake",
  tips: "Use tart apples for best flavor",
  rating: 4.7
},
{
  id: 118,
  name: "Churros",
  cat: "Dessert",
  cuisine: "Spanish",
  level: "Medium",
  size: "6 Pieces",
  prep: "20m",
  cook: "15m",
  total: "35m",
  cal: 250,
  prot: 3,
  fat: 12,
  carb: 30,
  yt: "https://www.youtube.com/embed/VYqoOiQsV0A",
  img: "images/134.jpeg",
  ing: "Flour\nWater\nSugar\nCinnamon\nOil",
  steps: "Prepare dough\nPipe into oil\nFry\nCoat with sugar",
  tips: "Keep oil at constant temperature",
  rating: 4.6
},
{
  id: 119,
  name: "Strawberry Shortcake",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "6 Servings",
  prep: "25m",
  cook: "15m",
  total: "40m",
  cal: 300,
  prot: 4,
  fat: 12,
  carb: 40,
  yt: "https://www.youtube.com/embed/m6i9FVgkc0c",
  img: "images/133.jpeg",
  ing: "Strawberries\nCake\nWhipped Cream\nSugar",
  steps: "Layer cake with cream and strawberries\nChill and serve",
  tips: "Use fresh strawberries",
  rating: 4.7
},
{
  id: 120,
  name: "Gulab Jamun",
  cat: "Dessert",
  cuisine: "Indian",
  level: "Medium",
  size: "8 Pieces",
  prep: "20m",
  cook: "20m",
  total: "40m",
  cal: 200,
  prot: 3,
  fat: 10,
  carb: 25,
  yt: "https://www.youtube.com/embed/J3O0ZEJYLFQ",
  img: "images/132.jpeg",
  ing: "Milk Powder\nFlour\nSugar\nGhee\nCardamom",
  steps: "Prepare dough\nShape balls\nFry\nSoak in syrup",
  tips: "Ensure syrup is warm, not hot",
  rating: 4.6
},
{
  id: 121,
  name: "Rasgulla",
  cat: "Dessert",
  cuisine: "Indian",
  level: "Medium",
  size: "8 Pieces",
  prep: "20m",
  cook: "25m",
  total: "45m",
  cal: 150,
  prot: 4,
  fat: 5,
  carb: 25,
  yt: "https://www.youtube.com/embed/c_ZkvfLuCsE",
  img: "images/131.jpeg",
  ing: "Paneer\nSugar\nWater\nCardamom",
  steps: "Prepare paneer balls\nBoil in syrup\nCool and serve",
  tips: "Use fresh paneer",
  rating: 4.5
},
{
  id: 122,
  name: "Kulfi",
  cat: "Dessert",
  cuisine: "Indian",
  level: "Medium",
  size: "6 Servings",
  prep: "15m",
  cook: "60m",
  total: "75m",
  cal: 250,
  prot: 5,
  fat: 15,
  carb: 25,
  yt: "https://www.youtube.com/embed/9dpsNhLtfLc",
  img: "images/144.jpeg",
  ing: "Milk\nSugar\nCardamom\nNuts",
  steps: "Boil milk\nAdd sugar and flavoring\nFreeze in molds",
  tips: "Stir occasionally for creamy texture",
  rating: 4.6
},
{
  id: 123,
  name: "Panna Cotta",
  cat: "Dessert",
  cuisine: "Italian",
  level: "Medium",
  size: "4 Servings",
  prep: "15m",
  cook: "5m",
  total: "20m",
  cal: 200,
  prot: 4,
  fat: 12,
  carb: 20,
  yt: "https://www.youtube.com/embed/9B0jfDSdVAU",
  img: "images/130.jpeg",
  ing: "Cream\nSugar\nGelatin\nVanilla",
  steps: "Heat cream and sugar\nAdd gelatin\nPour into molds\nChill",
  tips: "Do not boil cream",
  rating: 4.7
},
{
  id: 124,
  name: "Macarons",
  cat: "Dessert",
  cuisine: "French",
  level: "Hard",
  size: "12 Pieces",
  prep: "45m",
  cook: "15m",
  total: "60m",
  cal: 100,
  prot: 2,
  fat: 5,
  carb: 12,
  yt: "https://www.youtube.com/embed/MjVgIXccYXA",
  img: "images/129.jpeg",
  ing: "Almond Flour\nEgg Whites\nSugar\nFood Coloring\nButtercream",
  steps: "Prepare meringue\nFold in almond flour\nPipe onto tray\nBake\nFill with cream",
  tips: "Sift almond flour to avoid lumps",
  rating: 4.8
},
{
  id: 125,
  name: "Lava Cake",
  cat: "Dessert",
  cuisine: "French",
  level: "Medium",
  size: "4 Servings",
  prep: "15m",
  cook: "12m",
  total: "27m",
  cal: 350,
  prot: 6,
  fat: 20,
  carb: 30,
  yt: "https://www.youtube.com/embed/goGyZhuUydA",
  img: "images/128.jpeg",
  ing: "Chocolate\nButter\nEggs\nSugar\nFlour",
  steps: "Melt chocolate\nMix ingredients\nBake in ramekins\nServe warm",
  tips: "Serve immediately for molten center",
  rating: 4.7
},
{
  id: 126,
  name: "Milk Pudding",
  cat: "Dessert",
  cuisine: "International",
  level: "Easy",
  size: "4 Servings",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 200,
  prot: 5,
  fat: 8,
  carb: 25,
  yt: "https://www.youtube.com/embed/uJOD7Ta5s5s",
  img: "images/127.jpeg",
  ing: "Milk\nSugar\nCornstarch\nVanilla",
  steps: "Heat milk\nMix cornstarch and sugar\nCook until thick\nChill",
  tips: "Stir continuously to avoid lumps",
  rating: 4.6
},
{
  id: 127,
  name: "Bread Pudding",
  cat: "Dessert",
  cuisine: "British",
  level: "Medium",
  size: "6 Servings",
  prep: "15m",
  cook: "45m",
  total: "60m",
  cal: 300,
  prot: 6,
  fat: 12,
  carb: 40,
  yt: "https://www.youtube.com/embed/e0C7Bqz6H8w",
  img: "images/126.jpeg",
  ing: "Bread\nMilk\nEggs\nSugar\nButter\nRaisins",
  steps: "Cube bread\nMix with custard\nBake\nServe warm",
  tips: "Use slightly stale bread for best texture",
  rating: 4.7
},
{
  id: 128,
  name: "Coconut Toffee",
  cat: "Dessert",
  cuisine: "International",
  level: "Medium",
  size: "10 Pieces",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 150,
  prot: 1,
  fat: 10,
  carb: 15,
  yt: "https://www.youtube.com/embed/lBZutYUi2b4",
  img: "images/125.jpeg",
  ing: "Coconut\nSugar\nButter",
  steps: "Cook sugar and butter\nAdd coconut\nPour onto tray\nCool and cut",
  tips: "Stir continuously to avoid burning",
  rating: 4.5
},
{
  id: 129,
  name: "Ice Cream Sundae",
  cat: "Dessert",
  cuisine: "American",
  level: "Easy",
  size: "1 Serving",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 400,
  prot: 5,
  fat: 20,
  carb: 50,
  yt: "https://www.youtube.com/embed/tQHxKL-XuUc",
  img: "images/124.jpeg",
  ing: "Ice Cream\nChocolate Syrup\nWhipped Cream\nCherries\nNuts",
  steps: "Scoop ice cream\nAdd toppings\nServe immediately",
  tips: "Use cold bowls to prevent melting",
  rating: 4.7
},
{
  id: 130,
  name: "Custard Tart",
  cat: "Dessert",
  cuisine: "British",
  level: "Medium",
  size: "6 Servings",
  prep: "20m",
  cook: "30m",
  total: "50m",
  cal: 250,
  prot: 5,
  fat: 12,
  carb: 30,
  yt: "https://www.youtube.com/embed/fEf1cMnaPkY",
  img: "images/123.jpeg",
  ing: "Flour\nButter\nSugar\nEggs\nMilk",
  steps: "Prepare crust\nMix custard\nBake\nCool before serving",
  tips: "Blind bake crust for a crisp base",
  rating: 4.6
},
{
  id: 131,
  name: "Mango Pudding",
  cat: "Dessert",
  cuisine: "Asian",
  level: "Easy",
  size: "4 Servings",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 180,
  prot: 3,
  fat: 8,
  carb: 25,
  yt: "https://www.youtube.com/embed/1mamxKOS16g",
  img: "images/122.jpeg",
  ing: "Mango Puree\nMilk\nSugar\nGelatin",
  steps: "Mix ingredients\nHeat gently\nPour into molds\nChill",
  tips: "Use ripe mangoes for best flavor",
  rating: 4.7
},
{
  id: 132,
  name: "Peanut Brittle",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "12 Pieces",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 150,
  prot: 3,
  fat: 8,
  carb: 18,
  yt: "https://www.youtube.com/embed/BXQqZrp0VWY",
  img: "images/121.jpeg",
  ing: "Peanuts\nSugar\nButter\nBaking Soda",
  steps: "Cook sugar\nAdd peanuts\nStir in baking soda\nPour and cool",
  tips: "Work quickly before it hardens",
  rating: 4.6
},
{
  id: 133,
  name: "Waffle with Syrup",
  cat: "Dessert",
  cuisine: "Belgian",
  level: "Easy",
  size: "2 Servings",
  prep: "10m",
  cook: "5m",
  total: "15m",
  cal: 300,
  prot: 6,
  fat: 12,
  carb: 40,
  yt: "https://www.youtube.com/embed/WWlLH6kfVmQ",
  img: "images/120.jpeg",
  ing: "Flour\nEggs\nMilk\nSugar\nButter",
  steps: "Prepare batter\nCook in waffle iron\nServe with syrup",
  tips: "Preheat waffle iron well",
  rating: 4.6
},
{
  id: 134,
  name: "Rice Flour Cake",
  cat: "Dessert",
  cuisine: "Asian",
  level: "Medium",
  size: "6 Servings",
  prep: "15m",
  cook: "30m",
  total: "45m",
  cal: 200,
  prot: 4,
  fat: 6,
  carb: 35,
  yt: "https://www.youtube.com/embed/6KiZ_u_CkzU",
  img: "images/119.jpeg",
  ing: "Rice Flour\nSugar\nEggs\nCoconut Milk",
  steps: "Mix ingredients\nPour into pan\nSteam or bake\nCool",
  tips: "Use smooth batter for fluffy cake",
  rating: 4.5
},
{
  id: 135,
  name: "Chocolate Fudge",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "12 Pieces",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 250,
  prot: 3,
  fat: 12,
  carb: 30,
  yt: "https://www.youtube.com/embed/0Ah1zy2aVMc",
  img: "images/118.jpeg",
  ing: "Chocolate\nCondensed Milk\nButter\nSugar",
  steps: "Melt chocolate and butter\nMix in condensed milk\nPour into tray\nChill",
  tips: "Cut after fully set",
  rating: 4.7
},
{
  id: 136,
  name: "Apple Tart",
  cat: "Dessert",
  cuisine: "French",
  level: "Medium",
  size: "6 Servings",
  prep: "20m",
  cook: "30m",
  total: "50m",
  cal: 250,
  prot: 3,
  fat: 12,
  carb: 35,
  yt: "https://www.youtube.com/embed/qg4OZE-DXJw",
  img: "images/117.jpeg",
  ing: "Apples\nFlour\nButter\nSugar\nCinnamon",
  steps: "Prepare crust\nSlice apples\nAssemble tart\nBake",
  tips: "Brush apples with butter for shine",
  rating: 4.6
},
{
  id: 137,
  name: "Bread & Butter Pudding",
  cat: "Dessert",
  cuisine: "British",
  level: "Medium",
  size: "6 Servings",
  prep: "15m",
  cook: "45m",
  total: "60m",
  cal: 300,
  prot: 6,
  fat: 12,
  carb: 40,
  yt: "https://www.youtube.com/embed/1jkdq0TM_Wo",
  img: "images/116.jpeg",
  ing: "Bread\nButter\nEggs\nMilk\nSugar\nRaisins",
  steps: "Butter bread\nMix custard\nAssemble in dish\nBake",
  tips: "Use slightly stale bread for best texture",
  rating: 4.7
},
{
  id: 138,
  name: "Lemon Sorbet",
  cat: "Dessert",
  cuisine: "French",
  level: "Easy",
  size: "4 Servings",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: 120,
  prot: 1,
  fat: 0,
  carb: 30,
  yt: "https://www.youtube.com/embed/isioRIjkPqA",
  img: "images/115.jpeg",
  ing: "Lemon Juice\nSugar\nWater\nLemon Zest",
  steps: "Mix ingredients\nFreeze\nStir occasionally\nServe chilled",
  tips: "Use fresh lemons for best taste",
  rating: 4.6
},
{
  id: 139,
  name: "Pavlova",
  cat: "Dessert",
  cuisine: "Australian/New Zealand",
  level: "Medium",
  size: "6 Servings",
  prep: "30m",
  cook: "1h 15m",
  total: "1h 45m",
  cal: 250,
  prot: 4,
  fat: 8,
  carb: 35,
  yt: "https://www.youtube.com/embed/Zo5ATW4eq8o",
  img: "images/114.jpeg",
  ing: "Egg Whites\nSugar\nCornstarch\nVinegar\nWhipped Cream\nFruits",
  steps: "Beat egg whites\nAdd sugar\nBake meringue\nTop with cream and fruits",
  tips: "Bake at low temperature for crisp outside, soft inside",
  rating: 4.7
},
{
  id: 140,
  name: "Profiteroles",
  cat: "Dessert",
  cuisine: "French",
  level: "Hard",
  size: "12 Pieces",
  prep: "30m",
  cook: "20m",
  total: "50m",
  cal: 200,
  prot: 5,
  fat: 12,
  carb: 20,
  yt: "https://www.youtube.com/embed/ROxNWaF9Ltc",
  img: "images/113.jpeg",
  ing: "Flour\nButter\nEggs\nMilk\nChocolate\nCream",
  steps: "Prepare choux pastry\nBake\nFill with cream\nDrizzle chocolate",
  tips: "Use cold cream for filling",
  rating: 4.8
},
{
  id: 141,
  name: "Baklava",
  cat: "Dessert",
  cuisine: "Middle Eastern",
  level: "Hard",
  size: "12 Pieces",
  prep: "40m",
  cook: "45m",
  total: "85m",
  cal: 350,
  prot: 7,
  fat: 22,
  carb: 34,
  yt: "https://www.youtube.com/embed/VI7Bj1_P99Q",
  img: "images/112.jpeg",
  ing: "Phyllo Dough\nNuts\nButter\nHoney\nSugar Syrup",
  steps: "Layer pastry\nAdd nuts\nBake\nPour syrup",
  tips: "Use melted butter generously",
  rating: 4.8
},
{
  id: 142,
  name: "Creme Brulee",
  cat: "Dessert",
  cuisine: "French",
  level: "Hard",
  size: "4 Servings",
  prep: "20m",
  cook: "40m",
  total: "60m",
  cal: 300,
  prot: 5,
  fat: 22,
  carb: 20,
  yt: "https://www.youtube.com/embed/ZPz7FP15OCs",
  img: "images/111.jpeg",
  ing: "Cream\nEgg Yolks\nSugar\nVanilla",
  steps: "Mix cream and yolks\nBake in water bath\nChill\nCaramelize sugar",
  tips: "Use a torch for perfect caramel top",
  rating: 4.8
},
{
  id: 143,
  name: "Peach Cobbler",
  cat: "Dessert",
  cuisine: "American",
  level: "Medium",
  size: "6 Servings",
  prep: "15m",
  cook: "40m",
  total: "55m",
  cal: 250,
  prot: 3,
  fat: 10,
  carb: 35,
  yt: "https://www.youtube.com/embed/MB_uC-tfqOE",
  img: "images/110.jpeg",
  ing: "Peaches\nFlour\nSugar\nButter\nMilk\nBaking Powder",
  steps: "Prepare batter\nLayer peaches\nBake until golden\nServe warm",
  tips: "Use ripe peaches for best flavor",
  rating: 4.7
},
{
  id: 144,
  name: "Rice Pudding",
  cat: "Dessert",
  cuisine: "International",
  level: "Easy",
  size: "4 Servings",
  prep: "10m",
  cook: "30m",
  total: "40m",
  cal: 200,
  prot: 4,
  fat: 5,
  carb: 35,
  yt: "https://www.youtube.com/embed/f52Pyr6swKQ",
  img: "images/109.jpeg",
  ing: "Rice\nMilk\nSugar\nCinnamon\nVanilla",
  steps: "Cook rice in milk\nAdd sugar and flavoring\nSimmer until thick\nServe warm or chilled",
  tips: "Stir frequently to prevent sticking",
  rating: 4.6
},
{
  id: 145,
  name: "Hot Chocolate",
  cat: "Drinks",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "3m",
  total: "5m",
  cal: 190,
  prot: 5,
  fat: 8,
  carb: 25,
  yt: "https://www.youtube.com/embed/6nXv-Np-Bc4",
  img: "images/180.jpeg",
  ing: "Milk – 1 cup\nCocoa powder – 2 tbsp\nSugar – 1 tbsp",
  steps: "Heat milk in a pan\nWhisk in cocoa and sugar\nServe warm",
  tips: "Top with marshmallows",
  rating: 5
},
{
  id: 146,
  name: "Cappuccino",
  cat: "Drinks",
  cuisine: "Italian",
  level: "Medium",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 120,
  prot: 6,
  fat: 6,
  carb: 10,
  yt: "https://www.youtube.com/embed/Qzki9XoYWvU",
  img: "images/179.jpeg",
  ing: "Espresso – 1 shot\nSteamed milk\nMilk foam",
  steps: "Brew espresso\nSteam milk until frothy\nLayer milk and foam over coffee",
  tips: "Dust with cocoa powder",
  rating: 5
},
{
  id: 147,
  name: "Espresso",
  cat: "Drinks",
  cuisine: "Italian",
  level: "Medium",
  size: "1 Person",
  prep: "3m",
  cook: "2m",
  total: "5m",
  cal: 5,
  prot: 0,
  fat: 0,
  carb: 1,
  yt: "https://www.youtube.com/embed/OvYmTCk6oss",
  img: "images/178.jpeg",
  ing: "Ground coffee\nHot water",
  steps: "Press hot water through ground coffee using a machine",
  tips: "Use dark roasted beans",
  rating: 4
},
{
  id: 148,
  name: "Green Tea",
  cat: "Drinks",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "1m",
  cook: "3m",
  total: "4m",
  cal: 2,
  prot: 0,
  fat: 0,
  carb: 0,
  yt: "https://www.youtube.com/embed/zweRYCw6mIQ",
  img: "images/177.jpeg",
  ing: "Green tea bag\nHot water",
  steps: "Steep tea bag in hot water\nRemove bag after 3 mins",
  tips: "Don't use boiling water; 80°C is best",
  rating: 5
},
{
  id: 149,
  name: "Lemon Iced Tea",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 90,
  prot: 0,
  fat: 0,
  carb: 22,
  yt: "https://www.youtube.com/embed/pxSN_-iqzl4",
  img: "images/176.jpeg",
  ing: "Black tea\nLemon juice\nIce cubes",
  steps: "Brew tea and cool\nAdd lemon and sugar\nServe over ice",
  tips: "Add mint leaves for freshness",
  rating: 5
},
{
  id: 150,
  name: "Strawberry Milkshake",
  cat: "Drinks",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 310,
  prot: 8,
  fat: 12,
  carb: 40,
  yt: "https://www.youtube.com/embed/vwO7nPaAWvs",
  img: "images/175.jpeg",
  ing: "Strawberries\nMilk\nVanilla Ice cream",
  steps: "Blend all ingredients until smooth",
  tips: "Garnish with fresh berries",
  rating: 5
},
{
  id: 151,
  name: "Chocolate Milkshake",
  cat: "Drinks",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 350,
  prot: 9,
  fat: 15,
  carb: 45,
  yt: "https://www.youtube.com/embed/ZbmHcd9OZqQ",
  img: "images/174.jpeg",
  ing: "Chocolate syrup\nMilk\nIce cream",
  steps: "Blend milk and ice cream\nAdd syrup and blend again",
  tips: "Serve in a chilled glass",
  rating: 5
},
{
  id: 152,
  name: "Vanilla Milkshake",
  cat: "Drinks",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 290,
  prot: 8,
  fat: 14,
  carb: 35,
  yt: "https://www.youtube.com/embed/yBMmbXgv7tc",
  img: "images/173.jpeg",
  ing: "Vanilla extract\nMilk\nIce cream",
  steps: "Blend ingredients until thick and creamy",
  tips: "Use full-cream milk",
  rating: 4
},
{
  id: 153,
  name: "Banana Smoothie",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 220,
  prot: 6,
  fat: 4,
  carb: 45,
  yt: "https://www.youtube.com/embed/wfHADzgF_P4",
  img: "images/172.jpeg",
  ing: "Banana\nYogurt\nHoney",
  steps: "Peel banana\nBlend with yogurt and honey",
  tips: "Use frozen bananas for better texture",
  rating: 5
},
{
  id: 154,
  name: "Pineapple Juice",
  cat: "Drinks",
  cuisine: "Tropical",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 130,
  prot: 1,
  fat: 0,
  carb: 32,
  yt: "https://www.youtube.com/embed/LsgwQvjwQ74",
  img: "images/171.jpeg",
  ing: "Fresh Pineapple\nWater\nSugar",
  steps: "Blend pineapple with water\nStrain and serve",
  tips: "Add a pinch of salt",
  rating: 4
},
{
  id: 155,
  name: "Apple Juice",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 110,
  prot: 0,
  fat: 0,
  carb: 28,
  yt: "https://www.youtube.com/embed/YW8XSQXrXf8",
  img: "images/170.jpeg",
  ing: "Apples\nWater",
  steps: "Juice the apples\nServe chilled immediately",
  tips: "Add a dash of lemon to prevent browning",
  rating: 5
},
{
  id: 156,
  name: "Grape Juice",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 140,
  prot: 1,
  fat: 0,
  carb: 35,
  yt: "https://www.youtube.com/embed/FFEKni_ik9k",
  img: "images/169.jpeg",
  ing: "Black Grapes\nSugar\nWater",
  steps: "Blend grapes\nStrain through a sieve",
  tips: "Don't blend the seeds",
  rating: 4
},
  {
  id: 157,
  name: "Coconut Water",
  cat: "Drinks",
  cuisine: "Tropical",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "0m",
  total: "2m",
  cal: 45,
  prot: 1,
  fat: 0,
  carb: 10,
  yt: "https://www.youtube.com/embed/7IQCLLw8u3Y",
  img: "images/168.jpeg",
  ing: "Fresh King Coconut",
  steps: "Extract water and serve cold",
  tips: "Drink immediately after opening",
  rating: 5
},
{
  id: 158,
  name: "Mint Lime Juice",
  cat: "Drinks",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 60,
  prot: 0,
  fat: 0,
  carb: 15,
  yt: "https://www.youtube.com/embed/uYBaQCJy0Jk",
  img: "images/167.jpeg",
  ing: "Lime\nMint leaves\nSugar",
  steps: "Blend mint and lime\nMix with water and sugar",
  tips: "Very refreshing for hot days",
  rating: 5
},
{
  id: 159,
  name: "Peach Iced Tea",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "10m",
  total: "15m",
  cal: 95,
  prot: 0,
  fat: 0,
  carb: 24,
  yt: "https://www.youtube.com/embed/zSKXxNcc9KQ",
  img: "images/166.jpeg",
  ing: "Black tea\nPeach syrup\nPeach slices",
  steps: "Brew tea and cool\nMix with syrup and ice",
  tips: "Garnish with fresh peach",
  rating: 5
},
{
  id: 160,
  name: "Cold Brew Coffee",
  cat: "Drinks",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "12h",
  cal: 5,
  prot: 0,
  fat: 0,
  carb: 1,
  yt: "https://www.youtube.com/embed/v_qHWgmsPrw",
  img: "images/165.jpeg",
  ing: "Coarse Coffee grounds\nCold water",
  steps: "Steep coffee in water for 12h\nStrain and serve",
  tips: "Serve with a splash of milk",
  rating: 5
},
{
  id: 161,
  name: "Mocha",
  cat: "Drinks",
  cuisine: "Western",
  level: "Medium",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 250,
  prot: 7,
  fat: 10,
  carb: 35,
  yt: "https://www.youtube.com/embed/Og7tvzmzWGs",
  img: "images/164.jpeg",
  ing: "Espresso\nChocolate syrup\nMilk",
  steps: "Mix espresso and syrup\nAdd steamed milk",
  tips: "Top with whipped cream",
  rating: 5
},
{
  id: 162,
  name: "Carrot Juice",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 80,
  prot: 1,
  fat: 0,
  carb: 18,
  yt: "https://www.youtube.com/embed/0QuY0MYdf7w",
  img: "images/163.jpeg",
  ing: "Carrots\nWater\nGinger",
  steps: "Blend carrots with ginger\nStrain and serve",
  tips: "Add a squeeze of orange",
  rating: 4
},
{
  id: 163,
  name: "Beetroot Juice",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 90,
  prot: 2,
  fat: 0,
  carb: 20,
  yt: "https://www.youtube.com/embed/2aHbMhcd4Eg",
  img: "images/162.jpeg",
  ing: "Beetroot\nLemon juice",
  steps: "Blend beetroot\nMix with lemon juice",
  tips: "Good for detox",
  rating: 4
},
{
  id: 164,
  name: "Papaya Smoothie",
  cat: "Drinks",
  cuisine: "Tropical",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 180,
  prot: 4,
  fat: 3,
  carb: 35,
  yt: "https://www.youtube.com/embed/S0J13VVvwwk",
  img: "images/161.jpeg",
  ing: "Papaya\nYogurt\nHoney",
  steps: "Blend all until smooth",
  tips: "Improves digestion",
  rating: 5
},
{
  id: 165,
  name: "Kiwi Juice",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 110,
  prot: 1,
  fat: 1,
  carb: 25,
  yt: "https://www.youtube.com/embed/iijTl4KXCPg",
  img: "images/160.jpeg",
  ing: "Kiwi\nWater\nHoney",
  steps: "Scoop and blend\nServe chilled",
  tips: "High in Vitamin C",
  rating: 4
},
{
  id: 166,
  name: "Blueberry Smoothie",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 210,
  prot: 5,
  fat: 4,
  carb: 40,
  yt: "https://www.youtube.com/embed/NF2ugFuQxpA",
  img: "images/159.jpeg",
  ing: "Blueberries\nYogurt\nMilk",
  steps: "Blend ingredients together",
  tips: "Rich in antioxidants",
  rating: 5
},
{
  id: 167,
  name: "Ginger Tea",
  cat: "Drinks",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "8m",
  total: "10m",
  cal: 10,
  prot: 0,
  fat: 0,
  carb: 2,
  yt: "https://www.youtube.com/embed/lNdGH6irI1M",
  img: "images/158.jpeg",
  ing: "Fresh Ginger\nWater\nTea bag",
  steps: "Boil ginger in water\nSteep tea",
  tips: "Great for nausea",
  rating: 5
},
{
  id: 168,
  name: "Turmeric Milk",
  cat: "Drinks",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "3m",
  total: "5m",
  cal: 150,
  prot: 8,
  fat: 6,
  carb: 12,
  yt: "https://www.youtube.com/embed/e8nm5kdfsbw",
  img: "images/157.jpeg",
  ing: "Milk\nTurmeric powder\nBlack pepper",
  steps: "Warm milk\nStir in turmeric",
  tips: "Boosts immunity",
  rating: 5
},
{
  id: 169,
  name: "Almond Milkshake",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 260,
  prot: 10,
  fat: 12,
  carb: 28,
  yt: "https://www.youtube.com/embed/Ods-UwXL2tk",
  img: "images/156.jpeg",
  ing: "Almonds\nMilk\nDates",
  steps: "Blend soaked almonds and milk",
  tips: "Healthy breakfast drink",
  rating: 5
},
{
  id: 170,
  name: "Rose Milk",
  cat: "Drinks",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "2m",
  cook: "0m",
  total: "2m",
  cal: 180,
  prot: 7,
  fat: 6,
  carb: 25,
  yt: "https://www.youtube.com/embed/PUnllaAoPSI",
  img: "images/155.jpeg",
  ing: "Rose syrup\nChilled Milk",
  steps: "Mix syrup and milk well",
  tips: "Serve with sabja seeds",
  rating: 5
},
{
  id: 171,
  name: "Energy Drink",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "1m",
  cook: "0m",
  total: "1m",
  cal: 150,
  prot: 0,
  fat: 0,
  carb: 35,
  yt: "https://www.youtube.com/embed/kEyj7e87LKY",
  img: "images/154.jpeg",
  ing: "B-Vitamin Mix\nCarbonated Water",
  steps: "Serve chilled",
  tips: "Instant boost",
  rating: 3
},
{
  id: 172,
  name: "Watermelon Juice",
  cat: "Drinks",
  cuisine: "Tropical",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 85,
  prot: 1,
  fat: 0,
  carb: 21,
  yt: "https://www.youtube.com/embed/kztsrO5FmGw",
  img: "images/153.jpeg",
  ing: "Watermelon\nLime",
  steps: "Blend and strain",
  tips: "Add a pinch of black salt",
  rating: 5
},
{
  id: 173,
  name: "Iced Coffee",
  cat: "Drinks",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 120,
  prot: 4,
  fat: 5,
  carb: 15,
  yt: "https://www.youtube.com/embed/kKkwkWCeHAY",
  img: "images/152.jpeg",
  ing: "Brewed coffee\nMilk\nIce cubes",
  steps: "Shake and serve",
  tips: "Add vanilla essence",
  rating: 5
},
{
  id: 174,
  name: "Mango Lassi",
  cat: "Drinks",
  cuisine: "Indian",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 220,
  prot: 6,
  fat: 5,
  carb: 40,
  yt: "https://www.youtube.com/embed/pByZ9WBCCHc",
  img: "images/151.jpeg",
  ing: "Mango\nYogurt\nCardamom",
  steps: "Blend all together",
  tips: "Use Alphonso mangoes",
  rating: 5
},
{
  id: 175,
  name: "Lemonade",
  cat: "Drinks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 70,
  prot: 0,
  fat: 0,
  carb: 18,
  yt: "https://www.youtube.com/embed/COx5Bf0PsQs",
  img: "images/150.jpeg",
  ing: "Lemon\nSugar\nWater",
  steps: "Mix and serve",
  tips: "Add a mint garnish",
  rating: 5
},
  {
  id: 176,
  name: "Pomegranate Juice",
  cat: "Drinks",
  cuisine: "Middle Eastern",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: 130,
  prot: 2,
  fat: 1,
  carb: 32,
  yt: "https://www.youtube.com/embed/_CRFc-9Wfhc",
  img: "images/149.jpeg",
  ing: "Pomegranate seeds",
  steps: "Extract juice and strain",
  tips: "Rich in antioxidants",
  rating: 5
},
{
  id: 177,
  name: "Cucumber Cooler",
  cat: "Drinks",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 40,
  prot: 1,
  fat: 0,
  carb: 9,
  yt: "https://www.youtube.com/embed/XsG5h70rSSI",
  img: "images/148.jpeg",
  ing: "Cucumber\nMint\nLime",
  steps: "Blend and strain",
  tips: "Zero calorie refresher",
  rating: 4
},
{
  id: 178,
  name: "Masala Tea",
  cat: "Drinks",
  cuisine: "Indian",
  level: "Medium",
  size: "1 Person",
  prep: "2m",
  cook: "8m",
  total: "10m",
  cal: 110,
  prot: 3,
  fat: 4,
  carb: 16,
  yt: "https://www.youtube.com/embed/MKFIIzTJw1Y",
  img: "images/147.jpeg",
  ing: "Spices\nMilk\nTea leaves",
  steps: "Boil spices with tea",
  tips: "Use fresh cardamom",
  rating: 5
},
{
  id: 179,
  name: "Chocolate Smoothie",
  cat: "Drinks",
  cuisine: "Western",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 280,
  prot: 8,
  fat: 10,
  carb: 40,
  yt: "https://www.youtube.com/embed/wMYyjrc7IrY",
  img: "images/146.jpeg",
  ing: "Cocoa\nBanana\nMilk",
  steps: "Blend and serve",
  tips: "Add peanut butter",
  rating: 5
},
{
  id: 180,
  name: "Avocado Milkshake",
  cat: "Drinks",
  cuisine: "Asian",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "0m",
  total: "5m",
  cal: 250,
  prot: 4,
  fat: 18,
  carb: 22,
  yt: "https://www.youtube.com/embed/2ygsCN9v20I",
  img: "images/145.jpeg",
  ing: "Avocado\nMilk\nSugar",
  steps: "Blend all until smooth",
  tips: "Healthy fat option",
  rating: 5
},
{
  id: 181,
  name: "Vegetable Cutlets",
  cat: "Snacks",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "4 People",
  prep: "20m",
  cook: "15m",
  total: "35m",
  cal: 120,
  prot: 3,
  fat: 6,
  carb: 15,
  yt: "https://www.youtube.com/embed/pjfErNbhoPc",
  img: "images/215.jpeg",
  ing: "Potatoes\nVegetables\nBreadcrumbs",
  steps: "Boil potatoes\nMix with veggies\nFry until golden",
  tips: "Keep the oil hot",
  rating: 5
},
{
  id: 182,
  name: "French Fries",
  cat: "Snacks",
  cuisine: "Western",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "10m",
  total: "20m",
  cal: 310,
  prot: 3,
  fat: 15,
  carb: 40,
  yt: "https://www.youtube.com/embed/LKMgduUGgbc",
  img: "images/214.jpeg",
  ing: "Potatoes\nOil\nSalt",
  steps: "Cut potatoes\nDeep fry\nSeason with salt",
  tips: "Soak in cold water first",
  rating: 4.5
},
{
  id: 183,
  name: "Vegetable Samosa",
  cat: "Snacks",
  cuisine: "Indian",
  level: "Hard",
  size: "5 People",
  prep: "30m",
  cook: "20m",
  total: "50m",
  cal: 150,
  prot: 4,
  fat: 8,
  carb: 20,
  yt: "https://www.youtube.com/embed/y1sAj2F2Q7Q",
  img: "images/213.jpeg",
  ing: "Flour pastry\nSpicy Potato filling",
  steps: "Make dough cones\nFill with potato mix\nDeep fry",
  tips: "Serve with mint chutney",
  rating: 5
},
{
  id: 184,
  name: "Fish Cutlet",
  cat: "Snacks",
  cuisine: "Sri Lankan",
  level: "Medium",
  size: "4 People",
  prep: "25m",
  cook: "15m",
  total: "40m",
  cal: 130,
  prot: 8,
  fat: 7,
  carb: 10,
  yt: "https://www.youtube.com/embed/4Col5DYrUJI",
  img: "images/212.jpeg",
  ing: "Canned Fish\nPotato\nPepper",
  steps: "Mix fish and mash potato\nRoll into balls\nFry",
  tips: "Add extra black pepper",
  rating: 5
},
{
  id: 185,
  name: "Chicken Roll",
  cat: "Snacks",
  cuisine: "Sri Lankan",
  level: "Hard",
  size: "4 People",
  prep: "30m",
  cook: "20m",
  total: "50m",
  cal: 180,
  prot: 12,
  fat: 9,
  carb: 22,
  yt: "https://www.youtube.com/embed/BWMb1f97GdU",
  img: "images/211.jpeg",
  ing: "Pancake wrapper\nChicken filling",
  steps: "Fill pancake with chicken\nRoll and coat in crumbs\nFry",
  tips: "Seal edges tightly",
  rating: 5
},
{
  id: 186,
  name: "Egg Roll",
  cat: "Snacks",
  cuisine: "Asian",
  level: "Medium",
  size: "2 People",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: 160,
  prot: 7,
  fat: 8,
  carb: 18,
  yt: "https://www.youtube.com/embed/tgcTVl3oMEQ",
  img: "images/210.jpeg",
  ing: "Egg\nCabbage\nRoll wrapper",
  steps: "Sauté veggies\nRoll into wrappers\nFry",
  tips: "Use sweet chili sauce",
  rating: 4
},
{
  id: 187,
  name: "Spring Roll",
  cat: "Snacks",
  cuisine: "Chinese",
  level: "Medium",
  size: "5 People",
  prep: "25m",
  cook: "10m",
  total: "35m",
  cal: 120,
  prot: 4,
  fat: 6,
  carb: 15,
  yt: "https://www.youtube.com/embed/8SqyaRfjjCI",
  img: "images/209.jpeg",
  ing: "Thin wrappers\nCarrots\nSprouts",
  steps: "Shred veggies\nFill and roll thin wrappers\nDeep fry",
  tips: "Serve hot and crispy",
  rating: 5
},
{
  id: 188,
  name: "Potato Wedges",
  cat: "Snacks",
  cuisine: "Western",
  level: "Easy",
  size: "3 People",
  prep: "10m",
  cook: "25m",
  total: "35m",
  cal: 220,
  prot: 4,
  fat: 10,
  carb: 30,
  yt: "https://www.youtube.com/embed/HldtUW7Z1xg",
  img: "images/208.jpeg",
  ing: "Large Potatoes\nPaprika\nHerbs",
  steps: "Slice potatoes thick\nToss with oil and spices\nBake or fry",
  tips: "Leave skin on for more flavor",
  rating: 5
},
{
  id: 189,
  name: "Popcorn",
  cat: "Snacks",
  cuisine: "Global",
  level: "Easy",
  size: "2 People",
  prep: "2m",
  cook: "5m",
  total: "7m",
  cal: 110,
  prot: 3,
  fat: 4,
  carb: 18,
  yt: "https://www.youtube.com/embed/cpNaDJILw6g",
  img: "images/207.jpeg",
  ing: "Corn kernels\nButter\nSalt",
  steps: "Heat oil in a pot\nAdd corn and cover\nShake until popping stops",
  tips: "Add caramel for a sweet twist",
  rating: 4
},
{
  id: 190,
  name: "Nachos with Cheese",
  cat: "Snacks",
  cuisine: "Mexican",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 350,
  prot: 10,
  fat: 22,
  carb: 30,
  yt: "https://www.youtube.com/embed/5DSDRUlbMxo",
  img: "images/206.jpeg",
  ing: "Tortilla chips\nMelted cheese\nJalapeños",
  steps: "Layer chips on a plate\nPour warm cheese over\nAdd toppings",
  tips: "Use sharp cheddar",
  rating: 5
},
{
  id: 191,
  name: "Cheese Balls",
  cat: "Snacks",
  cuisine: "Western",
  level: "Medium",
  size: "4 People",
  prep: "20m",
  cook: "10m",
  total: "30m",
  cal: 250,
  prot: 8,
  fat: 18,
  carb: 15,
  yt: "https://www.youtube.com/embed/utqYhiRFBN8",
  img: "images/205.jpeg",
  ing: "Cheese\nFlour\nEgg",
  steps: "Form cheese balls\nBread twice\nFry until crisp",
  tips: "Don't over-fry or cheese will leak",
  rating: 4
},
{
  id: 192,
  name: "Onion Rings",
  cat: "Snacks",
  cuisine: "Western",
  level: "Easy",
  size: "3 People",
  prep: "15m",
  cook: "10m",
  total: "25m",
  cal: 200,
  prot: 3,
  fat: 12,
  carb: 22,
  yt: "https://www.youtube.com/embed/dcB5VU93AII",
  img: "images/204.jpeg",
  ing: "Onions\nFlour batter\nCrumbs",
  steps: "Slice onions into rings\nDip in batter\nFry until golden",
  tips: "Use cold batter for extra crunch",
  rating: 4
},
{
  id: 193,
  name: "Vegetable Patties",
  cat: "Snacks",
  cuisine: "Sri Lankan",
  level: "Hard",
  size: "6 People",
  prep: "40m",
  cook: "20m",
  total: "1h",
  cal: 140,
  prot: 3,
  fat: 8,
  carb: 16,
  yt: "https://www.youtube.com/embed/7hKowHZIuMM",
  img: "images/203.jpeg",
  ing: "Pastry dough\nMixed veg filling",
  steps: "Roll out dough circles\nFill and fold edges\nBake or fry",
  tips: "Pinch the edges firmly",
  rating: 5
},
{
  id: 194,
  name: "Chicken Nuggets",
  cat: "Snacks",
  cuisine: "Western",
  level: "Easy",
  size: "2 People",
  prep: "15m",
  cook: "10m",
  total: "25m",
  cal: 280,
  prot: 18,
  fat: 15,
  carb: 12,
  yt: "https://www.youtube.com/embed/GDhpyyXoOx0",
  img: "images/202.jpeg",
  ing: "Chicken breast\nBreadcrumbs\nEgg",
  steps: "Cut chicken into chunks\nCoat in egg and crumbs\nFry or bake",
  tips: "Serve with BBQ sauce",
  rating: 5
},
{
  id: 195,
  name: "Bread Toast Pizza",
  cat: "Snacks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 210,
  prot: 8,
  fat: 10,
  carb: 24,
  yt: "https://www.youtube.com/embed/KahrSPtMhgE",
  img: "images/201.jpeg",
  ing: "Bread slices\nPizza sauce\nCheese",
  steps: "Spread sauce on bread\nTop with cheese\nToast until cheese melts",
  tips: "Use oregano for aroma",
  rating: 4
},
  {
  id: 196,
  name: "Cheese Sandwich Bites",
  cat: "Snacks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 190,
  prot: 7,
  fat: 11,
  carb: 18,
  yt: "https://www.youtube.com/embed/cq2JhYlezHo",
  img: "images/200.jpeg",
  ing: "Bread\nCheese\nButter",
  steps: "Make sandwich\nToast and cut into 4 bits",
  tips: "Add a tomato slice",
  rating: 4
},
{
  id: 197,
  name: "Hot Dogs",
  cat: "Snacks",
  cuisine: "Western",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 290,
  prot: 12,
  fat: 18,
  carb: 22,
  yt: "https://www.youtube.com/embed/YFURZbhY5vo",
  img: "images/199.jpeg",
  ing: "Sausage\nBun\nMustard",
  steps: "Grill sausage\nPlace in bun\nAdd toppings",
  tips: "Sauteed onions taste great",
  rating: 5
},
{
  id: 198,
  name: "Mini Burgers",
  cat: "Snacks",
  cuisine: "Western",
  level: "Medium",
  size: "4 People",
  prep: "20m",
  cook: "10m",
  total: "30m",
  cal: 230,
  prot: 14,
  fat: 12,
  carb: 16,
  yt: "https://www.youtube.com/embed/TWQN1n1Hp-8",
  img: "images/198.jpeg",
  ing: "Mini buns\nSmall patties\nLettuce",
  steps: "Cook patties\nAssemble with buns and salad",
  tips: "Perfect for parties",
  rating: 5
},
{
  id: 199,
  name: "Veggie Wrap",
  cat: "Snacks",
  cuisine: "Global",
  level: "Easy",
  size: "1 Person",
  prep: "10m",
  cook: "0m",
  total: "10m",
  cal: 180,
  prot: 6,
  fat: 4,
  carb: 30,
  yt: "https://www.youtube.com/embed/5r3vjmrXXmI",
  img: "images/197.jpeg",
  ing: "Tortilla\nHummus\nVeggies",
  steps: "Spread hummus\nPack with veggies\nWrap tightly",
  tips: "Warm the tortilla first",
  rating: 5
},
{
  id: 200,
  name: "Chicken Shawarma Bites",
  cat: "Snacks",
  cuisine: "Middle Eastern",
  level: "Medium",
  size: "3 People",
  prep: "15m",
  cook: "10m",
  total: "25m",
  cal: 210,
  prot: 15,
  fat: 10,
  carb: 15,
  yt: "https://www.youtube.com/embed/rpTqeZ_4sTU",
  img: "images/196.jpeg",
  ing: "Pita\nChicken\nGarlic sauce",
  steps: "Slice chicken\nWrap in small pita pieces\nToast slightly",
  tips: "Use pickles for tang",
  rating: 5
},
{
  id: 202,
  name: "Roasted Chickpeas",
  cat: "Snacks",
  cuisine: "Middle Eastern",
  level: "Easy",
  size: "4 People",
  prep: "5m",
  cook: "20m",
  total: "25m",
  cal: 120,
  prot: 6,
  fat: 3,
  carb: 18,
  yt: "https://www.youtube.com/embed/i-r_KDjZy9U",
  img: "images/216.jpeg",
  ing: "Boiled Chickpeas\nOlive oil",
  steps: "Toss with oil and spices\nRoast until crunchy",
  tips: "Remove skin for more crunch",
  rating: 5
},
{
  id: 203,
  name: "Murukku",
  cat: "Snacks",
  cuisine: "Sri Lankan",
  level: "Hard",
  size: "10 People",
  prep: "20m",
  cook: "30m",
  total: "50m",
  cal: 140,
  prot: 3,
  fat: 10,
  carb: 12,
  yt: "https://www.youtube.com/embed/3IAyTk8BDA8",
  img: "images/195.jpeg",
  ing: "Rice flour\nSpices",
  steps: "Make dough\nPress through mold\nFry until hard",
  tips: "Use coconut milk in dough",
  rating: 4
},
{
  id: 204,
  name: "Mixture",
  cat: "Snacks",
  cuisine: "Sri Lankan",
  level: "Hard",
  size: "10 People",
  prep: "30m",
  cook: "40m",
  total: "1h 10m",
  cal: 180,
  prot: 4,
  fat: 12,
  carb: 15,
  yt: "https://www.youtube.com/embed/6Ey21xhuaTc",
  img: "images/194.jpeg",
  ing: "Dal\nPeanuts\nFried bits",
  steps: "Fry individual parts\nMix with chili",
  tips: "Add curry leaves",
  rating: 5
},
{
  id: 205,
  name: "Banana Chips",
  cat: "Snacks",
  cuisine: "Asian",
  level: "Easy",
  size: "5 People",
  prep: "10m",
  cook: "20m",
  total: "30m",
  cal: 150,
  prot: 1,
  fat: 10,
  carb: 16,
  yt: "https://www.youtube.com/embed/_0YrmrlVFe0",
  img: "images/193.jpeg",
  ing: "Raw bananas\nSalt\nOil",
  steps: "Slice thin\nDeep fry with turmeric",
  tips: "Slice directly into oil",
  rating: 5
},
{
  id: 206,
  name: "Cassava Chips",
  cat: "Snacks",
  cuisine: "Sri Lankan",
  level: "Easy",
  size: "5 People",
  prep: "15m",
  cook: "20m",
  total: "35m",
  cal: 160,
  prot: 1,
  fat: 10,
  carb: 18,
  yt: "https://www.youtube.com/embed/rRN-l1hXJ_g",
  img: "images/192.jpeg",
  ing: "Cassava root\nChili",
  steps: "Slice cassava thinly\nFry until golden\nAdd chili flakes",
  tips: "Use fresh roots",
  rating: 5
},
{
  id: 207,
  name: "Peanut Chikki",
  cat: "Snacks",
  cuisine: "Indian",
  level: "Medium",
  size: "10 Pieces",
  prep: "10m",
  cook: "15m",
  total: "25m",
  cal: 200,
  prot: 6,
  fat: 12,
  carb: 18,
  yt: "https://www.youtube.com/embed/wIIv7QEF-_o",
  img: "images/191.jpeg",
  ing: "Peanuts\nJaggery",
  steps: "Melt jaggery\nAdd peanuts\nFlatten and cut",
  tips: "Apply ghee to the tray",
  rating: 4
},
{
  id: 208,
  name: "Butter Cookies",
  cat: "Snacks",
  cuisine: "Western",
  level: "Easy",
  size: "20 Items",
  prep: "15m",
  cook: "15m",
  total: "30m",
  cal: 120,
  prot: 2,
  fat: 8,
  carb: 12,
  yt: "https://www.youtube.com/embed/jVI2eNW5iuM",
  img: "images/190.jpeg",
  ing: "Butter\nFlour\nSugar",
  steps: "Mix dough\nShape and bake at 170°C",
  tips: "Room temperature butter is key",
  rating: 5
},
{
  id: 209,
  name: "Cup Sandwich",
  cat: "Snacks",
  cuisine: "Global",
  level: "Easy",
  size: "4 People",
  prep: "10m",
  cook: "5m",
  total: "15m",
  cal: 140,
  prot: 5,
  fat: 6,
  carb: 15,
  yt: "https://www.youtube.com/embed/S_1_ZSMxRfg",
  img: "images/189.jpeg",
  ing: "Bread\nCream cheese\nJam",
  steps: "Cut bread circles\nFill and stack",
  tips: "Use a cookie cutter",
  rating: 4
},
{
  id: 210,
  name: "Mini Pizza",
  cat: "Snacks",
  cuisine: "Italian",
  level: "Medium",
  size: "4 People",
  prep: "20m",
  cook: "10m",
  total: "30m",
  cal: 180,
  prot: 8,
  fat: 8,
  carb: 20,
  yt: "https://www.youtube.com/embed/1X9mjrPFSwo",
  img: "images/188.jpeg",
  ing: "Mini bases\nCheese\nToppings",
  steps: "Sauce the bases\nTop and bake until melted",
  tips: "Add capsicum for crunch",
  rating: 5
},
{
  id: 211,
  name: "Paneer Pakora",
  cat: "Snacks",
  cuisine: "Indian",
  level: "Medium",
  size: "3 People",
  prep: "15m",
  cook: "10m",
  total: "25m",
  cal: 190,
  prot: 10,
  fat: 14,
  carb: 8,
  yt: "https://www.youtube.com/embed/HR6GvbwG5fE",
  img: "images/187.jpeg",
  ing: "Paneer\nGram flour\nSpices",
  steps: "Dip paneer in batter\nDeep fry until golden",
  tips: "Add chaat masala",
  rating: 5
},
{
  id: 212,
  name: "Cheese Sticks",
  cat: "Snacks",
  cuisine: "Western",
  level: "Easy",
  size: "2 People",
  prep: "10m",
  cook: "5m",
  total: "15m",
  cal: 220,
  prot: 9,
  fat: 16,
  carb: 12,
  yt: "https://www.youtube.com/embed/Yxo5fnW0cHY",
  img: "images/186.jpeg",
  ing: "Mozzarella\nCrumbs\nHerbs",
  steps: "Bread cheese sticks\nFry until golden",
  tips: "Serve with marinara",
  rating: 4
},
{
  id: 213,
  name: "Corn Chaat",
  cat: "Snacks",
  cuisine: "Indian",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "5m",
  total: "10m",
  cal: 130,
  prot: 4,
  fat: 2,
  carb: 25,
  yt: "https://www.youtube.com/embed/AMPDjSZJARc",
  img: "images/185.jpeg",
  ing: "Sweet corn\nOnion\nLime",
  steps: "Mix boiled corn with veggies\nAdd spices and lime",
  tips: "Healthy and quick",
  rating: 5
},
{
  id: 214,
  name: "Veg Momos",
  cat: "Snacks",
  cuisine: "Asian",
  level: "Hard",
  size: "3 People",
  prep: "40m",
  cook: "10m",
  total: "50m",
  cal: 120,
  prot: 5,
  fat: 2,
  carb: 28,
  yt: "https://www.youtube.com/embed/NZD3RpKNXmQ",
  img: "images/184.jpeg",
  ing: "Flour wrappers\nCabbage\nCarrot",
  steps: "Fold momos with filling\nSteam for 10 mins",
  tips: "Thin skins are better",
  rating: 5
},
{
  id: 215,
  name: "Fish Fingers",
  cat: "Snacks",
  cuisine: "Western",
  level: "Medium",
  size: "3 People",
  prep: "15m",
  cook: "10m",
  total: "25m",
  cal: 210,
  prot: 15,
  fat: 11,
  carb: 14,
  yt: "https://www.youtube.com/embed/lbfjGqye3f0",
  img: "images/183.jpeg",
  ing: "Fish fillets\nCrumbs\nLemon",
  steps: "Slice fish into strips\nCoat and fry",
  tips: "Use white fish fillets",
  rating: 4
},
{
  id: 216,
  name: "Garlic Bread",
  cat: "Snacks",
  cuisine: "Italian",
  level: "Easy",
  size: "2 People",
  prep: "5m",
  cook: "8m",
  total: "13m",
  cal: 180,
  prot: 4,
  fat: 9,
  carb: 20,
  yt: "https://www.youtube.com/embed/ZxZO9wdOHPU",
  img: "images/182.jpeg",
  ing: "Bread\nGarlic butter\nHerbs",
  steps: "Apply butter to bread\nToast until crispy",
  tips: "Add mozzarella cheese",
  rating: 5
},
{
  id: 217,
  name: "Chocolate Chip Cookies",
  cat: "Snacks",
  cuisine: "Western",
  level: "Medium",
  size: "12 Items",
  prep: "15m",
  cook: "12m",
  total: "27m",
  cal: 150,
  prot: 2,
  fat: 8,
  carb: 20,
  yt: "https://www.youtube.com/embed/3vUtRRZG0xY",
  img: "images/181.jpeg",
  ing: "Choc chips\nButter\nFlour",
  steps: "Mix cookie dough\nStir in chips\nBake until edges set",
  tips: "Chill dough for better flavor",
  rating: 5
}
];





function displayRecipes(data) {
    const grid = document.getElementById('recipeGrid');
    if (!grid) return;

    grid.innerHTML = data.map(r => `
        <div class="col-md-4 mb-4 animate-up">
            <div class="card recipe-card h-100 shadow-sm border-0 position-relative">
                <div class="position-absolute top-0 start-0 m-3 z-index-1">
                    <span class="badge bg-success rounded-pill px-3 shadow">Healthy</span>
                    <span class="badge bg-white text-dark rounded-pill px-3 shadow">${r.total || '15m'}</span>
                </div>
                <img src="${r.img}" class="card-img-top">
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bold mb-2">${r.name}</h5>
                    <p class="text-muted small">${r.cat} | ${r.cuisine}</p>
                    <div class="text-warning mb-3">
                        ${'★'.repeat(Math.floor(r.rating))}${'☆'.repeat(5 - Math.floor(r.rating))}
                    </div>
                    <button class="btn btn-dark w-100 rounded-pill" onclick="viewDetails(${r.id})">View Recipe</button>
                </div>
            </div>
        </div>
    `).join('');
    
    setTimeout(handleScrollAnimation, 100);
}





function searchRecipe() {
    let q = document.getElementById('mainSearch').value.toLowerCase();
    displayRecipes(recipes.filter(r => r.name.toLowerCase().includes(q)));
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.category-card, .category-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    
    const filtered = (cat === 'All') ? recipes : recipes.filter(r => r.cat === cat);
    displayRecipes(filtered);
}

function sortData() {
    let criteria = document.getElementById('sortRecipes').value;
    let sorted = [...recipes];
    if (criteria === "quick") sorted.sort((a, b) => parseInt(a.total) - parseInt(b.total));
    else if (criteria === "top") sorted.sort((a, b) => b.rating - a.rating);
    displayRecipes(sorted);
}

function handleScrollAnimation() {
    document.querySelectorAll('.animate-up').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('show');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const isHomePage = !window.location.pathname.includes("recipes.html");
    if (isHomePage) displayRecipes(recipes.slice(0, 6)); 
    else displayRecipes(recipes);

    const greeting = document.getElementById('liveGreeting');
    if(greeting) {
        const hr = new Date().getHours();
        greeting.innerText = hr < 12 ? "Good Morning! ☀️" : (hr < 18 ? "Good Afternoon! 🍛" : "Good Evening! 🌙");
    }
    handleScrollAnimation();
});

window.addEventListener('scroll', handleScrollAnimation);
function handleHomeSearch() {
    const query = document.getElementById('homeSearchInput').value;
    if (query.trim() !== "") {
        window.location.href = `recipes.html?search=${encodeURIComponent(query)}`;
    } else {
        window.location.href = `recipes.html`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery && window.location.pathname.includes("recipes.html")) {
        const mainSearch = document.getElementById('mainSearch');
        if (mainSearch) {
            mainSearch.value = searchQuery;
            searchRecipe(); 
        }
    }
});
const container = document.getElementById('trendingImgContainer');
const img = document.getElementById('trendingImage');

if(container && img) {
    container.addEventListener('mousemove', (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(1.2)";
    });

    container.addEventListener('mouseleave', () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
    });
}
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    const pattern = document.querySelector('.nav-bg-pattern');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
        pattern.style.opacity = "0.15"; 
    } else {
        navbar.style.boxShadow = "none";
        pattern.style.opacity = "0.25"; 
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    document.querySelectorAll('.category-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
});
function navigateToCategory(categoryName) {
    window.location.href = `recipes.html?category=${categoryName}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        console.log("Filtering for: " + category);
    }
});
function searchRecipe() {
    let input = document.getElementById('mainSearch').value.toLowerCase();
    
    let cards = document.querySelectorAll('#recipeGrid .col-md-4, #recipeGrid .col-lg-4');

    cards.forEach(card => {
        let title = card.querySelector('.card-title')?.innerText.toLowerCase() || 
                    card.querySelector('h5')?.innerText.toLowerCase();

        if (title && title.includes(input)) {
            card.style.display = ""; 
        } else {
            card.style.display = "none"; 
        }
    });
}
function searchRecipe() {
    let query = document.getElementById('recipeSearchInput').value.toLowerCase();
    let cards = document.querySelectorAll('#recipeGrid .col-md-4, #recipeGrid .col-lg-4');

    cards.forEach(card => {
        let title = card.querySelector('h5')?.innerText.toLowerCase() || 
                    card.querySelector('.card-title')?.innerText.toLowerCase();
        
        if (title.includes(query)) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none"; 
        }
    });
}

function filterBy(category, buttonElement) {
    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    let cards = document.querySelectorAll('#recipeGrid .col-md-4, #recipeGrid .col-lg-4');

    cards.forEach(card => {
        let cardCategory = card.querySelector('p, .text-muted')?.innerText || "";
        
        if (category === 'All' || cardCategory.includes(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function searchRecipe() {
    let input = document.getElementById('mainSearch').value.toLowerCase();
    
    let recipeCards = document.querySelectorAll('#recipeGrid .col-md-4, #recipeGrid .col-lg-4, .recipe-card-item');

    recipeCards.forEach(card => {
        let title = card.querySelector('.card-title')?.innerText.toLowerCase() || 
                    card.querySelector('h5')?.innerText.toLowerCase();

        if (title) {
            if (title.includes(input)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none"; 
            }
        }
    });
}
function searchRecipe() {
    let input = document.getElementById('mainSearch').value.toLowerCase();
    
    let cards = document.querySelectorAll('#recipeGrid > div');

    cards.forEach(card => {
        let title = card.querySelector('h5')?.innerText.toLowerCase() || 
                    card.querySelector('.card-title')?.innerText.toLowerCase();

        if (title) {
            if (title.includes(input)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none"; 
            }
        }
    });
}
function searchRecipe() {
    let input = document.getElementById('mainSearch').value.toLowerCase();
    
    let recipeCards = document.querySelectorAll('#recipeGrid .col-md-4, #recipeGrid .col-lg-4, .card');

    recipeCards.forEach(card => {
        let titleElement = card.querySelector('.card-title') || card.querySelector('h5');
        
        if (titleElement) {
            let titleText = titleElement.innerText.toLowerCase();

            if (titleText.includes(input)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none"; 
            }
        }
    });
}
function searchRecipe() {
    let input = document.getElementById('mainSearch').value.toLowerCase();
    
    let recipeCards = document.querySelectorAll('#recipeGrid .col-md-4, #recipeGrid .col-lg-4, .card');

    recipeCards.forEach(card => {
        let titleElement = card.querySelector('.card-title') || card.querySelector('h5');
        
        if (titleElement) {
            let titleText = titleElement.innerText.toLowerCase();

            if (titleText.includes(input)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none"; 
            }
        }
    });
}
function saveNote() {
    const noteValue = document.getElementById('userNote').value;
    const statusMsg = document.getElementById('noteStatus');

    if (activeId) {
        localStorage.setItem('ff_note_' + activeId, noteValue);

        statusMsg.innerText = "Save is successfully! ✨";
        statusMsg.style.display = 'block';
        statusMsg.className = "small text-center mt-2 fw-bold text-success animate-fade-in";

        setTimeout(() => {
            statusMsg.style.display = 'none';
        }, 3000);
    } else {
        alert("Something went wrong! Please try again. 🛠️");
    }
}

function loadCollection() {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;

    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    
    if (favorites.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3 class="text-muted">Your collection is empty! 🥘</h3>
                <a href="recipes.html" class="btn btn-warning rounded-pill mt-3 px-4 fw-bold">Explore Recipes</a>
            </div>`;
        return;
    }

    const myRecipes = recipes.filter(r => favorites.includes(r.id));

    grid.innerHTML = myRecipes.map(r => {
        const userNote = localStorage.getItem('ff_note_' + r.id) || "";

        return `
        <div class="col-md-4 mb-4">
            <div class="card recipe-card h-100 border-0 shadow-sm position-relative overflow-hidden" style="border-radius: 20px;">
                
                <button class="btn btn-light position-absolute top-0 end-0 m-2 shadow-sm rounded-circle" 
                        onclick="removeFromFav(${r.id})" style="z-index: 10;">
                    <i class="fas fa-trash text-danger"></i>
                </button>

                <img src="${r.img}" class="card-img-top" style="height:180px; object-fit:cover;">
                
                <div class="card-body p-4">
                    <h5 class="fw-bold mb-1">${r.name}</h5>
                    <p class="text-muted small mb-3">📂 ${r.cat} | 🌍 ${r.cuisine}</p>

                    ${userNote ? `
                        <div class="p-3 mb-3" style="background-color: #fff9db; border-left: 5px solid #ffc107; border-radius: 10px;">
                            <small class="fw-bold text-dark d-block mb-1">✍️ My Secret Note:</small>
                            <p class="small text-dark mb-0 italic" style="font-style: italic;">"${userNote}"</p>
                        </div>
                    ` : `
                        <p class="small text-muted mb-3 italic">No notes added yet. ✨</p>
                    `}

                    <button class="btn btn-warning w-100 rounded-pill fw-bold" onclick="viewDetails(${r.id})">
                        VIEW RECIPE 🥘
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
}


function downloadFullRecipe() {
    const r = recipes.find(item => item.id === activeId);
    if (!r) return alert("Please select a recipe first!");

    

    const blob = new Blob([recipeContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${r.name}_Recipe_FlavorFlow.txt`;
    link.click();
}
function saveNote() {
    const noteValue = document.getElementById('userNote').value;
    const statusMsg = document.getElementById('noteStatus');

    if (activeId) {
        localStorage.setItem('ff_note_' + activeId, noteValue);

        statusMsg.innerText = "Save is successfully! ✨";
        statusMsg.style.display = 'block';
        statusMsg.className = "small text-center mt-2 fw-bold text-success";

        setTimeout(() => {
            statusMsg.style.display = 'none';
        }, 3000);
    }
}

function viewDetails(id) {
    const r = recipes.find(item => item.id === id);
    if (!r) return;
    activeId = id; 
    document.getElementById('modalName').innerText = "🥘 " + r.name;
    document.getElementById('modalImg').src = r.img;

    const savedNote = localStorage.getItem('ff_note_' + id);
    document.getElementById('userNote').value = savedNote || "";

    const modalEl = document.getElementById('recipeModal');
    const myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    myModal.show();
}
function downloadFullRecipe() {
    const r = recipes.find(item => item.id === activeId);
    if (!r) return alert("Please select a recipe first! 🥘");

    const personalNote = localStorage.getItem('ff_note_' + activeId) || "No personal notes added.";



    const blob = new Blob([recipeContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${r.name}_FlavorFlow_Recipe.txt`;
    link.click();
}


function downloadFullRecipe() {
    const r = recipes.find(item => item.id === activeId);
    if (!r) return alert("Please select a recipe first! 🥘");

    const personalNote = localStorage.getItem('ff_note_' + activeId) || "No personal notes added.";

    const recipeContent = `
⭐ FLAVORFLOW DIGITAL RECIPE BOOK ⭐
---------------------------------------
🥘 RECIPE: ${r.name}
📂 CATEGORY: ${r.cat} | CUISINE: ${r.cuisine}
👥 SERVES: ${r.size}
⏳ PREP: ${r.prep} | COOK: ${r.cook}
---------------------------------------

📊 NUTRITION:
🔥 Calories: ${r.cal} kcal
💪 Protein: ${r.prot}
🥑 Fat: ${r.fat}
🍞 Carbs: ${r.carb}

🛒 INGREDIENTS:
${r.ing}

👨‍🍳 METHOD:
${r.steps}

✍️ MY SECRET NOTES:
"${personalNote}"

---------------------------------------
💡 TIP: ${r.tips || "Enjoy your meal!"}
Generated by FlavorFlow Project
`;

    const blob = new Blob([recipeContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${r.name}_FlavorFlow_Recipe.txt`;
    link.click();
}

function removeFromFav(id) {
    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    favorites = favorites.filter(favId => favId !== id);
    localStorage.setItem('my_favorites', JSON.stringify(favorites));
    
    if (typeof loadCollection === "function") {
        loadCollection(); 
    }
}
function displayRecipes(data) {
    const grid = document.getElementById('recipeGrid');
    if (!grid) return;

    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];

    grid.innerHTML = data.map(r => {
        const isFavorite = favorites.includes(r.id);
        
        return `
        <div class="col-md-4 mb-4">
            <div class="card recipe-card h-100 border-0 shadow-sm position-relative overflow-hidden">
                
                <button class="btn p-0 border-0" 
                        onclick="toggleFavorite(${r.id})" 
                        style="position: absolute; top: 15px; right: 15px; z-index: 10; background: transparent;">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart text-danger fs-4" 
                       id="fav-icon-${r.id}" 
                       style="filter: drop-shadow(0px 0px 4px rgba(255,255,255,0.9));"></i>
                </button>

                <img src="${r.img}" class="card-img-top object-fit-cover" style="height:200px">
                
                <div class="card-body text-center p-4">
                    <h5 class="fw-bold mb-2">${r.name}</h5>
                    
                    <div class="text-warning mb-3">
                        ${'★'.repeat(Math.floor(r.rating || 5))}${'☆'.repeat(5 - Math.floor(r.rating || 5))}
                    </div>

                    <p class="text-muted small mb-3">${r.cat} | ${r.cuisine}</p>
                    
                    <button class="btn btn-warning w-100 rounded-pill fw-bold shadow-sm" onclick="viewDetails(${r.id})">
                        <i class="fas fa-eye me-2"></i>VIEW DETAILS 🥘
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function loadCollection() {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;

    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    
    if (favorites.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3 class="text-muted">Your collection is empty! 🥘</h3>
                <p>Go to the recipes page and click ❤️ to add them here.</p>
                <a href="recipes.html" class="btn btn-warning rounded-pill px-4 fw-bold shadow-sm mt-2">EXPLORE RECIPES</a>
            </div>`;
        return;
    }

    const myRecipes = recipes.filter(r => favorites.includes(r.id));

    grid.innerHTML = myRecipes.map(r => {
        const userNote = localStorage.getItem('ff_note_' + r.id) || "";

        return `
        <div class="col-md-4 mb-4">
            <div class="card recipe-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                
                <button class="btn btn-light position-absolute top-0 end-0 m-2 shadow-sm rounded-circle" 
                        onclick="removeFromFav(${r.id})" style="z-index: 10;">
                    <i class="fas fa-trash text-danger"></i>
                </button>

                <img src="${r.img}" class="card-img-top" style="height:180px; object-fit:cover;">
                
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bold mb-1">${r.name}</h5>
                    <p class="text-muted small mb-3">📂 ${r.cat} | 🌍 ${r.cuisine}</p>
                    
                    ${userNote ? `
                        <div class="p-2 mb-3 bg-light rounded-3 border-start border-4 border-warning">
                            <small class="text-dark d-block text-start italic" style="font-size: 0.8rem;">
                                <b>Note:</b> "${userNote.substring(0, 40)}..."
                            </small>
                        </div>
                    ` : ''}

                    <button class="btn btn-warning w-100 rounded-pill fw-bold shadow-sm" onclick="viewDetails(${r.id})">
                        VIEW RECIPE 🥘
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function searchCollection() {
    const searchBox = document.getElementById('collectSearch');
    if (!searchBox) return;

    let query = searchBox.value.toLowerCase();
    
    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    
    const filteredRecipes = recipes.filter(r => 
        favorites.includes(r.id) && r.name.toLowerCase().includes(query)
    );

    renderCollectionGrid(filteredRecipes);
}

function renderCollectionGrid(data) {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5 animate-fade-in">
                <h3 class="text-muted">No recipes found! 🥘</h3>
                <p>Try searching for a different dish name.</p>
            </div>`;
        return;
    }

    grid.innerHTML = data.map(r => {
        const userNote = localStorage.getItem('ff_note_' + r.id) || "";
        return `
        <div class="col-md-4 mb-4 animate-up show">
            <div class="card recipe-card h-100 border-0 shadow-sm position-relative overflow-hidden">
                <button class="btn btn-light position-absolute top-0 end-0 m-2 shadow-sm rounded-circle" 
                        onclick="removeFromFav(${r.id})" style="z-index: 10;">
                    <i class="fas fa-trash text-danger"></i>
                </button>
                <img src="${r.img}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bold mb-1">${r.name}</h5>
                    <p class="text-muted small mb-3">${r.cat} | ${r.cuisine}</p>
                    ${userNote ? `<div class="p-2 mb-3 note-preview text-start shadow-xs rounded"><small>"${userNote.substring(0, 40)}..."</small></div>` : ''}
                    <button class="btn btn-warning w-100 rounded-pill fw-bold" onclick="viewDetails(${r.id})">VIEW DETAILS 🥘</button>
                </div>
            </div>
        </div>`;
    }).join('');
}
function loadCollection() {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;

    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    const myRecipes = recipes.filter(r => favorites.includes(r.id));

    if (myRecipes.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5 animate-fade-in">
                <i class="fas fa-utensils display-1 text-warning opacity-50 mb-4"></i>
                <h2 class="fw-bold">Your collection is empty! 🥘</h2>
                <button class="btn btn-warning rounded-pill px-4 mt-3 fw-bold" onclick="window.location.href='recipes.html'">
                    EXPLORE RECIPES
                </button>
            </div>`;
        return;
    }
    renderCollectionGrid(myRecipes);
}

function renderCollectionGrid(data) {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5 animate-fade-in">
                <i class="fas fa-search-minus display-1 text-warning opacity-50 mb-4"></i>
                <h2 class="fw-bold">Oops! Nothing found.</h2>
                <button class="btn btn-warning rounded-pill px-4 mt-3 fw-bold" onclick="window.location.href='recipes.html'">
                    EXPLORE NEW RECIPES
                </button>
            </div>`;
        return;
    }

    grid.innerHTML = data.map(r => {
        const userNote = localStorage.getItem('ff_note_' + r.id) || "";
        return `
        <div class="col-md-4 mb-4 animate-up show">
            <div class="card recipe-card h-100 border-0 shadow-sm position-relative">
                <button class="btn btn-light position-absolute top-0 end-0 m-2 shadow-sm rounded-circle" 
                        onclick="removeFromFav(${r.id})" style="z-index: 10;">
                    <i class="fas fa-trash text-danger"></i>
                </button>
                <img src="${r.img}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bold mb-1">${r.name}</h5>
                    <p class="text-muted small mb-3">${r.cat} | ${r.cuisine}</p>
                    ${userNote ? `<div class="p-2 mb-3 note-preview text-start"><small>"${userNote.substring(0, 40)}..."</small></div>` : ''}
                    <button class="btn btn-warning w-100 rounded-pill fw-bold" onclick="viewDetails(${r.id})">VIEW DETAILS 🥘</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function searchCollection() {
    let query = document.getElementById('collectSearch').value.toLowerCase();
    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    
    const filtered = recipes.filter(r => 
        favorites.includes(r.id) && r.name.toLowerCase().includes(query)
    );
    renderCollectionGrid(filtered);
}

function filterCollect(category, btn) {
    document.querySelectorAll('.filter-pill').forEach(b => {
        b.classList.remove('active', 'btn-dark');
        b.classList.add('btn-outline-dark');
    });
    if(btn) {
        btn.classList.add('active', 'btn-dark');
        btn.classList.remove('btn-outline-dark');
    }

    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    let filtered = recipes.filter(r => favorites.includes(r.id));

    if (category !== 'All') {
        filtered = filtered.filter(r => r.cat === category);
    }
    renderCollectionGrid(filtered);
}

function removeFromFav(id) {
    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    favorites = favorites.filter(favId => favId !== id);
    localStorage.setItem('my_favorites', JSON.stringify(favorites));
    loadCollection(); 
}


function viewDetails(id) {
    const r = recipes.find(item => item.id === id);
    if (!r) return;
    
    activeId = id; 

    document.getElementById('modalName').innerText = "🥘 " + r.name;
    document.getElementById('modalImg').src = r.img;

    document.getElementById('modalCat').innerText = "" + r.cat;
    document.getElementById('modalTotal').innerText = " " + (r.total || "15m");
    document.getElementById('modalSize').innerText = "" + (r.size || "1 Person");

    document.getElementById('modalCal').innerText = r.cal || "0";
    document.getElementById('modalProt').innerText = r.prot || "0g";
    document.getElementById('modalFat').innerText = r.fat || "0g";
    document.getElementById('modalCarb').innerText = r.carb || "0g";

    document.getElementById('modalIng').innerText = r.ing;
    document.getElementById('modalSteps').innerText = r.steps;

    const savedNote = localStorage.getItem('ff_note_' + id);
    document.getElementById('userNote').value = savedNote || "";

    const modalEl = document.getElementById('recipeModal');
    const myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    myModal.show();
}

function saveNote() {
    const noteContent = document.getElementById('userNote').value;
    const statusSpan = document.getElementById('noteStatus');

    if (activeId) {
        localStorage.setItem('ff_note_' + activeId, noteContent);

        statusSpan.innerHTML = "✅ Saved Successfully! 📝";
        statusSpan.style.color = "#28a745"; 
        statusSpan.style.fontWeight = "bold";
        statusSpan.style.fontSize = "14px";
        statusSpan.className = "ms-2 animate-fade-in"; 

        setTimeout(() => {
            statusSpan.style.opacity = "0";
            setTimeout(() => {
                statusSpan.innerHTML = "";
                statusSpan.style.opacity = "1";
            }, 500);
        }, 3000);

        if (typeof loadCollection === "function") {
            loadCollection();
        }
    }
}
document.getElementById('modalPrep').innerText = r.prep;
document.getElementById('modalCook').innerText = r.cook;
document.getElementById('modalTips').innerText = r.tip; 
document.getElementById('modalRating').innerHTML = "⭐".repeat(r.rating);
function viewDetails(id) {
    const r = recipes.find(item => item.id === id);
    if (!r) return;
    
    activeId = id; 

    document.getElementById('modalName').innerText = "🥘 " + r.name;
    document.getElementById('modalImg').src = r.img;
    document.getElementById('modalCat').innerText = r.cat;
    
    document.getElementById('modalCuisine').innerText = r.cuisine || "Global";
    document.getElementById('modalPrep').innerText = r.prep || "5m";
    document.getElementById('modalCook').innerText = r.cook || "10m";
    document.getElementById('modalTotal').innerText = r.total || "15m";
    document.getElementById('modalTips').innerText = r.tip || "Enjoy your meal! 🔥";
    
    const ratingDiv = document.getElementById('modalRating');
    if (ratingDiv) {
        ratingDiv.innerHTML = "⭐".repeat(r.rating || 5);
    }

    document.getElementById('modalCal').innerText = r.cal || "0";
    document.getElementById('modalProt').innerText = r.prot || "0g";
    document.getElementById('modalFat').innerText = r.fat || "0g";
    document.getElementById('modalCarb').innerText = r.carb || "0g";

    document.getElementById('modalIng').innerText = r.ing;
    document.getElementById('modalSteps').innerText = r.steps;

    const videoLink = document.getElementById('modalVideo');
    if (r.yt) {
        videoLink.href = r.yt;
        videoLink.parentElement.style.display = "block";
    } else {
        videoLink.parentElement.style.display = "none";
    }

    const modalEl = document.getElementById('recipeModal');
    const myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    myModal.show();
}
function viewDetails(id) {
    const r = recipes.find(item => item.id === id);
    if (!r) return;
    
    activeId = id; 

    document.getElementById('modalName').innerText = "🥘 " + r.name;
    document.getElementById('modalImg').src = r.img;
    document.getElementById('modalCat').innerText = r.cat;
    
    document.getElementById('modalCuisine').innerText = r.cuisine || "Global";
    document.getElementById('modalPrep').innerText = r.prep || "5m";
    document.getElementById('modalCook').innerText = r.cook || "10m";
    document.getElementById('modalTotal').innerText = r.total || "15m";
    
    document.getElementById('modalSize').innerText = r.size || "1 Person"; 
    
    document.getElementById('modalTips').innerText = r.tip || "Enjoy your meal! 🔥";
    if (document.getElementById('modalRating')) {
        document.getElementById('modalRating').innerHTML = "⭐".repeat(r.rating || 5);
    }

    document.getElementById('modalCal').innerText = r.cal || "0";
    document.getElementById('modalProt').innerText = r.prot || "0g";
    document.getElementById('modalFat').innerText = r.fat || "0g";
    document.getElementById('modalCarb').innerText = r.carb || "0g";

    document.getElementById('modalIng').innerText = r.ing;
    document.getElementById('modalSteps').innerText = r.steps;

    const videoLink = document.getElementById('modalVideo');
    if (r.yt) {
        videoLink.href = r.yt;
        videoLink.parentElement.style.display = "block";
    } else {
        videoLink.parentElement.style.display = "none";
    }

    const modalEl = document.getElementById('recipeModal');
    bootstrap.Modal.getOrCreateInstance(modalEl).show();
}









function viewDetails(id) {
    const r = recipes.find(item => item.id === id);
    if (!r) return;
    
    activeId = id; 

    document.getElementById('modalName').innerText = "🥘 " + r.name;
    document.getElementById('modalImg').src = r.img;

    document.getElementById('modalCat').innerText = r.cat;
    document.getElementById('modalCuisine').innerText = r.cuisine || "Global";
    document.getElementById('modalPrep').innerText = r.prep || "5m";
    document.getElementById('modalCook').innerText = r.cook || "10m";
    document.getElementById('modalTotal').innerText = r.total || "15m";
    document.getElementById('modalSize').innerText = r.size || "1 Person"; 
    
    document.getElementById('modalCal').innerText = r.cal || "0";
    document.getElementById('modalProt').innerText = r.prot || "0g";
    document.getElementById('modalFat').innerText = r.fat || "0g";
    document.getElementById('modalCarb').innerText = r.carb || "0g";

    document.getElementById('modalIng').innerText = r.ing;
    document.getElementById('modalSteps').innerText = r.steps;
    document.getElementById('modalTips').innerText = r.tips || "Serve hot! 🔥";

    
    document.getElementById('userNote').value = localStorage.getItem('ff_note_' + id) || "";

    const modalEl = document.getElementById('recipeModal');
    const myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    myModal.show();
}






function showTrendingRecipe() {
    Swal.fire({
        title: '<strong class="text-warning">Today\'s Hot Pick! 🔥</strong>',
        html: `
            <div class="text-center">
                <img src="C:/Users/Navoda/Desktop/Interactive_Web_App/images/220.jpeg" 
                     class="img-fluid rounded-3 mb-3" style="max-height: 250px; object-fit: cover;">
                <h4 class="text-dark fw-bold mb-2">Spicy Chicken Noodles 🍜</h4>
                <p class="text-muted">Craving something exciting? This fiery noodle dish is the talk of the town!</p>
                <ul class="list-unstyled text-start small mt-3">
                    <li>⏱️ Prep: 15 mins | Cook: 20 mins</li>
                    <li>🌶️ Spice Level: Medium-Hot</li>
                    <li>⭐ Rating: 4.8/5</li>
                </ul>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'View Full Recipe',
        confirmButtonColor: '#ffc107', 
        showCloseButton: true,
        padding: '2em', 
        width: '500px', 
        allowOutsideClick: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'recipes.html?recipe=spicy-chicken-noodles'; 
        }
    });
}
function showTrendingRecipe() {
    Swal.fire({
        title: '<b style="font-size:30px;">Trending Now! 🍜</b>',
        html: `
            <div style="text-align: center;">
                <img src="C:/Users/Navoda/Desktop/Interactive_Web_App/images/220.jpeg" class="img-fluid rounded-4 mb-3">
                <p style="font-size:18px;">Our <b>Spicy Chicken Noodles</b> is the most loved dish today!</p>
                <p>Would you like to see the full recipe instructions? 👨‍🍳</p>
            </div>
        `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#ffc107',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Show Me! 😍',
        padding: '3em', 
        borderRadius: '20px'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'recipes.html';
        }
    });
}

function showTrendingRecipeModal() {
    document.getElementById('modalName').innerText = "Spicy Chicken Noodles 🍜";
    document.getElementById('modalImg').src = "C:/Users/Navoda/Desktop/Interactive_Web_App/images/220.jpeg";
    document.getElementById('modalCat').innerText = "Main Course";
    document.getElementById('modalCuisine').innerText = "Asian Fusion";
    document.getElementById('modalPrep').innerText = "15 min";
    document.getElementById('modalCook').innerText = "20 min";
    document.getElementById('modalSize').innerText = "2 Persons";
    document.getElementById('modalTotal').innerText = "35 min";
    
    document.getElementById('modalCal').innerText = "520";
    document.getElementById('modalProt').innerText = "28g";
    document.getElementById('modalFat').innerText = "18g";
    document.getElementById('modalCarb').innerText = "65g";

    document.getElementById('modalIng').innerText = "• 200g Fresh Egg Noodles\n• 150g Sliced Chicken\n• 2 tbsp Dark Soy Sauce\n• 1 tbsp Chili Oil\n• Garlic & Bok Choy";
    document.getElementById('modalSteps').innerText = "1. Boil noodles until al dente.\n2. Sear chicken in a hot wok.\n3. Add veggies and special chili sauce.\n4. Toss noodles and serve with sesame seeds.";
    document.getElementById('modalTips').innerText = "Use a high-heat wok for that authentic smoky flavor!";

    var myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
    myModal.show();
}

function saveNote() {
    const note = document.getElementById('userNote').value;
    const status = document.getElementById('noteStatus');

    if (note.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Empty Note!',
            text: 'Please type something before saving.',
            confirmButtonColor: '#ffc107'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Successfully Saved! ✅',
        text: 'Your personal tip has been saved for this recipe.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });

    if (status) {
        status.innerText = "Saved!";
        status.style.color = "#198754"; 
        status.style.fontWeight = "bold";
    }
}

function handleHomeSearch() {
    const searchInput = document.getElementById('homeSearchInput').value.toLowerCase();
    const recipeGrid = document.getElementById('recipeGrid');
    
    const cards = recipeGrid.getElementsByClassName('recipe-card-parent'); 

    let found = false;

    if (searchInput === "") {
        for (let card of cards) { card.style.display = ""; }
        return;
    }

    for (let i = 0; i < cards.length; i++) {
        const titleTag = cards[i].querySelector('h5');
        if (titleTag) {
            const title = titleTag.innerText.toLowerCase();
            if (title.includes(searchInput)) {
                cards[i].style.display = ""; 
                found = true;
            } else {
                cards[i].style.display = "none"; 
            }
        }
    }

    if (!found) {
        Swal.fire({
            icon: 'info',
            title: 'Not Found',
            text: `Sorry, we couldn't find any recipe for "${searchInput}"`,
            confirmButtonColor: '#ffc107'
        });
    }
    
    recipeGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('homeSearchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleHomeSearch();
            }
        });
    }
});
function handleHomeSearch() {
    const searchInput = document.getElementById('homeSearchInput').value.trim();
    
    if (searchInput !== "") {
        window.location.href = `recipes.html?search=${encodeURIComponent(searchInput)}`;
    } else {
        Swal.fire({
            icon: 'warning',
            text: 'Please enter a recipe name!',
            confirmButtonColor: '#ffc107'
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery) {
        const recipeSearchInput = document.getElementById('recipeSearchInput');
        if (recipeSearchInput) {
            recipeSearchInput.value = searchQuery;
        }

        filterRecipes(searchQuery.toLowerCase());
    }
});

function filterRecipes(query) {
    const recipeGrid = document.getElementById('recipeGrid');
    if (!recipeGrid) return;

    const cards = recipeGrid.getElementsByClassName('recipe-card-parent'); 
    let found = false;

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('h5').innerText.toLowerCase();
        if (title.includes(query)) {
            cards[i].style.display = ""; 
            found = true;
        } else {
            cards[i].style.display = "none";
        }
    }

    if (!found) {
        Swal.fire({
            icon: 'info',
            title: 'No Recipes Found',
            text: `We couldn't find any results for "${query}"`,
            confirmButtonColor: '#ffc107'
        });
    }
}



function saveNote() {
    const rName = document.getElementById('modalName').innerText.trim();
    const rNote = document.getElementById('userNote').value;

    if (rNote.trim() !== "") {
        localStorage.setItem('recipe_note_' + rName, rNote);
        Swal.fire({ icon: 'success', title: 'Saved!', timer: 1000, showConfirmButton: false });
    } else {
        Swal.fire({ icon: 'warning', title: 'Empty!', text: 'Please type something.' });
    }
}

function updateNoteOnOpen() {
    const rName = document.getElementById('modalName').innerText.trim();
    const rNoteArea = document.getElementById('userNote');
    if (rName && rNoteArea) {
        const stored = localStorage.getItem('recipe_note_' + rName);
        rNoteArea.value = stored ? stored : "";
    }
}

document.getElementById('recipeModal').addEventListener('shown.bs.modal', updateNoteOnOpen);

function downloadFullRecipe() {
    const recipeName = document.getElementById('modalName').innerText;
    const level = document.getElementById('modalLevel').innerText;
    const category = document.getElementById('modalCat').innerText;
    const cuisine = document.getElementById('modalCuisine').innerText;
    const prep = document.getElementById('modalPrep').innerText;
    const cook = document.getElementById('modalCook').innerText;
    const total = document.getElementById('modalTotal').innerText;
    const serves = document.getElementById('modalSize').innerText;
    
    const cal = document.getElementById('modalCal').innerText;
    const prot = document.getElementById('modalProt').innerText;
    const fat = document.getElementById('modalFat').innerText;
    const carb = document.getElementById('modalCarb').innerText;

    const ingredients = document.getElementById('modalIng').innerText;
    const steps = document.getElementById('modalSteps').innerText;
    const tips = document.getElementById('modalTips').innerText;
    const userNote = document.getElementById('userNote').value; 

    const fileContent = `
==================================================
        🥘 ${recipeName.toUpperCase()} 🥘
==================================================

[ QUICK INFO ]
- Category  : ${category}
- Cuisine   : ${cuisine}
- Level     : ${level}
- Serves    : ${serves} persons

[ TIME ]
- Prep Time : ${prep}
- Cook Time : ${cook}
- Total Time: ${total}

[ NUTRITION INFO ]
- Calories  : ${cal}
- Protein   : ${prot}
- Fat       : ${fat}
- Carbs     : ${carb}

--------------------------------------------------
🛒 INGREDIENTS:
--------------------------------------------------
${ingredients}

--------------------------------------------------
👨‍🍳 COOKING METHOD:
--------------------------------------------------
${steps}

--------------------------------------------------
💡 PRO TIP:
${tips}

--------------------------------------------------
✍️ MY PERSONAL NOTES:
${userNote ? userNote : "No personal notes added."}

--------------------------------------------------
Generated by FlavorFlow Digital Recipe Book - 2026
==================================================
    `;

    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${recipeName.replace(/\s+/g, '_')}_Recipe.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function saveNote() {
    const recipeName = document.getElementById('modalName').innerText.trim();
    const noteValue = document.getElementById('userNote').value;

    if (noteValue.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Empty Note!',
            text: 'Please type something before saving.',
            confirmButtonColor: '#ffc107'
        });
    } else {
        localStorage.setItem('recipe_note_' + recipeName, noteValue);

        Swal.fire({
            icon: 'success',
            title: 'Saved!',
            text: 'Your note for ' + recipeName + ' has been saved.',
            timer: 1500,
            showConfirmButton: false
        });
    }
}

function loadRecipeNote() {
    const recipeName = document.getElementById('modalName').innerText.trim();
    const noteArea = document.getElementById('userNote');
    
    if (recipeName && noteArea) {
        const savedData = localStorage.getItem('recipe_note_' + recipeName);
        noteArea.value = savedData ? savedData : "";
        console.log("Loading note for: " + recipeName); 
    }
}

document.addEventListener('shown.bs.modal', function (event) {
    if (event.target.id === 'recipeModal') {
        loadRecipeNote();
    }
});

const observer = new MutationObserver(() => {
    loadRecipeNote();
});

const targetTitle = document.getElementById('modalName');
if (targetTitle) {
    observer.observe(targetTitle, { childList: true });
}




function viewDetails(id) {
    const r = recipes.find(item => item.id === id);
    if (!r) return;
    
    activeId = id; 

    document.getElementById('modalName').innerText = "🥘 " + r.name;
    document.getElementById('modalImg').src = r.img;
    document.getElementById('modalCat').innerText = r.cat;
    document.getElementById('modalCuisine').innerText = r.cuisine || "Global";
    document.getElementById('modalPrep').innerText = r.prep;
    document.getElementById('modalCook').innerText = r.cook;
    document.getElementById('modalTotal').innerText = r.total;
    document.getElementById('modalSize').innerText = r.size; 
    
    document.getElementById('modalCal').innerText = r.cal;
    document.getElementById('modalProt').innerText = r.prot;
    document.getElementById('modalFat').innerText = r.fat;
    document.getElementById('modalCarb').innerText = r.carb;

    document.getElementById('modalIng').innerText = r.ing;
    document.getElementById('modalSteps').innerText = r.steps;
    document.getElementById('modalTips').innerText = r.tips || "Serve hot! 🔥";

    const videoLink = document.getElementById('modalVideoLink');
    
    if (videoLink) {
        if (r.yt && r.yt !== "") {
            let finalUrl = r.yt.replace("embed/", "watch?v=");
            
            videoLink.href = finalUrl;       
            videoLink.innerText = finalUrl;  
            videoLink.target = "_blank";     
            videoLink.parentElement.style.display = "block"; 
        } else {
            videoLink.parentElement.style.display = "none"; 
        }
    }

    document.getElementById('userNote').value = localStorage.getItem('ff_note_' + id) || "";

    const modalEl = document.getElementById('recipeModal');
    const myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    myModal.show();
}



function saveNote() {
    const recipeName = document.getElementById('modalName').innerText;
    const noteContent = document.getElementById('userNote').value;

    if (!noteContent.trim()) {
        Swal.fire('Oops!', 'Please write something before saving.', 'warning');
        return;
    }

    let myNotes = JSON.parse(localStorage.getItem('recipeNotes')) || [];

    const newNote = {
        id: Date.now(), 
        name: recipeName,
        note: noteContent,
        date: new Date().toLocaleDateString()
    };

    myNotes.push(newNote);
    localStorage.setItem('recipeNotes', JSON.stringify(myNotes));

    Swal.fire({
        title: 'Saved!',
        text: 'Your note has been added to the collection.',
        icon: 'success',
        confirmButtonColor: '#ffc107'
    });
    
    document.getElementById('userNote').value = ""; 
}


document.addEventListener('DOMContentLoaded', displayNotes);

function displayNotes() {
    const container = document.getElementById('notesContainer');
    const myNotes = JSON.parse(localStorage.getItem('recipeNotes')) || [];

    if (myNotes.length === 0) {
        container.innerHTML = `<div class="col-12 text-center p-5">
            <p class="text-muted">No notes found. Save some notes from your favorite recipes!</p>
        </div>`;
        return;
    }

    container.innerHTML = myNotes.map(item => `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="fw-bold text-warning mb-0">${item.name}</h5>
                        <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteNote(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <p class="text-dark small mb-3" style="font-style: italic;">"${item.note}"</p>
                    <small class="text-muted">Saved on: ${item.date}</small>
                </div>
            </div>
        </div>
    `).join('');
}

function removeItem(id) {
    Swal.fire({
        title: 'Are you sure? 🗑️',
        text: "This will be permanently removed from your collection!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ffc107',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            let data = JSON.parse(localStorage.getItem('flavorFlowCollection')) || [];
            
            data = data.filter(item => item.id !== id);
            
            localStorage.setItem('flavorFlowCollection', JSON.stringify(data));
            
            loadCollection();
            
            Swal.fire('Deleted!', 'The recipe has been successfully removed', 'success');
        }
    });
}

function processCollection(type) {
    const name = document.getElementById('modalName').innerText;
    const img = document.getElementById('modalImg').src;
    let note = "";

    if (type === 'note') {
        note = document.getElementById('userNote').value;
        if (!note.trim()) {
            Swal.fire('Warning!', 'Please write a note before saving.', 'warning');
            return;
        }
    }

    let collection = JSON.parse(localStorage.getItem('flavorFlowCollection')) || [];

    const newItem = {
        id: Date.now(),
        name: name,
        image: img,
        note: note,
        type: type, 
        date: new Date().toLocaleDateString()
    };

    collection.push(newItem);
    localStorage.setItem('flavorFlowCollection', JSON.stringify(collection));

    Swal.fire({
        title: 'Success! ✨',
        text: `${name} has been added to your collection. Redirecting...`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });

    setTimeout(() => {
        window.location.href = 'collection.html';
    }, 1500);
}


function saveNote() {
    processCollection('note');
}

function addtofavourite() {
    processCollection('favourite');
}

function downloadFullRecipe() {
    console.log("Downloading PDF...");
    processCollection('download');
}






function showTrendingRecipeModal() {
    document.getElementById('modalName').innerText = "Spicy Chicken Noodles 🍜";
    document.getElementById('modalImg').src = "images/220.jpeg"; 
    
    document.getElementById('modalCat').innerText = "Main Course";
    document.getElementById('modalCuisine').innerText = "Asian Fusion";
    document.getElementById('modalPrep').innerText = "15 min";
    document.getElementById('modalCook').innerText = "20 min";
    document.getElementById('modalSize').innerText = "2 Persons";
    document.getElementById('modalTotal').innerText = "35 min";
    
    document.getElementById('modalCal').innerText = "520";
    document.getElementById('modalProt').innerText = "28g";
    document.getElementById('modalFat').innerText = "18g";
    document.getElementById('modalCarb').innerText = "65g";

    document.getElementById('modalIng').innerText = "• 200g Fresh Egg Noodles\n• 150g Sliced Chicken\n• 2 tbsp Dark Soy Sauce\n• 1 tbsp Chili Oil\n• Garlic & Bok Choy\n• Chopped Green Onions";
    
    document.getElementById('modalSteps').innerText = "1. Boil noodles until al dente and set aside.\n2. Sear chicken strips in a hot wok until golden brown.\n3. Add garlic, bok choy, and the special spicy sauce mixture.\n4. Toss in the noodles and stir-fry on high heat for 2 minutes.\n5. Serve hot with a sprinkle of sesame seeds.";
    
    document.getElementById('modalTips').innerText = "For an extra kick, add a teaspoon of toasted sesame oil at the very end!";

    const videoLink = document.getElementById('modalVideoLink');
    if (videoLink) {
        const youtubeUrl = "https://youtu.be/MhzBUy-JOCE?si=-MMb9cCpv0dDlAos";
        videoLink.href = youtubeUrl;
        videoLink.innerText = "Watch Full Spicy Chicken Noodles Recipe Video 🎥";
        
        if (videoLink.parentElement) {
            videoLink.parentElement.style.display = "block";
        }
    }

    var myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
    myModal.show();
}







function showRecipeDetails(id) {
    const recipe = recipes.find(r => r.id === id);

    if (recipe) {
        document.getElementById('modalName').innerText = "🥘 " + recipe.name;
        document.getElementById('modalRating').innerText = recipe.rating;
        document.getElementById('modalLevel').innerText = recipe.level;
        document.getElementById('modalImg').src = recipe.image;
        document.getElementById('modalCat').innerText = recipe.category;
        document.getElementById('modalCuisine').innerText = recipe.cuisine;
        document.getElementById('modalPrep').innerText = recipe.prep;
        document.getElementById('modalCook').innerText = recipe.cook;
        document.getElementById('modalSize').innerText = recipe.serves;
        document.getElementById('modalTotal').innerText = recipe.total;
        
        document.getElementById('modalCal').innerText = recipe.calories;
        document.getElementById('modalProt').innerText = recipe.protein;
        document.getElementById('modalFat').innerText = recipe.fat;
        document.getElementById('modalCarb').innerText = recipe.carbs;

        const videoLink = document.getElementById('modalVideoLink');
        videoLink.href = recipe.video;
        videoLink.innerText = recipe.video;

        document.getElementById('modalIng').innerText = recipe.ingredients;
        document.getElementById('modalSteps').innerText = recipe.method;
        document.getElementById('modalTips').innerText = recipe.tip;

        const myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
        myModal.show();
    }
}


function openRecipe(name, rating, img, level, cat, cuisine, prep, cook, serves, total, cal, prot, fat, carb, video, ingredients, steps, tips) {
    document.getElementById('modalName').innerText = "🥘 " + name;
    document.getElementById('modalRating').innerText = rating;
    document.getElementById('modalImg').src = img;
    document.getElementById('modalLevel').innerHTML = "⚖️ " + level;
    document.getElementById('modalCat').innerText = cat;
    document.getElementById('modalCuisine').innerText = cuisine;
    document.getElementById('modalPrep').innerText = prep;
    document.getElementById('modalCook').innerText = cook;
    document.getElementById('modalSize').innerText = serves;
    document.getElementById('modalTotal').innerText = total;
    
    document.getElementById('modalCal').innerText = cal;
    document.getElementById('modalProt').innerText = prot + "g";
    document.getElementById('modalFat').innerText = fat + "g";
    document.getElementById('modalCarb').innerText = carb + "g";

    const videoBtn = document.getElementById('modalVideoLink');
    videoBtn.href = video;
    videoBtn.innerText = video;

    document.getElementById('modalIng').innerText = ingredients;
    document.getElementById('modalSteps').innerText = steps;
    document.getElementById('modalTips').innerText = tips;

    var myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
    myModal.show();
}


function showRecipeDetails(id) {
    var recipe = recipes.find(function(r) {
        return r.id === id;
    });

    if (recipe) {
        document.getElementById('modalName').innerText = "🥘 " + (recipe.name || 'Recipe');
        document.getElementById('modalImg').src = recipe.image || '';
        document.getElementById('modalLevel').innerText = recipe.level || 'Easy';
        document.getElementById('modalCat').innerText = recipe.category || '-';
        document.getElementById('modalCuisine').innerText = recipe.cuisine || '-';
        document.getElementById('modalPrep').innerText = recipe.prep || '-';
        document.getElementById('modalCook').innerText = recipe.cook || '-';
        document.getElementById('modalSize').innerText = recipe.serves || '-';
        document.getElementById('modalTotal').innerText = recipe.total || '-';
        
        document.getElementById('modalCal').innerText = recipe.calories || '0';
        document.getElementById('modalProt').innerText = recipe.protein || '0g';
        document.getElementById('modalFat').innerText = recipe.fat || '0g';
        document.getElementById('modalCarb').innerText = recipe.carbs || '0g';

        var videoLink = document.getElementById('modalVideoLink');
        if (videoLink) {
            videoLink.href = recipe.video || '#';
            videoLink.innerText = recipe.video || 'No video available';
        }

        document.getElementById('modalIng').innerText = recipe.ingredients || '';
        document.getElementById('modalSteps').innerText = recipe.method || '';
        document.getElementById('modalTips').innerText = recipe.tip || 'Enjoy your meal!';

        var modalElement = document.getElementById('recipeModal');
        var myModal = new bootstrap.Modal(modalElement);
        myModal.show();
    } else {
        console.error("Recipe not found for ID:", id);
    }
}



function showRecipeDetails(id) {
    var recipe = recipes.find(function(item) {
        return item.id === id;
    });

    if (recipe) {
        var setEl = function(id, value, isImg) {
            var el = document.getElementById(id);
            if (el) {
                if (isImg) el.src = value || '';
                else el.innerText = value || '-';
            }
        };

        setEl('modalName', "🥘 " + recipe.name);
        setEl('modalImg', recipe.image, true);
        setEl('modalLevel', recipe.level);
        setEl('modalCat', recipe.category);
        setEl('modalCuisine', recipe.cuisine);
        setEl('modalPrep', recipe.prep);
        setEl('modalCook', recipe.cook);
        setEl('modalSize', recipe.serves);
        setEl('modalTotal', recipe.total);
        
        setEl('modalCal', recipe.calories);
        setEl('modalProt', recipe.protein);
        setEl('modalFat', recipe.fat);
        setEl('modalCarb', recipe.carbs);

        var videoLink = document.getElementById('modalVideoLink');
        if (videoLink) {
            videoLink.href = recipe.video || '#';
            videoLink.innerText = recipe.video || 'No video available';
        }

        setEl('modalIng', recipe.ingredients);
        setEl('modalSteps', recipe.method);
        setEl('modalTips', recipe.tip);

        var modalEl = document.getElementById('recipeModal');
        var myModal = new bootstrap.Modal(modalEl);
        myModal.show();
    } else {
        console.error("Recipe සොයාගත නොහැක! ID: " + id);
    }
}

function showRecipeDetails(id) {
    const collectionData = JSON.parse(localStorage.getItem('flavorFlowCollection')) || [];
    let item = collectionData.find(i => i.id == id);

    if (typeof recipes !== 'undefined') {
        const fullData = recipes.find(r => r.id == id);
        if (fullData) {
            item = { ...item, ...fullData };
        }
    }

    if (item) {
        document.getElementById('modalName').innerText = "🥘 " + (item.name || "No Name");
        document.getElementById('modalImg').src = item.image || "";
        document.getElementById('modalCat').innerText = item.category || "-";
        document.getElementById('modalCuisine').innerText = item.cuisine || "-";
        document.getElementById('modalPrep').innerText = item.prep || "-";
        document.getElementById('modalCook').innerText = item.cook || "-";
        document.getElementById('modalSize').innerText = item.serves || "-";
        document.getElementById('modalTotal').innerText = item.total || "-";
        
        document.getElementById('modalIng').innerText = item.ingredients || "විස්තර ඇතුළත් කර නැත.";
        document.getElementById('modalSteps').innerText = item.method || item.steps || "ක්‍රමය ඇතුළත් කර නැත.";

        const myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
        myModal.show();
    } else {
        Swal.fire('Error', 'දත්ත සොයාගත නොහැක!', 'error');
    }
}
function showRecipeDetails(id) {
    const item = recipes.find(r => r.id == id);

    if (item) {
        document.getElementById('modalName').innerText = item.name;
        document.getElementById('modalImg').src = item.image;
        
        document.getElementById('modalCat').innerText = item.category || '-';
        document.getElementById('modalCuisine').innerText = item.cuisine || '-';
        document.getElementById('modalTotal').innerText = item.total || '-';
        
        document.getElementById('modalIng').innerText = item.ingredients || 'No details found.';
        document.getElementById('modalSteps').innerText = item.method || item.steps || 'No details found.';

        const myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
        myModal.show();
    } else {
        Swal.fire('Error', 'Data not found!', 'error');
    }
}


function showRecipeDetails(id) {
    const item = recipes.find(r => r.id == id);

    if (item) {
        document.getElementById('modalName').innerText = item.name;
        document.getElementById('modalImg').src = item.image;
        document.getElementById('modalCat').innerText = item.category || '-';
        document.getElementById('modalCuisine').innerText = item.cuisine || '-';
        document.getElementById('modalTotal').innerText = item.total || '-';
        document.getElementById('modalIng').innerText = item.ingredients || 'No ingredients listed.';
        document.getElementById('modalSteps').innerText = item.method || item.steps || 'No steps listed.';

        const myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
        myModal.show();
    } else {
        Swal.fire('Error', 'Details not found for this recipe!', 'error');
    }
}






function downloadFullRecipe() {
    const recipeName = document.getElementById('modalName').innerText;
    const level = document.getElementById('modalLevel').innerText;
    const category = document.getElementById('modalCat').innerText;
    const cuisine = document.getElementById('modalCuisine').innerText;
    const prep = document.getElementById('modalPrep').innerText;
    const cook = document.getElementById('modalCook').innerText;
    const total = document.getElementById('modalTotal').innerText;
    const serves = document.getElementById('modalSize').innerText;
    
    const cal = document.getElementById('modalCal').innerText;
    const prot = document.getElementById('modalProt').innerText;
    const fat = document.getElementById('modalFat').innerText;
    const carb = document.getElementById('modalCarb').innerText;

    const ingredients = document.getElementById('modalIng').innerText;
    const steps = document.getElementById('modalSteps').innerText;
    const tips = document.getElementById('modalTips').innerText;
    const userNote = document.getElementById('userNote').value; 

    const fileContent = `
==================================================
        🥘 ${recipeName.toUpperCase()} 🥘
==================================================

[ QUICK INFO ]
- Category  : ${category}
- Cuisine   : ${cuisine}
- Level     : ${level}
- Serves    : ${serves} persons

[ TIME ]
- Prep Time : ${prep}
- Cook Time : ${cook}
- Total Time: ${total}

[ NUTRITION INFO ]
- Calories  : ${cal}
- Protein   : ${prot}
- Fat       : ${fat}
- Carbs     : ${carb}

--------------------------------------------------
🛒 INGREDIENTS:
--------------------------------------------------
${ingredients}

--------------------------------------------------
👨‍🍳 COOKING METHOD:
--------------------------------------------------
${steps}

--------------------------------------------------
💡 PRO TIP:
${tips}

--------------------------------------------------
✍️ MY PERSONAL NOTES:
${userNote ? userNote : "No personal notes added."}

--------------------------------------------------
Generated by FlavorFlow Digital Recipe Book - 2026
==================================================
    `;

    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${recipeName.replace(/\s+/g, '_')}_Recipe.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}



function printSingleRecipe() {
    const r = recipes.find(item => item.id === activeId);
    if (!r) {
        alert("Recipe details not found!");
        return;
    }

    const personalNote = document.getElementById('userNote')?.value || "No personal notes added.";

    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <html>
        <head>
            <title>FlavorFlow - ${r.name}</title>
            <style>
                @page { size: portrait; margin: 10mm; }
                body { 
                    font-family: 'Segoe UI', Tahoma, sans-serif; 
                    padding: 20px; 
                    line-height: 1.4; 
                    color: #333; 
                    -webkit-print-color-adjust: exact; /* වර්ණ මුද්‍රණය සහතික කිරීම */
                }
                
                .header { 
                    text-align: center; 
                    border-bottom: 4px solid #ffc107; 
                    padding-bottom: 10px; 
                    margin-bottom: 15px;
                }
                .recipe-name { 
                    color: #d9534f; 
                    font-size: 26px; 
                    margin: 10px 0; 
                    text-align: center; 
                    text-transform: uppercase; 
                }
                
                .image-container { text-align: center; margin-bottom: 15px; }
                .main-img { 
                    width: 100%; 
                    max-width: 500px; 
                    height: 250px; 
                    object-fit: cover; 
                    border-radius: 15px; 
                    border: 3px solid #f8f9fa;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }

                .stats-container { 
                    display: grid; 
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 10px; 
                    background: #fdfdfd; 
                    padding: 12px; 
                    border: 1px solid #eee; 
                    border-radius: 10px; 
                    margin-bottom: 15px;
                }
                .stat-box { text-align: center; font-size: 12px; }
                .stat-box b { color: #555; display: block; font-size: 13px; }

                .nutrition-bar { 
                    display: flex; 
                    justify-content: space-around; 
                    background: #fff3cd; 
                    padding: 8px; 
                    border-radius: 8px; 
                    margin-bottom: 20px;
                    font-size: 13px;
                    font-weight: bold;
                }

                .content-section { display: flex; gap: 25px; margin-top: 10px; }
                .ingredients { flex: 1; border-right: 1px solid #eee; padding-right: 15px; }
                .method { flex: 1.5; }

                h3 { color: #ffc107; border-bottom: 2px solid #fff3cd; padding-bottom: 3px; font-size: 18px; margin-bottom: 8px; }
                p { font-size: 13px; margin: 0; white-space: pre-line; }
                
                .note-box { 
                    background: #fff9db; 
                    padding: 12px; 
                    border-left: 6px solid #ffc107; 
                    margin-top: 20px; 
                    font-style: italic; 
                    font-size: 12px;
                    border-radius: 0 8px 8px 0;
                }
                .footer { 
                    text-align: center; 
                    margin-top: 25px; 
                    font-size: 11px; 
                    color: #777; 
                    border-top: 1px dotted #ccc; 
                    padding-top: 10px; 
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1 style="margin:0; color:#ffc107;">FLAVORFLOW</h1>
                <p style="margin:0; font-size:12px; letter-spacing:2px;">DIGITAL RECIPE BOOK</p>
            </div>

            <h2 class="recipe-name">🥘 ${r.name}</h2>
            
            <div class="image-container">
                <img src="${r.image || r.img}" class="main-img" onerror="this.style.display='none'">
            </div>

            <div class="stats-container">
                <div class="stat-box"><b>📂 Category</b> ${r.cat || r.category || 'General'}</div>
                <div class="stat-box"><b>⏱️ Total Time</b> ${r.total || (r.prep + ' + ' + r.cook) || '15m'}</div>
                <div class="stat-box"><b>🍱 Serves</b> ${r.size || '1 Person'}</div>
            </div>

            <div class="nutrition-bar">
                <span>🔥 Cal: ${r.cal || '200'}</span>
                <span>💪 Prot: ${r.prot || '5g'}</span>
                <span>🥑 Fat: ${r.fat || '10g'}</span>
                <span>🍞 Carb: ${r.carb || '25g'}</span>
            </div>

            <div class="content-section">
                <div class="ingredients">
                    <h3>🛒 Ingredients</h3>
                    <p>${r.ing || r.ingredients}</p>
                </div>
                <div class="method">
                    <h3>👨‍🍳 Method</h3>
                    <p>${r.steps || r.method}</p>
                </div>
            </div>

            <div class="note-box">
                <strong>✍️ My Personal Note:</strong><br>
                "${personalNote}"
            </div>

            <div class="footer">
                Thank you for using FlavorFlow! Created by Navoda Nethmini Kumarasinghe 🎓
            </div>

            <script>
                window.onload = function() {
                    setTimeout(function() {
                        window.print();
                        window.close();
                    }, 800);
                };
            <\/script>
        </body>
        </html>
    `);

    printWindow.document.close();
}
function saveNote() {
    const recipeName = document.getElementById('modalName').innerText;
    const noteContent = document.getElementById('userNote').value;

    if (!noteContent.trim()) {
        Swal.fire('Oops!', 'Please write something before saving.', 'warning');
        return;
    }

    let myNotes = JSON.parse(localStorage.getItem('recipeNotes')) || [];

    const newNote = {
        id: Date.now(), 
        name: recipeName,
        note: noteContent,
        date: new Date().toLocaleDateString()
    };

    myNotes.push(newNote);
    localStorage.setItem('recipeNotes', JSON.stringify(myNotes));

    Swal.fire({
        title: 'Saved!',
        text: 'Your note has been added to the collection.',
        icon: 'success',
        confirmButtonColor: '#ffc107'
    });
    
    document.getElementById('userNote').value = ""; 
}


function printSingleRecipe() {
    const r = recipes.find(item => item.id === activeId);
    if (!r) {
        alert("Recipe details not found!");
        return;
    }

    let myCollection = JSON.parse(localStorage.getItem('userCollection')) || [];
    const index = myCollection.findIndex(item => item.id === r.id);

    if (index === -1) {
        const downloadedRecipe = { ...r, isDownloaded: true };
        myCollection.push(downloadedRecipe);
    } else {
        myCollection[index].isDownloaded = true;
    }
    localStorage.setItem('userCollection', JSON.stringify(myCollection));

    const personalNote = document.getElementById('userNote')?.value || "No personal notes added.";

    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <html>
        <head>
            <title>FlavorFlow - ${r.name}</title>
            <style>
                @page { size: portrait; margin: 10mm; }
                body { 
                    font-family: 'Segoe UI', Tahoma, sans-serif; 
                    padding: 20px; 
                    line-height: 1.4; 
                    color: #333; 
                    -webkit-print-color-adjust: exact;
                }
                .header { text-align: center; border-bottom: 4px solid #ffc107; padding-bottom: 10px; margin-bottom: 15px; }
                .recipe-name { color: #d9534f; font-size: 26px; margin: 10px 0; text-align: center; text-transform: uppercase; }
                .image-container { text-align: center; margin-bottom: 15px; }
                .main-img { width: 100%; max-width: 500px; height: 250px; object-fit: cover; border-radius: 15px; border: 3px solid #f8f9fa; }
                .stats-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background: #fdfdfd; padding: 12px; border: 1px solid #eee; border-radius: 10px; margin-bottom: 15px; }
                .stat-box { text-align: center; font-size: 12px; }
                .stat-box b { color: #555; display: block; font-size: 13px; }
                .nutrition-bar { display: flex; justify-content: space-around; background: #fff3cd; padding: 8px; border-radius: 8px; margin-bottom: 20px; font-size: 13px; font-weight: bold; }
                .content-section { display: flex; gap: 25px; margin-top: 10px; }
                .ingredients { flex: 1; border-right: 1px solid #eee; padding-right: 15px; }
                .method { flex: 1.5; }
                h3 { color: #ffc107; border-bottom: 2px solid #fff3cd; padding-bottom: 3px; font-size: 18px; margin-bottom: 8px; }
                p { font-size: 13px; margin: 0; white-space: pre-line; }
                .note-box { background: #fff9db; padding: 12px; border-left: 6px solid #ffc107; margin-top: 20px; font-style: italic; font-size: 12px; border-radius: 0 8px 8px 0; }
                .footer { text-align: center; margin-top: 25px; font-size: 11px; color: #777; border-top: 1px dotted #ccc; padding-top: 10px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1 style="margin:0; color:#ffc107;">FLAVORFLOW</h1>
                <p style="margin:0; font-size:12px; letter-spacing:2px;">DIGITAL RECIPE BOOK</p>
            </div>
            <h2 class="recipe-name">🥘 ${r.name}</h2>
            <div class="image-container">
                <img src="${r.image || r.img}" class="main-img" onerror="this.style.display='none'">
            </div>
            <div class="stats-container">
                <div class="stat-box"><b>📂 Category</b> ${r.cat || r.category || 'General'}</div>
                <div class="stat-box"><b>⏱️ Total Time</b> ${r.total || (r.prep + ' + ' + r.cook) || '15m'}</div>
                <div class="stat-box"><b>🍱 Serves</b> ${r.size || '1 Person'}</div>
            </div>
            <div class="nutrition-bar">
                <span>🔥 Cal: ${r.cal || '200'}</span>
                <span>💪 Prot: ${r.prot || '5g'}</span>
                <span>🥑 Fat: ${r.fat || '10g'}</span>
                <span>🍞 Carb: ${r.carb || '25g'}</span>
            </div>
            <div class="content-section">
                <div class="ingredients">
                    <h3>🛒 Ingredients</h3>
                    <p>${r.ing || r.ingredients}</p>
                </div>
                <div class="method">
                    <h3>👨‍🍳 Method</h3>
                    <p>${r.steps || r.method}</p>
                </div>
            </div>
            <div class="note-box">
                <strong>✍️ My Personal Note:</strong><br>
                "${personalNote}"
            </div>
            <div class="footer">
                Thank you for using FlavorFlow! Created by Navoda Nethmini Kumarasinghe 🎓
            </div>
            <script>
                window.onload = function() {
                    setTimeout(function() {
                        window.print();
                        window.close();
                    }, 800);
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}
function searchCollection() {
    const searchBox = document.getElementById('collectSearch');
    if (!searchBox) return;

    let query = searchBox.value.toLowerCase();
    
    let favorites = JSON.parse(localStorage.getItem('my_favorites')) || [];
    
    const filteredRecipes = recipes.filter(r => 
        favorites.includes(r.id) && r.name.toLowerCase().includes(query)
    );

    renderCollectionGrid(filteredRecipes);
}

function renderCollectionGrid(data) {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5 animate-fade-in">
                <h3 class="text-muted">No recipes found! 🥘</h3>
                <p>Try searching for a different dish name.</p>
            </div>`;
        return;
    }

    grid.innerHTML = data.map(r => {
        const userNote = localStorage.getItem('ff_note_' + r.id) || "";
        return `
        <div class="col-md-4 mb-4 animate-up show">
            <div class="card recipe-card h-100 border-0 shadow-sm position-relative overflow-hidden">
                <button class="btn btn-light position-absolute top-0 end-0 m-2 shadow-sm rounded-circle" 
                        onclick="removeFromFav(${r.id})" style="z-index: 10;">
                    <i class="fas fa-trash text-danger"></i>
                </button>
                <img src="${r.img}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bold mb-1">${r.name}</h5>
                    <p class="text-muted small mb-3">${r.cat} | ${r.cuisine}</p>
                    ${userNote ? `<div class="p-2 mb-3 note-preview text-start shadow-xs rounded"><small>"${userNote.substring(0, 40)}..."</small></div>` : ''}
                    <button class="btn btn-warning w-100 rounded-pill fw-bold" onclick="viewDetails(${r.id})">VIEW DETAILS 🥘</button>
                </div>
            </div>
        </div>`;
    }).join('');
  }
function handleHomeSearch() {
    const query = document.getElementById('homeSearchInput').value;
    if (query.trim() !== "") {
        window.location.href = `recipes.html?search=${encodeURIComponent(query)}`;
    } else {
        window.location.href = `recipes.html`;
    }
}

function searchRecipe() {
    let input = document.getElementById('mainSearch').value.toLowerCase();
    
    let cards = document.querySelectorAll('#recipeGrid .col-md-4, #recipeGrid .col-lg-4');

    cards.forEach(card => {
        let title = card.querySelector('.card-title')?.innerText.toLowerCase() || 
                    card.querySelector('h5')?.innerText.toLowerCase();

        if (title && title.includes(input)) {
            card.style.display = ""; 
        } else {
            card.style.display = "none"; 
        }
    });
}
