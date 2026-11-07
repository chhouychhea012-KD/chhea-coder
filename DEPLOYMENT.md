# Production deployment: chheacoder.pro

This repository is a Next.js 16 application. It must run as a Node.js service behind Nginx; it is not a static HTML site.

## 1. DNS and AWS prerequisites

The Hostinger DNS records should be:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `32.236.38.89` |
| CNAME | `www` | `chheacoder.pro` |

In the AWS EC2 security group, allow inbound TCP `80` and `443` from `0.0.0.0/0` and `::/0`. Keep SSH `22` limited to your own IP address.

## 2. Initial Ubuntu setup

Connect to the server, then run these commands one block at a time:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx git curl ufw
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
node --version
npm --version
```

Allow the web server while keeping SSH enabled:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 3. Clone and build the application

The requested deployment directory is `/var/www/html`.

```bash
sudo mkdir -p /var/www/html
sudo chown -R $USER:$USER /var/www/html
cd /var/www/html
git clone https://github.com/chhouychhea012-KD/chhea-coder.git chhea-coder
cd /var/www/html/chhea-coder
cp .env.example .env.production
sed -i 's#https://your-portfolio-domain.example#https://chheacoder.pro#' .env.production
npm ci
npm run lint
npm run typecheck
npm run build
```

Start it with PM2 and make it survive server reboots:

```bash
cd /var/www/html/chhea-coder
pm2 start npm --name chhea-coder -- start -- -p 3000
pm2 save
pm2 startup systemd
```

Run the exact `sudo` command printed by `pm2 startup systemd`, then run `pm2 save` again. Confirm the app responds locally:

```bash
curl -I http://127.0.0.1:3000
pm2 status
```

## 4. Configure Nginx

Create `/etc/nginx/sites-available/chheacoder.pro`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name chheacoder.pro www.chheacoder.pro;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

Enable it and disable Nginx's default site:

```bash
sudo nano /etc/nginx/sites-available/chheacoder.pro
sudo ln -s /etc/nginx/sites-available/chheacoder.pro /etc/nginx/sites-enabled/chheacoder.pro
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 5. Add HTTPS and canonical redirects

Only run this after both domain records resolve to the server:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d chheacoder.pro -d www.chheacoder.pro --redirect --agree-tos -m chheadeveloper@gmail.com
sudo certbot renew --dry-run
```

Then edit the HTTPS `server` block that Certbot created so it begins with this redirect. This makes `https://chheacoder.pro` the one canonical domain, while preserving `www` visitors:

```nginx
if ($host = www.chheacoder.pro) {
    return 301 https://chheacoder.pro$request_uri;
}
```

Test and reload after the change:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

After HTTPS works, add these headers to the canonical HTTPS server block and reload Nginx. They improve browser security without blocking the portfolio's external map, fonts, or social links:

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

## 6. Verify the live deployment

```bash
curl -I https://chheacoder.pro
curl -I https://www.chheacoder.pro
curl https://chheacoder.pro/robots.txt
curl https://chheacoder.pro/sitemap.xml
```

The second command should return a `301` redirect to the non-`www` domain. The sitemap should list the homepage and all project case studies.

## 7. Publish updates later

```bash
cd /var/www/html/chhea-coder
git pull --ff-only
npm ci
npm run build
pm2 reload chhea-coder --update-env
```

## 8. Submit to search engines

After HTTPS is live, verify the `https://chheacoder.pro` domain in Google Search Console and submit `https://chheacoder.pro/sitemap.xml`. Search indexing and rankings are not immediate or guaranteed; titles, useful page content, page speed, HTTPS, backlinks, and real search demand determine performance over time.
