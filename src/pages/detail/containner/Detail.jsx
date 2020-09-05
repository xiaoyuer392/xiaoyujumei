import React, { useState,useCallback,useEffect } from 'react'
import {Head,Price,Desc,Additional,Shopwrap,Advence,Imgdetail,DetailProp,Rview,Buynav} from '../ui/styleeDetail'
import { Carousel,Tabs, WhiteSpace,Toast } from 'antd-mobile';
import connect from './connect'
import { withRouter } from 'react-router-dom'

function Detail(props){

    function showToast1() {
      Toast.info('加入购物车成功', 1);
    }
    function showToast2() {
      Toast.info('该商品已加入购物车购物车', 1);
    }
    let [detaillist,setDetaildata] = useState(null)
    let [resultlist,setResultlist] = useState(null)
    let [info,setInfo]=useState(null)
    let [reviewlist,setReview] = useState(null)
    useEffect(()=>{
      let id = props.match.params.id;
      let proid = props.match.params.proid
      props.loaddetailData({id,proid})
    },[])
    useEffect(()=>{
      // setId(id => props.location.state.itemid)
      setDetaildata(detaillist=>props.detaillist)
      setResultlist(resultlist=>props.resultlist)
      setInfo(info =>props.info)
      setReview(reviewlist=>props.reviewlist)
    },[props.detaillist,props.resultlist,props.info,props.reviewlist])
    let state = {
      imgHeight: 375,
      tabs:[
        { title: '图文详情' },
        { title: '商品参数' },
        { title: '评论' },
      ]
    }

    let handleClick = () => {
          props.history.push('/index')
    }
    let addShopcar = ()=>{
      
      let item = {
        pro_id: resultlist.item_id,
        company:resultlist.shop_info.store_title,
        name:detaillist.name,
        imgurl:resultlist.size[0].img,
        price:resultlist.jumei_price,
        sizetype:resultlist.size[0].name,
        num:1,
        iscost: true
      }
      let storage=window.localStorage
      
      let shopcarlist =JSON.parse(storage.getItem('shopcarlist'))
      if(!shopcarlist.find(x => x.pro_id === resultlist.item_id)){
        if(shopcarlist){
          
          shopcarlist.push(item)
          storage.setItem("shopcarlist",JSON.stringify(shopcarlist))
        }else{
          shopcarlist = [];
          shopcarlist.push(item)
          storage.setItem("shopcarlist",JSON.stringify(shopcarlist))
        }
        showToast1()
      }else{
        showToast2()
      }
    }

    return (
      <>
        <Head>
            <nav className="touch-header" onClick={handleClick}>
              <a href="#" className="touch-header-back yo-ico">&#xe654;</a>
                <div className="touch-header-title">{detaillist&&detaillist.name}</div>
              <a href="#" className="touch-header-home yo-ico" onClick={handleClick}>&#xe605;</a>
            </nav>
        </Head>

        {/* 轮播图 */}
          <Carousel
            autoplay={false}
            infinite
            dots={false}
          >
            { detaillist&&JSON.stringify(detaillist) !=="{}"?detaillist.image_url_set.single_many.map(val => (
              <a
                key={val[480]}
                style={{ display: 'inline-block', width: '100%', height: state.imgHeight}}
              >
                <img
                  src={val[480]}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </a>
            )):''
          }
          </Carousel>
        {/* 价格 */}
        <Price>
          <div className="normalShow">
            <div className="price-info">
                <span className="cur-price">￥{resultlist&&resultlist.jumei_price}</span>
                <del className="cost-price">￥{resultlist&&resultlist.market_price}</del>
                <strong>{resultlist&&resultlist.buyer_number_text}</strong>
            </div>
            <div className="downWrap">
              <div className="count-down">
                <span>还剩11.22.26</span>
              </div>
            </div>
          </div>                
        </Price>

        <Desc>
            <div className="normal-desc">{detaillist&&detaillist.name}</div>
        </Desc>

        <Additional>
          <div className="pro-wrap">
            <div className="pro-content">
              <div className="pro-type">促销</div>
              <div className="pro-item">
                <p className="item-list">
                  <span className="item-list-icon">满赠</span>
                  <span className="item-list-text">满588元赠雅诗兰黛化妆包 联系客服指定款式（满588赠：单拍不发）</span>
                </p>
                <p className="item-list">
                  <span className="item-list-icon">满赠</span>
                  <span className="item-list-text">满159元赠【现货秒发】卸妆棉 赠品链接，单拍不发</span>
                </p>
              </div>
            </div>
          </div>
          <div className="select-site">
            <strong className="site-label">地址</strong>
            <p className="site-choice">至{resultlist&&JSON.stringify(resultlist) !=="{}"? resultlist.default_address.structured_address:'' }</p>
          </div>
          <a className="postage-link">
            <div className="postage-wrap">
              <div className="postage-type">运费</div>
              <div className="postage-content">
                <span>{detaillist&&detaillist.guonei_baoyou}</span>
              </div>
            </div>
          </a>
          <div className="introduction-wrap">
            <div className="introductions-content">
              <div className="introduction-type">说明</div>
              <div className="introduction-item">
                <p className="introduction-list-title">
                  <span className="instruction-title-text">不支持退货</span>
                </p>
                <p className="introduction-list-title">
                  <span className="instruction-title-text">非自营(营业执照)</span>
                </p>
                <p className="introduction-list-title">
                  <span className="instruction-title-text">不支持换货</span>
                </p>
                <p className="introduction-list-title">
                  <span className="instruction-title-text">支持分期</span>
                </p>
              </div>
            </div>
          </div>
        </Additional>
        {/* 店铺 */}
        <Shopwrap>
          <div className="shopcontent">
            <div className="shopleft">
              <img src={info&&JSON.stringify(info) !=="{}"? info.logo_url[320]:'' } alt=""/>
            </div>
            <div className="shopright">
                  <div className="shopinfo">
                    <p className="shopname">{info&&info.store_title}</p>
                  </div>
                  <div className="shoplabel">
                    {info&&info.store_content}
                  </div>
            </div>
          </div>
          <div className="btnshop">
            <p className="shopbtn">进入店铺</p>
          </div>
        </Shopwrap>
        {/*广告*/}
        {/* <Advence>{
          resultlist&&JSON.stringify(resultlist) !=="{}"?
          (<div className="bfc">
          <div className="activt-img">
            <p className="pa"></p>
            <img src={resultlist.activity_list[0].img_url[480]} alt=""/>
          </div>
          <span className="fs14">{resultlist.activity_list[0].title}</span>
          <span className="fs12">{resultlist.activity_list[0].sale_promotion_word}</span>
        </div>):''
          }
        </Advence> */}
        <div>
          <WhiteSpace />
            <Tabs tabs={state.tabs} initialPage={0} animated={false} useOnPan={false} tabBarActiveTextColor='#fe4070' tabBarUnderlineStyle={{border:'1px solid #fe4070'}}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                <Imgdetail>
                    <div dangerouslySetInnerHTML = {{__html: detaillist&&JSON.stringify(detaillist) !=="{}"?(detaillist.description_info.description):''}} ></div>
                    <div dangerouslySetInnerHTML = {{__html: detaillist&&JSON.stringify(detaillist) !=="{}"?(detaillist.description_info.description_images):''}}></div>
                    <div dangerouslySetInnerHTML = {{__html: detaillist&&JSON.stringify(detaillist) !=="{}"?(detaillist.description_info.description_usage):''}}></div>
                </Imgdetail>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' ,paddingBottom: '20px' }}>
                <DetailProp>
                  {detaillist&&JSON.stringify(detaillist) !=="{}"?detaillist.properties.map((val)=>(
                    <li key={val.name}>
                      <span className="props-name">{val.name}</span>
                      <span className="props-content">{val.value}</span>
                    </li>
                  )):''
                  
                  }
                </DetailProp>
              </div>
              <div style={{ backgroundColor: '#fff' ,height:'auto'}}>
                {reviewlist&&JSON.stringify(reviewlist) !=="{}"?
                  (
                    <Rview>
                  <div className="high-persent">
                    <span>{reviewlist.rate_high}</span>好评
                  </div>
                  <div className="tippox">
                   { reviewlist.tag.map(val => (
                    <span id={val.tag_id} key={val.tag_id}>{val.tag_text}</span>
                    )
                    )
                   }
                  </div>
                  <ul className="comment">
                    {
                      reviewlist.filterList.map(val=>(
                        <li className="coment-item" key={val.comment_id}>
                      <div className="conment-msg">
                        <div className="block">
                          <div className="mbottom2">
                            <div className="top-img">
                              <img src={val.face} alt=""/>
                            </div>
                            <div className="top-info">
                              <div className="info-name">
                                <span className="f1">{val.uname}</span>
                                <span className="f1"><img src={val.group_url} alt=""/></span>
                              </div>
                                <span className="fs10">{val.register_time}</span>
                            </div>
                          </div>
                          <p className="mbottom">{val.comments}</p>
                          <div className="time-box-hidden">
                            <span className="f10">{val.dateline}</span>
                            <span className="f11">{val.attribute}</span>
                          </div>
                        </div>
                        
                        <p className="coment-img-list" >
                          {
                            val.img_paths!==''?val.img_paths.map(val=>(
                              <img src={val.small_img} key={val.small_img} alt=""></img>
                              )
                            ):''
                          }
                          
                        </p>
                        
                        <p className="conment-praise">
                        <span className="praise-num yo-ico">&#xe610;   有用</span>
                        <a href="#" className="conment-num yo-ico">&#xe608;   评论</a>
                      </p>
                      </div>
                    </li>
                      )
                      )
                    }
                  </ul>
                </Rview>
                  ):''
                }
                
              </div>
            </Tabs>
          <WhiteSpace />
        </div>
        {/* 底部导航 */}
        <Buynav>
          <div className="icon-block">
            <a href="#" className="store-link" onClick={handleClick}>
              <span className="yo-ico">&#xe605;</span>
              <p>店铺</p>
            </a>
            <a href="#" className="shopcart" onClick={handleClick}>
              <span className="yo-ico">&#xf0178;</span>
              <p>购物车</p>
            </a>
          </div>
          <div className="button-block">
            <a href="#" className="add-shopping-cart" onClick={addShopcar}>加入购物车</a>
            <a href="#" className="add-shopping-cart-direct" onClick={addShopcar}>立即购买</a>
          </div>
        </Buynav>
      </>
    )
}

export default connect(withRouter(Detail))