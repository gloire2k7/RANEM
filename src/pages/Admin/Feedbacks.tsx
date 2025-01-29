import { useState } from "react";
import Header from "./AdminHeader";

// Interface for Feedback
interface Feedback {
  id: number;
  customerName: string;
  message: string;
  rating: number; // Rating out of 5
  status: "New" | "Reviewed";
}

// Dummy Feedback Data
const dummyFeedback: Feedback[] = [
  {
    id: 1,
    customerName: "John Doe",
    message: "Great product! I love the avocado oil quality.",
    rating: 5,
    status: "New",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    message: "Delivery took longer than expected, but the product is good.",
    rating: 4,
    status: "Reviewed",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    message: "The product packaging could be improved.",
    rating: 3,
    status: "New",
  },
];

const ManageFeedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(dummyFeedback);
  const [filterStatus, setFilterStatus] = useState<"All" | "New" | "Reviewed">("All");

  // Function to update feedback status
  const updateFeedbackStatus = (id: number, newStatus: Feedback["status"]) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, status: newStatus } : feedback
      )
    );
  };

  // Function to delete feedback
  const deleteFeedback = (id: number) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  // Filter feedback based on the selected status
  const filteredFeedbacks =
    filterStatus === "All"
      ? feedbacks
      : feedbacks.filter((feedback) => feedback.status === filterStatus);

  return (
    <>
      <Header />
      <div className="p-6 mt-12">
        <h1 className="text-3xl font-bold mb-4">Manage Feedback</h1>

        {/* Filter Section */}
        <div className="mb-6">
          <label htmlFor="filter" className="text-lg font-bold mr-2">
            Filter by Status:
          </label>
          <select
            id="filter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as "All" | "New" | "Reviewed")}
            className="border rounded p-2"
          >
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="Reviewed">Reviewed</option>
          </select>
        </div>

        {/* Feedback Table */}
        <table className="w-full bg-white shadow rounded overflow-x-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Message</th>
              <th className="p-2 text-left">Rating</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedbacks.map((feedback) => (
              <tr key={feedback.id} className="hover:bg-gray-50">
                <td className="p-2">{feedback.id}</td>
                <td className="p-2">{feedback.customerName}</td>
                <td className="p-2">{feedback.message}</td>
                <td className="p-2">{feedback.rating}/5</td>
                <td className="p-2">
                  <select
                    value={feedback.status}
                    onChange={(e) =>
                      updateFeedbackStatus(feedback.id, e.target.value as Feedback["status"])
                    }
                    className="border rounded p-1"
                  >
                    <option value="New">New</option>
                    <option value="Reviewed">Reviewed</option>
                  </select>
                </td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => deleteFeedback(feedback.id)}
                    className="ml-4 text-red border-2 rounded px-2 py-1 hover:bg-red hover:text-sub2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredFeedbacks.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 p-4">
                  No feedback found for the selected status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageFeedback;
