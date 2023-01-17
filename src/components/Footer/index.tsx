import React from 'react';
import styled from 'styled-components';

const PagefooterContainer = styled.footer`
  background-color: var(--lightblue);
  padding: 0 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
  small {
    color: white;
  }
`;

export default function Footer() {
  return (
    <PagefooterContainer>
      <small>Mara Oliveira 2023</small>
    </PagefooterContainer>
  );
}
