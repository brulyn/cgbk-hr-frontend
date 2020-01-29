import LoginForm from "./login/loginForm";
import "semantic-ui-css/semantic.min.css";
import MyFormComponet from "./form/form";
function App() {
  // return LoginForm();
  return new MyFormComponet();
}

export default App;
