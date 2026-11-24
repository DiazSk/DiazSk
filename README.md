<a href="https://zaid-data.vercel.app/">
  <img src="assets/hero.png" width="100%" alt="Zaid Shaikh — Data Engineer, Backend Systems. Seattle, WA. Available December 2026. MS Computer Science, Northeastern. shaikh.zaid@northeastern.edu">
</a>

> I build the infrastructure layer — streaming pipelines, distributed warehouses, and
> high-throughput backend systems that move millions of records reliably.

[**PORTFOLIO →**](https://zaid-data.vercel.app/) · [**EMAIL →**](mailto:shaikh.zaid@northeastern.edu) · [**LINKEDIN →**](https://www.linkedin.com/in/zaidshaikhengineer/)

MS Computer Science, Northeastern University — December 2026, 4.0 GPA. Seattle, WA.
Open to full-time roles starting December 2026.

---

## HOW THESE WERE MEASURED

A number on its own is a claim. Each of these says how it was taken.

| | | |
|:--|:--|:--|
| `01` | **21,091 msg/s** <br> `SUSTAINED THROUGHPUT` | Write-through coupled message consumption to MySQL's 2–5 ms insert latency, capping throughput near **500 msg/s** regardless of broker capacity. Write-behind persistence with in-memory batching decoupled the two paths — **42× the baseline**, zero data loss across 1M messages. |
| `02` | **400 clients** <br> `LIVE FAN-OUT, 0 LOST` | Highest WebSocket step tested, every client receiving the same trades as the best-served one (delivery ratio 1.000) at **p95 166 ms** exchange-to-client. Across four injected faults — Flink TaskManager kill, Kafka restart, 30 s Postgres and Redis outages — **0 trades lost, 0 inconsistent candles**. |
| `03` | **2 of 5** <br> `HYPOTHESES REFUTED` | Five hypotheses written down before any transformation ran; two of them failed, and the dashboard publishes the failures instead of quietly dropping them. A headline "+2,223% premium" rested on **11 providers**, so it renders with a `thin sample` badge rather than as a finding — warn, don't hide. Measured over 9,660,252 Medicare claims, 13 quality gates and 108 tests. |

---

## WORK

### [Chatflow — Real-Time Messaging Infrastructure](https://github.com/DiazSk/Chatflow-Messaging-System)

`▪ BACKEND ENGINEERING` · **21,091 msg/s sustained**

MySQL's 2–5 ms insert latency coupled message consumption to persistence speed under
write-through, capping throughput at roughly 500 msg/s regardless of broker capacity.
Write-behind persistence with in-memory batching (500, 2K or 3K rows per commit, sized by queue depth) decoupled the two
paths entirely. CQRS isolation kept read and write models independent, so write-side
failures could not starve read queries.

**Result:** 21,091 msg/s sustained · 13 ms read latency at 1M-row scale · zero data loss across 1M messages.

<details>
<summary><b>Architecture</b></summary>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/diagrams/chatflow-dark.png">
  <img src="assets/diagrams/chatflow.png" width="100%" alt="Chatflow architecture: on the write path, chat clients send messages through a WebSocket gateway, RabbitMQ and a consumer pool into an in-memory batch buffer, which commits to MySQL in batches of 500, 2K or 3K rows, sized by queue depth. On the read path, queries hit a Redis read model with a stampede guard; MySQL commits invalidate it and misses fall back to MySQL's reader pool.">
</picture>

Write path and read path never share a bottleneck. The batch buffer absorbs broker
bursts at memory speed; MySQL commits batches of 500, 2K or 3K rows behind it, sized by queue depth. Redis serves the
read model, so a stalled write never blocks a query.

</details>

`Java` `RabbitMQ` `Redis` `MySQL` `HikariCP` `WebSockets` `AWS EC2`

---

### [Medicare Reimbursement Gap Analyzer — Lakehouse with In-Browser SQL](https://github.com/DiazSk/healthcare-lakehouse-azure)

`▪ DATA ENGINEERING` · **9.66M claims, served with no backend**

A cube cannot reproduce a row-level filter. Pre-aggregating the Gold marts made one
dashboard panel **41% wrong while still looking plausible** — the totals were internally
consistent, just answering a different question than the filter implied. A parity gate
now re-derives every panel from the fact table and fails the build on disagreement.
The same pass caught two of the 13 quality assertions that could never fail: a `NULL`
inside `isin("F","O",None)` makes the predicate `NULL` for every row, so the test
passed on any input. Serving is tiered Parquet read client-side by DuckDB-WASM over
HTTP range requests, so 9.66M rows are queryable with no backend at all.

**Result:** 9,660,252 claim rows from 3.06 GB source · full medallion run in **231 s on a laptop** · 13 quality gates, 10 parity assertions, 108 automated tests · **2 of 5 hypotheses refuted**, and the dashboard reports the refutations.

<details>
<summary><b>Architecture</b></summary>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/diagrams/medicare-dark.png">
  <img src="assets/diagrams/medicare.png" width="100%" alt="Medicare medallion: CMS 2023 claims move from Bronze (3.06 GB CSV as delivered) to Silver (28 explicit casts, 9,660,252 rows), Gold (provider, HCPCS and geography dimensions plus one NPI by HCPCS by place-of-service fact), five pre-aggregated marts with 99 DQ checks and 13 assertions, and through a parity gate to tiered Parquet served by DuckDB-WASM on GitHub Pages with no backend. The original Azure path is retired; the pipeline now runs locally on PySpark 3.5 and Delta 3.3 in 231 seconds.">
</picture>

Every path resolves through one function, so `LAKEHOUSE_LOCAL_ROOT` redirects the whole
pipeline from cloud to laptop without a fork — which is what saved the project when the
Azure subscription was retired. The notebooks are byte-for-byte identical across both.

</details>

`PySpark 3.5` `Delta Lake` `Azure Databricks` `Azure Data Factory` `ADLS Gen2` `Azure Key Vault` `Terraform` `DuckDB-WASM`

---

### [Real-Time Crypto Analyzer — Streaming Market Terminal](https://github.com/DiazSk/Real-Time-Cryptocurrency-Market-Analyzer)

`▪ SYSTEMS ENGINEERING` · **400 concurrent clients, 0 lost trades**

Every trade for 8 Coinbase pairs, deduplicated on trade ID, rolled into 1-minute OHLCV
candles in **event time** — watermarks allow 2 s of out-of-order data — with an EWMA
z-score detector on top. Sinks carry different guarantees on purpose: JDBC writes are
insert-or-skip (effectively once), Kafka alerts are transactional and committed per 30 s
checkpoint (exactly once), Redis is at-least-once and clients dedupe. Chaos testing
earned its keep by finding a real bug: the API's pub/sub listener died on redis-py's own
`ConnectionError`, so live trades never resumed after a Redis restart. Fixed, and covered
by a test.

**Result:** 17,969 trades ingested with **0 duplicates and 0 missed** · REST p95 **12.8 ms** at 10 concurrent clients (1,640 req/s) · 400-client WebSocket fan-out at delivery ratio **1.000**, p95 166 ms exchange-to-client · 0 lost trades across a Flink TaskManager kill, a Kafka broker restart, and 30 s Postgres and Redis outages.

<details>
<summary><b>Architecture</b></summary>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/diagrams/crypto-dark.png">
  <img src="assets/diagrams/crypto.png" width="100%" alt="Real-time crypto analyzer: Coinbase trades for 8 pairs flow through a Python producer and Kafka into Apache Flink, which deduplicates them and builds 1-minute candles in event time. Flink writes candles to TimescaleDB (insert-or-skip), the latest prices to Redis (at-least-once) and alerts back to Kafka exactly once. The producer also sends live trades straight to Redis. FastAPI and a Next.js terminal serve both stores, and Airflow runs hourly backfills, gap repair and a dbt build against TimescaleDB.">
</picture>

Disagreement between the pipeline and Coinbase's official candles is reported in a mart,
never failed as a test — close price matches 99.5–100% of minutes on the liquid pairs.
Gap repair recovered 43 of 57 gaps **exactly by trade ID**; the 14 above the 10,000-trade
cap are skipped and logged rather than silently interpolated.

</details>

`Python` `Apache Kafka` `Apache Flink (Java)` `TimescaleDB` `Redis` `dbt` `Apache Airflow` `FastAPI` `Next.js` `Docker`

---

### [TripMate — AI Trip Planner for Web and iPhone](https://github.com/DiazSk/tripmate)

`▪ FULL-STACK · AI SYSTEMS` · **108 s → 41 s median story latency, found in the traces**

A chatbot itinerary sounds right and doesn't know the museum is shut on Tuesdays. TripMate
plans each day against data fetched for the actual travel dates (forecast, public holidays,
OpenStreetMap opening hours) and writes it out with times, costs and walking legs. Every model
call goes through one dispatcher that writes a trace row on every outcome, across two transports
(the Claude CLI and the Anthropic API). Those traces showed the CLI making a background model
call on 87 of 88 requests; it was removed, and a 2,048-token thinking budget took story scripts
from 108 s to 41 s at the median. Answers can't name a place that was never fetched: places
render from the evidence records the model's ids point at, and one unknown id replaces the whole
answer with "nothing checked".

**Result:** ~127k lines of TypeScript across web and an Expo iPhone app · 2,508 automated tests ·
MapLibre chosen over Cesium by measurement: **3.4× fewer draw calls** under a drag, p95 frame
9.8 ms vs 25.2 ms · story-mode dropped frames **45 → 7** with in-browser neural speech on WebGPU.

<details>
<summary><b>Architecture</b></summary>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/diagrams/tripmate-dark.png">
  <img src="assets/diagrams/tripmate.png" width="100%" alt="TripMate architecture: the web app and the iPhone app call 52 Next.js API routes over REST and SSE. The routes use fail-soft fact fetchers that call open travel data, plan checks for evidence ids and guardrails, and runClaude(), the one choke point that prompts Claude through the CLI or the Anthropic API and writes every call to SQLite or Turso, where trips are also stored.">
</picture>

The facts and the rules are kept apart: the planning skill holds rules, the context file holds
fetched facts only, and the prompt holds the ask. A plan that changed behind the chat's back is
detected by fingerprint and announced to the model rather than silently replayed.

</details>

`TypeScript` `Next.js 16` `React 19` `Expo / React Native` `SQLite (libsql)` `Claude API` `MapLibre GL` `CesiumJS` `WebGPU`

---

### ALSO SHIPPED

| Result | Project |
|:--|:--|
| **2.8M** <br> `CLEAN RECORDS` | [**NYC Taxi Data Lakehouse**](https://github.com/DiazSk/NYC-Taxi-Data-Lakehouse) · `▪ DATA ENGINEERING` <br> 100 GB batch pipeline on AWS. Athena charges $5/TB scanned, so Glue runs deduplication, schema normalization and null-handling **once at ingest** — the clean layer becomes a guaranteed fact for downstream dbt models rather than a per-query assumption. 96.8% retention through quality gates, fully reproducible via Terraform. <br> `AWS Glue` `PySpark` `Apache Airflow` `dbt` `AWS S3` `Terraform` `Docker` |
| **109.8M** <br> `REAL EVENTS` | [**E-commerce Funnel Lakehouse**](https://github.com/DiazSk/ecommerce-funnel-lakehouse) · `▪ ANALYTICS ENGINEERING` <br> REES46 clickstream, Oct–Nov 2019, on Databricks. Black Friday week lifted cart reach from 9.2% to **11.7%** (+2.5 pp, 95% CI +2.46 to +2.55) — but a four-day tracking gap nearly told the opposite story. Nov 15 logged 468,262 carts and **zero purchases**; leaving Nov 14–17 in the baseline reverses every headline result, and each reversal still looks statistically solid. The analysis finds the gap, measures what it costs, and excludes it. A dbt test now warns on any day with carts but no purchases. <br> `Databricks` `Delta Lake` `PySpark` `dbt` `Unity Catalog` `GitHub Actions` |
| **90%** <br> `LATENCY REDUCTION` | [**E-Commerce Data Warehouse (Olist)**](https://github.com/DiazSk/sql-data-warehouse-project) · `▪ ANALYTICS ENGINEERING` <br> Snowflake schemas multiply join depth; wide tables double-count when orders and order items share a fact row. A strict star schema with **two grain-specific fact tables** resolves both — one grain, one join path, no aggregation ambiguity. 14 source systems, 1.6M+ records. <br> `Python` `PostgreSQL` `Snowflake` `Apache Airflow` `Docker` |

<img src="assets/claim.png" width="100%" alt="I build the layer between raw data and the millisecond that matters.">

## STACK

| | |
|:--|:--|
| `DATA PLATFORMS & PIPELINES` | `Apache Spark (PySpark)` `Apache Airflow` `Apache Kafka` `Apache Flink` `dbt` `Databricks` `Azure Data Factory` `RabbitMQ` <br> ETL/ELT pipelines · Medallion architecture · Asset Bundles · Unity Catalog |
| `STORAGE & DATABASES` | `PostgreSQL` `MySQL` `Redis` `TimescaleDB` `Snowflake` `Delta Lake` `DuckDB` `DuckDB-WASM` `AWS S3` <br> MongoDB |
| `CLOUD & INFRASTRUCTURE` | `AWS` `Azure` `Terraform` `Docker` `GitHub Actions` <br> Glue · S3 · Redshift · IAM · CloudWatch · ADLS Gen2 · Databricks · Key Vault · GitLab CI · Jenkins |
| `LANGUAGES` | `Python` `Java` `SQL` `TypeScript` <br> Bash |
| `PRODUCT & APIS` | `FastAPI` `Next.js 16` `React 19` `WebSockets` <br> Tailwind CSS · shadcn/ui · Zod |
| `OBSERVABILITY & QUALITY` | `Great Expectations` `dbt tests` `Pytest` `JUnit` <br> data lineage · quality checks · pre-commit hooks · Power BI · Metabase · Streamlit |

---

## EXPERIENCE

**Research Co-author — The Laundering Effect** · Khoury College, Northeastern · Fall 2025 – Present
`▪ COLM 2026, UNDER REVIEW`

Measuring cumulative semantic erosion under iterative LLM paraphrasing across 36,800+
records. Implemented a composite Semantic Drift Score (SBERT / METEOR / ROUGE-L) that
surfaces trajectory-level degradation invisible to single-step metrics. 2 of 5 original
hypotheses reported refuted.

**Graduate Teaching Assistant — Machine Learning (CS6140)** · Khoury College, Northeastern · May 2026 – Present

Weekly office hours debugging student Python implementations of PCA, regression and
regularization. Graded assignments reviewing model code, train/test logic and written
analyses.

---

## OPEN TO THE RIGHT OPPORTUNITY

Full-time Data Engineering and Backend roles starting December 2026.

[**shaikh.zaid@northeastern.edu**](mailto:shaikh.zaid@northeastern.edu) · [**LinkedIn**](https://www.linkedin.com/in/zaidshaikhengineer/) · [**zaid-data.vercel.app**](https://zaid-data.vercel.app/)

<img src="assets/wordmark.png" width="100%" alt="Zaid Shaikh — Seattle, WA. Open to full-time, December 2026.">
