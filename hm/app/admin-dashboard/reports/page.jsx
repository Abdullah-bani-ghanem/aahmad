'use client'

import { useEffect, useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts'
import { Calendar, TrendingUp, DollarSign, Users, Download, Refresh,RefreshCw } from 'lucide-react'

export default function ReportsPage() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [reportPeriod, setReportPeriod] = useState('شهري')

  useEffect(() => {
    // بيانات وهمية للإحصائيات الشهرية
    const fakeChartData = [
      { month: 'يناير', appointments: 30, revenue: 4000 },
      { month: 'فبراير', appointments: 45, revenue: 5500 },
      { month: 'مارس', appointments: 38, revenue: 4700 },
      { month: 'أبريل', appointments: 50, revenue: 6200 },
      { month: 'مايو', appointments: 60, revenue: 7200 },
    ]

    setTimeout(() => {
      setData(fakeChartData)
      setIsLoading(false)
    }, 500)
  }, [])

  const COLORS = ['#D97706', '#10B981', '#3B82F6', '#8B5CF6']
  
  const pieData = [
    { name: 'المرضى', value: 80 },
    { name: 'مقدمو الرعاية', value: 20 },
  ]
  
  const servicesPieData = [
    { name: 'كشف عام', value: 35 },
    { name: 'استشارة', value: 25 },
    { name: 'متابعة', value: 30 },
    { name: 'طوارئ', value: 10 },
  ]

  const refreshData = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="bg-amber-50 min-h-screen p-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* رأس الصفحة */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-amber-900">التقارير والتحليلات</h1>
            <p className="text-amber-700 mt-1">عرض إحصائيات وتحليلات العيادة</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-3">
            <select
              className="bg-white border border-amber-200 text-amber-800 py-2 px-4 rounded-lg"
              value={reportPeriod}
              onChange={(e) => setReportPeriod(e.target.value)}
            >
              <option>شهري</option>
              <option>ربع سنوي</option>
              <option>سنوي</option>
            </select>
            
            <button 
              className="bg-amber-100 p-2 rounded-lg hover:bg-amber-200 transition-colors"
              onClick={refreshData}
            >
              <RefreshCw size={20} className={`text-amber-600 ${isLoading ? 'animate-spin' : ''}`} />

            </button>
            
            <button className="flex items-center bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors shadow-md">
              <Download size={16} className="ml-1" />
              <span>تصدير PDF</span>
            </button>
          </div>
        </div>
        
        {/* بطاقات ملخص */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <SummaryCard 
            title="إجمالي المواعيد" 
            value="223" 
            change="+12%" 
            icon={<Calendar size={20} />} 
            color="bg-blue-500"
          />
          <SummaryCard 
            title="معدل النمو" 
            value="18.2%" 
            change="+4.3%" 
            icon={<TrendingUp size={20} />} 
            color="bg-emerald-500"
          />
          <SummaryCard 
            title="الإيرادات" 
            value="$27,500" 
            change="+8%" 
            icon={<DollarSign size={20} />} 
            color="bg-amber-500"
          />
          <SummaryCard 
            title="المرضى الجدد" 
            value="46" 
            change="+24%" 
            icon={<Users size={20} />} 
            color="bg-purple-500"
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* خط بياني للمواعيد */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-4 text-amber-900 flex items-center">
                  <Calendar size={18} className="ml-2" />
                  عدد المواعيد شهريًا
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F4" />
                    <XAxis dataKey="month" stroke="#92400E" />
                    <YAxis stroke="#92400E" />
                    <Tooltip contentStyle={{backgroundColor: '#FFFBEB', borderColor: '#F59E0B'}} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="appointments" 
                      name="المواعيد"
                      stroke="#D97706" 
                      strokeWidth={2}
                      dot={{ fill: '#F59E0B', strokeWidth: 2 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* بار بياني للإيرادات */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-4 text-amber-900 flex items-center">
                  <DollarSign size={18} className="ml-2" />
                  الإيرادات الشهرية
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F4" />
                    <XAxis dataKey="month" stroke="#92400E" />
                    <YAxis stroke="#92400E" />
                    <Tooltip contentStyle={{backgroundColor: '#FFFBEB', borderColor: '#F59E0B'}} />
                    <Legend />
                    <Bar 
                      dataKey="revenue" 
                      name="الإيرادات ($)"
                      fill="#F59E0B" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pie Chart لعدد المرضى والأطباء */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-4 text-amber-900 flex items-center">
                  <Users size={18} className="ml-2" />
                  نسبة المرضى إلى مقدمي الرعاية
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      <Cell fill="#D97706" />
                      <Cell fill="#10B981" />
                    </Pie>
                    <Tooltip contentStyle={{backgroundColor: '#FFFBEB', borderColor: '#F59E0B'}} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Pie Chart للخدمات */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-4 text-amber-900">توزيع الخدمات المقدمة</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={servicesPieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={40}
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {servicesPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{backgroundColor: '#FFFBEB', borderColor: '#F59E0B'}} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function SummaryCard({ title, value, change, icon, color }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <div className={`${color} p-3 rounded-lg text-white mr-4`}>
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-amber-700">{title}</h3>
        <div className="flex items-center">
          <span className="text-xl font-bold text-amber-900">{value}</span>
          <span className="text-xs font-medium text-emerald-600 mr-2">{change}</span>
        </div>
      </div>
    </div>
  )
}