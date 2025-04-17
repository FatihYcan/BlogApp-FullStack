import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { baseThemeConfig } from "./primitives/themePrimitives";
import { dataDisplayCustomizations } from "./components/dataDisplay";
import { inputsCustomizations } from "./components/inputs";
import { surfacesCustomizations } from "./components/surfaces";

function AppTheme(props) {
  const { children, disableCustomTheme, themeComponents } = props;

  const theme = React.useMemo(() => {
    if (disableCustomTheme) return {};

    return createTheme({
      ...baseThemeConfig,
      components: {
        ...baseThemeConfig.components,
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...surfacesCustomizations,
        ...themeComponents,
      },
    });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node,
  disableCustomTheme: PropTypes.bool,
  themeComponents: PropTypes.object,
};

export default AppTheme;
