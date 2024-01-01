import { Component } from "react";
import CourseForm from './Components/CourseForm';
import CourseList from "./Components/CourseList";


class App extends Component {
  render(){
  return (
   <section className="App">
    <h2>Add courses</h2>
   <CourseForm/>
   <CourseList/>
   </section>
  );
}
}
export default App;
