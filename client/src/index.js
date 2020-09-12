import { render } from 'react-dom';
import './assets/css/tailwind.output.css';

import ApolloProvider from './ApolloProvider';

render(ApolloProvider, document.getElementById('app'));
