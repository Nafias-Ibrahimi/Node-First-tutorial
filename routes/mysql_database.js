
const { updateCourse } = require("../controller/courses-controller");
const getCourses = async () => {
  const [reuslt] = await pool.query("select * from courses");
 return reuslt
};


// const data=updateCourse(52).then((reuslt)=>{
// console.log(reuslt);
// })
const data=callStoredProcedure(40).then((reuslt)=>{
console.log(reuslt);
})

