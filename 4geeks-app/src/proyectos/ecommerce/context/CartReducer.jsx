const CartReducer = (state, action) => {
    let producto;

    switch(action.type) {
        case "AGREGAR_PRODUCTO":
            producto = state.carrito.find(item => item.id == action.payload);            

            if (producto) {
                producto.cantidad++;
            } else {                
                producto = state.productos.find(item => item.id == action.payload);            
                producto.cantidad = 1;
                state.carrito.push(producto);
            }

            console.log("El producto #" + action.payload + " se ha agregado correctamente!");

            return {
                ...state,
                carrito:[...state.carrito],
                total:state.carrito.reduce((acum, item) => acum += item.cantidad, 0),
                sumaTotal:state.carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case "ELIMINAR_PRODUCTO":
            let carritoActualizado;
            console.log("El producto #" + action.payload + " se ha eliminado correctamente!");
            
            // Eliminar el producto de forma completa
            /* let carritoActualizado = state.carrito.filter(item => item.id != action.payload);

            return {
                ...state,
                carrito:[...carritoActualizado],
                total:carritoActualizado.reduce((acum, item) => acum += item.cantidad, 0),
                sumaTotal:carritoActualizado.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            } */

            // Eliminar de a 1(uno) producto
            producto = state.carrito.find(item => item.id == action.payload);

            if (producto.cantidad > 1) {
                producto.cantidad--;
                carritoActualizado = [...state.carrito];
            } else {
                carritoActualizado = state.carrito.filter(item => item.id != action.payload);
            }

            return {
                ...state,
                carrito:[...carritoActualizado],
                total:carritoActualizado.reduce((acum, item) => acum += item.cantidad, 0),
                sumaTotal:carritoActualizado.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case "VACIAR_CARRITO":
            return {
                ...state,
                carrito:[],
                total:0,
                sumaTotal:0
            }
        default:
            return state;
    }
}

export default CartReducer