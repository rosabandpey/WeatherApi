import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: gray;
  padding-top: 50px;
  margin: -70px 0 50px 830px;
  border-radius: 5px;
  height: 50px;
  width: 150px;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function Footer() {
  return (
    <StyledFooter>
      <div >
        تسک کارگزاری آتیه
        <p>Rosa Bandpey</p>
      </div>
    </StyledFooter>
  );
}

export { Footer };
