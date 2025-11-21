<div align="center">
  
# Hi, I'm Zaid Shaikh 👋
  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zaidshaikhscientist/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zaid07sk@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DiazSk)

### Data Engineer | Big Data & Streaming | Cloud Infrastructure
**🎓 Computer Science @ Northeastern University | 🚀 Actively Seeking Opportunities for Summer 2026**

</div>

---

## 🎯 About Me

I'm a passionate **Data Engineer** focused on building scalable, reliable, and automated data platforms. With expertise in **distributed systems**, **real-time streaming**, and **cloud infrastructure**, I engineer robust solutions that turn raw data into actionable insights. I enjoy solving complex data challenges using modern technologies like Apache Spark, Flink, Kafka, and AWS.

### 💡 Core Competencies:
- **🏗️ Data Architecture**: Designing fault-tolerant ETL/ELT pipelines and data lakes/warehouses
- **⚡ Real-Time Processing**: Building low-latency streaming applications with Flink and Kafka
- **☁️ Cloud Engineering**: Architecting serverless and containerized solutions on AWS
- **🛠️ Data Ops**: Implementing CI/CD, Infrastructure as Code (Terraform), and Data Quality checks

---

## 🚀 Featured Projects

### 1. [Real-Time Cryptocurrency Market Analyzer](https://github.com/DiazSk/Real-Time-Cryptocurrency-Market-Analyzer)
**High-Throughput Stream Processing Engine**
![Flink](https://img.shields.io/badge/Apache_Flink-E6526F?style=for-the-badge&logo=apacheflink&logoColor=white) ![Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) ![TimescaleDB](https://img.shields.io/badge/TimescaleDB-FDC500?style=for-the-badge&logo=postgresql&logoColor=black)

> Engineered a low-latency pipeline processing crypto market data with **exactly-once semantics**. Implemented a **Dual-Storage Architecture** using Redis for sub-millisecond real-time access and TimescaleDB for efficient historical analysis.

```mermaid
graph LR
    A[CoinGecko API] -->|Poll 30s| B(Python Producer)
    B -->|JSON| C{Kafka}
    C -->|Topic: crypto-prices| D[Apache Flink]
    D -->|Tumbling Window| E{Dual Sink}
    E -->|Hot Data| F[(Redis)]
    E -->|Historical| G[(TimescaleDB)]
    F -->|Pub/Sub| H[FastAPI]
    G -->|Query| H
    H -->|WebSocket| I[Streamlit Dashboard]
```

<br>

### 2. [Modern E-Commerce Analytics Platform](https://github.com/DiazSk/Modern-E-commerce-Analytics-Platform)
**Enterprise-Grade Data Warehouse & ELT Pipeline**
![Airflow](https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white) ![dbt](https://img.shields.io/badge/dbt-FF694B?style=for-the-badge&logo=dbt&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)

<table>
<tr>
<td width="40%">

- **Scalable Data Warehouse:** Built a production-grade ELT pipeline orchestrating data ingestion into a **Star Schema** warehouse.
- **Data Quality & Ops:** Integrated **Great Expectations** for automated data validation and **Terraform** for IaC.
- **Business Intelligence:** Enabled data-driven decision making with comprehensive dashboards.

</td>
<td width="60%">
<img src="https://raw.githubusercontent.com/DiazSk/Modern-E-commerce-Analytics-Platform/main/docs/architecture/diagrams/high_level_architecture_diagram.png" alt="Architecture Diagram" width="100%">
</td>
</tr>
</table>

<br>

### 3. [Real-time NYC Taxi Data Platform](https://github.com/DiazSk/real-time-NYC-taxi-data-platform)
**Distributed Stream Processing at Scale**
![Spark](https://img.shields.io/badge/Apache_Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white) ![AWS EMR](https://img.shields.io/badge/AWS_EMR-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)

> Developed a scalable streaming platform to analyze high-volume NYC Taxi trip data in real-time. Leveraged **AWS EMR** for distributed processing and **S3** for durable data lake storage, implementing sliding window aggregations to detect traffic patterns instantly.

```mermaid
graph LR
    A[NYC Taxi Data] -->|Stream| B{Apache Kafka}
    B -->|Topic: trips| C[Apache Spark Streaming]
    C -->|Aggregations| D[(AWS S3 Data Lake)]
    C -->|Real-time Metrics| E[Dashboard]
    subgraph AWS Cloud
    C
    D
    end
```

---

## 🛠️ Technical Skills

### **Big Data & Streaming**
![Apache Spark](https://img.shields.io/badge/Apache_Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white)
![Apache Flink](https://img.shields.io/badge/Apache_Flink-E6526F?style=for-the-badge&logo=apacheflink&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white)
![Hadoop](https://img.shields.io/badge/Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black)

### **Data Engineering & Cloud**
![Apache Airflow](https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white)
![dbt](https://img.shields.io/badge/dbt-FF694B?style=for-the-badge&logo=dbt&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

### **Languages & Databases**
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Snowflake](https://img.shields.io/badge/Snowflake-29B5E8?style=for-the-badge&logo=snowflake&logoColor=white)

---

## 📊 GitHub Analytics

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=DiazSk&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dark&locale=en&hide_border=false" height="180" alt="stats graph" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=DiazSk&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=8&theme=dark&hide_border=false" height="180" alt="languages graph" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=DiazSk&theme=dark&hide_border=false" height="180" alt="streak graph" />
</div>

---

## 🏆 Certifications

- 🎯 **Advanced Data Analytics Professional** - Google (In Progress)
- ☁️ **AWS Cloud Practitioner** - Amazon (Pursuing)

---

## 💼 Leadership Principles in Action

### 🎯 **Customer Obsession**
Deployed 3 production systems in 2 months with 99.85% uptime, $10M+ demonstrated loss prevention, and 99.2% model accuracy.

### 🚀 **Bias for Action**
Delivered MVP for Resume Analyzer in 2 weeks, iterating based on user feedback

### 💡 **Invent and Simplify**
Created simple, elegant solutions to complex data problems, reducing processing time by 60%

### 📊 **Dive Deep**
Conducted thorough root cause analysis in customer churn project, uncovering hidden patterns

### ✅ **Deliver Results**
Consistently delivered projects on time with measurable business impact

---

## 🤝 Let's Connect!

<div align="center">

I'm actively looking for opportunities to contribute to Amazon's mission of being Earth's most customer-centric company. 
Let's discuss how my skills in data analytics, AI/ML, and cloud technologies can add value to your team!

📧 **Email**: [zaid07sk@gmail.com](mailto:zaid07sk@gmail.com)  
💼 **LinkedIn**: [linkedin.com/in/zaidshaikhscientist](https://www.linkedin.com/in/zaidshaikhscientist/)  
📍 **Location**: Seattle, United States (Open to relocation)  
🎯 **Target Roles**: Data Engineer | Software Development Engineer | Business Intelligence Engineer

</div>

---

<div align="center">
  
**"Working backwards from customer needs drives innovation"** - *Amazon Leadership Principle*

</div>