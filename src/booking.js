import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import { Popup } from 'semantic-ui-react'
import ConfirmExampleConfirm from './calander'



const cards = [
  {
    avatar: 'logo.jpg',
    date: 'Joined in 2013',
    header: 'Tennis Court',
    description: 'Primary Contact',
  },
  {
    avatar: '/images/avatar/large/matthew.png',
    date: 'Joined in 2013',
    header: 'Swimming Pool',
    description: 'Primary Contact',
  },
  {
    avatar: '/images/avatar/large/molly.png',
    date: 'Joined in 2013',
    header: 'Badminton Court',
    description: 'Primary Contact',
  },
  {
    avatar: '/images/avatar/large/molly.png',
    date: 'Joined in 2013',
    header: 'Gym',
    description: 'Primary Contact',
  },
  {
    avatar: '/images/avatar/large/molly.png',
    date: 'Joined in 2013',
    header: ' Club House ',
    description: 'Primary Contact',
  },
  {
    avatar: '/images/avatar/large/molly.png',
    date: 'Joined in 2013',
    header: ' Cycle tracks ',
    description: 'Primary Contact',
  },
]

class Booking extends Component {
  state = { loading: false , popup: true ,props:this.props}
  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }
  popup=()=>{
    this.setState({popop: true})
  }

  render() {
    const { loading } = this.state

    return (
      <div>
      <h1></h1>
      <Fragment>
        <Button loading={loading} onClick={this.handleLoadingClick} primary>
          Refresh
        </Button>
        
        
        <Divider />
        
        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>

              <Card.Content extra>
                {loading?(
                <Placeholder.Line length='short' />
                ):<ConfirmExampleConfirm/>}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
      </div>
    )
  }
}
export default Booking 