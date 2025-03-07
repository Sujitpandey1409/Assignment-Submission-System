import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AssignmentContext } from "../context/AssignmentContext";
import SubmissionForm from "./SubmissionForm";

function AssignmentDetail() {
  const { id } = useParams();
  const { assignments } = useContext(AssignmentContext);
  const assignment = assignments.find((a) => a.id.toString() === id);

  if (!assignment) {
    return <div className="text-center text-red-500">Assignment not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{assignment.title}</h2>
      <p className="text-gray-700">{assignment.description}</p>
      <p className="text-gray-500">Due Date: {assignment.dueDate}</p>
      <SubmissionForm assignmentId={id} />
    </div>
  );
}

export default AssignmentDetail;