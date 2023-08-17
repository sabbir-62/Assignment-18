import { useEffect, useState } from "react";
import { useRef } from "react";
import { Update, Read } from './../../apiServices/CRUDServices';
import Loader from "../Common/Loader";
import cogoToast from 'cogo-toast';


const UpdateComponent = ({id}) => {

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
    

    let productName, productID, img, loader, productTable= useRef();

    let saveData = () => {
        let name = productName.value;
        let pID = productID.value;
        let image = img.value;
       
        loader.classList.remove('d-none');
        productTable.classList.add('d-none');
        Update(id, name, pID, image)
        .then((result) => {
            loader.classList.add('d-none');
            productTable.classList.remove('d-none');
            if(result){
                cogoToast.success('Update Success');
                fetchData();
                productName.value = "";
                productID.value = "";
                img.value = "";
                
            }
            else{
                cogoToast.error("Request Fail. Please try again");
            }
        })
        .catch((err) => {
            alert(err);
        })

    }

    return (
        <div>
            <div className="container pt-4" ref={(div) => productTable = div}>
                <div className="row">
                    <div className="col-md-4 p-3">
                        <label>Title</label>
                        <input ref={(input) => productName = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 p-3">
                        <label>Content</label>
                        <input ref={(input) => productID = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 p-3">
                        <label>Author Name</label>
                        <input ref={(input) => img = input} type="text" className="form-control"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4 p-3">
                        <button onClick={saveData} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>
            <div className="d-none" ref={(div) => loader = div}>
                <div>
                    <Loader/>
                </div>
            </div>
        </div>
    );
};

export default UpdateComponent;