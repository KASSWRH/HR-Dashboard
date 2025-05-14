/**
 * HR Dashboard - Charts Initialization
 * This file contains all the chart initialization functions using Chart.js
 */

// Common chart options
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#b0b8c8',
                font: {
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: '#1c2a3a',
            titleColor: '#ffffff',
            bodyColor: '#b0b8c8',
            borderWidth: 1,
            borderColor: '#313e52',
            padding: 10,
            usePointStyle: true
        }
    }
};

// Common colors for charts
const chartColors = {
    primary: '#39a0ca',
    secondary: '#253144',
    accent: '#2c8eb8',
    success: '#4caf50',
    warning: '#ff9800',
    danger: '#f44336',
    info: '#2196f3',
    background: '#1a2233',
    card: '#253144',
    text: '#ffffff',
    textSecondary: '#b0b8c8',
    muted: '#7a8399',
    border: '#313e52',
    departments: ['#39a0ca', '#3f51b5', '#673ab7', '#9c27b0', '#4caf50', '#ff9800', '#f44336'],
    nationality: {
        foreigners: '#39a0ca',
        nationals: '#9c27b0',
        robots: '#4caf50'
    }
};

// Dashboard - Headcount Overview Chart
function initializeHeadcountChart(departmentsData) {
    const ctx = document.getElementById('headcountChart').getContext('2d');

    // Extract department names and values
    const labels = Object.keys(departmentsData);
    const data = Object.values(departmentsData);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Employees',
                data: data,
                backgroundColor: chartColors.primary,
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        precision: 0
                    }
                }
            }
        }
    });

    return chart;
}

// Dashboard - Nationality Diversity Chart
function initializeNationalityChart(nationalityData) {
    const ctx = document.getElementById('nationalityChart').getContext('2d');

    // Extract nationality data
    const labels = Object.keys(nationalityData);
    const data = Object.values(nationalityData);
    const backgroundColors = labels.map(label => chartColors.nationality[label.toLowerCase()] || chartColors.primary);

    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            ...commonChartOptions,
            cutout: '70%'
        }
    });

    return chart;
}

// Dashboard - Engagement Trend Chart
function initializeEngagementChart() {
    const ctx = document.getElementById('engagementChart').getContext('2d');

    // Mock data for the last 6 months
    const labels = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Engagement Score',
                    data: [72, 68, 74, 77, 82, 85],
                    borderColor: chartColors.primary,
                    backgroundColor: 'rgba(57, 160, 202, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: chartColors.primary,
                    pointRadius: 4
                },
                {
                    label: 'Industry Average',
                    data: [70, 71, 72, 72, 73, 74],
                    borderColor: chartColors.muted,
                    borderDash: [5, 5],
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: chartColors.muted,
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 100,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    return chart;
}

// Workforce - Department Pie Chart
function initializeDepartmentPieChart(departmentsData) {
    const ctx = document.getElementById('departmentPieChart').getContext('2d');

    // Extract department names and values
    const labels = Object.keys(departmentsData);
    const data = Object.values(departmentsData);

    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: chartColors.departments,
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            ...commonChartOptions
        }
    });

    return chart;
}

// Workforce - Headcount Trend Chart
function initializeHeadcountTrendChart() {
    const ctx = document.getElementById('headcountTrendChart').getContext('2d');
    
    // Mock data for the last 12 months
    const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Headcount',
                data: [325, 330, 340, 345, 350, 360, 365, 370, 375, 380, 390, 400],
                borderColor: chartColors.primary,
                backgroundColor: 'rgba(57, 160, 202, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 2,
                pointBackgroundColor: chartColors.primary,
                pointRadius: 4
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        precision: 0
                    }
                }
            }
        }
    });

    return chart;
}

// Recruitment - Recruitment Funnel Chart
function initializeRecruitmentFunnelChart() {
    const ctx = document.getElementById('recruitmentFunnelChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Applied', 'Screened', 'Interview', 'Assessment', 'Offer', 'Hired'],
            datasets: [{
                label: 'Candidates',
                data: [150, 78, 45, 28, 12, 8],
                backgroundColor: chartColors.departments,
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            ...commonChartOptions,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        precision: 0
                    }
                },
                y: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                }
            }
        }
    });

    return chart;
}

// Attendance - Attendance Trend Chart
function initializeAttendanceTrendChart() {
    const ctx = document.getElementById('attendanceTrendChart').getContext('2d');
    
    // Mock data for the last 30 days
    const days = Array.from({length: 30}, (_, i) => i + 1);
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [
                {
                    label: 'Present',
                    data: days.map(() => (Math.random() * 10) + 85),
                    borderColor: chartColors.success,
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: 'Late',
                    data: days.map(() => (Math.random() * 5) + 3),
                    borderColor: chartColors.warning,
                    backgroundColor: 'rgba(255, 152, 0, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: 'Absent',
                    data: days.map(() => (Math.random() * 3) + 1),
                    borderColor: chartColors.danger,
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0
                }
            ]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        maxTicksLimit: 10
                    },
                    title: {
                        display: true,
                        text: 'Day of Month (April)',
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    return chart;
}

// Attendance - Leave Summary Chart
function initializeLeaveSummaryChart() {
    const ctx = document.getElementById('leaveSummaryChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Annual Leave', 'Sick Leave', 'Maternity/Paternity', 'Unpaid Leave', 'Other'],
            datasets: [{
                data: [45, 25, 10, 5, 15],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.danger,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.muted
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            ...commonChartOptions,
            cutout: '60%'
        }
    });

    return chart;
}

// Attendance - Overtime Chart
function initializeOvertimeChart() {
    const ctx = document.getElementById('overtimeChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HR', 'Finance', 'Engineering', 'Sales', 'Marketing', 'Support', 'IT'],
            datasets: [{
                label: 'Average Overtime Hours',
                data: [5, 8, 15, 6, 4, 12, 10],
                backgroundColor: chartColors.warning,
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        callback: function(value) {
                            return value + 'h';
                        }
                    }
                }
            }
        }
    });

    return chart;
}

// Performance - Department Performance Chart
function initializeDepartmentPerformanceChart() {
    const ctx = document.getElementById('departmentPerformanceChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Productivity', 'Quality', 'Efficiency', 'Teamwork', 'Innovation', 'Communication'],
            datasets: [
                {
                    label: 'Engineering',
                    data: [85, 90, 78, 82, 95, 80],
                    borderColor: chartColors.primary,
                    backgroundColor: 'rgba(57, 160, 202, 0.2)',
                    pointBackgroundColor: chartColors.primary,
                    borderWidth: 2
                },
                {
                    label: 'Marketing',
                    data: [75, 85, 80, 88, 82, 92],
                    borderColor: chartColors.success,
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    pointBackgroundColor: chartColors.success,
                    borderWidth: 2
                },
                {
                    label: 'Sales',
                    data: [90, 78, 85, 80, 75, 85],
                    borderColor: chartColors.warning,
                    backgroundColor: 'rgba(255, 152, 0, 0.2)',
                    pointBackgroundColor: chartColors.warning,
                    borderWidth: 2
                }
            ]
        },
        options: {
            ...commonChartOptions,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: false,
                        stepSize: 20
                    },
                    grid: {
                        color: chartColors.border
                    },
                    pointLabels: {
                        color: chartColors.textSecondary,
                        font: {
                            size: 12
                        }
                    },
                    angleLines: {
                        color: chartColors.border
                    }
                }
            }
        }
    });

    return chart;
}

// Performance - Performance Trend Chart
function initializePerformanceTrendChart() {
    const ctx = document.getElementById('performanceTrendChart').getContext('2d');
    
    // Mock data for the last 4 quarters
    const labels = ['Q2 2022', 'Q3 2022', 'Q4 2022', 'Q1 2023'];
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Average Performance',
                    data: [78, 80, 82, 84.5],
                    borderColor: chartColors.primary,
                    backgroundColor: 'rgba(57, 160, 202, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: chartColors.primary,
                    pointRadius: 4
                },
                {
                    label: 'Top Performers',
                    data: [88, 90, 91, 92],
                    borderColor: chartColors.success,
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: chartColors.success,
                    pointRadius: 4
                },
                {
                    label: 'Needs Improvement',
                    data: [65, 68, 69, 72],
                    borderColor: chartColors.warning,
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: chartColors.warning,
                    pointRadius: 4
                }
            ]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 100,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    return chart;
}

// Performance - Skills Matrix Chart
function initializeSkillsMatrixChart() {
    const ctx = document.getElementById('skillsMatrixChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Technical Skills', 'Leadership', 'Soft Skills', 'Problem Solving', 'Adaptability', 'Creativity'],
            datasets: [{
                data: [85, 75, 80, 90, 85, 78],
                backgroundColor: [
                    'rgba(57, 160, 202, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(255, 152, 0, 0.7)',
                    'rgba(33, 150, 243, 0.7)',
                    'rgba(156, 39, 176, 0.7)',
                    'rgba(244, 67, 54, 0.7)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: false,
                        stepSize: 20
                    },
                    grid: {
                        color: chartColors.border
                    },
                    pointLabels: {
                        color: chartColors.textSecondary,
                        font: {
                            size: 12
                        }
                    },
                    angleLines: {
                        color: chartColors.border
                    }
                }
            }
        }
    });

    return chart;
}

// Payroll - Payroll Breakdown Chart
function initializePayrollBreakdownChart() {
    const ctx = document.getElementById('payrollBreakdownChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HR', 'Finance', 'Engineering', 'Sales', 'Marketing', 'Support', 'IT'],
            datasets: [{
                label: 'Total Salary Expense',
                data: [42000, 60000, 150000, 85000, 65000, 75000, 90000],
                backgroundColor: chartColors.departments,
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    return chart;
}

// Payroll - Payroll Trend Chart
function initializePayrollTrendChart() {
    const ctx = document.getElementById('payrollTrendChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [{
                label: 'Total Payroll',
                data: [42000, 44000, 45000, 46500, 48000, 58356],
                borderColor: chartColors.primary,
                backgroundColor: 'rgba(57, 160, 202, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 2,
                pointBackgroundColor: chartColors.primary,
                pointRadius: 4
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    return chart;
}

// Payroll - Basic Salary Chart
function initializeBasicSalaryChart() {
    const ctx = document.getElementById('basicSalaryChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Entry Level', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager', 'Director'],
            datasets: [{
                label: 'Average Basic Salary',
                data: [3000, 4500, 6000, 8000, 10000, 12000, 16000],
                backgroundColor: chartColors.primary,
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: chartColors.border
                    },
                    ticks: {
                        color: chartColors.textSecondary,
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    return chart;
}

// Payroll - Allowances Chart
function initializeAllowancesChart() {
    const ctx = document.getElementById('allowancesChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Housing', 'Transportation', 'Meals', 'Communication', 'Other'],
            datasets: [{
                data: [40, 25, 15, 10, 10],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.muted
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            ...commonChartOptions,
            cutout: '60%'
        }
    });

    return chart;
}

// Payroll - Deductions Chart
function initializeDeductionsChart() {
    const ctx = document.getElementById('deductionsChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Tax', 'Social Insurance', 'Pension', 'Health Insurance', 'Other'],
            datasets: [{
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    chartColors.danger,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.primary,
                    chartColors.muted
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            ...commonChartOptions,
            cutout: '60%'
        }
    });

    return chart;
}

// Payroll - Benefits Chart
function initializeBenefitsChart() {
    const ctx = document.getElementById('benefitsChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Health Insurance', 'Life Insurance', 'Retirement Plan', 'Vacation', 'Training & Education', 'Wellness Programs'],
            datasets: [{
                data: [30, 15, 25, 10, 10, 10],
                backgroundColor: [
                    'rgba(57, 160, 202, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(255, 152, 0, 0.7)',
                    'rgba(33, 150, 243, 0.7)',
                    'rgba(156, 39, 176, 0.7)',
                    'rgba(244, 67, 54, 0.7)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: chartColors.border
                    },
                    pointLabels: {
                        color: chartColors.textSecondary,
                        font: {
                            size: 12
                        }
                    },
                    angleLines: {
                        color: chartColors.border
                    }
                }
            }
        }
    });

    return chart;
}
