import React from 'react';
import Hero from "../Components/Hero"
import Popular from "../Components/Popular"
import Offers from "../Components/Offers"
import NewCollections from "../Components/NewCollections"
import NewsLetter from "../Components/NewsLetter"


export default function Shop(){
    return(
        <>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
        </>
    )
}