const stateDefault = {
    menu: [
        { name: 'Salad', amount: 0, price: 10 },
        { name: 'Cheese', amount: 0, price: 20 },
        { name: 'Beef', amount: 0, price: 55 }
    ]
}


const OrderbugerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const menuUpdate = [...state.menu];
            const index = menuUpdate.findIndex(item => item.name === action.name);
            if (index !== -1) {
                menuUpdate[index].amount += 1;
            };
            state.menu = menuUpdate;
            return { ...state };
        }

        case "REMOVE_ITEM": {
            const menuUpdate = [...state.menu];
            const index = menuUpdate.findIndex(item => item.name === action.name);
            if (index !== -1 && menuUpdate[index].amount >= 1) {
                menuUpdate[index].amount -= 1;
            };
            state.menu = menuUpdate;
            return { ...state };
        }

        default:
            return { ...state };
    }
}

export default OrderbugerReducer;