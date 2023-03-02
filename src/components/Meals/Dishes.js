import classes from "./Dishes.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dosa",
    description: "South Indian",
    price: 180,
  },
  {
    id: "m2",
    name: "Coke",
    description: "Soft Drink",
    price: 40,
  },
  {
    id: "m3",
    name: " Burger",
    description: "Cheese, vaggies",
    price: 80,
  },
  {
    id: "m4",
    name: "Soup",
    description: "Healthy and green",
    price: 180,
  },
];

const Dishes = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Dishes;
