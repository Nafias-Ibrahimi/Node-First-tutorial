const mysql = require("mysql2");

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
 return reuslt
};

const data=getCourse(1).then((reuslt)=>{
console.log(reuslt);
})

