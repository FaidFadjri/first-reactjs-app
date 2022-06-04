import {React, useState} from 'react';
import './homepage.scss';
import {BlogItems, Button, Modal} from '../../components';
import {useHistory} from 'react-router-dom';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
   <div className='homepage-wrapper'>
     <div className='button-area'>
       <Button title="Create Blog" onClick={() => {
         setOpenModal(true);
       }} />
     </div>
     <div className='article-wrapper'>
       <BlogItems title="is PHP dead in 2022 ?" description="According to" />
       <BlogItems title="is PHP dead in 2022 ?" description="According to" />
       <BlogItems title="is PHP dead in 2022 ?" description="According to" />
       <BlogItems title="is PHP dead in 2022 ?" description="According to" />
       <BlogItems title="is PHP dead in 2022 ?" description="According to" />
     </div>

     {/* Jika State openModal bernilai True maka tampilkan Modal */}
     {openModal && <Modal closeModal = {setOpenModal} />}
   </div>
  )
}

export default Home;