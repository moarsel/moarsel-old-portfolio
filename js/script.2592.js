!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(){"use strict";$(document.body).on("click",".cv-link",function(){$(".curriculum-vitae").slideDown(350)}),$(document.body).on("click",".close-cv",function(){$(".curriculum-vitae").slideUp(350)}),$('[rel="tooltip"]').tooltip(),$(".thumbnail").hover(function(){$(this).find(".caption").slideDown(250)},function(){$(this).find(".caption").slideUp(250)})}();