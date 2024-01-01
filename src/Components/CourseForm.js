const CourseForm = (props)=>{
return(
    <form onSubmit={props.addCourse}>
        <input type="text" onChange={props.updateCourse}></input>
        <button type="submit">Add Course</button>
    </form>
)
}
export default CourseForm;