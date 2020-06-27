import React, { Component } from 'react'
import { Confirm } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import {Button,Header,Segment,TransitionablePortal,} from 'semantic-ui-react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import '../../index.css';
import ReactDOM from 'react-dom';
import { Calendar } from 'primereact/calendar';

class ConfirmExampleConfirm extends Component {
  constructor(props){
    super(props);
    this.state = { open: false,startdate: null,enddate: null,name:this.props.name,email: this.props.email,type:this.props.type }
  }
    handleOpen = () => this.setState({ open: true })
  
    handleClose = () => this.setState({ open: false })

    open=()=>{
        console.log(this.state)
        this.setState({startdate: null,enddate:null})}
  render() {
    const { open } = this.state
    return (

      <div>
        
        <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
        trigger={
          <Button
            content={open ? 'Enter Date' : 'Book'}
            negative={open}
            positive={!open}
          />
        }
      >
        <Segment
          style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 10000 }}
        >
          {/* <Header>This is an example portal</Header>
          <p>Portals have tons of great callback functions to hook into.</p>
          <p>To close, simply click the close button or click away</p>
          <button type="button" class="btn btn-primary">Button</button> */}
          <div>
              <h6>startDate</h6>
          <div className="p-col-6 p-md-4">
                        <Calendar value={this.state.startdate} onChange={(e) => this.setState({ startdate: e.value })} showTime={true} showSeconds={true} />
            </div> 
            <h6>endDate</h6>
            <div className="p-col-6 p-md-4">
                        <Calendar value={this.state.enddate} onChange={(e) => this.setState({ enddate: e.value })} showTime={true} showSeconds={true} />
            </div> 
            <Button onClick={this.open}>Book</Button>
          </div>
        </Segment>
      </TransitionablePortal>
      </div>
    )
  }
}

export default ConfirmExampleConfirm