import { Divider } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { FC } from 'react';

const Header:FC = ():JSX.Element => {
	
	return (
		<>
			<PageHeader title="Antd Design"/>
         <Divider />
		</>
	);
};

export default Header;
