function setHorizontalScroll(){fancyScroll=$("html").hasClass("no-csstransitions")?new IScroll("#portfolio",{scrollX:!0,scrollY:!0,mouseWheel:!0,bounceTime:1e3,deceleration:.006,snap:"li",tap:!0,useTransform:!1,useTransition:!1,bindToWrapper:!0}):new IScroll("#portfolio",{scrollX:!0,scrollY:!0,mouseWheel:!0,bounceTime:1e3,deceleration:.006,snap:"li",tap:!0,bindToWrapper:!0})}function whatMedia(){window.matchMedia("only screen and (min-width: 1024px) and (orientation: landscape)").matches?(isMobile=!1,isTablet=!1,isDesktop=!0):window.matchMedia("only screen and (min-width: 768px)").matches?(isMobile=!1,isTablet=!0,isDesktop=!1):(isMobile=!0,isTablet=!1,isDesktop=!1)}var isMobile=!1,isTablet=!1,isDesktop=!1,fancyScroll=null;$(window).on("orientationchange resize",function(){whatMedia(),isDesktop?fancyScroll?setTimeout(function(){fancyScroll.refresh()},1e3):setHorizontalScroll():fancyScroll&&(fancyScroll.scrollTo(0,0),fancyScroll.destroy(),fancyScroll=null)}),$(document).ready(function(){whatMedia(),isMobile&&$("html").on("tap",".thumbnail",function(o){var e=$(this).find(".button").attr("href");window.open(e,"_self")}),isDesktop&&(setHorizontalScroll(),setTimeout(function(){fancyScroll.refresh()},1e3))});