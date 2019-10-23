FROM nginx
COPY ./ /usr/share/nginx/html/
RUN rm /usr/share/nginx/html/run.sh /usr/share/nginx/html/Dockerfile
RUN cd /usr/share/nginx/html/ && echo "<h1>Letztes Update: $(date)</h1><ul>" > uebersicht.html && find ./ -name "*.html" -printf "<li>%P</li>" >> /usr/share/nginx/html/uebersicht.html && echo "</ul>" >> /usr/share/nginx/html/uebersicht.html && cd -
RUN chmod -R 777 /usr/share/nginx/html/
EXPOSE 80
