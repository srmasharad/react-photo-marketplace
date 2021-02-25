import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import BaseRouter from './routes';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store';

function App(props) {
    return (
		<Router>
			<PersistGate persistor={persistor}>
				<BaseRouter {...props} />
			</PersistGate>
		</Router>
    );
}

export default App;
