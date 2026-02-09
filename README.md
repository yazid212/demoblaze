# 🚀 DemoBlaze Cypress Automation Framework

Professional **End-to-End Test Automation Framework** built with **Cypress** for real-world QA engineering, UI testing, and automation practice on **[https://www.demoblaze.com](https://www.demoblaze.com)**.

---

## 📌 Project Description

This repository contains a complete Cypress automation project that covers real QA scenarios including:

* Authentication testing
* Signup validation
* Product navigation
* Session handling
* UI automation
* Real user flows
* Negative & positive test scenarios

Built as a **professional QA portfolio project** and **real automation framework structure**.

---

## 🎯 Project Goals

* Build real-world Cypress automation skills
* Practice QA engineering concepts
* Apply automation best practices
* Create portfolio-ready automation project
* Learn scalable test architecture
* Prepare for real QA/Automation roles

---

## 🧪 Test Coverage

### 🔐 Authentication (Login)

* ✅ Login with valid credentials
* ❌ Login with wrong password
* ❌ Login with empty username
* ❌ Login with empty password
* ❌ Login with empty username & password
* ❌ Login with special characters
* 🔁 Session persistence after refresh

### 📝 Signup

* ✅ Signup with valid username and password
* 🧭 Guided signup steps automation

### 📦 Product

* 🛒 Open product page (Samsung Galaxy S6)
* 🔗 Validate product navigation

---

## 📂 Project Structure

```
demoblaze-cypress-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── auth_login.cy.js        # Login test cases
│   │   ├── signup.cy.js            # Signup test cases
│   │   ├── product.cy.js           # Product tests
│   │   ├── template_prompt.cy.js   # Prompt-based flow
│   │
│   ├── support/
│   │   ├── commands.js             # Custom commands
│   │   ├── e2e.js                  # Global configs
│   │
│   └── fixtures/
│
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🛠 Technologies Used

* **Cypress** – E2E Automation Framework
* **JavaScript**
* **Mocha** – Test runner
* **Chai** – Assertion library
* **Node.js**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yazid212/demoblaze-cypress-automation.git
cd demoblaze-cypress-automation
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Open Cypress UI

```bash
npx cypress open
```

### 4️⃣ Run Tests Headlessly

```bash
npx cypress run
```

---

## 🔑 Features

### ✅ Session Management

```js
cy.session('demoblaze-user', () => {
   cy.login('yazid212', 'Yazid212@')
})
```

### ✅ Custom Commands

```js
cy.login(username, password)
```

### ✅ Alert Handling

```js
cy.window().then(win => {
   cy.stub(win, 'alert').as('alert');
});
```

### ✅ Modal Handling

```js
cy.get('#logInModal').should('be.visible');
```

### ✅ URL Validation

```js
cy.url().should('include', 'prod.html');
```

---

## 📋 Test Case Naming Convention

```
TC-AUTH-01 → Valid login
TC-AUTH-02 → Wrong password
TC-AUTH-03 → Empty username
TC-AUTH-04 → Empty password
TC-AUTH-05 → Empty fields
TC-AUTH-06 → Special characters
TC-AUTH-07 → Session persistence
```

---

## 🧠 QA Concepts Applied

* Functional Testing
* Regression Testing
* UI Automation
* End-to-End Testing
* Smoke Testing
* Negative Testing
* Positive Testing
* Session Testing
* Input Validation
* Automation Architecture

---

## 📈 Automation Best Practices

* Reusable commands
* Modular test structure
* Clean selectors
* Test case IDs
* Session reuse
* Clear naming conventions
* Real user scenarios
* Scalable architecture
* Maintainable test design

---

## 🎓 Learning Outcomes

This project demonstrates skills in:

* Cypress automation
* QA engineering
* Test design
* Automation architecture
* UI testing
* Authentication flows
* Session handling
* Framework structuring

---

## 🚀 Future Enhancements

* API testing integration
* CI/CD pipeline (GitHub Actions)
* Allure / Mochawesome reporting
* Page Object Model (POM)
* Data-driven testing
* Cross-browser testing
* Dockerized execution
* Performance testing
