import React from 'react'

const NewsItem=(props)=>{
    
        let {title,description,imageUrl,newsUrl}=props
        return (
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="No image Present"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-dark" target="blank">Go somewhere</a>
                        </div>
                </div>
        )
}

export default NewsItem;
