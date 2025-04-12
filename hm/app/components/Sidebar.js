"use client";

export default function Sidebar({ role, setActiveSection, handleLogout }) {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-700 to-blue-800 text-white p-6 h-screen shadow-lg flex flex-col" dir="rtl">
      <h2 className="text-2xl font-bold mb-8 border-b border-blue-500 pb-4 text-right">لوحة التحكم الطبية</h2>
      
      <ul className="space-y-2 flex-grow">
        <li>
          <button
            onClick={() => setActiveSection("overview")}
            className="w-full text-right hover:bg-blue-600 p-3 rounded-md flex items-center transition-colors duration-200"
          >
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            نظرة عامة
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("appointments")}
            className="w-full text-right hover:bg-blue-600 p-3 rounded-md flex items-center transition-colors duration-200"
          >
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            المواعيد
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("patients")}
            className="w-full text-right hover:bg-blue-600 p-3 rounded-md flex items-center transition-colors duration-200"
          >
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            المرضى
          </button>
        </li>
        {role === "doctor" && (
          <li>
            <button
              onClick={() => setActiveSection("prescriptions")}
              className="w-full text-right hover:bg-blue-600 p-3 rounded-md flex items-center transition-colors duration-200"
            >
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              الوصفات الطبية
            </button>
          </li>
        )}
      </ul>
      
      <div className="mt-auto pt-4 border-t border-blue-500">
        <button
          onClick={handleLogout}
          className="w-full text-right hover:bg-red-700 p-3 rounded-md flex items-center bg-red-600 transition-colors duration-200"
        >
          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}