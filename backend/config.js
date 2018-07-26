module.exports = {
    // secret: '238a3D%DSGCXgcgSvcghFHJGAD',
    secret: process.env.SECRET_KEY , // process.env.SECRET_KEY // 238a3D%DSGCXgcgSvcghFHJGAD
    // db_url: 'mongodb://admin:admin1@ds239681.mlab.com:39681/trivializer-db'
    db_url:process.env.DB_URL, // process.env.DB_URL'mongodb://admin:admin1@ds239681.mlab.com:39681/trivializer-db'
    port: process.env.PORT, // process.env.PORT
}