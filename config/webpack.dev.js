const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

developmentConfig = {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    // open: true,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    proxy: {
      '/ap': {
        target: 'http://h5.jumei.com',
        changeOrigin: true,
        headers:{
          'Cookie':'default_site_25=sh; first_visit=1; first_visit_time=1595938551; frwap=wap; has_download=1; referer_site_cps=wap_touch_; guide_download_show=1; from_source=browser; referer_site=wap_browser_wap_touch_; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22173955a8782321-0df57678b379d4-2d604637-250125-173955a87833c0%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%7D; sid=1cdd87280ba784f276599feda5484263; route=6cf9ffe4014f0bf241681c1db92a3674; TY_SESSION_ID=9c13a33e-ceca-494e-a528-d64e5cee97b9; close_down_banner=1596108464562; session_id=5f215e0da9e278413; cookie_uid=1082013c361596022285; account=MtJaqMKb7PFy2YYGg3OULEhCQ7K%2FA%2Fjg35dgRSBj8wecQPIjAV%2ByQIf02pux9cyGqdWVnzAUQfwJS4oM3gd9QmmKL5n1QuoaglksSSm4ZjyNfjxDjgv3pmw3lBtUlihYSin8kttmRZpsplU9JnI%2F8guQ7XZfos7SWwThPaZRvht5g4c8jzjgBs3tf%2Ff0Fz7vKIJeFvmynLluIA12aed4P5ZJvxRIQQ1t; tk=46b056630b04ad575b71a46c1bfa92acd1600c46; uid=1100246657; v_uid=1100246657; nickname=JM1JagSkXajc9; token=Dp2KZSBdqGNnhQGsxH6tHNX49Unv73v2Rbty5kKohgfTlg1JLOfBAQWIM1obAse9ruMkmWilZiRIjJPTjq4XYDx6PrzF0aFcVpVUu0wEyawO8zCL7CEcY8dSeBOHCYAR; session=Yh7vuF9U4tBO3lKMpHarV6GN1ELCvZNZ; privilege_group=0; register_time=1596022380; cookie_ver=1; login_mode=h5_register_login; new_signup=1; device_platform=iphone; PHPSESSID=9ff0ff10f9160a5d0c641ee7ba8b3924; jmdl14=2; jml14=2; jump_info=%7B%22com.jumei.iphone%22%3A%7B%22jumeimallUrl%22%3A%22jumeimall%253A%252F%252Fpage%252Fcard%252Findex%253Fpageflag%253Dglobal%22%7D%7D; Hm_lvt_884477732c15fb2f2416fb892282394b=1595938605,1596034200; Hm_lpvt_884477732c15fb2f2416fb892282394b=1596034262'
        },
        pathRewrite: {'^/ap' : ''}
      },
      '/tuan': {
        target: 'https://s.h5.jumei.com',
        changeOrigin: true,
        headers:{
          'Cookie':'TY_SESSION_ID=4fd7b79f-9b8f-4fcf-9735-8c96eb131186; default_site_25=sh; first_visit=1; first_visit_time=1595938551; frwap=wap; has_download=1; __utmz=154994554.1595938605.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); referer_site_cps=wap_touch_; guide_download_show=1; from_source=browser; referer_site=wap_browser_wap_touch_; sid=1cdd87280ba784f276599feda5484263; close_down_banner=1596108464562; cookie_uid=1082013c361596022285; account=MtJaqMKb7PFy2YYGg3OULEhCQ7K%2FA%2Fjg35dgRSBj8wecQPIjAV%2ByQIf02pux9cyGqdWVnzAUQfwJS4oM3gd9QmmKL5n1QuoaglksSSm4ZjyNfjxDjgv3pmw3lBtUlihYSin8kttmRZpsplU9JnI%2F8guQ7XZfos7SWwThPaZRvht5g4c8jzjgBs3tf%2Ff0Fz7vKIJeFvmynLluIA12aed4P5ZJvxRIQQ1t; tk=46b056630b04ad575b71a46c1bfa92acd1600c46; uid=1100246657; v_uid=1100246657; nickname=JM1JagSkXajc9; token=Dp2KZSBdqGNnhQGsxH6tHNX49Unv73v2Rbty5kKohgfTlg1JLOfBAQWIM1obAse9ruMkmWilZiRIjJPTjq4XYDx6PrzF0aFcVpVUu0wEyawO8zCL7CEcY8dSeBOHCYAR; session=Yh7vuF9U4tBO3lKMpHarV6GN1ELCvZNZ; privilege_group=0; register_time=1596022380; cookie_ver=1; login_mode=h5_register_login; PHPSESSID=9ff0ff10f9160a5d0c641ee7ba8b3924; jmdl14=2; jml14=2; Hm_lvt_884477732c15fb2f2416fb892282394b=1595938605,1596034200; __utma=154994554.1604057047.1595938605.1595938605.1596034200.2; __utmc=154994554; Hm_lpvt_884477732c15fb2f2416fb892282394b=1596034321; device_platform=iphone; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221100246657%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%2C%22first_id%22%3A%22173955a8782321-0df57678b379d4-2d604637-250125-173955a87833c0%22%7D; client_addr=%E4%B8%8A%E6%B5%B7%E5%B8%82-%E4%B8%8A%E6%B5%B7%E5%B8%82; jump_info=%7B%22com.jumei.iphone%22%3A%7B%22jumeimallUrl%22%3A%22jumeimall%253A%252F%252Fpage%252Fadcommon%253Fposition%253Dcoutuan%2526title%253D%25E8%2581%259A%25E7%25BE%258E%25E6%258B%25BC%25E5%259B%25A2%22%7D%7D'
        },
        pathRewrite: {'^/tuan' : ''}
      },
      '/riew': {
        target: 'http://koubei.jumei.com',
        changeOrigin: true,
        pathRewrite: {'^/riew' : ''}
      }
    }
  }
}

module.exports = merge(commonConfig, developmentConfig)