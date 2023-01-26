import React, { useContext, useReducer, useRef} from 'react';

// Actions
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const FILTER_TASK = 'FILTER_TASK';

const taskContext = React.createContext(null);

// Other Components
const TasksList = ({deleteTask}) => {
    const state = useContext(taskContext);
    const listTask = state.filter.length === 0? state.list : state.filter;

    return (
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
    );
}

const FilterTask = ({filter, inputFilterTaskRef}) => {
    const state = useContext(taskContext);

    return (
        <input 
            type='text'
            placeholder='Filter task'
            disabled= { state.list.length > 0 ? false : true }
            ref= {inputFilterTaskRef}
            onChange={(e)=> {
                e.preventDefault();
                filter();
            }}
        />
    );
}

const AddTask = ({submit, inputTaskRef}) => {
    return (
        <form onSubmit={submit}>
            <input 
                type='text'
                placeholder='Input task'
                ref={inputTaskRef}
            />
            <button type='submit'>Add Task</button>
        </form>
    );
}

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

const TaskUseContext = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

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
        <taskContext.Provider value={state}>
            <div>
                <h1>Tasks Context</h1>
                <FilterTask filter={filter} inputFilterTaskRef={inputFilterTaskRef} />
                <hr />
                <TasksList deleteTask={deleteTask} />
                <hr />
                <AddTask submit={submit} inputTaskRef={inputTaskRef} />
            </div>
        </taskContext.Provider>
    );
}

export default TaskUseContext;
