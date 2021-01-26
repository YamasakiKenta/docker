FROM php:5-apache
RUN apt-get update && apt-get install -y libmemcached-dev zlib1g-dev \
    && pecl install memcached-2.2.0 \
    && docker-php-ext-enable memcached
RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    mysql \
    && apt-get clean \
    && a2enmod rewrite
