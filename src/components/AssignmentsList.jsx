import { useContext } from "react";
import { AssignmentContext } from "../context/AssignmentContext";
import { Link } from "react-router-dom";

function AssignmentsList() {
  const { assignments } = useContext(AssignmentContext);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id} className="border-b py-2">
            <Link to={`/assignment/${assignment.id}`} className="text-blue-500 hover:underline">
              {assignment.title} - Due: {assignment.dueDate}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignmentsList;