import React, { useRef } from 'react';
import styles from './login.module.scss'
const { row, loginform, headerTitle,
  button } = styles

export function Login(props) {

  const userNameRef = useRef(null)
  const pwdRef = useRef(null)


  const onLoginSubmit = async (event) => {
    event.preventDefault()
   const userName = userNameRef.current?.value
    const pwd = pwdRef.current?.value
    if (!!userName && !!pwd)  {
      await props.fetchLogin({
        email: userName, // "eve.holt@reqres.in",
        password: pwd //"cityslicka"
      })
    }   
  }

  const FormHeader = props => (
    <h2 className={headerTitle}>{props.title}</h2>
  )
  const Form = props => (
    <div>
      <FormInput refValue={userNameRef} description="Username" placeholder="Enter your username" type="text" />
      <FormInput refValue={pwdRef} description="Password" placeholder="Enter your password" type="password" />
      <FormButton title="Log in" />
    </div>
  )

  const FormButton = props => (
    <div className={button} className={row} onClick={onLoginSubmit}>
      <button>{props.title}</button>
    </div>
  )

  const FormInput = props => (
    <div className={row}>
      <label>{props.description}</label>
      <input ref={props.refValue} type={props.type} placeholder={props.placeholder} />
    </div>
  )


  return (
    <div className={loginform}>
      <FormHeader title="Login" />
      <Form />
    </div>
  )
}
