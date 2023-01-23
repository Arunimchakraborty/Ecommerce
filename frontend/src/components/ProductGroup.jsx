import React from 'react'
import { Grid } from '@mantine/core';
import Product from './Product';

const data=[
  {
    name: "Guitar",
    description: "Ye Guitar hai",
    price: 200,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png"
  },
  {
    name: "Guitar",
    description: "Ye Guitar nahi hai",
    price: 200,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png"
  },
  {
    name: "Guitar",
    description: "Ye Guitar hai isko bajao",
    price: 200,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png"
  },
  {
    name: "Guitar",
    description: "Ye mehenga guitar hai isko mat bajao",
    price: 200,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png"
  },
]

export default function ProductGroup() {
  return (
    <div >
      <Grid>
        {data.map(e => (
          <Grid.Col span={4}>
            <Product name={e.name} description={e.description} price={e.price} pic={e.url} />
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
  )
}
