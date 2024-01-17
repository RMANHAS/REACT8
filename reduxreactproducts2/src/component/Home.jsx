// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../redux/cartSlice";


// export default function Home() {
//   const [currentPage,setCurrentPage]=useState(1)
//   const recordPerpage=5
// const lastIndex=currentPage * recordPerpage;
// const firstIndex=last


//   const dispatch=useDispatch()
//   const [products, setproducts] = useState([]);
//   async function getData() {
//     const {data} = await axios.get(`https://fakestoreapi.com/products`);
//        console.log(data)
//     setproducts(data);
//   }
//   useEffect(() => {
//     getData();
//   }, []);


//   function handleCart(product){
//     dispatch(add(product))
//   }
//   return (
//     <div>
//     <div className="container-fluid m-auto">
//     <div className="row">
//           {products.map((product,i) => (
//             <div class="card col-md-3 m-2" style={{width:"20rem"}} key={i}>
//               <img src={product.image} class="card-img-top" alt="..."  style={{ objectFit:"contain",height:"100px"}}/>
//               <div class="card-body">
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>

               
//                 <h6>Name :{product.title}</h6>
//                 <h6>Price :{product.price}</h6>
//                 <hr />
//                 <button className="btn btn-sm btn-success me-2">
//                   More Details...
//                 </button>
//                 <button
//                   className="btn btn-sm btn-secondary"
//                   onClick={() => handleCart(product)}
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//     </div>
//   );
// }


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerpage = 3;
  const lastIndex = currentPage * recordPerpage;
  const firstIndex = lastIndex - recordPerpage;
  const records = products.slice(firstIndex,lastIndex)
  const npage = Math.ceil(products.length / recordPerpage);
  const numbers = [...Array(npage).keys()].slice();


  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  async function getData() {
    let { data } = await axios.get(`https://fakestoreapi.com/products`);
    console.log(data);
    setProducts(data);
  }
  useEffect(() => {
    getData();
  }, []);

  function handleCart(product) {
    dispatch(add(product));
  }
  function nextPage(){
    if(currentPage!==npage){
      setCurrentPage(currentPage+1)

    }
  }

  function prevPage(){
    if(currentPage!==0){
      setCurrentPage(currentPage-1)
    }
  }
function currpage(n){
  setCurrentPage(n)
}
  return (
    <>

    {/* search box */}
    <form>
            <input
              type="search"
              name="email"
              placeholder="search records"
              className="w-50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
         
          {/* search box ends */}
        </form>
      <div className="container-fluid m-auto">
        <div className="row">
          {/* <div classname="col-md-3"> */}
          {
          records.filter((product) => {
              return search.toLowerCase() === ""
                ? product
                : product.title.toLowerCase().includes(search);
            }).map((product, i) => (
            <div
              className="card col-md-3 m-2"
              style={{ width: "18rem" }}
              key={i}
            >
              <img
                src={product.image}
                className="card-img-top mt-2"
                alt="..."
                style={{ objectFit: "contain", height: "100px" }}
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h6>Name : {product.title}</h6>
                <h6>Price :{product.price}</h6>
                <hr />
                <button className="btn btn-sm btn-success me-2">
                  More Details...
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={ ()=>handleCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
     

        <Pagination aria-label="Page navigation example">
        <PaginationItem  className={currentPage===1?'disabled':""}>
          <PaginationLink previous href="#"onClick={()=>prevPage()} 
          className={currentPage===1?'disabled':""}
          />
        </PaginationItem>
        <PaginationItem>
         
         
        </PaginationItem >
        {
            numbers.map((n,i)=>
            <PaginationLink key={i}
            className={currentPage===n+1?"active":""}
            href="#" onClick={()=>currpage(n+1)}>
            {n+1}
          </PaginationLink>)
          }
              <PaginationItem
              className={currentPage===npage?'disabled':""}
              >
          <PaginationLink next href="#" onClick={()=>nextPage()} />
        </PaginationItem>
      </Pagination>
 

      </div>
    </>
  );
}
