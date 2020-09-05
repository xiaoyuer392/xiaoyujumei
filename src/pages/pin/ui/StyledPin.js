import styled from 'styled-components'

const Headnav = styled.div `
    position: fixed;
    left: 0px;
    top: 0px;
    height: 44px;
    width: 100%;
    z-index: 2;
    overflow: hidden;
    .nav-outer{
        overflow-x: scroll;
        height: 44px;
        overflow-y: hidden;
        .nav-inner{
            width: 656px;
            height: 44px;
            width: auto;
            padding: 0 1.125rem;
            white-space: nowrap;
            border-bottom: .0625rem solid #eee;
            background: #fff;
            z-index: 10;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-justify-content: space-around;
            justify-content: space-around;
            a{
                font-size: 14px;
                height: 44px;
                line-height: 44px;
                padding: 0 .125rem;
                color: #666;
                display: inline-block;
                text-align: center;
                position: relative;
                span{
                    display: none;
                }
            }
            .active{
                color: #fe4070;
                span{
                    display: block;
                    background: #fe4070;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: .125rem;
                    border-top-left-radius: .375rem;
                    border-top-right-radius: .375rem;
                }
            }
        }
    }
`

const Tablist = styled.div `
    padding-top: 44px;
    .module-container{
        ul{
            display: block;
            list-style-type: disc;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            li{
                margin-bottom: 8px;
                background: #fff;
                list-style-type: none;
                .goods{
                    width: 100%;
                    display: block;
                    overflow: hidden;
                    position: relative;
                    .people-num{
                        font-size: 11px;
                        padding: 4px 7px;
                        position: absolute;
                        left: 0;
                        top: 5.875rem;
                        z-index: 1;
                        border: .0625rem solid #eee;
                        border-left: 0;
                        border-top-right-radius: 1.5625rem;
                        border-bottom-right-radius: 1.5625rem;
                        color: #666;
                        background: rgba(251,251,251,.8);
                    }
                    .goods-img{
                        margin: 0;
                        box-sizing: border-box;
                        padding: 0;
                        overflow: hidden;
                        text-align: center;
                        img{
                            margin: 0 auto;
                            height: 8rem;
                        }
                    }
                    .goods-middle{
                        font-size: 14px;
                        max-height: 34px;
                        line-height: 18px;
                        padding: 0 12px;
                        margin-top: 10px;
                        color: #424242;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        .goods-nim{
                            margin-left: 2px;
                            color: #fe4070;
                            display: inline-block;
                        }
                    }
                    .goods-foot{
                        padding: 12px 12px 12px 12px;
                        overflow: hidden;
                        .price-left{
                            float: left;
                            font-family: Arial;
                            .ct-price{
                                font-size: 18px;
                                color: #fe4070;
                            }
                            .sc-price{
                                font-size: 12px;
                                padding-left: 4px;
                                color: #999;
                                text-decoration: line-through;
                            }
                            .jm-price{
                                font-size: 11px;
                                color: #999;
                                display: block;
                            }
                        }
                        .time-right{
                            float: right;
                            border: .0625rem solid #fe4070;
                            margin-top: .25rem;
                            border-radius: 25px;
                            background: #fe4070;
                            .sy-time{
                                display: none;
                                padding-top: 6px;
                                padding-bottom: 6px;
                                min-width: 90px;
                                float: left;
                                font-size: 13px;
                                padding-right: .375rem;
                                padding-left: .6875rem;
                                color: #f85386;
                                background: #fff;
                                border-top-left-radius: 1.5625rem;
                                border-bottom-left-radius: 1.5625rem;
                            }
                            .goods-btn{
                                height: 26px;
                                border-radius: 25px;
                                line-height: 26px;
                                font-size: 14px;
                                width: 4.6875rem;
                                background: #fe4070;
                                float: right;
                                color: #fff;
                                text-align: center;
                                border-right: .625rem solid #fe4070;
                                border-left: .625rem solid #fe4070;
                            }
                        }
                    }
                }
            }
        }
    }
`
export {
    Headnav,
    Tablist
}