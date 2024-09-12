import { PrismaClient } from '@prisma/client';
import { employees, restaurants } from './seedData';

const prisma = new PrismaClient();

async function main() {
  const tables = ['Restaurant', 'Meal', 'MealItem', 'Employee', 'Vote'];

  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE "${table}" CASCADE`);
  }

  for (const employee of employees) {
    await prisma.employee.create({
      data: {
        name: employee,
      },
    });
  }

  for (const data of restaurants) {
    const restaurant = await prisma.restaurant.create({
      data: {
        name: data.restaurant.restaurant,
        location: data.restaurant.location,
      },
    });

    for (const meal of data.meals) {
      const newMeal = await prisma.meal.create({
        data: {
          name: meal.name,
          restaurantId: restaurant.id,
          day: meal.day as any,
          price: meal.price,
        },
      });

      for (const item of meal.mealItems) {
        await prisma.mealItem.create({
          data: {
            name: item.name,
            quantity: item.quantity,
            mealId: newMeal.id,
          },
        });
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Seeding completed');
    await prisma.$disconnect();
  });
