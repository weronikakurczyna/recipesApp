import classes from './Recipe.module.css';
import ShortRecipeInfo from "./ShortRecipeInfo";
import IngredientsInfo from "./IngredientsInfo";
import CustomButton from "../../UI/CustomButton";
import {useHistory} from "react-router-dom";

const Recipe = ({recipe}) => {
    const {ingredients} = recipe;
    const history = useHistory();

    const showRecipeDetailsHandler = () => {
        history.push({
            pathname: `/recipe/${recipe.id}`
        });
    }

    return (
        <section className={classes.card}>
            <img className={classes.img} src={recipe.img} alt='pic1'/>
            <div className={classes.main}>
                <header className={classes.header}>
                    <h2>{recipe.name}</h2>
                    <h4>{recipe.desc}</h4>
                </header>
                <ShortRecipeInfo recipe={recipe}/>
                <IngredientsInfo ingredients={ingredients}/>
                <CustomButton onClick={showRecipeDetailsHandler}>Show more</CustomButton>
            </div>
            {/*<RecipeDetails/>*/}
        </section>
    )
}

export default Recipe;