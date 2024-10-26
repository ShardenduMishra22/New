import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home.tsx"
import FileUploadComponent from './components/Upload.tsx';

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<FileUploadComponent />} />
        </Routes>
      </div>
  );
}

export default App;
