//匹配url
var URLType={
    domain:{
      host:''
    },
    test:'mock/test.json', //测试
    hotJob:'mock/hotJob.json', //热门职位
    homeNews:'mock/homeNews.json', //首页最新资讯
    globalSearch:'',//首页全局搜索
    classify:'mock/classify.json', //分类
    major:'mock/major.json', //专业
    province:'mock/province.json',//省份
    city:'mock/city.json', //城市
    jobList:'mock/jobList.json',//职位列表
    jobDetail:'mock/jobDetail.json',//职位详情
    format:(name)=>{
        return URLType.domain.host+URLType[name];
    }
}

export default URLType