function validateLogin(event) {
  // ফর্ম সাবমিট না হবার জন্য ইভেন্ট ডিফল্ট প্রতিরোধ
  event.preventDefault();

  // ইনপুট ক্ষেত্রগুলো থেকে মান নেওয়া
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // try-catch ব্লক ব্যবহার করে ত্রুটি হ্যান্ডলিং
  try {
    // ফর্ম যাচাই
    if (!username || !password) {
      throw new Error("ইউজারনেম এবং পাসওয়ার্ড পূর্ণভাবে প্রদান করুন");
    }

    // সঠিক ইউজারনেম এবং পাসওয়ার্ড চেক
    if (username === "admin" && password === "12345") {
      alert("লগইন সফল!");
      errorMessage.textContent = ""; // পূর্ববর্তী ত্রুটি বার্তা মুছে দিন
    } else {
      throw new Error("অবৈধ ইউজারনেম অথবা পাসওয়ার্ড");
    }
  } catch (error) {
    // ত্রুটি হলে, ত্রুটি বার্তা দেখানো
    errorMessage.textContent = error.message;
  } finally {
    // সবশেষে কিছু করা হতে পারে, যেমন ইনপুট ফিল্ড পরিষ্কার করা
    console.log("লগইন যাচাই সম্পন্ন।");
  }
}
