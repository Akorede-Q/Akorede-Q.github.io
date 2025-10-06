# Data Quality Report

- Source file: `/workspace/data/datavzpxh0jl.part`

- Rows: 398233, Columns: 21


## Schema

See `schema_summary.csv`.


## Missingness

Rows with any nulls: 950. See `nulls_summary.csv` and `rows_with_any_nulls.csv` (if present).


## Duplicates

Full duplicate rows: 0. See `duplicates_full_rows.csv` if > 0.

Candidate key: ['year', 'month', 'carrier', 'airport']. Duplicates on key: 0. See `duplicates_by_candidate_key.csv` if > 0.


## Outliers (IQR)

Rows flagged as outliers in any numeric column: 128054. See `outliers_counts_iqr.csv` and `outliers_iqr_rows.csv`.


## Rare categories

See `rare_categories.csv` if present.


## Text anomalies

See `text_whitespace_summary.csv` and per-column files if present.


## Invalid values & rule checks

See `invalid_values_summary.csv` and `invalid_*.csv` files if present.


## Temporal coverage

Missing months overall between min and max period: 0. See `missing_months_overall.csv` if > 0.
