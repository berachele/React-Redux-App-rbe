//ACTIONS
import axios from "axios"


export const fetchRecipe = input => dispatch => {
    dispatch({type: "FETCH_RECIPE_LOAD"})
    setTimeout(()=> axios.get(`http://www.recipepuppy.com/api/?i${input}`)
    .then(res => {
        console.log("This is RESPONSE", res)
        //I will want res.results[]
        dispatch({type: "FETCH_RECIPE_SUCCESS", payload: res.data.results})
    })
    .catch(err => {
        console.log("ERROR!-->", err)
        //want just err
        dispatch({type: "FETCH_RECIPE_FAILURE", payload: err})
    }), 1000)
}