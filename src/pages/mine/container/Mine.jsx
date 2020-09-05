import React, { Component } from 'react'
import {Head,User,Bg,Order,Fund,MineList,Kefu} from '../ui/StyledMine'


class Mine extends Component {

  state = {
    list: []
  }
  
  render() {
    return (
      <>
        <Bg>
        {/* 顶部导航 */}
          <Head>
              <div className="head-left">
                  <i className="yo-ico">&#xe654;</i>
              </div>
              <div className="head-title">我的聚美</div>
              <div className="head-right">
                  <i className="yo-ico">&#xe605;</i>
              </div>
          </Head>
          {/* 用户 */}
          <User>
              <img src="http://p0.jmstatic.com/jmstore/user/icon/cat_200_200.png?1596115759" alt="" className="photo"/>
              <div className="ur-bg">
                  <div className="user-info">
                      <span className="name">JM1JagSkXajc9</span>
                      <span className="grade">普通会员</span>
                  </div>
                  <div className="icons">
                      <a href="#" className="wishlist">
                          <div className="yo-ico">&#xe610;</div>
                          <span>心愿单</span>
                      </a>
                      <a href="#" className="onsale">
                          <div className="yo-ico">&#xe551;</div>
                          <span>开售提醒</span>
                      </a>
                      <a href="#" className="fav">
                          <div className="yo-ico">&#xe58b;</div>
                          <span>收藏</span>
                      </a>
                  </div>
              </div>
          </User>
        </Bg>
        {/* 我的订单 */}
        <Order>
          <div className="order-title">
            <i className="yo-ico">&#xe606;</i>
            我的订单
            <a href="#" className="order-title-nav"><span>查看我的全部订单</span><i className="arrow-right"></i></a>
          </div>
          <div className="order-content">
            <a href="#" className="order-item">
              <i className="yo-ico">&#xe50c;</i>
              <span>待付款</span>
            </a>
            <a href="#" className="order-item">
              <i className="yo-ico">&#xe607;</i>
              <span>待收货</span>
            </a>
            <a href="#" className="order-item">
              <i className="yo-ico">&#xe608;</i>
              <span>待评价</span>
            </a>
            <a href="#" className="order-item">
              <i className="yo-ico">&#xe6d8;</i>
              <span>退款/退款</span>
            </a>
          </div>
        </Order>
        {/* 我的资产 */}
        <Fund>
          <div className="fund-title">
            <i className="yo-ico">&#xe637;</i>
            我的资产
          </div>
          <div className="fund-content">
            <a href="#" className="fund-item">
              <div className="value"></div>
              <span>现金券</span>
            </a>
            <a href="#" className="fund-item">
              <div className="value"></div>
              <span>红包</span>
            </a>
            <a href="#" className="fund-item">
              <div className="value"></div>
              <span>聚美余额</span>
            </a>
            <a href="#" className="fund-item">
              <div className="value"></div>
              <span>礼品卡</span>
            </a>
          </div>
        </Fund>

        {/* 列表 */}
        <MineList>
          <a href="#" className="list-item">
            <i className="rmaservice yo-ico">&#xe622;</i>
            <span>售后服务</span>
            <i className="arrow-right"></i>
          </a>
          <a href="#" className="list-item">
            <i className="rmaservice yo-ico">&#xe5a0;</i>
            <span>意见反馈</span>
            <i className="arrow-right"></i>
          </a>
          <a href="#" className="list-item">
            <i className="rmaservice yo-ico">&#xe656;</i>
            <span>收货地址</span>
            <i className="arrow-right"></i>
          </a>
          <a href="#" className="list-item">
            <i className="rmaservice yo-ico">&#xe60c;</i>
            <span>退出登录</span>
            <i className="arrow-right"></i>
          </a>
          <a href="#" className="list-item">
            <i className="rmaservice yo-ico">&#xe6ab;</i>
            <span>400-123-8888</span>
            <i className="arrow-right"></i>
          </a>
        </MineList>
        {/* 客服 */}
        <Kefu>
            客服热线400-123-8888 (9:00-18:00)
            <br/>
            拨打前请记录您的UID 1100246657    
        </Kefu>
      </>
    )
  }

  async componentDidMount() {
    
  }
}

export default Mine