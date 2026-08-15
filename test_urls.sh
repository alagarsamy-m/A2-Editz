urls=(
"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
"https://images.unsplash.com/photo-1573356023348-77c865f37508"
"https://images.unsplash.com/photo-1583121274602-3e2820c69888"
"https://images.unsplash.com/photo-1557672172-298e090bd0f1"
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
"https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b"
"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
"https://images.unsplash.com/photo-1536240478700-b869070f9279"
"https://images.unsplash.com/photo-1585647347483-22b66260dfff"
)
for url in "${urls[@]}"; do
  status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  echo "$status - $url"
done
