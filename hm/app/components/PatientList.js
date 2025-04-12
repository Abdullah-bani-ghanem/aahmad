"use client";
import { useState } from "react";
import PrescriptionForm from "./PrescriptionForm";

export default function PatientList({ patients, doctorId }) {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  const handleClosePopup = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6" dir="rtl">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-right">قائمة المرضى</h2>

      {patients.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {patients.map((patient) => (
            <div
              key={patient._id}
              className="py-4 px-3 flex items-center justify-between hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="font-medium text-gray-800">{patient.name}</span>
              <button
                onClick={() => handleViewDetails(patient)}
                className="text-indigo-600 hover:text-indigo-800"
              >
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-8 text-gray-500 bg-gray-50 rounded-md">
          لا يوجد مرضى مسجلين
        </p>
      )}

      {/* Popup Window */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg" dir="rtl">
            <h3 className="text-xl font-bold mb-4 text-indigo-700 text-right">
              {selectedPatient.name}
            </h3>
            <div className="space-y-2 mb-4 text-right">
              <p>
                <strong>العمر:</strong> {selectedPatient.age}
              </p>
              <p>
                <strong>الجنس:</strong> {selectedPatient.gender}
              </p>
              <p>
                <strong>الهاتف:</strong> {selectedPatient.phone}
              </p>
              <p>
                <strong>الحالة:</strong>{" "}
                {selectedPatient.condition || "غير محددة"}
              </p>
            </div>
            {/* Prescription Form */}
            <PrescriptionForm
              patientId={selectedPatient._id}
              doctorId={doctorId}
            />
            <button
              onClick={handleClosePopup}
              className="mt-4 w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
