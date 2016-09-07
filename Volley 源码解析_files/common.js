$(function(){statistics()});function statistics(){$(".statistics-class").click(function(){for(var a=$(this).next(".statistics-value"),b=a?a.length:0,c=0;c<b;c++){var d=$(a[c]),e;if(d&&(e=d.val())&&0<e.length){d=createCORSRequest("GET","http://statistics.codekk.com/"+e);if(!d)break;d.onload=function(){};d.onerror=function(){};d.send()}}})}
function createCORSRequest(a,b){var c=new XMLHttpRequest;"withCredentials"in c?c.open(a,b,!0):"undefined"!=typeof XDomainRequest?(c=new XDomainRequest,c.open(a,b)):c=null;return c}function favOrUnCommon(a,b){favOrUn(a,b,$("#isFavorite"),$("#favorite"),$("#host").val()+"/images/icon/ic_favorite_white.png",$("#host").val()+"/images/icon/ic_favorite_black.png")}
function favOrUnItem(a,b,c){favOrUn(a,b,$("#isFavorite"+c),$("#favorite"+c),$("#host").val()+"/images/icon/ic_favorite_gray_hollow.png",$("#host").val()+"/images/icon/ic_favorite_gray_solid.png")}
function favOrUn(a,b,c,d,e,g){d.attr("disabled","true");var f=0<c.val();e=$("#host").val()+(f?"/api/common/unfavorite":"/api/common/favorite");$.post(e,{id:b,type:a},function(a,b){d.removeAttr("disabled");favoriteBack(a)&&(f?(d.attr("title","\u6536\u85cf"),d.attr("src",$("#host").val()+"/images/icon/ic_favorite_white.png"),c.val(0)):(d.attr("title","\u53d6\u6d88\u6536\u85cf"),d.attr("src",$("#host").val()+"/images/icon/ic_favorite_black.png"),c.val(1)))}).fail(function(){showErrorMsg("\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668\u6216\u670d\u52a1\u5668\u5185\u90e8\u51fa\u9519")})}
function favoriteBack(a){try{var b=jsonParse(a);if(null!=b&&0===b.code)return showSuccessMsg(b.message),!0;isUserNotLogin(b.code);showErrorMsg(b.message);return!1}catch(c){return showErrorMsg("\u670d\u52a1\u5668\u8fd4\u56de\u7ed3\u679c\u51fa\u9519"),!1}}function isUserNotLogin(a){return 1E5<a&&100100>a?(window.location=$("#host").val()+"/users/oauth/github?returnurl="+$("#currentUrl").val(),!0):!1}
function showErrorMsg(a){0<$("#tipsDiv").length&&($("#tipsDiv").removeClass("bg-success").addClass("bg-danger"),$("#tipsDiv").html(a),$("#tipsDiv").fadeIn(300).delay(600).fadeOut(300))}function showSuccessMsg(a){0<$("#tipsDiv").length&&($("#tipsDiv").removeClass("bg-danger").addClass("bg-success"),$("#tipsDiv").html(a),$("#tipsDiv").fadeIn(300).delay(600).fadeOut(300))}function isString(a){return"string"===typeof a||a instanceof String}
function stringNotEmpty(a){return isString(a)&&a&&0!=a.length}function trimItemVal(a){var b;0<$(a).length&&(b=$(a).val(),null!=b&&(b=b.trim()));return b}function parseIntZero(a){return(a=parseInt(a))?a:0}function parseFloatZero(a){return(a=parseFloat(a))?a:0}function length(a){return null!=a?a.length:0}function setViewShow(a,b){var c="#"+a;$(c).length&&(b?$(c).show():($(c).removeClass("hidden"),$(c).hide()))}function jsonParse(a){try{return JSON.parse(a)}catch(b){return null}};
