import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LeaveForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cell: "",
    course: "",
    email: "",
    subject: "",
    reason: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // ✅ Validate required fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        setErrorMessage(`Please fill in the ${key} field`);
        return;
      }
    }

    // ✅ Show success immediately (optimistic UI)
    alert("✅ Application submitted successfully!");
    setFormData({
      name: "",
      cell: "",
      course: "",
      email: "",
      subject: "",
      reason: "",
    });
    navigate("/success"); // redirect instantly

    // ✅ Send to backend in the background
    (async () => {
      try {
        await fetch("https://leave-backend-1.onrender.com/submit-application", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        console.log("✅ Data sent to backend successfully");
      } catch (error) {
        console.error("⚠️ Background submission error:", error);
        // optional: store formData in localStorage to retry later
      }
    })();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Leave Application Form
        </h2>

        {errorMessage && (
          <div className="mb-6 rounded-lg bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700 font-medium">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>
          {/* cell */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Cell Number
            </label>
            <input
              type="tel"
              name="cell"
              value={formData.cell}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>
          {/* course */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Course
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>
          {/* subject */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>
          {/* reason */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Reason
            </label>
            <textarea
              name="reason"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            className="mt-4 w-full flex items-center justify-center py-3 rounded-md text-white font-medium text-lg shadow-md transition-all bg-indigo-600 hover:bg-indigo-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
