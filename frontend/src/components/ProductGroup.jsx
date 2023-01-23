import React from "react";
import { Grid } from "@mantine/core";
import Product from "./Product";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import config from "../config";

const testdata = [
	{
		id: 0,
		name: "Guitar",
		description: "Ye Guitar hai",
		price: 200,
		url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png",
	},
	{
		id: 1,
		name: "Guitar",
		description: "Ye Guitar nahi hai",
		price: 200,
		url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png",
	},
	{
		id: 2,
		name: "Guitar",
		description: "Ye Guitar hai isko bajao",
		price: 200,
		url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png",
	},
	{
		id: 3,
		name: "Guitar",
		description: "Ye mehenga guitar hai isko mat bajao",
		price: 200,
		url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png",
	},
];

export default function ProductGroup(props) {
	const [data, setData] = useState([]);
	useEffect(() => {
		console.log(data);
	}, [data]);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/products/?populate=*")
			.then((res) => setData(res.data.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<Grid ref={props.scrollref}>
				{data.map((e) => (
					<Grid.Col span={4} key={e.id}>
						<Product
							name={e.attributes.name}
							description={e.attributes.description}
							price={e.attributes.price}
							pic={config.backendurl + e.attributes.pic.data.attributes.url}
						/>
					</Grid.Col>
				))}
				{/* <Grid.Col span={4}>
          <Product  />
        </Grid.Col>
        <Grid.Col span={4}>
          <Product />
        </Grid.Col>
        <Grid.Col span={4}>
          <Product />
        </Grid.Col>
        <Grid.Col span={4}>
          <Product />
        </Grid.Col> */}
			</Grid>
		</div>
	);
}
