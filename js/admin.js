// Admin Dashboard JavaScript
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "123456"
}

let charts = {}
let allIssues = []

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners()
  checkLoginStatus()
})

// Event listeners
function setupEventListeners() {
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }
}

// Login functionality
function handleLogin(e) {
  e.preventDefault()
  
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  
  // Clear previous errors
  clearErrors()
  
  // Validate credentials
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    // Store login status
    localStorage.setItem("adminLoggedIn", "true")
    localStorage.setItem("adminLoginTime", new Date().toISOString())
    
    // Show dashboard
    showDashboard()
  } else {
    showError("username", "Invalid username or password")
    showError("password", "Invalid username or password")
  }
}

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true"
  const loginTime = localStorage.getItem("adminLoginTime")
  
  if (isLoggedIn && loginTime) {
    // Check if login is still valid (24 hours)
    const loginDate = new Date(loginTime)
    const now = new Date()
    const hoursDiff = (now - loginDate) / (1000 * 60 * 60)
    
    if (hoursDiff < 24) {
      showDashboard()
    } else {
      logout()
    }
  }
}

function showDashboard() {
  document.getElementById("loginSection").style.display = "none"
  document.getElementById("dashboardSection").style.display = "block"
  
  // Load and display data
  loadData()
  updateStats()
  createCharts()
  populateTable()
}

function logout() {
  localStorage.removeItem("adminLoggedIn")
  localStorage.removeItem("adminLoginTime")
  
  document.getElementById("loginSection").style.display = "block"
  document.getElementById("dashboardSection").style.display = "none"
  
  // Clear form
  document.getElementById("loginForm").reset()
}

// Data loading and processing
function loadData() {
  // Load doctor issues
  const doctorIssues = JSON.parse(localStorage.getItem("doctorIssues")) || []
  
  // Load patient issues
  const patientIssues = JSON.parse(localStorage.getItem("patientIssues")) || []
  
  // Combine all issues
  allIssues = [...doctorIssues, ...patientIssues]
  
  // Sort by timestamp (newest first)
  allIssues.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  
  // Show notification if no data exists
  if (allIssues.length === 0) {
    showNotification("No issues found. Submit forms to see data here!", "info")
  }
}

function updateStats() {
  const totalIssues = allIssues.length
  const doctorIssues = allIssues.filter(issue => issue.type === "doctor").length
  const patientIssues = allIssues.filter(issue => issue.type === "patient").length
  const resolvedIssues = allIssues.filter(issue => issue.status === "resolved").length
  
  document.getElementById("totalIssues").textContent = totalIssues
  document.getElementById("doctorIssues").textContent = doctorIssues
  document.getElementById("patientIssues").textContent = patientIssues
  document.getElementById("resolvedIssues").textContent = resolvedIssues
}

// Chart creation
function createCharts() {
  createIssueTypeChart()
  createIssueStatusChart()
  createDailyTrendChart()
  createResolutionTimeChart()
}

function createIssueTypeChart() {
  const ctx = document.getElementById("issueTypeChart").getContext("2d")
  
  // Count issues by type
  const issueTypes = {}
  allIssues.forEach(issue => {
    const type = issue.issueType || "other"
    issueTypes[type] = (issueTypes[type] || 0) + 1
  })
  
  const labels = Object.keys(issueTypes).map(type => formatIssueType(type))
  const data = Object.values(issueTypes)
  
  charts.issueType = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#eab308",
          "#22c55e",
          "#3b82f6",
          "#8b5cf6",
          "#ec4899"
        ],
        borderWidth: 2,
        borderColor: "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  })
}

function createIssueStatusChart() {
  const ctx = document.getElementById("issueStatusChart").getContext("2d")
  
  // Count issues by status
  const statusCounts = {}
  allIssues.forEach(issue => {
    const status = issue.status || "pending"
    statusCounts[status] = (statusCounts[status] || 0) + 1
  })
  
  const labels = Object.keys(statusCounts).map(status => formatStatus(status))
  const data = Object.values(statusCounts)
  
  charts.issueStatus = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Number of Issues",
        data: data,
        backgroundColor: [
          "#ef4444",
          "#22c55e",
          "#3b82f6",
          "#f97316"
        ],
        borderColor: "#ffffff",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  })
}

function createDailyTrendChart() {
  const ctx = document.getElementById("dailyTrendChart").getContext("2d")
  
  // Group issues by date (last 7 days)
  const dailyData = {}
  const today = new Date()
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split("T")[0]
    dailyData[dateStr] = 0
  }
  
  allIssues.forEach(issue => {
    const issueDate = new Date(issue.timestamp).toISOString().split("T")[0]
    if (dailyData.hasOwnProperty(issueDate)) {
      dailyData[issueDate]++
    }
  })
  
  const labels = Object.keys(dailyData).map(date => formatDate(date))
  const data = Object.values(dailyData)
  
  charts.dailyTrend = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Issues per Day",
        data: data,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  })
}

function createResolutionTimeChart() {
  const ctx = document.getElementById("resolutionTimeChart").getContext("2d")
  
  // Calculate resolution times for resolved issues
  const resolvedIssues = allIssues.filter(issue => issue.status === "resolved" && issue.resolvedAt)
  const resolutionTimes = resolvedIssues.map(issue => {
    const created = new Date(issue.timestamp)
    const resolved = new Date(issue.resolvedAt)
    return Math.round((resolved - created) / (1000 * 60 * 60)) // Hours
  })
  
  // Group by time ranges
  const timeRanges = {
    "0-1 hour": 0,
    "1-4 hours": 0,
    "4-8 hours": 0,
    "8-24 hours": 0,
    "24+ hours": 0
  }
  
  resolutionTimes.forEach(time => {
    if (time <= 1) timeRanges["0-1 hour"]++
    else if (time <= 4) timeRanges["1-4 hours"]++
    else if (time <= 8) timeRanges["4-8 hours"]++
    else if (time <= 24) timeRanges["8-24 hours"]++
    else timeRanges["24+ hours"]++
  })
  
  const labels = Object.keys(timeRanges)
  const data = Object.values(timeRanges)
  
  charts.resolutionTime = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          "#22c55e",
          "#3b82f6",
          "#eab308",
          "#f97316",
          "#ef4444"
        ],
        borderWidth: 2,
        borderColor: "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  })
}

// Table population
function populateTable() {
  const tbody = document.getElementById("issuesTableBody")
  tbody.innerHTML = ""
  
  // Show only recent 10 issues
  const recentIssues = allIssues.slice(0, 10)
  
  recentIssues.forEach(issue => {
    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${issue.id}</td>
      <td><span class="badge ${issue.type === 'doctor' ? 'doctor-badge' : 'patient-badge'}">${issue.type}</span></td>
      <td>${formatIssueType(issue.issueType)}</td>
      <td><span class="status-badge ${issue.status}">${formatStatus(issue.status)}</span></td>
      <td>${formatDate(issue.timestamp)}</td>
      <td>
        <div class="table-actions-cell">
          <button class="action-btn small" onclick="viewIssueDetails('${issue.id}')" title="View Details">
            <i class="fas fa-eye"></i>
          </button>
          <div class="status-dropdown">
            <button class="action-btn small dropdown-toggle" onclick="toggleStatusDropdown('${issue.id}')" title="Change Status">
              <i class="fas fa-edit"></i>
            </button>
            <div class="dropdown-menu" id="dropdown-${issue.id}">
              <button class="dropdown-item" onclick="updateIssueStatus('${issue.id}', 'pending')">
                <i class="fas fa-clock"></i> Pending
              </button>
              <button class="dropdown-item" onclick="updateIssueStatus('${issue.id}', 'analyzing')">
                <i class="fas fa-search"></i> Analyzing
              </button>
              <button class="dropdown-item" onclick="updateIssueStatus('${issue.id}', 'solution_provided')">
                <i class="fas fa-lightbulb"></i> Solution Provided
              </button>
              <button class="dropdown-item" onclick="updateIssueStatus('${issue.id}', 'resolved')">
                <i class="fas fa-check"></i> Resolved
              </button>
              <button class="dropdown-item" onclick="updateIssueStatus('${issue.id}', 'escalated')">
                <i class="fas fa-arrow-up"></i> Escalated
              </button>
            </div>
          </div>
        </div>
      </td>
    `
    tbody.appendChild(row)
  })
}

// Utility functions
function formatIssueType(type) {
  const typeMap = {
    "system_crash": "System Crash",
    "login_issue": "Login Problem",
    "printer_not_working": "Printer Issue",
    "slow_performance": "Slow Performance",
    "internet_down": "Internet Down",
    "software_error": "Software Error",
    "hardware_malfunction": "Hardware Issue",
    "other": "Other"
  }
  return typeMap[type] || type
}

function formatStatus(status) {
  const statusMap = {
    "analyzing": "Analyzing",
    "solution_provided": "Solution Provided",
    "resolved": "Resolved",
    "escalated": "Escalated",
    "pending": "Pending"
  }
  return statusMap[status] || status
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })
}

function clearErrors() {
  document.getElementById("usernameError").textContent = ""
  document.getElementById("passwordError").textContent = ""
}

function showError(field, message) {
  document.getElementById(field + "Error").textContent = message
}

// Status update functions
function updateIssueStatus(issueId, newStatus) {
  // Find the issue in allIssues array
  const issueIndex = allIssues.findIndex(issue => issue.id === issueId)
  
  if (issueIndex === -1) {
    showNotification("Issue not found!", "error")
    return
  }
  
  // Update the status
  allIssues[issueIndex].status = newStatus
  
  // Update the corresponding localStorage
  const issue = allIssues[issueIndex]
  if (issue.type === 'doctor') {
    const doctorIssues = JSON.parse(localStorage.getItem("doctorIssues")) || []
    const doctorIndex = doctorIssues.findIndex(docIssue => docIssue.id === issueId)
    if (doctorIndex !== -1) {
      doctorIssues[doctorIndex].status = newStatus
      localStorage.setItem("doctorIssues", JSON.stringify(doctorIssues))
    }
  } else {
    const patientIssues = JSON.parse(localStorage.getItem("patientIssues")) || []
    const patientIndex = patientIssues.findIndex(patIssue => patIssue.id === issueId)
    if (patientIndex !== -1) {
      patientIssues[patientIndex].status = newStatus
      localStorage.setItem("patientIssues", JSON.stringify(patientIssues))
    }
  }
  
  // Close dropdown
  closeAllDropdowns()
  
  // Refresh the dashboard
  updateStats()
  
  // Destroy existing charts
  Object.values(charts).forEach(chart => chart.destroy())
  charts = {}
  
  // Recreate charts
  createCharts()
  populateTable()
  
  showNotification(`Issue status updated to ${formatStatus(newStatus)}!`, "success")
}

function toggleStatusDropdown(issueId) {
  // Close all other dropdowns first
  closeAllDropdowns()
  
  // Toggle the clicked dropdown
  const dropdown = document.getElementById(`dropdown-${issueId}`)
  if (dropdown) {
    dropdown.classList.toggle("show")
  }
}

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown-menu")
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove("show")
  })
}

// Close dropdowns when clicking outside
document.addEventListener("click", function(event) {
  if (!event.target.closest(".status-dropdown")) {
    closeAllDropdowns()
  }
})

// Action functions
function refreshData() {
  loadData()
  updateStats()
  
  // Destroy existing charts
  Object.values(charts).forEach(chart => chart.destroy())
  charts = {}
  
  // Recreate charts
  createCharts()
  populateTable()
  
  showNotification("Data refreshed successfully!", "success")
}

function exportData() {
  const csvContent = generateCSV()
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  
  link.setAttribute("href", url)
  link.setAttribute("download", `issues_report_${new Date().toISOString().split("T")[0]}.csv`)
  link.style.visibility = "hidden"
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  showNotification("Data exported successfully!", "success")
}

function generateCSV() {
  const headers = ["ID", "Type", "Issue Type", "Status", "Date", "Employee Code/Token ID"]
  const rows = allIssues.map(issue => [
    issue.id,
    issue.type,
    formatIssueType(issue.issueType),
    formatStatus(issue.status),
    new Date(issue.timestamp).toLocaleString(),
    issue.employeeCode || issue.tokenId || "N/A"
  ])
  
  return [headers, ...rows].map(row => row.join(",")).join("\n")
}

function viewIssueDetails(issueId) {
  const issue = allIssues.find(i => i.id === issueId)
  if (issue) {
    const details = `
Issue ID: ${issue.id}
Type: ${issue.type}
Issue: ${formatIssueType(issue.issueType)}
Status: ${formatStatus(issue.status)}
Date: ${new Date(issue.timestamp).toLocaleString()}
${issue.employeeCode ? `Employee Code: ${issue.employeeCode}` : `Token ID: ${issue.tokenId}`}
${issue.otherDescription ? `Description: ${issue.otherDescription}` : ""}
    `.trim()
    
    alert(details)
  }
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message
  
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: type === "success" ? "#22c55e" : type === "error" ? "#ef4444" : "#3b82f6",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    zIndex: "3000",
    animation: "slideInRight 0.3s ease",
    maxWidth: "300px"
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

function goBack() {
  window.location.href = "index.html"
}

// Function to clear all stored data
function clearAllData() {
  if (confirm("Are you sure you want to clear all stored data? This action cannot be undone.")) {
    localStorage.removeItem("doctorIssues")
    localStorage.removeItem("patientIssues")
    
    // Reload the dashboard with empty data
    loadData()
    updateStats()
    
    // Destroy existing charts
    Object.values(charts).forEach(chart => chart.destroy())
    charts = {}
    
    // Recreate charts
    createCharts()
    populateTable()
    
    showNotification("All data cleared successfully!", "success")
  }
}
