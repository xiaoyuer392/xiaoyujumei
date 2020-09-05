import styled from 'styled-components'

const Search = styled.div `
  z-index: 3;
  color: inherit;
  margin: 0;
  padding: 0;
  font-size: 14px;
    header{
      z-index: 3;
      background: #fff;
      overflow: hidden;
      position: relative;
      display: block;
      .index-search{
        margin: .4375rem 2.88rem .347rem 1.07rem;
        color: #999;
        background: #F5F5F5;
        border-radius: 1.25rem;
        height: 1.653rem;
        line-height: 1.653rem;
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
        box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
        font-size: 14px;
        img{
          width: .875rem;
          display: inline-block;
          position: relative;
          top: .1rem;
          left: -.1875rem;
        }
        span{
          margin: .4375rem 2.88rem .347rem 1.07rem;
          color: #999;
          background: #F5F5F5;
          border-radius: 1.25rem;
          height: 1.653rem;
          line-height: 1.653rem;
          position: relative;
          display: block;
          -webkit-box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
          box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
          font-size: 14px;
          text-align: center;
        }
      }
      .search_action{
        width: 1.28rem;
        height: .987rem;
        position: absolute;
        bottom: .68rem;
        right: .64rem;
        z-index: 12;
        img{
          width: 100%;
        }
      }
    }
`

const HeaderNav = styled.div `
  z-index: 3;
  height: 2.347rem;
  position: relative;
  z-index: 20;
  background: #fff;
  .navouter{
    z-index: 3;
    overflow-x:scroll;
    .naviner{
      width: 415px;
      .navtitle{
        float: left;
        position: relative;
        width: auto;
        padding: 0 .9375rem;
        text-align: center;
        a{
          color: #666;
          text-decoration: none;
          position: relative;
          -webkit-tap-highlight-color: transparent;
          padding: 0 .125rem;
          height: 2.347rem;
          line-height: 2.347rem;
          display: inline-block;
          width: auto;
          span{
            color: #666;
            text-decoration: none;
            position: relative;
            -webkit-tap-highlight-color: transparent;
          }
          .navline{
            font-size: 14px;
            vertical-align: middle;
          }
        }
      }
      #navselect{
        a{
          color: #fe4070;
          border-bottom: none;
        }
        span{
          color: #fe4070;
          border-bottom: none;
        }
        .navline{
          background: #fe4070;
          height: .125rem;
          border-radius: .125rem .125rem 0 0;
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          left: -.0625rem;
        }
      }
    }
  }
`

const Shoplist = styled.div `
z-index: 11;
  .title-nav{
    z-index: 11;
    height: 2.34667rem;
    line-height: 2.34667rem;
    color: #666;
    background: #fff;
    .title-item{
      width: 9.86667rem;
      font-size: 14px;
      display: inline-block;
      text-align: center;
    }
    .tab-click{
      color: #fe4070;
    }
  }
  .list{
    z-index: 11;
    .product-item{
      z-index: 11;
      margin-bottom: 8px;
      display: block;
      color: #333;
      .deal-item{
        position: relative;
        overflow: hidden;
        background: #fff;
        height: 6.93333rem;
        .product-img{
          position: relative;
          height: 100%;
          img{
            height: 100%;
          }
        }
        .product-detail{
          position: absolute;
          top: 0;
          left: 0;
          margin-right: 0.64rem;
          margin-left: 8.53333rem;
          height: 100%;
          min-width: 10.827rem;
          .product-title{
            margin-top: 0.64rem;
            color: #333;
            font-size: 13px;
            line-height: 17px;
            max-height: 51px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            margin-bottom: 5px;
          }
          .product-wrap{
            color: #fe4070;
            font-size: 12px;
            line-height: 12px;
          }
          .price-wrap{
            position: absolute;
            bottom: 0.64rem;
            .price-list{
              .jumei-price{
                color: #fe4070;
                font-size: 12px;
                span{
                  font-size: 20px;
                  margin: 0 2px;
                }
              }
              .del-price{
                color: #999;
                font-size: 12px;
                text-decoration: line-through;
              }
            }
            .buynum{
              color: #999;
              font-size: 11px;
            }
          }
        }
      }
    }
  }
`
export {
  Search,
  HeaderNav,
  Shoplist
}