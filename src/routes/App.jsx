import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@containers/Layout';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { RecoveryPassword } from '@pages/RecoveryPassword';
import { Checkout } from '@pages/Checkout';
import { CreateAccount } from '@pages/CreateAccount';
import { NotFound } from '@pages/NotFound';
import { MyAccount } from '@pages/MyAccount';
import { NewPassword } from '@pages/NewPassword';
import { Orders } from '@pages/Orders';
import { SendEmail } from '@pages/SendEmail';
import '@styles/global.scss';
import { useInitialState } from '@hooks/useInitialState';
import { AppContext } from '@context/AppContext';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recovery-password' element={<RecoveryPassword />} />
            <Route path='/pay' element={<Checkout />} />
            <Route path='/new-account' element={<CreateAccount />} />
            <Route path='/account' element={<MyAccount />} />
            <Route path='/new-password' element={<NewPassword />} />
            <Route path='/carrito' element={<Orders />} />
            <Route path='/send-email' element={<SendEmail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
