import React,{ Component, Fragment } from 'react'; 



class CourseList extends Component {
state={
    isEdit : false
}
  // render course Item
  renderCourse=()=>{
    return(
    <li>
    <span>{this.props.details.name}</span>
    <button onClick={() => {this.toggleState()}}>Edit course</button>
    <button onClick={this.props.deleteCourse}>Delete course</button>
    </li>)
    
  }
  //updateCourseItem
  updateCourseItem = (e) => {
   e.preventDefault();
   this.props.editCourse(this.props.index, this.input.value )
   this.toggleState()
  }
  //render Update Form
  renderUpdateForm=()=>{
   return(
    <form onSubmit={this.updateCourseItem}>
        <input type='text' ref={(v) => this.input = v} defaultValue={this.props.details.name}/>
        <button>Update course</button>
    </form>
   )
  }
//toggleState
  toggleState=()=>{
    let {isEdit} = this.state;
    this.setState({
        isEdit : !isEdit
    })
}

  render(){
    let {isEdit} = this.state;
  return (
   <Fragment>
    { isEdit ? this.renderUpdateForm() : this.renderCourse() }
    </Fragment>
  );
}
}
export default CourseList;
