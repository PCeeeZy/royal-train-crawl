require('dotenv').config()
const axios = require('axios');
var cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
    uploadMediaAuto: function (req, res) {
        console.log('media controller has been fired/')
        // cloudinary.uploader.upload(req.body, { tags: 'basic_sample' })
        //     .then(function (image) {
        //         console.log();
        //         console.log("** File Upload (Promise)");
        //         console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
        //         console.log("* " + image.public_id);
        //         console.log("* " + image.url);
        //         res.json({msg: "success"})
        //     })
        //     .catch(function (err) {
        //         console.log();
        //         console.log("** File Upload (Promise)");
        //         if (err) { 
        //             console.warn(err);
        //             res.json({msg:"error"})
        //         }
        //     });
        res.status(200).json({
            msg: "good work"
        })
    }
}