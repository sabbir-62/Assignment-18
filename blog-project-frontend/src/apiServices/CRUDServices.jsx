import axios from "axios"


//Create
export const Create = async(title, content, author) => {
    let url = "http://localhost:8000/api/v1/createBlog";
    let data = {
        title: title,
        content: content,
        author: author
    }
    return await axios.post(url, data)
    .then((res) => {
        if(res.status == 200){
            return true;
        }
        else{
            return false;
        }
    })
    .catch((err) => {
        console.log(err);
        return false;
    })
}



//Read
export const Read = async() => {
    let url = "http://localhost:8000/api/v1/readBlog";
    return await axios.get(url).then((res) => {
        if(res.status == 200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err) => {
        console.log(err);
        return false;
    })
}



//Update
export const Update = async(id, title, content, author) => {
    let url = "http://localhost:8000/api/v1/updateBlog/" + id;
   
    let data = {
        title: title,
        content: content,
        author: author
    }
    return await axios.post(url, data)
    .then((res) => {
        if(res.status == 200){
            return true;
        }
        else{
            return false;
        }
    })
    .catch((err) => {
        console.log(err);
        return false;
    })
}



//Delete
export const Delete = async(id) => {
    let url = "http://localhost:8000/api/v1/deleteBlog/" + id;
    return await axios.get(url).then((res) => {
        if(res.status == 200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err) => {
        console.log(err);
        return false;
    })
}

// export default {Create, Read, Update, Delete}