function getErrorTypeFromStatus(status) {
  if (!status) return "frontend"; // خطأ JSX أو Component
  if (status === 404) return "404"; // صفحة مش موجودة
  if (status >= 400 && status < 500) return "client"; // باقي أخطاء الـ Client
  if (status >= 500 && status < 600) return "500"; // أخطاء السيرفر
  return "frontend"; // fallback
}