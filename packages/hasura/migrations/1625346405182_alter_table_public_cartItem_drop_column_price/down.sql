alter table "public"."cartItem" alter column "price" drop not null;
alter table "public"."cartItem" add column "price" text;
