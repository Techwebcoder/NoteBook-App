import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = (props) => {
  return (
    <div className="container my-3">
      <AddNote showAlert={props.showAlert} mode={props.mode} />
      <Notes showAlert={props.showAlert} mode={props.mode} />
    </div>
  );
};

export default Home;