const blogModel = require('../models/blogsModel')


// Create Product
exports.createBlog = (req, res) => {
    let reqBody = req.body;
    blogModel.create(reqBody)
        .then(data => {
            res.status(200).json({
                status: "Success",
                data: data
            });
        })
        .catch(err => {
            res.status(400).json({
                status: "Fail",
                data: err
            });
        });
};


//Read Product
exports.readBlog = (req, res) => {
    let query = {};
    let projection = {};
   
    blogModel.find(query, projection)
    .then(data => {
        res.status(200).json({
            status: "Success",
            data: data
        });
    })
    .catch(err => {
        res.status(400).json({
            status: "Fail",
            data: err
        });
    });
}


//Update Product
// exports.updateProduct = (req, res) => {
//     let id = req.param.id;
//     let query = {_id: id};

//     let updateData = req.body;
   
//     ProductModel.updateOne(query, updateData)
//     .then(data => {
//         res.status(200).json({
//             status: "Success",
//             data: data
//         });
//     })
//     .catch(err => {
//         res.status(400).json({
//             status: "Fail",
//             data: err
//         });
//     });
// }



exports.updateBlog = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let updateData = req.body;

        let data = await blogModel.updateOne(query, updateData);

        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (err) {
        console.error("Update Error:", err);
        res.status(400).json({
            status: "Fail",
            data: err
        });
    }
}


//Delete Product
exports.deleteDelete = (req, res) => {
    let id = req.params.id;
    let query = {_id: id};
   
    blogModel.deleteOne(query)
    .then(data => {
        res.status(200).json({
            status: "Success",
            data: data
        });
    })
    .catch(err => {
        res.status(400).json({
            status: "Fail",
            data: err
        });
    });
}