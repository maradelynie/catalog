import styled from "styled-components";

type ProductCardContainerProps = {
  hide:boolean
}

export const ProductCardContainerProps = styled.div<{list:boolean}>`
  background-color: var(--lightgrey);
  width: ${props => props.list ? '100%' :"13rem"};
  margin-bottom: 1.5rem;
  border-radius: .5rem;
  overflow: hidden;
  outline: 0.4rem solid white;
  position: relative;
  transition: all .5s;
  display: ${props => props.list ? 'grid' :""};
  grid-template-columns: ${props => props.list ? '7rem 1fr' :""};
  height: ${props => props.list ? '6rem' :""};




  &:hover{
  transform: scale(1.05);
  z-index: 1;
  }
  .productspage_productinfo h2{
    margin-bottom: 0;
  }
.cartbutton_container button{
  position: ${props => props.list ? 'static' :"absolute"};
  bottom: 1rem;
  right: 1rem;
}
.productspage_productimage {
  height: ${props => props.list ? 'unset' :"8rem"};
  overflow: hidden;
  img{
    width: ${props => props.list ? 'unset' :"100%"};
    object-fit: ${props => props.list ? 'cover' :""};
    height: ${props => props.list ? '6rem' :""};
  }
}
.favoritebutton_container{
  position: ${props => props.list ? 'static' :"absolute"};
  right: .5rem;
  top: -7.5rem;
  width: 1rem;
  border: .15rem var(--red) solid;
  border-radius: 100%;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  display: flex;
  align-items: ${props => props.list ? 'center' :""};
}

.productspage_productinfo{
  position: relative;
  display: ${props => props.list ? 'grid' :"flex"};
  grid-template-columns: ${props => props.list ? '1fr 8rem 4rem 4rem' :""};
  flex-direction: ${props => props.list ? '' :"column"};
  align-items: ${props => props.list ? 'center' :""};
  justify-content: space-between;
  padding: ${props => props.list ? '.5rem' :"1rem"};
  height: ${props => props.list ? '' :"calc(100% - 8rem)"};
  p{
    margin-bottom: ${props => props.list ? '.5rem' :"1rem"} ;
  }
  div {
    max-width: ${props => props.list ? '32rem' :""};
  }
  h3{
    margin-bottom: ${props => props.list ? '.3rem' :""};
  }
}
.productspage_productitle{
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  & {
     idth: 10rem;
     grid-template-columns: ${props => props.list ? '5rem 1fr' :""};
  }

  .productspage_productimage {
    height: 6rem;
  }

   .cartbutton_container button{
   position: ${props => props.list ? '' :"absolute"};
   bottom: -1.5rem;
   right: .3rem;
   }
   .favoritebutton_container{
     top:-5.5rem;
   }
    .productspage_productinfo{
      grid-template-columns: ${props => props.list ? '50% 4rem 3rem 3rem' :""};
      p{
        font-size: .8rem;
        display: ${props => props.list ? 'none' :""};
      }
        h3{
        font-size: 1.1rem;
      }
      h2{
        font-size: 1.3rem;
      }
    }
  }
  @media screen and (max-width: 400px) {
    & {
      width: 100%;
    }
    .cartbutton_container button {
      bottom: 1rem;
    }
    .productspage_productinfo {
     grid-template-columns: ${props => props.list ? '30% 4rem 3rem 3rem' :""};
   }
  }
`;