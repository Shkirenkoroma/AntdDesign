import { Image, Table, Typography } from "antd";
import { pokemons } from "../data";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text: string) => (
			<Typography.Text copyable>{text}</Typography.Text>
		),
	},
	{
		title: "Number",
		dataIndex: "number",
		key: "number",
	},
	{
		title: "Class",
		dataIndex: "classification",
		key: "class",
		filters: [
			{
				text: "Seed Pokemon",
				value: "Seed Pokemon",
			},
			{
				text: "Lizard Pokemon",
				value: "Lizard Pokemon",
			},
			{
				text: "Cocoon Pokemon",
				value: "Cocoon Pokemon",
			},
		],
		onFilter: (value: any, item: any) => item.classification.includes(value),
	},
	{
		title: "Rate",
		dataIndex: "fleeRate",
		key: "fleeRate",
		sorter: (a: any, b: any) => a.fleeRate - b.fleeRate,
	},
	{
		title: "Image",
		dataIndex: "image",
		key: "image",
		render: (image: any) => <Image src={image} alt="pokemon" width={200} />,
	},
];

const dataSource = pokemons.map((item: any) => ({ ...item, key: item.id }));

const _Table = () => {
	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={{ showSizeChanger: true, pageSizeOptions: [5, 10, 15, 20] }}
		/>
	);
};

export default _Table;
