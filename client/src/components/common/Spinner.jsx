// import React from "react";

const Spinner = () => { 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">
        {/* <style>
          {`
           .loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  position: relative;
  z-index: 9999;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} 
        `}
        </style> */}
      </div>
    </div>
  );
};

export default Spinner;
