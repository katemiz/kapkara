#!/bin/bash

# Define the web group
GROUP="www-data"

EDITOR='editor'
MEDIA='media'
STORAGE='/home/katemiz/STORAGE'
STORAGE_EDITOR="$STORAGE/$EDITOR"
STORAGE_MEDIA="$STORAGE/$MEDIA"


echo "Running user is :$USER"

sudo usermod -aG www-data $USER


echo "Setting ownership..."
# 1. Everything owned by you, but belongs to the web group
sudo chown -R $USER:$GROUP .

# 2. Specifically ensure storage and cache are writable by both
sudo chown -R $USER:$GROUP storage bootstrap/cache
#  sudo chown -R $GROUP:$GROUP storage bootstrap/cache

sudo rm public/$EDITOR
sudo rm public/$MEDIA








echo "Setting permissions..."
# 3. Standard files to 664, directories to 775
sudo find . -type f -exec chmod 664 {} +
sudo find . -type d -exec chmod 775 {} +

echo "Applying inheritance bits..."
# 4. Set the SGID bit so new files inherit the 'www-data' group
sudo find storage bootstrap/cache -type d -exec chmod g+s {} +



sudo chown -R $USER:$USER permissions.sh
sudo chmod 755 permissions.sh

# =================================================================
# 
# FILE STORAGE
# FOLDERS
# 
# =================================================================
ln -s $STORAGE_EDITOR public/$EDITOR
ln -s $STORAGE_MEDIA public/$MEDIA

sudo chown -R $USER:$GROUP $STORAGE public/$EDITOR public/$MEDIA
sudo chmod -R 775 $STORAGE

# 1. Set directories to 775 (rwx)
sudo find $STORAGE -type d -exec chmod 775 {} \;

# 2. Set files to 664 (rw- for owner and group, r-- for others)
sudo find $STORAGE -type f -exec chmod 664 {} \;

# This command ensures that any new files or subdirectories created inside 
# /home/katemiz/STORAGE/editor will automatically inherit the group ownership 
# of the parent directory (www-data)
# Apply the Setgid bit (the '2' in the beginning)
sudo chmod 2775 $STORAGE
# =================================================================



echo "Clearing Laravel caches..."
php artisan optimize:clear









echo "Done! Permissions are synchronized."