import"./assets/styles-3fbb2dc4.js";const a=document.querySelector(".feedback-form"),m="feedback-form-state";a.addEventListener("input",l);a.addEventListener("submit",r);function l(t){if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"){const e=a.querySelector('[name="email"]').value,o=a.querySelector('[name="message"]').value;e.trim()!==""||o.trim()!==""?localStorage.setItem(m,JSON.stringify({email:e,message:o})):localStorage.removeItem(m)}}function r(t){t.preventDefault();const{email:e,message:o}=JSON.parse(localStorage.getItem(m));e.trim()!==""&&o.trim()!==""&&(console.log({email:e,message:o}),localStorage.removeItem(m),a.reset())}function s(){const t=localStorage.getItem(m);if(t!==null){const e=JSON.parse(t);a.querySelector('[name="email"]').value=(e==null?void 0:e.email)||"",a.querySelector('[name="message"]').value=(e==null?void 0:e.message)||""}}s();
//# sourceMappingURL=commonHelpers2.js.map