import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinning  from './Spinning'
import PropTypes from 'prop-types'
//import { propTypes } from 'react-bootstrap/esm/Image'


export class News extends Component {

    static defaultProps={
        country : 'us',
        pageSize: 9,
        category: 'science'

    }

    static propTypes={
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }

     capitalizeFirstLetter = (string) =>
     {
         return string.charAt(0).toUpperCase() + string.slice(1);
    }
 
    constructor(props) {
        super(props);
        console.log("i am constructor");
        this.state = {
            articles: [],
            loading: false,
            pages: 1
        }
        document.title= this.capitalizeFirstLetter(this.props.category);
    }

    async UpdateNews()
    {
        this.props.setProgress(10);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51c6cc40071f4239a2f171e1cada0e5a&page=${this.state.pages}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData =  await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,
        totalResults : parsedData.totalResults,
        loading : false
    });
    this.props.setProgress(100);
}


  async  componentDidMount()
    {
       this.UpdateNews();
    }


    nextPage= async ()=>
    {
        console.log("next");
        if(this.state.pages + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))
        {
          
        }
        else{
         this.setState({
            pages : this.state.pages+1
          })
          this.UpdateNews();
        }
       
    }

    previousPage= async ()=>
    {
    this.setState({
        pages: this.state.pages-1
    })
    this.UpdateNews();

    }


    render() {
        return (
            <>
            <div className="container my-5">
                <h2 className= "text-center" >NewsApp - {this.capitalizeFirstLetter(this.props.category)} News</h2>
                {/*The above logic means if the state of loading is true then only display the spinner in the application otherwise not.*/}
                {this.state.loading && <Spinning/>}
                
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title ? element.title.slice(0,30) : " "} description={element.description ? element.description.slice(0,50) :" "} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author?"Unknown": element.author} publishedAt={element.publishedAt}/>
                        </div>
                    })}
                </div>
            
                </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.pages <= 1} type="button" className="btn btn-secondary" onClick={this.previousPage}> &larr; Previous</button>
            <button disabled={this.state.pages + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.nextPage}>Next &rarr;</button>
            </div>

        </>

        )
    }
}

export default News
