import React, { Component } from 'react'

import {Button,Segment,TransitionablePortal,} from 'semantic-ui-react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import '../../index.css';

import axios from 'axios'

import {Growl} from 'primereact/growl';




import { Calendar } from 'primereact/calendar';

class ConfirmExampleConfirm extends Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
    this.showSuccess = this.showSuccess.bind(this);
    this.minDate = new Date();

    // this.showError = this.showError.bind(this);

    this.state = { open: false,startdate: null,enddate: null,name:this.props.name,email: this.props.email,type:this.props.type }
  }
    handleOpen = () => this.setState({ open: true })
  
    handleClose = () => this.setState({ open: false })

    showSuccess() {
      if (this.state.startdate!== null && this.state.enddate!=null){
      this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Booking submitted'});
      console.log(this.state)
      axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(json => console.log(json))
        .catch(errr=>this.errr)



      this.setState({startdate: null,enddate:null})
    }
    else{
        this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Enter Date'});
    }
  }
  render() {
    const { open } = this.state
    return (

      <div ref={this.inputRef}>
        <Growl ref={(el) => this.growl = el} />
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
          style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 20000 }}
        >
          {/* <Header>This is an example portal</Header>
          <p>Portals have tons of great callback functions to hook into.</p>
          <p>To close, simply click the close button or click away</p>
          <button type="button" class="btn btn-primary">Button</button> */}
          <div>
              <h6>startDate</h6>
          <div className="p-col-6 p-md-4">
                        <Calendar value={this.state.startdate} onChange={(e) => this.setState({ startdate: e.value })} showTime={true} showIcon={true} minDate={this.minDate} />
            </div> 
            <h6>endDate</h6>
            <div className="p-col-6 p-md-4">
                        <Calendar value={this.state.enddate} onChange={(e) => this.setState({ enddate: e.value })} showTime={true} showIcon={true} minDate={this.minDate}/>
            </div> 
            <Button  onClick={this.showSuccess} >Book</Button>
          </div>
        </Segment>
      </TransitionablePortal>
      </div>
    )
  }
}

export default ConfirmExampleConfirm