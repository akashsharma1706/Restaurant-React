import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Your Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!'/>
        </div>
        </Fragment>
    );
};

export default Header;
