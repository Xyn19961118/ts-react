import styled from 'styled-components';
import SearchIconImg from '../../static/search-icon.png';

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
