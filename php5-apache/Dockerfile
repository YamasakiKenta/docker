FROM php:5-apache
RUN apt-get update \
    && docker-php-ext-install \
    xdebug \
    pdo_mysql \
    mbstring \
    mysql \
    && apt-get clean \
    && a2enmod rewrite
