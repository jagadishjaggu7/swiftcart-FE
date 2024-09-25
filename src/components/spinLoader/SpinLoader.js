import React from "react";

// CSS for the loader (spinner)
const spinnerStyle = {
    width: "16px",
    height: "16px",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderTop: "3px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
};

// Keyframes for spinner animation (can be added in your CSS file)
const spinnerKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function SpinnerLoader({ isLoading }) {
    return (
        <div>
            {/* Inject the keyframes into the document */}
            <style>{spinnerKeyframes}</style>

            {/* Only render the spinner if loading */}
            {isLoading && <div style={spinnerStyle} />}
        </div>
    );
}

export default SpinnerLoader;
