# Glixtron Enterprise Platform

![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

A professional enterprise dashboard and deployment platform built with modern web technologies.

## 🌐 Live Demo
[https://hemantsharma800.github.io/Glixtron/](https://hemantsharma800.github.io/Glixtron/)

## 🚀 Features
- **Professional Dashboard** with real-time monitoring
- **Deployment Status** tracking
- **Performance Metrics** visualization
- **Security Monitoring** panel
- **Responsive Design** for all devices
- **Auto-deployment** via GitHub Pages

## 📁 Project Structure

## 🛠️ Local Development
1. Clone repository:
```bash
git clone https://github.com/Hemantsharma800/Glixtron.git
cd Glixtron

---

### **Step 3: Create Main `index.html` File**

```bash
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glixtron | Enterprise Platform</title>
    
    <!-- Meta Tags -->
    <meta name="description" content="Glixtron Enterprise Dashboard - Advanced deployment and monitoring platform">
    <meta name="keywords" content="dashboard, deployment, monitoring, enterprise, github pages">
    <meta name="author" content="Hemant Sharma">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Glixtron Enterprise Platform">
    <meta property="og:description" content="Advanced deployment dashboard">
    <meta property="og:url" content="https://hemantsharma800.github.io/Glixtron">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Main CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <style>
        .logo-large {
            font-size: 72px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
            margin: 20px 0;
        }
        
        .live-status {
            background: rgba(34, 197, 94, 0.15);
            border: 1px solid rgba(34, 197, 94, 0.3);
            padding: 12px 24px;
            border-radius: 50px;
            color: #10b981;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
        }
        
        .quick-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 40px 0;
        }
        
        @media (max-width: 768px) {
            .quick-stats {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Login Modal -->
    <div id="loginModal" class="login-modal">
        <div class="login-card">
            <div class="logo-large">G</div>
            <h1 style="font-size: 42px; margin-bottom: 10px; background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Glixtron
            </h1>
            <p style="color: #94a3b8; margin-bottom: 30px; font-size: 18px;">Enterprise Deployment Platform</p>
            
            <div class="live-status">
                <i class="fas fa-check-circle"></i>
                <span>Deployment Successful - System Ready</span>
            </div>
            
            <div style="background: #0f172a; padding: 18px; border-radius: 12px; margin: 30px 0; border: 1px solid #334155; font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #cbd5e1;">
                https://hemantsharma800.github.io/Glixtron
            </div>
            
            <button id="enterDashboard" class="btn btn-primary" style="padding: 18px 40px; font-size: 18px; width: 100%;">
                <i class="fas fa-arrow-right"></i>
                Access Enterprise Dashboard
            </button>
            
            <p style="color: #64748b; margin-top: 25px; font-size: 14px;">
                Auto-access in <span id="countdown">8</span> seconds
            </p>
        </div>
    </div>

    <!-- Main Dashboard -->
    <div id="dashboard" style="display: none;">
        <!-- Navigation -->
        <nav class="navbar">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 20px;">
                    G
                </div>
                <div>
                    <h1 style="font-size: 24px; background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">
                        Glixtron
                    </h1>
                    <p style="color: #94a3b8; font-size: 12px; margin: 0;">Enterprise Platform</p>
                </div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 25px;">
                <div class="live-status" style="font-size: 14px;">
                    <i class="fas fa-circle"></i>
                    <span>Production Environment</span>
                </div>
                
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 36px; height: 36px; background: #334155; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-user" style="color: #cbd5e1;"></i>
                    </div>
                    <span style="color: #f1f5f9; font-weight: 500;">Administrator</span>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Welcome Section -->
            <div style="margin-bottom: 50px;">
                <h2 style="font-size: 36px; margin-bottom: 15px;">Enterprise Dashboard</h2>
                <p style="color: #94a3b8; font-size: 18px; margin-bottom: 30px;">
                    Real-time monitoring and deployment management
                </p>
                <div style="display: flex; gap: 15px;">
                    <div style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; padding: 8px 16px; border-radius: 8px; font-size: 14px;">
                        <i class="fas fa-globe"></i> Global CDN
                    </div>
                    <div style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6; padding: 8px 16px; border-radius: 8px; font-size: 14px;">
                        <i class="fas fa-lock"></i> HTTPS Secure
                    </div>
                    <div style="background: rgba(34, 197, 94, 0.1); color: #10b981; padding: 8px 16px; border-radius: 8px; font-size: 14px;">
                        <i class="fas fa-bolt"></i> Auto-scale
                    </div>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="quick-stats">
                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="font-size: 20px;">Deployment</h3>
                        <div style="width: 50px; height: 50px; background: rgba(34, 197, 94, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #10b981; font-size: 24px;">
                            <i class="fas fa-server"></i>
                        </div>
                    </div>
                    <div style="font-size: 48px; font-weight: bold; color: #10b981; margin-bottom: 10px;" id="deploymentStatus">
                        Active
                    </div>
                    <p style="color: #94a3b8;">
                        Last updated: <span class="timestamp"></span>
                    </p>
                </div>

                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="font-size: 20px;">Performance</h3>
                        <div style="width: 50px; height: 50px; background: rgba(59, 130, 246, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #3b82f6; font-size: 24px;">
                            <i class="fas fa-chart-line"></i>
                        </div>
                    </div>
                    <div style="font-size: 48px; font-weight: bold; color: #3b82f6; margin-bottom: 10px;" id="performanceValue">
                        99.8%
                    </div>
                    <p style="color: #94a3b8;">
                        Uptime • 187ms avg response
                    </p>
                </div>

                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="font-size: 20px;">Security</h3>
                        <div style="width: 50px; height: 50px; background: rgba(139, 92, 246, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #8b5cf6; font-size: 24px;">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                    </div>
                    <div style="font-size: 48px; font-weight: bold; color: #8b5cf6; margin-bottom: 10px;">
                        Enterprise
                    </div>
                    <p style="color: #94a3b8;">
                        DDoS protection • Automated monitoring
                    </p>
                </div>
            </div>

            <!-- Quick Actions -->
            <div style="background: #1e293b; border-radius: 16px; padding: 30px; border: 1px solid #334155; margin-top: 40px;">
                <h3 style="font-size: 24px; margin-bottom: 25px;">System Actions</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px;">
                    <button id="deployBtn" class="action-btn btn btn-primary" style="padding: 18px;">
                        <i class="fas fa-rocket"></i>
                        Deploy Update
                    </button>
                    <button class="action-btn btn btn-secondary" style="padding: 18px;">
                        <i class="fas fa-cog"></i>
                        System Settings
                    </button>
                    <button class="action-btn btn btn-secondary" style="padding: 18px;">
                        <i class="fas fa-chart-bar"></i>
                        View Analytics
                    </button>
                    <button class="action-btn btn btn-secondary" style="padding: 18px;">
                        <i class="fas fa-file-export"></i>
                        Export Reports
                    </button>
                </div>
            </div>

            <!-- System Info -->
            <div style="margin-top: 50px; padding: 30px; background: #0f172a; border-radius: 16px; border: 1px solid #334155;">
                <h3 style="font-size: 20px; margin-bottom: 20px;">System Information</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div>
                        <p style="color: #94a3b8; margin-bottom: 5px;">Platform</p>
                        <p style="color: #f1f5f9; font-weight: 500;">GitHub Pages</p>
                    </div>
                    <div>
                        <p style="color: #94a3b8; margin-bottom: 5px;">Deployment Method</p>
                        <p style="color: #f1f5f9; font-weight: 500;">GitHub Actions</p>
                    </div>
                    <div>
                        <p style="color: #94a3b8; margin-bottom: 5px;">Domain</p>
                        <p style="color: #f1f5f9; font-weight: 500;">hemantsharma800.github.io</p>
                    </div>
                    <div>
                        <p style="color: #94a3b8; margin-bottom: 5px;">Version</p>
                        <p style="color: #f1f5f9; font-weight: 500;">Glixtron v1.0</p>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer style="text-align: center; padding: 40px; margin-top: 60px; border-top: 1px solid #334155; color: #94a3b8;">
            <p style="font-size: 16px; margin-bottom: 15px;">
                Glixtron Enterprise Platform • Professional Deployment Solution
            </p>
            <p style="font-size: 14px; margin-bottom: 10px;">
                Deployed via GitHub Pages • Auto-scalable • Secure Access
            </p>
            <p style="font-size: 13px; color: #64748b;">
                © <span id="currentYear"></span> All Rights Reserved • 
                <a href="https://github.com/Hemantsharma800/Glixtron" style="color: #3b82f6; text-decoration: none;">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </p>
        </footer>
    </div>

    <!-- JavaScript -->
    <script src="assets/js/app.js"></script>
    
    <script>
        // Countdown timer for auto-access
        let countdown = 8;
        const countdownElement = document.getElementById('countdown');
        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    </script>
</body>
</html>
