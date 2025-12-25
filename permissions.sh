#!/bin/bash

# Define the web group
GROUP="www-data"

echo "Running user is :$USER"

sudo usermod -aG www-data $USER


echo "Setting ownership..."
# 1. Everything owned by you, but belongs to the web group
sudo chown -R $USER:$GROUP .

# 2. Specifically ensure storage and cache are writable by both
sudo chown -R $USER:$GROUP storage bootstrap/cache
#  sudo chown -R $GROUP:$GROUP storage bootstrap/cache


echo "Setting permissions..."
# 3. Standard files to 664, directories to 775
sudo find . -type f -exec chmod 664 {} +
sudo find . -type d -exec chmod 775 {} +


sudo chown -R $USER:$USER permissions.sh
sudo chmod 755 permissions.sh



echo "Applying inheritance bits..."
# 4. Set the SGID bit so new files inherit the 'www-data' group
sudo find storage bootstrap/cache -type d -exec chmod g+s {} +

echo "Clearing Laravel caches..."
php artisan optimize:clear

echo "Done! Permissions are synchronized."