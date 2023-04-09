import { Table } from 'antd';
import { columns } from 'components/Constants';
import { pokemons } from 'data';
import { FC } from 'react';

const _Table: FC = (): JSX.Element => {
	const dataSource = pokemons.map((item) => ({
		...item,
		key: item.id,
	}));

	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={{ showSizeChanger: true, pageSizeOptions: [5, 10, 15, 20] }}
		/>
	);
};

export default _Table;
