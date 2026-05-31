# 1. Pull the fresh code from your repository
git pull origin main

# 2. Update backend dependencies safely without interrupting the configuration
php artisan config:clear
composer install --no-dev --optimize-autoloader

# 3. Clean install asset dependencies and run the production compiler
npm ci
npm run build

# 4. Atomic high-performance re-cache (Instant changeover for users)
php artisan config:cache
php artisan route:cache
php artisan view:cache