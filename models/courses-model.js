const pool=require('../utilities/mysql_database')

class CoursesModel{

    static getCourse = async (id) => {
  const [reuslt] = await pool.query(`select * from courses where id=? `,[id]);
 return reuslt[0]
 
};
static insertCourse=async(title)=>{
    const reuslt= await pool.query('insert into courses (Title) value (?)',
    [title])

    return getCourse(reuslt.insertId)
}

static updateCourse=async (id ,title)=>{
    const [reuslt]= await pool.query(`
        update courese set title = ?` , [title ,id])
        return getCourse(id)

}  

static deleteCourse=async (id) =>{
    const reuslt=pool.query('delete from courses where Id=?' ,[id])
    return id
}
static callStoredProcedure=async(id) =>{
    const [reuslt]= await pool.query('call sp_select(?) ', [id])
    return reuslt[0]
}

}
module.exports=CoursesModel