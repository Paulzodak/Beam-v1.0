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
import { Card } from "./UI/Card.styled";
import { ClipLoader } from "react-spinners";
import LoaderModal from "./components/LoaderModal";
import ThemeLoader from "./components/ThemeLoader";
import beamerLogo from "./Images/beamer.png";
import { ImageCard } from "./UI/ImageCard.styled";
import axios from "axios";
import { useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { showErrorModalReducer } from "./redux/Menu";
import { setUsers } from "./redux/Menu";
import { setAppReady } from "./redux/Menu";
// import {
//   BarLoader,
//   BeatLoader,
//   BounceLoader,
//   CircleLoader,
//   ClimbingBoxLoader,
//   ClipLoader,
//   ClockLoader,
//   DotLoader,
//   FadeLoader,
//   GridLoader,
//   HashLoader,
//   MoonLoader,
//   PacmanLoader,
//   PropagateLoader,
//   PuffLoader,
//   PulseLoader,
//   RingLoader,
//   RiseLoader,
//   RotateLoader,
//   ScaleLoader,
//   SyncLoader,
// } from "react-spinners";
import CreateAccountPage from "./components/CreateAccount/CreateAccountPage";

const BASEURL = "https://63322126a54a0e83d24c89f7.mockapi.io/";
function App() {
  const { formIsValid } = useSelector((state) => state.form);
  const { register } = useSelector((state) => state.form);
  const { loginAuth } = useSelector((state) => state.form);
  const { loaderModal } = useSelector((state) => state.Menu);
  const { appReady } = useSelector((state) => state.Menu);
  const dispatch = useDispatch();
  const { errorModal } = useSelector((state) => state.Menu);
  console.log(errorModal);
  // sessionStorage.setItem("showAddTodo", false);

  // dispatch(
  //   currentUserIDReducer({ currentUserIDReducer: sessionStorage.getItem("ID") })
  // );
  // console.log(localStorage.getItem("Login"));
  // console.log(formIsValid);
  useEffect(() => {
    axios
      .get(`${BASEURL}/Users`)
      .then((response) => {
        console.log(response);
        dispatch(setUsers({ users: response.data }));
        dispatch(setAppReady({ appReady: true }));
        // setUsers(response.data);
      })
      .catch((err) => {
        dispatch(showErrorModalReducer({ show: true, message: err.message }));
      });
  }, []);
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
  const renderedApp = () => {
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
        <SwitchTransition>
          <CSSTransition
            key={loaderModal}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            {loaderModal ? <LoaderModal /> : <></>}
          </CSSTransition>
        </SwitchTransition>
      </>
    );
  };

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={appReady}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {appReady ? renderedApp : <ThemeLoader />}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
