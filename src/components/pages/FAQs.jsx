import React from 'react'
import { useTranslation } from "react-i18next";

function FAQs() {
      const { t } = useTranslation(); 
  return (
    <>
     <h2>{t("nav.faqs")} </h2> 
     <h2 className=' dark:text-blue-600 text-amber-600 '>this is text</h2>
     <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <form class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm">
    <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Login</h2>
    <input type="email" placeholder="Email"
      class="w-full mb-3 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500" />
    <input type="password" placeholder="Password"
      class="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500" />
    <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
      Sign In
    </button>
    <p class="mt-3 text-sm text-center text-gray-600 dark:text-gray-300">
      Forgot your password?
    </p>
  </form>
</div>

    </>
  )
}

export default FAQs