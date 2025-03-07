import { createContext, useState, useEffect } from "react";
import assignmentsData from "../data/assignments.json";

export const AssignmentContext = createContext();

export function AssignmentProvider({ children }) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    setAssignments(assignmentsData);
  }, []);

  return (
    <AssignmentContext.Provider value={{ assignments, setAssignments }}>
      {children}
    </AssignmentContext.Provider>
  );
}