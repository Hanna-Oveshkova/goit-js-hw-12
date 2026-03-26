/* empty css                      */import{a as w,S as q,i}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const M="55034566-ab7afa6b701fa9ca43cfdd5cc",$="https://pixabay.com/api/";async function m(o,t=1){return(await w.get($,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector('input[name="search-text"]'),P=new q(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,keyboard:!0}),d=document.querySelector(".load-more");function g(o){const t=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:r,views:n,comments:v,downloads:S})=>`<li class="gallery-item">
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
                    <span>${v}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${S}</span>
                </p>
            </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",t),P.refresh()}function x(){y.innerHTML="",p&&(p.value="")}function b(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function B(){d.classList.remove("hidden")}function u(){d.classList.add("hidden")}function O(){d.disabled=!0}function E(){d.disabled=!1}const H=document.querySelector(".form"),R=document.querySelector(".load-more");let s=1,l="",f=0;H.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l){i.error({message:"Search field cannot be empty",position:"topRight"});return}s=1,x(),u(),b();try{const t=await m(l,s);if(f=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),B(),s*15>=f&&(u(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}finally{L()}});R.addEventListener("click",async()=>{s+=1,O(),b();try{const o=await m(l,s);g(o.hits),E();const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),s*15>=f&&(u(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
