import React from 'react';
import { Card, Container } from 'semantic-ui-react';

const ResultSearchType = ({ typeList = [] }) => {
  return (
    <>
      <Container text>
        <Card.Group>
          <Card fluid color='purple' href='/Dogs' header='Dogs' />
          <Card fluid color='grey' href='/Cats' header='Cats' />
        </Card.Group>
      </Container>
    </>
  );
};

export default ResultSearchType;
