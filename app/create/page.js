'use client'
import React, { useState } from "react";
import Header from "./_components/header";

function Create() {
  const [script, setScript] = useState("");
  const [timing, setTiming] = useState(30);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(1); // Default first image selected

  const handleCreate = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmittedData({ script, timing, selectedImage });
    }, 2000);
  };

  return (
    <div className="bg-black">
      <Header />
      <div className="max-w-2xl mx-auto p-6 bg-black min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4">Create Video</h1>

        {/* Script Input */}
        <textarea
          className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Enter your script..."
          rows={5}
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />

        {/* Image Selection */}
        <div className="flex justify-between mt-4">
          {[1, 2, 3, 4].map((num) => (
            <img
              key={num}
              src="/file.svg"
              alt={`Preview ${num}`}
              className={`w-24 h-24 object-cover border-2 rounded-lg cursor-pointer transition ${
                selectedImage === num ? "border-white scale-105" : "border-gray-600"
              }`}
              onClick={() => setSelectedImage(num)}
            />
          ))}
        </div>

        {/* Timing Selection */}
        <div className="mt-4">
          <label className="block font-medium mb-2">Choose Timing:</label>
          <div className="flex space-x-4">
            {[30, 45, 60].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded-lg transition ${
                  timing === option ? "bg-white text-black" : "bg-gray-800"
                }`}
                onClick={() => setTiming(option)}
              >
                {option} seconds
              </button>
            ))}
          </div>
        </div>

        {/* Create Button */}
        <button
          onClick={handleCreate}
          disabled={loading || script.trim() === ""}
          className={`mt-6 w-full py-3 rounded-lg flex justify-center items-center transition ${
            script.trim() === ""
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          {loading ? <span className="animate-spin mr-2">⏳</span> : "Create"}
        </button>

        {/* Display Submitted Details */}
        {submittedData && (
          <div className="mt-6 p-4 border border-gray-600 rounded-lg bg-gray-900">
            <h2 className="text-lg font-semibold">Submitted Data:</h2>
            <p>
              <strong>Script:</strong> {submittedData.script}
            </p>
            <p>
              <strong>Timing:</strong> {submittedData.timing} seconds
            </p>
            <p>
              <strong>Selected Image:</strong> {submittedData.selectedImage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Create;
