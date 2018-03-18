//匹配url
var URLType={
    domain:{
      host:''
    },
    test:'mock/test.json', //测试
    hotJob:'mock/hotJob.json', //热门职位
    homeNews:'mock/homeNews.json', //首页最新资讯
    format:(name)=>{
        return URLType.domain.host+URLType[name];
    }
}

export default URLType