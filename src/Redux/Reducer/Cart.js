import * as type from '../Action/type'
let data = JSON.parse(localStorage.getItem('cart'))
let initialState = data ? data : [];

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TO_CART: {
            let cartUpdate = [...state]
            let index = cartUpdate.findIndex(itemCourse => itemCourse.maKhoaHoc === action.itemCourse.maKhoaHoc);
            //nếu mã không trùng
            if (index === -1) {
                cartUpdate = [...cartUpdate, action.itemCourse]
            }
            // nếu mã trùng
            else {
                return cartUpdate
            }
            localStorage.setItem('cart', JSON.stringify(cartUpdate))
            return cartUpdate
        }
        case type.DELETE_TO_CART: {
            let cartUpdate=[...state];
            let index=cartUpdate.findIndex(makh=>makh.maKhoaHoc==action.maKhoaHoc);
            cartUpdate.splice(index,1);
            state=cartUpdate;
            localStorage.setItem('cart',JSON.stringify(cartUpdate));
            return [...state]
        }
        default: return state; //vào cái gì ra cái đó,ko thay đổi, k chỉnh sửa
    }
}
export default CartReducer