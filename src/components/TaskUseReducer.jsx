import React, { useReducer, useRef } from 'react';

// Actions
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const FILTER_TASK = 'FILTER_TASK';

// Initial State
const initialState = {
    list: [],
    filter:[]
}

// Reducer
const taskReducer = (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            let newId = Math.max(...state.list.map(task=>task.id)) + 1;
            if(newId.toString() === "-Infinity") newId = 1;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: newId,
                        name: action.payload.name
                    }
                ]
        }
        case DELETE_TASK:
            return {
                ...state,
                list: state.list.filter((x) => x.id !== action.payload.id),
                filter: state.filter.filter((x) => x.id !== action.payload.id)
            }
        case FILTER_TASK:
            let strFilter = state.list;
            return {
                ...state,
                filter: action.payload.name.trim() === "" ? [] : strFilter.filter((x) => x.name.toLocaleLowerCase().includes(action.payload.name.toLocaleLowerCase()))
            }
        default:
            return state;
    }
}

const TaskUseReducer = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const listTask = state.filter.length === 0? state.list : state.filter;

    const inputTaskRef = useRef();
    const inputFilterTaskRef = useRef();

    const submit = async (e) => {
        e.preventDefault();
        try {
            dispatch({
                type:ADD_TASK,
                payload: {
                    name: inputTaskRef.current.value
                }
            });
            
            inputTaskRef.current.value = '';
            filter();
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    function filter() {
        dispatch({
            type: FILTER_TASK,
            payload: {
                name: inputFilterTaskRef.current.value
            }
        })
    }

    function deleteTask(id) {
        dispatch({
            type: DELETE_TASK,
            payload: {
                id: id
            }
        });
        filter();
    }

    return (
        <div>
            <h1>Tasks</h1>
            <input 
                type='text'
                placeholder='Filter task'
                disabled= {listTask ? false : true}
                ref= {inputFilterTaskRef}
                onChange={(e)=> {
                    e.preventDefault();
                    filter();
                }}
            />
            <ul>
                {
                    listTask && listTask.length > 0 ? (
                        listTask.map((task) => (
                            <li key={task.id} >
                                {task.id} - {task.name}
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    deleteTask(task.id);
                                }
                            }>Delete</button>
                            </li>
                        ))
                    ) : (
                        <li disabled>No task in list</li>
                    )
                }
            </ul>
            <hr />
            <form onSubmit={submit}>
                <input 
                    type='text'
                    placeholder='Input task'
                    ref={inputTaskRef}
                />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    );
}

export default TaskUseReducer;
