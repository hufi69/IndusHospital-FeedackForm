// Language translations for patient form
const translations = {
    en: {
      formTitle: "Patient Issue Form",
      formSubtitle: "Please fill out the form below to report your concern",
      tokenLabel: "Token ID *",
      nameLabel: "Full Name *",
      ageLabel: "Age",
      contactLabel: "Contact Number",
      issueLabel: "Issue Description *",
      submitBtn: "Submit Issue",
      successTitle: "Issue Submitted Successfully!",
      successMessage: "Your concern has been recorded. Our team will review it shortly.",
      okBtn: "OK",
      langText: "اردو",
      // Error messages
      tokenRequired: "Token ID is required",
      nameRequired: "Full name is required",
      issueRequired: "Issue description is required",
      tokenInvalid: "Please enter a valid token ID",
      nameInvalid: "Please enter a valid name",
    },
    ur: {
      formTitle: "مریض کے مسئلے کا فارم",
      formSubtitle: "اپنی پریشانی کی اطلاع دینے کے لیے نیچے دیا گیا فارم بھریں",
      tokenLabel: "ٹوکن آئی ڈی *",
      nameLabel: "پورا نام *",
      ageLabel: "عمر",
      contactLabel: "رابطہ نمبر",
      issueLabel: "مسئلے کی تفصیل *",
      submitBtn: "مسئلہ جمع کریں",
      successTitle: "مسئلہ کامیابی سے جمع ہو گیا!",
      successMessage: "آپ کی پریشانی ریکارڈ ہو گئی ہے۔ ہماری ٹیم جلد ہی اس کا جائزہ لے گی۔",
      okBtn: "ٹھیک ہے",
      langText: "English",
      // Error messages
      tokenRequired: "ٹوکن آئی ڈی ضروری ہے",
      nameRequired: "پورا نام ضروری ہے",
      issueRequired: "مسئلے کی تفصیل ضروری ہے",
      tokenInvalid: "براہ کرم درست ٹوکن آئی ڈی درج کریں",
      nameInvalid: "براہ کرم درست نام درج کریں",
    },
  }
  
  let currentLang = "en"
  const submittedIssues = JSON.parse(localStorage.getItem("patientIssues")) || []
  
  // Initialize the application
  document.addEventListener("DOMContentLoaded", () => {
    initializeLanguage()
    setupEventListeners()
    setupFormValidation()
  })
  
  // Language functionality
  function initializeLanguage() {
    const savedLang = localStorage.getItem("preferredLanguage") || "en"
    currentLang = savedLang
    updateLanguage()
  }
  
  function toggleLanguage() {
    currentLang = currentLang === "en" ? "ur" : "en"
    localStorage.setItem("preferredLanguage", currentLang)
    updateLanguage()
  }
  
  function updateLanguage() {
    const elements = translations[currentLang]
  
    // Update text content
    Object.keys(elements).forEach((key) => {
      const element = document.getElementById(key)
      if (element) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = elements[key]
        } else {
          element.textContent = elements[key]
        }
      }
    })
  
    // Update body class for RTL/LTR
    document.body.className = currentLang === "ur" ? "urdu" : ""
  
    // Update HTML lang attribute
    document.documentElement.lang = currentLang
  }
  
  // Event listeners
  function setupEventListeners() {
    const langToggle = document.getElementById("langToggle")
    if (langToggle) {
      langToggle.addEventListener("click", toggleLanguage)
    }
  
    const form = document.getElementById("patientForm")
    if (form) {
      form.addEventListener("submit", handleFormSubmit)
    }
  }
  
  // Form validation
  function setupFormValidation() {
    const inputs = document.querySelectorAll("input, textarea")
    inputs.forEach((input) => {
      input.addEventListener("blur", validateField)
      input.addEventListener("input", clearError)
    })
  }
  
  function validateField(e) {
    const field = e.target
    const value = field.value.trim()
    const fieldName = field.name
  
    clearError(e)
  
    switch (fieldName) {
      case "tokenId":
        if (!value) {
          showError(field, translations[currentLang].tokenRequired)
          return false
        }
        // Accept various token formats: numbers only, alphanumeric, or with dashes
        if (!/^[A-Z0-9\-]{3,12}$/i.test(value.toUpperCase())) {
          showError(field, translations[currentLang].tokenInvalid)
          return false
        }
        break
  
      case "patientName":
        if (!value) {
          showError(field, translations[currentLang].nameRequired)
          return false
        }
        if (value.length < 2) {
          showError(field, translations[currentLang].nameInvalid)
          return false
        }
        break
  
      case "issueDescription":
        if (!value) {
          showError(field, translations[currentLang].issueRequired)
          return false
        }
        break
    }
  
    return true
  }
  
  function showError(field, message) {
    const errorElement = document.getElementById(field.name + "Error")
    if (errorElement) {
      errorElement.textContent = message
      errorElement.classList.add("show")
    }
    field.style.borderColor = "#ef4444"
  }
  
  function clearError(e) {
    const field = e.target
    const errorElement = document.getElementById(field.name + "Error")
    if (errorElement) {
      errorElement.classList.remove("show")
    }
    field.style.borderColor = "#e5e7eb"
  }
  
  // Form submission
  function handleFormSubmit(e) {
    e.preventDefault()
  
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
  
    // Validate all fields
    let isValid = true
    const requiredFields = ["tokenId", "patientName", "issueDescription"]
  
    requiredFields.forEach((fieldName) => {
      const field = document.querySelector(`[name="${fieldName}"]`)
      const fieldEvent = { target: field }
      if (!validateField(fieldEvent)) {
        isValid = false
      }
    })
  
    if (!isValid) {
      return // Don't show notification, just stop submission
    }
  
    // Disable submit button during processing
    const submitBtn = document.getElementById("submitBtn")
    submitBtn.disabled = true
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Processing...</span>'
  
    // Add timestamp and ID
    const issueData = {
      ...data,
      id: generateIssueId(),
      timestamp: new Date().toISOString(),
      status: "submitted",
      type: "patient",
    }
  
    // Simulate processing time
    setTimeout(() => {
      // Save to localStorage (simulating database)
      submittedIssues.push(issueData)
      localStorage.setItem("patientIssues", JSON.stringify(submittedIssues))
  
      // Show success modal
      showSuccessModal()
  
      // Reset form and button
      e.target.reset()
      submitBtn.disabled = false
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span id="submitBtn">Submit Issue</span>'
    }, 1000)
  }
  
  // Utility functions
  function generateIssueId() {
    return "PAT-" + Date.now().toString(36).toUpperCase()
  }
  
  function showSuccessModal() {
    const modal = document.getElementById("successModal")
    modal.classList.add("show")
  
    // Auto close after 3 seconds
    setTimeout(() => {
      closeModal()
    }, 3000)
  }
  
  function closeModal() {
    const modal = document.getElementById("successModal")
    modal.classList.remove("show")
  }
  
  function goBack() {
    window.location.href = "index.html"
  }
  
  function showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.textContent = message
  
    // Style the notification
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: currentLang === "ur" ? "auto" : "20px",
      left: currentLang === "ur" ? "20px" : "auto",
      background: type === "success" ? "#22c55e" : type === "error" ? "#ef4444" : "#3b82f6",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      zIndex: "3000",
      animation: "slideInRight 0.3s ease",
    })
  
    document.body.appendChild(notification)
  
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease"
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }
  
  // Click outside modal to close
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("successModal")
    if (e.target === modal) {
      closeModal()
    }
  })
  
  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })
  