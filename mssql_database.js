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
const insertCourse=async (id,title) =>{
    const pool=await poolPromise
        const request=pool.request();
        request.input('id' ,sql.Int , id)
        request.input('Title' ,sql.NVarChar , title)
      const result=await  request.query('insert into courses (title) values (@Title)')
console.log(result);
// return recordset
}
const updateCourse=async (title) =>{
    const pool=await poolPromise
        const request=pool.request();
        request.input('Tilte' ,sql.NVarChar , title)
      const result=await  request.query('update courses set Title=@Title where Id=@Id')
console.log(result);
// return recordset
}
const deleteCourse=async (id) =>{
    const pool=await poolPromise
        const request=pool.request();
        request.input('selectedId' ,sql.Int , Id)
      const result=await  request.query('delete from coursese where Id=@selectedId')
console.log(result);
// return recordset
}

 deleteCourse(2)
