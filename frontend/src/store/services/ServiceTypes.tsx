export type GetMealsResponse = {
	data: Meal[];
};

export type Meal = {
	id: string;
	name: string;
	price: number;
	restaurantId: string;
	day: string;
	createdAt: string;
	updatedAt: string;
	restaurant: Restaurant;
	mealItems: MealItem[];
};

type Restaurant = {
	name: string;
	location: string;
};

type MealItem = {
	id: string;
	name: string;
	quantity: string;
	mealId: string;
	createdAt: string;
	updatedAt: string;
};
