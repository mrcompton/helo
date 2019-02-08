select
posts.title,
posts.img,
posts.content,
users.username,
users.profile_pic
from posts
join users on posts.author_id = users.id
where posts.id = $1