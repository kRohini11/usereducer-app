export const appReducer = (state, action) => {
    console.log("prevState>>>", state);
    console.log("action>>>", action)
    switch (action.type) {
        case "No1_UPDATE":
            state = {
                ...state,
                no1: action.payload
            }
            break;
        case "NO2_UPDATE":
            state = {
                ...state,
                no2: action.payload
            }
            break;

    }
    console.log("nextState>>>", state)
    return state
}