import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  color: white;
  background-color: #222831;
  border-radius: 10px;
  height: 50px;
  width: 500px;
  text-align: center;

  margin: 0 auto;
  line-height: 3em !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function Header() {
  return (
    <StyledFooter>
      <p>پیش بینی آب و هوا</p>
    </StyledFooter>
  );
}

export { Header };
