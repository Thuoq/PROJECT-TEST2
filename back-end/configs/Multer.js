const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, process.cwd() + '/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + '.xlsx')
    }
});
exports.upload = multer({
    storage: storage
});

