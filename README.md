# Zaid Shaikh

Data Engineer and Backend SWE. I build distributed pipelines and backend systems where latency, scale, and data correctness are the actual constraints, not afterthoughts.

MS Computer Science, Northeastern University (Dec 2026, 4.0 GPA). Seattle, WA.

Available for Summer and Fall 2026 co-op. Open to full-time roles starting December 2026.

[shaikh.zaid@northeastern.edu](mailto:shaikh.zaid@northeastern.edu) | [LinkedIn](https://www.linkedin.com/in/zaidshaikhengineer/) | [zaid-data.vercel.app](https://zaid-data.vercel.app/)

---

## Experience

**Research Co-author, The Laundering Effect** | Khoury College, Northeastern (Fall 2025 - Present)
COLM 2026, under review. Measuring cumulative semantic erosion under iterative LLM paraphrasing across 36,800+ records. Implemented a composite Semantic Drift Score (SBERT / METEOR / ROUGE-L) that surfaces trajectory-level degradation invisible to single-step metrics.

**Graduate Teaching Assistant, Machine Learning (CS6140)** | Khoury College, Northeastern (May 2026 - Present)
Weekly office hours debugging student Python implementations of PCA, regression, and regularization. Graded assignments reviewing model code, train/test logic, and written analyses.

---

## Projects

### [Chatflow](https://github.com/DiazSk/Chatflow-Messaging-System): Real-Time Messaging Infrastructure

MySQL's 2-5ms insert latency coupled message consumption to persistence speed under write-through, capping throughput at roughly 500 msg/s regardless of broker capacity. Write-behind persistence with in-memory batching (2k-5k rows/commit) decoupled the two paths entirely. CQRS isolation kept read and write models independent so write-side failures could not starve read queries.

Result: 21,091 msg/s sustained, 13ms read latency at 1M-row scale, zero data loss across 1M messages.

`Java` `RabbitMQ` `Redis` `MySQL` `HikariCP` `WebSockets` `AWS EC2`

---

### [Healthcare Data Lakehouse](https://github.com/DiazSk/healthcare-lakehouse-azure): Clinical Pipeline on Azure

Raw Parquet gives throughput but no correctness guarantees. When audit compliance is a hard requirement, you need ACID transactions for safe concurrent writes, schema evolution without table rewrites, and time-travel for point-in-time reconstruction. Delta Lake provides all three. Raw Parquet provides none of them.

Result: 9.6M records, 80GB processed across Bronze, Silver, and Gold layers. 35% Databricks compute reduction via partition pruning and incremental load patterns.

`Azure Data Factory` `Delta Lake` `Azure Databricks` `PySpark` `Azure Key Vault` `ADLS Gen2`

---

### [Real-Time Crypto Analyzer](https://github.com/DiazSk/Real-Time-Cryptocurrency-Market-Analyzer): Full-Stack Streaming Platform

300 REST polling calls per minute per user was the baseline. The real constraint was fan-out: as concurrent WebSocket users scaled, polling volume multiplied and upstream rate limits became the bottleneck. Kafka pub/sub collapsed 300 calls to 2 events per market update. Dual-path storage separates read concerns: Redis for sub-1ms hot reads serving 20+ concurrent WebSocket users, TimescaleDB for OHLC aggregations and cold historical queries that would thrash an in-memory store.

Result: 99% polling reduction, sub-100ms end-to-end latency from market tick to browser.

`Next.js 16` `FastAPI` `Apache Kafka` `Apache Flink (Java)` `Redis` `TimescaleDB` `Docker`

---

### [NYC Taxi Data Lakehouse](https://github.com/DiazSk/NYC-Taxi-Data-Lakehouse): 100GB Batch Pipeline on AWS

Athena charges $5 per TB scanned. On 100GB+ of raw Parquet, every dbt model run across a full development cycle compounds that cost fast. AWS Glue with serverless Spark ETL runs deduplication, schema normalization, and null-handling once at ingest, producing a clean materialized layer. The clean layer is a guaranteed fact for downstream dbt models rather than a per-query assumption.

Result: 2.8M clean records, 96.8% data retention through quality gates. Fully reproducible via Terraform IaC.

`AWS Glue` `PySpark` `Apache Airflow` `dbt` `AWS S3` `Terraform` `Docker`

---

### [Scalable E-Commerce Analytics Platform](https://github.com/DiazSk/Modern-E-commerce-Analytics-Platform): CLV Attribution Pipeline

SCD Type 1 overwrites history. Historical attribution is a hard business requirement for segment-specific customer lifetime value analysis: you need to reconstruct which customer state drove which revenue event at any point in time. SCD Type 2 preserves the full slowly-changing dimension history needed for that reconstruction. The 2-3x storage footprint increase is the deliberate tradeoff.

Result: 146 dbt tests covering schema contracts, freshness, and referential integrity. Query time 4.2s to 1.1s across 50K+ events.

`Apache Airflow` `dbt` `PostgreSQL` `AWS S3` `Terraform` `Docker`

---

### [E-Commerce Data Warehouse (Olist)](https://github.com/DiazSk/sql-data-warehouse-project): Star Schema Warehouse

Snowflake schemas normalize storage but multiply join depth for read-heavy OLAP queries. Wide tables simplify queries but introduce double-counting in aggregations when orders and order items share a fact row. A strict star schema with two grain-specific fact tables (orders vs. items) resolves both failure modes: each fact table has one grain, one join path, no aggregation ambiguity.

Result: 90% query latency reduction over the pre-modeled baseline across 14 source systems and 1.6M+ records.

`Python` `PostgreSQL` `Snowflake` `Apache Airflow` `Docker`

---

## Stack

**Data Platforms & Pipelines:** Apache Spark (PySpark), Apache Airflow, Apache Kafka, Apache Flink, dbt, Azure Data Factory, ELT/ETL Pipelines, RabbitMQ, Medallion Architecture  
**Storage & Databases:** PostgreSQL, MySQL, MongoDB, Redis, TimescaleDB, Snowflake, DuckDB, AWS S3, Delta Lake  
**Cloud & Infrastructure:** AWS (Glue, S3, Redshift, IAM, CloudWatch), Azure (ADLS Gen2, Data Factory, Databricks, Key Vault), Terraform, Docker, GitHub Actions, GitLab CI/CD Pipelines, Jenkins  
**Languages:** Python, Java, SQL, Typescript, Bash  
**Product & APIs:** FastAPI, Next.js 16, React 19, Tailwind CSS, shadcn/ui, Zod, WebSockets  
**Observability & Quality Assurance:** Great Expectations, dbt Tests, Pytest, JUnit, Mockito, Data Quality Checks, Data Lineage, Pre-commit Hooks, Power BI, Metabase, Streamlit  