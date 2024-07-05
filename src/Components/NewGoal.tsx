import { useRef, type FormEvent } from "react";



type NewGoalProps={
    onAddGoal:(goal:string,summary:string)=> void;
    
}

export default function NewGoal({onAddGoal}:NewGoalProps){

    const goal= useRef<HTMLInputElement>(null);
    const summary= useRef<HTMLInputElement>(null);
    
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const enteredGoal=goal.current!.value
        const enteredSummary=summary.current!.value;
      
        onAddGoal(enteredGoal,enteredSummary)

    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">your goal</label>
                <input id="goal" ref={goal}  type="text"/>
            </p>
            <p>
                <label htmlFor="goal">summary</label>
                <input id="goal" ref={summary} type="text" />
            </p>
            <p>
                <button type = "submit">Add Goal</button>
            </p>
        </form>
    )
}