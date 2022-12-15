import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"




const News = () => {

  
  const URI = 'http://hn.algolia.com/api/v1/search?query=';
  const [news, setNews] = useState([]);

   
  useEffect(() => {
    axios
      .get(URI)
      .then((res) => { setNews(res.data.hits) })
      .catch((err) => console.log(err));
  }, []);

  console.log(news);

  return (
    <div className='news'>
        
        {news.map((title) => <p className='row'>{title.title}</p>)}
          
    </div>
  )
      
}


export default News