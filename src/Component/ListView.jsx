// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../Style/ListView.css";

// const ListView = ({ product }) => {
//   const {
//     id,
//     photo1,
//     photo2,
//     photo3,
//     owner_name,
//     description,
//     price,
//     address,
//     land_area,
//     contact,
//     created_date,
//     specification,
//   } = currElem;
//   return (
//     <div className="list-view-container">
//       {product.map((currElem) => {

//         return (
//           <div className="full-list-view">
//             <div className="list-view-image">
//               <img src={photo1} alt="" />
//             </div>
//             <div className="list-view-content">
//               <h2>{address}</h2>
//               <p> ${price}</p>
//               <p>{description.slice(0, 98)}</p>
//               <NavLink to={`/SingleProduct/${id}`}>
//                 <button>Read More</button>
//               </NavLink>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ListView;
