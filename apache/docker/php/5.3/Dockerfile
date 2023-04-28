FROM php:5.3-apache
# RUN apt-get update && apt-get install -y libmemcached-dev zlib1g-dev
# RUN pecl install memcached
# RUN docker-php-ext-enable memcached
# RUN pecl install xdebug-2.2.7 && docker-php-ext-enable xdebug
RUN pecl install xdebug-2.2.7
# RUN docker-php-ext-install pdo_mysql mbstring mysql 
RUN apt-get clean a2enmod rewrite
