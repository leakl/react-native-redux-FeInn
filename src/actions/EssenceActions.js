import * as types from './actionTypes';

export function essenceList(data , getState){
  console.log(getState().Essence && getState().Essence.data)
  let oldList = (getState().Essence && getState().Essence.data && getState().Essence.data.concat(data))  || data;
  return {
    type : types.INDEX_LIST,
    data : oldList
  }
}

export function isDownLoad(isLoad){
  return {
    type : types.DOWN_LOAD,
    isLoad
  }
}

// 首页列表
export function getList(params , cb){
  console.log(params)
  return (dispatch , getState) => {
    fetch('https://cnodejs.org/api/v1/topics?' + params)
    .then(res => res.json())
    .then(json =>{
      cb && cb();
      dispatch(essenceList(json.data , getState))
    })
    .catch( msg =>{
      console.log(msg)
    })
  }
}

export function articleDetail(res){
  return {
    type : types.ARTICLE_DETAIL,
    detail
  }
}
export function getArticleDetail(id){
  if(!id) return;
  return (dispatch) => {
    fetch('https://cnodejs.org/api/v1/topic/' + id)
    .then(res => res.json())
    .then(json =>{
      dispatch(essenceList(json.data))
    })
    .catch( msg =>{
      console.log(msg)
    })
  }
}
