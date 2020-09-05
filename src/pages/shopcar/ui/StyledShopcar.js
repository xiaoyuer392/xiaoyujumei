import styled from 'styled-components'

const Nogoods = styled.div `
    height: 100%;
    -ms-flex: 1;
    flex: 1;
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    .oops{
        width: 5.375rem;
        height: 5.125rem;
        background: url(https://f6.jmstatic.com/static_cart_mobile/images/no-card-oops.png) no-repeat;
        background-size: 100% 100%;    
    }
    .empty-cart{
        font-size: .875rem;
        line-height: .9375rem;
        color: #333;
        margin-top: 1rem;
        padding: 0 .75rem;
        text-align: center;
    }
    .go-stroll{
        width: 7.8125rem;
        height: 2.25rem;
        border-radius: 1.25rem;
        color: #fff;
        background: #fe4070;
        line-height: 2.25rem;
        text-align: center;
        margin-top: 1.4375rem;
        font-size: .8125rem;
    }
`

const Groups = styled.div `
margin-top: .5rem;
margin: 0;
padding: 0;
.group{
    margin-bottom: .5rem;
    background: #fff;
    .group-title{
        margin-left: .5rem;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        font-size: .75rem;
        line-height: 1;
    }
    .group-content{
        color: #333;
        font-size: .75rem;
        line-height: 1;
        .img-title{
            display: -ms-flexbox;
            display: flex;
            margin-left: .5rem;
            padding-bottom: .625rem;
            flex: 1;
            .img-wrap{
                width: 30%;
                height: 5.25rem;
                position: relative;
                margin-top: .625rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text-wrap{
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                margin-left: .625rem;
                margin-top: .5rem;
                -ms-flex: 1;
                flex: 1;
                color: #333;
                font-size: .75rem;
                line-height: 1;
                width: 70%;
                .title{
                    display: -webkit-box;
                    width: 14.5625rem;
                    max-height: 2.5rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #333;
                    line-height: 1.25rem;
                    text-align: left;
                    -webkit-line-clamp: 2;
                    word-break: break-all;
                }
                .sub-title-1{
                    margin-top: .1875rem;
                    line-height: .75rem;
                    height: .75rem;
                    color: #999;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    span{
                        display: block;
                        max-width: 12.1875rem;
                        font-size: .6875rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .price-edit{
                    margin-top: .3125rem;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    -ms-flex-align: center;
                    align-items: center;
                    height: 1.375rem;
                    margin-top: .1875rem;
                    line-height: .75rem;
                    height: .75rem;
                    .price{
                        width: 12.5625rem;
                        display: block;
                        font-size: .9375rem;
                        color: #fe4070;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .edit{
                        display: block;
                    }
                }
            }
            .text-wrap2{
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                margin-left: .625rem;
                margin-top: .5rem;
                -ms-flex: 1;
                flex: 1;
                color: #333;
                font-size: .75rem;
                line-height: 1;
                width: 70%;
                .title{
                    display: -webkit-box;
                    width: 14.5625rem;
                    max-height: 2.5rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #333;
                    line-height: 1.25rem;
                    text-align: left;
                    -webkit-line-clamp: 2;
                    word-break: break-all;
                }
                .number-editor{
                    margin-top: .5rem;
                    height: 1.4375rem;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-align: center;
                    align-items: center;
                    span{
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -ms-flex-align: center;
                        align-items: center;
                        width: 2.5rem;
                        height: 1.375rem;
                        color: #333;
                    }
                    .decrease{
                        display: block;
                        width: 1.375rem;
                        height: 1.40625rem;
                        text-align: center;
                        font-size: 1.40625rem;
                        line-height: 1.1rem;
                        border-radius: 50%;
                        border:1px solid #000
                    }
                    .increase{
                        display: block;
                        width: 1.375rem;
                        height: 1.40625rem;
                        text-align: center;
                        font-size: 1.40625rem;
                        line-height: 1.1rem;
                        border-radius: 50%;
                        border:1px solid #000
                    }
                }
                .price-edit{
                    margin-top: .3125rem;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    -ms-flex-align: center;
                    align-items: center;
                    height: 1.375rem;
                    .price{
                        display: block;
                        font-size: .9375rem;
                        color: #fe4070;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 10.21875rem;
                    }
                    .action{
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        .{
                            height: .78125rem;
                            background-size: 100% 100%;
                            margin-left: .375rem;
                            margin-right: .375rem;
                            display: inline-block;
                            width:1px;
                        }
                    }
                }
            }
        }
    }
    .group-tail{
        height: 2.25rem;
        display: -ms-flexbox;
        display: flex;
        padding-left: .5rem;
        background: #fff;
        -ms-flex-align: center;
        align-items: center;
        border-top: 1px #eee solid;
        color: #fe4070;
        .icon{
            width: 1rem;
            height: 1rem;
            display: -ms-flexbox;
            display: flex;
            border-radius: 100%;
            border: 1px solid #333;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: .625rem;
            border: 1px solid #fe4070;
        }
        span{
            margin-left: .5rem;
            color: #fe4070;
        }
    }
}
`

const Submitbottom = styled.div `
bottom: 50px;
position: fixed;
left: 0;
right: 0;
box-shadow: 0 0 0.15625rem #eee;
height: 3.0625rem;
display: -ms-flexbox;
display: flex;
background: #fff;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
padding: 0 .75rem 0 .5rem;
z-index: 1;
.sub-info{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    .heng{
        display: flex;
        .all-check-text{
            display: inline-block;
            font-size: .875rem;
            color: #333;
            margin-left: .75rem;
        }
        .summary{
            margin-left: .6875rem;
            color: #999;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            div{
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                .red{
                    color: #fe4070;
                    font-size: 1rem;
                    margin-left: .3125rem;
                }
            }
        }
    }
}
.submit-btn{
    background: #fe4070;
    width: 7.8125rem;
    height: 2.25rem;
    font-size: .875rem;
    color: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 1.25rem;
}
`

export {
    Nogoods,
    Groups,
    Submitbottom
}