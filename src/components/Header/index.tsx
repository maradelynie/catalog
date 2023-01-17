import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageheaderContainer = styled.header`
  background-color: var(--lightblue);
  background: linear-gradient(176deg, var(--lightblue) 0%, #4e9fbe 100%);
  color: white;
  padding: 0 2rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.16);
  position: fixed;
  width: 100vw;
  z-index: 100;

  .pageheader_limit {
    width: 100%;
    max-width: var(--container);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pageheader_limit ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pageheader_limit li + li {
    margin-left: 1rem;
  }

  .pageheader_limit li {
    cursor: pointer;
    transform: 0.2s;
  }
  .pageheader_limit li:hover {
    cursor: pointer;
    color: var(--red);
  }
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <PageheaderContainer className="pageheader">
      <div className="pageheader_limit">
        <h1>AppName</h1>
        <nav>
          <ul>
            <li
              onClick={() => navigate('/favorites')}
              id="pageheader_hearticon"
              data-testid="pageheader_hearticon"
            >
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </li>
            <li
              onClick={() => navigate('/')}
              id="pageheader_carticon"
              data-testid="pageheader_carticon"
            >
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </li>
          </ul>
        </nav>
      </div>
    </PageheaderContainer>
  );
}
