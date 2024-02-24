"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo2 } from "@/app/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

export function AddForm() {
  // const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form>
      <label htmlFor="todo">Enter Task</label>
      <input type="text" id="todo" name="todo" required />
      <button type="button" onClick={() => createTodo2()}>
        Add
      </button>
      {/* <SubmitButton /> */}
      {/* <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p> */}
    </form>
  );
}
