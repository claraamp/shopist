import React, { useEffect, useState } from 'react'


export default function Category() {

    const[ items, useItems ] = useState([]);

    useEffect(() => {
        async function getData() {
            try{
                const response = await fetch('http://localhost:5173/')
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

  return (
    <>
{getData()}
    </>
  )
}
