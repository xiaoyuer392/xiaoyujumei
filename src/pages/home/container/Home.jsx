import React, { Component } from 'react'
import connect from './connect'
import {
  Search,
  HeaderNav,
  Shoplist
} from '../ui/StyledHome'
import { withRouter } from 'react-router-dom'
import '../ui/styles.css'

@connect
@withRouter
class Home extends Component {

  state = {
    list: []
  }
  
  render() {
    return (
      <>
      {/* 搜索框 */}
        <Search>
          <header>
            <a href="#" className="index-search">
              <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt=""/>
              <span>搜索商品 分类 功效</span>
            </a>
            <span className="search_action">
              <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" alt=""/>
            </span>
          </header>
        </Search>
      {/* 头部nav */}
          <HeaderNav>
            <div className="navouter">
              <div className="naviner">
                <p className="navtitle" id="navselect">
                  <a href="#">
                    <span>首页</span>
                    <span className="navline"></span>
                  </a>
                </p>
                <p className="navtitle">
                  <a href="#">
                    <span>极速免税店</span>
                    <span className="navline"></span>
                  </a>
                </p>
                <p className="navtitle">
                  <a href="#">
                    <span>母婴</span>
                    <span className="navline"></span>
                  </a>
                </p>
                <p className="navtitle">
                  <a href="#">
                    <span>轻奢</span>
                    <span className="navline"></span>
                  </a>
                </p>
                <p className="navtitle">
                  <a href="#">
                    <span>名品特卖</span>
                    <span className="navline"></span>
                  </a>
                </p>
              </div>
            </div>
          </HeaderNav>

         {/* 商品列表 */}
        <Shoplist {...this.props}>
          <div className="title-nav">
            <span className="title-item tab-click">
              今日10点上新
            </span>
            <span className="title-item">
              明日10点预告
            </span>
          </div>
          <div className="list">
            {
              this.props.list.map(value=>{
                return (
                  <a href="#" className="product-item" key={value.item_id} onClick={()=>{this.props.history.push(`/details/${value.item_id}/${value.product_id}`)}}>
              <div className="deal-item">
                <div className="product-img">
                  <img src={value.image_url_set.dx_image.url[320]} alt=""/>
                </div>
                <div className="product-detail">
                <div className="product-title">{value.name}</div>
                  <div className="product-wrap"></div>
                  <div className="price-wrap">
                    <div className="price-list">
                      <span className="jumei-price">￥<span>{value.jumei_price}</span></span>
                      <span className="del-price">￥{value.market_price}</span>
                    </div>
                    <div className="buynum">{value.product_desc}</div>
                  </div>
                </div>
              </div>
            </a> 
                )
              })
            }
          </div>
        </Shoplist>
      </>
    )
  }

  componentDidMount() {
    this.props.loadData()
    let shopcarlist = JSON.stringify([]) 
    let storage=window.localStorage
    if(storage.getItem("shopcarlist")){
    }else{
      storage.setItem("shopcarlist",shopcarlist)
    }
  }
}

export default Home
