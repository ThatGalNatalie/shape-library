import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const query = `{
  illustrationTypeCollection {
    total
    items {
      name
      illustrationsCollection {
        total
        items {
          ... on Illustration {
            name
            color1
            color2
            code
            code2
            code3
            tags
          }
        }
      }
    }
  }
}`;

const Container = styled.div`
  div > svg {
    fill: black;
  }
`;

class Illustrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const { accessToken, spaceId } = this.props;
    fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        query
      })
    })
      .then(res => res.json())
      .then(response => {
        const { data } = response;

        this.setState({
          data: data ? data.illustrationTypeCollection.items : []
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { data } = this.state;
    const { category, name } = this.props;
    let illustrationData = {};

    data.filter(function(icon) {
      if (icon.name.toLowerCase() === category) {
        icon.illustrationsCollection.items.filter(function(item) {
          const iconName = item.name.toLowerCase();
          if (iconName === name) {
            console.log(item);
            illustrationData = item;
          }
        });
      }
    });
    const code = `${illustrationData.code}${illustrationData.code2}${illustrationData.code3}`;
    const style = {};
    return (
      <div>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: code }} />
        </Container>
      </div>
    );
  }
}
export default Illustrations;

Illustrations.defaultProps = {
  type: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string
};
