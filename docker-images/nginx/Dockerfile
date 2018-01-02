FROM node

#install nginx, lua and luajwt
RUN apt-get -y update
RUN apt-get install -y lua5.1 nginx-extras luarocks vim
RUN luarocks install --server=http://rocks.moonscript.org luajwt

#create scripts file under nginx and copy lua script into it
RUN mkdir /etc/nginx/scripts

#copy site configuration file into nginx
COPY proxy-site /etc/nginx/sites-enabled/
RUN rm -rf /etc/nginx/site-enabled/default

#start nginx
#RUN nginx
#run a no end command to make the container won't stop
CMD ["top"]

