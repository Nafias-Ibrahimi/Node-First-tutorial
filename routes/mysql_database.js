const mysql = require("mysql2");
const { updateCourse } = require("../controller/courses-controller");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "123321",
    database: "nafisastyle",
  })
  .promise();

const getCourses = async () => {
  const [reuslt] = await pool.query("select * from courses");
 return reuslt
};
const getCourse = async (id) => {
  const [reuslt] = await pool.query(`select * from courses where id=? `,[id]);
 return reuslt[0]
 
};
const insertCourse=async(title)=>{
    const reuslt= await pool.query('insert into courses (Title) value (?)',
    [title])

    return getCourse(reuslt.insertId)
}

const updateCourse=async (id ,title)=>{
    const [reuslt]= await pool.query(`
        update courese set title = ?` , [title ,id])
        return getCourse(id)

}  

const deleteCourse=async (id) =>{
    const reuslt=pool.query('delete from courses where Id=?' ,[id])
    return id
}
const callStoredProcedure=async(id) =>{
    const [reuslt]= await pool.query('call sp_select(?) ', [id])
    return reuslt[0]
}

// const data=updateCourse(52).then((reuslt)=>{
// console.log(reuslt);
// })
const data=callStoredProcedure(40).then((reuslt)=>{
console.log(reuslt);
})

