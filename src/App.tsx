
import {  useState } from 'react'
import './App.css'

import Header from "./Components/Header"
import CourseGoalList from './Components/CourseGoalList'
import NewGoal from './Components/NewGoal'

export type CourseGoal={
  title:string,
  description:string,
  id:number
}


function App() {
  const [goals,setGoals]=useState<CourseGoal[]>([])

  function handleAddGoal(goal:string,summary:string){

    setGoals(prevGoal=>{

      const newGoal:CourseGoal={
        id:Math.random(),
        title:goal,
        description:summary
      }
      return [...prevGoal,newGoal]

    })
  }

  function handleDeleteGoal(id : number){
    const findGoal = goals.filter(goal => goal.id !== id)
    setGoals([...findGoal])
  }

  return (
    <div>
      <Header image={{ src: "hii",alt:"goals"}}>
        Your Course Goals
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      
      <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals} />
      
    </div>
  )
}

export default App
