/* =========================================
   EasyPay Demo - Authentication
   ========================================= */

const DEMO_OTP = "123456";

let otpPurpose = "login";


// =========================================
// Screen Navigation
// =========================================

function showRegister() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("registerScreen").style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function showLogin() {
  document.getElementById("registerScreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// =========================================
// Login Password Show / Hide
// =========================================

function toggleLoginPassword() {

  const password =
    document.getElementById("loginPassword");

  const button =
    document.querySelector("#loginScreen .show-btn");

  if (password.type === "password") {

    password.type = "text";
    button.textContent = "Hide";

  } else {

    password.type = "password";
    button.textContent = "Show";

  }
}


// =========================================
// Register Password Show / Hide
// =========================================

function toggleRegisterPassword() {

  const password =
    document.getElementById("registerPassword");

  const button =
    document.querySelector("#registerScreen .show-btn");

  if (password.type === "password") {

    password.type = "text";
    button.textContent = "Hide";

  } else {

    password.type = "password";
    button.textContent = "Show";

  }
}


// =========================================
// Login
// =========================================

function loginDemo() {

  const mobile =
    document.getElementById("loginMobile").value.trim();

  const password =
    document.getElementById("loginPassword").value.trim();


  if (!/^[0-9]{10}$/.test(mobile)) {

    alert("Please enter a valid 10-digit mobile number.");

    return;
  }


  if (password.length < 4) {

    alert("Please enter your password.");

    return;
  }


  localStorage.setItem(
    "easyPayMobile",
    mobile
  );


  otpPurpose = "login";

  openOtp(mobile);
}


// =========================================
// Registration
// =========================================

function registerDemo() {

  const mobile =
    document.getElementById("registerMobile").value.trim();

  const password =
    document.getElementById("registerPassword").value;

  const confirmPassword =
    document.getElementById("confirmPassword").value;

  const inviteCode =
    document.getElementById("inviteCode").value.trim();

  const terms =
    document.getElementById("termsCheck").checked;


  if (!/^[0-9]{10}$/.test(mobile)) {

    alert("Please enter a valid 10-digit mobile number.");

    return;
  }


  if (password.length < 6) {

    alert("Password must contain at least 6 characters.");

    return;
  }


  if (password !== confirmPassword) {

    alert("Passwords do not match.");

    return;
  }


  if (!terms) {

    alert("Please agree to the Terms & Conditions.");

    return;
  }


  // Demo data only
  localStorage.setItem(
    "easyPayMobile",
    mobile
  );

  localStorage.setItem(
    "easyPayInviteCode",
    inviteCode
  );


  otpPurpose = "register";

  openOtp(mobile);
}


// =========================================
// Open OTP
// =========================================

function openOtp(mobile) {

  const modal =
    document.getElementById("otpModal");

  const mobileText =
    document.getElementById("otpMobile");


  mobileText.textContent =
    "+91 " +
    mobile.slice(0, 2) +
    "******" +
    mobile.slice(-2);


  modal.classList.add("active");


  const inputs =
    document.querySelectorAll(".otp-inputs input");


  inputs.forEach(input => {

    input.value = "";

  });


  setTimeout(() => {

    if (inputs.length > 0) {
      inputs[0].focus();
    }

  }, 150);
}


// =========================================
// Close OTP
// =========================================

function closeOtp() {

  document
    .getElementById("otpModal")
    .classList.remove("active");
}


// =========================================
// Verify OTP
// =========================================

function verifyOtp() {

  const inputs =
    document.querySelectorAll(".otp-inputs input");


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
    Math.floor(
      100000 + Math.random() * 900000
    );


  localStorage.setItem(
    "easyPayUserId",
    userId
  );

  localStorage.setItem(
    "easyPayLoggedIn",
    "true"
  );


  closeOtp();


  if (otpPurpose === "register") {

    alert(
      "Account created successfully!\n\n" +
      "Demo User ID: " +
      userId
    );

  } else {

    alert(
      "Login successful!\n\n" +
      "Demo User ID: " +
      userId
    );

  }


  showDashboardPreview(userId);
}


// =========================================
// Dashboard Preview
// =========================================

function showDashboardPreview(userId) {

  const container =
    document.querySelector(".login-container");


  container.innerHTML = `

    <div class="login-card" style="text-align:center;">

      <div
        class="brand-icon"
        style="margin:0 auto 18px;"
      >
        EP
      </div>


      <h1 style="margin-bottom:10px;">
        Welcome to EasyPay
      </h1>


      <p
        style="
          color:#888;
          font-size:13px;
          margin-bottom:22px;
        "
      >
        Demo account is ready.
      </p>


      <div
        style="
          padding:16px;
          border-radius:14px;
          background:#090909;
          border:1px solid rgba(246,201,69,.2);
          margin-bottom:20px;
        "
      >

        <div
          style="
            color:#777;
            font-size:11px;
            margin-bottom:7px;
          "
        >
          DEMO USER ID
        </div>


        <div
          style="
            color:#f6c945;
            font-size:21px;
            font-weight:800;
            letter-spacing:1px;
          "
        >
          ${userId}
        </div>

      </div>


      <button
        class="login-btn"
        onclick="openHomeDemo()"
      >
        <span>Continue to Home</span>
        <span class="arrow">→</span>
      </button>

    </div>

  `;
}


// =========================================
// Home Demo
// =========================================

function openHomeDemo() {

  alert(
    "Home Dashboard will be added next."
  );

}


// =========================================
// Forgot Password
// =========================================

function forgotPassword() {

  alert(
    "Demo Mode\n\n" +
    "Password recovery will be connected " +
    "in the production version."
  );
}


// =========================================
// Telegram Support
// =========================================

function telegramSupport() {

  alert(
    "Telegram Support\n\n" +
    "Official support link can be added later."
  );
}


// =========================================
// Terms
// =========================================

function showTerms() {

  document
    .getElementById("termsModal")
    .classList.add("active");
}


function closeTerms() {

  document
    .getElementById("termsModal")
    .classList.remove("active");
}


// =========================================
// OTP Input Behaviour
// =========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const inputs =
      document.querySelectorAll(
        ".otp-inputs input"
      );


    inputs.forEach(
      (input, index) => {


        input.addEventListener(
          "input",
          () => {

            input.value =
              input.value.replace(
                /\D/g,
                ""
              );


            if (
              input.value &&
              index <
                inputs.length - 1
            ) {

              inputs[
                index + 1
              ].focus();

            }

          }
        );


        input.addEventListener(
          "keydown",
          event => {

            if (
              event.key === "Backspace" &&
              !input.value &&
              index > 0
            ) {

              inputs[
                index - 1
              ].focus();

            }

          }
        );

      }
    );

  }
);
