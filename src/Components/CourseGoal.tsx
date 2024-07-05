import { type ReactNode } from "react"
import { type CourseGoal as Goal } from "../App"

type CourseGoalProps={
    goal:Goal,
    onDelete:(id:number)=> void;
    children: ReactNode
}

export default function CourseGoal({goal,onDelete,children}:CourseGoalProps){
    return (
        <article>
            <h1>{goal.title}</h1>
            <p>{goal.description}{children}</p>
            <button onClick={()=>onDelete(goal.id)}>Delete</button>
        </article>
    )
}