FROM php:8.1-apache

RUN apt-get update && apt-get install -y \
  libonig-dev libpq-dev \
  && docker-php-ext-install pdo_mysql mysqli pdo_pgsql

RUN apt-get install -y \
  libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
  && docker-php-ext-configure gd --with-jpeg \
  && docker-php-ext-install -j$(nproc) gd

RUN apt-get install -y \
  unzip libzip-dev \ 
  && docker-php-ext-install zip

RUN a2enmod rewrite

COPY --from=composer /usr/bin/composer /usr/bin/composer