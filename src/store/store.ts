import {createStore} from 'redux'
import { IBuying } from '../components/Buying';

const DELETE_ACTION = 'delete';
const EDIT_ACTION = 'edit';
const SAVE_ACTION = 'save'

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

export type ActionType =
| Action<typeof SAVE_ACTION, { newBuying: IBuying }>
| Action<typeof EDIT_ACTION, { index: number, newElement: IBuying }>
| Action<typeof DELETE_ACTION, { index: number }>


export function saveAction(newBuying: {name: string, cost: number}) {
    return {
        type: SAVE_ACTION,
        newBuying
    }
}

export function deleteAction(index: number) {
    return {
        type: DELETE_ACTION,
        index
    }
}

export function editAction(index: number, newElement: {name: string, cost: number}) {
    return {
        type: EDIT_ACTION,
        index,
        newElement
    }
}

interface IState {
    buyings: IBuying[];
};

const initialState: IState = {
    buyings: []
};


function reducer (state: IState = initialState, action: ActionType) {
    switch(action.type) {
        case DELETE_ACTION: {
            state.buyings.splice(action.index, 1);
            return {
                ...state,
                buyings: [...state.buyings]
            };
        }
        case EDIT_ACTION: {
            state.buyings[action.index] = action.newElement;
            return {
                ...state,
                buyings: [...state.buyings]
            }
        }
        case SAVE_ACTION: {
            return {
                ...state,
                buyings: [...state.buyings, action.newBuying]
            }
        }
        default: return state;
    }
}

const store = createStore(reducer)

export default store
