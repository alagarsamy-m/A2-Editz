urls=(
"https://images.unsplash.com/photo-1518131672697-611bc6406a59"
"https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a"
"https://images.unsplash.com/photo-1550745165-9bc0b252726f"
"https://images.unsplash.com/photo-1519741497674-611481863552"
"https://images.unsplash.com/photo-1633511115865-06a9282361e6"
"https://images.unsplash.com/photo-1522869635100-9f4c5e86faa3"
"https://images.unsplash.com/photo-1542204165-65bf26472b9b"
"https://images.unsplash.com/photo-1594248554743-16788db3d043"
"https://images.unsplash.com/photo-1485846234645-a62644f84728"
)
for url in "${urls[@]}"; do
  status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  echo "$status - $url"
done
