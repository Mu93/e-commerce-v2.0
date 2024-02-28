import { useEffect } from "react";
import Modal from "react-modal";

const CustomModal = ({ children, modalStyle, ...rest }) => {
  useEffect(() => {
    // Set the app element when the component mounts
    Modal.setAppElement("#root");
    // Clean up when the component unmounts
    return () => {
      Modal.setAppElement(null);
    };
  }, []);
  return (
    <Modal
      {...rest}
      style={modalStyle} // Apply the custom styles
    >
      {children}
    </Modal>
  );
};

// Add this style to make the modal appear above other elements
// const modalStyle = {
//   overlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     zIndex: 1000,
//   },
//   content: {
//     zIndex: 1001,
//     width: "25%", // Set the desired width
//     height: "55%", // Set the desired height
//     margin: "auto", // Center the modal
//     padding: "0", // Center the modal
//   },
// };
export default CustomModal;
