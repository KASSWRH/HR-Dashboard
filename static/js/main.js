/**
 * HR Dashboard - Main JavaScript
 * This file contains general UI functionality and initialization
 */

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Language toggle handling
    initializeLanguageToggle();
    
    // Responsive sidebar toggle
    initializeSidebarToggle();
    
    // Setup event listeners
    setupEventListeners();
});

/**
 * Initialize language toggle functionality
 * Switches between LTR (English) and RTL (Arabic) modes
 */
function initializeLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

/**
 * Toggle between English (LTR) and Arabic (RTL) language modes
 */
function toggleLanguage() {
    const body = document.body;
    const langText = document.querySelector('.lang-text');
    
    // Toggle RTL class
    body.classList.toggle('rtl');
    
    // Check if RTL is active and update language text
    if (body.classList.contains('rtl')) {
        document.dir = 'rtl';
        if (langText) langText.textContent = 'عربي/EN';
        
        // Translate key elements to Arabic
        translateToArabic();
    } else {
        document.dir = 'ltr';
        if (langText) langText.textContent = 'EN/عربي';
        
        // Restore English text
        translateToEnglish();
    }
}

/**
 * Dictionary for English to Arabic translations of common UI elements
 */
const translations = {
    // Sidebar items
    'Dashboard': 'لوحة القيادة',
    'Workforce': 'القوى العاملة',
    'Recruitment': 'التوظيف',
    'Attendance': 'الحضور',
    'Performance': 'الأداء',
    'Payroll': 'الرواتب',
    
    // Header elements
    'THIS MONTH': 'هذا الشهر',
    'LAST MONTH': 'الشهر الماضي',
    
    // Common section titles
    'Headcount Overview': 'نظرة عامة على عدد الموظفين',
    'Nationals Diversity': 'تنوع الجنسيات',
    'Engagement Trend': 'اتجاه المشاركة',
    'Top Performers': 'أفضل الأداء',
    'Recent Hires': 'التعيينات الحديثة',
    'Open Positions': 'الوظائف الشاغرة',
    
    // Workforce page
    'Workforce Summary': 'ملخص القوى العاملة',
    'Total Employees': 'إجمالي الموظفين',
    'Departments': 'الأقسام',
    'International': 'دولي',
    'Retention Rate': 'معدل الاحتفاظ',
    'Employee Directory': 'دليل الموظفين',
    'Department Distribution': 'توزيع الأقسام',
    'Headcount Trend': 'اتجاه عدد الموظفين',
    'Recent Employee Activity': 'نشاط الموظفين الأخير',
    
    // Table headers
    'Employee ID': 'رقم الموظف',
    'Name': 'الاسم',
    'Department': 'القسم',
    'Position': 'المنصب',
    'Nationality': 'الجنسية',
    'Performance': 'الأداء',
    'Actions': 'الإجراءات',
    
    // Recruitment page
    'Open Positions': 'الوظائف المفتوحة',
    'Active Candidates': 'المرشحون النشطون',
    'Interviews This Week': 'المقابلات هذا الأسبوع',
    'Days Avg. Time to Hire': 'متوسط أيام التوظيف',
    'Active Job Postings': 'إعلانات الوظائف النشطة',
    'Recruitment Funnel': 'مسار التوظيف',
    'Upcoming Interviews': 'المقابلات القادمة',
    'Candidate Pipeline': 'خط المرشحين',
    
    // Attendance page
    'Total Employees': 'إجمالي الموظفين',
    'Present Today': 'الحاضرون اليوم',
    'Absent Today': 'الغائبون اليوم',
    'Avg. Attendance Rate': 'متوسط معدل الحضور',
    'Monthly Attendance Overview': 'نظرة عامة على الحضور الشهري',
    'Attendance Trend': 'اتجاه الحضور',
    'Attendance Records': 'سجلات الحضور',
    'Leave Summary': 'ملخص الإجازات',
    'Overtime Analysis': 'تحليل العمل الإضافي',
    
    // Performance page
    'Avg. Performance Score': 'متوسط درجة الأداء',
    'Task Completion Rate': 'معدل إكمال المهام',
    'Top Performers': 'أفضل الأداء',
    'Needs Improvement': 'يحتاج إلى تحسين',
    'Department Performance': 'أداء الأقسام',
    'Performance Trend': 'اتجاه الأداء',
    'Employee Performance': 'أداء الموظفين',
    'Skills Matrix': 'مصفوفة المهارات',
    'Upcoming Performance Reviews': 'مراجعات الأداء القادمة',
    
    // Payroll page
    'Total Payroll': 'إجمالي الرواتب',
    'Change from Last Month': 'التغيير من الشهر الماضي',
    'Next Payroll Date': 'موعد الرواتب القادم',
    'Payroll Breakdown by Department': 'تفصيل الرواتب حسب القسم',
    'Payroll Trend': 'اتجاه الرواتب',
    'Employee Salary Details': 'تفاصيل رواتب الموظفين',
    'Compensation Structure': 'هيكل التعويضات',
    'Upcoming Payments': 'المدفوعات القادمة'
};

/**
 * Translate UI elements to Arabic
 */
function translateToArabic() {
    // Get all text elements that need translation
    translateElements('h1, h2, h3, h4, h5, h6, p, span, button, a, th, label');
}

/**
 * Restore English text for UI elements
 */
function translateToEnglish() {
    // Simply reload the page to restore all original English text
    // This is a simple approach; in a production environment, 
    // you might want to store original text and restore it without a reload
    location.reload();
}

/**
 * Translate specific elements based on selector
 * @param {string} selector - CSS selector for elements to translate
 */
function translateElements(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(el => {
        const originalText = el.textContent.trim();
        
        // Check if there's a translation available
        if (translations[originalText]) {
            el.textContent = translations[originalText];
        }
    });
}

/**
 * Initialize responsive sidebar toggle
 * For mobile and small screen devices
 */
function initializeSidebarToggle() {
    // Add mobile menu toggle button in header if not exists
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    
    if (header && !mobileMenuBtn && window.innerWidth < 992) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-toggle';
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuBtn.addEventListener('click', toggleSidebar);
        
        // Insert as first child of header
        header.insertBefore(menuBtn, header.firstChild);
    }
}

/**
 * Toggle sidebar visibility for mobile view
 */
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

/**
 * Setup various event listeners for interactive elements
 */
function setupEventListeners() {
    // Add responsive handling on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth < 992) {
            initializeSidebarToggle();
        } else {
            // Remove mobile toggle if window is resized to desktop
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileToggle) {
                mobileToggle.remove();
            }
            
            // Ensure sidebar is visible on desktop
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    });
    
    // Add notifications toggle functionality
    const notificationIcon = document.querySelector('.notifications');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function() {
            // This would typically show a dropdown of notifications
            // For this implementation, just show an alert
            alert('Notifications feature would be displayed here.');
        });
    }
    
    // User profile dropdown
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            // This would typically show a user menu dropdown
            // For this implementation, just show an alert
            alert('User profile menu would be displayed here.');
        });
    }
    
    // Action buttons (view, edit, etc.)
    setupActionButtons();
}

/**
 * Setup action buttons functionality
 */
function setupActionButtons() {
    // View buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the closest row to identify which item is being viewed
            const row = this.closest('tr');
            let itemName = 'item';
            
            if (row) {
                // Try to get employee name or position name
                const nameElement = row.querySelector('h4') || row.querySelector('td:first-child');
                if (nameElement) {
                    itemName = nameElement.textContent.trim();
                }
            }
            
            alert(`View details for: ${itemName}`);
        });
    });
    
    // Edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the closest row to identify which item is being edited
            const row = this.closest('tr');
            let itemName = 'item';
            
            if (row) {
                // Try to get employee name or position name
                const nameElement = row.querySelector('h4') || row.querySelector('td:first-child');
                if (nameElement) {
                    itemName = nameElement.textContent.trim();
                }
            }
            
            alert(`Edit details for: ${itemName}`);
        });
    });
    
    // Delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the closest row to identify which item is being deleted
            const row = this.closest('tr');
            let itemName = 'item';
            
            if (row) {
                // Try to get position name or other identifier
                const nameElement = row.querySelector('h4') || row.querySelector('td:first-child');
                if (nameElement) {
                    itemName = nameElement.textContent.trim();
                }
            }
            
            if (confirm(`Are you sure you want to delete: ${itemName}?`)) {
                alert(`${itemName} has been deleted.`);
                // In a real application, this would call an API to delete the item
                // and then remove the row from the DOM
            }
        });
    });
    
    // Download buttons (for payroll slips, etc.)
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the closest row to identify which item is being downloaded
            const row = this.closest('tr');
            let itemName = 'item';
            
            if (row) {
                // Try to get employee name
                const nameElement = row.querySelector('h4') || row.querySelector('td:first-child');
                if (nameElement) {
                    itemName = nameElement.textContent.trim();
                }
            }
            
            alert(`Downloading payslip for: ${itemName}`);
            // In a real application, this would trigger a file download
        });
    });
}
