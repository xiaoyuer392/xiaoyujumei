import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import {Home} from './home/index'
import {Pin} from 'pages/pin/'
import {Shopcar} from 'pages/shopcar/'
import {Mine} from 'pages/mine/'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#fe4070"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
                width: '25px',
                height: '25px',
              }}
              className="yo-ico menu"
              >&#xe624;</div>
            }
            selectedIcon={<div style={{
                width: '25px',
                height: '25px',
              }}
              className="yo-ico menu"
              >&#xe624;</div>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '25px',
                height: '25px',
              }}
              className="yo-ico menu"
              >&#xe63c;</div>
            }
            selectedIcon={
              <div style={{
                width: '25px',
                height: '25px',
              }}
              className="yo-ico menu"
              >&#xe63c;</div>
            }
            title="拼团"
            key="ping"
            selected={this.state.selectedTab === 'ping'}
            onPress={() => {
              this.setState({
                selectedTab: 'ping',
              });
            }}
          >
            <Pin/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <div style={{
                    width: '25px',
                    height: '25px'
                  }}
                  className="yo-ico menu"
                  >&#xf0178;</div>
            }
            selectedIcon={
                <div style={{
                    width: '25px',
                    height: '25px'
                  }}
                  className="yo-ico menu"
                  >&#xf0178;</div>
            }
            title="购物车"
            key="shopcar"
            selected={this.state.selectedTab === 'shopcar'}
            onPress={() => {
              this.setState({
                selectedTab: 'shopcar',
              });
            }}
          >
            <Shopcar/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <div style={{
                    width: '25px',
                    height: '25px',
                  }}
                  className="yo-ico menu"
                  >&#xe609;</div>
            }
            selectedIcon={
                <div style={{
                    width: '25px',
                    height: '25px',
                  }}
                  className="yo-ico menu"
                  >&#xe609;</div>
            }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            <Mine/>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}