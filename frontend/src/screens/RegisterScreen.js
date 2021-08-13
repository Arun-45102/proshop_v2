import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { register } from '../actions/userActions';
import Meta from '../components/Meta';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Password do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <Meta title='Register | Bumblee bee' />
      <div className='row mt-3'>
        <div className='col-md-6 offset-md-3' style={{ marginTop: '50px' }}>
          {message && <Message>{message}</Message>}
          {error && <Message>Fill the required fields</Message>}
          <div className='card border-0 shadow'>
            <div className='card-body'>
              <h2 className='h4 mb-1'>Sign up</h2>
              <hr className='mt-2' />
              <form onSubmit={submitHandler} className='needs-validation py-3'>
                <div className='input-group mb-3'>
                  <i className='ci-user position-absolute top-50 translate-middle-y text-muted fs-base ms-3'></i>
                  <input
                    className='form-control rounded-start'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                  <input
                    className='form-control'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='input-group mb-3'>
                  <i className='ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3'></i>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
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
                      <i className='ci-user me-2 ms-n21'></i>Sign up
                    </button>
                  )}
                </div>
              </form>
              <p className='fs-sm text-muted mb-4'>
                Already have an Account ??{' '}
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
