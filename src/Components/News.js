import React, {useEffect , useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

      const [articles, setarticles] = useState([])
      const [loading, setloading] = useState(true)
      const [page, setpage] = useState(1)
      const [totalresults, settotalresults] = useState(0)

  const FirstAlphabetCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

   const updateNews= async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setarticles(parsedData.articles)
    settotalresults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${FirstAlphabetCapitalize(props.category)}-NekoNews`;
    updateNews();
  }, [])

const fetchMoreData = async () => {  
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setpage(page+1)
  let data = await fetch(url);
  let parsedData = await data.json()
  setarticles(articles.concat(parsedData.articles))
  settotalresults(parsedData.totalResults)
};

  
    return (
      <div className="container my-5">
        <h1 className="text-center" style={{margin : '35px 0px',marginTop :'90px'}}>
          NekoNews - Top {FirstAlphabetCapitalize(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalresults}
                    loader={<Spinner/>}
                >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
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
        
      </div>
    );
  
}


News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
