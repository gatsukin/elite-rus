"use strict";function init(){for(var myMap=new ymaps.Map("map",{center:[56.010563,92.852572],zoom:5,controls:[]}),points=[],pointsArr=[{coordinates:[56.02057,92.85253],type:"house",name:"Ультрасовременный коттедж в стиле Hi-tech в Сочи",price:"23 млн. руб",link:"/detail.html",city:"г. Сочи",image:"/assets/img/temp/temp1.jpg",sq:"23",views:"390"},{coordinates:[51.02057,92.85253],type:"house",name:"tested",price:"23 млн. руб",link:"/detail.html",city:"г. Сочи",image:"/assets/img/temp/temp2.jpg",sq:"23",views:"100"}],i=0;i<pointsArr.length;i++){var pointLayout=ymaps.templateLayoutFactory.createClass('\n      <div class="point" id="point-'.concat(i,'">\n      </div>\n    ')),item={type:"Feature",id:"".concat(i+1),info:{type:"".concat(pointsArr[i].type),name:"".concat(pointsArr[i].name),price:"".concat(pointsArr[i].price),link:"".concat(pointsArr[i].link),city:"".concat(pointsArr[i].city),image:"".concat(pointsArr[i].image),sq:"".concat(pointsArr[i].sq),views:"".concat(pointsArr[i].views)},geometry:{type:"Point",coordinates:pointsArr[i].coordinates},properties:{balloonContent:"123",clusterCaption:"нежилое готовое",hintContent:"нежилое готовое"},options:{id:"".concat(i+1),hasBalloon:!1,hasHint:!1,zIndex:3e3,iconLayout:pointLayout,iconShape:{type:"Circle",coordinates:[10,10],radius:15}}};points.push(item)}window.myObjects=ymaps.geoQuery({type:"FeatureCollection",features:points}).addToMap(myMap);for(var mapHTMLInner=document.getElementById("HTMLInner"),_loop=function(_i){var el=points[_i],id="point-".concat(_i),template='\n      <div class="card '.concat(el.info.type,' opened">\n          <div class="card--wrap">\n            <div class="card--img">\n              <img src="').concat(el.info.image,'" alt="">\n            </div>\n            <div class="card__main">\n              <button class="mark">\n                <svg>\n                  <use xlink:href="#star" />\n                </svg>\n              </button>\n              <div class="card__main--title">\n                ').concat(el.info.name,'\n              </div>\n              <div class="card__main--city">\n                ').concat(el.info.city,'\n              </div>\n              <div class="card__main--price">\n                ').concat(el.info.price,'\n              </div>\n              <a href="').concat(el.info.link,'" class="card__main--link link">\n                Перейти\n              </a>\n              <div class="info">\n                <div class="square">\n                  <span>').concat(el.info.sq,'</span> м<sup>2</sup>\n                </div>\n                <div class="review">\n                  <span>').concat(el.info.views,'</span>\n                  <svg>\n                    <use xlink:href="#views" />\n                  </svg>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      ');window.myObjects.search('options.id="'.concat(el.id,'"')).addEvents("click",function(){document.querySelectorAll(".point").forEach(function(element){element.classList.remove("open")}),mapHTMLInner.classList.remove("scrolled"),mapHTMLInner.innerHTML="",document.getElementById("".concat(id)).classList.add("open"),mapHTMLInner.insertAdjacentHTML("afterBegin",template),mapHTMLInner.classList.add("scrolled"),setTimeout(function(){mapHTMLInner.scrollIntoView({block:"start",behavior:"smooth"})},50)})},_i=0;_i<points.length;_i++)_loop(_i)}ymaps.ready(init);