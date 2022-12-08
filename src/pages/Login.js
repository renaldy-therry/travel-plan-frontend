import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import AuthApi from '../data/auth-api';
import Auth from '../layouts/Auth';

export default function Login({ loginSuccess }) {
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);
  const onLoginHandler = async ({ email, password }) => {
    const response = await AuthApi.login({ email, password });
    if (response.success) {
      loginSuccess(response.data.token);
      navigate('/');
    } else {
      setError(true);
    }
  };

  return (
    <Auth>
      {error && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>
              Email & password salah
            </span>
          </div>
        </div>
      )}
      <FormLogin login={onLoginHandler} />
    </Auth>
  );
}
