-- Run this file in Supabase Dashboard -> SQL Editor.
-- Creates a public-read icon bucket; only the configured admin email can upload/change/delete.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('app-icons','app-icons',true,1048576,array['image/png','image/jpeg','image/webp'])
on conflict (id) do update set public=true,file_size_limit=1048576,allowed_mime_types=array['image/png','image/jpeg','image/webp'];

drop policy if exists "Public can view Lock Room icons" on storage.objects;
create policy "Public can view Lock Room icons" on storage.objects
for select using (bucket_id='app-icons');

drop policy if exists "Only Lock Room admin can upload icons" on storage.objects;
create policy "Only Lock Room admin can upload icons" on storage.objects
for insert to authenticated with check (
 bucket_id='app-icons' and lower(coalesce(auth.jwt()->>'email',''))='salahudheen2006@gmail.com'
);

drop policy if exists "Only Lock Room admin can update icons" on storage.objects;
create policy "Only Lock Room admin can update icons" on storage.objects
for update to authenticated using (
 bucket_id='app-icons' and lower(coalesce(auth.jwt()->>'email',''))='salahudheen2006@gmail.com'
) with check (
 bucket_id='app-icons' and lower(coalesce(auth.jwt()->>'email',''))='salahudheen2006@gmail.com'
);

drop policy if exists "Only Lock Room admin can delete icons" on storage.objects;
create policy "Only Lock Room admin can delete icons" on storage.objects
for delete to authenticated using (
 bucket_id='app-icons' and lower(coalesce(auth.jwt()->>'email',''))='salahudheen2006@gmail.com'
);
