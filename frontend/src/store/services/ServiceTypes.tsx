export type GetMealsResponse = {
	data: Meal[];
};

export type GetMealResponse = {
	data: Meal;
};

export type GetEmployeesResponse = {
	data: Employee[];
};

export type CreateVoteReqBody = {
	mealId: string;
	employeeId?: string;
	newEmployeeName?: string;
};

export type Employee = {
	id: string;
	name: string;
	createdAt: string;
	updatedAt: string;
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
	votes: Vote[];
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

type Vote = {
	id: string;
	employee: Employee;
};
