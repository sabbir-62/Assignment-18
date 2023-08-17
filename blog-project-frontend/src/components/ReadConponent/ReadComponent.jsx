import { useEffect, useState } from "react";
import {Delete, Read} from "../../apiServices/CRUDServices";
import Loader from "../Common/Loader";
import cogoToast from 'cogo-toast';
import { Link } from "react-router-dom";


const ReadComponent = () => {

    let [dataList, setDataList] = useState([]);


    const fetchData = () => {
            Read()
              .then((result) => {
                if(result.length == 0){
                    cogoToast.error('No Data Found');
                }
                setDataList(result);
              })
          };

    

    useEffect(() => {
        fetchData();
    },[]);



    let deleteItem = (id) => {
        Delete(id).then((result) => {
            if(result){
                cogoToast.success('Delete Success');
                fetchData();
            }
            else{
                cogoToast.error("Delete Fail");
            }
        }).catch(() => {
            alert("Something went wrong! Delete Fail")
        })
    }


   if(dataList.length > 0){
    return (
        <div className="w-100">
                    {
                        dataList.map((item, index) => {
                            return(
                               <div key={index} className="card w-50 m-auto">
                                 <div className="m-5">
                                 <div  className="card-body">
                                    <div className="card-title text-bold">Title: {item.title}</div>
                                    <div className="card-text">Content: {item.content}</div>
                                    <div className="my-2">Author Name: {item.author}</div>
                                    <div>
                                        <button onClick={deleteItem.bind(this, item._id)} className="btn btn-danger">Delete</button>
                                        {/* <button onClick={updateItem.bind(this, item._id)} className="btn btn-danger m-2">Update</button> */}
                                        <Link to={`/update/${item._id}`} className="btn btn-danger m-2">Update</Link>
                                    </div>
                                </div>
                                 </div>
                                 <br/>
                               </div>
                               
                            )
                        })
                    }
        </div>
    );
   }
   else{
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Loader/>
        </div>
    )
   }
};

export default ReadComponent;


// import  { useEffect, useState } from "react";
// import { Delete, Read } from "../../apiServices/CRUDServices";
// import Loader from "../Common/Loader";
// import cogoToast from "cogo-toast";
// import UpdatePage from './../../pages/UpdatePage';

// const ReadComponent = () => {
//   const [dataList, setDataList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  

//   const fetchData = () => {
//     Read()
//       .then((result) => {
//         setDataList(result);
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setIsLoading(false);
//       });
//   };

//   const deleteItem = (id) => {
//     Delete(id)
//       .then((result) => {
//         if (result) {
//           cogoToast.success("Delete Success");
//           fetchData(); // Refresh data after successful deletion
//         } else {
//           cogoToast.error("Delete Fail");
//         }
//       })
//       .catch(() => {
//         alert("Something went wrong! Delete Fail");
//       });
//   };

//   useEffect(() => {
//     fetchData(); // Initial data fetch when component mounts
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center">
//         <Loader />
//       </div>
//     );
//   } else {
//     return (
//         <div>
//                      <table className="table table-bordered">
//                   <thead>
//                              <tr>
//                                  <th>Product Name</th>
//                                  <th>Code</th>
//                                  <th>Image</th>
//                                  <th>Unit Price</th>
//                                  <th>Quantity</th>
//                                  <th>Total Price</th>
//                                  <th>Action</th>
//                              </tr>
//                          </thead>
//                          <tbody>
//                              {
//                                  dataList.map((item, index) => {
//                                      return(
//                                          <tr key={index}>
//                                              <td>{item.productName}</td>
//                                              <td>{item.productID}</td>
//                                              <td><img className="w-50 h-auto" src={item.img} alt="afa" /></td>
//                                              <td>{item.unitPrice}</td>
//                                              <td>{item.quantity}</td>
//                                              <td>{item.totalPrice}</td>
//                                              <td>
//                                                  <button onClick={deleteItem.bind(this, item._id)} className="btn btn-danger">Delete</button>
//                                                  <button className="btn btn-danger m-2">Update</button>
//                                              </td>
//                                          </tr>
//                                      )
//                                  })
//                              }
//                          </tbody>
//                      </table>
//                  </div>
//     );
//   }
// };

// export default ReadComponent;