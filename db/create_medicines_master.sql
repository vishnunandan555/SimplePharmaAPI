-- db/create_medicines_master.sql
-- Standalone Indian Medicines Master Catalog Schema for SimplePharmaAPI
-- Compatible with Supabase PostgreSQL

create extension if not exists pg_trgm;

create table if not exists medicines_master (
  id uuid primary key default gen_random_uuid(),
  brand_name text not null,
  normalized_brand text not null,
  generic_name text not null,
  normalized_generic text not null,
  ingredients jsonb not null default '[]',  -- [{"salt": "Ketotifen", "strength_mg": 1.0, "unit": "mg"}]
  dosage_form text not null default 'tablet',
  manufacturer text,
  therapeutic_class text,
  food_timing_rule text default 'with_or_without_food', -- 'empty_stomach', 'with_food', 'with_or_without_food'
  food_instruction text,
  food_badge text,
  recommended_frequency text default '1x',
  frequency_label text default '1x Daily',
  senior_safe_daily_max_mg numeric,
  max_daily_ceiling_mg numeric,
  is_critical boolean default false,
  fda_application_number text,
  source text default 'master_catalog',
  created_at timestamptz default now()
);

-- Trigram indices for sub-15ms fuzzy typing and autocomplete search
create index if not exists idx_medmaster_brand_trgm on medicines_master using gin (normalized_brand gin_trgm_ops);
create index if not exists idx_medmaster_generic_trgm on medicines_master using gin (normalized_generic gin_trgm_ops);
create index if not exists idx_medmaster_brand on medicines_master (brand_name);
create index if not exists idx_medmaster_generic on medicines_master (generic_name);

-- Row Level Security
alter table medicines_master enable row level security;
drop policy if exists "Public read-only access for medicines_master" on medicines_master;
create policy "Public read-only access for medicines_master"
  on medicines_master for select
  using (true);

-- Allow service role full management
drop policy if exists "Service role manage medicines_master" on medicines_master;
create policy "Service role manage medicines_master"
  on medicines_master for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
