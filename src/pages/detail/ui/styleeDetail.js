import styled from 'styled-components'

const Head = styled.header `
width: 100%;
background: #FFFFFF;
    .touch-header{
        text-align: center;
        height: 2.347rem;
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%;
        z-index: 1;
        border-bottom: 1px solid #eee;
        .touch-header-back{
            text-decoration: none;
            position: absolute;
            left: 0rem;
            top: 0;
            width: 2rem;
            height: 2.347rem;
            font-size: 1.5rem;
            text-align: center;
            background-size: 0.4rem 0.8rem;
            color: #333;
        }
        .touch-header-title{
            display: block;
            text-align: center;
            margin: 0px 2.1875rem;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            color: #333;
            height: 2.347rem;
            line-height: 2.347rem;
        }
        .touch-header-home{
            text-decoration: none;
            width: 1.067rem;
            height: 1.067rem;
            position: absolute;
            text-align: center;
            font-size: 1.4rem;
            background-size: contain;
            line-height: 1rem;
            top: 0.64rem;
            right: 0.693rem;
            color: #333;
        }
    }
`

const Price = styled.div `
width: 100%;
background: #fff;
-webkit-box-sizing: border-box;
box-sizing: border-box;
padding-left: 0.64rem;
padding-right: 0.64rem;
padding-top: 0.8rem;
position: relative;
    .normalShow{
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: inherit;
        .price-info{
            overflow: hidden;
            width: 100%;
            color: #F33873;
            height: 1.49333rem;
            margin: 0;
            padding: 0;
            font-size: 14px;
            .cur-price{
                float: left;
                font-size: 28px;
                line-height: 1.49333rem;
            }
            .cost-price{
                float: left;
                margin-left: 0.21333rem;
                color: #666666;
                font-size: 13px;
                line-height: 0.74667rem;
                margin-top: 0.53333rem;
                text-decoration: line-through;
            }
            strong{
                float: right;
                text-align: right;
                font-weight: 400;
                color: #666;
                font-size: 13px;
                margin-top: 0.375rem;
            }
        }
        .downWrap{
            overflow: hidden;
            margin: 0;
            padding: 0;
            font-size: 14px;
            .count-down{
                margin-top: 0.66667rem;
                overflow: hidden;
                color: #666666;
                font-size: 13px;
                span{
                    float: left;
                    width: 50%;
                    text-align: left;
                }
            }
        }
    }
`

const Desc = styled.div `
padding-top: 0.53333rem;
padding-bottom: 0.53333rem;
padding-left: 0.64rem;
padding-right: 0.64rem;
line-height: 1.06667rem;
width: 100%;
-webkit-box-sizing: border-box;
box-sizing: border-box;
background: #fff;
    .normal-desc{
        line-height: 1.25rem;
        color: inherit;
    }
`
const Additional = styled.div `
margin-bottom: 8px;
background-color: #fff;
    .pro-wrap{
        margin-left: 0.64rem;
        margin-right: 0.64rem;
        border-bottom: 1px solid #eee;
        margin: 0;
        padding: 0;
        font-size: 14px;
        .pro-content{
            overflow: hidden;
            .pro-type{
                width: 22%;
                color: #999;
                display: inline-block;
                font-size: 13px;
                line-height: 13px;
                vertical-align: top;
                float: left;
                padding: 0.64rem 0;
                margin-left: .64rem;
            }
            .pro-item{
                border-bottom: none;
                padding-bottom: 0.64rem;
                position: relative;
                overflow: hidden;
                line-height: 0;
                .item-list{
                    padding-top: 0.64rem;
                    position: relative;
                    overflow: hidden;
                    color: #333;
                    font-size: 13px;
                    line-height: 13px;
                    .item-list-icon{
                        border: 1px solid rgba(254, 64, 112, 0.6);
                        font-size: 10px;
                        color: #fe4070;
                        margin-right: 0.26667rem;
                        float: left;
                        line-height: 12px;
                        padding: 1px 2px 0;
                        display: inline-block;
                    }
                    .item-list-text{
                        height: 13px;
                        overflow: hidden;
                        white-space: nowrap;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        white-space:nowrap;
                        max-width: 78.6%;
                        color: #333;
                        font-size: 13px;
                        line-height: 13px;
                        display: inline-block;
                    }
                }
            }
        }
    }
    .select-site{
        overflow: hidden;
        background: #fff;
        color: #999;
        font-size: 13px;
        position: relative;
        margin-left: 0.61333rem;
        margin-right: 0.61333rem;
        padding-top: 0.61333rem;
        padding-bottom: 0.61333rem;
        border-bottom: 1px solid #eee;
        .site-label{
            font-weight: normal;
            float: left;
            line-height: 15px;
            width: 22%;
        }
        .site-choice{
            float: left;
            cursor: pointer;
            color: #333;
            font-size: 13px;
            line-height: 15px;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 77%;
            height: 15px;
            overflow: hidden;
        }
    }
    .postage-link{
        text-decoration: none;
        margin-left: 0.64rem;
        margin-right: 0.64rem;
        border-bottom: 1px solid #eee;
        color: #333;
        .postage-wrap{
            overflow: hidden;
            line-height: 0;
            margin: 0;
            padding: 0;
            font-size: 14px;
            .postage-type{
                padding: 0.64rem 0;
                margin-left: 0.64rem;
                width: 22%;
                color: #999;
                display: inline-block;
                font-size: 13px;
                line-height: 13px;
                vertical-align: top;
                float: left;
            }
            .postage-content{
                color: #333;
                font-size: 13px;
                line-height: 13px;
                display: inline-block;
                width: 70%;
                overflow: hidden;
                position: relative;
                padding-top: 0.64rem;
                padding-bottom: 0.50667rem;
                span{
                    overflow: hidden;
                    width: 80%;
                    display: 95%;
                    color: #333;
                    font-size: 13px;
                    line-height: 13px;
                }
            }
        }
    }
    .introduction-wrap{
        border-bottom: none;
        margin-left: 0.64rem;
        margin-right: 0.64rem;
        margin: 0;
        padding: 0;
        font-size: 14px;
        .introductions-content{
            overflow: hidden;
            .introduction-type{
                margin-left: 0.64rem;
                width: 22%;
                color: #999;
                display: inline-block;
                font-size: 13px;
                line-height: 13px;
                vertical-align: top;
                float: left;
                padding: 0.64rem 0;
            }
            .introduction-item{
                padding-top: 0;
                padding-bottom: 0.82667rem;
                padding-right: 0.64rem;
                background-size: 0.64rem 0.32rem;
                background-position: right 0.8rem;
                margin-right: 0.32rem;
                overflow: hidden;
                line-height: 0;
                .introduction-list-title{
                    padding-right: 0.53333rem;
                    padding-top: 0.64rem;
                    display: inline-block;
                    color: #333;
                    font-size: 13px;
                    line-height: 13px;
                    .instruction-title-text{
                        color: #333;
                        font-size: 13px;
                        line-height: 13px;
                        width: 50%
                    }
                }
            }
        }
    }
`

const Shopwrap = styled.div `
width: 100%;
padding: 0.65rem 0.625rem;
-webkit-box-sizing: border-box;
box-sizing: border-box;
background: #FFF;
margin: 10px auto;
display: block;
color: #333;
.shopcontent{
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 14px;
    .shopleft{
        float: left;
        width: 42px;
        height: 42px;
        border: 1px solid #eee;
        img{
            display: block;
            width: 100%;
        }
    }
    .shopright{
        float: left;
        margin-left: 10px;
        padding-top: 4px;
        .shopinfo{
            line-height: 16px;
            font-size: 14px;
            color: #333;
            width: 100%;
            overflow: hidden;
            .shopname{
                display: inline-block;
                max-width: 9rem;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                float: left;
                height: 16px;
                line-height: 16px;
            }
        }
        .shoplabel{
            font-size: 11px;
            color: #999;
            margin-top: 6px;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 14rem;
        }
    }
}
.btnshop{
    color: #666;
    font-size: 12px;
    position: relative;
    margin: 0 auto;
    .shopbtn{
        width: 148px;
        height: 38px;
        line-height: 38px;
        border-radius: 24px;
        margin: 0 auto;
        display: block;
        text-align: center;
        margin-top: 12px;
        background-size: 6px 12px;
        color: #666;
        position: relative;
        border: 1px solid #ddd;
        font-size: 14px;
    }
}
`

const Advence = styled.div `
overflow: hidden;
background: #fff;
.bfc{
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    .activt-img{
        overflow: hidden;
        float: right;
        position: relative;
        background: #fff;
        margin-top: -1.6rem;
        img{
            width: 9.6rem;
            height: 5.33333rem;
            overflow: hidden;
        }
    }
    .fs14{
        margin-top: 1.6rem;
        display: block;
        line-height: 1.06667rem;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        color: #333;
        font-size: 14px;
        margin-left:1.6rem;
    }
    .fs12{
        display: block;
        margin-left:1.6rem;
        line-height: 1.06667rem;
        color: #999;
        font-size: 12px;
        cursor: pointer;
    }
}
`

const Imgdetail = styled.div `
width: 100%;
img{
    width: 100%;
}
`
const DetailProp = styled.div `
width: 100%;
padding: 0.64rem;
line-height: 0.90667rem;
padding-bottom: 1.17333rem;
margin-bottom: 8px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
li{
    width: 100%;
    list-style: none;
    margin-top: 0.53333rem;
    .props-name{
        float: left;
        color: #999;
        display: block;
        width: 4.90667rem;
    }
    .props-content{
        color: #333;
        display: inline-block;
        width: 13.81333rem;
    }
}
`

const Rview = styled.div `
padding-bottom: 8px;
background-color: #f5f5f5;
.high-persent{
    color: #333;
    background: #fff;
    padding: 20px 0 8px 12px;
    font-size: 12px;
    soan{
        font-size: 20px;
        padding-right: 2px;
    }
    b{
        font-size: 20px;
        padding-right: 2px;
    }
}
.tippox{
    padding: 0 12px;
    background: #FFF;
    padding-bottom: 1rem;
    span{
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 12px;
        background: #f5f5f5;
        color: #666;
        font-size: 12px;
        margin-top: 12px;
        margin-right: 12px;
        border-radius: 25px;
    }
    #all{
        background: rgba(254, 64, 112, 0.1);
    }
}
.comment{
    min-height: 574.188px;
    background-color: #fff;
    margin: 0;
    padding: 0;
    font-size: 14px;
    .coment-item{
        margin-right: 0.96rem;
        margin-left: 0.96rem;
        padding-top: 1.06667rem;
        padding-bottom: 0.64rem;
        overflow: hidden;
        font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
        border-top: solid 1px #eee;
        position: relative;
        list-style: none;
        .conment-msg{
            line-height: 14px;
            position: relative;
            .block{
                display: block;
                color: #333;
                .mbottom2{
                    margin-bottom: 12px;
                    .top-img{
                        float: left;
                        img{
                            width: 31px;
                            height: 31px;
                            border-radius: 50%;
                        }
                    }
                    .top-info{
                        margin-left: 10px;
                        float: left;
                        .info-name{
                            margin-bottom: 4px;
                            .f1{
                                float: left;
                                img{
                                    width: 11px;
                                    height: 11px;
                                    margin-left: 8px;
                                }
                            }
                        }
                        .fs10{
                            float: right;
                            color: #999;
                            font-size: 10px;
                        }
                    }
                }
                .mbottom{
                    line-height: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    margin-bottom: 6px;
                    color: #666;
                    font-size: 13px;
                    width: 100%;
                    margin-top: 0.6rem;
                }
                .time-box-hidden{
                    margin-bottom: 6px;
                    overflow: hidden;
                    .f10{
                        padding-right: 4px;
                        color: #999;
                        font-size: 10px;
                    }
                    .f11{
                        color: #999;
                        font-size: 11px;
                    }
                }
            }
            .coment-img-list{
                overflow: hidden;
                img{
                    width: 10.4rem;
                    height: 10.4rem;
                    display: block;
                    margin-bottom: 6px;
                    width: 32%;
                    height: 5.6rem;
                    margin-right: 1.3%;
                    float: left;
                    border: 0;
                }
            }
            .conment-praise{
                margin-top: 4px;
                line-height: 20px;
                height: 20px;
                color: #999;
                font-size: 12px;
                .praise-num{
                    padding-left: 20px;
                    margin-left: 0.8rem;
                    background-size: 12px 11px;
                    float: right;
                }
                .conment-num{
                    background-size: 12px 11px;
                    color: #999;
                    float: right;
                }
            }
        }
    }
}
`

const Buynav = styled.div `
position: fixed;
z-index: 10;
bottom: -1px;
width: 20rem;
height: 2.61333rem;
border-top: solid 1px #eee;
overflow: hidden;
background-color: #fff;
text-align: center;
font-size: 10px;
.icon-block{
    display:flex;
    width: 6.34667rem;
    height: 100%;
    text-align: center;
    float: left;
    .store-link{
        display: flex;
        flxe: 1;
        text-decoration: none;
        background-size: 19.5px 18px;
        border-right: 1px solid #eee;
        width: 2.50667rem;
        color: #979797;
        line-height: 20px;
        height: 47px;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        line-height: 10px;
        font-size: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            width: 20px;
            height: 20px;
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 3px;
        }
    }
    .shopcart{
        display: flex;
        flex: 1;
        text-decoration: none;
        background-size: 18px 20px;
        position: relative;
        width: 2.50667rem;
        color: #979797;
        line-height: 20px;
        height: 47px;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        line-height: 10px;
        font-size: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            width: 20px;
            height: 20px;
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 3px;
        }
    }
}
.button-block{
    width: 13.65333rem;
    height: 100%;
    text-align: center;
    float: left;
    margin: 0;
    padding: 0;
    font-size: 14px;
    .add-shopping-cart{
        display: inline-block;
        width: 50%;
        background: #fff1f6;
        background: -webkit-linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
        background: -o-linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
        background: -webkit-linear-gradient(240deg, #ffcfdf 0%, #fff1f6 98%);
        background: -o-linear-gradient(240deg, #ffcfdf 0%, #fff1f6 98%);
        background: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
        color: #fe4070;
        line-height: 2.61333rem;
        float: left;
        font-size: 14px;
        text-decoration: none;
    }
    .add-shopping-cart-direct{
        display: inline-block;
        width: 50%;
        background: #fe4070;
        background: -webkit-linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
        background: -o-linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
        background: -webkit-linear-gradient(308deg, #ff5593 0%, #fe4070 100%);
        background: -o-linear-gradient(308deg, #ff5593 0%, #fe4070 100%);
        background: linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
        color: #fff;
        line-height: 2.61333rem;
        float: left;
        font-size: 14px;
        text-decoration: none;
    }
}
`
export {
    Head,
    Price,
    Desc,
    Additional,
    Shopwrap,
    Advence,
    Imgdetail,
    DetailProp,
    Rview,
    Buynav
}