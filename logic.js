(function(root){
function safeStore(storage){return {get(k,f){try{const v=storage.getItem(k);return v===null?f:JSON.parse(v)}catch(e){return f}},set(k,v){try{storage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}}}
const api={safeStore};if(typeof module!=='undefined')module.exports=api;else root.Elxia=api;
})(typeof window!=='undefined'?window:globalThis);
