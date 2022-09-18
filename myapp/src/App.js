import LoginPage from "./components/Login/LoginPage";
import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import { emailReducer } from "./redux/form";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const { formIsValid } = useSelector((state) => state.form);
  console.log(formIsValid);

  return (
    <>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
      {/* <LoginPage />  */}
      <SwitchTransition>
        <CSSTransition
          key={formIsValid}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {!formIsValid ? <HomePage /> : <LoginPage />}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
