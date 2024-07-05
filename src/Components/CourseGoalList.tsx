
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalPropsList={
    goals:CGoal[]
    onDeleteGoal:(id:number)=> void
}

const CourseGoalList= ({goals,onDeleteGoal}:CourseGoalPropsList) => {
  return (
    <div>
        <ul>
        {goals.map(goal=>(
          <li key ={goal.id}>
            <CourseGoal onDelete={onDeleteGoal} goal={goal}>
              {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseGoalList