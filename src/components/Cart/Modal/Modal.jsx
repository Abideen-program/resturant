import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { hideCart } from "../../Store/features/CartItemSlice";

const BackDrop = () => {
  const showCart = useSelector((state) => state.cartItems.showCart);
  const dispatch = useDispatch();

  return (
    <div
      className="fixed bg-backDrop w-full h-screen left-0 top-0 z-20"
      onClick={() => dispatch(hideCart())}
    ></div>
  );
};

const Modaloverlay = (props) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '3rem' }}
      animate={{ opacity: 1, translateY: 0  }}
      exit={{ opacity: 0, translateY: '3rem' }}
      className="fixed top-[25vh] lg:top-[35vh] left-[15%] md:left-[20%] lg:left-[calc(50%_-_15rem)] w-[70%] md:w-[30rem]  h-[20rem] bg-card p-4 md:px-10 rounded-2xl shadow-md z-30 overflow-y-scroll scrollbar-none"
    >
      <div>{children}</div>
    </motion.div>
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
