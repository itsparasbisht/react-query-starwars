import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

function Planets() {
    const fetchPlanets = async () => {
        const res = await fetch('https://swapi.dev/api/planets/')
        return res.json()
    }

    const {data, status} = useQuery('planets', fetchPlanets)

  return (
    <div>
        <h1>Planets</h1>
        {status === 'loading' && (
            <div>Loading data...</div>
        )}

        {status === 'error' && (
            <div>Error Fetching data</div>
        )}

        {status === 'success' && (
            <div>
                {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
            </div>
        )}
    </div>
  )
}

export default Planets