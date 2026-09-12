# Falsare3 Website — Design Specification

> الوثيقة المرجعية الرسمية لتصميم وتجربة المستخدم وهوية موقع **فالسريع**.  
> يجب الرجوع إليها قبل تنفيذ أي تعديل بصري كبير.

**Project:** Falsare3 / فالسريع  
**Language:** Arabic — RTL  
**Current stage:** إطلاق أولي للموقع  
**Last updated:** September 2026

---

# 1. رؤية المشروع

## ما هو فالسريع؟

**فالسريع** خدمة توصيل محلية حديثة. في المرحلة الأولى لا يوجد تطبيق ولا نظام طلبات إلكتروني كامل.

طريقة الطلب الحالية:

1. الاتصال الهاتفي.
2. التواصل عبر WhatsApp.

الموقع الحالي هو واجهة تعريفية وتسويقية تساعد العميل على:

- معرفة الخدمة.
- فهم طريقة الطلب.
- معرفة الخدمات.
- التواصل مباشرة.
- التقديم للانضمام مستقبلًا.

## الوعد الأساسي

> **اطلبها... توصل فالسريع**

أو:

> **كل اللي محتاجه... يوصلك فالسريع.**

## شخصية العلامة

يجب أن يشعر العميل بأن فالسريع:

- سريع.
- بسيط.
- موثوق.
- محلي.
- قريب من الناس.
- حديث.
- احترافي.

ولا يجب أن يبدو الموقع:

- Template جاهز.
- مشروع طلابي.
- موقع Gaming.
- شركة عالمية ضخمة ومعقدة.
- Marketplace مزدحم.

الهدف:

> **خدمة توصيل محلية، شكلها احترافي وسهلة وقريبة من العميل.**

---

# 2. نطاق النسخة الحالية

## الموجود الآن

- Marketing Website.
- Home Page.
- About Page.
- Services Page.
- Join Us Page.
- Contact Page.
- Phone actions.
- WhatsApp actions.
- أكثر من رقم للتواصل.
- روابط السوشيال ميديا.
- قسم التطبيق قريبًا.

## غير موجود الآن

- Customer Accounts.
- Login / Registration.
- Online Ordering.
- Shopping Cart.
- Live Tracking.
- Driver Accounts.
- Admin Dashboard.
- Electronic Payments.
- OTP.
- Notifications.
- Mobile App.

**ممنوع تصميم Features وهمية توحي بأنها موجودة حاليًا.**

---

# 3. قواعد اللوجو والهوية

## اللوجو

اللوجو الرسمي الذي تم اعتماده هو المرجع الأساسي للهوية.

### قواعد صارمة

- استخدم اللوجو الرسمي كما هو.
- لا تعيد رسمه.
- لا تنشئ Wordmark بديل.
- لا تغير ألوانه أو نسبه.
- لا تستبدله بحرف أو أيقونة.
- لا تستخدم AI لإعادة ابتكاره.
- لا تضف Effects تغير شخصيته.

عند توفر ملف اللوجو النهائي يفضل وضعه في:

```
public/images/logo/
├── logo.svg
├── logo-dark.png
└── logo-light.png
```

---

# 4. نظام الألوان

الهوية الأساسية: **Dark Premium + Orange Accent**.

| الاستخدام | اللون |
|---|---|
| Main Background | `#090A0C` |
| Dark Surface | `#111215` |
| Elevated Surface | `#17191D` |
| Primary Orange | `#FF8A00` |
| Strong Orange | `#FF6900` |
| Fire Orange | `#FF5200` |
| Main Text | `#F4F2EE` |
| Secondary Text | `#A8A5A1` |

## فلسفة استخدام اللون

الأسود/الداكن هو الأساس.

البرتقالي يستخدم كـ **Accent** من أجل:

- CTA الرئيسي.
- الكلمات المهمة.
- الأيقونات.
- Highlights.
- Gradients بسيطة.

### ممنوع

- جعل كل الصفحة برتقالية.
- Orange Glow مبالغ فيه.
- Neon.
- Gradients كثيرة.
- استخدام عدة ألوان عشوائية.

---

# 5. Typography

الموقع عربي أولًا ويعمل بالكامل RTL.

## الخط المفضل

1. **Alexandria**
2. **Cairo** كـ fallback.

مثال:

```css
font-family: "Alexandria", "Cairo", Arial, sans-serif;
```

## قواعد النص

### العناوين

- قوية.
- واضحة.
- مسافات جيدة.
- Hierarchy واضح.
- بدون زخرفة مبالغ فيها.

### النصوص

- سهلة القراءة.
- حجم مناسب.
- Line-height مريح.
- لا تستخدم نصوصًا صغيرة جدًا.

---

# 6. لغة التصميم

## الكلمات المفتاحية

- Minimal
- Modern
- Premium
- Dark
- Fast
- Clean
- Professional
- Arabic-first

## عناصر مرغوبة

- مساحات فارغة جيدة.
- Subtle Borders.
- Soft Shadows.
- Rounded Corners.
- Orange Highlights بسيطة.
- أيقونات موحدة.
- تفاصيل مستوحاة من السرعة بشكل محدود.

## عناصر غير مرغوبة

- زحمة.
- Cards كثيرة بلا داع.
- Placeholder Boxes ضخمة.
- تأثيرات Gaming.
- Glow قوي.
- Animations كثيرة.
- صور AI غريبة.
- عناصر ديكورية عشوائية.

---

# 7. قواعد Layout

## Containers

المحتوى يجب أن يكون داخل Container بعرض منطقي.

لا تمد النصوص المهمة بعرض الشاشة بالكامل على Desktop.

## Spacing

يفضل الالتزام بـ spacing scale:

```
8px
12px
16px
24px
32px
48px
64px
80px
```

## Cards

استخدم Card فقط عندما تضيف تنظيمًا حقيقيًا.

شكلها:

- Dark background.
- Border خفيف.
- Radius متوازن.
- Shadow بسيط.
- Content واضح.

---

# 8. Navigation

## Desktop

يمين:

- اللوجو الرسمي.

المنتصف:

- الرئيسية
- عن فالسريع
- خدماتنا
- انضم إلينا
- تواصل معنا

اليسار:

CTA:

> 📞 اطلب الآن

## Mobile

- اللوجو.
- Hamburger Menu.
- روابط واضحة.
- Touch Targets مناسبة.

لا تزحم الـHeader.

---

# 9. Home Page Architecture

الترتيب المقترح:

```
Header
↓
Hero
↓
Announcement Bar
↓
Why Falsare3
↓
How To Order
↓
Services Preview
↓
App Coming Soon
↓
Service Area / Local Message
↓
Final CTA
↓
Footer
```

---

# 10. Hero Section

## الهدف

خلال ثوانٍ يجب أن يفهم الزائر:

1. ما هي فالسريع؟
2. كيف يطلب؟
3. لماذا يستخدمها؟

## Eyebrow

مثال:

> ⚡ قريبًا في مدينتك

صغير وواضح.

## Main Headline

الاقتراح الأساسي:

> كل اللي محتاجه...  
> **يوصلك فالسريع.**

أو:

> اطلبها...  
> **توصل فالسريع.**

استخدم Hierarchy قوي.

يمكن إبراز الجزء الأساسي بالبرتقالي، لكن لا تجعل كل العنوان برتقاليًا.

## Description

قصير وواضح، مثال:

> خدمة توصيل محلية بسيطة وسريعة. اطلب بسهولة عبر الهاتف أو واتساب.

## CTA

### Primary

> 📞 اطلب عبر الهاتف

الرابط:

```
tel:+20XXXXXXXXXX
```

### Secondary

> 💬 واتساب

الرابط:

```
https://wa.me/20XXXXXXXXXX
```

## Trust Points

بعد الأزرار:

- ⚡ أسرع
- 🛡 موثوق
- 📍 أقرب لك

يجب أن تكون Compact.

---

# 11. Hero Visual

هذه نقطة مهمة جدًا.

## Desktop

الصورة يجب أن تكون **بجانب النص**.

ليس أسفل النص.

مثال:

```
┌──────────────────────────────────────────────┐
│                                              │
│  [ HERO IMAGE ]       كل اللي محتاجه...      │
│                       يوصلك فالسريع          │
│                       Description            │
│                       [Phone] [WhatsApp]     │
│                                              │
└──────────────────────────────────────────────┘
```

يجب اختبار هذا على:

- شاشات واسعة.
- Laptop.
- Tablet Landscape.

## Mobile

الترتيب:

```
Headline
↓
Description
↓
CTA Buttons
↓
Trust Points
↓
Hero Image
```

## قواعد الصورة

- قابلة للاستبدال بسهولة.
- لا تغير Layout عند تغييرها.
- استخدم `object-fit`.
- حافظ على Aspect Ratio مناسب.
- لا تستخدم Placeholder مكتوب عليه DELIVERY VISUAL.
- لا تستخدم مربع TEMPORARY IMAGE قبيح.

عند عدم وجود صورة نهائية، استخدم معالجة بسيطة وأنيقة لا تجعل الموقع يبدو غير مكتمل.

---

# 12. Image & Asset System

كل الصور يجب أن تكون قابلة للاستبدال لاحقًا بدون إعادة تصميم الموقع.

الهيكل المقترح:

```
public/
└── images/
    ├── logo/
    │   ├── logo.svg
    │   ├── logo-dark.png
    │   └── logo-light.png
    ├── hero/
    │   └── hero-main.webp
    ├── about/
    │   └── about-main.webp
    ├── app/
    │   └── app-preview.png
    └── social/
        └── og-image.png
```

## الصيغ

### SVG

- Logo.
- Icons.
- Vector assets.

### WebP

- صور الموقع.
- Hero images.
- Marketing photos.

### PNG

- Transparent assets.
- Screenshots.
- Mockups.

## قاعدة مهمة

عندما يرفع صاحب المشروع صورة حقيقية:

**يتم استبدال الصورة فقط، ولا يتم تغيير التصميم كله بدون طلب واضح.**

---

# 13. Announcement Bar

بعد Hero.

مثال:

> ⚡ فالسريع في مرحلة الإطلاق حاليًا — التطبيق قريبًا.

الشريط:

- صغير.
- بسيط.
- لا يأخذ مساحة كبيرة.
- لا يشتت الانتباه.

---

# 14. Why Falsare3

## العنوان

> لماذا فالسريع؟

## Headline

> بسيطة... وسريعة... وقريبة منك.

ثلاث نقاط فقط:

### ⚡ سرعة

> لأن وقتك مهم.

### 🛡 ثقة

> نهتم بطلبك من البداية حتى يصل.

### 📍 قريب منك

> خدمة محلية تعرف منطقتك.

لا تجعل الـCards ضخمة.

---

# 15. How To Order

## العنوان

> اطلب بسهولة

ثلاث خطوات:

### 1. اختر طريقة التواصل

> اتصل بنا أو تواصل عبر واتساب.

### 2. أخبرنا بطلبك

> أرسل لنا تفاصيل طلبك ومكانك.

### 3. والباقي علينا

> نتابع طلبك ونعمل على توصيله إليك.

يفضل استخدام:

- Timeline.
- Numbered Steps.
- Simple Flow.

---

# 16. Services

## Page

> خدماتنا

## Headline

> نوصل لك اللي تحتاجه.

الخدمات الأولية القابلة للتعديل:

- 📦 توصيل الطلبات.
- 🛍️ استلام وتسليم المنتجات.
- 🏪 التوصيل من المتاجر المحلية.
- 📍 التوصيل داخل نطاق الخدمة.

هذه ليست قائمة نهائية ويجب أن تكون سهلة التعديل.

---

# 17. About Page

## Headline

> من منطقتنا... ليومك.

نص مقترح:

> فالسريع هي خدمة توصيل محلية نسعى لتقديم تجربة بسيطة وسريعة وقريبة من الناس.

تركز الصفحة على:

- البساطة.
- السرعة.
- الثقة.
- الخدمة المحلية.

لا تكتب قصة شركة طويلة أو معلومات غير حقيقية.

---

# 18. Join Us

الصفحة مخصصة حاليًا للتقديم.

## Headline

> انضم إلى فالسريع

## الحقول

- الاسم.
- رقم الهاتف.
- المدينة / المنطقة.
- نوع التقديم.
- ملاحظات اختيارية.

## أنواع التقديم

- مندوب توصيل.
- موظف.
- شراكة.

## Button

> إرسال الطلب

### مهم

إذا لم يكن هناك Backend:

- لا تدّعِ أن البيانات تم حفظها.
- يمكن إظهار رسالة واضحة حسب طريقة التنفيذ.

يجب تجهيز التصميم ليتم ربطه بـ Backend لاحقًا.

---

# 19. Contact System

يجب دعم **أكثر من رقم**.

## Phone

مثال:

```
010XXXXXXXX
012XXXXXXXX
```

عند الضغط:

```
tel:+20XXXXXXXXXX
```

## WhatsApp

مثال:

```
010XXXXXXXX
011XXXXXXXX
```

عند الضغط:

```
https://wa.me/20XXXXXXXXXX
```

## UX

- الضغط على رقم الهاتف → Phone Dialer.
- الضغط على رقم WhatsApp → WhatsApp Chat.

## Data Architecture

لا تكرر أرقام التواصل يدويًا في كل Component.

يفضل:

```ts
const contacts = [
  {
    type: "phone",
    label: "اتصل بنا",
    number: "01000000000"
  },
  {
    type: "whatsapp",
    label: "واتساب",
    number: "01000000000"
  }
];
```

يسهل ذلك:

- إضافة رقم.
- حذف رقم.
- تغيير رقم.
- ربط البيانات بـ Admin مستقبلًا.

---

# 20. App Coming Soon

التطبيق غير موجود حاليًا.

يجب أن تكون الرسالة صادقة.

## Title

> تطبيق فالسريع قريبًا

## Description

> نعمل حاليًا على تجربة أسهل وأسرع لإدارة طلباتك.

يمكن استخدام:

- Phone Mockup.
- App Preview.
- Branded Image.

لكن يجب أن تكون قابلة للاستبدال.

### ممنوع

- Download Now.
- Fake App Store buttons.
- الادعاء أن التطبيق متاح.

---

# 21. Buttons

## Primary

Orange CTA.

مثال:

> 📞 اطلب عبر الهاتف

## Secondary

Dark surface + subtle border.

مثال:

> 💬 واتساب

## القواعد

- Text واضح.
- Contrast جيد.
- Padding مريح.
- Hover واضح على Desktop.
- Touch Target مناسب على Mobile.

لا تكثر أنواع الأزرار.

---

# 22. Icons

استخدم Icon Family واحدة ومتناسقة.

مقترح:

- Lucide Icons.

الأيقونات يجب أن تكون:

- بسيطة.
- حديثة.
- مفهومة.
- متناسقة.

لا تخلط عدة Styles.

---

# 23. Footer

Footer بسيط.

يتضمن:

- اللوجو الرسمي.
- وصف قصير.
- Navigation Links.
- Social Links.
- Copyright.

الوصف المقترح:

> فالسريع — خدمة توصيل محلية بسيطة وسريعة.

الحقوق:

> © 2026 فالسريع

---

# 24. Social Media

منصات محتملة:

- Facebook.
- Instagram.
- TikTok.

لا تخترع روابط أو Accounts.

يتم وضع الروابط الحقيقية عند توفرها.

---

# 25. Responsive Rules

الموقع يجب تصميمه خصيصًا لـ:

- Desktop.
- Tablet.
- Mobile.

## Desktop

- Hero متوازن.
- Visual بجانب المحتوى.
- Navigation واضحة.
- Container بعرض منطقي.
- White Space جيد.

## Tablet

- منع التفاف النص بشكل سيئ.
- تقليل المسافات تدريجيًا.
- الحفاظ على Hierarchy.

## Mobile

- Header بسيط.
- Headlines مقروءة.
- أزرار كبيرة.
- Flow عمودي طبيعي.
- صورة Hero بعد النص.

**ممنوع اعتبار Mobile مجرد Desktop مصغر.**

---

# 26. Accessibility

يجب مراعاة:

- Contrast جيد.
- نصوص قابلة للقراءة.
- Buttons واضحة.
- Alt text للصور.
- Touch targets مناسبة.
- عدم الاعتماد على اللون وحده لتوصيل معنى.
- اختبار RTL.

---

# 27. Performance

الموقع في البداية يجب أن يكون خفيفًا.

تجنب:

- صور ضخمة.
- فيديوهات Background.
- Libraries غير ضرورية.
- Animations ثقيلة.

استخدم:

- Optimized Images.
- WebP عند الإمكان.
- CSS Effects بسيطة.
- Components خفيفة.

---

# 28. SEO Basics

يجب تجهيز الموقع لاحقًا بـ:

- Arabic page titles.
- Meta descriptions.
- Semantic HTML.
- Proper headings.
- Open Graph image.
- Favicon.
- Language declaration.
- RTL direction.

مثال:

```html
<html lang="ar" dir="rtl">
```

---

# 29. Future Architecture

الموقع الحالي بسيط، لكن المشروع قد يتطور.

مستقبلًا قد يوجد:

- Mobile App.
- Website Ordering.
- Admin Dashboard.
- Order Management.
- Driver Management.
- Customer Accounts.
- Notifications.
- Payments.
- Tracking.

العلاقة المستقبلية المتوقعة:

```
              ┌─────────────────┐
              │     Backend     │
              │       API       │
              └────────┬────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
    Mobile App      Website       Admin Panel
```

## القاعدة الحالية

لا تنفذ هذه الأنظمة الآن.

فقط لا تبنِ الموقع بطريقة تمنع التطوير مستقبلًا.

---

# 30. Content Architecture

المحتوى المتغير يجب أن يكون منظمًا.

أمثلة:

- Contacts.
- WhatsApp numbers.
- Service area.
- Services.
- Social links.
- Join application types.

هيكل مقترح مستقبلًا:

```
src/
├── data/
│   ├── contacts.ts
│   ├── services.ts
│   └── social.ts
├── components/
├── pages/
└── assets/
```

لا نحتاج Overengineering الآن، لكن يجب تجنب Component ضخم يحتوي كل بيانات الموقع.

---

# 31. User Flow

أهم Flow حاليًا:

```
Visitor
   ↓
يفهم ما هي فالسريع
   ↓
يرى الخدمات
   ↓
يختار Phone أو WhatsApp
   ↓
يتواصل مع الخدمة
```

كل قرار تصميمي يجب أن يدعم هذا المسار.

---

# 32. Design QA Checklist

## Branding

- [ ] اللوجو الرسمي مستخدم.
- [ ] لم يتم إعادة رسم اللوجو.
- [ ] الهوية الداكنة واضحة.
- [ ] البرتقالي Accent وليس Background أساسي.

## Layout

- [ ] Hero متوازن.
- [ ] Desktop: الصورة بجانب النص.
- [ ] Mobile: الصورة بعد النص.
- [ ] لا توجد مساحات فارغة غير مبررة.
- [ ] لا توجد Placeholder boxes قبيحة.

## Typography

- [ ] Arabic readable.
- [ ] RTL صحيح.
- [ ] Hierarchy واضح.
- [ ] النصوص ليست صغيرة.

## UX

- [ ] Phone CTA يعمل.
- [ ] WhatsApp CTA يعمل.
- [ ] أكثر من رقم مدعوم.
- [ ] Mobile Navigation تعمل.
- [ ] Forms واضحة.

## Visual Quality

- [ ] لا يوجد زحام.
- [ ] لا يوجد Glow مبالغ فيه.
- [ ] لا يوجد Gaming look.
- [ ] الموقع يبدو كـ Real Business.

---

# 33. OpenDesign / AI Rules

عند استخدام OpenDesign أو أي AI Design Tool:

## Non-negotiable

- استخدم اللوجو الرسمي كما هو.
- لا تعيد تصميم اللوجو.
- Arabic RTL بالكامل.
- حافظ على الهوية Dark + Orange.
- الطلب الحالي Phone + WhatsApp فقط.
- التطبيق غير متاح حاليًا.
- لا تضف Features وهمية.
- الصور قابلة للاستبدال بسهولة.
- لا تستخدم Ugly Placeholders.
- صمم Desktop وMobile بوعي.
- Usability أهم من Effects.

## Design Goal

النتيجة المطلوبة:

> **دي خدمة توصيل جديدة، شكلها احترافي، بسيطة، وقريبة مني.**

وليست:

> **Template جاهز.**

أو:

> **مشروع تجريبي.**

---

# 34. Change Policy

قبل أي تعديل بصري كبير:

1. لا تغير اللوجو.
2. لا تغير الهوية بدون قرار واضح.
3. افحص Desktop.
4. افحص Mobile.
5. لا تعدل أجزاء غير مطلوبة.
6. لا تهدم Design يعمل بدون سبب.
7. استبدال الصور يجب أن لا يغير Layout.
8. راجع النتيجة قبل اعتمادها.

---

# 35. Golden Rules

## Rule 1

**البساطة أهم من كثرة العناصر.**

## Rule 2

**اللوجو الرسمي لا يتم إعادة اختراعه.**

## Rule 3

**البرتقالي Highlight وليس كل التصميم.**

## Rule 4

**الصورة يجب أن تدعم المحتوى، لا تنافسه.**

## Rule 5

**الموقع يجب أن يبدو جيدًا قبل وبعد رفع الصور الحقيقية.**

## Rule 6

**Desktop وMobile تجربتان يجب اختبارهـما، وليس مجرد تغيير CSS عشوائي.**

## Rule 7

**أي Feature غير موجودة حاليًا لا يتم الادعاء بوجودها.**

---

# 36. Current Priority

الأولوية الحالية هي إطلاق موقع بسيط واحترافي.

الترتيب:

```
1. هوية صحيحة
2. Homepage قوية
3. Phone / WhatsApp conversion
4. صفحات تعريفية بسيطة
5. Responsive quality
6. صور حقيقية
7. Backend مستقبلًا
8. App + Admin System مستقبلًا
```

---

# Final Principle

عندما يوجد اختيار بين:

**مؤثرات أكثر**  
و  
**تصميم أنظف وأسهل**

اختر:

> **التصميم الأنظف والأسهل.**

وعندما يوجد اختيار بين:

**شكل مبهر مؤقتًا**  
و  
**هوية ثابتة وقابلة للاستمرار**

اختر:

> **الهوية الثابتة.**

---

**This document is the design source of truth for the Falsare3 website.**
