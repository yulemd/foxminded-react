import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import { App } from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const root: HTMLElement | null = document.getElementById('root');
if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}