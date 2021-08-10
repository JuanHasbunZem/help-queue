import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: []
    };
  }

  handleAddingNewTicketList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList, formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
  }

  render(){
    let currentlyVisiableState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisiableState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketList}/>;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisiableState = <TicketList ticketList={this.state.masterTicketList} />;
      buttonText = "Add Ticket";
    }
    return(
      <React.Fragment>
        {currentlyVisiableState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;