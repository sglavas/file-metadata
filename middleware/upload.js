const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// Set up storage for uploaded files


module.exports = upload