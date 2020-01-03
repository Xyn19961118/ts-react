import styled from 'styled-components';
import SearchIconImg from '../../static/search-icon.png';

export const AllWrap = styled.div `
  min-height: 100vh;
  background: #fff;
`;
export const Header = styled.div `
  width:100%;
  height:.4rem;
  font-size: 0.15rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: .1rem .15rem;
  box-sizing: border-box;
`;

export const SearchContent = styled.div`
  width: 100%;
  height: .35rem;
  border-radius: .06rem;
  background: #ebebeb;
  display: flex;
  box-sizing: border-box;
  padding: .07rem 0;
  align-items: center;
`;

export const SearchIcon = styled.div`
  width: .18rem;
  height: .18rem;
  background: url(${SearchIconImg}) no-repeat;
  background-size: .18rem;
  margin-left: .12rem;
`;

export const SearchPlacehold = styled.div`
  font-size: .14rem;
  margin-left: .1rem;
`
export const BannerWrapper = styled.div`
 & .am-wingblank.am-wingblank-lg {
   margin-left: 0;
   margin-right: 0;
 } 
`

export const InterestWrapper = styled.div`

`
export const InterestTitle = styled.div`
  padding: .2rem;
  text-align: center;
  color: #333;
  font-size: .16rem;
`

export const InterestContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const InterestItemWrap = styled.div`
  width: 33.33%;
  margin-bottom: .1rem;
`
export const InterestItem = styled.div`
  width: .9rem;
  margin: auto;
  border: #eee .01rem solid;
  border-radius: .04rem;
  height: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const InterestItemPic = styled.img`
  width: .48rem;
  height: .48rem;
`
export const InterestItemText = styled.div`
  width: 100%;
  text-align: center;
  margin-top: .1rem;
`

//分类列表

export const CategoryWrapper = styled.div`
  width: 100%;
`