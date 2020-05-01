import React from "react";
import styled from "styled-components";
function ErrorPage() {
  return (
    <>
      <ErrorBackground>
        <h1>{`Something Went Wrong.... :(`}</h1>
      </ErrorBackground>
    </>
  );
}

const ErrorBackground = styled.div`
  background-image: url("/assets/news.jpeg");
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
`;

export default ErrorPage;
