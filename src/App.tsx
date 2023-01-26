import { useEffect, useState } from 'react'

function avisarAPI() {
  console.log('Lista Salva')
}

export function App() {
  const [list, setList] = useState<string[]>([])

  const [filter, setFilter] = useState('')

  // utilização de useEffect
  //primeiro paramentro é qual função vai ser executada, e o segundo paramentro é quando vai ser executada.
  useEffect(() => {
    avisarAPI();
  }, [list])

  // Caso queira que um código seja renderizado apenas quando for executado em tela
  // Fazendo renderização da API apenas uma vez
  useEffect(() => {
    fetch('http://api.github.com/users/allesoares95/repos')
      .then(response => response.json()
        .then(data => {
          setList(data.map((item: any) => item.full_name))
        }))
  }, [])

  // Não façã desse jeito para fazer um filtro 
  // const [filteredList, setFilteredList] = useState<string[]>([])

  // useEffect(() => {
  //   setFilteredList(list.filter(item => item.includes(filter)))
  // },[filter])

  // Jeito correto de fazer com apenas uma renderização dentro do react
  const filteredList = list.filter(item => item.includes(filter));


  function addToList() {
    setList(state => [...state, 'Novo item'])
  }

  return (
    <div>
      <input
        type="text"
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>

      <ul>
        {filteredList.map(item => <li>{item}</li>)}
      </ul>

      <button onClick={addToList}>Add to list</button>
    </div>
  )
}
