import React from 'react'
import { HeroHeader } from '../components/HeroHeader'
import ProductGroup from '../components/ProductGroup'
import { useRef } from 'react'

export default function Homepage() {
  const scrollref = useRef(null);

  return (
    <>
      <HeroHeader scrollref={scrollref} />
      <ProductGroup scrollref={scrollref} />
    </>
  )
}
