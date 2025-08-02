// libraries
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
// components
import App from 'components/App';
// styles
import 'styles/index.scss';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

createRoot(document.getElementById('root')!).render(
  <MantineProvider defaultColorScheme="dark">
    <App />
  </MantineProvider>
  ,
);
