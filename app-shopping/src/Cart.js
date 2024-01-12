import { useDispatch, useSelector } from "react-redux"
import { removeItem,incrementQty,decrementQty } from "./Redux/CartSlice"

export default function Cart()
{
    const carts = useSelector(state=>state.carts.value)
    const dispatch = useDispatch()
    return<>

    <h2>My Cart</h2>
    <table className="table mt-3">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Operation</th>
            </tr>
        </thead>
        <tbody>
            {carts.map((ob,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>
                <img className="rounded-circle" src={ob.thumbnail} height={100} width={100}></img>
            </td>
            <td>
                <b>{ob.title}</b> <br></br>
                {ob.category} / {ob.brand} <br></br>
                {ob.rating}
            </td>
            <td>{ob.price}</td>
            <td>
                <button onClick={()=>dispatch(decrementQty(ob.id))} 
                className="btn-sm btn-primary" disabled={ob.qty==1}>-</button>
                <b className="m-3">{ob.qty}</b>
                <button onClick={()=>dispatch(incrementQty(ob.id))} 
                 className="btn-sm btn-primary">+</button>
            </td>
            <td>{ob.price*ob.qty}</td>
            <td>
                <button onClick={()=>dispatch(removeItem(ob.id))} className="btn-sm btn-danger">Delete</button>
            </td>
             </tr>)}  
        </tbody>

    </table>

    </>
    
}

