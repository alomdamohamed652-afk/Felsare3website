export type Page = "home" | "about" | "services" | "join" | "joinForm" | "order" | "support" | "inquiry" | "complaint" | "partner" | "contact" | "privacy" | "terms";

export const PAGE_PATHS: Record<Page, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  join: "/join-us",
  joinForm: "/join-us/apply",
  order: "/order",
  support: "/support",
  inquiry: "/inquiry",
  complaint: "/complaint",
  partner: "/join-us/partner",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms"
};

export const pathToPage = (pathname: string): Page | null => {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return (Object.entries(PAGE_PATHS).find(([, path]) => path === normalized)?.[0] as Page | undefined) ?? null;
};

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

export const toEgyptInternationalPhone = (value: string) => {
  const digits = cleanPhone(value);
  if (digits.startsWith("20")) return digits;
  if (digits.startsWith("0")) return `20${digits.slice(1)}`;
  return digits;
};

export const contactHref = (contact: ContactItem) =>
  contact.type === "whatsapp"
    ? `https://wa.me/${toEgyptInternationalPhone(contact.value)}`
    : `tel:${cleanPhone(contact.value)}`;

export const primaryPhone = () =>
  CONTACTS.find((contact) => contact.type === "phone")?.value ?? "";

export const primaryWhatsApp = () =>
  CONTACTS.find((contact) => contact.type === "whatsapp") ?? null;
