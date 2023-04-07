import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import { Row, Col } from "antd";

const App = () => {
	return (
		<>
			<Header />
			<Row>
				<Col xs={24} md={{span:12, offset:6}}>
					<Table />
				</Col>
			</Row>
		</>
	);
};

export default App;
