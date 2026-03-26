/* empty css                      */import{a as q,S as M,i}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const $="55034566-ab7afa6b701fa9ca43cfdd5cc",P="https://pixabay.com/api/";async function m(o,t=1){return(await q.get(P,{params:{key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),f=document.querySelector('input[name="search-text"]'),x=new M(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,keyboard:!0}),d=document.querySelector(".load-more");function h(o){const t=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:r,views:n,comments:S,downloads:w})=>`<li class="gallery-item">
            <a href="${c}">
                <img class="gallery-image"
                    src="${a}"
                    alt="${e}">
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${r}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${n}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${S}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${w}</span>
                </p>
            </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),x.refresh()}function B(){p.innerHTML="",f&&(f.value="")}function g(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function O(){d.classList.remove("hidden")}function L(){d.classList.add("hidden")}function E(){d.disabled=!0}function H(){d.disabled=!1}const A=document.querySelector(".form"),v=document.querySelector(".load-more");let s=1,l="",u=0;A.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l){i.error({message:"Search field cannot be empty",position:"topRight"});return}s=1,B(),L(),g();try{const t=await m(l,s);if(u=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),O(),s*15>=u&&(v.classList.add("hidden"),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}finally{b()}});v.addEventListener("click",async()=>{s+=1,E(),g();try{const o=await m(l,s);h(o.hits),H();const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),s*15>=u&&(L(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({message:"Something went wrong. Please try again!"})}finally{b()}});
//# sourceMappingURL=index.js.map
