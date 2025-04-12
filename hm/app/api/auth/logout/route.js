export async function POST() {
    // حذف الكوكيز عبر إعادة توجيه الرد مع توكن فاضي
    return new Response(
      JSON.stringify({ message: "تم تسجيل الخروج" }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=; Path=/; Max-Age=0; HttpOnly`,
        },
      }
    );
  }
  