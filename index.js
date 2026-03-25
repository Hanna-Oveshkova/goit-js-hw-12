/* empty css                      */import{a as S,S as q,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const w="55034566-ab7afa6b701fa9ca43cfdd5cc",$="https://pixabay.com/api/";async function p(o,t=1){return(await S.get($,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),f=document.querySelector('input[name="search-text"]'),x=new q(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,keyboard:!0});function h(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:i,comments:L,downloads:v})=>`<li class="gallery-item">
            <a href="${c}">
                <img class="gallery-image"
                    src="${s}"
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
                    <span>${L}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${v}</span>
                </p>
            </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",t),x.refresh()}function O(){m.innerHTML="",f&&(f.value="")}function g(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}const P=document.querySelector(".form"),n=document.querySelector(".load-more");let a=1,d="",u=0;P.addEventListener("submit",async o=>{if(o.preventDefault(),d=o.target.elements["search-text"].value.trim(),!d){l.error({message:"Search field cannot be empty",position:"topRight"});return}a=1,O(),n.classList.add("hidden"),g();try{const t=await p(d,a);if(u=t.totalHits,t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),n.classList.remove("hidden"),a*15>=u&&(n.classList.add("hidden"),l.info({message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}finally{b()}});n.addEventListener("click",async()=>{a+=1,g();try{const o=await p(d,a);h(o.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),a*15>=u&&(n.classList.add("hidden"),l.info({message:"We're sorry, but you've reached the end of search results."}))}catch(o){console.log(o)}finally{b()}});
//# sourceMappingURL=index.js.map
