(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=document.querySelector(".burger"),u=document.querySelector(".sidebar-close"),c=document.querySelector(".sidebar"),l=document.body;a.addEventListener("click",()=>{c.classList.add("active"),l.classList.add("body-lock")});u.addEventListener("click",()=>{c.classList.remove("active"),l.classList.remove("body-lock")});document.addEventListener("click",r=>{!c.contains(r.target)&&!a.contains(r.target)&&c.classList.contains("active")&&f()});function f(){c.classList.remove("active"),l.classList.remove("body-lock")}document.querySelector(".footer-arrow").addEventListener("click",r=>{r.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});document.querySelectorAll(".slider-container").forEach(r=>{const i=r.querySelector(".slider").querySelector(".slider-track"),n=r.querySelector(".slider-prev"),e=r.querySelector(".slider-next"),t=i.querySelectorAll(".slider-item");let o=0;function d(){i.style.transform=`translateX(-${o*100}%)`}e.addEventListener("click",()=>{o<t.length-1&&(o++,d())}),n.addEventListener("click",()=>{o>0&&(o--,d())})});