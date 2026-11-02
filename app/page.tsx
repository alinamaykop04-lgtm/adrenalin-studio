import ProjectGrid from '@/components/ProjectGrid';
import './hero.css';

export default function Home() {
  return <main>
    <section className="hero" aria-label="Алина Миллер за работой над муралом">
      <div className="heroTitle">ADRENALIN<br/>STUDIO</div>
      <div className="heroSub">
        <span>Visual artist / designer</span>
        <span>Art direction × space × digital</span>
        <span>2014—2026</span>
      </div>
    </section>
    <ProjectGrid/>
    <section id="about" className="about">
      <div>ABOUT</div>
      <div className="aboutText">Independent visual practice across physical space, image-making and digital experiences.</div>
    </section>
  </main>;
}
