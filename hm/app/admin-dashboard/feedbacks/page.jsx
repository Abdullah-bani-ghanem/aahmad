'use client'

import { useEffect, useState } from 'react'
import { Search, Star, MessageSquare, RefreshCw, Filter, CheckCircle, AlertCircle, Clock } from 'lucide-react'

export default function FeedbacksPage() {
  const [feedbacks, setFeedbacks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState('الكل')
  const [stats, setStats] = useState({ total: 0, read: 0, unread: 0, avgRating: 0 })

  useEffect(() => {
    // بيانات وهمية للمراجعات
    const fakeFeedbacks = [
      {
        id: 1,
        name: 'ليلى علي',
        doctor: 'د. محمد حسن',
        service: 'فحص عام',
        rating: 5,
        message: 'خدمة ممتازة والطبيب كان متعاون جدًا. الموظفين محترمين وودودين. العيادة نظيفة ومنظمة بشكل جيد.',
        date: '2025-04-01',
        status: 'مقروء',
        time: '10:30 ص',
      },
      {
        id: 2,
        name: 'سعيد محمود',
        doctor: 'د. نجلاء كريم',
        service: 'استشارة طبية',
        rating: 4,
        message: 'الموعد تأخر قليلاً لكن التجربة كانت جيدة بشكل عام. الدكتورة كانت متفهمة وشرحت الحالة بوضوح.',
        date: '2025-04-03',
        status: 'غير مقروء',
        time: '01:45 م',
      },
      {
        id: 3,
        name: 'رنا سمير',
        doctor: 'د. خالد عبدالله',
        service: 'متابعة',
        rating: 3,
        message: 'الخدمة جيدة ولكن يوجد تأخير في ظهور النتائج. أتمنى تحسين نظام المواعيد مستقبلاً.',
        date: '2025-04-05',
        status: 'مقروء',
        time: '11:15 ص',
      },
      {
        id: 4,
        name: 'أحمد يوسف',
        doctor: 'د. سارة محمد',
        service: 'فحص أسنان',
        rating: 5,
        message: 'تجربة ممتازة، الدكتورة ماهرة جداً والعيادة مجهزة بأحدث التقنيات. سعيد جداً بالنتائج.',
        date: '2025-04-07',
        status: 'غير مقروء',
        time: '09:00 ص',
      },
      {
        id: 5,
        name: 'هدى فاروق',
        doctor: 'د. أحمد علي',
        service: 'استشارة تغذية',
        rating: 2,
        message: 'لم تكن التجربة جيدة. انتظرت طويلاً وكانت الاستشارة قصيرة جداً. أتمنى تحسين الخدمة.',
        date: '2025-04-10',
        status: 'غير مقروء',
        time: '03:30 م',
      },
    ]

    setTimeout(() => {
      setFeedbacks(fakeFeedbacks)
      setIsLoading(false)
      
      // حساب الإحصائيات
      const totalFeedbacks = fakeFeedbacks.length
      const readFeedbacks = fakeFeedbacks.filter(fb => fb.status === 'مقروء').length
      const unreadFeedbacks = totalFeedbacks - readFeedbacks
      const totalRating = fakeFeedbacks.reduce((sum, fb) => sum + fb.rating, 0)
      const avgRating = totalRating / totalFeedbacks
      
      setStats({
        total: totalFeedbacks,
        read: readFeedbacks,
        unread: unreadFeedbacks,
        avgRating: avgRating.toFixed(1)
      })
    }, 300)
  }, [])

  const filteredFeedbacks = filter === 'الكل'
    ? feedbacks
    : feedbacks.filter(fb => fb.status === filter)

  const refreshData = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  // الحصول على لون النجوم بناءً على التقييم
  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-yellow-500'
    if (rating >= 3) return 'text-blue-500'
    return 'text-gray-500'
  }

  const getStatusColor = (status) => {
    return status === 'مقروء' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
  }

  const getStatusIcon = (status) => {
    return status === 'مقروء' 
      ? <CheckCircle size={14} className="ml-1" />
      : <Clock size={14} className="ml-1" />
  }

  // تحويل الرقم إلى نجوم
  const renderStars = (rating) => {
    const stars = []
    const ratingColor = getRatingColor(rating)
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? `${ratingColor} fill-current` : 'text-gray-300'} 
        />
      )
    }
    
    return <div className="flex">{stars}</div>
  }

  const markAsRead = (id) => {
    // نسخ المصفوفة الأصلية
    const updatedFeedbacks = feedbacks.map(fb => 
      fb.id === id ? { ...fb, status: 'مقروء' } : fb
    )
    setFeedbacks(updatedFeedbacks)
    
    // تحديث الإحصائيات
    const readFeedbacks = updatedFeedbacks.filter(fb => fb.status === 'مقروء').length
    setStats({
      ...stats,
      read: readFeedbacks,
      unread: updatedFeedbacks.length - readFeedbacks
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6 rtl">
      <div className="max-w-6xl mx-auto">
        {/* رأس الصفحة */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">مراجعات المرضى</h1>
            <p className="text-gray-600 mt-1">عرض وإدارة جميع مراجعات وتقييمات المرضى</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center bg-yellow-50 px-4 py-2 rounded-lg shadow-sm">
            <Star size={22} className="text-yellow-500 fill-current ml-2" />
            <div>
              <span className="text-lg font-bold text-gray-800">{stats.avgRating}</span>
              <span className="text-sm text-gray-600 mr-1">/ 5</span>
            </div>
          </div>
        </div>

        {/* نظرة عامة على المراجعات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="rounded-full bg-blue-100 p-3 ml-3">
              <MessageSquare size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">إجمالي المراجعات</p>
              <p className="text-xl font-bold">{stats.total}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="rounded-full bg-green-100 p-3 ml-3">
              <CheckCircle size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">المراجعات المقروءة</p>
              <p className="text-xl font-bold">{stats.read}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="rounded-full bg-yellow-100 p-3 ml-3">
              <AlertCircle size={20} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">المراجعات غير المقروءة</p>
              <p className="text-xl font-bold">{stats.unread}</p>
            </div>
          </div>
        </div>

        {/* أدوات البحث والتصفية */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="بحث عن مراجعة أو مريض..."
                className="block w-full pr-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 bg-gray-50"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative rounded-lg overflow-hidden">
                <select 
                  className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                >
                  <option>الكل</option>
                  <option>مقروء</option>
                  <option>غير مقروء</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                  <Filter size={14} />
                </div>
              </div>
              
              <button 
                className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={refreshData}
              >
                <RefreshCw size={20} className={`text-gray-600 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* قائمة المراجعات */}
        {isLoading ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">جاري تحميل البيانات...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 mb-6">
            {filteredFeedbacks.length > 0 ? (
              filteredFeedbacks.map((fb) => (
                <div key={fb.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold overflow-hidden mr-3">
                        {fb.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{fb.name}</h3>
                        <div className="text-sm text-gray-600 flex items-center mt-1">
                          <span className="ml-2">{fb.doctor}</span>
                          <span className="mx-2">•</span>
                          <span>{fb.service}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 md:mt-0">
                      <div className="flex items-center ml-4">
                        {renderStars(fb.rating)}
                        <span className="ml-1 text-gray-600 text-sm">{fb.rating}/5</span>
                      </div>
                      <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full ${getStatusColor(fb.status)}`}>
                        {getStatusIcon(fb.status)}
                        {fb.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-3 text-gray-700">{fb.message}</div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="text-sm text-gray-500 flex items-center">
                      <span className="ml-2">{fb.date}</span>
                      <span className="mx-2">•</span>
                      <span>{fb.time}</span>
                    </div>
                    <div className="flex gap-2 mt-3 md:mt-0">
                      {fb.status === 'غير مقروء' && (
                        <button 
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          onClick={() => markAsRead(fb.id)}
                        >
                          تحديد كمقروء
                        </button>
                      )}
                      <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">الرد</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <MessageSquare size={48} className="text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-800">لا توجد مراجعات</h3>
                <p className="text-gray-600 mt-1">لا توجد مراجعات متطابقة مع معايير البحث</p>
              </div>
            )}
          </div>
        )}
        
        {/* ترقيم الصفحات */}
        {filteredFeedbacks.length > 0 && (
          <div className="bg-white px-4 py-3 border border-gray-200 rounded-lg flex items-center justify-between">
            <div className="text-sm text-gray-700">
              عرض <span className="font-medium">{filteredFeedbacks.length}</span> من <span className="font-medium">{feedbacks.length}</span> مراجعات
            </div>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50">السابق</button>
              <button className="px-3 py-1 border border-blue-500 rounded-md bg-blue-500 text-white">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50">التالي</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}