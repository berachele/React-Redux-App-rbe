import React, { useEffect } from "react"
import {connect} from "react-redux"

const Recipes = props => {
    //calling an action creator when mounts
    useEffect(()=> {
        props.fetchRecipe()
    }, [])

    return(
        <div>
            <h1>Recipe Puppy 🐶</h1>
            <h2>Easy access to all PAW-some recipes!</h2>
            <label htmlFor="rsearch"><input type="search" id="rsearch" name="rsearch" placeholder="Search recipes" /></label> &nbsp;
            <button>Fetch!</button>
            {props.recipeTitle && <div><h3>BONE-appetit!</h3>{props.recipeTitle}, {props.ingredients}, {props.href}</div>}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("This is my STATE-->", state)
    return{
        recipeTitle: state.recipes.recipeTitle,
        href: state.recipes.href,
        ingredients: state.recipes.ingredients,
        isFetching: state.recipes.isFetching,
        error: state.recipes.error
    }
}

export default connect(mapStateToProps, 
    {}
    )(Recipes)