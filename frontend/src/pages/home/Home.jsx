import React from 'react'
import Banner from './Banner'
import TopSallers from './TopSallers'
import Recommened from './Recommened'
import News from './News'

export default function Home() {
  return (
    <>
      <Banner/>
      <TopSallers/>
      <Recommened/>
      <News/>
    </>
  )
}
