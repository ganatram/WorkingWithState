import { AppProvider } from './AppContext';
import { Header } from './Header';
import { Main } from './Main';

export function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </>
  );
}
