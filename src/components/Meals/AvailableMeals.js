import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Burger',
    description: 'Every Bite, a Burst of Happiness!',
    price: 149,
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'Slice into Happiness!',
    price: 349,
  },
  {
    id: 'm3',
    name: 'White Sauce Pasta',
    description: 'Extra spicy, extra delicious!',
    price: 299,
  },
  {
    id: 'm4',
    name: 'Tacos',
    description: 'Wrap Yourself in Flavor!',
    price: 199,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
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

export default AvailableMeals;