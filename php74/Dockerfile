# https://www.orzs.tech/docker-php-mysql-module/
FROM php:7.4-apache
RUN a2enmod rewrite
RUN docker-php-ext-install mysqli pdo_mysql
  # 最小構成（PNG 可）
RUN apt-get update &&\
  apt-get install -y zlib1g-dev libpng-dev unzip &&\
  docker-php-ext-install -j$(nproc) gd
RUN pecl install xdebug \
  && docker-php-ext-enable xdebug 
