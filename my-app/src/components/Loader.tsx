const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#3b324a]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
        <style>
          {`
            @keyframes loading {
              from { width: 30px; }
              to { width: 300px; }
            }
            @keyframes fadeText {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}
        </style>
        
        <rect x="50" y="40" width="300" height="30" rx="15" fill="#ffffff" />
        
        <rect x="50" y="40" width="30" height="30" rx="15" fill="#663399">
          <animate 
            attributeName="width"
            values="30;300"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        
        <text x="200" y="100" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="24">
          Loading...
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  );
};

export default Loader;
