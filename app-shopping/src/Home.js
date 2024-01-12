import { useEffect , useState } from "react"
import { setProducts } from "./Redux/ProductSlice";
import {useDispatch , useSelector} from "react-redux"
import { addItem } from "./Redux/CartSlice";

export default function Home()
{
    const products = useSelector(state=>state.products.value)
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch("https://dummyjson.com/products?limit=100")
        .then(response=>response.json())
        .then(data=>dispatch(setProducts(data.products)))

    },[]);
    return<>

    <h2>Our Products</h2>

    <div className="row">

       {products.map((ob,index)=><div key={"i"+index} className="col-xl-3 col-lg-3">
            <div className="text-center m-3">
                <img className="rounded-circle" src={ob.thumbnail} height={200} width={200}/>
                <br/>
                <b>{ob.title}</b> <br></br>
                <i className="text-success">$. {ob.price} ,
                &nbsp;
                <span className="text-danger">{ob.discountPercentage} %</span>
                 </i> <br></br>
                 <div>
                    {ob.images.map((p,i)=><span key={ob.title+i}>
                      <img src={p} className=" m-1 rounded-circle" height={20} width={20}></img>
                    </span>)}
                 </div>
                <button onClick={()=>dispatch(addItem(ob))} className="btn-sm btn-info">Add To Cart</button> &nbsp;
            </div>
        </div>
)}
    </div>

    </>
    
}


