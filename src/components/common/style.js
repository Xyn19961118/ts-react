import styled from 'styled-components';

//分类classifyNewItem 组件代码
export const Item = styled.div `
  padding: .1rem .15rem;
  background: #fff;
  box-sizing: border-box;
`
export const Title = styled.div `
  display: flex;
  align-items: center;
`
export const HeadPic = styled.img `
  width: .24rem;
  height: .24rem;
  border: #eee .01rem solid;
  border-radius: 50%;
`
export const HeadText = styled.div `
  font-size: .12rem;
  color: #999;
  margin-left: .08rem;
`
export const Content = styled.div `
  
`
export const ContentTitle = styled.div `
  font-size: .14rem;
  color: #000;
  font-weight: bold;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: .06rem;
`
export const ContentText = styled.div `
  font-size: .12rem;
  color: #333;
  margin-top: .04rem;
  line-height: .18rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: .04rem;

`

export const Bottom = styled.div `
  font-size: .12rem;
  color: #999;
  margin-top: .1rem;
`