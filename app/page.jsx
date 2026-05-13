import {
  AlertTriangle,
  ArrowRight,
  Baby,
  CheckCircle2,
  Clock,
  Droplet,
  Facebook,
  Globe,
  Heart,
  Home,
  Instagram,
  Mail,
  MapPin,
  PawPrint,
  Phone,
  PhoneCall,
  Pipette,
  ShieldAlert,
  Share2,
  Sparkles,
  Stethoscope,
  Thermometer,
  Utensils,
  Video
} from 'lucide-react';

const navItems = [
  ['Home', '/'],
  ['What Is Hypoglycemia', '/what-is-hypoglycemia'],
  ['Emergency Steps', '/emergency-steps'],
  ['Prevention', '/prevention'],
  ['Aftercare', '/aftercare'],
  ['FAQ', '/faq'],
  ['Contact', '/contact']
];

const quickTopics = [
  { icon: Droplet, title: 'What Hypoglycemia Is', text: 'Understand dangerously low blood sugar and why it happens fast.', href: '/what-is-hypoglycemia' },
  { icon: AlertTriangle, title: 'Signs to Look For', text: 'Recognize the early warning signs before it becomes critical.', href: '/what-is-hypoglycemia#warning-signs' },
  { icon: Pipette, title: 'How to Administer Pup-Lift', text: 'Step-by-step instructions for fast, safe support.', href: '/emergency-steps' },
  { icon: Heart, title: 'What to Do After', text: 'Aftercare steps to help your puppy recover safely.', href: '/aftercare' },
  { icon: ShieldAlert, title: 'Prevention Tips', text: 'Simple daily habits to help keep your puppy healthy and strong.', href: '/prevention' },
  { icon: Stethoscope, title: 'Important Disclaimer', text: 'Understand limitations and when to contact a veterinarian.', href: '/faq' }
];

const causes = ['Missed meals or not eating enough', 'Stress or excitement', 'Getting chilled', 'Overexertion', 'Illness or infection', 'Poor intake', 'Vomiting or diarrhea'];
const warningSigns = ['Weakness', 'Wobbling', 'Crying', 'Lethargy', 'Cold body', 'Glassy eyes', 'Tremors or shaking', 'Collapse', 'Seizures', 'Unresponsiveness'];
const administerSteps = ['Shake gently. Remove cap and ensure the dropper tip is clean.', 'Place a small amount on the gums or under the tongue.', 'Do not force large amounts if swallowing is poor.', 'Repeat tiny amounts every few minutes as needed until puppy perks up.', 'Once alert, offer a small meal.'];
const aftercare = [['Keep your puppy warm and comfortable.', Home], ['Observe closely for improvement.', Clock], ['Offer a small meal once your puppy is alert.', Utensils], ['Continue monitoring for at least 30–60 minutes.', CheckCircle2], ['Contact your veterinarian if symptoms persist or return.', PhoneCall]];
const prevention = [['Feed small, frequent meals throughout the day.', Utensils], ['Keep your puppy warm and cozy.', Home], ['Watch for early signs and act immediately.', AlertTriangle], ['Avoid overexertion and stress.', Sparkles], ['Monitor very small puppies extra closely.', Baby]];
const journeySteps = [['Notice Symptoms', 'Recognize the warning signs early and act quickly.', AlertTriangle], ['Administer Pup-Lift', 'Place small amount on gums or under tongue.', Pipette], ['Warm & Monitor', 'Keep warm, watch closely, and repeat if needed.', Thermometer], ['Feed & Follow Up', 'Once alert, offer food and continue monitoring.', Utensils]];
const faqs = [['How often should I give it?', 'Give small frequent amounts as needed until your puppy improves. Do not give large amounts at once.', Clock], ['When should I call a vet?', 'Call your veterinarian if symptoms do not improve, return, or if your puppy has a seizure or cannot swallow.', PhoneCall], ['Can I use it if my puppy is cold?', 'Yes. Warm your puppy while administering Pup-Lift. Cold puppies are at higher risk for hypoglycemia.', Thermometer]];

function Logo({ footer = false }) {
  return (
    <a className={footer ? 'logo logo-footer' : 'logo'} href="/" aria-label="Pup-Lift home">
      <svg className="logo-mark" viewBox="0 0 96 96" aria-hidden="true">
        <path d="M48 5C34.5 22 18 40.5 18 59c0 20.7 15.6 32 30 32s30-11.3 30-32C78 40.5 61.5 22 48 5Z" />
        <circle cx="34" cy="47" r="5.4" /><circle cx="44" cy="38" r="5.2" /><circle cx="54" cy="38" r="5.2" /><circle cx="63" cy="47" r="5.4" />
        <path d="M36.4 64c3.1-10.6 20.1-10.6 23.2 0 2.1 7.3-5.2 12.4-11.6 12.4S34.3 71.3 36.4 64Z" />
        <path className="logo-heart" d="M74 18c2.3-5.1 10.1-3.4 10.1 2.4 0 5.7-6.8 9.4-10.1 12.3-3.3-2.9-10.1-6.6-10.1-12.3 0-5.8 7.8-7.5 10.1-2.4Z" />
      </svg>
      <span className="logo-copy"><span className="logo-title">Pup-<em>Lift</em></span><span className="logo-subtitle">EMERGENCY SUPPORT<br />FOR TINY HEARTS <b>♡</b></span></span>
    </a>
  );
}

function HeroPuppy() {
  return <img className="hero-art" src="/hero-chihuahua-bottle.svg" alt="Cream Chihuahua puppy beside a Pup-Lift oral glucose dropper bottle" />;
}

function ProductBottle({ small = false }) {
  return <img className={small ? 'asset-bottle small' : 'asset-bottle'} src="/hero-chihuahua-bottle.svg" alt="Pup-Lift dropper bottle" />;
}

function EmergencyCard() {
  const steps = [['Warm the puppy', 'gently but quickly.', Thermometer], ['Rub Pup-Lift on', 'gums — under tongue.', Pipette], ['Monitor closely and', 'call a veterinarian.', PhoneCall]];
  return (
    <aside className="emergency-card" aria-labelledby="emergency-card-title">
      <h2 id="emergency-card-title">Puppy unresponsive?<em>♡ Start here.</em></h2>
      <div className="card-divider" />
      <div className="emergency-steps-list">{steps.map(([title, text, Icon], index) => <div className="emergency-step" key={title}><Icon className="emergency-icon" aria-hidden="true" /><span className="step-number">{index + 1}</span><span className="step-copy"><strong>{title}</strong><small>{text}</small></span></div>)}</div>
      <div className="card-warning">Act fast. You can save<br />your puppy’s life.</div>
    </aside>
  );
}

function QuickTopicRow() { return <section className="quick-topic-row" aria-label="Quick topic links">{quickTopics.map(({ icon: Icon, title, text, href }) => <a className="quick-topic-card" href={href} key={title}><Icon aria-hidden="true" /><div><h3>{title} <span>♡</span></h3><p>{text}</p></div></a>)}</section>; }

function InfoGrid() {
  return <section className="info-grid" aria-label="Main Pup-Lift information cards">
    <article className="info-card large-heart" id="what-is-hypoglycemia"><Droplet className="card-icon" aria-hidden="true" /><h2><span>1.</span> What Is Hypoglycemia? <em>♡</em></h2><p>Hypoglycemia is dangerously low blood sugar. In tiny puppies—especially toy Chihuahuas—it can happen suddenly and progress quickly.</p><div className="mini-alert"><PawPrint aria-hidden="true" />It is a medical emergency. Quick action can save your puppy’s life.</div></article>
    <article className="info-card watermark-paw"><PawPrint className="card-icon" aria-hidden="true" /><h2><span>2.</span> Common Causes <em>♡</em></h2><ul>{causes.map((item) => <li key={item}>{item}</li>)}</ul></article>
    <article className="info-card watermark-warning" id="warning-signs"><AlertTriangle className="card-icon" aria-hidden="true" /><h2><span>3.</span> Warning Signs <em>♡</em></h2><ul className="two-column-list">{warningSigns.map((item) => <li key={item}>{item}</li>)}</ul></article>
    <article className="info-card administer-card" id="administer"><Pipette className="card-icon" aria-hidden="true" /><h2><span>4.</span> How to Administer Pup-Lift <em>♡</em></h2><div className="administer-layout"><ProductBottle small /><ol>{administerSteps.map((item) => <li key={item}>{item}</li>)}</ol></div></article>
    <article className="info-card" id="aftercare"><Heart className="card-icon" aria-hidden="true" /><h2><span>5.</span> After Administering <em>♡</em></h2><div className="icon-row-list">{aftercare.map(([item, Icon]) => <p key={item}><Icon aria-hidden="true" /> <strong>{item}</strong></p>)}</div></article>
    <article className="info-card" id="prevention"><ShieldAlert className="card-icon" aria-hidden="true" /><h2><span>6.</span> Prevention Matters <em>♡</em></h2><div className="icon-row-list">{prevention.map(([item, Icon]) => <p key={item}><Icon aria-hidden="true" /> <strong>{item}</strong></p>)}</div></article>
  </section>;
}

function SleepingPuppy() { return <div className="sleeping-puppy-photo" aria-hidden="true"><img src="/sleeping-puppy-home.png" alt="" /></div>; }
function PhoneQrVisual() { return <div className="phone-visual image-phone" aria-hidden="true"><img src="/qr-bottle-home.png" alt="" /></div>; }

function FeatureRow() { return <section className="feature-row" id="disclaimer"><article className="feature-card preventable-card"><div><h2>Preventable, But Serious <span>♡</span></h2><p>Hypoglycemia is preventable with proper observation and care, but it can and does happen—and it can be deadly if not treated quickly.</p><div className="guarantee-alert"><ShieldAlert aria-hidden="true" />Hypoglycemia is not covered under the health guarantee because it is considered preventable.</div></div><SleepingPuppy /></article><article className="feature-card qr-card"><div><h2>Scan the bottle for <em>instant instructions</em> <span>♡</span></h2><p>Every Pup-Lift bottle includes a QR code that links to these emergency steps, video demos, and printable guides.</p><div className="video-chip"><Video aria-hidden="true" /> Video demos + printable guides</div></div><PhoneQrVisual /></article></section>; }
function Journey() { return <section className="journey" id="emergency-steps" aria-labelledby="journey-heading"><h2 id="journey-heading">A Simple Emergency Journey <span>♡</span></h2><div className="journey-line" aria-hidden="true" /><div className="journey-steps">{journeySteps.map(([title, text, Icon], index) => <article className="journey-step" key={title}><span className="journey-number">{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>; }
function LifestylePhoto() { return <div className="lifestyle-photo photo-like" aria-hidden="true" />; }
function FaqStory() { return <section className="faq-story-row"><article className="faq-card" id="faq"><h2>Frequently Asked Questions <span>♡</span></h2><div className="faq-blocks">{faqs.map(([question, answer, Icon]) => <details open key={question}><summary><Icon aria-hidden="true" />{question}</summary><p>{answer}</p></details>)}</div></article><article className="brand-story-card"><div className="story-copy"><h2>From Southwest Virginia Chihuahua <span>♡</span></h2><p>Every new owner receives Pup-Lift because we care about your puppy’s safety and your peace of mind.</p><p className="emphasis">Keep it close. Read these steps. Act early. You are your puppy’s best protection.</p><strong>— The SWVA Chihuahua Family</strong></div><LifestylePhoto /></article></section>; }
function Footer() { return <footer className="site-footer" id="contact"><div className="footer-grid"><div className="footer-brand"><Logo footer /><p className="prepared">Prepared by<br /><strong>Southwest Virginia Chihuahua</strong></p><p className="footer-script">Tiny hearts. Lifelong love.</p><div className="socials" aria-label="Social links"><a href="#contact" aria-label="Facebook"><Facebook /></a><a href="#contact" aria-label="Instagram"><Instagram /></a><a href="#contact" aria-label="TikTok">♪</a><a href="https://swvchihuahua.com" aria-label="Website"><Globe /></a></div></div><div><h3>Quick Links</h3>{navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div><div><h3>Emergency Reminder</h3><div className="footer-alert">Act fast. Stay calm. You can save a life.</div><p>If your puppy is unresponsive or having a seizure, call your veterinarian immediately.</p></div><div><h3>Contact Us</h3><p><Phone aria-hidden="true" /> 276-525-0998</p><p><Mail aria-hidden="true" /> info@pup-lift.com</p><p><MapPin aria-hidden="true" /> Abingdon, Virginia<br />Serving families nationwide</p></div><div><h3>Part of the SWVA Family</h3><p>Pup-Lift is provided to every new puppy family from Southwest Virginia Chihuahua.</p><a className="footer-button" href="https://swvchihuahua.com"><Share2 aria-hidden="true" /> SWVA Chihuahua</a></div></div><div className="footer-bottom"><span>© 2025 Pup-Lift.com. All rights reserved.</span><span><a href="#contact">Privacy Policy</a> · <a href="#contact">Terms of Service</a> · <a href="#contact">Veterinary Disclaimer</a> ♡</span></div></footer>; }

export default function HomePage() {
  return <main className="page-shell" id="home"><header className="site-header"><Logo /><nav className="site-nav" aria-label="Main navigation">{navItems.map(([label, href]) => <a href={href} className={label === 'Home' ? 'active' : ''} key={label}>{label}</a>)}</nav><div className="header-actions"><a className="btn btn-primary" href="/emergency-steps">Emergency Steps <Heart aria-hidden="true" /></a><a className="btn btn-outline" href="https://swvchihuahua.com"><Share2 aria-hidden="true" /> SWVA Chihuahua</a></div></header><section className="hero-section"><div className="hero-copy"><h1>Pup-Lift:<em>Emergency Support<br />for Hypoglycemia Episodes</em></h1><p>Fast, calm guidance for Chihuahua owners when a puppy becomes weak, limp, cold, shaky, or unresponsive.</p><div className="hero-actions"><a className="btn btn-hero" href="/emergency-steps"><Heart aria-hidden="true" /> Start Emergency Steps</a><a className="btn btn-hero-outline" href="/prevention">Learn Prevention <ArrowRight aria-hidden="true" /></a></div><div className="trust-note"><Heart aria-hidden="true" />Created for tiny hearts. Backed by experience.</div></div><HeroPuppy /><EmergencyCard /></section><QuickTopicRow /><InfoGrid /><FeatureRow /><Journey /><FaqStory /><Footer /></main>;
}
