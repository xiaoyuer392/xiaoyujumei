import styled from 'styled-components'
const Bg = styled.div `
    background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);
`
const Head = styled.header `
    zoom: 1.17188;
    display: block;
    background: transparent;
    height: 38px;
    width: 100%;
    font-size: 14px;
    color: #333;
    line-height: 38px;
    text-align: center;
    position: relative;
    .head-left{
        position: absolute!important;
        left: 0;
        top: 0;
        width: 38px;
        height: 38px;
        box-sizing: border-box;
        line-height: 38px;
        i{
            background-size: 24px 24px;
            text-decoration: none;
            color: #fff;
            font-size: 22px;
            line-height: 38px;
        }
    }
    .head-title{
        position: static;
        background: transparent;
        font-size: 18px;
        color: #fff;
        float: left;
        width: 320px;
        text-align: center;
        line-height: 38px;
    }
    .head-right{
        position: absolute;
        right: 0;
        top: 0;
        width: 38px;
        height: 38px;
        background-size: 24px 24px;
        line-height: 38px;
        i{
            text-decoration: none;
            color: #fff;
            font-size: 24px;
            line-height: 38px;
        }
    }
`

const User = styled.div `
    position: relative;
    width: 100%;
    height: 158px;
    border-bottom: 52px solid #fff;
    .photo{
        width: 64px;
        height: 64px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 32px;
        top: 72px;
        z-index: 10;
    }
    .ur-bg{
        position: absolute;
        width: 100%;
        height: 106px;
        background: transparent;
        .user-info{
            font-size: 12px;
            color: #fff;
            position: absolute;
            left: 112px;
            bottom: 4px;
            .name{
                display: block;
                font-size: 13px;
                letter-spacing: .65px;
                font-family: sans-serif;
                line-height: 20px;
            }
            .grade{
                background: rgba(255,255,255,.2);
                border-radius: 100px;
                letter-spacing: .65px;
                line-height: 18px;
                padding: 3px 5px;
            }
        }
        .icons{
            width: 230px;
            height: 50px;
            position: absolute;
            bottom: -50px;
            right: 0;
            font-size: 12px;
            text-align: center;
            .wishlist{
                display: block;
                width: 76px;
                height: 50px;
                float: left;
                color: #666;
                text-decoration: none;
                div{
                    width: 25px;
                    height: 25px;
                    margin: 3px auto;
                    line-height: 25px;
                    font-size: 25px;
                }
            }
            .onsale{
                display: block;
                width: 76px;
                height: 50px;
                float: left;
                color: #666;
                text-decoration: none;
                div{
                    width: 25px;
                    height: 25px;
                    margin: 3px auto;
                    line-height: 25px;
                    font-size: 23px;
                }
            }
            .fav{
                display: block;
                width: 76px;
                height: 50px;
                float: left;
                color: #666;
                text-decoration: none;
                div{
                    width: 25px;
                    height: 25px;
                    margin: 3px auto;
                    line-height: 25px;
                    font-size: 25px;
                }
            }
        }
    }
`

const Order = styled.div `
background: #fff;
margin-top: 12px;
.order-title{
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    >i{
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        color: #666;
    }
    .order-title-nav{
        float: right;
        text-decoration: none;
        color: #999;
        font-size: 12px;
        margin-right: 5px;
        >span{
            float: left;
            text-decoration: none;
            color: #999;
            font-size: 12px;
            margin-right: 5px;
        }
        .arrow-right{
            background-image: url(https://f4.jmstatic.com/static_account/dist/v1.0.174430/images/mobile_usercenter/advance_bg.png);
            background-size: 20px;
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            float: right;
            margin-top: 7px;
        }
    }
}
.order-content{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    .order-item{
        flex: 1;
        width: 80px !important;
        text-align: center;
        display: inline-block;
        margin: 0;
        padding: 10px 0;
        text-decoration: none;
        font-size: 12px;
        color: #666;
        >i{
            display: block;
            width: 30px;
            height: 30px;
            margin: 5px auto;
            font-size: 30px;
            line-height: 30px;
        }
        >span{
            width: 76px;
            text-align: center;
            display: inline-block;
            margin: 0;
            padding: 10px 0;
            text-decoration: none;
            font-size: 12px;
            color: #666;
        }
    }
}
`

const Fund = styled.div `
background: #fff;
margin-top: 12px;
.fund-title{
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    i{
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        margin-right: 10px;
    }
}
.fund-content{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    .fund-item{
        flex: 1;
        text-align: center;
        display: inline-block;
        margin: 0;
        padding: 10px 0;
        text-decoration: none;
        font-size: 12px;
        color: #666;
        width: 80px;
        .value{
            font-size: 16px;
            font-weight: 700;
            margin: 5px 0;
            color: #000;
        }
        span{
            width: 76px;
            text-align: center;
            display: inline-block;
            margin: 0;
            padding: 10px 0;
            text-decoration: none;
            font-size: 12px;
            color: #666;
        }
    }
}
`
const MineList = styled.div `
background: #fff;
margin-top: 12px;
.list-item{
    display: block;
    text-decoration: none;
    color: #333;
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    >.rmaservice{
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        background-size: 20px;
        font-size: 20px;
        line-height: 20px;
        margin-right: 10px;
    }
    span{
        text-decoration: none;
        color: #333;
        padding-left: 8px;
        border-bottom: 1px solid #eaeaea;
        height: 34px;
        line-height: 34px;
        font-size: 13px;
    }
    >.arrow-right{
        float: right;
        margin-top: 6px;
        margin-right: 6px;
        background-image: url(https://f4.jmstatic.com/static_account/dist/v1.0.174430/images/mobile_usercenter/advance_bg.png);
        background-size: 20px;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
    }
}
`

const Kefu=styled.div `
color: #999;
font-size: 11px;
margin: 15px;
line-height: 15px;
padding-bottom: 3.0625rem;
`
export {
    Head,
    User,
    Bg,
    Order,
    Fund,
    MineList,
    Kefu
}