import React, { useState } from "react"
import {connect} from "react-redux"
import Loader from "react-loader-spinner"
import {fetchRecipe} from "../store/actions/recipeActions"

const Recipes = props => {
    //to be able to search recipes
    const [newRecipe, setNewRecipe] = useState("")

    //event handler for recipe search
    const handleChanges = event => {
        setNewRecipe(event.target.value)
    }

    console.log("FETCH!!!!!", props.isFetching)
    return(
        <div className="insideApp">
            <div className="header">
                <h1>Recipe Puppy</h1>
                <h2>Easy access to all the PAW-some recipes!</h2>
            </div>
           <div className="body">
               <h3>Start Digging! 🦴</h3>
                <label htmlFor="rsearch">
                    <input 
                    value={newRecipe}
                    onChange={handleChanges}
                    type="search" 
                    id="rsearch" 
                    name="rsearch" 
                    placeholder="Search recipes" /></label> &nbsp;
                <button onClick={() => {props.fetchRecipe(newRecipe)}}>Fetch!</button>
            {/* when we click Fetch! button */}
                {props.isFetching && (
                    <div><Loader 
                        type="ThreeDots" 
                        color="#00BFFF" 
                        height={80} 
                        width={80}
                        />
                        <h4>Retrieving Recipe...</h4>
                    </div>
                )}
            {/* search results */}
                <div className="card">
                    {props.recipe && <h4>BONE-appetit!</h4>}
                    {props.recipe && props.recipe.map(food => {
                        console.log("FOOD", food)
                        return (<p>{food.recipeTitle}, {food.href}, {food.ingredients}</p>)
                    })}
                </div>
            {/* if there's an error */}
                {props.error && <h4 className="error">Hmm..something's not right..<span className="error">Try searching again</span></h4>}
           </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("This is my STATE-->", state)
    return{
        recipe: state.recipes.recipe,
        isFetching: state.recipes.isFetching,
        error: state.recipes.error
    }
}

export default connect(mapStateToProps, 
    {fetchRecipe}
    )(Recipes)