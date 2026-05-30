# Zaid Shaikh

**Architecting resilient data ecosystems and scalable software systems.**

MS Computer Science student at Northeastern University (4.0 GPA) graduating in December 2026. I specialize in designing scalable distributed systems, cloud-native lakehouses, and production-grade pipelines. Beyond simply connecting modern tools, I am deeply committed to building and understanding the foundational architecture of the systems I engineer.

🎯 Actively seeking **Fall 2026 Internships/Co-ops** and **Full-Time** opportunities in Data Engineering, SWE/SDE, Analytics Engineering, and BI.

[LinkedIn](https://www.linkedin.com/in/zaidshaikhengineer/)
[Email](mailto:shaikh.zaid@northeastern.edu)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://zaid-data.vercel.app/)

---

## 📊 GitHub Stats

![Zaid's GitHub Stats](https://github-readme-stats.vercel.app/api?username=DiazSk&show_icons=true&theme=default&hide_border=true)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=DiazSk&layout=compact&hide_border=true)

---

## 🛠️ Tech Stack

- **Languages:** Python, SQL, Java, Bash
- **Big Data & Streaming:** Apache Airflow, Apache Kafka, Apache Flink, Apache Spark (PySpark), dbt, Great Expectations, Delta Lake, Parquet
- **Databases:** PostgreSQL, MySQL, Snowflake, Redis, TimescaleDB, DuckDB, Cassandra, DynamoDB
- **Cloud & DevOps:** AWS (S3, EC2, Glue, IAM, Redshift, CloudWatch), Azure (Databricks, Data Factory, Data Lake), Terraform, Docker, Kubernetes Git, GitHub Actions, CI/CD

---

## 💼 Experience

### Graduate Teaching Assistant — Machine Learning (CS6140) — Northeastern University, Khoury College of Computer Sciences

*May 2026 - Present*

- Held weekly office hours debugging student Python implementations of PCA, multiple linear regression, and Ridge/Lasso, working through algorithm internals and scikit-learn pipelines with a graduate cohort.
- Graded course assignments on a 10 to 12 day turnaround, reviewing model code, train/test splitting logic, and written analyses against the course rubric.

### NLP Research Assistant — Northeastern University, Khoury College of Computer Sciences

*Sept 2025 — Present*

- Engineered a Composite Semantic Drift Score for a co-authored COLM 2026 paper on LLM paraphrasing, as measured by cumulative meaning loss exceeding 331% of safety thresholds across 36,827 records, by integrating SBERT, METEOR, and ROUGE-L signals into a single weighted index.
- Architected automated evaluation pipelines in Python to process 4,817 complex records, engineering batched scoring mechanisms that replaced manual analysis workflows.
- Eliminated missing-field errors and achieved 100% data completeness by enforcing strict Pydantic schema contracts and staged quality gates across multi-modal data ingestion pipelines.
- Optimized embedding throughput and reduced pipeline runtime to under 75 seconds by implementing all-mpnet-base-v2 batch encoding and fingerprint-based cache reuse.
- Quantified non-linear semantic drift across multi-hop text generation chains, as measured by a Hop A to Hop B t-statistic of 213.15, by running paired t-test and Wilcoxon signed-rank validation scripts over the full evaluation set.
- Engineered a scalable multi-model ingestion matrix utilizing directory-driven loaders and metadata injection, automating data processing across 7 distinct domains without manual intervention.

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

*I believe in building things the right way — production-grade code, proper documentation, and solutions that actually work.*