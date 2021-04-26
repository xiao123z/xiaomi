module.exports = {
  lintOnSave:false,//关闭eslint
  devServer:{
    proxy:{    //配置代理服务器
      // 接口小暗号
      '/api':{
        target:'https://m.mi.com', //要转发的目标网址目标网址 
        changeOrigin:true,
        pathRewrite:{
          "^/api":''  //将路径中多余的暗号 删除
        },
        headers: {
          referer: 'https://m.mi.com/',
      }
      },
    }}
}
