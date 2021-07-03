alter table "public"."cartItem" alter column "quantity" drop not null;
alter table "public"."cartItem" add column "quantity" int4;
