import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { MyTables } from './pages/MyTables';
import { Navigation } from './components/Navigation';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { AdminPage } from './pages/AdminPage';
import { AppContext } from './components/App/AppContext';
import { useEffect, useState } from 'react';
import { formsRequest, responseData, unauthenticatedState } from './components/Users/UsersMethods';
import { Button } from '@mui/material';

function App() {
  const [user, setUser] = useState(unauthenticatedState);
  console.log(user);

  const sessionControl = async () => await formsRequest('session', 'get');
  useEffect(() => {
    sessionControl().then((response: responseData) => {
      if (response.user) {
        setUser({ credentials: response.user.credentials });
      } else {
        setUser({ credentials: unauthenticatedState.credentials });
      }
    });
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          userContext: user,
          setUserContext: (newUser) => {
            setUser(newUser);
          },
        }}
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          {user.credentials.includes('admin') ? (
            <>
              <Route path="/admin" element={<AdminPage />} />
            </>
          ) : (
            <></>
          )}
          {user.credentials[0] == 'anonymous' ? (
            <>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/tables" element={<ProductsPage />} />
            </>
          ) : (
            <>
              <Route path="/tables" element={<MyTables />} />
              <Route path="/signup" element={<ProductsPage />} />
              <Route path="/signin" element={<ProductsPage />} />
            </>
          )}
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
