import React, { useEffect } from "react";
import { Location } from "@reach/router";

import Header from "../Header";
import Footer from "../Footer";
import { StyledPageLayout } from "./styled";
// import GlobalStyle from "../../assets/styles/globalStyles";

import "../../assets/styles/global.css";

const PageLayout = ({ children, location }) => {
  console.log("location-->", location);
  useEffect(() => {
    switch (location.pathname) {
      case "/rent/":
      case "/delivery/":
        document.body.className = "light";

        break;

      default:
        document.body.className = "dark";
    }
  }, [location]);

  return (
    <>
      {/* <GlobalStyle /> */}
      <StyledPageLayout>
        <Header />
        <main>{children}</main>
        <Footer />
      </StyledPageLayout>
    </>
  );
};

const WithLocationLayout = (props) => (
  <Location>
    {({ location }) => <PageLayout {...props} location={location} />}
  </Location>
);

export default WithLocationLayout;
