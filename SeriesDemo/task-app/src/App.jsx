import React from 'react'
import Card from './Card';
import Header from './Header';
import SeriesData from './SeriesData';

const App = () => {
  return (
    <>
    <Header />
    {SeriesData.map((val, index) => {
      console.log(index)
      return (
        <Card key={val.id} imgsrc={val.imgsrc} cat={val.cat} nm={val.nm} redirect={val.redirect} />
      );
    })}
  </>
  )
}

export default App