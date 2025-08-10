export interface Ingredient {
  name: string
  amount: string
  unit: string
}

export interface Recipe {
  id: string
  title: string
  description: string
  image: string
  authorId: string
  authorName: string
  authorAvatar: string
  ingredients: Ingredient[]
  instructions: string[]
  prepTime: number
  cookTime: number
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  cuisine: string
  diet: string
  rating: number
  ratingsCount: number
  tags: string[]
  createdAt: string
  nutrition?: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
  }
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  bio: string
  followers: number
  following: number
  recipesCount: number
  joinedDate: string
  favorites: string[]
  savedRecipes: string[]
  shoppingList: ShoppingListItem[]
}

export interface ShoppingListItem {
  id: string
  name: string
  amount: string
  unit: string
  category: string
  completed: boolean
  recipeId?: string
  recipeName?: string
}

export interface MealPlanItem {
  id: string
  date: string
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack'
  recipeId: string
  recipeName: string
  servings: number
}

export interface SearchFilters {
  cuisine: string
  diet: string
  difficulty: string
  maxTime: number
  minRating: number
}

export interface RecipeRating {
  recipeId: string
  userId: string
  rating: number
  review?: string
  createdAt: string
}

export interface UserFollow {
  followerId: string
  followingId: string
  createdAt: string
}