document.addEventListener("DOMContentLoaded", function () {

  /* ===== AI CHAT (SAFE) ===== */
  const input = document.querySelector(".ai-box input");
  const chatBox = document.querySelector(".ai-box");

  if (input && chatBox) {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && input.value.trim() !== "") {
        const userMsg = input.value;

        const userDiv = document.createElement("div");
        userDiv.className = "chat";
        userDiv.textContent = "🧑 " + userMsg;
        chatBox.insertBefore(userDiv, input);

        input.value = "";

        setTimeout(() => {
          const aiDiv = document.createElement("div");
          aiDiv.className = "chat";
          aiDiv.textContent =
            "🤖 Venlux AI: Thanks! Our team will contact you about this.";
          chatBox.insertBefore(aiDiv, input);
        }, 800);
      }
    });
  }

  /* ===== FAQ TOGGLE (WORKING) ===== */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

});

// Navbar shadow on scroll
window.addEventListener("scroll",()=>{
  document.querySelector(".navbar")
    .classList.toggle("scrolled",window.scrollY>60);
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display==="block"?"none":"block";
  });
});

// AOS init
AOS.init({
  duration:1000,
  once:true
});

window.addEventListener("load",()=>{
  document.querySelector(".page-loader").style.display="none";
});
window.addEventListener("scroll",()=>{
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

