require('isomorphic-fetch');

import URLType from './url';


let requestConfig={
    method:'GET',
    headers:{'Content-Type': 'application/json'},
    mode: 'cors',
    cache: 'default'
}

var API={

    fetch:(params,config=requestConfig)=>{

        var result=API.formatUrl(params)

        return new Promise(function(resolve,reject){
            fetch(result.url,result.config||config).then((response)=>{
                resolve(response.json())
            },(e)=>{
                debugger
                console.error("fetch:["+result.url+"]is error:")
                console.error(e);
                reject(e)
            })
        })
    },

    formatUrl:(opts={
        name:'', //对应url里面的字段、获取url 模板
        params:{}, //get 请求的查询参数、会替换占位符、和添加到url末尾
        data:{},
        type:'GET'
    })=>{
        let {name,params,type}=opts;
        let url=URLType.format(name);
        let config=null;

        for(var p in params){
            if(url.indexOf('?')==-1){
                url+='?t='+new Date().getTime()
            }
            url=url.replace("\{\{"+p+"\}\}",params[p]);
            url+="&"+p+"="+params[p]
        }
        if(type=='POST'){
            config={}
        }
        return {url,config};
    }
}

export default API;

