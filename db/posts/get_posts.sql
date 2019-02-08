select 
users.username,
users.profile_pic,
posts.title
from users 
join posts on users.id=posts.author_id;