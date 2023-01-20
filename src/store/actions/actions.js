// Incremental ID for Todos
let nextTodoID = 0;

// Action Types:
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/**
 * Add Task
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text // text: text
        }
    }
}

/**
 * Status is complete or pending.
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/**
 * Visibility Filter, complete, incomplete or all.
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}
