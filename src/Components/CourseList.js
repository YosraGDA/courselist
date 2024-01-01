import React,{ Component, Fragment } from 'react'; 



class CourseList extends Component {
  render(){
  return (
   <Fragment>
    <li>{this.props.details.name}
    <button onClick={this.props.deleteCourse}>Delete course</button>
    </li>
    
    </Fragment>
  );
}
}
export default CourseList;
