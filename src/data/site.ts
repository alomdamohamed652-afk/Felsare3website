export type Page = "home" | "about" | "services" | "join" | "contact" | "privacy" | "terms";

export type ContactItem = {
  label: string;
  value: string;
  type: "phone" | "whatsapp";
};

export type SocialItem = {
  label: string;
  url: string;
};

export const SERVICE_AREA = "سيتم الإعلان عنها قريبًا";

export const SOCIALS: SocialItem[] = [
  // أضف روابط الصفحات الرسمية هنا لاحقًا.
];

export const CONTACTS: ContactItem[] = [
  { label: "الدعم والطلبات", value: "01032789566", type: "phone" },
  { label: "الدعم والطلبات", value: "01064589298", type: "phone" },
  { label: "واتساب فالسريع", value: "201032789566", type: "whatsapp" }
];

export const cleanPhone = (value: string) => value.replace(/[^0-9]/g, "");

export const contactHref = (contact: ContactItem) =>
  contact.type === "whatsapp"
    ? `https://wa.me/${cleanPhone(contact.value)}`
    : `tel:${cleanPhone(contact.value)}`;

export const primaryPhone = () =>
  CONTACTS.find((contact) => contact.type === "phone")?.value ?? "";

export const primaryWhatsApp = () =>
  CONTACTS.find((contact) => contact.type === "whatsapp") ?? null;
