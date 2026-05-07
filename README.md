# Zaid Shaikh

**Architecting resilient data ecosystems and scalable software systems.**

MS Computer Science student at Northeastern University (4.0 GPA) graduating in December 2026. I specialize in designing scalable distributed systems, cloud-native lakehouses, and production-grade pipelines. Beyond simply connecting modern tools, I am deeply committed to building and understanding the foundational architecture of the systems I engineer.

🎯 Actively seeking **Summer & Fall 2026 Internships/Co-ops** and **Full-Time** opportunities in Data Engineering, SWE/SDE, Analytics Engineering, and BI.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zaidshaikhengineer/)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:shaikh.zaid@northeastern.edu)

---

## 🛠️ Tech Stack

- **Languages:** Python, SQL, Java, Bash
- **Data & Streaming:** Apache Airflow, Apache Kafka, Apache Flink, Apache Spark (PySpark), dbt, RabbitMQ
- **Databases:** PostgreSQL, MySQL, Snowflake, Redis, TimescaleDB, DuckDB, Cassandra, DynamoDB
- **Cloud & DevOps:** AWS (S3, EC2, Glue, IAM, Redshift, CloudWatch), Terraform, Docker, CI/CD
- **AI & Productivity:** Claude Code, Gemini, Great Expectations, Pytest

---

## 💼 Experience

### NLP Research Assistant — Northeastern University, Khoury College of Computer Sciences

*Jan 2026 — Present*

- Co-authoring paper submitted to COLM 2026 on semantic drift in LLM paraphrasing; engineered a Composite Semantic Drift Score integrating SBERT, METEOR, and ROUGE-L across 36,827 records, revealing cumulative meaning loss reaching 331% of safety thresholds.
- Automated semantic-drift evaluation to make analysis reproducible and decision-ready, as measured by processing 4,817 source-paraphrase pairs across 7 metrics with composite correlation of r = 0.92, by building a Python metric-orchestration pipeline for batched scoring and aggregation.

---

## 📂 Featured Projects

### [Chatflow Messaging System](https://github.com/DiazSk/Chatflow-Messaging-System)

- **Tech:** Java, RabbitMQ, Redis, MySQL, WebSockets, AWS EC2
- **Impact:** Engineered a write-behind persistence pipeline sustaining throughput of **21,091 msg/s** with zero data loss. Architected CQRS-style read/write separation and optimized read-path latency to **13ms at 1M-row scale**.

---

### [NYC Taxi Data Lakehouse](https://github.com/DiazSk/NYC-Taxi-Data-Lakehouse)

- **Tech:** Terraform, AWS S3, Glue, Airflow, PySpark, dbt, Docker
- **Impact:** Processed **100GB+** NYC taxi trip records (**2.8M rows**) through PySpark ETL on AWS Glue. Provisioned infrastructure using Terraform IaC and automated daily batch pipelines via Airflow DAGs.

---

### [Real-Time Cryptocurrency Market Analyzer](https://github.com/DiazSk/Real-Time-Cryptocurrency-Market-Analyzer)

- **Tech:** Kafka, Flink (Java), Redis, PostgreSQL, Docker
- **Impact:** Achieved **99% polling reduction** via Kafka key-based partitioning and Flink exactly-once processing. Architected a hybrid Redis/TimescaleDB dual-storage system serving 20+ concurrent users with sub-second response times.

---

### [E-Commerce Data Warehouse (Olist)](https://github.com/DiazSk/sql-data-warehouse-project)

- **Tech:** Python, PostgreSQL, Snowflake, Airflow, Docker, marimo
- **Impact:** Designed a Medallion-architecture warehouse (Bronze → Silver → Gold) centralizing **14 sources for 1.6M+ records**. Reduced SQL query latency by **90%** via query tuning and data normalization.

---

### [Scalable E-Commerce Analytics Platform](https://github.com/DiazSk/Modern-E-commerce-Analytics-Platform)

- **Tech:** Apache Airflow, dbt, PostgreSQL, AWS, Terraform, Docker
- **Architecture:** S3 Data Lake → dbt transformations → Analytics Mart with SCD Type 2 dimensions
- **Impact:** Optimized query time from **4.2s → 1.1s (74% improvement)** across 3 data sources and 50K+ events.

---

## 📫 Contact

- 📧 [shaikh.zaid@northeastern.edu](mailto:shaikh.zaid@northeastern.edu)
- 💼 [LinkedIn](https://www.linkedin.com/in/zaidshaikhengineer/)
- 📍 Seattle, WA

---

<p align="center">
  <i>I believe in building things the right way — production-grade code, proper documentation, and solutions that actually work.</i>
</p>
