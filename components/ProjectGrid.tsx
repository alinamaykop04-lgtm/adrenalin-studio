'use client';
import {useState} from 'react';
import Link from 'next/link';
import {projects, Category} from '@/data/projects';
export default function ProjectGrid(){
 const [filter,setFilter]=useState<'all'|Category>('all');
 const visible=filter==='all'?projects:projects.filter(p=>p.categories.includes(filter));
 return <section id="work"><div className="workHead"><h2>Selected Work</h2><div className="filters">{(['all','space','digital','art'] as const).map(f=><button className={filter===f?'active':''} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div></div><div className="grid">{visible.map((p,i)=><Link key={p.slug} className="card" href={`/work/${p.slug}`}><div className="thumb"><span>{String(i+1).padStart(2,'0')} {p.title}</span></div><div className="meta"><span>{p.categories.join(' / ')}</span><span>{p.year} ↗</span></div></Link>)}</div></section>
}
