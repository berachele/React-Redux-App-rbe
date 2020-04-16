const initialState = {
    recipe: "",
    isFetching: false,
    error: ""
}

export const recipesReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_RECIPE_LOAD":
            return{
                ...state,
                isFetching: true
            }
        case "SET_LOADING_OFF":
            return{
                ...state,
                isFetching: false
            }
        case "FETCH_RECIPE_SUCCESS":
            return{
                ...state,
                isFetching: false,
                recipe: action.payload.map(recipe => {
                    return{
                        recipeTitle: recipe.title,
                        href: recipe.href,
                        ingredients: [...recipe.ingredients, recipe.ingredients]
                    }
                }),
                error: ""
            }
        case "FETCH_RECIPE_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}