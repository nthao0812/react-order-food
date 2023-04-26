import classes from "./MealSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivery to you</h2>
      <p>
        Chose your favorite meal from our broad sectlion and enjoy a delicious
        lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs
      </p>
    </section>
  );
};

export default MealsSummary;
