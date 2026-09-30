/* =========================================================
   EasyPay Client Demo
   Frontend Demo Only
   No real payment / crypto / OTP transaction
========================================================= */

const DEMO_OTP = "123456";

let otpPurpose = "";
let currentPage = "home";

/* =========================================================
   BASIC HELPERS
========================================================= */

function getAppContainer() {
  return document.querySelector(".login-container") || document.body;
}

function hideAuthScreens() {
  const login = document.getElementById("loginScreen");
  const register = document.getElementById("registerScreen");

  if (login) login.style.display = "none";
  if (register) register.style.display = "none";
}

function showLogin() {
  const login = document.getElementById("loginScreen");
  const register = document.getElementById("registerScreen");

  if (login) login.style.display = "flex";
  if (register) register.style.display = "none";
}

function showRegister() {
  const login = document.getElementById("loginScreen");
  const register = document.getElementById("registerScreen");

  if (login) login.style.display = "none";
  if (register) register.style.display = "flex";
}

/* =========================================================
   PASSWORD TOGGLE
========================================================= */

function toggleLoginPassword() {
  const input = document.getElementById("loginPassword");

  if (!input) return;

  input.type = input.type === "password" ? "text" : "password";
}

function toggleRegisterPassword() {
  const input = document.getElementById("registerPassword");

  if (!input) return;

  input.type = input.type === "password" ? "text" : "password";
}

/* =========================================================
   LOGIN
========================================================= */

function loginDemo() {
  const mobile = document.getElementById("loginMobile")?.value.trim();
  const password = document.getElementById("loginPassword")?.value.trim();

  if (!mobile || mobile.length < 10) {
    alert("Please enter a valid mobile number.");
    return;
  }

  if (!password) {
    alert("Please enter your password.");
    return;
  }

  otpPurpose = "login";
  openOtp();
}

/* =========================================================
   REGISTER
========================================================= */

function registerDemo() {
  const mobile = document.getElementById("registerMobile")?.value.trim();
  const password = document.getElementById("registerPassword")?.value.trim();
  const confirmPassword =
    document.getElementById("confirmPassword")?.value.trim();

  const terms = document.getElementById("termsCheck");

  if (!mobile || mobile.length < 10) {
    alert("Please enter a valid mobile number.");
    return;
  }

  if (!password) {
    alert("Please create a password.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password and confirm password do not match.");
    return;
  }

  if (terms && !terms.checked) {
    alert("Please accept Terms & Conditions.");
    return;
  }

  otpPurpose = "register";
  openOtp();
}

/* =========================================================
   OTP
========================================================= */

function openOtp() {
  const modal = document.getElementById("otpModal");

  if (modal) {
    modal.classList.add("active");
    modal.style.display = "flex";
  }

  setTimeout(() => {
    const first = document.querySelector(".otp-input");
    if (first) first.focus();
  }, 100);
}

function closeOtp() {
  const modal = document.getElementById("otpModal");

  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

function verifyOtp() {
  const inputs = document.querySelectorAll(".otp-input");

  let otp = "";

  inputs.forEach(input => {
    otp += input.value;
  });

  if (otp.length !== 6) {
    alert("Please enter 6 digit OTP.");
    return;
  }

  if (otp !== DEMO_OTP) {
    alert("Invalid demo OTP.\n\nUse: 123456");
    return;
  }

  closeOtp();

  if (otpPurpose === "register") {
    alert("Registration successful!\n\nYour Demo User ID: EP" +
      Math.floor(100000 + Math.random() * 900000));
  }

  openHomeDemo();
}

/* =========================================================
   FORGOT / SUPPORT / TERMS
========================================================= */

function forgotPassword() {
  alert(
    "Demo Password Recovery\n\n" +
    "Password recovery is disabled in this client demo."
  );
}

function telegramSupport() {
  alert(
    "Telegram Support\n\n" +
    "This is a demo support button.\n" +
    "Official Telegram channel can be connected later."
  );
}

function showTerms() {
  const modal = document.getElementById("termsModal");

  if (modal) {
    modal.classList.add("active");
    modal.style.display = "flex";
  }
}

function closeTerms() {
  const modal = document.getElementById("termsModal");

  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

/* =========================================================
   HOME DASHBOARD
========================================================= */

function openHomeDemo() {
  hideAuthScreens();

  currentPage = "home";

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">
        <div class="mini-logo">
          <span>EP</span>
        </div>

        <div class="app-title">
          <strong>EasyPay</strong>
          <small>Smart Digital Platform</small>
        </div>

        <button class="icon-btn" onclick="showNotifications()">🔔</button>
      </header>

      <main>

        <section class="hero-banner">
          <div class="hero-content">
            <small>WELCOME TO EASYPAY</small>
            <h1>Simple. Fast. Secure.</h1>
            <p>Manage your EP balance with ease.</p>

            <button onclick="openBuyEP()">
              Buy EP →
            </button>
          </div>

          <div class="hero-coin">
            <div>EP</div>
          </div>
        </section>

        <div class="banner-dots">
          <span class="active"></span>
          <span></span>
          <span></span>
        </div>

        <div class="ad-label">NO ADS</div>

        <section class="ad-banner">
          <div>
            <small>EASYPAY CLIENT DEMO</small>
            <h3>Premium Digital Experience</h3>
            <p>No real transactions are processed.</p>
          </div>
          <div class="ad-badge">EP</div>
        </section>

        <section class="stats-grid">

          <div class="stat-card">
            <small>EP BALANCE</small>
            <strong>12,500</strong>
            <span>EP</span>
          </div>

          <div class="stat-card">
            <small>TODAY'S VALUE</small>
            <strong>₹10,000</strong>
            <span>Demo</span>
          </div>

        </section>

        <section class="balance-card">
          <div>
            <small>Current EP Balance</small>
            <h2>12,500 EP</h2>
          </div>

          <div class="balance-icon">EP</div>
        </section>

        <section>

          <div class="section-heading">
            <h3>Quick Actions</h3>
            <span>Manage</span>
          </div>

          <div class="quick-actions">

            <button class="action-card" onclick="openBuyEP()">
              <b>＋</b>
              <span>Buy EP</span>
            </button>

            <button class="action-card" onclick="openSellEP()">
              <b>↗</b>
              <span>Sell EP</span>
            </button>

            <button class="action-card" onclick="openUSDT()">
              <b>₮</b>
              <span>USDT</span>
            </button>

            <button class="action-card" onclick="openWallet()">
              <b>◈</b>
              <span>Wallet</span>
            </button>

          </div>

        </section>

        <section class="section-card">
          <div class="section-heading">
            <h3>📢 Announcements</h3>
            <span>View All</span>
          </div>

          <div class="notice-row">
            <b>New User Offer</b>
            <small>Special demo rewards available for new users.</small>
          </div>

          <div class="notice-row">
            <b>EasyPay Update</b>
            <small>New trading interface is now available.</small>
          </div>
        </section>

        <section class="offer-section">

          <div class="section-heading">
            <h3>🎁 New User Offers</h3>
            <span>More</span>
          </div>

          <div class="offer-grid">

            <div class="offer-card">
              <strong>100 EP</strong>
              <span>Sign Up Reward</span>
              <button onclick="openRewards()">Claim</button>
            </div>

            <div class="offer-card">
              <strong>50 EP</strong>
              <span>Bind Payment App</span>
              <button onclick="openBindPayment()">Open</button>
            </div>

          </div>

        </section>

        <section class="section-card">

          <div class="section-heading">
            <h3>Recent Transactions</h3>
            <span onclick="openTransactions()">View All</span>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">＋</div>
            <div>
              <b>EP Purchase</b>
              <small>Today · 02:30 PM</small>
            </div>
            <strong>+500 EP</strong>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">↗</div>
            <div>
              <b>EP Sale</b>
              <small>Yesterday · 08:15 PM</small>
            </div>
            <strong>-200 EP</strong>
          </div>

        </section>

        <section class="section-card">

          <div class="section-heading">
            <h3>Learn EasyPay</h3>
          </div>

          <div class="tutorial-grid">

            <button onclick="showDemoMessage('How EasyPay Works')">
              📘
              <span>How it Works</span>
            </button>

            <button onclick="showDemoMessage('Safety Guide')">
              🛡️
              <span>Safety Guide</span>
            </button>

          </div>

        </section>

      </main>

      ${bottomNavigation("home")}

    </div>
  `;
}

/* =========================================================
   BUY EP
========================================================= */

function openBuyEP() {
  hideAuthScreens();

  currentPage = "buy";

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">

        <button class="back-btn" onclick="openHomeDemo()">←</button>

        <div class="page-title">
          <strong>Buy EP</strong>
          <small>Purchase EP Balance</small>
        </div>

        <div></div>

      </header>

      <main>

        <section class="trade-price-card">
          <small>CURRENT EP PRICE</small>
          <h1>₹0.80 <span>/ EP</span></h1>
          <p>Demo market price</p>
        </section>

        <section class="trade-card">

          <label>Enter Amount</label>

          <div class="trade-input">
            <span>₹</span>
            <input
              id="buyAmount"
              type="number"
              placeholder="Enter amount"
              oninput="calculateBuyEP()"
            />
          </div>

          <div class="quick-amounts">
            <button onclick="setBuyAmount(100)">₹100</button>
            <button onclick="setBuyAmount(500)">₹500</button>
            <button onclick="setBuyAmount(1000)">₹1,000</button>
            <button onclick="setBuyAmount(5000)">₹5,000</button>
          </div>

          <div class="receive-box">
            <span>You'll Receive</span>
            <strong id="buyReceive">0 EP</strong>
          </div>

        </section>

        <section class="trade-card">

          <h3>Payment Method</h3>

          <div class="payment-methods">

            <button class="payment-method active"
              onclick="selectPayment(this,'UPI')">
              <b>UPI</b>
              <small>Fast payment</small>
            </button>

            <button class="payment-method"
              onclick="selectPayment(this,'Bank Transfer')">
              <b>Bank</b>
              <small>Bank Transfer</small>
            </button>

            <button class="payment-method"
              onclick="selectPayment(this,'Wallet')">
              <b>Wallet</b>
              <small>Wallet Balance</small>
            </button>

          </div>

        </section>

        <button class="primary-trade-btn" onclick="confirmBuyEP()">
          Buy EP
        </button>

        <div class="demo-notice">
          ⚠️ Demo Mode — No real payment will be processed.
        </div>

      </main>

      ${bottomNavigation("buy")}

    </div>
  `;
}

function calculateBuyEP() {
  const amount = Number(document.getElementById("buyAmount")?.value || 0);

  const received = amount / 0.80;

  const output = document.getElementById("buyReceive");

  if (output) {
    output.textContent = received.toLocaleString("en-IN", {
      maximumFractionDigits: 2
    }) + " EP";
  }
}

function setBuyAmount(amount) {
  const input = document.getElementById("buyAmount");

  if (input) {
    input.value = amount;
    calculateBuyEP();
  }
}

let selectedPayment = "UPI";

function selectPayment(element, method) {
  document.querySelectorAll(".payment-method").forEach(item => {
    item.classList.remove("active");
  });

  element.classList.add("active");

  selectedPayment = method;
}

function confirmBuyEP() {
  const amount = Number(document.getElementById("buyAmount")?.value || 0);

  if (!amount || amount <= 0) {
    alert("Please enter amount.");
    return;
  }

  const ep = amount / 0.80;

  alert(
    "Demo Buy Order Created\n\n" +
    "Amount: ₹" + amount.toLocaleString("en-IN") +
    "\nEP: " + ep.toFixed(2) +
    "\nPayment: " + selectedPayment +
    "\n\nNo real payment was processed."
  );
}

/* =========================================================
   SELL EP
========================================================= */

function openSellEP() {
  hideAuthScreens();

  currentPage = "sell";

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">
        <button class="back-btn" onclick="openHomeDemo()">←</button>

        <div class="page-title">
          <strong>Sell EP</strong>
          <small>Convert EP to Demo Value</small>
        </div>

        <div></div>
      </header>

      <main>

        <section class="trade-price-card">
          <small>CURRENT EP PRICE</small>
          <h1>₹0.80 <span>/ EP</span></h1>
          <p>Demo market price</p>
        </section>

        <section class="trade-card">

          <label>EP Amount</label>

          <div class="trade-input">
            <span>EP</span>
            <input
              id="sellAmount"
              type="number"
              placeholder="Enter EP"
              oninput="calculateSellEP()"
            />
          </div>

          <div class="quick-amounts">
            <button onclick="setSellAmount(100)">100 EP</button>
            <button onclick="setSellAmount(500)">500 EP</button>
            <button onclick="setSellAmount(1000)">1K EP</button>
            <button onclick="setSellAmount(5000)">5K EP</button>
          </div>

          <div class="receive-box">
            <span>You'll Receive</span>
            <strong id="sellReceive">₹0</strong>
          </div>

        </section>

        <section class="trade-card">

          <h3>Receive Method</h3>

          <div class="payment-methods">

            <button class="payment-method active">
              <b>UPI</b>
              <small>Demo UPI</small>
            </button>

            <button class="payment-method">
              <b>Bank</b>
              <small>Demo Bank</small>
            </button>

          </div>

        </section>

        <button class="primary-trade-btn" onclick="confirmSellEP()">
          Sell EP
        </button>

        <div class="demo-notice">
          ⚠️ Demo Mode — No real withdrawal will happen.
        </div>

      </main>

      ${bottomNavigation("sell")}

    </div>
  `;
}

function calculateSellEP() {
  const amount = Number(document.getElementById("sellAmount")?.value || 0);

  const value = amount * 0.80;

  const output = document.getElementById("sellReceive");

  if (output) {
    output.textContent =
      "₹" +
      value.toLocaleString("en-IN", {
        maximumFractionDigits: 2
      });
  }
}

function setSellAmount(amount) {
  const input = document.getElementById("sellAmount");

  if (input) {
    input.value = amount;
    calculateSellEP();
  }
}

function confirmSellEP() {
  const amount = Number(document.getElementById("sellAmount")?.value || 0);

  if (!amount || amount <= 0) {
    alert("Please enter EP amount.");
    return;
  }

  alert(
    "Demo Sell Order Created\n\n" +
    "EP: " + amount +
    "\nValue: ₹" + (amount * 0.80).toFixed(2) +
    "\n\nNo real transaction was processed."
  );
}

/* =========================================================
   USDT
========================================================= */

function openUSDT() {
  hideAuthScreens();

  currentPage = "usdt";

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">

        <button class="back-btn" onclick="openHomeDemo()">←</button>

        <div class="page-title">
          <strong>USDT Wallet</strong>
          <small>Digital Asset Demo</small>
        </div>

        <div></div>

      </header>

      <main>

        <section class="balance-card">
          <div>
            <small>USDT BALANCE</small>
            <h2>1,250.00 USDT</h2>
          </div>

          <div class="balance-icon">₮</div>
        </section>

        <div class="quick-actions">

          <button class="action-card" onclick="usdtAction('Buy USDT')">
            <b>＋</b>
            <span>Buy</span>
          </button>

          <button class="action-card" onclick="usdtAction('Sell USDT')">
            <b>↗</b>
            <span>Sell</span>
          </button>

          <button class="action-card" onclick="usdtAction('Deposit')">
            <b>↓</b>
            <span>Deposit</span>
          </button>

          <button class="action-card" onclick="usdtAction('Withdraw')">
            <b>↑</b>
            <span>Withdraw</span>
          </button>

        </div>

        <section class="trade-card">

          <h3>Network</h3>

          <div class="payment-methods">

            <button class="payment-method active">
              <b>TRC20</b>
              <small>Demo Network</small>
            </button>

            <button class="payment-method">
              <b>ERC20</b>
              <small>Demo Network</small>
            </button>

            <button class="payment-method">
              <b>BEP20</b>
              <small>Demo Network</small>
            </button>

          </div>

        </section>

        <section class="section-card">

          <div class="section-heading">
            <h3>Recent USDT Transactions</h3>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">↓</div>

            <div>
              <b>USDT Deposit</b>
              <small>Today · 11:20 AM</small>
            </div>

            <strong>+500 USDT</strong>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">↑</div>

            <div>
              <b>USDT Withdraw</b>
              <small>Yesterday · 06:45 PM</small>
            </div>

            <strong>-100 USDT</strong>
          </div>

        </section>

        <div class="demo-notice">
          ⚠️ Demo only. No real cryptocurrency transfer is available.
        </div>

      </main>

      ${bottomNavigation("usdt")}

    </div>
  `;
}

function usdtAction(action) {
  alert(
    action +
    "\n\nThis is a demo feature.\n" +
    "No real USDT transaction will be performed."
  );
}

/* =========================================================
   WALLET
========================================================= */

function openWallet() {
  hideAuthScreens();

  currentPage = "wallet";

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">

        <button class="back-btn" onclick="openHomeDemo()">←</button>

        <div class="page-title">
          <strong>Wallet</strong>
          <small>EasyPay Balance</small>
        </div>

        <div></div>

      </header>

      <main>

        <section class="balance-card">

          <div>
            <small>AVAILABLE EP</small>
            <h2>12,500 EP</h2>
          </div>

          <div class="balance-icon">EP</div>

        </section>

        <div class="quick-actions">

          <button class="action-card"
            onclick="walletAction('Deposit')">
            <b>↓</b>
            <span>Deposit</span>
          </button>

          <button class="action-card"
            onclick="walletAction('Withdraw')">
            <b>↑</b>
            <span>Withdraw</span>
          </button>

          <button class="action-card"
            onclick="walletAction('Transfer')">
            <b>⇄</b>
            <span>Transfer</span>
          </button>

          <button class="action-card"
            onclick="openTransactions()">
            <b>☷</b>
            <span>History</span>
          </button>

        </div>

        <section class="section-card">

          <div class="section-heading">
            <h3>Wallet Activity</h3>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">＋</div>
            <div>
              <b>Demo Deposit</b>
              <small>30 Sep 2026</small>
            </div>
            <strong>+1,000 EP</strong>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">↗</div>
            <div>
              <b>Demo Transfer</b>
              <small>29 Sep 2026</small>
            </div>
            <strong>-300 EP</strong>
          </div>

        </section>

      </main>

      ${bottomNavigation("wallet")}

    </div>
  `;
}

function walletAction(action) {
  alert(
    action +
    "\n\nDemo feature only.\n" +
    "No real money movement will occur."
  );
}

/* =========================================================
   TRANSACTIONS
========================================================= */

function openTransactions() {
  hideAuthScreens();

  currentPage = "transactions";

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">

        <button class="back-btn" onclick="openHomeDemo()">←</button>

        <div class="page-title">
          <strong>Transactions</strong>
          <small>Activity History</small>
        </div>

        <div></div>

      </header>

      <main>

        <div class="quick-amounts">
          <button class="payment-method active">All</button>
          <button class="payment-method">Buy</button>
          <button class="payment-method">Sell</button>
          <button class="payment-method">Deposit</button>
        </div>

        <section class="section-card">

          <div class="transaction-row">
            <div class="tx-icon">＋</div>

            <div>
              <b>Buy EP</b>
              <small>30 Sep · 02:30 PM</small>
            </div>

            <strong>+500 EP</strong>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">↗</div>

            <div>
              <b>Sell EP</b>
              <small>29 Sep · 08:15 PM</small>
            </div>

            <strong>-200 EP</strong>
          </div>

          <div class="transaction-row">
            <div class="tx-icon">↓</div>

            <div>
              <b>Deposit</b>
              <small>28 Sep · 10:20 AM</small>
            </div>

            <strong>+1,000 EP</strong>
          </div>

        </section>

      </main>

      ${bottomNavigation("wallet")}

    </div>
  `;
}

/* =========================================================
   REWARDS
========================================================= */

function openRewards() {
  hideAuthScreens();

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">
        <button class="back-btn" onclick="openHomeDemo()">←</button>

        <div class="page-title">
          <strong>Newbie Rewards</strong>
          <small>Complete tasks & earn demo EP</small>
        </div>

        <div></div>
      </header>

      <main>

        <section class="balance-card">
          <div>
            <small>REWARD PROGRESS</small>
            <h2>150 / 500 EP</h2>
          </div>
          <div class="balance-icon">🎁</div>
        </section>

        ${rewardItem("Sign Up Reward", "100 EP", true)}
        ${rewardItem("Bind Payment App", "50 EP", true)}
        ${rewardItem("Complete Profile", "100 EP", false)}
        ${rewardItem("Invite Friends", "150 EP", false)}
        ${rewardItem("Daily Check-in", "50 EP", false)}

        <div class="demo-notice">
          Demo rewards have no monetary value.
        </div>

      </main>

      ${bottomNavigation("home")}

    </div>
  `;
}

function rewardItem(title, reward, claimed) {
  return `
    <section class="section-card">
      <div class="transaction-row">

        <div class="tx-icon">🎁</div>

        <div>
          <b>${title}</b>
          <small>Reward: ${reward}</small>
        </div>

        <button
          class="small-btn"
          onclick="claimReward('${title}')"
          ${claimed ? "" : "disabled"}
        >
          ${claimed ? "Claim" : "Locked"}
        </button>

      </div>
    </section>
  `;
}

function claimReward(title) {
  alert(
    title +
    "\n\nDemo reward claimed successfully."
  );
}

/* =========================================================
   BIND PAYMENT
========================================================= */

function openBindPayment() {
  hideAuthScreens();

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">
        <button class="back-btn" onclick="openHomeDemo()">←</button>

        <div class="page-title">
          <strong>Bind Payment App</strong>
          <small>Manage payment methods</small>
        </div>

        <div></div>
      </header>

      <main>

        ${paymentBinding("UPI")}
        ${paymentBinding("PhonePe")}
        ${paymentBinding("Google Pay")}
        ${paymentBinding("Paytm")}
        ${paymentBinding("Bank Account")}

        <div class="demo-notice">
          Demo only. Do not enter real banking information.
        </div>

      </main>

      ${bottomNavigation("home")}

    </div>
  `;
}

function paymentBinding(name) {
  return `
    <section class="section-card">

      <div class="transaction-row">

        <div class="tx-icon">₹</div>

        <div>
          <b>${name}</b>
          <small>Not Linked</small>
        </div>

        <button
          class="small-btn"
          onclick="demoBind('${name}')">
          Bind
        </button>

      </div>

    </section>
  `;
}

function demoBind(name) {
  alert(
    name +
    "\n\nDemo binding screen.\n" +
    "No real account information is collected."
  );
}

/* =========================================================
   MINE / PROFILE
========================================================= */

function openMine() {
  hideAuthScreens();

  currentPage = "mine";

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">

        <div class="profile-avatar">A</div>

        <div class="app-title">
          <strong>My Account</strong>
          <small>EasyPay Member</small>
        </div>

        <button class="icon-btn" onclick="openAccountSecurity()">⚙</button>

      </header>

      <main>

        <section class="balance-card">

          <div>
            <small>ACCOUNT</small>
            <h2>+91 ******1234</h2>
            <small>User ID: EP123456</small>
          </div>

          <div class="balance-icon">EP</div>

        </section>

        <section class="section-card">

          <div class="section-heading">
            <h3>Invite & Earn</h3>
          </div>

          <div class="notice-row">
            <b>Invite Code: EPX7K92</b>
            <small>Share your code with friends.</small>
          </div>

          <button
            class="primary-trade-btn"
            onclick="copyInviteCode()">
            Copy Invite Code
          </button>

        </section>

        <section class="section-card">

          <div class="section-heading">
            <h3>My Team</h3>
          </div>

          <div class="stats-grid">

            <div class="stat-card">
              <small>LEVEL 1</small>
              <strong>12</strong>
              <span>Members</span>
            </div>

            <div class="stat-card">
              <small>LEVEL 2</small>
              <strong>36</strong>
              <span>Members</span>
            </div>

          </div>

          <button
            class="primary-trade-btn"
            onclick="showDemoMessage('Team Earnings')">
            View Earnings
          </button>

        </section>

        <section class="section-card">

          <div class="section-heading">
            <h3>Offers & Services</h3>
          </div>

          ${mineItem("🎁", "Newbie Rewards", "openRewards()")}
          ${mineItem("₹", "Bind Payment App", "openBindPayment()")}
          ${mineItem("❓", "Common Problem", "openFAQ()")}
          ${mineItem("💬", "Online Service", "openOnlineService()")}
          ${mineItem("🛡️", "Account Security", "openAccountSecurity()")}
          ${mineItem("📢", "Official Channel", "openOfficialChannel()")}

        </section>

        <button
          class="primary-trade-btn"
          onclick="logoutDemo()">
          Logout
        </button>

        <div class="demo-notice">
          EasyPay Client Demo · v1.0
        </div>

      </main>

      ${bottomNavigation("mine")}

    </div>
  `;
}

function mineItem(icon, title, action) {
  return `
    <button
      onclick="${action}"
      style="
        width:100%;
        display:flex;
        align-items:center;
        gap:14px;
        padding:16px 4px;
        border:0;
        border-bottom:1px solid rgba(255,255,255,.07);
        background:transparent;
        color:white;
        text-align:left;
      "
    >
      <span style="font-size:22px">${icon}</span>

      <span style="flex:1">
        <b>${title}</b>
      </span>

      <span style="color:#f5c542">›</span>
    </button>
  `;
}

function copyInviteCode() {
  const code = "EPX7K92";

  if (navigator.clipboard) {
    navigator.clipboard.writeText(code);
  }

  alert("Invite code copied:\n\n" + code);
}

function logoutDemo() {
  if (confirm("Logout from EasyPay demo?")) {
    location.reload();
  }
}

/* =========================================================
   FAQ
========================================================= */

function openFAQ() {
  hideAuthScreens();

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">

        <button class="back-btn" onclick="openMine()">←</button>

        <div class="page-title">
          <strong>Common Problems</strong>
          <small>Frequently Asked Questions</small>
        </div>

        <div></div>

      </header>

      <main>

        ${faq("How do I buy EP?", "Open Buy EP and select your demo payment method.")}

        ${faq("How do I sell EP?", "Open Sell EP and enter the EP amount.")}

        ${faq("Where is my USDT balance?", "USDT has its own dedicated section in the bottom navigation.")}

        ${faq("Is this a real payment system?", "No. This version is a frontend client demo.")}

        ${faq("Can I add real payments later?", "Yes. A backend and verified payment provider would be required.")}

      </main>

      ${bottomNavigation("mine")}

    </div>
  `;
}

function faq(question, answer) {
  return `
    <section class="section-card">
      <div class="notice-row">
        <b>${question}</b>
        <small>${answer}</small>
      </div>
    </section>
  `;
}

/* =========================================================
   ONLINE SERVICE
========================================================= */

function openOnlineService() {
  hideAuthScreens();

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">
        <button class="back-btn" onclick="openMine()">←</button>

        <div class="page-title">
          <strong>Online Service</strong>
          <small>EasyPay Support</small>
        </div>

        <div></div>
      </header>

      <main>

        <section class="hero-banner">

          <div class="hero-content">
            <small>SUPPORT</small>
            <h1>How can we help?</h1>
            <p>Our demo support center is ready.</p>

            <button onclick="telegramSupport()">
              Contact Support
            </button>
          </div>

          <div class="hero-coin">?</div>

        </section>

        <section class="section-card">

          <div class="notice-row">
            <b>General Support</b>
            <small>For common account and app questions.</small>
          </div>

          <div class="notice-row">
            <b>Technical Support</b>
            <small>For technical issues in the EasyPay interface.</small>
          </div>

        </section>

      </main>

      ${bottomNavigation("mine")}

    </div>
  `;
}

/* =========================================================
   ACCOUNT SECURITY
========================================================= */

function openAccountSecurity() {
  hideAuthScreens();

  const app = getAppContainer();

  app.innerHTML = `
    <div class="app-shell">

      <header class="app-header">
        <button class="back-btn" onclick="openMine()">←</button>

        <div class="page-title">
          <strong>Account Security</strong>
          <small>Protect your account</small>
        </div>

        <div></div>
      </header>

      <main>

        ${securityItem("🔐", "Login Password", "Protected")}
        ${securityItem("📱", "Mobile Number", "Verified")}
        ${securityItem("🛡️", "Two-Factor Authentication", "Demo")}
        ${securityItem("👁️", "Login Activity", "View")}

        <div class="demo-notice">
          Never share passwords or OTPs with anyone.
        </div>

      </main>

      ${bottomNavigation("mine")}

    </div>
  `;
}

function securityItem(icon, title, status) {
  return `
    <section class="section-card">

      <div class="transaction-row">

        <div class="tx-icon">${icon}</div>

        <div>
          <b>${title}</b>
          <small>${status}</small>
        </div>

        <span style="color:#f5c542">›</span>

      </div>

    </section>
  `;
}

/* =========================================================
   OFFICIAL CHANNEL
========================================================= */

function openOfficialChannel() {
  alert(
    "Official Channel\n\n" +
    "Demo Telegram channel button.\n\n" +
    "Connect your verified official channel here later."
  );
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function showNotifications() {
  alert(
    "Notifications\n\n" +
    "• Welcome to EasyPay\n" +
    "• New User Offer available\n" +
    "• Demo dashboard updated"
  );
}

/* =========================================================
   GENERIC DEMO MESSAGE
========================================================= */

function showDemoMessage(section) {
  alert(
    section +
    "\n\nThis feature is included in the EasyPay client demo."
  );
}

/* =========================================================
   BOTTOM NAVIGATION
========================================================= */

function bottomNavigation(active) {

  return `
    <nav class="bottom-nav">

      <button
        class="nav-item ${active === "home" ? "active" : ""}"
        onclick="openHomeDemo()">

        <span>⌂</span>
        <small>Home</small>

      </button>

      <button
        class="nav-item ${active === "buy" ? "active" : ""}"
        onclick="openBuyEP()">

        <span>＋</span>
        <small>Buy EP</small>

      </button>

      <button
        class="nav-item ${active === "sell" ? "active" : ""}"
        onclick="openSellEP()">

        <span>↗</span>
        <small>Sell EP</small>

      </button>

      <button
        class="nav-item ${active === "usdt" ? "active" : ""}"
        onclick="openUSDT()">

        <span>₮</span>
        <small>USDT</small>

      </button>

      <button
        class="nav-item ${active === "mine" ? "active" : ""}"
        onclick="openMine()">

        <span>◉</span>
        <small>Mine</small>

      </button>

    </nav>
  `;
}

/* =========================================================
   OTP INPUT BEHAVIOUR
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const inputs = document.querySelectorAll(".otp-input");

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

      if (event.key === "Enter") {
        verifyOtp();
      }

    });

  });

});

/* =========================================================
   INITIAL STATE
========================================================= */

window.openHomeDemo = openHomeDemo;
window.openBuyEP = openBuyEP;
window.openSellEP = openSellEP;
window.openUSDT = openUSDT;
window.openWallet = openWallet;
window.openTransactions = openTransactions;
window.openMine = openMine;
window.openRewards = openRewards;
window.openBindPayment = openBindPayment;
window.openFAQ = openFAQ;
window.openOnlineService = openOnlineService;
window.openAccountSecurity = openAccountSecurity;
window.showDemoMessage = showDemoMessage;
