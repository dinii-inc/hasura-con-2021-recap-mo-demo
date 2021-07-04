alter table "public"."order" alter column "price" drop not null;
alter table "public"."order" add column "price" text;
