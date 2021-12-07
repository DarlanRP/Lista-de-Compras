import { useState } from 'react'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddAndRemove } from './components/AddAndRemove'
import * as C from './App.styles'

function App() {
  const [list, setList] = useState<Item[]>([


  ])

  const handleAddList = (listName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: listName,
      done: false,
    })
    setList(newList)
  }

  const handleList = (id: number, done: boolean) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList)
  }


  return (
    <C.Container>
      <C.Area>
        <C.Header><h1> Lista </h1></C.Header>

        <AddAndRemove onEnter={handleAddList} />



        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleList}
          />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App;