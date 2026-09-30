/* =================================
   EasyPay Demo - Main JavaScript
   ================================= */

const DEMO_OTP = "123456";


// ================================
// Password Show / Hide
// ================================

function togglePassword() {
  const password = document.getElementById("password");
  const button = document.querySelector(".show-btn");

  if (password.type === "password") {
    password.type = "text";
    button.textContent = "Hide";
  } else {
    password.type = "password";
    button.textContent = "Show";
  }
}


// ================================
// Demo Login
// ================================

function loginDemo() {

  const mobile = document.getElementById("mobile").value.trim();
  const password = document.getElementById("password").value.trim();

  if (mobile.length !== 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (password.length < 4) {
    alert("Please enter your password.");
    return;
  }

  // Save demo mobile locally
  localStorage.setItem("easyPayMobile", mobile);

  // Show OTP
  openOtp(mobile);
}


// ================================
// Open OTP Modal
// ================================

function openOtp(mobile) {

  const modal = document.getElementById("otpModal");
  const mobileText = document.getElementById("otpMobile");

  mobileText.textContent =
    "+91 " + mobile.slice(0, 2) + "******" + mobile.slice(-2);

  modal.classList.add("active");

  const inputs = document.querySelectorAll(".otp-inputs input");

  inputs.forEach(input => {
    input.value = "";
  });

  setTimeout(() => {
    if (inputs.length > 0) {
      inputs[0].focus();
    }
  }, 150);
}


// ================================
// Close OTP
// ================================

function closeOtp() {

  const modal = document.getElementById("otpModal");

  modal.classList.remove("active");
}


// ================================
// OTP Verification
// ================================

function verifyOtp() {

  const inputs = document.querySelectorAll(".otp-inputs input");

  let enteredOtp = "";

  inputs.forEach(input => {
    enteredOtp += input.value;
  });

  if (enteredOtp.length !== 6) {
    alert("Please enter the complete 6-digit OTP.");
    return;
  }

  if (enteredOtp !== DEMO_OTP) {
    alert("Incorrect OTP. Demo OTP is 123456.");
    return;
  }

  // Generate demo user ID
  const userId =
    "EP" +
    Math.floor(100000 + Math.random() * 900000);

  localStorage.setItem("easyPayUserId", userId);
  localStorage.setItem("easyPayLoggedIn", "true");

  alert(
    "Login successful!\n\nYour Demo User ID: " + userId
  );

  closeOtp();

  // Demo dashboard message for now
  showDashboardPreview(userId);
}


// ================================
// Dashboard Preview
// ================================

function showDashboardPreview(userId) {

  const container = document.querySelector(".login-container");

  container.innerHTML = `
    <div class="login-card" style="text-align:center;">

      <div class="brand-icon" style="margin:0 auto 18px;">
        EP
      </div>

      <h1 style="margin-bottom:10px;">
        Welcome to EasyPay
      </h1>

      <p style="color:#888; font-size:13px; margin-bottom:22px;">
        Demo account login successful.
      </p>

      <div style="
        padding:16px;
        border-radius:14px;
        background:#090909;
        border:1px solid rgba(246,201,69,.2);
        margin-bottom:20px;
      ">

        <div style="
          color:#777;
          font-size:11px;
          margin-bottom:7px;
        ">
          DEMO USER ID
        </div>

        <div style="
          color:#f6c945;
          font-size:21px;
          font-weight:800;
          letter-spacing:1px;
        ">
          ${userId}
        </div>

      </div>

      <button
        class="login-btn"
        onclick="location.reload()"
      >
        Continue to Dashboard →
      </button>

    </div>
  `;
}


// ================================
// Forgot Password
// ================================

function forgotPassword() {

  alert(
    "Demo Mode\n\nPassword recovery will be connected to a real authentication system in the production version."
  );
}


// ================================
// Register
// ================================

function registerDemo() {

  alert(
    "Registration page coming next.\n\nWe will add:\n• Mobile Number\n• Password\n• Confirm Password\n• Invite Code\n• Demo OTP"
  );
}


// ================================
// Telegram Support
// ================================

function telegramSupport() {

  alert(
    "Telegram Support\n\nThis button is for the client demo. Official Telegram link can be added later."
  );
}


// ================================
// OTP Input Behaviour
// ================================

document.addEventListener("DOMContentLoaded", () => {

  const inputs =
    document.querySelectorAll(".otp-inputs input");

  inputs.forEach((input, index) => {

    input.addEventListener("input", () => {

      input.value = input.value.replace(/\D/g, "");

      if (
        input.value &&
        index < inputs.length - 1
      ) {
        inputs[index + 1].focus();
      }

    });


    input.addEventListener("keydown", event => {

      if (
        event.key === "Backspace" &&
        !input.value &&
        index > 0
      ) {
        inputs[index - 1].focus();
      }

    });

  });

});
