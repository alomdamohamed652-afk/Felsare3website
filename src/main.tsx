import React from "react";
import { createRoot } from "react-dom/client";
import { Phone, MessageCircle, Zap, ShieldCheck, MapPin, Store, Bike, Utensils, Coffee, ShoppingBag, Package, ArrowLeft, Menu, X, Users, ClipboardList } from "lucide-react";
import "./styles.css";

import {
  CONTACTS,
  SERVICE_AREA,
  SOCIALS,
  contactHref,
  primaryPhone,
  primaryWhatsApp,
  PAGE_PATHS,
  pathToPage,
  type Page
} from "./data/site";

const PHONE = primaryPhone();
const PHONE_HREF = PHONE ? `tel:${PHONE.replace(/[^0-9+]/g, "")}` : "#contact";
const WHATSAPP = primaryWhatsApp();

function App(){
 const [page,setPage]=React.useState<Page>(() => pathToPage(window.location.pathname));
 const [menu,setMenu]=React.useState(false);
 React.useEffect(()=>{document.title = page === "home" ? "فالسريع | كل اللي محتاجه يوصلك" : `فالسريع | ${{about:"عن فالسريع",services:"خدماتنا",join:"انضم إلينا",contact:"تواصل معنا",privacy:"سياسة الخصوصية",terms:"الشروط والأحكام"}[page]}`;},[page]);
 const nav:[Page,string][]=[["home","الرئيسية"],["about","عن فالسريع"],["services","خدماتنا"],["order","اطلب الآن"],["join","انضم إلينا"],["contact","تواصل معنا"]];
 const go=(p:Page)=>{
   const path = PAGE_PATHS[p];
   if (window.location.pathname !== path) window.history.pushState({ page: p }, "", path);
   setPage(p);
   setMenu(false);
   window.scrollTo({top:0,behavior:"smooth"});
 };
 React.useEffect(()=>{
   const onPopState=()=>{setPage(pathToPage(window.location.pathname));setMenu(false);window.scrollTo({top:0,behavior:"auto"});};
   window.addEventListener("popstate",onPopState);
   return ()=>window.removeEventListener("popstate",onPopState);
 },[]);
 return <div className="app">
 <header className="nav"><a className="brand" href={PAGE_PATHS.home} onClick={(e)=>{e.preventDefault();go("home");}}><span className="brand-mark">F</span><span>فالسريع</span></a><nav>{nav.map(([p,n])=><a className={page===p?"active":""} key={p} href={PAGE_PATHS[p]} onClick={(e)=>{e.preventDefault();go(p);}}>{n}</a>)}</nav><div className="nav-actions"><a className="call-mini" href={PAGE_PATHS.order} onClick={(e)=>{e.preventDefault();go("order");}}><ClipboardList size={17}/> اطلب الآن</a><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
 {menu&&<div className="mobile-nav">{nav.map(([p,n])=><a key={p} href={PAGE_PATHS[p]} onClick={(e)=>{e.preventDefault();go(p);}}>{n}</a>)}</div>}
 <main>{page==="home"&&<Home go={go}/>} {page==="about"&&<About/>} {page==="services"&&<Services/>} {page==="order"&&<Order/>} {page==="join"&&<Join/>} {page==="contact"&&<Contact/>} {page==="privacy"&&<Legal title="سياسة الخصوصية" type="privacy"/>} {page==="terms"&&<Legal title="الشروط والأحكام" type="terms"/>}</main>
 <footer><div><a className="brand" href={PAGE_PATHS.home} onClick={(e)=>{e.preventDefault();go("home");}}><span className="brand-mark">F</span><span>فالسريع</span></a><p>اطلبها… توصل فالسريع.</p></div><div className="footer-links">{nav.map(([p,n])=><a key={p} href={PAGE_PATHS[p]} onClick={(e)=>{e.preventDefault();go(p);}}>{n}</a>)}</div><div className="legal-links"><a href={PAGE_PATHS.privacy} onClick={(e)=>{e.preventDefault();go("privacy");}}>سياسة الخصوصية</a><span>•</span><a href={PAGE_PATHS.terms} onClick={(e)=>{e.preventDefault();go("terms");}}>الشروط والأحكام</a></div><small>© {new Date().getFullYear()} فالسريع — جميع الحقوق محفوظة</small></footer>
 </div>
}
function Home({go}:{go:(p:Page)=>void}){return <>
<section className="hero"><div className="hero-glow"></div><div className="hero-copy"><span className="eyebrow">قريبًا في مدينتك ⚡</span><h1>كل اللي محتاجه…<strong>يوصلك فالسريع.</strong></h1><p>خدمة توصيل محلية بسيطة وسريعة. حاليًا اطلب بسهولة عبر الهاتف أو واتساب.</p><div className="hero-buttons"><a className="btn primary" href={PAGE_PATHS.order} onClick={(e)=>{e.preventDefault();go("order");}}><ClipboardList/> ابدأ طلبك</a><a className="btn secondary" href={WHATSAPP ? contactHref(WHATSAPP) : "#contact"} target={WHATSAPP ? "_blank" : undefined} rel={WHATSAPP ? "noreferrer" : undefined}><MessageCircle/> واتساب</a></div><div className="quick"><span><Zap/> أسرع</span><span><ShieldCheck/> موثوق</span><span><MapPin/> أقرب لك</span></div></div><div className="hero-visual"><div className="speed-lines"></div><img className="hero-image" src="/images/hero-placeholder.svg" alt="صورة توصيل فالسريع" /><div className="image-label">صورة مؤقتة قابلة للاستبدال</div></div></section>
<section className="announcement"><span>⚡</span><p>الموقع في مرحلته التعريفية حاليًا — التطبيق ونظام الطلبات قريبًا.</p></section><section className="service-area"><MapPin/><span>منطقة الخدمة:</span><b>{SERVICE_AREA}</b></section><section className="section"><div className="section-head"><span>لماذا فالسريع؟</span><h2>بسيطة… وسريعة… وقريبة منك.</h2></div><div className="grid three">{[[Zap,"سرعة","لأن وقتك مهم."],[ShieldCheck,"ثقة","نهتم بطلبك حتى يصل."],[MapPin,"قريب منك","خدمة محلية تعرف منطقتك."]].map(([Icon,title,txt]:any)=><article className="card" key={title}><Icon/><h3>{title}</h3><p>{txt}</p></article>)}</div></section>
<section className="section dark-band"><div className="section-head"><span>خدماتنا</span><h2>إيه اللي نقدر نوصله؟</h2></div><div className="grid four">{[[Utensils,"مطاعم"],[Coffee,"كافيهات"],[ShoppingBag,"محلات"],[Package,"احتياجاتك"]].map(([Icon,title]:any)=><article className="service-card" key={title}><Icon/><b>{title}</b></article>)}</div><a className="text-link" href={PAGE_PATHS.services} onClick={(e)=>{e.preventDefault();go("services");}}>اكتشف خدماتنا <ArrowLeft size={18}/></a></section>
<section className="coming"><div><span className="eyebrow">COMING SOON</span><h2>تطبيق فالسريع قريبًا 📱</h2><p>نعمل حاليًا على تجربة أسهل للطلبات والمتابعة.</p></div><div className="phone-mock"><div className="notch"></div><img src="/images/app-placeholder.svg" alt="معاينة تطبيق فالسريع قريبًا" /></div></section>
<section className="cta"><h2>محتاج حاجة؟</h2><p>اختار الطريقة المناسبة وتواصل معنا مباشرة.</p><div className="hero-buttons center-buttons"><a className="btn primary" href={PAGE_PATHS.order} onClick={(e)=>{e.preventDefault();go("order");}}><ClipboardList/> اطلب الآن</a><a className="btn secondary" href={WHATSAPP ? contactHref(WHATSAPP) : "#contact"} target={WHATSAPP ? "_blank" : undefined} rel={WHATSAPP ? "noreferrer" : undefined}><MessageCircle/> واتساب</a></div></section></>}
function About(){return <PageHero eyebrow="عن فالسريع" title={<>أكثر من مجرد <strong>توصيل.</strong></>} text="فالسريع مشروع محلي هدفه يجعل الوصول لاحتياجاتك أسهل وأسرع." ><section className="section"><div className="grid three">{[[Zap,"مهمتنا","نجعل التوصيل أبسط وأسرع."],[ShieldCheck,"وعدنا","الوضوح والاهتمام بكل طلب."],[MapPin,"رؤيتنا","نبدأ محليًا ونتطور خطوة بخطوة."]].map(([I,t,d]:any)=><article className="card" key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="section story"><div><span>قصتنا</span><h2>بداية صغيرة… وطموح كبير.</h2></div><p>نؤمن أن المشاريع الناجحة تبدأ بحل مشكلة حقيقية. لذلك نبدأ بخدمة بسيطة، نستمع للعملاء، ثم نطور التجربة بناءً على الاحتياج الحقيقي.</p></section></PageHero>}
function Services(){return <PageHero eyebrow="خدماتنا" title={<>كل اللي تحتاجه… <strong>نوصله لك.</strong></>} text="نبدأ بخدمات توصيل بسيطة، ونتوسع حسب احتياجات منطقتنا."><section className="section"><div className="grid three">{[[Utensils,"طلبات المطاعم","وجبتك من مكانك المفضل."],[Coffee,"الكافيهات","قهوة ومشروباتك."],[ShoppingBag,"طلبات المحلات","احتياجاتك من المحلات."],[Package,"طلبات متنوعة","حسب نطاق الخدمة."],[Store,"شركاء محليون","ندعم المحلات والمطاعم."],[Bike,"توصيل سريع","تجربة مباشرة وبسيطة."]].map(([I,t,d]:any)=><article className="card" key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div>{SOCIALS.length>0&&<><h2 className="contact-title">تابعنا</h2><div className="social-list">{SOCIALS.map((s,i)=><a key={i} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}</div></>}</section></PageHero>}
function Order(){
 const [name,setName]=React.useState("");
 const [phone,setPhone]=React.useState("");
 const [details,setDetails]=React.useState("");
 const [pickup,setPickup]=React.useState("");
 const [delivery,setDelivery]=React.useState("");
 const [notes,setNotes]=React.useState("");
 const [error,setError]=React.useState("");
 const sendOrder=(e:React.FormEvent)=>{
   e.preventDefault();
   if(!name.trim()||!phone.trim()||!details.trim()||!pickup.trim()||!delivery.trim()){
     setError("من فضلك املأ البيانات الأساسية للطلب.");
     return;
   }
   if(!WHATSAPP){setError("رقم واتساب الطلبات غير متاح حاليًا.");return;}
   const message=[
     "🛵 *طلب جديد — فالسريع*",
     "",
     "👤 *الاسم:* "+name.trim(),
     "📞 *رقم الهاتف:* "+phone.trim(),
     "📦 *تفاصيل الطلب:* "+details.trim(),
     "📍 *مكان الاستلام:* "+pickup.trim(),
     "🏠 *مكان التوصيل:* "+delivery.trim(),
     notes.trim()?"📝 *ملاحظات:* "+notes.trim():"",
     "",
     "تم إنشاء هذه الرسالة من موقع فالسريع."
   ].filter(Boolean).join("\n");
   window.open(`https://wa.me/${WHATSAPP.value}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
 };
 return <PageHero eyebrow="اطلب الآن" title={<>اطلبها… <strong>فالسريع.</strong></>} text="املأ بيانات طلبك وسيتم تجهيز رسالة منظمة تلقائيًا وفتح واتساب لإرسالها إلينا.">
   <section className="section order-section">
    <div className="order-intro"><ClipboardList/><div><h2>طلب سريع عبر واتساب</h2><p>الموقع لا يحفظ طلبك حاليًا. بعد المراجعة، اضغط إرسال الطلب لفتح واتساب برسالة جاهزة.</p></div></div>
    <form className="order-form" onSubmit={sendOrder}>
      <div className="form-grid">
       <label>الاسم الكامل<input value={name} onChange={e=>setName(e.target.value)} placeholder="اكتب اسمك" autoComplete="name"/></label>
       <label>رقم الهاتف<input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="01XXXXXXXXX" inputMode="tel" autoComplete="tel"/></label>
      </div>
      <label>تفاصيل الطلب<textarea value={details} onChange={e=>setDetails(e.target.value)} placeholder="مثال: اسم المطعم والطلبات المطلوبة..." rows={4}/></label>
      <div className="form-grid">
       <label>مكان الاستلام<input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="اسم المكان أو العنوان"/></label>
       <label>مكان التوصيل<input value={delivery} onChange={e=>setDelivery(e.target.value)} placeholder="العنوان بالتفصيل"/></label>
      </div>
      <label>ملاحظات إضافية <span className="optional">(اختياري)</span><textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="أي تفاصيل إضافية للمندوب..." rows={3}/></label>
      {error&&<div className="form-error">{error}</div>}
      <button className="btn primary order-submit" type="submit"><MessageCircle/> إرسال الطلب عبر واتساب</button>
    </form>
    <div className="order-steps"><span>1. املأ الطلب</span><ArrowLeft/><span>2. راجع الرسالة</span><ArrowLeft/><span>3. أرسلها على واتساب</span></div>
   </section>
 </PageHero>
}

function Join(){return <PageHero eyebrow="انضم إلينا" title={<>كبر مع <strong>فالسريع.</strong></>} text="اختار الطريقة المناسبة للتواصل معنا حاليًا، وهنعلن عن نظام التقديم عند جاهزيته."><section className="section"><div className="grid two"><article className="join-card"><Users/><h2>التقديم قريبًا</h2><p>نظام التقديم للمندوبين والشركاء سيتم إطلاقه لاحقًا.</p><span className="status-pill">COMING SOON</span></article><article className="join-card"><MessageCircle/><h2>تواصل معنا للانضمام</h2><p>لو مهتم بالانضمام، تواصل معنا مباشرة عبر الدعم.</p><a className="btn primary" href={CONTACTS[0] ? contactHref(CONTACTS[0]) : PAGE_PATHS.contact}><Phone/> تواصل الآن</a></article></div></section></PageHero>}
function Contact(){const phoneContacts=CONTACTS.filter(x=>x.type==="phone"); const whatsappContacts=CONTACTS.filter(x=>x.type==="whatsapp"); return <PageHero eyebrow="تواصل معنا" title={<>نحن <strong>قريبون منك.</strong></>} text="اختر رقم الدعم أو واتساب المناسب. يمكنك إضافة أكثر من رقم بسهولة من إعدادات الموقع لاحقًا."><section className="section contact-section"><h2 className="contact-title">الدعم والاتصال</h2><div className="grid two">{phoneContacts.map((c,i)=><a className="contact-card" key={i} href={contactHref(c)}><Phone/><div><b>{c.label}</b><span>{c.value}</span><small>اضغط للاتصال مباشرة</small></div></a>)}</div><h2 className="contact-title">واتساب</h2><div className="grid two">{whatsappContacts.map((c,i)=><a className="contact-card whatsapp" key={i} href={contactHref(c)} target="_blank" rel="noreferrer"><MessageCircle/><div><b>{c.label}</b><span>{c.value}</span><small>اضغط لفتح محادثة واتساب</small></div></a>)}</div>{SOCIALS.length>0&&<><h2 className="contact-title">تابعنا</h2><div className="social-list">{SOCIALS.map((s,i)=><a key={i} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}</div></>}</section></PageHero>}
function Legal({title,type}:{title:string,type:"privacy"|"terms"}){const privacy=type==="privacy";return <><section className="page-hero legal-hero"><span className="eyebrow">FELSARE3</span><h1>{title}</h1><p>نسخة مبدئية قابلة للتحديث عند إطلاق الخدمات والأنظمة الإلكترونية.</p></section><section className="section legal-content">{privacy?<><h2>مقدمة</h2><p>نحترم خصوصية زوار موقع فالسريع. في المرحلة الحالية الموقع تعريفي ولا يتطلب إنشاء حساب أو إدخال بيانات شخصية إلا عند إضافة نماذج رسمية مستقبلًا.</p><h2>التواصل</h2><p>عند الضغط على رقم هاتف أو رابط واتساب، يتم فتح تطبيق الاتصال أو الخدمة الخارجية المختارة من جهازك.</p><h2>التحديثات</h2><p>سيتم تحديث هذه السياسة عند إطلاق نظام الحسابات أو الطلبات أو أي خدمات تتطلب معالجة بيانات.</p></>:<><h2>استخدام الموقع</h2><p>الموقع الحالي يقدم معلومات تعريفية عن مشروع فالسريع ووسائل التواصل المتاحة.</p><h2>المحتوى والخدمات</h2><p>الخدمات والمناطق ووسائل التواصل قد تتغير مع تطور المشروع، وسيتم تحديث الموقع وفقًا لذلك.</p><h2>التطبيق والطلبات</h2><p>أي نظام طلبات أو تطبيق إلكتروني سيتم الإعلان عن شروط استخدامه وسياساته عند إطلاقه رسميًا.</p></>}</section></>}

function PageHero({eyebrow,title,text,children}:{eyebrow:string,title:React.ReactNode,text:string,children:React.ReactNode}){return <><section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></section>{children}<section className="cta"><h2>فالسريع… قريبًا أكثر.</h2><p>تابعنا لمعرفة آخر الأخبار والتحديثات.</p></section></>}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
