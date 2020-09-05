import React, { Component } from 'react'
import {Headnav,Tablist} from '../ui/StyledPin'

import connect from './connect'

@connect
class Pin extends Component {
  state = {
    list: [],
    activelist:[
        {
            tab:'coutuan_home',
            name:'推荐'
        },
        {
            tab:'coutuan_makeup',
            name:'美妆'
        },
        {
            tab:'coutuan_baby',
            name:'母婴健康'
        },
        {
            tab:'coutuan_pre',
            name:'下期预告'
        }
    ],
    active:'推荐'
  }
  
  handleTab(index){
    this.setState({
      active:this.state.activelist[index].name
    })
    this.props.loadpinData({tab:this.state.activelist[index].tab})
  }
  render() {
    //   console.log(this.props)
    return (
      <>
        {/* 头部导航 */}
        <Headnav>
            <div className="nav-outer">
                <div className="nav-inner" style={{'width': '656px'}}>
                    {
                        this.state.activelist.map((val,index)=>(
                            <a className={this.state.active===val.name?'active':''} href="#" key={val.name} onClick={()=>this.handleTab(index)}>
                                {val.name}
                                <span></span>
                            </a>
                        ))
                    }
                    
                </div>
            </div>
        </Headnav>

        {/* 商品列表 */}
        <Tablist {...this.props}>
            <div className="module-container">
                <ul>
                    {
                        this.props.pinlist.map(value =>{
                            return (
                                <li key={value.item_id}>
                                    <a href="#" className="goods">
                                        <div className="people-num">{value.buyer_number_text}</div>
                                        <div className="goods-img">
                                            <img src={value.image_url_set.single[320]} alt=""/>
                                        </div>
                                        <div className="goods-middle">
                                            <span className="goods-nim">{value.group_name_tag}</span>
                                            {value.short_name}
                                        </div>
                                        <div className="goods-foot">
                                            <div className="price-left">
                                                <span className="ct-price">{value.jumei_price}</span>
                                                <span className="sc-price"></span>
                                                <span className="jm-price">{value.single_price}</span>
                                            </div>
                                            <div className="time-right">
                                                <span className="sy-time">仅剩66:30:31</span>
                                                <span className="goods-btn">去开团</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Tablist>
      </>
    )
  }

  async componentDidMount() {
    // let result = await get({
    //     url: '/tuan/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20'
    //   })
    //   this.setState({
    //     list: result.data
    //   })
    // console.log(this.state.list)
    this.props.loadpinData({tab:this.state.activelist[0].tab})
  }
}

export default Pin