type Ingredient = {
  id: number;
  name: string;
  quantity: string;
};

type Step = {
  id: number;
  description: string;
};

export type Recipe = {
  id: number;
  title: string;
  description: string;
  category: string;
  ingredients: Ingredient[];
  steps: Step[];
  image: string;
  mostPopular: boolean;
  type: "Breakfast" | "Lunch" | "Dinner";
  prepTime: string;
  cookTime: string;
  servings: number;
  rating: number;
  reviews: number;
};

const categories = [
  {
    id: 1,
    name: "Italian",
  },
  {
    id: 2,
    name: "Russian",
  },
  {
    id: 3,
    name: "Japanese",
  },
  {
    id: 4,
    name: "Mexican",
  },
  {
    id: 5,
    name: "German",
  },
];

const recipes = [
  {
    id: 1,
    title: "Russian Navy Pasta",
    description:
      "A classic Soviet-era pasta dish that combines ground beef with pasta in a simple yet satisfying way. This budget-friendly recipe was popular among navy crews and students.",
    category: "Russian",
    ingredients: [
      { id: 1, name: "Vegetable oil", quantity: "2 Tbsp" },
      { id: 2, name: "Medium onion", quantity: "1, thinly sliced" },
      { id: 3, name: "Ground beef", quantity: "1.5 pounds" },
      { id: 4, name: "Garlic powder", quantity: "1/2 tsp" },
      { id: 5, name: "Red paprika", quantity: "1/4 tsp" },
      { id: 6, name: "Salt", quantity: "1/2 tsp" },
      { id: 7, name: "Pasta", quantity: "1 pound" },
      { id: 8, name: "Butter", quantity: "1 Tbsp" },
    ],
    steps: [
      {
        id: 1,
        description:
          "In a large skillet, heat the oil over medium heat. Add the onion and cook stirring occasionally until golden, about 4-6 minutes. Remove and set aside.",
      },
      {
        id: 2,
        description:
          "Add ground beef to the same skillet. Break it apart with a spatula and cook until done. Add garlic powder and red paprika. Mix and season with salt.",
      },
      {
        id: 3,
        description:
          "Add the cooked onion back to the beef. Remove from heat and set aside.",
      },
      {
        id: 4,
        description:
          "Cook pasta according to package instructions. Reserve 1/2 cup of pasta water before draining.",
      },
      {
        id: 5,
        description:
          "Add butter, drained pasta, and pasta water to the beef mixture. Heat over medium-high heat, stirring occasionally for about 3 minutes. Serve hot.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207306/food-app/navy-pasta_grm8ad.jpg",
    mostPopular: false,
    type: "Dinner",
    rating: 4.5,
    reviews: 100,
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    servings: 4,
  },
  {
    id: 2,
    title: "Margherita",
    description:
      "A simple yet delicious pizza that showcases the beauty of fresh ingredients. This Neapolitan-style pizza features fresh mozzarella, basil, and tomato sauce.",
    category: "Italian",
    ingredients: [
      { id: 1, name: "Pizza dough", quantity: "1 pound" },
      { id: 2, name: "Fresh mozzarella", quantity: "8 oz" },
      { id: 3, name: "Fresh basil leaves", quantity: "1/4 cup" },
      { id: 4, name: "Tomato sauce", quantity: "1/2 cup" },
      { id: 5, name: "Extra virgin olive oil", quantity: "2 Tbsp" },
      { id: 6, name: "Salt", quantity: "to taste" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Preheat oven to 450°F (230°C) with a pizza stone if available.",
      },
      {
        id: 2,
        description: "Roll out the pizza dough to desired thickness.",
      },
      {
        id: 3,
        description: "Spread tomato sauce evenly over the dough.",
      },
      {
        id: 4,
        description: "Add torn pieces of mozzarella and fresh basil leaves.",
      },
      {
        id: 5,
        description: "Drizzle with olive oil and season with salt.",
      },
      {
        id: 6,
        description:
          "Bake for 12-15 minutes until crust is golden and cheese is melted.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206444/food-app/margherita-pizza_idfppe.jpg",
    mostPopular: true,
    type: "Dinner",
    rating: 4.8,
    reviews: 250,
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 4,
  },
  {
    id: 3,
    title: "Tonkatsu",
    description:
      "A classic Japanese dish featuring a crispy breaded pork cutlet served with a tangy tonkatsu sauce. Perfect for a satisfying dinner.",
    category: "Japanese",
    ingredients: [
      { id: 1, name: "Pork loin chops", quantity: "4 pieces" },
      { id: 2, name: "Panko breadcrumbs", quantity: "2 cups" },
      { id: 3, name: "All-purpose flour", quantity: "1/2 cup" },
      { id: 4, name: "Eggs", quantity: "2" },
      { id: 5, name: "Vegetable oil", quantity: "for frying" },
      { id: 6, name: "Salt and pepper", quantity: "to taste" },
      { id: 7, name: "Tonkatsu sauce", quantity: "1/4 cup" },
      { id: 8, name: "Cabbage", quantity: "1/4 head, shredded" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Season pork chops with salt and pepper. Set up three bowls: flour, beaten eggs, and panko breadcrumbs.",
      },
      {
        id: 2,
        description:
          "Dredge each pork chop in flour, then dip in egg, and finally coat with panko breadcrumbs.",
      },
      {
        id: 3,
        description:
          "Heat oil to 350°F (175°C) in a deep pan. Fry pork chops until golden brown, about 5-6 minutes per side.",
      },
      {
        id: 4,
        description:
          "Remove and drain on paper towels. Let rest for 5 minutes.",
      },
      {
        id: 5,
        description:
          "Slice into strips and serve with shredded cabbage and tonkatsu sauce.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207518/food-app/tonkatsu_omouje.jpg",
    mostPopular: true,
    type: "Dinner",
    rating: 4.7,
    reviews: 180,
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 4,
  },
  {
    id: 4,
    title: "Chicken Enchiladas",
    description:
      "Traditional Mexican enchiladas filled with chicken and smothered in a tangy green tomatillo sauce. A crowd-pleasing dish that's perfect for family dinners.",
    category: "Mexican",
    ingredients: [
      { id: 1, name: "Chicken breast", quantity: "2 pounds" },
      { id: 2, name: "Tomatillos", quantity: "1 pound" },
      { id: 3, name: "Green chilies", quantity: "2" },
      { id: 4, name: "Corn tortillas", quantity: "12" },
      { id: 5, name: "Monterey Jack cheese", quantity: "2 cups, shredded" },
      { id: 6, name: "Onion", quantity: "1, diced" },
      { id: 7, name: "Garlic", quantity: "3 cloves" },
      { id: 8, name: "Cilantro", quantity: "1/2 cup" },
      { id: 9, name: "Sour cream", quantity: "1/2 cup" },
    ],
    steps: [
      {
        id: 1,
        description: "Boil chicken until cooked through. Shred and set aside.",
      },
      {
        id: 2,
        description:
          "Roast tomatillos, chilies, and garlic until charred. Blend with cilantro and salt to make sauce.",
      },
      {
        id: 3,
        description:
          "Dip tortillas in sauce, fill with chicken and cheese, roll up and place in baking dish.",
      },
      {
        id: 4,
        description:
          "Pour remaining sauce over enchiladas, top with remaining cheese.",
      },
      {
        id: 5,
        description:
          "Bake at 350°F (175°C) for 20 minutes until bubbly. Serve with sour cream.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206335/food-app/chicken-enchiladas-verdes_zujyik.jpg",
    mostPopular: false,
    type: "Dinner",
    rating: 4.3,
    reviews: 95,
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: 6,
  },
  {
    id: 6,
    title: "Risotto ai Funghi",
    description:
      "A creamy Italian rice dish made with Arborio rice and mixed mushrooms. This comforting dish showcases the perfect balance of earthy flavors and creamy texture.",
    category: "Italian",
    ingredients: [
      { id: 1, name: "Arborio rice", quantity: "1.5 cups" },
      { id: 2, name: "Mixed mushrooms", quantity: "1 pound" },
      { id: 3, name: "White wine", quantity: "1/2 cup" },
      { id: 4, name: "Chicken stock", quantity: "4 cups" },
      { id: 5, name: "Onion", quantity: "1, finely diced" },
      { id: 6, name: "Butter", quantity: "4 Tbsp" },
      { id: 7, name: "Parmesan cheese", quantity: "1 cup, grated" },
      { id: 8, name: "Fresh thyme", quantity: "1 Tbsp" },
      { id: 9, name: "Salt and pepper", quantity: "to taste" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Heat stock in a separate pot and keep warm. Sauté mushrooms in 2 Tbsp butter until golden.",
      },
      {
        id: 2,
        description:
          "In a large pan, sauté onion in remaining butter until translucent.",
      },
      {
        id: 3,
        description:
          "Add rice and toast for 2 minutes. Add wine and stir until absorbed.",
      },
      {
        id: 4,
        description:
          "Add warm stock one ladle at a time, stirring constantly until each addition is absorbed.",
      },
      {
        id: 5,
        description:
          "When rice is al dente, add mushrooms, parmesan, and thyme. Season to taste.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206490/food-app/mushroom-risotto_wootjh.jpg",
    mostPopular: false,
    type: "Dinner",
    rating: 4.4,
    reviews: 120,
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 4,
  },
  {
    id: 7,
    title: "Sauerbraten",
    description:
      "A traditional German pot roast marinated in a sweet and sour sauce, served with red cabbage and potato dumplings. This hearty dish is perfect for family gatherings.",
    category: "German",
    ingredients: [
      { id: 1, name: "Beef rump roast", quantity: "3 pounds" },
      { id: 2, name: "Red wine vinegar", quantity: "2 cups" },
      { id: 3, name: "Onion", quantity: "1 large, sliced" },
      { id: 4, name: "Carrots", quantity: "2, chopped" },
      { id: 5, name: "Gingerbread cookies", quantity: "4, crushed" },
      { id: 6, name: "Brown sugar", quantity: "1/4 cup" },
      { id: 7, name: "Bay leaves", quantity: "2" },
      { id: 8, name: "Cloves", quantity: "4" },
      { id: 9, name: "Salt and pepper", quantity: "to taste" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Combine vinegar, onion, carrots, gingerbread, sugar, and spices to make marinade. Place beef in marinade and refrigerate for 3-4 days, turning daily.",
      },
      {
        id: 2,
        description:
          "Remove beef from marinade and pat dry. Strain and reserve marinade.",
      },
      {
        id: 3,
        description:
          "Brown beef on all sides in a large Dutch oven. Add reserved marinade and bring to a simmer.",
      },
      {
        id: 4,
        description:
          "Cover and cook on low heat for 3-4 hours until meat is tender.",
      },
      {
        id: 5,
        description:
          "Remove meat and strain sauce. Thicken sauce if desired and serve with the sliced meat.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207417/food-app/sauerbraten_fyx35t.jpg",
    mostPopular: false,
    type: "Dinner",
    rating: 4.2,
    reviews: 85,
    prepTime: "30 minutes",
    cookTime: "4 hours",
    servings: 6,
  },
  {
    id: 8,
    title: "Borscht",
    description:
      "A vibrant and hearty Russian soup featuring beets as the main ingredient, served with sour cream and fresh dill. This traditional dish is both nutritious and delicious.",
    category: "Russian",
    ingredients: [
      { id: 1, name: "Beets", quantity: "4 medium, peeled and grated" },
      { id: 2, name: "Potatoes", quantity: "3 medium, diced" },
      { id: 3, name: "Carrots", quantity: "2, grated" },
      { id: 4, name: "Cabbage", quantity: "1/2 head, shredded" },
      { id: 5, name: "Onion", quantity: "1 large, diced" },
      { id: 6, name: "Garlic", quantity: "3 cloves, minced" },
      { id: 7, name: "Beef broth", quantity: "8 cups" },
      { id: 8, name: "Tomato paste", quantity: "2 Tbsp" },
      { id: 9, name: "Sour cream", quantity: "for serving" },
      { id: 10, name: "Fresh dill", quantity: "1/4 cup, chopped" },
    ],
    steps: [
      {
        id: 1,
        description:
          "In a large pot, sauté onion and garlic until fragrant. Add carrots and beets, cook for 5 minutes.",
      },
      {
        id: 2,
        description:
          "Add tomato paste and stir well. Pour in beef broth and bring to a boil.",
      },
      {
        id: 3,
        description:
          "Add potatoes and cabbage. Simmer for 20-25 minutes until vegetables are tender.",
      },
      {
        id: 4,
        description: "Season with salt and pepper to taste.",
      },
      {
        id: 5,
        description: "Serve hot with a dollop of sour cream and fresh dill.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206300/food-app/borscht_z44z76.jpg",
    mostPopular: true,
    type: "Dinner",
    rating: 4.6,
    reviews: 150,
    prepTime: "20 minutes",
    cookTime: "45 minutes",
    servings: 6,
  },
  {
    id: 9,
    title: "Tempura Udon",
    description:
      "A comforting Japanese noodle soup served with crispy tempura shrimp and vegetables. This dish combines the best of Japanese comfort food with the delicate art of tempura.",
    category: "Japanese",
    ingredients: [
      { id: 1, name: "Udon noodles", quantity: "4 servings" },
      { id: 2, name: "Dashi stock", quantity: "6 cups" },
      { id: 3, name: "Soy sauce", quantity: "1/4 cup" },
      { id: 4, name: "Mirin", quantity: "2 Tbsp" },
      { id: 5, name: "Shrimp", quantity: "12 large" },
      { id: 6, name: "Tempura flour", quantity: "2 cups" },
      { id: 7, name: "Ice water", quantity: "1.5 cups" },
      { id: 8, name: "Green onions", quantity: "4, sliced" },
      { id: 9, name: "Nori", quantity: "2 sheets, cut into strips" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Prepare dashi stock by combining dashi powder with water. Add soy sauce and mirin, keep warm.",
      },
      {
        id: 2,
        description:
          "Mix tempura flour with ice water until just combined (lumps are okay).",
      },
      {
        id: 3,
        description:
          "Heat oil to 350°F (175°C). Dip shrimp in tempura batter and fry until golden and crispy.",
      },
      {
        id: 4,
        description: "Cook udon noodles according to package instructions.",
      },
      {
        id: 5,
        description:
          "Divide noodles among bowls, pour hot broth over, and top with tempura shrimp, green onions, and nori.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207485/food-app/tempura-udon_w7btd2.jpg",
    mostPopular: false,
    type: "Dinner",
    rating: 4.4,
    reviews: 110,
    prepTime: "25 minutes",
    cookTime: "20 minutes",
    servings: 4,
  },
  {
    id: 10,
    title: "Apple Pancakes",
    description:
      "A traditional German breakfast featuring thin, crepe-like pancakes filled with caramelized apples and cinnamon. These delicate pancakes are perfect for a weekend brunch.",
    category: "German",
    ingredients: [
      { id: 1, name: "All-purpose flour", quantity: "1.5 cups" },
      { id: 2, name: "Eggs", quantity: "3" },
      { id: 3, name: "Milk", quantity: "1.5 cups" },
      { id: 4, name: "Apples", quantity: "3 medium, thinly sliced" },
      { id: 5, name: "Butter", quantity: "4 Tbsp" },
      { id: 6, name: "Brown sugar", quantity: "1/4 cup" },
      { id: 7, name: "Cinnamon", quantity: "1 tsp" },
      { id: 8, name: "Vanilla extract", quantity: "1 tsp" },
      { id: 9, name: "Powdered sugar", quantity: "for dusting" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Whisk together flour, eggs, milk, and vanilla extract until smooth. Let batter rest for 30 minutes.",
      },
      {
        id: 2,
        description:
          "In a large skillet, melt 2 Tbsp butter and sauté apples with brown sugar and cinnamon until caramelized.",
      },
      {
        id: 3,
        description:
          "Heat a separate pan with remaining butter. Pour a thin layer of batter and cook until golden.",
      },
      {
        id: 4,
        description:
          "Add apple mixture to the center of each pancake and fold over.",
      },
      {
        id: 5,
        description: "Serve warm, dusted with powdered sugar.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206111/food-app/ikvdralockzlyhiz8shn.jpg",
    mostPopular: false,
    type: "Breakfast",
    rating: 4.3,
    reviews: 90,
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 4,
  },
  {
    id: 11,
    title: "Chilaquiles",
    description:
      "A traditional Mexican breakfast dish featuring crispy tortilla chips smothered in salsa, topped with eggs, cheese, and fresh garnishes. A perfect way to start your day with bold flavors.",
    category: "Mexican",
    ingredients: [
      { id: 1, name: "Corn tortillas", quantity: "12, cut into triangles" },
      { id: 2, name: "Vegetable oil", quantity: "1/4 cup" },
      { id: 3, name: "Tomatoes", quantity: "4 large" },
      { id: 4, name: "Onion", quantity: "1 medium" },
      { id: 5, name: "Garlic", quantity: "2 cloves" },
      { id: 6, name: "Jalapeño", quantity: "1" },
      { id: 7, name: "Eggs", quantity: "4" },
      { id: 8, name: "Queso fresco", quantity: "1 cup, crumbled" },
      { id: 9, name: "Cilantro", quantity: "1/4 cup, chopped" },
      { id: 10, name: "Sour cream", quantity: "1/2 cup" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Fry tortilla triangles in oil until crispy. Drain on paper towels.",
      },
      {
        id: 2,
        description:
          "Blend tomatoes, onion, garlic, and jalapeño to make salsa. Simmer for 10 minutes.",
      },
      {
        id: 3,
        description:
          "Pour salsa over tortilla chips and let them soften slightly.",
      },
      {
        id: 4,
        description: "Top with fried eggs, queso fresco, and cilantro.",
      },
      {
        id: 5,
        description: "Serve with sour cream on the side.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206366/food-app/chilaquiles_qyh99e.jpg",
    mostPopular: false,
    type: "Breakfast",
    rating: 4.5,
    reviews: 130,
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    servings: 4,
  },
  {
    id: 12,
    title: "Tamago Kake Gohan",
    description:
      "A simple yet delicious Japanese breakfast featuring a raw egg mixed with hot rice, seasoned with soy sauce and garnished with green onions. A quick and nutritious way to start your day.",
    category: "Japanese",
    ingredients: [
      { id: 1, name: "Short-grain rice", quantity: "2 cups, cooked" },
      { id: 2, name: "Eggs", quantity: "2" },
      { id: 3, name: "Soy sauce", quantity: "2 Tbsp" },
      { id: 4, name: "Green onions", quantity: "2, thinly sliced" },
      { id: 5, name: "Nori", quantity: "1 sheet, cut into strips" },
      { id: 6, name: "Sesame seeds", quantity: "1 Tbsp" },
      { id: 7, name: "Mirin", quantity: "1 tsp" },
    ],
    steps: [
      {
        id: 1,
        description: "Cook rice according to package instructions.",
      },
      {
        id: 2,
        description: "Place hot rice in a bowl and make a well in the center.",
      },
      {
        id: 3,
        description: "Crack an egg into the well and add soy sauce and mirin.",
      },
      {
        id: 4,
        description:
          "Mix thoroughly until the egg is cooked by the heat of the rice.",
      },
      {
        id: 5,
        description: "Top with green onions, nori strips, and sesame seeds.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207455/food-app/tamago-kake-gohan_ojaxep.jpg",
    mostPopular: false,
    type: "Breakfast",
    rating: 4.2,
    reviews: 75,
    prepTime: "5 minutes",
    cookTime: "20 minutes",
    servings: 2,
  },
  {
    id: 13,
    title: "Panzanella Salad",
    description:
      "A refreshing Tuscan bread salad that makes perfect use of stale bread, fresh tomatoes, and basil. This light yet satisfying dish is ideal for a summer lunch.",
    category: "Italian",
    ingredients: [
      { id: 1, name: "Stale Italian bread", quantity: "1 loaf, cubed" },
      { id: 2, name: "Ripe tomatoes", quantity: "4 large, diced" },
      { id: 3, name: "Cucumber", quantity: "1 large, diced" },
      { id: 4, name: "Red onion", quantity: "1 medium, thinly sliced" },
      { id: 5, name: "Fresh basil", quantity: "1 cup, torn" },
      { id: 6, name: "Extra virgin olive oil", quantity: "1/4 cup" },
      { id: 7, name: "Red wine vinegar", quantity: "2 Tbsp" },
      { id: 8, name: "Garlic", quantity: "1 clove, minced" },
      { id: 9, name: "Salt and pepper", quantity: "to taste" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Toast bread cubes in a 350°F (175°C) oven until golden and crispy, about 10 minutes.",
      },
      {
        id: 2,
        description:
          "In a large bowl, combine tomatoes, cucumber, onion, and basil.",
      },
      {
        id: 3,
        description:
          "Whisk together olive oil, vinegar, garlic, salt, and pepper to make dressing.",
      },
      {
        id: 4,
        description:
          "Add toasted bread cubes to the vegetables and pour dressing over.",
      },
      {
        id: 5,
        description:
          "Let salad sit for 30 minutes to allow bread to absorb flavors. Serve at room temperature.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207351/food-app/panzanella-salad_ydebfw.jpg",
    mostPopular: false,
    type: "Lunch",
    rating: 4.4,
    reviews: 105,
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: 4,
  },
  {
    id: 14,
    title: "Olivier Salad",
    description:
      "A classic Russian potato salad featuring diced vegetables, eggs, and meat in a creamy dressing. This hearty salad is a staple at Russian gatherings and makes a satisfying lunch.",
    category: "Russian",
    ingredients: [
      { id: 1, name: "Potatoes", quantity: "4 medium, boiled and diced" },
      { id: 2, name: "Carrots", quantity: "3 medium, boiled and diced" },
      { id: 3, name: "Eggs", quantity: "4, hard-boiled and diced" },
      { id: 4, name: "Dill pickles", quantity: "4, diced" },
      { id: 5, name: "Cooked chicken breast", quantity: "2 cups, diced" },
      { id: 6, name: "Green peas", quantity: "1 cup, cooked" },
      { id: 7, name: "Mayonnaise", quantity: "1/2 cup" },
      { id: 8, name: "Dijon mustard", quantity: "1 Tbsp" },
      { id: 9, name: "Fresh dill", quantity: "1/4 cup, chopped" },
      { id: 10, name: "Salt and pepper", quantity: "to taste" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Boil potatoes and carrots until tender. Let cool, then dice into small cubes.",
      },
      {
        id: 2,
        description: "Hard boil eggs, cool, peel, and dice.",
      },
      {
        id: 3,
        description: "In a large bowl, combine all diced ingredients and peas.",
      },
      {
        id: 4,
        description:
          "Mix mayonnaise, mustard, dill, salt, and pepper to make dressing.",
      },
      {
        id: 5,
        description:
          "Fold dressing into salad gently. Refrigerate for at least 1 hour before serving.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207388/food-app/salat-olive_lvqklg.jpg",
    mostPopular: false,
    type: "Lunch",
    rating: 4.3,
    reviews: 95,
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    servings: 6,
  },
  {
    id: 15,
    title: "Tostadas",
    description:
      "Crispy corn tortillas topped with refried beans, shredded chicken, fresh vegetables, and tangy crema. A perfect light lunch that's both satisfying and nutritious.",
    category: "Mexican",
    ingredients: [
      { id: 1, name: "Corn tortillas", quantity: "8" },
      { id: 2, name: "Refried beans", quantity: "2 cups" },
      { id: 3, name: "Cooked chicken", quantity: "2 cups, shredded" },
      { id: 4, name: "Lettuce", quantity: "2 cups, shredded" },
      { id: 5, name: "Tomatoes", quantity: "2 medium, diced" },
      { id: 6, name: "Avocado", quantity: "1, sliced" },
      { id: 7, name: "Mexican crema", quantity: "1/2 cup" },
      { id: 8, name: "Queso fresco", quantity: "1 cup, crumbled" },
      { id: 9, name: "Lime", quantity: "1, cut into wedges" },
      { id: 10, name: "Vegetable oil", quantity: "for frying" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Heat oil in a pan and fry tortillas until crispy and golden. Drain on paper towels.",
      },
      {
        id: 2,
        description: "Warm refried beans in a small saucepan.",
      },
      {
        id: 3,
        description: "Spread warm beans on each tortilla.",
      },
      {
        id: 4,
        description:
          "Top with shredded chicken, lettuce, tomatoes, avocado, and queso fresco.",
      },
      {
        id: 5,
        description: "Drizzle with crema and serve with lime wedges.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748207557/food-app/tostadas_cotp2z.jpg",
    mostPopular: false,
    type: "Lunch",
    rating: 4.5,
    reviews: 140,
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 4,
  },
  {
    id: 16,
    title: "Farmer's Breakfast",
    description:
      "A hearty German breakfast dish featuring potatoes, eggs, and bacon. This traditional breakfast is perfect for starting your day with energy and warmth.",
    category: "German",
    ingredients: [
      { id: 1, name: "Potatoes", quantity: "4 medium, boiled and diced" },
      { id: 2, name: "Bacon", quantity: "8 slices, diced" },
      { id: 3, name: "Onion", quantity: "1 large, diced" },
      { id: 4, name: "Eggs", quantity: "6" },
      { id: 5, name: "Butter", quantity: "2 Tbsp" },
      { id: 6, name: "Fresh parsley", quantity: "1/4 cup, chopped" },
      { id: 7, name: "Salt and pepper", quantity: "to taste" },
      { id: 8, name: "Chives", quantity: "2 Tbsp, chopped" },
    ],
    steps: [
      {
        id: 1,
        description:
          "In a large skillet, cook bacon until crispy. Remove and set aside, leaving the fat in the pan.",
      },
      {
        id: 2,
        description:
          "Add butter to the pan and sauté onions until translucent.",
      },
      {
        id: 3,
        description:
          "Add diced potatoes and cook until golden and crispy, about 8-10 minutes.",
      },
      {
        id: 4,
        description: "Return bacon to the pan and mix well.",
      },
      {
        id: 5,
        description:
          "Pour beaten eggs over the mixture and cook, stirring gently, until eggs are set but still moist.",
      },
      {
        id: 6,
        description: "Garnish with fresh parsley and chives. Serve hot.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206226/food-app/bauernfruehstueck_teuk0y.jpg",
    mostPopular: true,
    type: "Breakfast",
    rating: 4.7,
    reviews: 160,
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    servings: 4,
  },
  {
    id: 17,
    title: "Bento Box",
    description:
      "A traditional Japanese lunch box featuring a variety of small dishes including teriyaki chicken, tamagoyaki (rolled omelette), rice, and pickled vegetables. This balanced meal is both visually appealing and nutritious.",
    category: "Japanese",
    ingredients: [
      { id: 1, name: "Short-grain rice", quantity: "2 cups, cooked" },
      { id: 2, name: "Chicken thighs", quantity: "2, boneless" },
      { id: 3, name: "Eggs", quantity: "3" },
      { id: 4, name: "Carrots", quantity: "1 medium, julienned" },
      { id: 5, name: "Broccoli", quantity: "1 cup, florets" },
      { id: 6, name: "Soy sauce", quantity: "1/4 cup" },
      { id: 7, name: "Mirin", quantity: "2 Tbsp" },
      { id: 8, name: "Sugar", quantity: "1 Tbsp" },
      { id: 9, name: "Pickled ginger", quantity: "1/4 cup" },
      { id: 10, name: "Nori", quantity: "1 sheet, cut into strips" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Cook rice according to package instructions. Let cool slightly.",
      },
      {
        id: 2,
        description:
          "Make teriyaki sauce by combining soy sauce, mirin, and sugar. Simmer until slightly thickened.",
      },
      {
        id: 3,
        description:
          "Cook chicken thighs in teriyaki sauce until done. Slice into bite-sized pieces.",
      },
      {
        id: 4,
        description:
          "Make tamagoyaki: Beat eggs with a pinch of salt and sugar. Cook in a rectangular pan, rolling as you go.",
      },
      {
        id: 5,
        description: "Steam or blanch carrots and broccoli until crisp-tender.",
      },
      {
        id: 6,
        description:
          "Arrange all components in a bento box: rice, chicken, tamagoyaki, vegetables, and pickled ginger. Garnish with nori strips.",
      },
    ],
    image:
      "https://res.cloudinary.com/dhts7eqoi/image/upload/v1748206266/food-app/bento-box_x2ejkl.png",
    mostPopular: false,
    type: "Lunch",
    rating: 4.6,
    reviews: 145,
    prepTime: "30 minutes",
    cookTime: "25 minutes",
    servings: 1,
  },
];

export { categories, recipes };
