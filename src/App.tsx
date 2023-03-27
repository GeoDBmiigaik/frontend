import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
