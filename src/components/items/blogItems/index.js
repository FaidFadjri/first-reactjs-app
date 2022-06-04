import React from 'react'
import './blog-item.scss';
import { RegisterImg } from '../../../assets';
import { Button } from '../../atoms';
import { useNavigate } from 'react-router-dom';

const BlogItems = ({title, description}) => {

  let navigate = useNavigate();

  return (
    <div className='article-item-wrap'>
        <img src={RegisterImg} alt='thumbnail'className='thumbnail' />
        <div className='text-wrap'>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button title="Read More" onClick={() => navigate("/detail-blog")}/>
        </div>
    </div>
  )
}

export default BlogItems;