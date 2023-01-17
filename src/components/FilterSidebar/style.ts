import styled from "styled-components";

type FiltersidebarContainerProps = {
  hide:boolean
}

export const FiltersidebarContainer = styled.aside<FiltersidebarContainerProps>`
  margin-top: 4.5rem;
  background-color: var(--lightgrey);
  padding: 1rem;
  width: 19rem;
  border-radius: .3rem;
  z-index: 10;
  outline: 0.4rem solid white;
  transform: .5s;

  .inputText_container{
    width: 4.5rem;
    input {
      width: 100%;
    }
  }

  .filtersidebar_closebutton{
    display: none;
    position: absolute;
    right: 1rem;
    top: 1.2rem;
  } 

  @media screen and (max-width: 800px) {
    & {
      position: fixed;
      margin: 0;
      border-radius: 0;
      right: 0;
      top: 3rem;
      box-shadow: -1rem 1rem 3rem 3rem rgba(0, 0, 0, 0.336);  
      outline: none;
      height: 100vh;
      display: ${(props)=>props.hide?"none":"static"};
    }
    li{
      margin: 1.5rem 0;
    }
    .filtersidebar_closebutton {
      display: block;
    }
  }
`;

export const FiltersidebarInputContainer = styled.section`
  display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: .5rem;
`;