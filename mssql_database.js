const sql=require('mssql')
require('dotenv').config()
const config={
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    server:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    options:{
        encrypt:false,
        TrustServerCertificate:true
    }
}
const poolPromise=new sql.ConnectionPool(config).then(pool =>{
    console.log('connected to pool')
    return pool
}).catch(err =>
    console.log('Error :' +err));

    const getCourses=async () =>{
        const pool=await poolPromise
        const request=pool.request
        const result=await request.query('select * from courses')
        console.log(result);

    }
const getCourse=async (id) =>{
    const pool=await poolPromise
        const request=pool.request();
        request.input('Id' ,sql.Int , id)
      const result=await  request.query('select * from courses where Id=@Id')
console.log(result);
return recordset
}

    getCourses(2)
