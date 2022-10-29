import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  document.title=`${props.category}--Daily News Updates`
  

  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4028ffcd72fc4a06b166c494b58dff49&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults);
  }

  useEffect(() => {
    UpdateNews()

  }, [])

  const handleNext = async () => {
      setPage(page+1);
      UpdateNews();

  }

  const handlePrev = async () => {
    setPage(page-1);
    UpdateNews();
  }

  

    return (
      <div className='container my-3 news' >
        <div className='row'>
          {articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title.slice(0, 70)} description={element.description ? element.description.slice(0, 120) : "No description available"} imageUrl={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={page <= 1} class="btn btn-dark" onClick={handlePrev}>Prev</button>
          <button type="button" className="btn btn-dark" onClick={handleNext}>Next</button>

        </div>
      </div>
    )

}

export default News;
