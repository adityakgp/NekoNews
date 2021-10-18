import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  FirstAlphabetCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.FirstAlphabetCapitalize(
      this.props.category
    )}-NekoNews`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false, 
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
}

previousClick = async () => {
  this.setState({ page: this.state.page - 1 });
  this.updateNews();
}

nextClick = async () => {
  this.setState({ page: this.state.page + 1 });
  this.updateNews()
}

fetchMoreData = async () => {  
  this.setState({page: this.state.page + 1})
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
  })
};

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">
          NekoNews - Top {this.FirstAlphabetCapitalize(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
          <div className="container">
          <div className="row">
            {/* { !this.state.loading && this.state.articles.map((element) => {
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
          })} */}

            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description? element.description.slice(0, 90): " "
                    }
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                    imageUrl={
                      element.urlToImage? element.urlToImage: "https://www.pngkey.com/png/full/441-4412849_twitch-emotes-png.png"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.previousClick}> <strong>&larr;</strong> Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.nextClick}>Next <strong>&rarr;</strong> </button>
        </div> */}
      </div>
    );
  }
}

export default News;
