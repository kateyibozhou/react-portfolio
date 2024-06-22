import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primaryDark: '#897143',  // --primary-color-dark
    primaryLight: '#fffff0',  // --primary-color-light
    workCardDarkText: '#343A40',  // Dark text color for WorkCard component
    secondary: '#f5f5dc',  // --secondary_color
    highlight: '#ff7f50',  // --highlight-coral
    background: '#f5f5f5',  // Light gray background (from previous theme)
    white: '#FFFFFF',  // White color (from previous theme)
    border: '#E0E0E0',  // Light border color (from previous theme)
    quote: '#CCCCCC',  // Quote border color (from previous theme)
  },
  fonts: {
    primary: '"Work Sans", "Segoe UI", "Helvetica Neue", "Roboto", sans-serif',
    secondary: '"Fraunces", serif',  // Custom font defined in App.css
  },
};

export default theme;