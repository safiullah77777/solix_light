import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Form from "./component/Form";

function App() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Banner />
      <Form />
    </div>
  );
}

export default App;
