import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  GameCardWrapper,
  IconContainer,
  ViewIconWrapper,
  TrashIconWrapper,
  TrashIcon,
  ViewIcon,
  TopCard,
  TopCard2,
  TextFormatWrapper,
  NameWrapper,
  DateWrapper,
  OutterDate
} from "./primitives/GameCard";

import trashIcon from "../assets/trashIcon.png";
import viewIcon from "../assets/view.png";

import { deleteGame } from "../actions";

import "./primitives/css/GameCard.css";

const GameCard = props => {
  let delGameAndRounds = () => {
    const gameId = props.gameId;
    props.deleteGame(gameId);
  };
  console.log("PROPS GAMECARD", props);
  let createdOn = props.created.slice(0, 10);
  let playedOn = props.date.slice(0, 10);
  // if(props.date) {
  //   playedOn = props.date.slice(0, 10);
  // }
  return (
    <GameCardWrapper className="card-1 hvr-rectangle-out ">
      <TopCard
        onClick={() => {
          props.history.push(`/create-game/${props.id}`);
        }}
      >
        <TextFormatWrapper>
          <NameWrapper>
            <p> {props.name}</p>{" "}
          </NameWrapper>
          {console.log(props)}
          <OutterDate>
            <DateWrapper>
              <p>Created on: {createdOn}</p>
            </DateWrapper>
            <DateWrapper>
              <p>Scheduled for: {playedOn}</p>
            </DateWrapper>
          </OutterDate>
        </TextFormatWrapper>
      </TopCard>
      <TopCard2
        onClick={() => {
          props.history.push(`/create-game/${props.id}`);
        }}
      />
      <IconContainer>
        <TrashIconWrapper>
          <TrashIcon src={trashIcon} onClick={() => delGameAndRounds()} />
        </TrashIconWrapper>
      </IconContainer>
    </GameCardWrapper>
  );
};

export default connect(
  null,
  { deleteGame }
)(withRouter(GameCard));
