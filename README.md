# ⛪️ Voice of God - Church Website

## 📕 The Back Story

My dad's church organization isn't so tech-savvy, and I noticed they didn't have a website. I thought this would be a great opportunity to use my skills in full-stack development to construct a website for our church organization. <strong>Although it's a work in progress, the website is hosted LIVE NOW at this link [HERE](https://www.iglesiavozdedios.net)</strong> <code>(or visit www.iglesiavozdedios.net)</code>


## 🌅 App Vision

This project grows as my skills grow.
What started as a junior-developer portfolio piece is now an evolving, production-hosted system.

The current roadmap:

* **Migrate backend from Spring Boot → Quarkus**
* **Re-containerize using Docker + Compose** (not active yet, but long-term vision).
* **Harden security** (e.g., remove public DB exposure, private repo with secure CI/CD secrets).
* **Add new modules** like SMS announcements and online donations.

## 🧩 Main Modules

### **1. Events Module (Google Calendar API)**

* Auto-updates from the church’s Google Calendar.

### **2. Media Module (YouTube API)**

* Displays latest livestreams and recorded services.
* Embedded player with API-driven retrieval.

### **3. “Contact Us” System**

* General inquiry form saved to MYSQL DB

### **4. Prayer Request Module**

* Private submission form
* Stored securely for pastor/admin

### **5. Future Modules (Planned)**

* **Online Donations** integration
* **SMS Subscription / Announcements**
* **Better Admin Dashboard**

## 🛠️ Tech Stack
Architecture Diagram : [Link Here](https://app.diagrams.net/#G1OOL-6B8z6jaGWHHtPaoWh5BktkpsT5IH#%7B%22pageId%22%3A%22T9eGbRpf31z7ZIOLd12q%22%7D)
### **Frontend**

* JavaScript
* Nginx (serves the static build on EC2)

### **Backend**

* **Spring Boot (current)**
* **Quarkus (in-progress migration target)**

### **Database**

* MySQL on AWS

  * *(Currently exposed publicly — future goal: secure this behind conventional DB restrictions.)*

### **Infrastructure**

* AWS EC2 (Ubuntu)
* NGINX reverse proxy
* Route 53 domain + DNS
* Automatic HTTPS via certbot
* GitHub Actions for deployment

### **CI/CD (Current State)**

Two GitHub Actions workflows:

1. **Frontend Deploy**
2. **Backend Deploy**

Both SSH into the EC2 instance, `git pull`, and restart services manually — **no Docker in production yet**.

## 🧑‍💻 Local Development Guide

## ▶️ Start the Backend (Spring Boot — current)

> There's no command, just manually start it in IntelliJ.

## ▶️ Start the Frontend

Frontend runs on:

```
npm start
```

## 🔐 Security Notes (Important)

* Database is currently publicly accessible → **MUST be fixed next.**
* Repo is still public → making it private **may break CI/CD unless EC2 deploy keys are updated**.
* Long-term recommended:

  * Move all credentials → AWS Secrets Manager
  * Lock DB behind security groups
  * Rebuild CI/CD with GitHub OIDC or SSM Session Manager
  * Remove any hardcoded hostnames/keys

## 🤝 Contributions & Feedback

This is a personal/hobby project serving a real community.
Feedback, ideas, or improvements are always welcome.

## 🙏 Author

**Josue Castro**
Full-stack engineer • Son building for his father’s ministry

