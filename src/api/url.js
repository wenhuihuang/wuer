var URLType={
    domain:{
      host:''
    },
    test:'/src/mock/test.json',
    format:(name)=>{
        return URLType.domain.host+URLType[name];
    }
}

export default URLType