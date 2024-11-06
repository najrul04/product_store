import { useEffect } from "react";

const Toast = ({ title, description, status, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close toast after 3 seconds
    }, 3000);
    
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  // Determine background color based on toast status
  const backgroundColor = status === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`${backgroundColor} text-white px-4 py-2 rounded-md shadow-md fixed top-4 right-4`}>
      <strong>{title}</strong>: {description}
    </div>
  );
};

export default Toast;
