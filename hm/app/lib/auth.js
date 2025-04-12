// const jwt = require("jsonwebtoken");

// // التحقق من التوكن
// function verifyToken(req) {
//   // استخراج التوكن من رأس الطلب (Header)
//   const token = req.headers.get("authorization")?.split(" ")[1]; // يفترض أن التوكن يأتي كـ "Bearer <token>"

//   // إذا لم يكن هناك توكن، ارجع null
//   if (!token) {
//     return null;
//   }

//   try {
//     // التحقق من التوكن وفك تشفيره باستخدام المفتاح السري
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
//     return decoded; // يحتوي على بيانات المستخدم مثل { id, name, role }
//   } catch (error) {
//     console.error("خطأ في التحقق من التوكن:", error.message);
//     return null; // إذا كان التوكن غير صالح
//   }
// }



// module.exports = { verifyToken };