/* empty css                      */import{a as q,S as P,i as s}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const $="55034566-ab7afa6b701fa9ca43cfdd5cc",M="https://pixabay.com/api/";async function m(o,t=1){return(await q.get(M,{params:{key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector('input[name="search-text"]'),x=new P(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,keyboard:!0}),y=document.querySelector(".load-more");function g(o){const t=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:r,views:i,comments:S,downloads:v})=>`<li class="gallery-item">
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
                    <span>${i}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${S}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${v}</span>
                </p>
            </div>
        </li>`).join("");f.insertAdjacentHTML("beforeend",t),x.refresh()}function B(){f.innerHTML="",p&&(p.value="")}function b(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function w(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}const O=document.querySelector(".form"),R=document.querySelector(".load-more");let n=1,l="",u=0;O.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l){s.error({message:"Search field cannot be empty",position:"topRight"});return}n=1,B(),d(),b();try{const t=await m(l,n);if(u=t.totalHits,t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),w(),n*15>=u&&(d(),s.info({message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}});R.addEventListener("click",async()=>{n+=1,d(),b();try{const o=await m(l,n);g(o.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:a*2,behavior:"smooth"}),n*15>=u){s.info({message:"We're sorry, but you've reached the end of search results."});return}w()}catch{s.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
