import React from "react";
import { createRoot } from "react-dom/client";
import { Phone, MessageCircle, Zap, ShieldCheck, MapPin, Store, Bike, Utensils, Coffee, ShoppingBag, Package, ArrowLeft, Menu, X, Users, ClipboardList, Headphones, CircleHelp, TriangleAlert, Handshake } from "lucide-react";
import "./styles.css";

import {
  SERVICE_AREA,
  SOCIALS,
  primaryPhone,
  primaryWhatsApp,
  PAGE_PATHS,
  pathToPage,
  type Page
} from "./data/site";

const PHONE = primaryPhone();
const PHONE_HREF = PHONE ? `tel:${PHONE.replace(/[^0-9+]/g, "")}` : "#contact";
const WHATSAPP = primaryWhatsApp();
const WHATSAPP_NUMBER = WHATSAPP ? WHATSAPP.value.replace(/[^0-9]/g, "") : "";

function App(){
 const [page,setPage]=React.useState<Page>(() => pathToPage(window.location.pathname));
 const [menu,setMenu]=React.useState(false);
 const [choice,setChoice]=React.useState<{page:Page;title:string;description:string}|null>(null);
 React.useEffect(()=>{document.title = page === "home" ? "فالسريع | كل اللي محتاجه يوصلك فالسريع" : `فالسريع | ${{about:"عن فالسريع",services:"خدماتنا",order:"اطلب الآن",support:"الدعم",inquiry:"استفسار",complaint:"تقديم شكوى",partner:"الشراكة",join:"انضم إلينا",joinForm:"التقديم للعمل",contact:"تواصل معنا",privacy:"سياسة الخصوصية",terms:"الشروط والأحكام"}[page]}`;},[page]);
 const nav:[Page,string][]=[["home","الرئيسية"],["about","عن فالسريع"],["services","خدماتنا"],["order","اطلب الآن"],["join","انضم إلينا"],["contact","تواصل معنا"]];
 const go=(p:Page)=>{
   const path = PAGE_PATHS[p];
   if (window.location.pathname !== path) window.history.pushState({ page: p }, "", path);
   setPage(p);
   setChoice(null);
   setMenu(false);
   window.scrollTo({top:0,behavior:"smooth"});
 };
 React.useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setChoice(null);};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[]);
 React.useEffect(()=>{
   const onPopState=()=>{setPage(pathToPage(window.location.pathname));setMenu(false);window.scrollTo({top:0,behavior:"auto"});};
   window.addEventListener("popstate",onPopState);
   return ()=>window.removeEventListener("popstate",onPopState);
 },[]);
 return <div className="app">
 <header className="nav"><a className="brand" href={PAGE_PATHS.home} onClick={(e)=>{e.preventDefault();go("home");}}><span className="brand-mark">F</span><span>فالسريع</span></a><nav>{nav.map(([p,n])=><a className={page===p?"active":""} key={p} href={PAGE_PATHS[p]} onClick={(e)=>{e.preventDefault();go(p);}}>{n}</a>)}</nav><div className="nav-actions"><a className="call-mini" href={PAGE_PATHS.order} onClick={(e)=>{e.preventDefault();go("order");}}><ClipboardList size={17}/> اطلب الآن</a><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
 {menu&&<div className="mobile-nav">{nav.map(([p,n])=><a key={p} href={PAGE_PATHS[p]} onClick={(e)=>{e.preventDefault();go(p);}}>{n}</a>)}</div>}
 <main key={page}>{page==="home"&&<Home go={go} openChoice={setChoice}/>} {page==="about"&&<About/>} {page==="services"&&<Services/>} {page==="order"&&<Order/>} {page==="support"&&<Support/>} {page==="inquiry"&&<Inquiry/>} {page==="complaint"&&<Complaint/>} {page==="partner"&&<Partner/>} {page==="join"&&<Join openChoice={setChoice}/>} {page==="joinForm"&&<JoinForm/>} {page==="contact"&&<Contact openChoice={setChoice}/>} {page==="privacy"&&<Legal title="سياسة الخصوصية" type="privacy"/>} {page==="terms"&&<Legal title="الشروط والأحكام" type="terms"/>}</main>
 <footer><div><a className="brand" href={PAGE_PATHS.home} onClick={(e)=>{e.preventDefault();go("home");}}><span className="brand-mark">F</span><span>فالسريع</span></a><p>كل اللي محتاجه… يوصلك فالسريع.</p></div><div className="footer-links">{nav.map(([p,n])=><a key={p} href={PAGE_PATHS[p]} onClick={(e)=>{e.preventDefault();go(p);}}>{n}</a>)}</div><div className="legal-links"><a href={PAGE_PATHS.privacy} onClick={(e)=>{e.preventDefault();go("privacy");}}>سياسة الخصوصية</a><span>•</span><a href={PAGE_PATHS.terms} onClick={(e)=>{e.preventDefault();go("terms");}}>الشروط والأحكام</a></div><small>© {new Date().getFullYear()} فالسريع — جميع الحقوق محفوظة</small></footer>
 {choice&&<ContactChoiceModal title={choice.title} description={choice.description} onClose={()=>setChoice(null)} onPhone={()=>{window.location.href=PHONE_HREF;}} onWhatsApp={()=>{const target=choice.page;setChoice(null);go(target);}}/>}
 </div>
}
function ContactChoiceModal({title,description,onClose,onPhone,onWhatsApp}:{title:string;description:string;onClose:()=>void;onPhone:()=>void;onWhatsApp:()=>void}){return <div className="choice-backdrop" role="presentation" onMouseDown={onClose}><div className="choice-modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={e=>e.stopPropagation()}><button className="choice-close" onClick={onClose} aria-label="إغلاق"><X/></button><span className="eyebrow">اختر طريقة التواصل</span><h2>{title}</h2><p>{description}</p><div className="choice-actions"><button className="choice-action phone-choice" onClick={onPhone}><Phone/><span><b>التواصل هاتفيًا</b><small>اتصل بنا مباشرة</small></span><ArrowLeft/></button><button className="choice-action whatsapp-choice" onClick={onWhatsApp}><MessageCircle/><span><b>التواصل عبر واتساب</b><small>املأ نموذجًا ورسالة جاهزة</small></span><ArrowLeft/></button></div></div></div>}
function Home({go,openChoice}:{go:(p:Page)=>void;openChoice:(v:{page:Page;title:string;description:string})=>void}){return <>
<section className="hero"><div className="hero-glow"></div><div className="hero-copy"><span className="eyebrow">قريبًا في مدينتك ⚡</span><h1>كل اللي محتاجه…<strong>يوصلك فالسريع.</strong></h1><div className="brand-slogan">فالسريع… كل اللي محتاجه يوصلك فالسريع ⚡</div><p>خدمة توصيل محلية بسيطة وسريعة. حاليًا اطلب بسهولة عبر الهاتف أو واتساب.</p><div className="hero-buttons"><button className="btn primary" onClick={()=>openChoice({page:"order",title:"اطلب الآن",description:"اختر الطريقة المناسبة لإتمام طلبك."})}><ClipboardList/> ابدأ طلبك</button><a className="btn secondary" href={PHONE_HREF}><Phone/> التواصل هاتفيًا</a></div><div className="quick"><span><Zap/> أسرع</span><span><ShieldCheck/> موثوق</span><span><MapPin/> أقرب لك</span></div></div><div className="hero-visual"><div className="speed-lines"></div><img className="hero-image" src="/images/hero-placeholder.svg" alt="صورة توصيل فالسريع" /><div className="image-label">صورة مؤقتة قابلة للاستبدال</div></div></section>
<section className="announcement"><span>⚡</span><p>الموقع في مرحلته التعريفية حاليًا — التطبيق ونظام الطلبات قريبًا.</p></section><section className="service-area"><MapPin/><span>منطقة الخدمة:</span><b>{SERVICE_AREA}</b></section><section className="section"><div className="section-head"><span>لماذا فالسريع؟</span><h2>بسيطة… وسريعة… وقريبة منك.</h2></div><div className="grid three">{[[Zap,"سرعة","لأن وقتك مهم."],[ShieldCheck,"ثقة","نهتم بطلبك حتى يصل."],[MapPin,"قريب منك","خدمة محلية تعرف منطقتك."]].map(([Icon,title,txt]:any)=><article className="card" key={title}><Icon/><h3>{title}</h3><p>{txt}</p></article>)}</div></section>
<section className="section dark-band"><div className="section-head"><span>خدماتنا</span><h2>إيه اللي نقدر نوصله؟</h2></div><div className="grid four">{[[Utensils,"مطاعم"],[Coffee,"كافيهات"],[ShoppingBag,"محلات"],[Package,"احتياجاتك"]].map(([Icon,title]:any)=><article className="service-card" key={title}><Icon/><b>{title}</b></article>)}</div><a className="text-link" href={PAGE_PATHS.services} onClick={(e)=>{e.preventDefault();go("services");}}>اكتشف خدماتنا <ArrowLeft size={18}/></a></section>
<section className="coming"><div><span className="eyebrow">COMING SOON</span><h2>تطبيق فالسريع قريبًا 📱</h2><p>نعمل حاليًا على تجربة أسهل للطلبات والمتابعة.</p></div><div className="phone-mock"><div className="notch"></div><img src="/images/app-placeholder.svg" alt="معاينة تطبيق فالسريع قريبًا" /></div></section>
<section className="cta"><h2>محتاج حاجة؟</h2><p>اختار الطريقة المناسبة وتواصل معنا مباشرة.</p><div className="hero-buttons center-buttons"><button className="btn primary" onClick={()=>openChoice({page:"order",title:"اطلب الآن",description:"اختر الطريقة المناسبة لإتمام طلبك."})}><ClipboardList/> اطلب الآن</button><a className="btn secondary" href={PHONE_HREF}><Phone/> التواصل هاتفيًا</a></div></section></>}
function About(){return <PageHero eyebrow="عن فالسريع" title={<>مشوارك أسهل مع <strong>فالسريع.</strong></>} text="فالسريع مشروع توصيل محلي نبدأ بخطوات بسيطة ونبني تجربة أقرب لاحتياجات الناس." ><section className="section"><div className="grid three">{[[Zap,"مهمتنا","نجعل التوصيل أبسط وأسرع."],[ShieldCheck,"وعدنا","الوضوح والاهتمام بكل طلب."],[MapPin,"رؤيتنا","نبدأ محليًا ونتطور خطوة بخطوة."]].map(([I,t,d]:any)=><article className="card" key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="section story"><div><span>قصتنا</span><h2>بداية صغيرة… وطموح كبير.</h2></div><p>نؤمن أن المشاريع الناجحة تبدأ بحل مشكلة حقيقية. لذلك نبدأ بخدمة بسيطة، نستمع للعملاء، ثم نطور التجربة بناءً على الاحتياج الحقيقي.</p></section></PageHero>}
function Services(){return <PageHero eyebrow="خدماتنا" title={<>كل اللي تحتاجه… <strong>نوصله لك.</strong></>} text="من طلباتك اليومية إلى المطاعم والكافيهات، نبدأ بما تحتاجه منطقتنا ونتوسع خطوة بخطوة."><section className="section"><div className="grid three">{[[Utensils,"طلبات المطاعم","وجبتك من مكانك المفضل."],[Coffee,"الكافيهات","قهوة ومشروباتك."],[ShoppingBag,"طلبات المحلات","احتياجاتك من المحلات."],[Package,"طلبات متنوعة","حسب نطاق الخدمة."],[Store,"شركاء محليون","ندعم المحلات والمطاعم."],[Bike,"توصيل سريع","تجربة مباشرة وبسيطة."]].map(([I,t,d]:any)=><article className="card" key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div>{SOCIALS.length>0&&<><h2 className="contact-title">تابعنا</h2><div className="social-list">{SOCIALS.map((s,i)=><a key={i} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}</div></>}</section></PageHero>}
const sendWhatsApp=(message:string)=>{if(!WHATSAPP_NUMBER){return false;} window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");return true;};

function Order(){
 const [name,setName]=React.useState("");
 const [phone,setPhone]=React.useState("");
 const [details,setDetails]=React.useState("");
 const [pickup,setPickup]=React.useState("");
 const [delivery,setDelivery]=React.useState("");
 const [notes,setNotes]=React.useState("");
 const [error,setError]=React.useState("");
 const [sent,setSent]=React.useState(false);
 const sendOrder=(e:React.FormEvent)=>{
   e.preventDefault();
   if(!name.trim()||!phone.trim()||!details.trim()||!pickup.trim()||!delivery.trim()){
     setError("من فضلك املأ البيانات الأساسية للطلب.");
     return;
   }
   if(!WHATSAPP_NUMBER){setError("رقم واتساب الطلبات غير متاح حاليًا.");return;}
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
   if(sendWhatsApp(message)) setSent(true); else setError("رقم واتساب غير متاح حاليًا.");
 };
 return <PageHero eyebrow="اطلب الآن" title={<>اطلبها… <strong>فالسريع.</strong></>} text="املأ بيانات طلبك وسيتم تجهيز رسالة منظمة تلقائيًا وفتح واتساب لإرسالها إلينا.">
   <section className="section order-section">
    <div className="order-intro"><ClipboardList/><div><h2>طلب سريع عبر واتساب</h2><p>الموقع لا يحفظ طلبك حاليًا. راجع البيانات ثم افتح واتساب برسالة جاهزة.</p></div></div>
    {sent?<div className="success-card"><span>✓</span><h3>تم تجهيز رسالتك بنجاح</h3><p>تم فتح واتساب بالرسالة الجاهزة. راجع التفاصيل واضغط إرسال داخل واتساب لإتمام طلبك، ثم سيتم التواصل معك في أسرع وقت.</p><button className="btn secondary" onClick={()=>setSent(false)}>إرسال طلب آخر</button></div>:<form className="order-form" onSubmit={sendOrder}>
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
      <button className="btn primary order-submit" type="submit"><MessageCircle/> متابعة الطلب عبر واتساب</button><p className="privacy-note">🔒 بياناتك لا يتم تخزينها حاليًا داخل الموقع، وتُستخدم فقط لتجهيز رسالة واتساب.</p>
    </form>
    <div className="order-steps"><span>1. املأ الطلب</span><ArrowLeft/><span>2. راجع الرسالة</span><ArrowLeft/><span>3. أرسلها على واتساب</span></div>
   </section>
 </PageHero>
}

function WhatsAppForm({title,description,icon,children,onBuild}:{title:string,description:string,icon:React.ReactNode,children:React.ReactNode,onBuild:()=>string|null}){
 const [error,setError]=React.useState("");
 const [sent,setSent]=React.useState(false);
 const submit=(e:React.FormEvent)=>{e.preventDefault();const message=onBuild();if(!message){setError("من فضلك املأ جميع البيانات المطلوبة.");return;}if(!sendWhatsApp(message)){setError("رقم واتساب غير متاح حاليًا.");return;}setError("");setSent(true);};
 return <div className="form-page"><section className="section order-section"><div className="order-intro">{icon}<div><span className="eyebrow">تواصل عبر واتساب</span><h2>{title}</h2><p>{description}</p><small>املأ البيانات ثم ستُفتح رسالة منظمة وجاهزة للمراجعة والإرسال.</small></div></div>{sent?<div className="success-card"><span>✓</span><h3>تم تجهيز طلبك بنجاح</h3><p>تم فتح واتساب بالرسالة الجاهزة. بعد الضغط على إرسال داخل واتساب سيتم استلام طلبك ومراجعته، وسنرد عليك في أسرع وقت.</p><button className="btn secondary" onClick={()=>setSent(false)}>إرسال طلب آخر</button></div>:<form className="order-form" onSubmit={submit}>{children}{error&&<div className="form-error">{error}</div>}<button className="btn primary order-submit" type="submit"><MessageCircle/> متابعة عبر واتساب</button><p className="privacy-note">🔒 بياناتك لا يتم تخزينها حاليًا داخل الموقع، وتُستخدم فقط لتجهيز رسالة واتساب.</p></form>}</section></div>
}

function Support(){
 const [name,setName]=React.useState(""); const [phone,setPhone]=React.useState(""); const [message,setMessage]=React.useState("");
 return <WhatsAppForm title="الدعم" description="لو تحتاج مساعدة أو لديك مشكلة، أرسل تفاصيلها مباشرة إلى فريق الدعم." icon={<Headphones/>} onBuild={()=>name.trim()&&phone.trim()&&message.trim()?["🎧 *طلب دعم — فالسريع*","","👤 *الاسم:* "+name.trim(),"📞 *رقم الهاتف:* "+phone.trim(),"🛠️ *تفاصيل المشكلة:* "+message.trim(),"","تم الإرسال من موقع فالسريع."].join("\n"):null}><div className="form-grid"><label>الاسم الكامل<input value={name} onChange={e=>setName(e.target.value)} placeholder="اكتب اسمك"/></label><label>رقم الهاتف<input value={phone} onChange={e=>setPhone(e.target.value)} inputMode="tel" placeholder="01XXXXXXXXX"/></label></div><label>كيف يمكننا مساعدتك؟<textarea value={message} onChange={e=>setMessage(e.target.value)} rows={5} placeholder="اشرح المشكلة أو ما تحتاجه..."/></label></WhatsAppForm>
}
function Inquiry(){
 const [name,setName]=React.useState(""); const [phone,setPhone]=React.useState(""); const [message,setMessage]=React.useState("");
 return <WhatsAppForm title="استفسار" description="عندك سؤال عن فالسريع أو خدماتنا؟ أرسله لنا مباشرة." icon={<CircleHelp/>} onBuild={()=>name.trim()&&phone.trim()&&message.trim()?["❓ *استفسار جديد — فالسريع*","","👤 *الاسم:* "+name.trim(),"📞 *رقم الهاتف:* "+phone.trim(),"💬 *الاستفسار:* "+message.trim(),"","تم الإرسال من موقع فالسريع."].join("\n"):null}><div className="form-grid"><label>الاسم الكامل<input value={name} onChange={e=>setName(e.target.value)} placeholder="اكتب اسمك"/></label><label>رقم الهاتف<input value={phone} onChange={e=>setPhone(e.target.value)} inputMode="tel" placeholder="01XXXXXXXXX"/></label></div><label>اكتب استفسارك<textarea value={message} onChange={e=>setMessage(e.target.value)} rows={5} placeholder="اكتب سؤالك..."/></label></WhatsAppForm>
}

function Complaint(){
 const [name,setName]=React.useState(""); const [phone,setPhone]=React.useState(""); const [order,setOrder]=React.useState(""); const [details,setDetails]=React.useState("");
 return <WhatsAppForm title="تقديم شكوى" description="نأخذ ملاحظاتك وشكاواك بجدية. أرسل التفاصيل لمساعدتنا على متابعة المشكلة." icon={<TriangleAlert/>} onBuild={()=>name.trim()&&phone.trim()&&details.trim()?["⚠️ *شكوى جديدة — فالسريع*","","👤 *الاسم:* "+name.trim(),"📞 *رقم الهاتف:* "+phone.trim(),order.trim()?"🔖 *تفاصيل الطلب / المرجع:* "+order.trim():"","📝 *تفاصيل الشكوى:* "+details.trim(),"","تم الإرسال من موقع فالسريع."].filter(Boolean).join("\n"):null}>
  <div className="form-grid"><label>الاسم الكامل<input value={name} onChange={e=>setName(e.target.value)} placeholder="اكتب اسمك"/></label><label>رقم الهاتف<input value={phone} onChange={e=>setPhone(e.target.value)} inputMode="tel" placeholder="01XXXXXXXXX"/></label></div>
  <label>رقم أو تفاصيل الطلب <span className="optional">(إن وجد)</span><input value={order} onChange={e=>setOrder(e.target.value)} placeholder="مثال: وقت الطلب أو اسم المكان"/></label>
  <label>تفاصيل الشكوى<textarea value={details} onChange={e=>setDetails(e.target.value)} rows={6} placeholder="اشرح المشكلة بالتفصيل..."/></label>
 </WhatsAppForm>
}

function Partner(){
 const [business,setBusiness]=React.useState(""); const [name,setName]=React.useState(""); const [phone,setPhone]=React.useState(""); const [category,setCategory]=React.useState("مطعم"); const [address,setAddress]=React.useState(""); const [message,setMessage]=React.useState("");
 return <WhatsAppForm title="كن شريكًا لنا" description="لو لديك مطعم أو محل وتريد التعاون مع فالسريع، أرسل بيانات نشاطك وسنتواصل معك." icon={<Handshake/>} onBuild={()=>business.trim()&&name.trim()&&phone.trim()&&address.trim()?["🤝 *طلب شراكة — فالسريع*","","🏪 *اسم النشاط:* "+business.trim(),"📌 *نوع النشاط:* "+category,"👤 *اسم المسؤول:* "+name.trim(),"📞 *رقم الهاتف:* "+phone.trim(),"📍 *العنوان:* "+address.trim(),message.trim()?"📝 *ملاحظات:* "+message.trim():"","تم الإرسال من موقع فالسريع."].filter(Boolean).join("\n"):null}>
  <div className="form-grid"><label>اسم المطعم / المحل<input value={business} onChange={e=>setBusiness(e.target.value)} placeholder="اسم النشاط"/></label><label>نوع النشاط<select value={category} onChange={e=>setCategory(e.target.value)}><option>مطعم</option><option>كافيه</option><option>سوبر ماركت</option><option>محل</option><option>نشاط آخر</option></select></label></div>
  <div className="form-grid"><label>اسم المسؤول<input value={name} onChange={e=>setName(e.target.value)} placeholder="الاسم الكامل"/></label><label>رقم الهاتف<input value={phone} onChange={e=>setPhone(e.target.value)} inputMode="tel" placeholder="01XXXXXXXXX"/></label></div>
  <label>العنوان<input value={address} onChange={e=>setAddress(e.target.value)} placeholder="عنوان النشاط والمنطقة"/></label>
  <label>ملاحظات <span className="optional">(اختياري)</span><textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} placeholder="أي معلومات إضافية..."/></label>
 </WhatsAppForm>
}

function Join({openChoice}:{openChoice:(v:{page:Page;title:string;description:string})=>void}){return <PageHero eyebrow="انضم إلينا" title={<>كبر مع <strong>فالسريع.</strong></>} text="سواء كنت تبحث عن فرصة للعمل أو تريد تطوير نشاطك التجاري، اختر الطريق المناسب وابدأ معنا."><section className="section join-choice-section"><div className="grid two"><button className="join-choice-card" onClick={()=>openChoice({page:"joinForm",title:"انضم كمندوب لفريقنا",description:"اختر طريقة التواصل ثم أرسل بيانات التقديم."})}><Bike/><h2>انضم كمندوب</h2><p>التقديم للعمل والتوصيل ضمن فريق فالسريع.</p><span>ابدأ التقديم <ArrowLeft/></span></button><button className="join-choice-card" onClick={()=>openChoice({page:"partner",title:"تعاون معنا كشريك",description:"اختر طريقة التواصل أو أرسل بيانات نشاطك للتعاون معنا."})}><Handshake/><h2>تعاون كشريك</h2><p>للمطاعم والمحلات والأنشطة التي تريد العمل معنا.</p><span>ابدأ التعاون <ArrowLeft/></span></button></div></section></PageHero>}

function JoinForm(){
 const [name,setName]=React.useState("");const [age,setAge]=React.useState("");const [phone,setPhone]=React.useState("");const [bike,setBike]=React.useState("");const [availability,setAvailability]=React.useState("");const [shift,setShift]=React.useState("");const [period,setPeriod]=React.useState("");
 return <WhatsAppForm title="انضم كمندوب لفريقنا" description="أرسل بياناتك الأساسية وسنتواصل معك عند توفر فرصة مناسبة." icon={<Users/>} onBuild={()=>name.trim()&&age.trim()&&phone.trim()&&bike.trim()&&availability.trim()&&shift&&period?["🛵 *طلب انضمام للعمل — فالسريع*","","👤 *الاسم:* "+name.trim(),"🎂 *السن:* "+age.trim(),"📞 *رقم الهاتف:* "+phone.trim(),"🏍️ *نوع الموتوسيكل:* "+bike.trim(),"⏰ *الوقت المتاح:* "+availability.trim(),"🌙 *الوردية المفضلة:* "+shift,"📅 *فترة العمل:* "+period,"","تم الإرسال من موقع فالسريع."].join("\n"):null}>
 <div className="form-grid"><label>الاسم الكامل<input value={name} onChange={e=>setName(e.target.value)} placeholder="اكتب اسمك"/></label><label>السن<input value={age} onChange={e=>setAge(e.target.value)} inputMode="numeric" placeholder="مثال: 22"/></label></div>
 <div className="form-grid"><label>رقم الهاتف<input value={phone} onChange={e=>setPhone(e.target.value)} inputMode="tel" placeholder="01XXXXXXXXX"/></label><label>نوع الموتوسيكل<input value={bike} onChange={e=>setBike(e.target.value)} placeholder="الماركة / الموديل"/></label></div>
 <div className="form-grid"><label>الوقت المتاح للعمل<input value={availability} onChange={e=>setAvailability(e.target.value)} placeholder="مثال: من 4 مساءً إلى 11 مساءً"/></label><label>الوردية المفضلة<select value={shift} onChange={e=>setShift(e.target.value)}><option value="">اختر الوردية</option><option>صباحية</option><option>مسائية</option><option>ليلية</option><option>مرن / حسب الحاجة</option></select></label></div>
 <label>فترة العمل المتاحة<select value={period} onChange={e=>setPeriod(e.target.value)}><option value="">اختر الفترة</option><option>دوام كامل</option><option>دوام جزئي</option><option>مؤقت</option><option>ويك إند فقط</option></select></label>
 </WhatsAppForm>
}

function Contact({openChoice}:{openChoice:(v:{page:Page;title:string;description:string})=>void}){const actions:[Page,string,React.ElementType,string][]=[["order","اطلب الآن",ClipboardList,"ابدأ طلبًا برسالة منظمة"],["support","الدعم",Headphones,"مساعدة ومتابعة المشكلات"],["inquiry","استفسار",CircleHelp,"اسأل عن الخدمات والمشروع"],["complaint","تقديم شكوى",TriangleAlert,"أرسل شكواك وتفاصيلها"],["partner","كن شريكًا",Handshake,"مطاعم ومحلات وشركاء"],["join","انضم للعمل",Users,"التقديم للعمل كمندوب"]];return <PageHero eyebrow="تواصل معنا" title={<>كيف يمكننا <strong>مساعدتك؟</strong></>} text="اختر نوع التواصل المناسب، ثم حدد الطريقة التي تفضلها."><section className="section contact-section"><div className="section-head compact"><span>اختر نوع التواصل</span><h2>وصّلنا للي تحتاجه بسرعة.</h2></div><div className="grid three action-grid">{actions.map(([p,title,Icon,desc])=><button className="action-card" key={p} onClick={()=>openChoice({page:p,title,description:desc})}><Icon/><div><b>{title}</b><span>{desc}</span></div><ArrowLeft/></button>)}</div></section></PageHero>}
function Legal({title,type}:{title:string,type:"privacy"|"terms"}){const privacy=type==="privacy";return <><section className="page-hero legal-hero"><span className="eyebrow">FELSARE3</span><h1>{title}</h1><p>نسخة مبدئية قابلة للتحديث عند إطلاق الخدمات والأنظمة الإلكترونية.</p></section><section className="section legal-content">{privacy?<><h2>مقدمة</h2><p>نحترم خصوصية زوار موقع فالسريع. قد يطلب الموقع بيانات مثل الاسم ورقم الهاتف عند استخدام نماذج الطلب أو الدعم أو الشكاوى أو التقديم أو الشراكة. هذه البيانات لا تُخزن داخل الموقع حاليًا، وإنما تُستخدم لتجهيز رسالة يختار المستخدم إرسالها عبر واتساب.</p><h2>التواصل</h2><p>عند إرسال نموذج، يتم تجهيز نص الرسالة على جهازك ثم فتح واتساب بالرسالة الجاهزة. لا تُرسل البيانات تلقائيًا؛ أنت من يراجع الرسالة ويضغط إرسال داخل واتساب.</p><h2>التحديثات</h2><p>سيتم تحديث هذه السياسة عند إطلاق نظام الحسابات أو الطلبات أو أي خدمات تتطلب معالجة بيانات.</p></>:<><h2>استخدام الموقع</h2><p>الموقع الحالي يقدم معلومات تعريفية عن مشروع فالسريع ووسائل التواصل المتاحة.</p><h2>المحتوى والخدمات</h2><p>الخدمات والمناطق ووسائل التواصل قد تتغير مع تطور المشروع، وسيتم تحديث الموقع وفقًا لذلك.</p><h2>التطبيق والطلبات</h2><p>أي نظام طلبات أو تطبيق إلكتروني سيتم الإعلان عن شروط استخدامه وسياساته عند إطلاقه رسميًا.</p></>}</section></>}

function PageHero({eyebrow,title,text,children}:{eyebrow:string,title:React.ReactNode,text:string,children:React.ReactNode}){return <><section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></section>{children}<section className="cta"><h2>فالسريع… قريبًا أكثر.</h2><p>تابعنا لمعرفة آخر الأخبار والتحديثات.</p></section></>}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
