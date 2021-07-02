/** @jsx jsx */
import { jsx } from "theme-ui";
import { FC, Fragment } from "react";
import { Global } from "@emotion/react";

import "normalize.css";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MainWrapper: FC = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor: theme.colors.background,
          },
        })}
      />
      {children}
    </Fragment>
  );
};

export default MainWrapper;
