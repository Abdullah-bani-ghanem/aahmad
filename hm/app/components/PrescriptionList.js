"use client";

export default function PrescriptionList({ prescriptions }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4" dir="rtl">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-right">الوصفات الطبية</h2>
      {prescriptions && prescriptions.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {prescriptions.map((prescription) => (
            <div
              key={prescription._id}
              className="py-4 px-3 flex items-center justify-between hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="text-right">
                <p className="font-medium text-gray-800">
                  {prescription.patientId.name} - {prescription.medication}
                </p>
                <p className="text-sm text-gray-600">{prescription.dosage}</p>
              </div>
              <span className="text-gray-500 text-sm">
                {new Date(prescription.createdAt).toLocaleDateString('ar-EG')}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-8 text-gray-500 bg-gray-50 rounded-md">لا توجد وصفات طبية متاحة</p>
      )}
    </div>
  );
}