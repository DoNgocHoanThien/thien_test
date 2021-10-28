import { ADD_ITEM, REMOVE_ITEM } from '../types/OrderBugerType'

export const addItemAction = (name) => {
    return ({
        type: ADD_ITEM,
        name
    })
}

export const removeItemAction = (name) => {
    return ({
        type: REMOVE_ITEM,
        name
    })
}