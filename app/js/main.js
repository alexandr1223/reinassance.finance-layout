window.addEventListener("DOMContentLoaded",()=>{$("img.img-svg").each((function(){var t=$(this),a=t.attr("class"),e=t.attr("src");$.get(e,(function(e){var r=$(e).find("svg");void 0!==a&&(r=r.attr("class",a+" replaced-svg")),!(r=r.removeAttr("xmlns:a")).attr("viewBox")&&r.attr("height")&&r.attr("width")&&r.attr("viewBox","0 0 "+r.attr("height")+" "+r.attr("width")),t.replaceWith(r)}),"xml")}))});