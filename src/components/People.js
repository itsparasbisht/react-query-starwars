import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

function People() {
    const fetchPeople = async () => {
        const res = await fetch('https://swapi.dev/api/people/')
        return res.json()
    }

    const {data, status} = useQuery('people', fetchPeople)

  return (
    <div>
        <h1>People</h1>
        {status === 'loading' && (
            <div>Loading data...</div>
        )}

        {status === 'error' && (
            <div>Error Fetching data</div>
        )}

        {status === 'success' && (
            <div>
                {data.results.map(person => <Person key={person.name} person={person} />)}
            </div>
        )}
    </div>
  )
}

export default People