-- Seeding case_study_data for all projects

-- 1. AgentGo - Insurance CRM
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "A specialized CRM platform built for insurance agents to streamline client management, policy tracking, and team collaboration — all in one place.",
  "core_focus": "Enterprise-grade CRM for Insurance Agents.",
  "title_accent": "Insurance CRM",
  "mission": "To streamline client management and networking for high-performance sales teams.",
  "delivery": "Client Tracking → Real-time Notifications → Commission Dashboards.",
  "tech_stack_string": "Flutter • Supabase • Dart • Edge Functions",
  "overview_text": "AgentGo is a specialized CRM platform built to handle the complex workflows of insurance agents. It provides a unified portal for tracking client lifecycles, managing policy renewals, and coordinating with other agents in a network.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#ECF5E6\" opacity=\"0.5\"/><circle cx=\"340\" cy=\"80\" r=\"80\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.08)\" stroke-width=\"2\"/><circle cx=\"340\" cy=\"80\" r=\"120\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.04)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"260\" height=\"140\" rx=\"16\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.02)\" stroke-width=\"2\" filter=\"drop-shadow(0 15px 35px rgba(30, 77, 18, 0.05))\"/><circle cx=\"70\" cy=\"56\" r=\"4\" fill=\"#E15A5A\"/><circle cx=\"80\" cy=\"56\" r=\"4\" fill=\"#E8B03E\"/><circle cx=\"90\" cy=\"56\" r=\"4\" fill=\"#60C14D\"/><rect x=\"62\" y=\"70\" width=\"20\" height=\"96\" rx=\"4\" fill=\"#f4f8ef\"/><circle cx=\"72\" cy=\"82\" r=\"3\" fill=\"#3F8F2D\" opacity=\"0.5\"/><circle cx=\"72\" cy=\"98\" r=\"3\" fill=\"#3F8F2D\" opacity=\"0.3\"/><circle cx=\"72\" cy=\"114\" r=\"3\" fill=\"#3F8F2D\" opacity=\"0.3\"/><circle cx=\"72\" cy=\"130\" r=\"3\" fill=\"#3F8F2D\" opacity=\"0.3\"/><circle cx=\"72\" cy=\"146\" r=\"3\" fill=\"#3F8F2D\" opacity=\"0.3\"/><rect x=\"94\" y=\"70\" width=\"50\" height=\"36\" rx=\"6\" fill=\"#f8fafc\" stroke=\"rgba(63, 143, 45, 0.1)\"/><rect x=\"102\" y=\"76\" width=\"30\" height=\"5\" rx=\"2\" fill=\"#3F8F2D\" opacity=\"0.3\"/><rect x=\"102\" y=\"86\" width=\"20\" height=\"8\" rx=\"2\" fill=\"#3F8F2D\" opacity=\"0.8\"/><rect x=\"150\" y=\"70\" width=\"50\" height=\"36\" rx=\"6\" fill=\"#f8fafc\" stroke=\"rgba(63, 143, 45, 0.1)\"/><rect x=\"158\" y=\"76\" width=\"30\" height=\"5\" rx=\"2\" fill=\"#3F8F2D\" opacity=\"0.3\"/><rect x=\"158\" y=\"86\" width=\"24\" height=\"8\" rx=\"2\" fill=\"#69B63D\" opacity=\"0.8\"/><rect x=\"94\" y=\"114\" width=\"200\" height=\"52\" rx=\"8\" fill=\"#f8fafc\" stroke=\"rgba(0,0,0,0.02)\"/><path d=\"M102 150 C120 145, 130 125, 150 135 C170 145, 180 120, 200 130 C220 140, 230 125, 250 120 C270 115, 280 135, 290 125\" fill=\"none\" stroke=\"#3F8F2D\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"250\" cy=\"120\" r=\"4\" fill=\"#3F8F2D\"/><g filter=\"drop-shadow(0 8px 20px rgba(30, 77, 18, 0.08))\"><rect x=\"25\" y=\"120\" width=\"48\" height=\"48\" rx=\"24\" fill=\"#ffffff\"/><circle cx=\"49\" cy=\"144\" r=\"16\" fill=\"#ECF5E6\"/><path d=\"M49 144 a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\" fill=\"#3F8F2D\"/><path d=\"M43 149 a6 6 0 0 1 12 0\" fill=\"#3F8F2D\"/></g><g filter=\"drop-shadow(0 10px 25px rgba(30, 77, 18, 0.1))\"><rect x=\"280\" y=\"120\" width=\"48\" height=\"48\" rx=\"24\" fill=\"#3F8F2D\"/><path d=\"M294 144 L299 149 L312 136\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>",
  "features": [
    {"title": "Advanced Client Lifecycle", "desc": "Deep tracking of leads, active policies, and renewals.", "icon": "user"},
    {"title": "Secure Data Handling", "desc": "Built on Supabase for enterprise-grade security and reliability.", "icon": "lock"},
    {"title": "Networking Tools", "desc": "Integrated features for agents to collaborate on complex claims or projects.", "icon": "network"},
    {"title": "Real-time Notifications", "desc": "Immediate alerts for task deadlines and client updates.", "icon": "bell"}
  ],
  "impact_stats": [
    {"value": "$24.5K", "label": "Total Earnings", "icon": "dollar"},
    {"value": "18.6%", "label": "Growth Rate", "icon": "trending-up"},
    {"value": "32", "label": "Active Policies", "icon": "clock"},
    {"value": "128", "label": "Active Clients", "icon": "users"}
  ],
  "extra_card_title": "Scalability",
  "extra_card_text": "Designed with a focus on high-performance mobile interactions and a backend capable of supporting thousands of concurrent users across distributed territories.",
  "extra_stats": [
    {"value": "10K+", "label": "Concurrent Users"},
    {"value": "99.9%", "label": "Uptime"},
    {"value": "Global", "label": "Agent Network"}
  ]
}'::jsonb WHERE id = 'c3bac5f9-b445-44b2-ba85-f2afbb101e39';

-- 2. AI Agriculture System
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "A machine learning platform utilizing dynamic environmental and soil data to predict crop disease risks and provide actionable agricultural insights.",
  "core_focus": "Early Crop Risk Detection & Diagnostics.",
  "title_accent": "Prediction System",
  "mission": "To support agricultural sustainability through preventative AI insights.",
  "delivery": "Crop Sensors → ML Prediction Pipeline → Farmer Dashboard.",
  "tech_stack_string": "Python • NumPy • Scikit-Learn • FastAPI",
  "overview_text": "This project focuses on leveraging machine learning techniques to analyze environmental and crop-related data, helping predict potential plant health issues before they become critical. It aims to support better decision-making in agriculture by providing timely and actionable insights directly to the stakeholders.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#ECF5E6\" opacity=\"0.5\"/><circle cx=\"340\" cy=\"80\" r=\"80\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.08)\" stroke-width=\"2\"/><circle cx=\"340\" cy=\"80\" r=\"120\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.04)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"260\" height=\"140\" rx=\"16\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.02)\" stroke-width=\"2\" filter=\"drop-shadow(0 15px 35px rgba(30, 77, 18, 0.05))\"/><circle cx=\"70\" cy=\"56\" r=\"4\" fill=\"#E15A5A\"/><circle cx=\"80\" cy=\"56\" r=\"4\" fill=\"#E8B03E\"/><circle cx=\"90\" cy=\"56\" r=\"4\" fill=\"#60C14D\"/><rect x=\"62\" y=\"70\" width=\"45\" height=\"96\" rx=\"6\" fill=\"#f4f8ef\"/><rect x=\"68\" y=\"78\" width=\"33\" height=\"6\" rx=\"2\" fill=\"#3F8F2D\" opacity=\"0.4\"/><rect x=\"68\" y=\"90\" width=\"25\" height=\"6\" rx=\"2\" fill=\"#3F8F2D\" opacity=\"0.2\"/><rect x=\"68\" y=\"102\" width=\"20\" height=\"6\" rx=\"2\" fill=\"#3F8F2D\" opacity=\"0.2\"/><path d=\"M190 150 C190 110, 180 90, 200 70 C220 90, 210 110, 210 150\" fill=\"none\" stroke=\"#3F8F2D\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M200 95 C215 90, 225 80, 220 70 C210 70, 205 85, 200 95\" fill=\"#69B63D\" opacity=\"0.8\"/><path d=\"M195 115 C180 110, 170 100, 175 90 C185 90, 190 105, 195 115\" fill=\"#69B63D\" opacity=\"0.8\"/><ellipse cx=\"200\" cy=\"150\" rx=\"35\" ry=\"12\" fill=\"none\" stroke=\"#3F8F2D\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><g filter=\"drop-shadow(0 8px 20px rgba(30, 77, 18, 0.08))\"><rect x=\"250\" y=\"80\" width=\"80\" height=\"40\" rx=\"8\" fill=\"#ffffff\"/><text x=\"260\" y=\"98\" fill=\"#1E4D12\" font-family=\"Inter\" font-weight=\"800\" font-size=\"12\">92.4%</text><text x=\"260\" y=\"112\" fill=\"#888\" font-family=\"Inter\" font-weight=\"500\" font-size=\"8\">Model Acc.</text></g><g filter=\"drop-shadow(0 6px 12px rgba(0,0,0,0.05))\"><circle cx=\"130\" cy=\"120\" r=\"16\" fill=\"#3F8F2D\"/><path d=\"M125 120 C125 115, 132 112, 135 115 C135 120, 130 125, 125 120\" fill=\"#ffffff\"/></g></svg>",
  "features": [
    {"title": "Predictive Analysis", "desc": "Advanced modeling based on dynamic environmental and crop data.", "icon": "analytics"},
    {"title": "Early Identification", "desc": "Spotting plant health risks before critical thresholds are reached.", "icon": "alert"},
    {"title": "Actionable Recommendations", "desc": "Data-driven paths to improve overall crop outcomes.", "icon": "check-circle"},
    {"title": "Real-world Scalability", "desc": "A robust system designed for actual agricultural deployment.", "icon": "database"}
  ],
  "impact_stats": [
    {"value": "92.4%", "label": "Prediction Accuracy", "icon": "check"},
    {"value": "30%", "label": "Water Saved", "icon": "droplet"},
    {"value": "15%", "label": "Yield Increase", "icon": "plus"},
    {"value": "1.2K", "label": "Monitored Hectares", "icon": "grid"}
  ],
  "extra_card_title": "Technology Approach",
  "extra_card_text": "The system runs on machine learning models trained on proprietary agricultural datasets. Sophisticated data processing and pattern recognition enable high-volume predictions and continuous feedback flows, integrated with a user-centric web interface designed for non-technical farming stakeholders to gain quick insights.",
  "extra_stats": [
    {"value": "Python", "label": "Model Training"},
    {"value": "FastAPI", "label": "API Service"},
    {"value": "TensorFlow", "label": "Deep Learning"}
  ]
}'::jsonb WHERE id = 'a83c2fb4-7251-496a-8361-e15345953677';

-- 3. Cardio Disease Forecasting
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "A clinical analytics tool that parses patient markers to forecast cardiovascular risks, helping doctors make early preventative interventions.",
  "core_focus": "Preventative Healthcare via ML Risk Assessment.",
  "title_accent": "Disease Forecasting",
  "mission": "To reduce heart-related fatalities by providing high-accuracy predictive forecasting based on clinical markers.",
  "delivery": "Clinical Data Pipeline → ML Risk Model → Physician Dashboard.",
  "tech_stack_string": "Python • Pandas • XGBoost • Streamlit",
  "overview_text": "Cardiovascular disease remains the leading cause of global mortality. This project leverages the latest machine learning models to analyze subtle patterns in patient data (blood pressure, cholesterol, age, etc.) and forecast potential heart disease before serious clinical symptoms arise.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#FCECEE\" opacity=\"0.4\"/><circle cx=\"340\" cy=\"80\" r=\"80\" fill=\"none\" stroke=\"rgba(225, 90, 90, 0.08)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"260\" height=\"140\" rx=\"16\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.02)\" stroke-width=\"2\" filter=\"drop-shadow(0 15px 35px rgba(225, 90, 90, 0.05))\"/><circle cx=\"70\" cy=\"56\" r=\"4\" fill=\"#E15A5A\"/><circle cx=\"80\" cy=\"56\" r=\"4\" fill=\"#E8B03E\"/><circle cx=\"90\" cy=\"56\" r=\"4\" fill=\"#60C14D\"/><path d=\"M70 110 L120 110 L130 90 L140 130 L150 70 L160 120 L170 110 L220 110 L230 90 L240 130 L250 70 L260 120 L270 110 L300 110\" fill=\"none\" stroke=\"#E15A5A\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><g filter=\"drop-shadow(0 8px 20px rgba(225, 90, 90, 0.2))\"><rect x=\"180\" y=\"125\" width=\"90\" height=\"40\" rx=\"8\" fill=\"#ffffff\" stroke=\"rgba(225, 90, 90, 0.1)\"/><text x=\"190\" y=\"143\" fill=\"#E15A5A\" font-family=\"Inter\" font-weight=\"800\" font-size=\"12\">72 BPM</text><text x=\"190\" y=\"155\" fill=\"#888\" font-family=\"Inter\" font-weight=\"500\" font-size=\"8\">Heart Rate Sync</text></g><g filter=\"drop-shadow(0 6px 12px rgba(225, 90, 90, 0.15))\"><circle cx=\"70\" cy=\"150\" r=\"18\" fill=\"#E15A5A\"/><path d=\"M70 156 L66 151 A3 3 0 0 1 70 146 A3 3 0 0 1 74 151 Z\" fill=\"#ffffff\"/></g></svg>",
  "features": [
    {"title": "Risk Scoring Engine", "desc": "Real-time assessment of patient probability for CAD and other conditions.", "icon": "analytics"},
    {"title": "Pattern Recognition", "desc": "Identifying non-obvious correlations between lifestyle markers and heart health.", "icon": "clock"},
    {"title": "Clinical Integration", "desc": "Secure, privacy-first interface for medical professionals.", "icon": "lock"},
    {"title": "High-Accuracy Models", "desc": "Trained on diverse clinical datasets for robust cross-demographic reliability.", "icon": "check"}
  ],
  "impact_stats": [
    {"value": "95.8%", "label": "Sensitivity", "icon": "check"},
    {"value": "4.2x", "label": "Earlier Detection", "icon": "trending-up"},
    {"value": "25K+", "label": "Patient Records", "icon": "file"},
    {"value": "99.9%", "label": "Uptime", "icon": "clock"}
  ],
  "extra_card_title": "Machine Learning Methodology",
  "extra_card_text": "Combines Random Forest and XGBoost architectures with advanced feature engineering to prioritize clinical importance and minimize false negatives in patient screening, integrated into automated physician portals.",
  "extra_stats": [
    {"value": "XGBoost", "label": "Classifier"},
    {"value": "SHAP", "label": "Feature Weighting"},
    {"value": "FastAPI", "label": "Deploy Pipeline"}
  ]
}'::jsonb WHERE id = '846cd90b-c500-4e9a-8405-7cf56de13ea1';

-- 4. Financial Management Ecosystem
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "A gamified personal finance tracker enabling multi-user wallet collaboration, real-time budgeting, and predictive insights.",
  "core_focus": "Shared Wallet & Collaborative Expense Tracking.",
  "title_accent": "Management Ecosystem",
  "mission": "To help users manage their resources effectively with a gamified, multi-user experience.",
  "delivery": "Unified Wallet → Shared Collaboration → Real-time Analytics.",
  "tech_stack_string": "Flutter • Supabase • Node.js • Stripe",
  "overview_text": "A complete financial tracking system designed to help users manage their money effectively. It features advanced monthly insights, a gamified timeline of savings milestones, and a robust architecture for multi-user collaboration.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#ECF5E6\" opacity=\"0.5\"/><circle cx=\"340\" cy=\"80\" r=\"80\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.08)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"260\" height=\"140\" rx=\"16\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.02)\" stroke-width=\"2\" filter=\"drop-shadow(0 15px 35px rgba(30, 77, 18, 0.05))\"/><circle cx=\"70\" cy=\"56\" r=\"4\" fill=\"#E15A5A\"/><circle cx=\"80\" cy=\"56\" r=\"4\" fill=\"#E8B03E\"/><circle cx=\"90\" cy=\"56\" r=\"4\" fill=\"#60C14D\"/><circle cx=\"130\" cy=\"110\" r=\"40\" fill=\"none\" stroke=\"#ECF5E6\" stroke-width=\"8\"/><circle cx=\"130\" cy=\"110\" r=\"40\" fill=\"none\" stroke=\"#3F8F2D\" stroke-width=\"8\" stroke-dasharray=\"180 250\" stroke-linecap=\"round\"/><rect x=\"200\" y=\"80\" width=\"90\" height=\"8\" rx=\"4\" fill=\"#69B63D\" opacity=\"0.8\"/><rect x=\"200\" y=\"95\" width=\"70\" height=\"8\" rx=\"4\" fill=\"#3F8F2D\" opacity=\"0.3\"/><rect x=\"200\" y=\"110\" width=\"80\" height=\"8\" rx=\"4\" fill=\"#3F8F2D\" opacity=\"0.3\"/><g filter=\"drop-shadow(0 8px 20px rgba(30, 77, 18, 0.08))\"><rect x=\"220\" y=\"130\" width=\"80\" height=\"36\" rx=\"6\" fill=\"#ffffff\"/><text x=\"228\" y=\"146\" fill=\"#1E4D12\" font-family=\"Inter\" font-weight=\"800\" font-size=\"10\">$1,450.00</text><text x=\"228\" y=\"156\" fill=\"#888\" font-family=\"Inter\" font-weight=\"500\" font-size=\"6\">Balance</text></g><g filter=\"drop-shadow(0 6px 12px rgba(0,0,0,0.05))\"><circle cx=\"80\" cy=\"140\" r=\"16\" fill=\"#3F8F2D\"/><path d=\"M74 140 H86 M80 134 V146\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></g></svg>",
  "features": [
    {"title": "Income & Expense Tracking", "desc": "Detailed budget management and custom categorizations.", "icon": "instagram"},
    {"title": "Multiple Shared Wallets", "desc": "Collaborative financial management for teams or families.", "icon": "lock"},
    {"title": "Gamified Experience", "desc": "Earn points, badges, and rewards based on financial habits.", "icon": "award"},
    {"title": "Monthly Insights", "desc": "Clear analytics for better long-term financial decisions.", "icon": "trending-up"}
  ],
  "impact_stats": [
    {"value": "256-bit", "label": "Encryption", "icon": "lock"},
    {"value": "2-Sec", "label": "Sync Time", "icon": "trending-up"},
    {"value": "10K+", "label": "Transactions", "icon": "clock"},
    {"value": "99.9%", "label": "Accuracy", "icon": "check"}
  ],
  "extra_card_title": "Advanced Visualization",
  "extra_card_text": "Designed with dynamic bar charts for income and expense tracking, using smart touch tooltips for interactive data inspection and micro-animations to enhance user engagement within a lightweight mobile application container.",
  "extra_stats": [
    {"value": "Flutter", "label": "Mobile Frontend"},
    {"value": "Supabase", "label": "Realtime DB"},
    {"value": "Stripe", "label": "Settlements"}
  ]
}'::jsonb WHERE id = '996db255-8b74-42cb-b76d-73a4e36cd701';

-- 5. Internal Communication Platform
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "An end-to-end encrypted messaging and file exchange suite designed for high-compliance enterprise environments.",
  "core_focus": "Secure Enterprise Communication & Data Privacy.",
  "title_accent": "Secure Platform",
  "mission": "To enable seamless, real-time collaboration within high-security enterprise environments.",
  "delivery": "End-to-end Encryption → Instant Data Sync → Audit Logging.",
  "tech_stack_string": "Node.js • Express • Socket.io • Redis",
  "overview_text": "SASA Secure Enterprise Comms is a specialized internal communication tool built for organizations that prioritize data security and real-time responsiveness. It provides a robust architecture for handling sensitive information while maintaining a fluid, modern user experience.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#ECF5E6\" opacity=\"0.5\"/><circle cx=\"340\" cy=\"80\" r=\"80\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.08)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"260\" height=\"140\" rx=\"16\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.02)\" stroke-width=\"2\" filter=\"drop-shadow(0 15px 35px rgba(30, 77, 18, 0.05))\"/><circle cx=\"70\" cy=\"56\" r=\"4\" fill=\"#E15A5A\"/><circle cx=\"80\" cy=\"56\" r=\"4\" fill=\"#E8B03E\"/><circle cx=\"90\" cy=\"56\" r=\"4\" fill=\"#60C14D\"/><rect x=\"70\" y=\"80\" width=\"120\" height=\"30\" rx=\"12\" fill=\"#ECF5E6\"/><circle cx=\"85\" cy=\"95\" r=\"8\" fill=\"#3F8F2D\" opacity=\"0.3\"/><rect x=\"100\" y=\"91\" width=\"75\" height=\"8\" rx=\"4\" fill=\"#3F8F2D\" opacity=\"0.5\"/><rect x=\"130\" y=\"120\" width=\"120\" height=\"30\" rx=\"12\" fill=\"#f1f5f9\"/><circle cx=\"235\" cy=\"135\" r=\"8\" fill=\"#64748b\" opacity=\"0.3\"/><rect x=\"145\" y=\"131\" width=\"75\" height=\"8\" rx=\"4\" fill=\"#64748b\" opacity=\"0.5\"/><g filter=\"drop-shadow(0 8px 20px rgba(30, 77, 18, 0.15))\"><circle cx=\"270\" cy=\"95\" r=\"22\" fill=\"#3F8F2D\"/><rect x=\"261\" y=\"92\" width=\"18\" height=\"14\" rx=\"2\" fill=\"#ffffff\"/><path d=\"M265 92 V88 a5 5 0 0 1 10 0v4\" stroke=\"#ffffff\" stroke-width=\"2.5\" fill=\"none\"/></g></svg>",
  "features": [
    {"title": "Encrypted Communication", "desc": "Advanced safeguards for internal messages and data transfers.", "icon": "lock"},
    {"title": "Real-time Presence", "desc": "Instant sync across multiple platforms to ensure teams never miss a beat.", "icon": "clock"},
    {"title": "Audit & Compliance", "desc": "Built-in logging and administration tools for enterprise oversight.", "icon": "file"},
    {"title": "Modular Design", "desc": "Easily extensible for custom internal workflows and client integrations.", "icon": "settings"}
  ],
  "impact_stats": [
    {"value": "AES-256", "label": "Encryption", "icon": "lock"},
    {"value": "50ms", "label": "Latency", "icon": "trending-up"},
    {"value": "100K+", "label": "Daily Msgs", "icon": "users"},
    {"value": "Zero", "label": "Data Leaks", "icon": "check"}
  ],
  "extra_card_title": "Technology Choice",
  "extra_card_text": "Constructed with Node.js and sophisticated real-time Socket.io channels to provide highly reliable, zero-latency communication performance even under concurrent corporate network loads, cached via Redis memory stores.",
  "extra_stats": [
    {"value": "Node.js", "label": "Backend Engine"},
    {"value": "Socket.io", "label": "WebSockets"},
    {"value": "Redis", "label": "Cache Store"}
  ]
}'::jsonb WHERE id = 'a9f9a73f-1e6b-465a-845c-c57a5b70d00d';

-- 6. SASA — Academic Platform
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "A next-generation educational management platform linking traditional performance grades with dynamic technical and soft skill competency tracking.",
  "core_focus": "Performance Evaluation & Competency Mapping.",
  "title_accent": "Academic & Skill Assessment",
  "mission": "To provide a data-rich assessment platform that balances academic rigor with real-world skill tracking.",
  "delivery": "Gradebook Engine → Skill Competency Graphs → Dynamic Student Portfolios.",
  "tech_stack_string": "React • Node.js • Supabase • PostgreSQL",
  "overview_text": "SASA represents the next generation of academic management. It moves beyond traditional grading to map specific user skills against academic benchmarks, providing a much clearer picture of student capability and career readiness.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#ECF5E6\" opacity=\"0.5\"/><circle cx=\"340\" cy=\"80\" r=\"80\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.08)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"260\" height=\"140\" rx=\"16\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.02)\" stroke-width=\"2\" filter=\"drop-shadow(0 15px 35px rgba(30, 77, 18, 0.05))\"/><circle cx=\"70\" cy=\"56\" r=\"4\" fill=\"#E15A5A\"/><circle cx=\"80\" cy=\"56\" r=\"4\" fill=\"#E8B03E\"/><circle cx=\"90\" cy=\"56\" r=\"4\" fill=\"#60C14D\"/><polygon points=\"180,65 230,80 240,130 180,150 120,120 130,85\" fill=\"none\" stroke=\"#ECF5E6\" stroke-width=\"2\"/><polygon points=\"180,85 210,95 215,120 180,135 145,115 150,95\" fill=\"none\" stroke=\"#ECF5E6\" stroke-width=\"1.5\"/><polygon points=\"180,75 220,88 230,125 180,145 130,118 140,90\" fill=\"rgba(63, 143, 45, 0.15)\" stroke=\"#3F8F2D\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><circle cx=\"180\" cy=\"75\" r=\"4.5\" fill=\"#3F8F2D\"/><circle cx=\"220\" cy=\"88\" r=\"4.5\" fill=\"#3F8F2D\"/><circle cx=\"230\" cy=\"125\" r=\"4.5\" fill=\"#3F8F2D\"/><circle cx=\"180\" cy=\"145\" r=\"4.5\" fill=\"#3F8F2D\"/><circle cx=\"130\" cy=\"118\" r=\"4.5\" fill=\"#3F8F2D\"/><text x=\"165\" y=\"60\" fill=\"#1E4D12\" font-family=\"Inter\" font-weight=\"700\" font-size=\"9\">Logic</text><text x=\"235\" y=\"85\" fill=\"#1E4D12\" font-family=\"Inter\" font-weight=\"700\" font-size=\"9\">UI/UX</text><text x=\"238\" y=\"135\" fill=\"#1E4D12\" font-family=\"Inter\" font-weight=\"700\" font-size=\"9\">Data</text><g filter=\"drop-shadow(0 6px 12px rgba(0,0,0,0.05))\"><circle cx=\"75\" cy=\"140\" r=\"16\" fill=\"#3F8F2D\"/><path d=\"M70 140 L74 144 L81 137\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></g></svg>",
  "features": [
    {"title": "Skill Competency Mapping", "desc": "Dynamic spider charts mapping multi-domain student capabilities.", "icon": "award"},
    {"title": "Real-time Assessments", "desc": "Dynamic evaluation inputs with instant grade data synchronization.", "icon": "analytics"},
    {"title": "Unified Onboarding", "desc": "Shared portals and workflows for educators, students, and admins.", "icon": "users"},
    {"title": "Feedback Loop Optimization", "desc": "Actionable, data-driven improvement suggestions based on skill telemetry.", "icon": "clock"}
  ],
  "impact_stats": [
    {"value": "40%", "label": "Workload Cut", "icon": "trending-up"},
    {"value": "8K+", "label": "Active Students", "icon": "users"},
    {"value": "15+", "label": "Sub-domains", "icon": "award"},
    {"value": "98%", "label": "Engagement", "icon": "check"}
  ],
  "extra_card_title": "Data & Analytics",
  "extra_card_text": "Comprehensive administrative dashboards enable institutions to see aggregate performance trends, filter student cohorts, and pinpoint specific skill gaps for localized curriculum optimizations.",
  "extra_stats": [
    {"value": "React", "label": "Web App Interface"},
    {"value": "Node.js", "label": "Calculation Server"},
    {"value": "Postgres", "label": "Relational DB"}
  ]
}'::jsonb WHERE id = 'dd43d5a1-7020-4117-9527-069de1b23e49';

-- 7. WorkSpace Booking Suite
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "An enterprise SaaS platform integrating desk scheduling, calendar synchronization, and IoT office hardware controls.",
  "core_focus": "Digital Initiative for Desk & Meeting Booking.",
  "title_accent": "Office Booking Suite",
  "mission": "To transform workspace scheduling concepts into practical, user-focused digital solutions.",
  "delivery": "Custom Desk UX → IoT Door Hardware Sync → Live Room Availability.",
  "tech_stack_string": "FlutterFlow • Node.js • PostgreSQL • IoT APIs",
  "overview_text": "WorkSpace is a modern platform focused on building high-performance web and mobile applications for shared workspace environments. It addresses the friction of physical co-working hubs by optimizing calendar booking and desk-level IoT status controls.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#ECF5E6\" opacity=\"0.5\"/><circle cx=\"340\" cy=\"80\" r=\"80\" fill=\"none\" stroke=\"rgba(63, 143, 45, 0.08)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"260\" height=\"140\" rx=\"16\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.02)\" stroke-width=\"2\" filter=\"drop-shadow(0 15px 35px rgba(30, 77, 18, 0.05))\"/><circle cx=\"70\" cy=\"56\" r=\"4\" fill=\"#E15A5A\"/><circle cx=\"80\" cy=\"56\" r=\"4\" fill=\"#E8B03E\"/><circle cx=\"90\" cy=\"56\" r=\"4\" fill=\"#60C14D\"/><rect x=\"70\" y=\"80\" width=\"40\" height=\"40\" rx=\"6\" fill=\"#ECF5E6\" stroke=\"#3F8F2D\" stroke-width=\"1.5\"/><circle cx=\"90\" cy=\"100\" r=\"8\" fill=\"#3F8F2D\" opacity=\"0.2\"/><rect x=\"130\" y=\"80\" width=\"40\" height=\"40\" rx=\"6\" fill=\"#ECF5E6\" stroke=\"#3F8F2D\" stroke-width=\"1.5\"/><circle cx=\"150\" cy=\"100\" r=\"8\" fill=\"#3F8F2D\" opacity=\"0.2\"/><rect x=\"190\" y=\"80\" width=\"40\" height=\"40\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><rect x=\"70\" y=\"130\" width=\"160\" height=\"30\" rx=\"6\" fill=\"#ECF5E6\" stroke=\"#3F8F2D\" stroke-width=\"1.5\"/><text x=\"80\" y=\"148\" fill=\"#1E4D12\" font-family=\"Inter\" font-weight=\"700\" font-size=\"8\">Meeting Room A (Active)</text><g filter=\"drop-shadow(0 8px 20px rgba(30, 77, 18, 0.08))\"><rect x=\"250\" y=\"100\" width=\"90\" height=\"40\" rx=\"8\" fill=\"#ffffff\" stroke=\"rgba(63, 143, 45, 0.1)\"/><text x=\"258\" y=\"118\" fill=\"#3F8F2D\" font-family=\"Inter\" font-weight=\"800\" font-size=\"10\">Desk #12</text><text x=\"258\" y=\"130\" fill=\"#888\" font-family=\"Inter\" font-weight=\"600\" font-size=\"7\">Booked</text></g></svg>",
  "features": [
    {"title": "Custom Workspace Management", "desc": "Complete digital workflows for desk reservations and calendar bookings.", "icon": "grid"},
    {"title": "IoT-Driven Efficiency", "desc": "Direct commands and sync with office smart locks, schedules, and lighting units.", "icon": "settings"},
    {"title": "Scalable Architecture", "desc": "Built to handle growing operations from one co-working hub to global locations.", "icon": "database"},
    {"title": "Seamless UX", "desc": "Unified responsive portal across all devices with instant calendar rendering.", "icon": "analytics"}
  ],
  "impact_stats": [
    {"value": "85%", "label": "Office Efficiency", "icon": "trending-up"},
    {"value": "1.5K", "label": "Daily Bookings", "icon": "check"},
    {"value": "500+", "label": "IoT Nodes", "icon": "grid"}
  ],
  "extra_card_title": "Core Philosophy",
  "extra_card_text": "Every product is built with an intentional balance of functionality, design, and technology. The focus is not just on building an application, but on creating an engaging digital experience that solves physical space management problems.",
  "extra_stats": [
    {"value": "FlutterFlow", "label": "Frontend Tool"},
    {"value": "Node.js", "label": "Backend System"},
    {"value": "IoT APIs", "label": "Control Hub"}
  ]
}'::jsonb WHERE id = '2c5ff661-4b4f-47c9-b968-5d4ef77eedfa';

-- 8. No-App Transport Booking
UPDATE public.projects SET case_study_data = '{
  "hero_subtitle": "A high-performance web-first transport booking system that works seamlessly on all devices without requiring any app installation.",
  "core_focus": "Efficient Booking Accessibility without high-barrier app installs.",
  "title_accent": "Booking Platform",
  "mission": "Provide a high-availability transportation booking method that works on all devices via web or lightweight interfaces.",
  "delivery": "Optimized UX Pipeline → Instant Driver Allocation → Zero-Install Booking.",
  "tech_stack_string": "Logistics & Transportation (Enterprise SaaS)",
  "overview_text": "This project addresses the friction of high-barrier mobile applications in the transportation sector. By creating a high-performance web-first system, we enable users to book transport instantly without downloading a massive app, saving storage and reducing onboarding time.",
  "overview_svg": "<svg viewBox=\"0 0 400 220\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"220\" rx=\"24\" fill=\"#ECF5E6\" opacity=\"0.5\"/><circle cx=\"80\" cy=\"150\" r=\"60\" fill=\"none\" stroke=\"rgba(101, 163, 13, 0.1)\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"150\" r=\"100\" fill=\"none\" stroke=\"rgba(101, 163, 13, 0.05)\" stroke-width=\"2\"/><rect x=\"50\" y=\"40\" width=\"220\" height=\"130\" rx=\"12\" fill=\"#ffffff\" stroke=\"rgba(0,0,0,0.03)\" stroke-width=\"2\" filter=\"drop-shadow(0 10px 20px rgba(0,0,0,0.02))\"/><circle cx=\"65\" cy=\"52\" r=\"4\" fill=\"#ff5f56\"/><circle cx=\"75\" cy=\"52\" r=\"4\" fill=\"#ffbd2e\"/><circle cx=\"85\" cy=\"52\" r=\"4\" fill=\"#27c93f\"/><rect x=\"100\" y=\"49\" width=\"120\" height=\"6\" rx=\"3\" fill=\"#ECF5E6\"/><rect x=\"65\" y=\"70\" width=\"70\" height=\"45\" rx=\"6\" fill=\"#f4f8ef\" stroke=\"rgba(101, 163, 13, 0.1)\"/><rect x=\"145\" y=\"70\" width=\"110\" height=\"15\" rx=\"4\" fill=\"#E8F5E1\"/><rect x=\"145\" y=\"92\" width=\"70\" height=\"8\" rx=\"4\" fill=\"#65a30d\" opacity=\"0.3\"/><rect x=\"145\" y=\"105\" width=\"90\" height=\"8\" rx=\"4\" fill=\"#e2e8f0\"/><rect x=\"65\" y=\"125\" width=\"190\" height=\"35\" rx=\"8\" fill=\"#1E4D12\"/><rect x=\"135\" y=\"138\" width=\"50\" height=\"8\" rx=\"4\" fill=\"#ffffff\"/><path d=\"M330 110 C330 90 310 70 290 70 C270 70 250 90 250 110 C250 130 290 170 290 170 C290 170 330 130 330 110 Z\" fill=\"#84cc16\" opacity=\"0.2\"/><path d=\"M300 100 C300 94.5 295.5 90 290 90 C284.5 90 280 94.5 280 100 C280 105.5 284.5 110 290 110 C295.5 110 300 105.5 300 100 Z\" fill=\"#65a30d\"/><g transform=\"translate(200, 120)\"><ellipse cx=\"60\" cy=\"42\" rx=\"45\" ry=\"6\" fill=\"rgba(0,0,0,0.04)\"/><circle cx=\"35\" cy=\"38\" r=\"8\" fill=\"#1e293b\" stroke=\"#ffffff\" stroke-width=\"2\"/><circle cx=\"85\" cy=\"38\" r=\"8\" fill=\"#1e293b\" stroke=\"#ffffff\" stroke-width=\"2\"/><path d=\"M15 15 C15 10 20 8 30 8 L70 8 C80 8 85 10 90 15 L95 22 C98 25 98 32 95 35 L90 36 L15 36 Z\" fill=\"#ffffff\" filter=\"drop-shadow(0 4px 10px rgba(0,0,0,0.03))\"/><path d=\"M18 10 L65 10 L65 34 L18 34 Z\" fill=\"#E8F5E1\"/><path d=\"M68 12 L82 12 L88 20 L68 20 Z\" fill=\"#65a30d\" opacity=\"0.2\"/><circle cx=\"35\" cy=\"38\" r=\"3\" fill=\"#65a30d\"/><circle cx=\"85\" cy=\"38\" r=\"3\" fill=\"#65a30d\"/></g></svg>",
  "features": [
    {"title": "Zero-Onboarding Booking", "desc": "Instant seat reservation via optimized web portals or lightweight SMS/QR bridges.", "icon": "check-circle"},
    {"title": "Efficient Resource Allocation", "desc": "Predictive driver dispatching to ensure minimum wait times and route efficiency.", "icon": "users"},
    {"title": "Real-time Tracking", "desc": "Secure, persistent browser sessions giving users live updates on their vehicle status.", "icon": "analytics"},
    {"title": "High Accessibility", "desc": "Designed for low-bandwidth environments and legacy mobile device compatibility.", "icon": "award"}
  ],
  "impact_stats": [
    {"value": "3X", "label": "Increase in Bookings", "icon": "trending-up"},
    {"value": "60%", "label": "Faster Onboarding", "icon": "users"},
    {"value": "40%", "label": "Reduction in Drop-offs", "icon": "analytics"}
  ],
  "extra_card_title": "Technology Choice",
  "extra_card_text": "Utilizes advanced real-time WebSockets and lightweight frontend frameworks to deliver app-like performance within a standard mobile browser environment.",
  "extra_stats": [
    {"value": "WebSockets", "label": "Real-time Sync"},
    {"value": "Node.js", "label": "Server Engine"},
    {"value": "React", "label": "Client App"}
  ]
}'::jsonb WHERE id = 'dda4236c-73cb-430f-831a-41b840d7aed6';
