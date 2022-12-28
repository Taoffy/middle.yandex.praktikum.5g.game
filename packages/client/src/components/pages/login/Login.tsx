import React from 'react'
import './Login.css'

function Login() {
    return  <main className="login">
                <div className="centered-box">
                    <div className="centered-box__inner">
                        <h1 className="login__title">Авторизация</h1>
                        <form className="form__wrp">
                            <div className="input-box">
                                <label></label>
                                <input type="text" className="input" placeholder="Логин"/>
                            </div>
                            <div className="input-box">
                                <input type="password" className="input" placeholder="Пароль"/>
                            </div>
                            <button className="form__btn-submit" type="submit">Войти</button>
                        </form>
                        <a className="form__link" href="">Зарегистрироваться</a>
                    </div>
                </div>
            </main>
}

export default Login