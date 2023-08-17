import { useRef } from "react";
import { Create } from './../../apiServices/CRUDServices';
import Loader from "../Common/Loader";
import cogoToast from 'cogo-toast';


const CreateComponent = () => {

    let productName, productID, img, loader, productTable= useRef();

    let saveData = () => {
        let name = productName.value;
        let id = productID.value;
        let image = img.value;
       

        if(name.length == 0) {
            cogoToast.error("Title name is required");
          }
        else if(id.length == 0) {
            cogoToast.error("Content id is required");
          }
        else if(image.length == 0) {
            cogoToast.error("Author image is required");
        }
        else{
            loader.classList.remove('d-none');
            productTable.classList.add('d-none');
            Create(name, id, image)
            .then((result) => {
                loader.classList.add('d-none');
                productTable.classList.remove('d-none');
                if(result){
                    cogoToast.success('Success');
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
                        <textarea ref={(input) => productID = input} type="text" className="form-control"/>
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

export default CreateComponent;