import React from 'react'
import { RegisterImg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate();

  return (
    <div className='main-page'>
      <div className='left'>
        <div className='content'>
          <img src={RegisterImg} alt='illustrasi' className='illustrasi'/>
          <p>Make your Dream <br/> <strong>Comes True</strong></p>
          <button className='login-button' onClick={() => navigate("/register")}>Daftar Yuk!</button>
        </div>
      </div>
      <div className='right'>
        <p className='title'>Daftar Disini</p>
        <form>
          <Input label="Fullname" placeholder="Ketika Nama Lengkap Anda" name="fullname" autocompletes='off'/>
          <Gap height={10}/>
          <Input label="Email" placeholder="Ketika Email Anda" name="email" autocompletes='off'/>
          <Gap height={10}/>
          <Input label="Password" placeholder="Ketika Password Anda" name="password" autocompletes='off'/>
          <Gap height={20}/>
          <Button title="Daftar Sekarang" />
          <Gap height={60} />
          <Link title="Daftar Sekarang" onClick={() => navigate("/register")}/>
        </form>
      </div>
    </div>
  )
}

export default Login;