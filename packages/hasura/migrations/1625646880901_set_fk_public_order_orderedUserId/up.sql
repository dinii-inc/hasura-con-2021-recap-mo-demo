alter table "public"."order"
  add constraint "order_orderedUserId_fkey"
  foreign key ("orderedUserId")
  references "public"."user"
  ("id") on update restrict on delete restrict;
