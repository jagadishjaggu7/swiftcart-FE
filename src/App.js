import { useEffect, useState } from "react";
import AppRoutes from "../src/appRoutes/AppRoutes";
import { useNavigate } from 'react-router-dom';
import sessionService from "./services/sessionServices";


function App() {
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      const token = sessionService.getToken();
      if (token) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
      setInitialized(true);
    }
  }, [navigate, initialized]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
