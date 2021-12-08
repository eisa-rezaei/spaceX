import React from "react";
import bgGif from "assets/bgGif.gif";
import ticket from "assets/ticket.png";
import { StTicketContainer, StTicketFooter, StTicketGetTicket } from "./style";

const Ticket = () => {
  return (
    <StTicketContainer>
      <h3>ORDER A TICKET TO THE MARS</h3>
      <img src={bgGif} alt="Marse" />
      <StTicketGetTicket>
        <h4>Click on Below Lick to Get Your Ticket !</h4>
        <img src={ticket} alt="your ticket" />
      </StTicketGetTicket>
      <StTicketFooter>Developed By Human Called Jesus</StTicketFooter>
    </StTicketContainer>
  );
};

export default Ticket;
