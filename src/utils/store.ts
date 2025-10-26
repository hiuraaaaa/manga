
export type HistoryItem = { slug:string; title:string; cover:string; chapter:number; at:number }
const KEY='mr.history'; const FAV='mr.fav'
export const history={
  list():HistoryItem[]{ const raw=localStorage.getItem(KEY); return raw? JSON.parse(raw):[] },
  push(item:HistoryItem){ const cur=history.list().filter(i=>!(i.slug===item.slug&&i.chapter===item.chapter)); cur.unshift(item); localStorage.setItem(KEY, JSON.stringify(cur.slice(0,50))) }
}
export const fav={
  list():string[]{ const raw=localStorage.getItem(FAV); return raw? JSON.parse(raw):[] },
  toggle(slug:string){ const cur=fav.list(); const i=cur.indexOf(slug); if(i>=0) cur.splice(i,1); else cur.unshift(slug); localStorage.setItem(FAV, JSON.stringify(cur)) },
  has(slug:string){ return fav.list().includes(slug) }
}
