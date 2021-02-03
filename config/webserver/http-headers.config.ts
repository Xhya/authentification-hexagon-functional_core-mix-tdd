require('dotenv').config();

export default [
    ['Access-Control-Allow-Origin', process.env.FRONT_URL],
    ['Access-Control-Allow-Credentials', 'true'],
    ['Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'],
    ['Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, content-type']
]