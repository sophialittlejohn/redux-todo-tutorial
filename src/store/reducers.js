const todoListReducer = (state = {todos: []}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newState = [...state.todos]
            newState.push(action.payload)
            return {...state, todos: newState}
        default:
            return state
    }
}

export default todoListReducer
