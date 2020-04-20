export default 
{
    title: 'BIM图元组件',
    //server : ''  //发布版server
    server:()=>{
        //js获得当前服务器IP和端口
        var curPath = window.document.location.href;
        //如果url中包含了xsw，那么表示是正式部署到tomcat上了,node开发环境下的url不会包含xsw的
        if (curPath.indexOf('bimi') != -1) 
        {
            return '';//发行版本
        } 
        else 
        {
            return 'http://127.0.0.1:8080/bimi/';
        }
    }
}
