import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
// import Loader from '../components/Loader';
import Meta from '../components/Meta';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Meta title='Login | Bumblee bee' />
      <div className='row mt-3'>
        <div className='col-md-6 offset-md-3' style={{ marginTop: '75px' }}>
          {error && <Message>{error}</Message>}
          <div className='card border-0 shadow'>
            <div className='card-body'>
              <h2 className='h4 mb-1'>Sign in</h2>
              <hr className='mt-2' />
              <form onSubmit={submitHandler} className='needs-validation py-3'>
                <div className='input-group mb-3'>
                  <i className='ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3'></i>
                  <input
                    className='form-control rounded-start'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='input-group mb-3'>
                  <i className='ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3'></i>
                  <div className='password-toggle w-100'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className='text-end pt-2'>
                  {loading ? (
                    <button type='button' className='btn btn-primary'>
                      <span
                        className='spinner-border spinner-border-sm me-2'
                        role='status'
                        aria-hidden='true'
                      ></span>
                      Loading...
                    </button>
                  ) : (
                    <button className='btn btn-primary' type='submit'>
                      <i className='ci-sign-in me-2 ms-n21'></i>Sign In
                    </button>
                  )}
                </div>
              </form>
              <p className='fs-sm text-muted mb-4'>
                Dont have an Account ??{' '}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : '/register'}
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
