require('dotenv').config()
const axios = require('axios');
var cloudinary = require('cloudinary').v2;
const multer = require('multer');
const sharp = require('sharp');
const {v4: uuid} = require('uuid');
const { Media } = require('../models');

const upload = multer({limits: {
    fileSize: 4000000
}}).single('avatar');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
    uploadMediaAuto: function (req, res) {
        console.log('media controller has been fired/')
        upload(req, res, async function(err) {
            if(err || req.file === undefined) {
                console.log(err);
                res.status(422).json({msg: "oopsie"})
            } else {
                console.log("req", req.file)
                let fileName = uuid() + ".jpeg"
                // let fileName = "blah.jpeg"
                let image = await sharp(req.file.buffer).jpeg({
                    quality: 100
                });
                cloudinary.uploader.upload('./uploads/' + fileName, async (error, result) => {
                    if (error) {
                        console.log("cloudinary error")
                        console.log(error);
                        res.status(422).json({msg: "cloudinary oopsie"})
                    } else {
                        console.log('media successfully clouded?');
                        console.log(result)
                        try {
                            const imageAdded = await Media.create({
                                ...result,
                                tags: "test"
                            });
                            res.status(200).json({
                                msg: "good work",
                                checkThis: result
                            })
                        } catch (err) {
                            res.status(422).json({msg: "db oopsie"})
                        }
                        
                    
                    }
                })
                
            }
        })
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
    }
}