import ReactDOM from "react-dom";

const BackDrop = () => {
  return (
    <div className="fixed bg-backDrop w-full h-screen left-0 top-0 z-20"></div>
  );
};

const Modaloverlay = (props) => {
  const { children } = props;
  return (
    <div className="fixed top-[25vh] lg:top-[35vh] left-[15%] md:left-[20%] lg:left-[calc(50%_-_20rem)] w-[70%] md:w-[30rem] lg:w-[40rem] h-[20rem] bg-card p-4 rounded-2xl shadow-md z-30">
      <div>{children}</div>
    </div>
  );
};

const portalTo = document.getElementById("overlays");

const Modal = (props) => {
  const { children } = props;
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalTo)}
      {ReactDOM.createPortal(<Modaloverlay>{children}</Modaloverlay>, portalTo)}
    </>
  );
};

export default Modal;

//   overflow-x: scroll;
