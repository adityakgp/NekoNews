import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 12,
    category : 'general'
  }
static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading : false,
      page : 1
    };
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=fcefa83b9c474028a19946cd8216f69f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
    }
    
    previousClick=async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=fcefa83b9c474028a19946cd8216f69f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({page: this.state.page - 1, articles: parsedData.articles, loading:false})
    }
    nextClick=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=fcefa83b9c474028a19946cd8216f69f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({page: this.state.page + 1, articles: parsedData.articles, loading:false})
      
    }
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">NekoNews Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          { !this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 45):' '}
                  description={element.description?element.description.slice(0, 90):' '}
                  author={element.author ? element.author : 'Unknown'} 
                  date={element.publishedAt}
                  source={element.source.name}
                  imageUrl={element.urlToImage?element.urlToImage:'https://www.pngkey.com/png/full/441-4412849_twitch-emotes-png.png'}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.previousClick}> <strong>&larr;</strong> Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.nextClick}>Next <strong>&rarr;</strong> </button>
        </div>
      </div>
    );
  }
}

export default News
