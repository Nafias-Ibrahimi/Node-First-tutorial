const CoursesModel=require('../models/courses-model');
const { resume } = require('../utilities/mysql_database');

const getCourse = (req, res) => {
  CoursesModel.getCourse(parseInt(req.params.id))
    .then((result) => {
      if (!result) {
        return res.status(404).send("Course with given id not found");
      }
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};


const getCourses=(req,res )=>{
  res.send(['html' ,'css','javascript'])
}


const insertCourse=(req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    return res
      .status(400)
      .send("Name is required and should be at least 3 characters.");
      return;
  }
 CoursesModel.insertCourse(req.body.name).then((result)=>{
  res.send(result)
 })

}

const updateCourse= (req , res)=>{
  CoursesModel.getCourse(parseInt(req.params.id)).then((result)=>{
if (!result) return res.status(404).send("Course with given id not found");
  })
      // const course = courses.find((c) => c.id === parseInt(req.params.id));
  
  if (!req.body.name || req.body.name.length < 3) 
   return res.status(400).send('name is require and more than 3 characters')
  
  courses.name=req.body.name
  CoursesModel.updateCourse(parseInt(req.params.id), req.body.name).then((result)=>{
 res.send(result)
  })
 

}
const deleteCourse=(req ,res) =>{
   CoursesModel.getCourse(parseInt(req.params.id)).then((result)=>{
if (!result) return res.status(404).send("Course with given id not found");
  })
  CoursesModel.deleteCourse(parseInt(req.params.id)).then((result)=>{
    res.send(result)
  })
}


module.exports={
    getCourse,
    getCourses,
    insertCourse,
    updateCourse,
    deleteCourse
}