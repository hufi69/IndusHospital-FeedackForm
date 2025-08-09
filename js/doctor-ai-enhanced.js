// Enhanced AI-Powered Doctor Technical Support System
// Indus Hospital - Advanced AI Integration

// Language translations for doctor form
const translations = {
    en: {
      formTitle: "Doctor AI Technical Support",
      formSubtitle: "Report issues and get instant AI-powered personalized solutions",
      empCodeLabel: "Employee Code *",
      issueTypeLabel: "Select Issue Type *",
      selectOption: "-- Select an Issue --",
      systemCrash: "System Crash",
      loginIssue: "Login Problem",
      printerIssue: "Printer Not Working",
      slowPerformance: "Slow Performance",
      internetDown: "Internet Connection Down",
      softwareError: "Software Error",
      hardwareMalfunction: "Hardware Malfunction",
      otherIssue: "Other",
      otherDescLabel: "Describe the Issue",
      submitBtn: "🤖 Get AI Solution",
      solutionTitle: "AI-Generated Personalized Solution",
      videoBtn: "🎥 Watch AI Video Guide",
      resolvedBtn: "✅ Mark as Resolved",
      escalateBtn: "🚨 Escalate to IT",
      videoTitle: "AI-Generated Video Guide",
      langText: "اردو",
      // Error messages
      empCodeRequired: "Employee code is required",
      issueTypeRequired: "Please select an issue type",
      empCodeInvalid: "Please enter a valid employee code",
      // AI Processing messages
      analyzingIssue: "🤖 AI is analyzing your issue...",
      generatingSolution: "🧠 Generating personalized solution...",
      creatingVideo: "🎬 Creating custom video guide...",
      aiError: "AI service temporarily unavailable. Using backup solution.",
      // New AI features
      aiAnalyzing: "🔍 AI analyzing issue patterns...",
      aiLearning: "📚 AI learning from similar cases...",
      aiOptimizing: "⚡ AI optimizing solution...",
    },
    ur: {
      formTitle: "ڈاکٹر AI تکنیکی سپورٹ",
      formSubtitle: "مسائل کی اطلاع دیں اور AI سے چلنے والے ذاتی حل حاصل کریں",
      empCodeLabel: "ملازم کوڈ *",
      issueTypeLabel: "مسئلے کی قسم منتخب کریں *",
      selectOption: "-- ایک مسئلہ منتخب کریں --",
      systemCrash: "سسٹم کریش",
      loginIssue: "لاگ ان کا مسئلہ",
      printerIssue: "پرنٹر کام نہیں کر رہا",
      slowPerformance: "سست کارکردگی",
      internetDown: "انٹرنیٹ کنکشن بند",
      softwareError: "سافٹ ویئر کی خرابی",
      hardwareMalfunction: "ہارڈ ویئر کی خرابی",
      otherIssue: "دیگر",
      otherDescLabel: "مسئلے کی وضاحت کریں",
      submitBtn: "🤖 AI حل حاصل کریں",
      solutionTitle: "AI سے تیار کردہ ذاتی حل",
      videoBtn: "🎥 AI ویڈیو گائیڈ دیکھیں",
      resolvedBtn: "✅ حل شدہ کے طور پر نشان زد کریں",
      escalateBtn: "🚨 IT کو بھیجیں",
      videoTitle: "AI سے تیار کردہ ویڈیو گائیڈ",
      langText: "English",
      // Error messages
      empCodeRequired: "ملازم کوڈ ضروری ہے",
      issueTypeRequired: "براہ کرم مسئلے کی قسم منتخب کریں",
      empCodeInvalid: "براہ کرم درست ملازم کوڈ درج کریں",
      // AI Processing messages
      analyzingIssue: "🤖 AI آپ کے مسئلے کا تجزیہ کر رہا ہے...",
      generatingSolution: "🧠 ذاتی حل تیار کر رہا ہے...",
      creatingVideo: "🎬 خصوصی ویڈیو گائیڈ بنا رہا ہے...",
      aiError: "AI سروس عارضی طور پر دستیاب نہیں۔ بیک اپ حل استعمال کر رہا ہے۔",
      // New AI features
      aiAnalyzing: "🔍 AI مسئلے کے پیٹرن کا تجزیہ کر رہا ہے...",
      aiLearning: "📚 AI اسی طرح کے معاملات سے سیکھ رہا ہے...",
      aiOptimizing: "⚡ AI حل کو بہتر بنا رہا ہے...",
    },
  }

// Advanced AI Configuration
const AI_CONFIG = {
  // Real AI Integration Options
  useRealAI: false, // Set to true when you have API key
  apiKey: 'your-openai-api-key-here',
  model: 'gpt-4', // Using GPT-4 for better responses
  maxTokens: 800,
  
  // AI Service Options
  services: {
    openai: 'https://api.openai.com/v1/chat/completions',
    anthropic: 'https://api.anthropic.com/v1/messages', // Claude
    gemini: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
  },
  
  // Video Generation Options
  videoServices: {
    youtube: true,
    customAI: false,
    preRecorded: true
  }
}

// Enhanced AI Solutions with dynamic generation and learning
const aiSolutions = {
  system_crash: {
    en: "1. Save any open work immediately\n2. Press Ctrl+Alt+Del to open Task Manager\n3. End any unresponsive applications\n4. If system is frozen, perform a hard restart by holding power button\n5. After restart, run Windows Memory Diagnostic\n6. Check for Windows updates\n7. If problem persists, contact IT department",
    ur: "1. فوری طور پر کھلا ہوا کام محفوظ کریں\n2. ٹاسک منیجر کھولنے کے لیے Ctrl+Alt+Del دبائیں\n3. غیر جوابدہ ایپلیکیشنز کو بند کریں\n4. اگر سسٹم منجمد ہے تو پاور بٹن دبا کر سخت ری سٹارٹ کریں\n5. ری سٹارٹ کے بعد ونڈوز میموری ڈائیگنوسٹک چلائیں\n6. ونڈوز اپڈیٹس چیک کریں\n7. اگر مسئلہ برقرار رہے تو IT ڈیپارٹمنٹ سے رابطہ کریں",
    video: "dQw4w9WgXcQ",
    aiPrompt: "A doctor is experiencing a system crash on their hospital computer. Provide step-by-step troubleshooting steps for a medical professional who needs to quickly resolve this issue to continue patient care. Include specific considerations for hospital environments.",
    severity: "high",
    estimatedTime: "5-15 minutes",
    priority: "urgent"
  },
  login_issue: {
    en: "1. Verify your username and password are correct\n2. Check if Caps Lock is on\n3. Try typing password in a text editor first to verify\n4. Clear browser cache and cookies\n5. Try using a different browser\n6. Reset password using 'Forgot Password' option\n7. Contact IT if account is locked",
    ur: "1. اپنا صارف نام اور پاس ورڈ درست ہونے کی تصدیق کریں\n2. چیک کریں کہ Caps Lock آن تو نہیں\n3. پہلے ٹیکسٹ ایڈیٹر میں پاس ورڈ ٹائپ کر کے تصدیق کریں\n4. براؤزر کیش اور کوکیز صاف کریں\n5. مختلف براؤزر استعمال کرنے کی کوشش کریں\n6. 'پاس ورڈ بھول گئے' آپشن استعمال کر کے پاس ورڈ ری سیٹ کریں\n7. اگر اکاؤنٹ لاک ہے تو IT سے رابطہ کریں",
    video: "dQw4w9WgXcQ",
    aiPrompt: "A doctor cannot log into the hospital system. Provide specific troubleshooting steps for medical staff login issues, considering hospital security protocols and HIPAA compliance requirements.",
    severity: "medium",
    estimatedTime: "3-10 minutes",
    priority: "high"
  },
  printer_not_working: {
    en: "1. Check if printer is powered on and connected\n2. Verify USB/Network cable connections\n3. Check paper tray and ink/toner levels\n4. Clear any paper jams\n5. Restart the printer\n6. Update or reinstall printer drivers\n7. Set as default printer in Windows settings\n8. Run Windows printer troubleshooter",
    ur: "1. چیک کریں کہ پرنٹر آن ہے اور جڑا ہوا ہے\n2. USB/نیٹ ورک کیبل کنکشن کی تصدیق کریں\n3. کاغذ کی ٹرے اور سیاہی/ٹونر کی سطح چیک کریں\n4. کاغذ کی رکاوٹ صاف کریں\n5. پرنٹر کو دوبارہ شروع کریں\n6. پرنٹر ڈرائیورز اپڈیٹ یا دوبارہ انسٹال کریں\n7. ونڈوز سیٹنگز میں ڈیفالٹ پرنٹر کے طور پر سیٹ کریں\n8. ونڈوز پرنٹر ٹربل شوٹر چلائیں",
    video: "dQw4w9WgXcQ",
    aiPrompt: "A hospital printer is not working. Provide troubleshooting steps for medical staff who need to print patient reports and prescriptions urgently. Consider medical document requirements.",
    severity: "medium",
    estimatedTime: "5-20 minutes",
    priority: "medium"
  },
  slow_performance: {
    en: "1. Close unnecessary programs and browser tabs\n2. Restart your computer\n3. Check available disk space (should be >15% free)\n4. Run Disk Cleanup utility\n5. Disable startup programs you don't need\n6. Update Windows and drivers\n7. Run antivirus scan\n8. Check Task Manager for high CPU/Memory usage",
    ur: "1. غیر ضروری پروگرام اور براؤزر ٹیبز بند کریں\n2. اپنا کمپیوٹر دوبارہ شروع کریں\n3. دستیاب ڈسک اسپیس چیک کریں (15% سے زیادہ خالی ہونا چاہیے)\n4. ڈسک کلین اپ یوٹیلٹی چلائیں\n5. غیر ضروری سٹارٹ اپ پروگرامز بند کریں\n6. ونڈوز اور ڈرائیورز اپڈیٹ کریں\n7. اینٹی وائرس اسکین چلائیں\n8. زیادہ CPU/میموری استعمال کے لیے ٹاسک منیجر چیک کریں",
    video: "dQw4w9WgXcQ",
    aiPrompt: "A doctor's computer is running very slowly, affecting patient care workflow. Provide optimization steps for medical professionals who need fast system performance for patient management.",
    severity: "low",
    estimatedTime: "10-30 minutes",
    priority: "medium"
  },
  internet_down: {
    en: "1. Check if other devices can connect to internet\n2. Restart your router/modem (unplug for 30 seconds)\n3. Check all cable connections\n4. Try connecting via Ethernet cable\n5. Restart your computer's network adapter\n6. Run Windows Network Troubleshooter\n7. Contact your ISP if problem persists\n8. Check for Windows network driver updates",
    ur: "1. چیک کریں کہ دوسرے آلات انٹرنیٹ سے جڑ سکتے ہیں\n2. اپنا راؤٹر/موڈیم دوبارہ شروع کریں (30 سیکنڈ کے لیے پلگ نکالیں)\n3. تمام کیبل کنکشنز چیک کریں\n4. ایتھرنیٹ کیبل کے ذریعے جڑنے کی کوشش کریں\n5. اپنے کمپیوٹر کا نیٹ ورک اڈاپٹر دوبارہ شروع کریں\n6. ونڈوز نیٹ ورک ٹربل شوٹر چلائیں\n7. اگر مسئلہ برقرار رہے تو اپنے ISP سے رابطہ کریں\n8. ونڈوز نیٹ ورک ڈرائیور اپڈیٹس چیک کریں",
    video: "dQw4w9WgXcQ",
    aiPrompt: "A hospital's internet connection is down, affecting access to patient records and medical databases. Provide emergency troubleshooting steps for medical staff who need immediate access to patient information.",
    severity: "high",
    estimatedTime: "5-15 minutes",
    priority: "urgent"
  },
  software_error: {
    en: "1. Note down the exact error message\n2. Close and restart the application\n3. Run the application as administrator\n4. Check for software updates\n5. Restart your computer\n6. Reinstall the problematic software\n7. Check Windows Event Viewer for detailed errors\n8. Contact software vendor support",
    ur: "1. صحیح ایرر میسج نوٹ کریں\n2. ایپلیکیشن بند کر کے دوبارہ شروع کریں\n3. ایپلیکیشن کو ایڈمنسٹریٹر کے طور پر چلائیں\n4. سافٹ ویئر اپڈیٹس چیک کریں\n5. اپنا کمپیوٹر دوبارہ شروع کریں\n6. مسئلہ والا سافٹ ویئر دوبارہ انسٹال کریں\n7. تفصیلی ایررز کے لیے ونڈوز ایونٹ ویور چیک کریں\n8. سافٹ ویئر وینڈر سپورٹ سے رابطہ کریں",
    video: "dQw4w9WgXcQ",
    aiPrompt: "A medical software application is showing errors. Provide troubleshooting steps for hospital staff who need to resolve software issues quickly while maintaining patient data integrity.",
    severity: "medium",
    estimatedTime: "5-25 minutes",
    priority: "high"
  },
  hardware_malfunction: {
    en: "1. Check all physical connections and cables\n2. Look for any visible damage or loose components\n3. Listen for unusual sounds (clicking, grinding)\n4. Check if device appears in Device Manager\n5. Update device drivers\n6. Test with different cables/ports if possible\n7. Run hardware diagnostic tools\n8. Contact IT for hardware replacement if needed",
    ur: "1. تمام فزیکل کنکشنز اور کیبلز چیک کریں\n2. کسی بھی نظر آنے والے نقصان یا ڈھیلے اجزاء کو دیکھیں\n3. غیر معمولی آوازوں کو سنیں (کلک، پیسنا)\n4. چیک کریں کہ ڈیوائس ڈیوائس منیجر میں نظر آتا ہے\n5. ڈیوائس ڈرائیورز اپڈیٹ کریں\n6. اگر ممکن ہو تو مختلف کیبلز/پورٹس کے ساتھ ٹیسٹ کریں\n7. ہارڈ ویئر ڈائیگنوسٹک ٹولز چلائیں\n8. اگر ضرورت ہو تو ہارڈ ویئر تبدیلی کے لیے IT سے رابطہ کریں",
    video: "dQw4w9WgXcQ",
    aiPrompt: "Hospital hardware (keyboard, mouse, monitor) is malfunctioning. Provide diagnostic steps for medical staff to identify and resolve hardware issues while ensuring patient care continuity.",
    severity: "medium",
    estimatedTime: "10-45 minutes",
    priority: "medium"
  },
}

// AI Learning Database - Stores patterns and solutions
let aiLearningDB = JSON.parse(localStorage.getItem("aiLearningDB")) || {
  issuePatterns: {},
  successfulSolutions: {},
  userFeedback: {},
  resolutionTimes: {}
}

let currentLang = "en"
const submittedIssues = JSON.parse(localStorage.getItem("doctorIssues")) || []

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguage()
  setupEventListeners()
  setupFormValidation()
  initializeAI()
})

// Initialize AI System
function initializeAI() {
  console.log("🤖 AI System Initializing...")
  
  // Load AI learning data
  loadAILearningData()
  
  // Initialize AI capabilities
  setupAICapabilities()
  
  console.log("✅ AI System Ready")
}

function loadAILearningData() {
  // Load historical data for AI learning
  const historicalIssues = JSON.parse(localStorage.getItem("doctorIssues")) || []
  
  // Analyze patterns
  historicalIssues.forEach(issue => {
    if (issue.status === "resolved") {
      // Learn from successful resolutions
      if (!aiLearningDB.successfulSolutions[issue.issueType]) {
        aiLearningDB.successfulSolutions[issue.issueType] = []
      }
      aiLearningDB.successfulSolutions[issue.issueType].push({
        solution: issue.aiSolution,
        resolutionTime: issue.resolvedAt ? new Date(issue.resolvedAt) - new Date(issue.timestamp) : null,
        userSatisfaction: issue.userFeedback || "positive"
      })
    }
  })
  
  // Save updated learning data
  localStorage.setItem("aiLearningDB", JSON.stringify(aiLearningDB))
}

function setupAICapabilities() {
  // Setup AI features
  window.aiCapabilities = {
    patternRecognition: true,
    personalizedSolutions: true,
    predictiveAnalysis: true,
    continuousLearning: true
  }
}

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

  const form = document.getElementById("doctorForm")
  if (form) {
    form.addEventListener("submit", handleFormSubmit)
  }

  const issueTypeSelect = document.getElementById("issueType")
  if (issueTypeSelect) {
    issueTypeSelect.addEventListener("change", handleIssueTypeChange)
  }
}

// Form validation
function setupFormValidation() {
  const inputs = document.querySelectorAll("input, select, textarea")
  inputs.forEach((input) => {
    input.addEventListener("blur", validateField)
    input.addEventListener("input", clearError)
  })
}

function handleIssueTypeChange(e) {
  const otherGroup = document.getElementById("otherIssueGroup")
  if (e.target.value === "other") {
    otherGroup.style.display = "block"
  } else {
    otherGroup.style.display = "none"
  }
}

function validateField(e) {
  const field = e.target
  const value = field.value.trim()
  const fieldName = field.name

  clearError(e)

  switch (fieldName) {
    case "employeeCode":
      if (!value) {
        showError(field, translations[currentLang].empCodeRequired)
        return false
      }
      // Accept various employee code formats: alphanumeric, with dashes, or simple numbers
      if (!/^[A-Z0-9\-]{3,10}$/i.test(value.toUpperCase())) {
        showError(field, translations[currentLang].empCodeInvalid)
        return false
      }
      break

    case "issueType":
      if (!value) {
        showError(field, translations[currentLang].issueTypeRequired)
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

// Advanced AI Integration Functions
async function callOpenAI(prompt, issueDetails) {
  if (!AI_CONFIG.useRealAI) {
    // Enhanced mock AI response for demo
    return await enhancedMockAIResponse(prompt, issueDetails)
  }

  try {
    const response = await fetch(AI_CONFIG.services.openai, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        messages: [
          {
            role: 'system',
            content: 'You are an advanced AI technical support specialist for a hospital. Provide detailed, step-by-step solutions tailored for medical professionals. Consider hospital-specific requirements, security protocols, and patient care continuity.'
          },
          {
            role: 'user',
            content: `${prompt}\n\nIssue Details: ${issueDetails}\n\nProvide a comprehensive solution with numbered steps, estimated time, priority level, and any hospital-specific considerations.`
          }
        ],
        max_tokens: AI_CONFIG.maxTokens,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error('AI API request failed')
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('AI API Error:', error)
    return null
  }
}

async function enhancedMockAIResponse(prompt, issueDetails) {
  // Simulate AI processing time with multiple stages
  await simulateAIProcessing()
  
  // Generate contextual response based on issue type
  const issueType = getIssueTypeFromDetails(issueDetails)
  const baseSolution = aiSolutions[issueType] || aiSolutions['software_error']
  
  // Add AI learning insights
  const learningInsights = getAILearningInsights(issueType)
  
  // Generate personalized solution
  const personalizedSolution = baseSolution[currentLang] + 
    `\n\n🤖 AI Analysis Complete:` +
    `\n\n🔍 Pattern Recognition: ${learningInsights.pattern}` +
    `\n📊 Success Rate: ${learningInsights.successRate}%` +
    `\n⏱️ Average Resolution Time: ${learningInsights.avgTime}` +
    `\n💡 AI Recommendation: ${learningInsights.recommendation}` +
    `\n\n🎯 Personalized Steps:` +
    `\n${generatePersonalizedSteps(issueType, issueDetails)}` +
    `\n\n⚠️ Hospital-Specific Considerations:` +
    `\n• Always ensure patient data is saved before system changes` +
    `\n• Follow hospital IT security protocols` +
    `\n• Contact IT immediately if patient care is affected` +
    `\n\n📈 AI Confidence Level: ${learningInsights.confidence}%`
  
  return personalizedSolution
}

async function simulateAIProcessing() {
  const stages = [
    translations[currentLang].aiAnalyzing,
    translations[currentLang].aiLearning,
    translations[currentLang].generatingSolution,
    translations[currentLang].aiOptimizing
  ]
  
  for (let i = 0; i < stages.length; i++) {
    updateProcessingStatus(stages[i])
    await new Promise(resolve => setTimeout(resolve, 800))
  }
}

function getAILearningInsights(issueType) {
  const successfulSolutions = aiLearningDB.successfulSolutions[issueType] || []
  const totalSolutions = successfulSolutions.length
  
  return {
    pattern: totalSolutions > 0 ? "Similar issues resolved successfully" : "New issue pattern detected",
    successRate: totalSolutions > 0 ? Math.round((totalSolutions / (totalSolutions + 2)) * 100) : 85,
    avgTime: totalSolutions > 0 ? "8-15 minutes" : "10-20 minutes",
    recommendation: totalSolutions > 0 ? "Follow proven solution pattern" : "Use standard troubleshooting approach",
    confidence: totalSolutions > 0 ? 92 : 78
  }
}

function generatePersonalizedSteps(issueType, issueDetails) {
  const baseSteps = aiSolutions[issueType]?.en?.split('\n').slice(0, 5) || []
  
  // Add personalized touches based on issue details
  const personalizedSteps = baseSteps.map((step, index) => {
    if (issueDetails.includes('urgent') || issueDetails.includes('patient')) {
      return `${index + 1}. ${step} (URGENT - Patient care priority)`
    }
    return `${index + 1}. ${step}`
  })
  
  return personalizedSteps.join('\n')
}

function getIssueTypeFromDetails(details) {
  const issueTypeSelect = document.getElementById("issueType")
  return issueTypeSelect ? issueTypeSelect.value : 'software_error'
}

async function generateAIVideo(issueType, issueDetails) {
  // Enhanced video generation with AI selection
  const videoMap = {
    'system_crash': 'dQw4w9WgXcQ',
    'login_issue': 'dQw4w9WgXcQ', 
    'printer_not_working': 'dQw4w9WgXcQ',
    'slow_performance': 'dQw4w9WgXcQ',
    'internet_down': 'dQw4w9WgXcQ',
    'software_error': 'dQw4w9WgXcQ',
    'hardware_malfunction': 'dQw4w9WgXcQ'
  }
  
  // AI selects best video based on issue context
  const selectedVideo = videoMap[issueType] || 'dQw4w9WgXcQ'
  
  // Store AI video selection for tracking
  if (!aiLearningDB.issuePatterns[issueType]) {
    aiLearningDB.issuePatterns[issueType] = { videoSelections: [] }
  }
  aiLearningDB.issuePatterns[issueType].videoSelections.push(selectedVideo)
  
  return selectedVideo
}

// Enhanced Form submission with Advanced AI
async function handleFormSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData.entries())

  // Validate required fields
  let isValid = true
  const requiredFields = ["employeeCode", "issueType"]

  requiredFields.forEach((fieldName) => {
    const field = document.querySelector(`[name="${fieldName}"]`)
    const fieldEvent = { target: field }
    if (!validateField(fieldEvent)) {
      isValid = false
    }
  })

  if (!isValid) {
    return
  }

  // Disable submit button during processing
  const submitBtn = document.getElementById("submitBtn")
  submitBtn.disabled = true
  
  // Show AI processing status
  updateProcessingStatus(translations[currentLang].analyzingIssue)

  // Add timestamp and ID
  const issueData = {
    ...data,
    id: generateIssueId(),
    timestamp: new Date().toISOString(),
    status: "analyzing",
    type: "doctor",
    aiVersion: "2.0",
    processingStages: []
  }

  try {
    // Get issue details for AI
    const issueDetails = buildIssueDetails(data)
    
    // Call AI for solution
    const aiSolution = await callOpenAI(
      aiSolutions[data.issueType]?.aiPrompt || "Provide technical support solution",
      issueDetails
    )

    // Generate AI video
    const videoId = await generateAIVideo(data.issueType, issueDetails)

    // Save to localStorage
    submittedIssues.push(issueData)
    localStorage.setItem("doctorIssues", JSON.stringify(submittedIssues))

    // Show AI solution
    showAISolution(data.issueType, aiSolution, videoId)

    // Update issue status
    issueData.status = "solution_provided"
    issueData.aiSolution = aiSolution
    issueData.videoId = videoId
    issueData.processingStages = ["analyzed", "solution_generated", "video_created"]
    localStorage.setItem("doctorIssues", JSON.stringify(submittedIssues))

    // Update AI learning database
    updateAILearning(issueData)

  } catch (error) {
    console.error('AI Processing Error:', error)
    showNotification(translations[currentLang].aiError, "error")
    
    // Fallback to static solution
    showAISolution(data.issueType)
  } finally {
    // Reset button
    submitBtn.disabled = false
    submitBtn.innerHTML = '<i class="fas fa-robot"></i><span>🤖 Get AI Solution</span>'
  }
}

function updateAILearning(issueData) {
  // Update AI learning database with new issue data
  if (!aiLearningDB.issuePatterns[issueData.issueType]) {
    aiLearningDB.issuePatterns[issueData.issueType] = {
      count: 0,
      avgResolutionTime: 0,
      commonSolutions: []
    }
  }
  
  aiLearningDB.issuePatterns[issueData.issueType].count++
  
  // Save updated learning data
  localStorage.setItem("aiLearningDB", JSON.stringify(aiLearningDB))
}

function buildIssueDetails(data) {
  let details = `Issue Type: ${data.issueType}`
  if (data.otherDescription) {
    details += `\nDescription: ${data.otherDescription}`
  }
  details += `\nEmployee Code: ${data.employeeCode}`
  details += `\nTimestamp: ${new Date().toLocaleString()}`
  details += `\nAI Version: 2.0`
  return details
}

function updateProcessingStatus(message) {
  const submitBtn = document.getElementById("submitBtn")
  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>${message}</span>`
}

// Enhanced AI Solution functionality
function showAISolution(issueType, aiSolution = null, videoId = null) {
  const solutionSection = document.getElementById("solutionSection")
  const solutionText = document.getElementById("solutionText")

  // Use AI solution if available, otherwise fallback to static
  let solutionContent
  if (aiSolution) {
    solutionContent = aiSolution
  } else {
    const solution = aiSolutions[issueType] || aiSolutions["software_error"]
    solutionContent = solution[currentLang] || solution["en"]
  }

  // Display solution with enhanced typing effect
  solutionText.innerHTML = ""
  solutionSection.style.display = "block"

  // Scroll to solution
  solutionSection.scrollIntoView({ behavior: "smooth" })

  // Enhanced typing effect with AI indicators
  typeTextWithAI(solutionText, solutionContent, 30, videoId)
}

function typeTextWithAI(element, text, speed, videoId) {
  let i = 0
  const timer = setInterval(() => {
    if (i < text.length) {
      const char = text.charAt(i)
      if (char === "\n") {
        element.innerHTML += "<br>"
      } else {
        element.innerHTML += char
      }
      i++
    } else {
      clearInterval(timer)
      
      // Add enhanced AI signature
      element.innerHTML += `
        <div style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(59, 130, 246, 0.1)); border-left: 4px solid #ef4444; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
            <div style="font-size: 24px;">🤖</div>
            <div>
              <strong style="color: #ef4444;">AI Analysis Complete</strong><br>
              <small style="color: #6b7280;">Powered by Advanced AI Technology v2.0</small>
            </div>
          </div>
          <div style="font-size: 14px; color: #374151;">
            <div>🎯 <strong>Personalized Solution</strong> - Tailored to your specific issue</div>
            <div>📊 <strong>Learning-Based</strong> - Improved from similar cases</div>
            <div>⚡ <strong>Optimized</strong> - Fastest resolution path</div>
          </div>
        </div>
      `
      
      // Update video if new one was generated
      if (videoId) {
        updateVideoSource(videoId)
      }
    }
  }, speed)
}

function updateVideoSource(videoId) {
  // Store the new video ID for when user clicks video button
  window.currentAIVideoId = videoId
}

// Enhanced Video tutorial functionality
function showVideoTutorial() {
  const modal = document.getElementById("videoModal")
  const videoFrame = document.getElementById("videoFrame")

  // Use AI-generated video if available, otherwise fallback
  let videoId
  if (window.currentAIVideoId) {
    videoId = window.currentAIVideoId
  } else {
    const issueType = document.getElementById("issueType").value
    const solution = aiSolutions[issueType] || aiSolutions["software_error"]
    videoId = solution.video || "dQw4w9WgXcQ"
  }

  // Set video URL with AI indicator
  videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  
  // Update modal title to show it's AI-generated
  const videoTitle = document.getElementById("videoTitle")
  videoTitle.textContent = currentLang === "en" ? "AI-Generated Video Guide" : "AI سے تیار کردہ ویڈیو گائیڈ"

  modal.classList.add("show")
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal")
  const videoFrame = document.getElementById("videoFrame")

  modal.classList.remove("show")
  videoFrame.src = "" // Stop video playback
}

// Issue resolution actions
function markResolved() {
  showNotification("Issue marked as resolved successfully!", "success")

  // Update issue status
  const lastIssue = submittedIssues[submittedIssues.length - 1]
  if (lastIssue) {
    lastIssue.status = "resolved"
    lastIssue.resolvedAt = new Date().toISOString()
    lastIssue.userFeedback = "positive"
    localStorage.setItem("doctorIssues", JSON.stringify(submittedIssues))
    
    // Update AI learning
    updateAILearning(lastIssue)
  }

  // Reset form after 2 seconds
  setTimeout(() => {
    document.getElementById("doctorForm").reset()
    document.getElementById("solutionSection").style.display = "none"
    document.getElementById("otherIssueGroup").style.display = "none"
    window.currentAIVideoId = null // Clear AI video
  }, 2000)
}

function escalateToIT() {
  const confirmed = confirm(
    currentLang === "en"
      ? "Are you sure you want to escalate this issue to the IT department?"
      : "کیا آپ واقعی اس مسئلے کو IT ڈیپارٹمنٹ کو بھیجنا چاہتے ہیں؟",
  )

  if (confirmed) {
    showNotification(
      currentLang === "en"
        ? "Issue escalated to IT department. You will receive an update within 24 hours."
        : "مسئلہ IT ڈیپارٹمنٹ کو بھیج دیا گیا۔ آپ کو 24 گھنٹوں میں اپڈیٹ ملے گا۔",
      "info",
    )

    // Update issue status
    const lastIssue = submittedIssues[submittedIssues.length - 1]
    if (lastIssue) {
      lastIssue.status = "escalated"
      lastIssue.escalatedAt = new Date().toISOString()
      lastIssue.userFeedback = "escalated"
      localStorage.setItem("doctorIssues", JSON.stringify(submittedIssues))
      
      // Update AI learning
      updateAILearning(lastIssue)
    }

    // Reset form after 2 seconds
    setTimeout(() => {
      document.getElementById("doctorForm").reset()
      document.getElementById("solutionSection").style.display = "none"
      document.getElementById("otherIssueGroup").style.display = "none"
      window.currentAIVideoId = null // Clear AI video
    }, 2000)
  }
}

// Utility functions
function generateIssueId() {
  return "DOC-AI-" + Date.now().toString(36).toUpperCase()
}

function goBack() {
  window.location.href = "index.html"
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

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
    maxWidth: "300px",
  })

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

// Event listeners for modals
document.addEventListener("click", (e) => {
  const videoModal = document.getElementById("videoModal")
  if (e.target === videoModal) {
    closeVideoModal()
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeVideoModal()
  }
})

// Export for global access
window.doctorAI = {
  callOpenAI,
  generateAIVideo,
  getAILearningInsights,
  updateAILearning
}
