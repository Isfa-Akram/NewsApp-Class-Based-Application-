import React , { Component } from 'react'

export class NewsItems extends Component {
    render() {
    let {title,description,imageUrl,newsUrl,author,publishedAt} = this.props;
    
        
        return (
            <>
            
           <div className="my-4" style={{width:"200" , height:"200" }}>
                <div className="card" style={{width:"400" , height:"600" }}>
                    <img className="card-img-top" src={imageUrl} alt=".." style={{width:"200" , height:"200" }}/>
                        <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-secondary">Read More</a>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
                        </div>
                </div>

           </div></>
        )
    }
}

export default NewsItems
