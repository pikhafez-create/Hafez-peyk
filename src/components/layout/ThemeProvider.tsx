import React, { createContext, useContext } from "react";
import { colors } from "../../theme/colors";

const ThemeContext = createContext({ colors });

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
}
