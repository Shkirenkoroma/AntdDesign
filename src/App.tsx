import { Row, Col } from 'antd';
import { FC } from 'react';

import Header from './components/Header';
import Table from './components/Table';

const App: FC = (): JSX.Element => {
	
	return (
		<>
			<Header />
			<Row>
				<Col xs={24} md={{ span: 10, offset: 7 }}>
					<Table />
				</Col>
			</Row>
		</>
	);
};

export default App;
