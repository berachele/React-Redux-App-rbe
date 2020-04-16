import React, { useEffect, useState } from "react"
import {connect, useDispatch} from "react-redux"
import Loader from "react-loader-spinner"
import {fetchRecipe} from "../store/actions/recipeActions"

const Recipes = props => {
    // const dispatch = useDispatch()
    // // calling an action creator when mounts
    // useEffect(()=> {
    //     const timer =
    //     setTimeout(()=>{
            
    //         dispatch({type: "FETCH_RECIPE_LOAD"})
    //     }, 1000)
    //     return (()=> {
    //         clearTimeout(timer)
    //         dispatch({type: "SET_LOADING_OFF"})
    //     }
    // )}, []) //was working when I put isFetching to true but I want it to load when I click the button

    //to be able to search recipes
    const [newRecipe, setNewRecipe] = useState("")

    //event handler for recipe search
    const handleChanges = event => {
        setNewRecipe(event.target.value)
    }

    console.log("FETCH!!!!!", props.isFetching)
    return(
        <div>
            <h1>Recipe Puppy 🐶</h1>
            <h2>Easy access to all PAW-some recipes!</h2>
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
                    <h3>Retrieving Recipe...</h3>
                </div>
            )}
            {/* search results */}
            <div>
                {props.recipe && <h3>BONE-appetit!</h3>}
                {props.recipe && props.recipe.map(food => {
                    console.log("FOOD", food)
                    return (<p>{food.recipeTitle}, {food.href}, {food.ingredients}</p>)
                })}
            </div>
            {/* if there's an error */}
            {props.error && <><h3>Hmm..something's not right</h3><p className="error">There are no recipes with that keyword. Try searching again</p></>}
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