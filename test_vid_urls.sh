urls=(
"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d" # Editor working
"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e" # Money? Let's check
"https://images.unsplash.com/photo-1589332150937-b08e2b8c93b6" # Video camera?
"https://images.unsplash.com/photo-1578864757593-9c5c994592ce" # Film
"https://images.unsplash.com/photo-1518131672697-611bc6406a59" # 404
"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" # Tech?
)
for url in "${urls[@]}"; do
  status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  echo "$status - $url"
done
