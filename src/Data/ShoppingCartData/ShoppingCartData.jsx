
import redtable from '../../assets/images/table red.png'
import blacktable from '../../assets/images/table black.png'
import tableLamp from '../../assets/images/table black.png'


const ShoppingCartData = [
    {
        product: {
            src: redtable,
            name: 'Tray Table',
            color: "Red"
        },
        quantity: 2,
        price: '19.00',
        subtotal: '38.00'
    },
    {
        product: {
            src: blacktable,
            name: 'Tray Table',
            color: "Black"
        },
        quantity: 2,
        price: '19.00',
        subtotal: '38.00'
    },
    {
        product: {
            src: tableLamp,
            name: 'Table Lamp',
            color: "Black"
        },
        quantity: 1,
        price: '39.00',
        subtotal: '39.00'
    },

]

export default ShoppingCartData