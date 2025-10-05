import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
    const [firstItem, setFirstItem] = useState({
        name: 'Biryani',
        quantity: 2
    });

    useEffect(() => {
        setTimeout(() => {
            setFirstItem(item => {
                return {
                    ...item,
                    quantity: 10
                }
            })
        }, 5000)
    })

    return <section className="max-w-sm mx-auto">
            <h1>Cart</h1>
            <MenuItem item={firstItem} />
            <MenuItem item={{
                name: 'Chicken Handi',
                quantity: 1
            }}/>
            <MenuItem item={{
                name: 'Halwa Puri',
                quantity: 6
            }} />
        </section>;
}


export default Cart;