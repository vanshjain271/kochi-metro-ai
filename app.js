// Enhanced Kochi Metro Intelligence - Main Application JavaScript

class KochiMetroApp {
    constructor() {
        this.currentLanguage = 'en';
        this.currentTheme = 'system';
        this.currentPage = 'dashboard';
        this.aiChatOpen = false;
        this.charts = {};
        this.processingTimer = null;
        this.documentProcessingQueue = [];
        this.notificationsOpen = false;
        
        // Application data
        this.data = {
            translations: {
                "en": {
                    "title": "Kochi Metro Intelligence",
                    "subtitle": "AI-Powered Document Management System",
                    "dashboard": "Dashboard",
                    "documents": "Documents", 
                    "analytics": "Analytics",
                    "workflow": "Workflow",
                    "reports": "Reports",
                    "settings": "Settings",
                    "help": "Help",
                    "upload": "Upload Document",
                    "process": "Process",
                    "insights": "AI Insights",
                    "total_docs": "Total Documents",
                    "processed_today": "Processed Today",
                    "accuracy": "AI Accuracy",
                    "pending": "Pending Review",
                    "welcome": "Welcome to Kochi Metro Intelligence",
                    "ai_assistant": "AI Assistant",
                    "ask_anything": "Ask me anything about the system...",
                    "processing": "Processing",
                    "completed": "Completed",
                    "analyzing": "Analyzing",
                    "approved": "Approved",
                    "rejected": "Rejected",
                    "uploaded": "Uploaded",
                    "drag_drop": "Drag & Drop Documents Here"
                },
                "ml": {
                    "title": "കൊച്ചി മെട്രോ ഇന്റലിജൻസ്",
                    "subtitle": "AI-പവർഡ് ഡോക്യുമെന്റ് മാനേജ്മെന്റ് സിസ്റ്റം",
                    "dashboard": "ഡാഷ്ബോർഡ്",
                    "documents": "ഡോക്യുമെന്റുകൾ",
                    "analytics": "അനലിറ്റിക്സ്",
                    "workflow": "വർക്ക്ഫ്ലോ",
                    "reports": "റിപ്പോർട്ടുകൾ",
                    "settings": "ക്രമീകരണങ്ങൾ",
                    "help": "സഹായം",
                    "upload": "ഡോക്യുമെന്റ് അപ്ലോഡ് ചെയ്യുക",
                    "process": "പ്രോസസ്",
                    "insights": "AI ഇൻസൈറ്റുകൾ",
                    "total_docs": "മൊത്തം ഡോക്യുമെന്റുകൾ",
                    "processed_today": "ഇന്ന് പ്രോസസ് ചെയ്തത്",
                    "accuracy": "AI കൃത്യത",
                    "pending": "അവലോകനം ബാക്കി",
                    "welcome": "കൊച്ചി മെട്രോ ഇന്റലിജൻസിലേക്ക് സ്വാഗതം",
                    "ai_assistant": "AI അസിസ്റ്റന്റ്",
                    "ask_anything": "സിസ്റ്റത്തെ കുറിച്ച് എന്തും ചോദിക്കുക...",
                    "processing": "പ്രോസസ്സിംഗ്",
                    "completed": "പൂർത്തിയായി",
                    "analyzing": "വിശകലനം ചെയ്യുന്നു",
                    "approved": "അനുമോദിച്ചു",
                    "rejected": "നിരസിച്ചു",
                    "uploaded": "അപ്ലോഡ് ചെയ്തു",
                    "drag_drop": "ഫയലുകൾ ഇവിടെ ഡ്രാഗ് ചെയ്ത് ഡ്രോപ്പ് ചെയ്യുക"
                }
            },
            documents: [
                {
                    "id": "DOC-2024-001",
                    "title": "Monthly Passenger Report - December 2024",
                    "type": "Report",
                    "size": "2.4 MB",
                    "status": "completed",
                    "priority": "high",
                    "department": "Operations Team",
                    "date": "2024-12-15",
                    "accuracy": 98.2,
                    "progress": 100,
                    "approver": "John Smith",
                    "comments": 3,
                    "version": "1.2"
                },
                {
                    "id": "DOC-2024-002", 
                    "title": "Safety Inspection Checklist - Red Line",
                    "type": "Checklist",
                    "size": "1.8 MB",
                    "status": "processing",
                    "priority": "medium",
                    "department": "Safety Department",
                    "date": "2024-12-14",
                    "accuracy": null,
                    "progress": 65,
                    "approver": "Sarah Johnson",
                    "comments": 1,
                    "version": "1.0"
                },
                {
                    "id": "DOC-2024-003",
                    "title": "Maintenance Schedule Q1 2025",
                    "type": "Schedule", 
                    "size": "3.2 MB",
                    "status": "analyzing",
                    "priority": "high",
                    "department": "Maintenance Team",
                    "date": "2024-12-13",
                    "accuracy": null,
                    "progress": 35,
                    "approver": "Mike Wilson",
                    "comments": 0,
                    "version": "1.0"
                },
                {
                    "id": "DOC-2024-004",
                    "title": "Financial Audit Report FY24",
                    "type": "Audit",
                    "size": "5.1 MB", 
                    "status": "approved",
                    "priority": "low",
                    "department": "Finance Department",
                    "date": "2024-12-12",
                    "accuracy": 99.1,
                    "progress": 100,
                    "approver": "Lisa Chen",
                    "comments": 5,
                    "version": "2.1"
                },
                {
                    "id": "DOC-2024-005",
                    "title": "Emergency Response Protocol Update",
                    "type": "Protocol",
                    "size": "1.2 MB",
                    "status": "uploaded",
                    "priority": "critical",
                    "department": "Emergency Services",
                    "date": "2024-12-16",
                    "accuracy": null,
                    "progress": 0,
                    "approver": "David Kumar",
                    "comments": 0,
                    "version": "1.0"
                }
            ],
            analytics: {
                "totalDocuments": 14592,
                "processedToday": 58,
                "pendingReview": 8,
                "aiAccuracy": 98.2,
                "avgProcessingTime": "1.2m",
                "successRate": 98.2,
                "activeUsers": 47,
                "monthlyGrowth": 12.5,
                "costSavings": 450000,
                "automationRate": 87.3,
                "systemHealth": {
                    "storage": 78,
                    "processing": 92,
                    "overall": 85,
                    "memory": 68,
                    "network": 95
                },
                "weeklyData": [
                    {"day": "Mon", "processed": 320, "accuracy": 97.8, "avgTime": 75},
                    {"day": "Tue", "processed": 285, "accuracy": 98.1, "avgTime": 68},
                    {"day": "Wed", "processed": 380, "accuracy": 98.5, "avgTime": 72},
                    {"day": "Thu", "processed": 420, "accuracy": 98.9, "avgTime": 65},
                    {"day": "Fri", "processed": 360, "accuracy": 98.2, "avgTime": 70},
                    {"day": "Sat", "processed": 180, "accuracy": 97.5, "avgTime": 78},
                    {"day": "Sun", "processed": 140, "accuracy": 97.1, "avgTime": 82}
                ]
            },
            teamMembers: [
                {"name": "John Smith", "role": "Operations Manager", "status": "online", "documents": 15},
                {"name": "Sarah Johnson", "role": "Safety Officer", "status": "processing", "documents": 8},
                {"name": "Mike Wilson", "role": "Maintenance Lead", "status": "reviewing", "documents": 12},
                {"name": "Lisa Chen", "role": "Finance Analyst", "status": "online", "documents": 6},
                {"name": "David Kumar", "role": "Emergency Coordinator", "status": "away", "documents": 3},
                {"name": "Anna Thomas", "role": "Quality Inspector", "status": "online", "documents": 9}
            ],
            aiResponses: {
                "en": [
                    "I can help you analyze documents, check system performance, or guide you through any process. What would you like to know?",
                    "The system is running smoothly with 98.2% accuracy. Your recent documents are processing well!",
                    "I notice you have some pending documents. Would you like me to help prioritize them?",
                    "Our AI has processed over 14,000 documents this month with excellent accuracy. How can I assist you today?",
                    "I can generate custom reports, analyze document trends, or help with workflow optimization. What interests you?",
                    "Would you like me to summarize the key findings from your latest safety inspection report?",
                    "I've detected an anomaly in document DOC-2024-003. Shall I provide more details?",
                    "Your team's collaboration efficiency has improved by 23% this month. Want to see the detailed analysis?",
                    "I can help you upload documents, check processing status, or generate reports. What would you like to do?",
                    "The current processing queue has 3 documents. Would you like me to show you the estimated completion times?"
                ],
                "ml": [
                    "ഞാൻ നിങ്ങളെ ഡോക്യുമെന്റുകൾ വിശകലനം ചെയ്യാനോ സിസ്റ്റം പ്രകടനം പരിശോധിക്കാനോ ഏതെങ്കിലും പ്രക്രിയയിലൂടെ നയിക്കാനോ സഹായിക്കാം. നിങ്ങൾ എന്താണ് അറിയാൻ ആഗ്രഹിക്കുന്നത്?",
                    "സിസ്റ്റം 98.2% കൃത്യതയോടെ സുഗമമായി പ്രവർത്തിക്കുന്നു. നിങ്ങളുടെ സമീപകാല ഡോക്യുമെന്റുകൾ നന്നായി പ്രോസസ് ചെയ്യുന്നു!",
                    "നിങ്ങൾക്ക് ചില പെൻഡിംഗ് ഡോക്യുമെന്റുകൾ ഉണ്ടെന്ന് ഞാൻ ശ്രദ്ധിക്കുന്നു. അവയ്ക്ക് മുൻഗണന നൽകാൻ ഞാൻ സഹായിക്കണോ?",
                    "ഞങ്ങളുടെ AI ഈ മാസം മികച്ച കൃത്യതയോടെ 14,000-ലധികം ഡോക്യുമെന്റുകൾ പ്രോസസ് ചെയ്തിട്ടുണ്ട്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
                    "ഞാൻ കസ്റ്റം റിപ്പോർട്ടുകൾ ജനറേറ്റ് ചെയ്യാനോ ഡോക്യുമെന്റ് ട്രെൻഡുകൾ വിശകലനം ചെയ്യാനോ വർക്ക്ഫ്ലോ ഒപ്റ്റിമൈസേഷനിൽ സഹായിക്കാനോ കഴിയും. നിങ്ങൾക്ക് എന്താണ് താൽപ്പര്യം?",
                    "നിങ്ങളുടെ ഏറ്റവും പുതിയ സേഫ്റ്റി ഇൻസ്പെക്ഷൻ റിപ്പോർട്ടിൽ നിന്നുള്ള പ്രധാന കണ്ടെത്തലുകൾ ഞാൻ സംഗ്രഹിക്കണോ?",
                    "ഡോക്യുമെന്റ് DOC-2024-003-ൽ ഞാൻ ഒരു അനോമലി കണ്ടെത്തി. കൂടുതൽ വിശദാംശങ്ങൾ നൽകണോ?",
                    "നിങ്ങളുടെ ടീമിന്റെ കൊളാബറേഷൻ കാര്യക്ഷമത ഈ മാസം 23% മെച്ചപ്പെട്ടിട്ടുണ്ട്. വിശദമായ വിശകലനം കാണാൻ ആഗ്രഹിക്കുന്നുണ്ടോ?",
                    "ഡോക്യുമെന്റുകൾ അപ്ലോഡ് ചെയ്യാനോ പ്രോസസിംഗ് സ്റ്റാറ്റസ് പരിശോധിക്കാനോ റിപ്പോർട്ടുകൾ ജനറേറ്റ് ചെയ്യാനോ ഞാൻ സഹായിക്കാം. നിങ്ങൾ എന്തുചെയ്യാൻ ആഗ്രഹിക്കുന്നു?",
                    "നിലവിലെ പ്രോസസിംഗ് ക്യൂവിൽ 3 ഡോക്യുമെന്റുകൾ ഉണ്ട്. പ്രതീക്ഷിക്കുന്ന പൂർത്തീകരണ സമയം കാണിക്കണോ?"
                ]
            },
            reports: [
                {"name": "Weekly Performance Summary", "type": "automated", "schedule": "Weekly", "lastGenerated": "2024-12-15"},
                {"name": "Document Processing Efficiency", "type": "custom", "schedule": "Monthly", "lastGenerated": "2024-12-01"},
                {"name": "Compliance Audit Trail", "type": "compliance", "schedule": "Quarterly", "lastGenerated": "2024-10-01"},
                {"name": "Cost Analysis Report", "type": "financial", "schedule": "Monthly", "lastGenerated": "2024-12-01"}
            ],
            notifications: [
                {"type": "alert", "message": "Emergency Response Protocol requires immediate approval", "time": "2 min ago", "priority": "critical"},
                {"type": "info", "message": "Batch processing completed successfully for 47 documents", "time": "15 min ago", "priority": "medium"},
                {"type": "warning", "message": "Storage usage at 78% - cleanup recommended", "time": "1 hour ago", "priority": "medium"},
                {"type": "success", "message": "AI model accuracy improved to 98.2%", "time": "2 hours ago", "priority": "low"}
            ],
            workflowActivities: [
                {
                    "id": "WF-001",
                    "title": "Document Approval Request",
                    "description": "Emergency Response Protocol needs approval from David Kumar",
                    "time": "5 minutes ago",
                    "status": "pending",
                    "user": "System"
                },
                {
                    "id": "WF-002",
                    "title": "Batch Processing Completed",
                    "description": "Successfully processed 12 maintenance documents",
                    "time": "20 minutes ago",
                    "status": "completed",
                    "user": "AI System"
                },
                {
                    "id": "WF-003",
                    "title": "Quality Review Assigned",
                    "description": "Anna Thomas assigned to review safety checklist",
                    "time": "1 hour ago",
                    "status": "active",
                    "user": "John Smith"
                }
            ]
        };

        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        setTimeout(() => {
            this.setupEventListeners();
            this.initializeCharts();
            this.renderDocuments();
            this.animateCounters();
            this.setupFileUpload();
            this.setupAIAssistant();
            this.initializeProcessingPipeline();
            this.populateScheduledReports();
            this.populateWorkflowTimeline();
            this.populateNotifications();
            this.startRealTimeUpdates();
            this.showToast('Welcome to Enhanced Kochi Metro Intelligence!', 'success');
        }, 100);
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Navigation event listeners - use more specific targeting
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const page = btn.getAttribute('data-page');
                console.log('Navigation clicked:', page);
                if (page) {
                    this.switchPage(page);
                }
            });
        });
        
        // Use event delegation for dynamic elements
        document.addEventListener('click', (e) => {
            // Upload buttons
            if (e.target.id === 'upload-btn' || e.target.closest('#upload-btn') ||
                e.target.id === 'quick-upload' || e.target.closest('#quick-upload')) {
                e.preventDefault();
                document.getElementById('file-input')?.click();
            }
            
            // Theme toggle
            if (e.target.classList.contains('theme-toggle') || e.target.closest('.theme-toggle')) {
                e.preventDefault();
                this.toggleTheme();
            }
            
            // Theme options
            if (e.target.classList.contains('theme-option')) {
                e.preventDefault();
                const theme = e.target.getAttribute('data-theme');
                if (theme) {
                    this.setTheme(theme);
                }
            }
            
            // Notification button
            if (e.target.id === 'notification-btn' || e.target.closest('#notification-btn')) {
                e.preventDefault();
                this.toggleNotifications();
            }
            
            // AI Assistant
            if (e.target.id === 'ai-toggle' || e.target.closest('#ai-toggle')) {
                e.preventDefault();
                this.toggleAIChat();
            }
            
            if (e.target.id === 'ai-close' || e.target.closest('#ai-close')) {
                e.preventDefault();
                this.toggleAIChat();
            }
            
            if (e.target.id === 'ai-send' || e.target.closest('#ai-send')) {
                e.preventDefault();
                this.sendAIMessage();
            }
            
            // Suggestion buttons
            if (e.target.classList.contains('suggestion-btn')) {
                e.preventDefault();
                this.handleAISuggestion(e.target.textContent);
            }
            
            // Processing pipeline controls
            if (e.target.id === 'pause-processing') {
                e.preventDefault();
                this.pauseProcessing();
            }
            
            if (e.target.id === 'process-batch') {
                e.preventDefault();
                this.processBatch();
            }
            
            // Quick actions
            if (e.target.id === 'generate-report') {
                e.preventDefault();
                this.generateQuickReport();
            }
            
            if (e.target.id === 'review-pending') {
                e.preventDefault();
                this.reviewPendingDocuments();
            }
            
            // View controls
            if (e.target.classList.contains('view-btn')) {
                e.preventDefault();
                this.switchView(e.target.dataset.view);
            }
            
            // Report buttons
            if (e.target.classList.contains('report-btn')) {
                e.preventDefault();
                this.generateReport(e.target.textContent);
            }
            
            // Modal close
            if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
                e.preventDefault();
                this.closeModal();
            }
            
            // Document items
            if (e.target.closest('.document-item')) {
                const docId = e.target.closest('.document-item').dataset.docId;
                if (docId) {
                    this.showDocumentDetails(docId);
                }
            }
        });

        // Language switcher
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('language-selector') || e.target.classList.contains('language-settings')) {
                this.switchLanguage(e.target.value);
            }
            
            // Filters
            if (e.target.id === 'status-filter' || e.target.id === 'type-filter' || e.target.id === 'priority-filter') {
                this.applyFilters();
            }
            
            if (e.target.id === 'sort-by') {
                this.sortDocuments(e.target.value);
            }
        });

        // Search
        document.addEventListener('input', (e) => {
            if (e.target.id === 'doc-search') {
                this.debounce(() => this.applyFilters(), 300)();
            }
            
            if (e.target.id === 'ai-input') {
                // Auto-resize textarea
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
            }
        });

        // Enter key for AI input
        document.addEventListener('keypress', (e) => {
            if (e.target.id === 'ai-input' && e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendAIMessage();
            }
        });
    }

    switchPage(page) {
        console.log('Switching to page:', page);
        
        // Update navigation - remove active from all first
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active to current page
        const activeBtn = document.querySelector(`[data-page="${page}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            console.log('Added active class to:', activeBtn);
        }

        // Hide all pages first
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });
        
        // Show target page
        const targetPage = document.getElementById(page);
        if (targetPage) {
            targetPage.classList.add('active');
            console.log('Switched to page:', page);
        } else {
            console.error('Page not found:', page);
        }

        this.currentPage = page;

        // Initialize page-specific content with delay to ensure DOM is ready
        setTimeout(() => {
            if (page === 'analytics') {
                this.initializeAnalyticsCharts();
            } else if (page === 'dashboard') {
                this.animateCounters();
                this.initializeCharts();
            } else if (page === 'documents') {
                this.renderDocuments();
            } else if (page === 'workflow') {
                this.populateWorkflowTimeline();
            } else if (page === 'reports') {
                this.populateScheduledReports();
            }
        }, 200);
        
        // Show success message for navigation
        this.showToast(`Navigated to ${page.charAt(0).toUpperCase() + page.slice(1)}`, 'info', 2000);
    }

    switchLanguage(lang) {
        console.log('Switching language to:', lang);
        this.currentLanguage = lang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            const translation = this.data.translations[lang][key];
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update all language selectors
        document.querySelectorAll('.language-selector, .language-settings').forEach(select => {
            select.value = lang;
        });

        // Update AI assistant welcome message
        this.updateAIWelcomeMessage();

        const langNames = { 'en': 'English', 'ml': 'Malayalam' };
        this.showToast(`Language switched to ${langNames[lang]}`, 'info');
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        console.log('Setting theme to:', theme);
        this.currentTheme = theme;
        
        // Update theme options
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeThemeBtn = document.querySelector(`[data-theme="${theme}"]`);
        if (activeThemeBtn) {
            activeThemeBtn.classList.add('active');
        }

        // Apply theme
        if (theme === 'system') {
            document.documentElement.removeAttribute('data-color-scheme');
        } else {
            document.documentElement.setAttribute('data-color-scheme', theme);
        }

        this.showToast(`Theme switched to ${theme}`, 'info');
    }

    initializeCharts() {
        // Clear existing charts first
        if (this.charts.weekly) {
            this.charts.weekly.destroy();
            this.charts.weekly = null;
        }
        
        // Weekly chart on dashboard
        const weeklyCtx = document.getElementById('weeklyChart');
        if (weeklyCtx) {
            this.charts.weekly = new Chart(weeklyCtx, {
                type: 'line',
                data: {
                    labels: this.data.analytics.weeklyData.map(d => d.day),
                    datasets: [{
                        label: 'Documents Processed',
                        data: this.data.analytics.weeklyData.map(d => d.processed),
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.1)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }
    }

    initializeAnalyticsCharts() {
        // Clear existing analytics charts
        if (this.charts.trends) {
            this.charts.trends.destroy();
            this.charts.trends = null;
        }
        if (this.charts.accuracyType) {
            this.charts.accuracyType.destroy();
            this.charts.accuracyType = null;
        }
        
        // Processing trends chart
        const trendsCtx = document.getElementById('trendsChart');
        if (trendsCtx) {
            this.charts.trends = new Chart(trendsCtx, {
                type: 'line',
                data: {
                    labels: this.data.analytics.weeklyData.map(d => d.day),
                    datasets: [
                        {
                            label: 'Documents Processed',
                            data: this.data.analytics.weeklyData.map(d => d.processed),
                            borderColor: '#1FB8CD',
                            backgroundColor: 'rgba(31, 184, 205, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Average Processing Time (min)',
                            data: this.data.analytics.weeklyData.map(d => d.avgTime),
                            borderColor: '#FFC185',
                            backgroundColor: 'rgba(255, 193, 133, 0.1)',
                            fill: true,
                            tension: 0.4,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: {
                                drawOnChartArea: false,
                            }
                        }
                    }
                }
            });
        }

        // Accuracy by type chart
        const accuracyTypeCtx = document.getElementById('accuracyByTypeChart');
        if (accuracyTypeCtx) {
            this.charts.accuracyType = new Chart(accuracyTypeCtx, {
                type: 'bar',
                data: {
                    labels: ['Reports', 'Checklists', 'Schedules', 'Audits', 'Protocols'],
                    datasets: [{
                        label: 'Accuracy %',
                        data: [98.5, 97.2, 96.8, 99.1, 98.9],
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 95,
                            max: 100
                        }
                    }
                }
            });
        }
    }

    animateCounters() {
        const counters = [
            { id: 'total-docs', target: this.data.analytics.totalDocuments },
            { id: 'processed-today', target: this.data.analytics.processedToday },
            { id: 'accuracy', target: this.data.analytics.aiAccuracy, suffix: '%' },
            { id: 'pending', target: this.data.analytics.pendingReview }
        ];

        counters.forEach(counter => {
            const element = document.getElementById(counter.id);
            if (element) {
                this.animateValue(element, 0, counter.target, 2000, counter.suffix);
            }
        });
    }

    animateValue(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (end - start) * progress);
            
            element.textContent = current.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }

    initializeProcessingPipeline() {
        // Populate pipeline with current documents
        this.updatePipelineDisplay();
        
        // Start automated processing
        this.startAutomaticProcessing();
    }

    updatePipelineDisplay() {
        const stages = {
            'uploaded': document.getElementById('stage-uploaded'),
            'processing': document.getElementById('stage-processing'),
            'analyzing': document.getElementById('stage-analyzing'),
            'completed': document.getElementById('stage-completed')
        };

        // Clear existing items
        Object.values(stages).forEach(stage => {
            if (stage) stage.innerHTML = '';
        });

        // Group documents by status
        const docsByStatus = this.data.documents.reduce((acc, doc) => {
            const status = doc.status === 'approved' || doc.status === 'rejected' ? 'completed' : doc.status;
            if (!acc[status]) acc[status] = [];
            acc[status].push(doc);
            return acc;
        }, {});

        // Update counts
        document.querySelectorAll('.stage').forEach(stage => {
            const statusName = stage.querySelector('.stage-name').textContent.toLowerCase();
            const count = docsByStatus[statusName]?.length || 0;
            const countElement = stage.querySelector('.stage-count');
            if (countElement) {
                countElement.textContent = count;
            }
        });

        // Add document items to stages
        Object.entries(docsByStatus).forEach(([status, docs]) => {
            const stage = stages[status];
            if (stage) {
                docs.slice(0, 3).forEach(doc => { // Show max 3 items per stage
                    const item = document.createElement('div');
                    item.className = `pipeline-item ${status}`;
                    item.innerHTML = `
                        <div class="pipeline-item-title">${doc.title.substring(0, 30)}...</div>
                        <div class="pipeline-item-type">${doc.type}</div>
                        ${doc.progress !== undefined ? `<div class="pipeline-item-progress" style="width: ${doc.progress}%"></div>` : ''}
                    `;
                    stage.appendChild(item);
                });
            }
        });
    }

    startAutomaticProcessing() {
        // Process documents automatically
        this.processingTimer = setInterval(() => {
            this.processNextDocument();
        }, 3000); // Process every 3 seconds
    }

    processNextDocument() {
        // Find documents to advance
        const toUpload = this.data.documents.find(doc => doc.status === 'uploaded' && doc.progress === 0);
        const toProcess = this.data.documents.find(doc => doc.status === 'processing' && doc.progress < 100);
        const toAnalyze = this.data.documents.find(doc => doc.status === 'analyzing' && doc.progress < 100);

        if (toUpload) {
            toUpload.status = 'processing';
            toUpload.progress = 10;
            this.showToast(`Processing started: ${toUpload.title.substring(0, 30)}...`, 'info');
        } else if (toProcess) {
            toProcess.progress = Math.min(toProcess.progress + 15, 100);
            if (toProcess.progress === 100) {
                toProcess.status = 'analyzing';
                toProcess.progress = 0;
            }
        } else if (toAnalyze) {
            toAnalyze.progress = Math.min(toAnalyze.progress + 20, 100);
            if (toAnalyze.progress === 100) {
                toAnalyze.status = 'completed';
                toAnalyze.accuracy = Math.floor(Math.random() * 5) + 95; // 95-99%
                this.showToast(`Document analysis completed: ${toAnalyze.title.substring(0, 30)}...`, 'success');
            }
        }

        this.updatePipelineDisplay();
        this.renderDocuments();
    }

    pauseProcessing() {
        if (this.processingTimer) {
            clearInterval(this.processingTimer);
            this.processingTimer = null;
            this.showToast('Document processing paused', 'warning');
            const btn = document.getElementById('pause-processing');
            if (btn) {
                btn.textContent = 'Resume';
                btn.onclick = () => this.resumeProcessing();
            }
        }
    }

    resumeProcessing() {
        this.startAutomaticProcessing();
        this.showToast('Document processing resumed', 'success');
        const btn = document.getElementById('pause-processing');
        if (btn) {
            btn.textContent = 'Pause';
            btn.onclick = () => this.pauseProcessing();
        }
    }

    processBatch() {
        const pendingDocs = this.data.documents.filter(doc => 
            doc.status === 'uploaded' || (doc.status === 'processing' && doc.progress < 100)
        );

        if (pendingDocs.length === 0) {
            this.showToast('No documents to process', 'info');
            return;
        }

        this.showLoading('Processing batch...');
        
        let progressValue = 0;
        const progressInterval = setInterval(() => {
            progressValue += 10;
            this.updateLoadingProgress(progressValue, `Processing batch... ${progressValue}%`);
            
            if (progressValue >= 100) {
                clearInterval(progressInterval);
                
                // Complete batch processing
                pendingDocs.forEach(doc => {
                    doc.status = 'completed';
                    doc.progress = 100;
                    doc.accuracy = Math.floor(Math.random() * 5) + 95;
                });
                
                this.hideLoading();
                this.updatePipelineDisplay();
                this.renderDocuments();
                this.showToast(`Batch processing completed for ${pendingDocs.length} documents`, 'success');
            }
        }, 200);
    }

    renderDocuments() {
        const container = document.getElementById('documents-list');
        if (!container) return;

        container.innerHTML = '';
        
        const filteredDocs = this.getFilteredDocuments();
        
        if (filteredDocs.length === 0) {
            container.innerHTML = '<div class="no-documents">No documents found matching your criteria.</div>';
            return;
        }
        
        filteredDocs.forEach(doc => {
            const docElement = this.createDocumentElement(doc);
            container.appendChild(docElement);
        });
    }

    createDocumentElement(doc) {
        const div = document.createElement('div');
        div.className = 'document-item';
        div.setAttribute('data-doc-id', doc.id);
        
        const statusClass = this.getStatusClass(doc.status);
        const priorityClass = doc.priority;
        
        const iconBg = this.getDocTypeBackground(doc.type);
        const statusText = this.data.translations[this.currentLanguage][doc.status] || doc.status;

        div.innerHTML = `
            <div class="doc-icon" style="background: ${iconBg};">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                </svg>
            </div>
            <div class="doc-info">
                <div class="doc-title">${doc.title}</div>
                <div class="doc-meta">
                    <span>${doc.type}</span>
                    <span>${doc.size}</span>
                    <span>${doc.department}</span>
                    <span>${new Date(doc.date).toLocaleDateString()}</span>
                    <span class="priority-${priorityClass}">${doc.priority.toUpperCase()}</span>
                </div>
                ${doc.comments > 0 ? `<div class="doc-comments">${doc.comments} comments</div>` : ''}
            </div>
            ${doc.progress !== undefined && doc.progress < 100 ? `
                <div class="doc-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${doc.progress}%"></div>
                    </div>
                    <span class="doc-progress-text">${doc.progress}%</span>
                </div>
            ` : ''}
            <div class="doc-actions">
                <span class="status status--${statusClass}">${statusText}</span>
                ${doc.accuracy ? `<span class="status status--info">${doc.accuracy}% accuracy</span>` : ''}
                ${doc.status === 'completed' ? `
                    <button class="btn btn--sm btn--secondary" onclick="app.approveDocument('${doc.id}')">Approve</button>
                ` : ''}
            </div>
        `;

        return div;
    }

    getStatusClass(status) {
        const statusMap = {
            'uploaded': 'info',
            'processing': 'warning', 
            'analyzing': 'info',
            'completed': 'success',
            'approved': 'success',
            'rejected': 'error'
        };
        return statusMap[status] || 'info';
    }

    getDocTypeBackground(type) {
        const bgMap = {
            'Report': 'var(--color-bg-1)',
            'Checklist': 'var(--color-bg-2)',
            'Schedule': 'var(--color-bg-3)',
            'Audit': 'var(--color-bg-4)',
            'Protocol': 'var(--color-bg-5)'
        };
        return bgMap[type] || 'var(--color-bg-1)';
    }

    getFilteredDocuments() {
        let filtered = [...this.data.documents];
        
        // Apply search filter
        const searchTerm = document.getElementById('doc-search')?.value?.toLowerCase() || '';
        if (searchTerm) {
            filtered = filtered.filter(doc => 
                doc.title.toLowerCase().includes(searchTerm) ||
                doc.department.toLowerCase().includes(searchTerm) ||
                doc.type.toLowerCase().includes(searchTerm)
            );
        }
        
        // Apply status filter
        const statusFilter = document.getElementById('status-filter')?.value || '';
        if (statusFilter) {
            filtered = filtered.filter(doc => doc.status === statusFilter);
        }
        
        // Apply type filter
        const typeFilter = document.getElementById('type-filter')?.value || '';
        if (typeFilter) {
            filtered = filtered.filter(doc => doc.type === typeFilter);
        }
        
        // Apply priority filter
        const priorityFilter = document.getElementById('priority-filter')?.value || '';
        if (priorityFilter) {
            filtered = filtered.filter(doc => doc.priority === priorityFilter);
        }
        
        return filtered;
    }

    applyFilters() {
        this.renderDocuments();
    }

    sortDocuments(sortBy) {
        const sortMap = {
            'date': (a, b) => new Date(b.date) - new Date(a.date),
            'name': (a, b) => a.title.localeCompare(b.title),
            'status': (a, b) => a.status.localeCompare(b.status),
            'priority': (a, b) => {
                const priorities = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 };
                return priorities[b.priority] - priorities[a.priority];
            }
        };
        
        if (sortMap[sortBy]) {
            this.data.documents.sort(sortMap[sortBy]);
            this.renderDocuments();
        }
    }

    switchView(view) {
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${view}"]`)?.classList.add('active');
        
        // Update document display based on view
        const container = document.getElementById('documents-list');
        if (container) {
            container.className = `documents-list view-${view}`;
        }
    }

    setupFileUpload() {
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');

        if (!uploadArea || !fileInput) return;

        // Click to upload
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        // Drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            this.handleFileUpload(e.dataTransfer.files);
        });

        // File input change
        fileInput.addEventListener('change', (e) => {
            this.handleFileUpload(e.target.files);
        });
    }

    handleFileUpload(files) {
        if (files.length === 0) return;

        this.showLoading('Uploading and processing documents...');
        
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 5;
            this.updateLoadingProgress(progress, `Processing ${files.length} file(s)... ${progress}%`);
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                
                Array.from(files).forEach(file => {
                    const newDoc = {
                        id: `DOC-2024-${String(this.data.documents.length + 1).padStart(3, '0')}`,
                        title: file.name,
                        type: this.getFileType(file.name),
                        size: this.formatFileSize(file.size),
                        status: 'uploaded',
                        priority: 'medium',
                        department: 'Operations Team',
                        date: new Date().toISOString().split('T')[0],
                        accuracy: null,
                        progress: 0,
                        approver: 'John Smith',
                        comments: 0,
                        version: '1.0'
                    };

                    this.data.documents.unshift(newDoc);
                });

                this.hideLoading();
                this.renderDocuments();
                this.updatePipelineDisplay();
                this.showToast(`${files.length} file(s) uploaded successfully!`, 'success');
                
                // Auto-switch to documents page
                if (this.currentPage === 'dashboard') {
                    this.switchPage('documents');
                }
            }
        }, 100);
    }

    getFileType(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        const typeMap = {
            'pdf': 'Report',
            'doc': 'Document',
            'docx': 'Document',
            'txt': 'Document',
            'xls': 'Schedule',
            'xlsx': 'Schedule'
        };
        return typeMap[ext] || 'Document';
    }

    formatFileSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        if (bytes === 0) return '0 Bytes';
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
    }

    setupAIAssistant() {
        // Show proactive AI suggestions periodically
        setInterval(() => {
            if (!this.aiChatOpen && Math.random() > 0.7) {
                this.showAIProactiveSuggestion();
            }
        }, 30000); // Every 30 seconds
    }

    toggleAIChat() {
        const aiChat = document.getElementById('ai-chat');
        this.aiChatOpen = !this.aiChatOpen;
        
        if (this.aiChatOpen) {
            aiChat.classList.remove('hidden');
        } else {
            aiChat.classList.add('hidden');
        }
    }

    sendAIMessage() {
        const input = document.getElementById('ai-input');
        const message = input.value.trim();
        
        if (!message) return;

        this.addAIMessage(message, 'user');
        input.value = '';
        input.style.height = 'auto';

        // Show typing indicator
        this.addAITypingIndicator();

        // Simulate AI thinking
        setTimeout(() => {
            this.removeAITypingIndicator();
            const response = this.generateAIResponse(message);
            this.addAIMessage(response, 'bot');
            
            // Perform actions based on message
            this.performAIAction(message);
        }, 1500);
    }

    addAIMessage(message, sender) {
        const messagesContainer = document.getElementById('ai-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-message--${sender}`;
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${sender === 'bot' ? 
                        '<circle cx="12" cy="12" r="3"/><path d="m8 4.5 8 7.5-8 7.5"/>' : 
                        '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'}
                </svg>
            </div>
            <div class="message-content">${message}</div>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    addAITypingIndicator() {
        const messagesContainer = document.getElementById('ai-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message ai-message--bot typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="m8 4.5 8 7.5-8 7.5"/>
                </svg>
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;

        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    removeAITypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    generateAIResponse(userMessage) {
        const responses = this.data.aiResponses[this.currentLanguage];
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('document') || lowerMessage.includes('file') || lowerMessage.includes('upload')) {
            return responses[8] || responses[0];
        } else if (lowerMessage.includes('processing') || lowerMessage.includes('queue') || lowerMessage.includes('status')) {
            return responses[9] || responses[1];
        } else if (lowerMessage.includes('system') || lowerMessage.includes('performance') || lowerMessage.includes('health')) {
            return responses[1] || responses[0];
        } else if (lowerMessage.includes('help') || lowerMessage.includes('guide') || lowerMessage.includes('how')) {
            return responses[4] || responses[0];
        } else if (lowerMessage.includes('analytics') || lowerMessage.includes('chart') || lowerMessage.includes('data')) {
            return responses[7] || responses[3];
        } else if (lowerMessage.includes('report') || lowerMessage.includes('summary')) {
            return responses[5] || responses[4];
        } else {
            // Return a random response for variety
            const randomIndex = Math.floor(Math.random() * responses.length);
            return responses[randomIndex];
        }
    }

    performAIAction(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('show') && lowerMessage.includes('dashboard')) {
            this.switchPage('dashboard');
        } else if (lowerMessage.includes('generate') && lowerMessage.includes('report')) {
            this.generateQuickReport();
        } else if (lowerMessage.includes('check') && lowerMessage.includes('processing')) {
            this.switchPage('documents');
        } else if (lowerMessage.includes('system') && lowerMessage.includes('health')) {
            // Scroll to system health on dashboard
            if (this.currentPage !== 'dashboard') {
                this.switchPage('dashboard');
            }
            setTimeout(() => {
                document.querySelector('.system-health')?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    }

    handleAISuggestion(suggestion) {
        const suggestionMap = {
            'Check processing status': () => this.switchPage('documents'),
            'Generate daily report': () => this.generateQuickReport(),
            'Show system health': () => {
                this.switchPage('dashboard');
                setTimeout(() => {
                    document.querySelector('.system-health')?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        };

        const action = suggestionMap[suggestion];
        if (action) {
            action();
            this.addAIMessage(`I've ${suggestion.toLowerCase()} for you.`, 'bot');
        }
    }

    updateAIWelcomeMessage() {
        const welcomeMessage = document.querySelector('.ai-message--bot .message-content');
        if (welcomeMessage) {
            welcomeMessage.innerHTML = `
                <span>${this.data.translations[this.currentLanguage].ask_anything}</span>
                <div class="message-suggestions">
                    <button class="suggestion-btn">Check processing status</button>
                    <button class="suggestion-btn">Generate daily report</button>
                    <button class="suggestion-btn">Show system health</button>
                </div>
            `;
        }
    }

    showAIProactiveSuggestion() {
        if (this.aiChatOpen) return;
        
        const suggestions = this.data.aiResponses[this.currentLanguage];
        const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
        this.showToast(`AI: ${randomSuggestion}`, 'info', 6000);
    }

    populateScheduledReports() {
        const container = document.getElementById('scheduled-reports');
        if (!container) return;

        container.innerHTML = '';
        
        this.data.reports.forEach(report => {
            const reportDiv = document.createElement('div');
            reportDiv.className = 'scheduled-report';
            reportDiv.innerHTML = `
                <div class="report-info">
                    <h4>${report.name}</h4>
                    <p>${report.schedule} • Last: ${report.lastGenerated}</p>
                </div>
                <button class="btn btn--sm btn--secondary">View</button>
            `;
            container.appendChild(reportDiv);
        });
    }

    populateWorkflowTimeline() {
        const container = document.getElementById('workflow-timeline');
        if (!container) return;

        container.innerHTML = '';
        
        this.data.workflowActivities.forEach(activity => {
            const activityDiv = document.createElement('div');
            activityDiv.className = 'timeline-item';
            activityDiv.innerHTML = `
                <div class="timeline-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </div>
                <div class="timeline-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                    <div class="timeline-meta">
                        <span class="status status--${activity.status === 'completed' ? 'success' : activity.status === 'pending' ? 'warning' : 'info'}">${activity.status}</span>
                        <span>${activity.time}</span>
                        <span>by ${activity.user}</span>
                    </div>
                </div>
            `;
            container.appendChild(activityDiv);
        });
    }

    populateNotifications() {
        const container = document.getElementById('notifications-list');
        if (!container) return;

        container.innerHTML = '';
        
        this.data.notifications.forEach(notification => {
            const notificationDiv = document.createElement('div');
            notificationDiv.className = 'notification-item';
            notificationDiv.innerHTML = `
                <div class="notification-icon ${notification.type}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${this.getNotificationIcon(notification.type)}
                    </svg>
                </div>
                <div class="notification-content">
                    <h4>${notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}</h4>
                    <p>${notification.message}</p>
                    <div class="notification-time">${notification.time}</div>
                </div>
            `;
            container.appendChild(notificationDiv);
        });
    }

    getNotificationIcon(type) {
        const icons = {
            'alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="m12 17 .01 0"/>',
            'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="m12 8 .01 0"/>',
            'warning': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="m12 17 .01 0"/>',
            'success': '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>'
        };
        return icons[type] || icons.info;
    }

    toggleNotifications() {
        const panel = document.getElementById('notifications-panel');
        this.notificationsOpen = !this.notificationsOpen;
        
        if (this.notificationsOpen) {
            panel.classList.remove('hidden');
        } else {
            panel.classList.add('hidden');
        }
    }

    generateQuickReport() {
        this.showLoading('Generating comprehensive report...');
        
        setTimeout(() => {
            this.hideLoading();
            this.showToast('Daily performance report generated successfully!', 'success');
            
            // Simulate opening report
            this.showDocumentDetails('REPORT-' + Date.now());
        }, 2000);
    }

    generateReport(reportType) {
        this.showLoading(`Generating ${reportType}...`);
        
        setTimeout(() => {
            this.hideLoading();
            this.showToast(`${reportType} generated successfully!`, 'success');
        }, 1500);
    }

    reviewPendingDocuments() {
        const pendingDocs = this.data.documents.filter(doc => doc.status === 'completed');
        if (pendingDocs.length === 0) {
            this.showToast('No documents pending review', 'info');
            return;
        }
        
        this.switchPage('documents');
        setTimeout(() => {
            document.getElementById('status-filter').value = 'completed';
            this.applyFilters();
        }, 300);
    }

    approveDocument(docId) {
        const doc = this.data.documents.find(d => d.id === docId);
        if (doc) {
            doc.status = 'approved';
            this.renderDocuments();
            this.updatePipelineDisplay();
            this.showToast(`Document ${docId} approved successfully!`, 'success');
        }
    }

    showDocumentDetails(docId) {
        const doc = this.data.documents.find(d => d.id === docId) || {
            id: docId,
            title: 'Generated Report',
            type: 'Report',
            content: 'Sample report content...'
        };
        
        const modal = document.getElementById('modal-overlay');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = `
            <div class="document-details">
                <div class="doc-header">
                    <h3>${doc.title}</h3>
                    <div class="doc-badges">
                        <span class="badge">${doc.type}</span>
                        <span class="badge priority-${doc.priority || 'medium'}">${(doc.priority || 'medium').toUpperCase()}</span>
                    </div>
                </div>
                <div class="doc-metadata">
                    <div class="metadata-row">
                        <span class="label">Document ID:</span>
                        <span class="value">${doc.id}</span>
                    </div>
                    <div class="metadata-row">
                        <span class="label">Department:</span>
                        <span class="value">${doc.department || 'System Generated'}</span>
                    </div>
                    <div class="metadata-row">
                        <span class="label">Created:</span>
                        <span class="value">${doc.date || new Date().toLocaleDateString()}</span>
                    </div>
                    ${doc.accuracy ? `
                    <div class="metadata-row">
                        <span class="label">AI Accuracy:</span>
                        <span class="value">${doc.accuracy}%</span>
                    </div>
                    ` : ''}
                </div>
                <div class="doc-content">
                    <h4>Document Summary</h4>
                    <p>This document contains important information related to ${doc.type.toLowerCase()} operations. AI analysis has been completed with high confidence.</p>
                    <div class="doc-actions-modal">
                        <button class="btn btn--primary" onclick="app.downloadDocument('${doc.id}')">Download</button>
                        <button class="btn btn--secondary" onclick="app.shareDocument('${doc.id}')">Share</button>
                        ${doc.status === 'completed' ? `<button class="btn btn--success" onclick="app.approveDocument('${doc.id}'); app.closeModal();">Approve</button>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('modal-overlay').classList.add('hidden');
    }

    downloadDocument(docId) {
        this.showToast(`Downloading document ${docId}...`, 'info');
    }

    shareDocument(docId) {
        this.showToast(`Share link generated for document ${docId}`, 'success');
    }

    startRealTimeUpdates() {
        // Simulate real-time updates
        setInterval(() => {
            // Update counters occasionally
            if (Math.random() > 0.9) {
                this.data.analytics.processedToday += 1;
                const element = document.getElementById('processed-today');
                if (element) {
                    element.textContent = this.data.analytics.processedToday;
                }
            }
            
            // Update system health
            if (Math.random() > 0.95) {
                this.updateSystemHealth();
            }
        }, 5000);
    }

    updateSystemHealth() {
        const healthValues = this.data.analytics.systemHealth;
        healthValues.storage += (Math.random() - 0.5) * 2;
        healthValues.processing += (Math.random() - 0.5) * 3;
        
        // Keep values in reasonable bounds
        Object.keys(healthValues).forEach(key => {
            healthValues[key] = Math.max(60, Math.min(100, healthValues[key]));
        });
        
        // Update UI
        document.querySelectorAll('.metric .progress-fill').forEach((fill, index) => {
            const keys = Object.keys(healthValues);
            if (keys[index]) {
                const value = Math.round(healthValues[keys[index]]);
                fill.style.width = value + '%';
                const valueElement = fill.closest('.metric').querySelector('.metric-value');
                if (valueElement) {
                    valueElement.textContent = value + '%';
                }
            }
        });
    }

    showLoading(message = 'Processing...') {
        const overlay = document.getElementById('loading-overlay');
        const text = overlay.querySelector('p');
        if (text) {
            text.textContent = message;
        }
        overlay.classList.remove('hidden');
    }

    updateLoadingProgress(progress, message) {
        const progressFill = document.getElementById('loading-progress-fill');
        const progressText = document.getElementById('loading-progress-text');
        const messageText = document.querySelector('.loading-spinner p');
        
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
        if (progressText) {
            progressText.textContent = progress + '%';
        }
        if (messageText) {
            messageText.textContent = message;
        }
    }

    hideLoading() {
        document.getElementById('loading-overlay').classList.add('hidden');
    }

    showToast(message, type = 'info', duration = 4000) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${this.getToastIcon(type)}
                    </svg>
                </div>
                <span>${message}</span>
            </div>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, duration);
    }

    getToastIcon(type) {
        const icons = {
            'success': '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
            'error': '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
            'warning': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="m12 17 .01 0"/>',
            'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="m12 8 .01 0"/>'
        };
        return icons[type] || icons.info;
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing enhanced Kochi Metro Intelligence app...');
    window.app = new KochiMetroApp();
});

// Add CSS for new elements
const additionalCSS = `
.typing-dots {
    display: flex;
    gap: 4px;
    padding: 8px 0;
}

.typing-dots span {
    width: 6px;
    height: 6px;
    background: var(--color-text-secondary);
    border-radius: 50%;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) { animation-delay: -0.32s; }
.typing-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
    0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
    40% { transform: scale(1); opacity: 1; }
}

.priority-critical { color: var(--color-error) !important; font-weight: bold; }
.priority-high { color: var(--color-warning) !important; }
.priority-medium { color: var(--color-info) !important; }
.priority-low { color: var(--color-text-secondary) !important; }

.doc-comments {
    font-size: var(--font-size-xs);
    color: var(--color-primary);
    margin-top: var(--space-4);
}

.no-documents {
    text-align: center;
    padding: var(--space-32);
    color: var(--color-text-secondary);
    font-style: italic;
}

.document-details {
    max-width: 100%;
}

.doc-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-16);
}

.doc-badges {
    display: flex;
    gap: var(--space-8);
}

.badge {
    padding: var(--space-2) var(--space-6);
    background: var(--color-secondary);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
}

.doc-metadata {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    margin-bottom: var(--space-16);
    padding: var(--space-16);
    background: var(--color-bg-1);
    border-radius: var(--radius-base);
}

.metadata-row {
    display: flex;
    justify-content: space-between;
}

.metadata-row .label {
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
}

.doc-actions-modal {
    display: flex;
    gap: var(--space-8);
    margin-top: var(--space-16);
    flex-wrap: wrap;
}

.toast-content {
    display: flex;
    align-items: center;
    gap: var(--space-8);
}

.toast-icon {
    flex-shrink: 0;
}

.pipeline-item-title {
    font-weight: var(--font-weight-medium);
    margin-bottom: var(--space-2);
}

.pipeline-item-type {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
}

.timeline-meta {
    display: flex;
    gap: var(--space-8);
    align-items: center;
    margin-top: var(--space-4);
    flex-wrap: wrap;
}

.timeline-meta span {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
}
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);