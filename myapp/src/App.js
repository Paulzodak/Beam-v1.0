import LoginPage from "./components/Login/LoginPage";
import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import { emailReducer } from "./redux/form";
import Loading from "./UI/Loading";
import { loginAuthReducer } from "./redux/form";
import { useDispatch } from "react-redux";
import { currentUserIDReducer } from "./redux/form";
import ErrorModal from "./components/errorModal";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from "react-spinners";
import CreateAccountPage from "./components/CreateAccount/CreateAccountPage";

function App() {
  const { formIsValid } = useSelector((state) => state.form);
  const { register } = useSelector((state) => state.form);
  const { loginAuth } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const { errorModal } = useSelector((state) => state.Menu);
  console.log(errorModal);
  // sessionStorage.setItem("showAddTodo", false);

  // dispatch(
  //   currentUserIDReducer({ currentUserIDReducer: sessionStorage.getItem("ID") })
  // );
  // console.log(localStorage.getItem("Login"));
  // console.log(formIsValid);
  if (sessionStorage.getItem("Login")) {
    dispatch(loginAuthReducer({ loginAuth: true }));
  }
  const renderedLogin = () => {
    return (
      <SwitchTransition>
        <CSSTransition
          key={loginAuth}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="loginFade"
        >
          {loginAuth ? <HomePage /> : <LoginPage />}
        </CSSTransition>
      </SwitchTransition>
    );
  };
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
          key={register}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {register ? <CreateAccountPage /> : renderedLogin}
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition>
        <CSSTransition
          key={errorModal.show}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {errorModal.show ? (
            <ErrorModal message={errorModal.message} />
          ) : (
            <></>
          )}
        </CSSTransition>
      </SwitchTransition>
      {/* {<CreateAccountPage />} */}
      {/* <Loading /> */}
    </>
  );
}

export default App;
