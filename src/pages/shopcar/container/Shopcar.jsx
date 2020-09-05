import React, { Component } from 'react'
import {Nogoods,Groups,Submitbottom} from '../ui/StyledShopcar'
import { Checkbox } from 'antd-mobile';
let storage = window.localStorage
const CheckboxItem = Checkbox.CheckboxItem;
class Shopcar extends Component {
  state = {
    shopcarlist:[],
    isshow:true
  }

  handleIsshow=()=>{
    if(this.state.isshow){
      this.setState({
        isshow:false
      })
    }else{
      this.setState({
        isshow:true
      })
    }
  }
  onChange = (index) => {
    const newList =[...this.state.shopcarlist]
    newList[index].iscost = !this.state.shopcarlist[index].iscost
    this.setState({
      shopcarlist:newList
    })
  }
  changeBookCountreduce(index){
    const newList =[...this.state.shopcarlist]
    if(newList[index].num>1){
      newList[index].num -=1
      this.setState({
        shopcarlist:newList
      })
    }
  }
  changeBookCountadd(index){
    const newList = [...this.state.shopcarlist]
    
    newList[index].num +=1
    this.setState({
      shopcarlist:newList
    })
  }
  removeItem(index){
    this.setState({
      shopcarlist:this.state.shopcarlist.filter((item,indey)=>index !=indey)
    })
   }
   getTotalprice(){
    let totalPrice = 0
    this.state.shopcarlist.forEach((item)=>{
      totalPrice += item.price*item.num
    })
    return totalPrice
  }
  render() {
    const data = 'xiao'
    return (
      <>{
        this.state.shopcarlist&&JSON.stringify( this.state.shopcarlist) !== '[]'?(
          <div>
            <Groups>
              {
                this.state.shopcarlist.map((val,index) => (
                  <div className="group" key={val.pro_id}>
                    <div className="group-head">
                      <CheckboxItem key={data} onChange={() => this.onChange(index)} checked={val.iscost}>
                    <div className="group-title"> {val.company}发货 </div>
                      </CheckboxItem>
                    </div>
                    <div className="group-content">
                      <CheckboxItem key={data} onChange={() => this.onChange(index)} checked={val.iscost}>
                        <div className="img-title">
                          <div className="img-wrap">
                            <img src={val.imgurl} alt=""/>
                          </div>
                          { this.state.isshow?(<div className="text-wrap">
                              <span className="title">{val.name}</span>
                            <div className="sub-title-1">
                              <span>{val.sizetype}</span>
                              <span>X{val.num}</span>
                            </div>
                            <div className="price-edit">
                              <span className="price">¥{val.price*val.num}</span>
                              <span className="edit" onClick={this.handleIsshow}>编辑</span>
                            </div>
                          </div>):(
                            <div className="text-wrap2">
                            <span className="title">{val.name}</span>
                            <div className="number-editor">
                              <span className="decrease" onClick={()=>this.changeBookCountreduce(index)}>-</span>
                              <span>{val.num}</span>
                              <span className="increase" onClick={()=>this.changeBookCountadd(index)}>+</span>
                            </div>
                            <div className="price-edit">
                              <span className="price">¥{val.price*val.num}</span>
                              <div className="action">
                                <span className="delete" onClick={()=>this.removeItem(index)}>删除</span>
                                <span className="gap-line">|</span>
                                <span className="action-finish" onClick={this.handleIsshow}>完成</span>
                              </div>
                            </div>
                          </div>
                      )
                    }
                    </div>
                  </CheckboxItem>
                </div>
                <div className="group-tail">
                  <div className="icon">免</div>
                  <span>新用户满39元包邮（新疆部分地区除外）</span>
                </div>
              </div>
                ))
              }
          </Groups>

          <Submitbottom>
            <div className="sub-info">
              <CheckboxItem key={data} defaultChecked={true}>
                <div className="heng">
                  <span className="all-check-text">全选</span>
                  <div className="summary">
                    <div>
                      <span>合计</span>
                      <span className="red">¥{ this.getTotalprice() }</span>
                    </div>
                  </div>
                </div>
              </CheckboxItem>
            </div>
            <div className="submit-btn">去结算</div>
          </Submitbottom>
        </div>
        ):(
          <Nogoods>
            <div className="oops"></div>
            <div className="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
            <div className="go-stroll">去逛逛</div>
        </Nogoods>
        )
      }
        
        
      </>
    )
  }

  async componentDidMount() {

    this.setState({
      shopcarlist:JSON.parse(storage.getItem('shopcarlist')) 
    })
  }
  async componentDidUpdate(){
    storage.setItem('shopcarlist',JSON.stringify(this.state.shopcarlist))
  }
}

export default Shopcar