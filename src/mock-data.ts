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
    name: "Indian",
  },
];

const recipes = [
  {
    id: 1,
    title: "Russian Navy Style Pasta",
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
    image: "https://placehold.co/400x600",
    mostPopular: true,
    type: "Dinner",
    prepTime: "5 minutes",
    cookTime: "30 minutes",
    servings: 4,
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
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
    image: "https://placehold.co/400x600",
    mostPopular: true,
    type: "Dinner",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 4,
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    description:
      "A popular Indian dish featuring tender chicken pieces in a rich, creamy tomato-based curry sauce.",
    category: "Indian",
    ingredients: [
      { id: 1, name: "Chicken breast", quantity: "1.5 pounds" },
      { id: 2, name: "Yogurt", quantity: "1 cup" },
      { id: 3, name: "Garam masala", quantity: "2 tsp" },
      { id: 4, name: "Tomato sauce", quantity: "2 cups" },
      { id: 5, name: "Heavy cream", quantity: "1 cup" },
      { id: 6, name: "Ginger", quantity: "1 Tbsp, minced" },
      { id: 7, name: "Garlic", quantity: "4 cloves, minced" },
    ],
    steps: [
      {
        id: 1,
        description:
          "Marinate chicken in yogurt and half the garam masala for at least 2 hours.",
      },
      {
        id: 2,
        description: "Grill or bake chicken until cooked through.",
      },
      {
        id: 3,
        description: "Sauté ginger and garlic in oil until fragrant.",
      },
      {
        id: 4,
        description:
          "Add tomato sauce and remaining spices, simmer for 10 minutes.",
      },
      {
        id: 5,
        description: "Add cream and cooked chicken, simmer for 5 minutes.",
      },
    ],
    image: "https://placehold.co/400x600",
    mostPopular: true,
    type: "Dinner",
    prepTime: "2 hours 30 minutes",
    cookTime: "30 minutes",
    servings: 4,
  },
  {
    id: 4,
    title: "Tonkatsu (Japanese Pork Cutlet)",
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
    image: "https://placehold.co/400x600",
    mostPopular: true,
    type: "Dinner",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 4,
  },
  {
    id: 5,
    title: "Chicken Enchiladas Verdes",
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
    image: "https://placehold.co/400x600",
    mostPopular: false,
    type: "Dinner",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: 6,
  },
  {
    id: 6,
    title: "Risotto ai Funghi (Mushroom Risotto)",
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
    image: "https://placehold.co/400x600",
    mostPopular: false,
    type: "Dinner",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 4,
  },
];

export { categories, recipes };
