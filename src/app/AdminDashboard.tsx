import { useEffect, useState, type ChangeEvent } from "react";
import {
  ArrowLeft, Check, ChevronDown, ChevronUp, FileImage, GripVertical, ImagePlus,
  LayoutDashboard, LoaderCircle, LockKeyhole, LogOut, Menu, Plus, Save, Trash2, X,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { contentService } from "../lib/content-service";
import { mergePortfolioContent, type PortfolioContent, type PortfolioContentBase } from "../lib/portfolio-content";
import { localizeContent, type SiteLanguage } from "./LanguageProvider";

type SectionKey = "hero" | "navigation" | "projects" | "about" | "experience" | "certifications" | "education" | "skills" | "languages" | "resources" | "contact" | "footer";
type Field = { key: string; label: string; type?: "text" | "textarea" | "image" | "file" | "list" };
type Item = Record<string, unknown> & { id: string };

const sections: Array<{ key: SectionKey; label: string }> = [
  { key: "hero", label: "Hero" }, { key: "navigation", label: "Navigation" }, { key: "projects", label: "Projects" },
  { key: "about", label: "About" }, { key: "experience", label: "Experience" }, { key: "certifications", label: "Licences & certifications" },
  { key: "education", label: "Education" }, { key: "skills", label: "Skills" }, { key: "languages", label: "Languages" },
  { key: "resources", label: "Resources" },
  { key: "contact", label: "Contact" }, { key: "footer", label: "Footer" },
];

const collectionFields: Record<string, Field[]> = {
  navigation: [{ key: "label", label: "Menu label" }, { key: "link", label: "Destination link" }],
  projects: [{ key: "title", label: "Project title" }, { key: "coverImage", label: "Cover image", type: "image" }, { key: "galleryImages", label: "Gallery images (one URL per line)", type: "list" }, { key: "description", label: "Description", type: "textarea" }, { key: "tags", label: "Tags (one per line)", type: "list" }, { key: "year", label: "Year" }, { key: "category", label: "Category" }, { key: "link", label: "Project link" }],
  experience: [{ key: "logo", label: "Company logo", type: "image" }, { key: "jobTitle", label: "Job title" }, { key: "company", label: "Company" }, { key: "dates", label: "Dates" }, { key: "employmentType", label: "Employment type" }, { key: "location", label: "Location" }, { key: "bulletPoints", label: "Bullet points (one per line)", type: "list" }],
  certifications: [{ key: "logo", label: "Certification logo", type: "image" }, { key: "title", label: "Title" }, { key: "issuer", label: "Issuer" }, { key: "credentialUrl", label: "Credential URL" }],
  education: [{ key: "logo", label: "Institution logo", type: "image" }, { key: "degree", label: "Degree" }, { key: "institutionName", label: "Institution name" }],
  skills: [{ key: "name", label: "Skill name" }, { key: "icon", label: "Icon name" }],
  languages: [{ key: "name", label: "Language" }, { key: "proficiency", label: "Proficiency" }],
  resources: [{ key: "title", label: "Resource title" }, { key: "type", label: "Type (Download, Article, or Product)" }, { key: "coverImage", label: "Cover image", type: "image" }, { key: "description", label: "Description", type: "textarea" }, { key: "link", label: "Resource file or external link", type: "file" }],
};

const emptyItems: Record<string, Omit<Item, "id">> = {
  navigation: { label: "New link", link: "#" },
  projects: { title: "New project", coverImage: "", galleryImages: [], description: "", tags: [], year: "", category: "", link: "#" },
  experience: { logo: "", jobTitle: "New role", company: "", dates: "", employmentType: "", location: "", bulletPoints: [] },
  certifications: { logo: "", title: "New certification", issuer: "", credentialUrl: "" },
  education: { logo: "", degree: "", institutionName: "" },
  skills: { name: "New skill", icon: "Sparkles" },
  languages: { name: "New language", proficiency: "" },
  resources: { title: "New resource", type: "Download", coverImage: "", description: "", link: "" },
};

function clone<T>(value: T): T { return structuredClone(value); }
function makeId() { return `item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`; }
function isChanged<T>(a: T, b: T) { return JSON.stringify(a) !== JSON.stringify(b); }
function cleanList(values: string[]) { return values.map((value) => value.trim()).filter(Boolean); }
function cleanContentForSave(content: PortfolioContent): PortfolioContent {
  const cleanBase = (base: PortfolioContentBase): PortfolioContentBase => ({
    ...base,
    hero: { ...base.hero, words: cleanList(base.hero.words) },
    projects: base.projects.map((project) => ({ ...project, galleryImages: cleanList(project.galleryImages), tags: cleanList(project.tags) })),
    experience: base.experience.map((item) => ({ ...item, bulletPoints: cleanList(item.bulletPoints) })),
  });
  const cleaned = cleanBase(content);
  return { ...cleaned, ...(content.arabic ? { arabic: cleanBase(content.arabic) } : {}) };
}

function FieldLabel({ children }: { children: string }) {
  return <label className="mb-1.5 block text-xs font-medium text-[#b8c9d8]">{children}</label>;
}

function TextField({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean }) {
  const styles = "w-full rounded-xl border border-[#36516d] bg-[#081727] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-[#72879a] focus:border-[#63adff] focus:ring-2 focus:ring-[#277bcc]/20";
  return <div><FieldLabel>{label}</FieldLabel>{multiline ? <textarea className={`${styles} min-h-24 resize-y`} value={value} onChange={(event) => onChange(event.target.value)} /> : <input className={styles} value={value} onChange={(event) => onChange(event.target.value)} />}</div>;
}

function ImageField({ label, value, token, onChange }: { label: string; value: string; token: string; onChange: (value: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const onFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.match(/^image\/(png|jpeg|webp|gif)$/) || file.size > 5 * 1024 * 1024) {
      toast.error("Choose a PNG, JPEG, WebP, or GIF smaller than 5 MB.");
      event.target.value = "";
      return;
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const result = await contentService.upload(String(reader.result), token);
        onChange(result.url);
        toast.success("Image uploaded.");
      } catch (error) { toast.error(error instanceof Error ? error.message : "Upload failed."); }
      finally { setUploading(false); event.target.value = ""; }
    };
    reader.readAsDataURL(file);
  };
  return <div>
    <FieldLabel>{label}</FieldLabel>
    <div className="flex flex-col gap-3 rounded-xl border border-dashed border-[#42617c] bg-[#071523] p-3 sm:flex-row sm:items-center">
      <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0d2135]">{value ? <img src={value} alt="Selected upload" className="size-full object-cover" /> : <FileImage className="text-[#7b9bb8]" size={24} />}</div>
      <div className="flex flex-wrap gap-2"><label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#126ab0] px-3 py-2 text-xs font-medium text-white hover:bg-[#197dc9]"><ImagePlus size={15} />{uploading ? "Uploading…" : "Upload image"}<input className="sr-only" type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={onFile} disabled={uploading} /></label>{value && <button type="button" onClick={() => onChange("")} className="inline-flex items-center gap-1.5 rounded-lg border border-[#38526d] px-3 py-2 text-xs text-[#c4d0dc] hover:border-red-400/60 hover:text-red-200"><X size={14} />Remove</button>}</div>
    </div>
  </div>;
}

function ResourceFileField({ label, value, token, onChange }: { label: string; value: string; token: string; onChange: (value: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const onFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const allowed = [
      "application/pdf", "application/zip", "application/x-zip-compressed", "text/plain",
      "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    if (!allowed.includes(file.type) || file.size > 15 * 1024 * 1024) {
      toast.error("Choose a PDF, ZIP, Office document, or text file smaller than 15 MB.");
      event.target.value = "";
      return;
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const result = await contentService.upload(String(reader.result), token);
        onChange(result.url);
        toast.success("Resource file uploaded.");
      } catch (error) { toast.error(error instanceof Error ? error.message : "Upload failed."); }
      finally { setUploading(false); event.target.value = ""; }
    };
    reader.readAsDataURL(file);
  };
  return <div>
    <FieldLabel>{label}</FieldLabel>
    <div className="space-y-3 rounded-xl border border-dashed border-[#42617c] bg-[#071523] p-3">
      <input className="w-full rounded-lg border border-[#36516d] bg-[#081727] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-[#72879a] focus:border-[#63adff] focus:ring-2 focus:ring-[#277bcc]/20" value={value} placeholder="Paste a public URL, or upload a file below" onChange={(event) => onChange(event.target.value)} />
      <div className="flex flex-wrap items-center gap-2"><label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#126ab0] px-3 py-2 text-xs font-medium text-white hover:bg-[#197dc9]"><ImagePlus size={15} />{uploading ? "Uploading…" : "Upload file"}<input className="sr-only" type="file" accept=".pdf,.zip,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt" onChange={onFile} disabled={uploading} /></label>{value && <button type="button" onClick={() => onChange("")} className="inline-flex items-center gap-1.5 rounded-lg border border-[#38526d] px-3 py-2 text-xs text-[#c4d0dc] hover:border-red-400/60 hover:text-red-200"><X size={14} />Remove link</button>}<span className="text-xs text-[#8da3b8]">PDF, ZIP, Office, or text — up to 15 MB.</span></div>
    </div>
  </div>;
}

function CollectionEditor({ title, items, fields, token, onChange }: { title: string; items: Item[]; fields: Field[]; token: string; onChange: (items: Item[]) => void }) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const update = (index: number, key: string, value: string | string[]) => onChange(items.map((item, current) => current === index ? { ...item, [key]: value } : item));
  const move = (from: number, to: number) => { if (from === to) return; const next = [...items]; const [item] = next.splice(from, 1); next.splice(to, 0, item); onChange(next); };
  const add = () => onChange([...items, { id: makeId(), ...clone(emptyItems[title]) }]);
  const remove = (index: number) => { if (window.confirm("Delete this item? This action cannot be undone until you save a replacement.")) onChange(items.filter((_, current) => current !== index)); };
  return <div className="space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-[#9eb2c5]">Drag items to set their public order.</p><button type="button" onClick={add} className="inline-flex items-center gap-2 rounded-xl bg-[#126ab0] px-3 py-2 text-sm font-medium text-white hover:bg-[#197dc9]"><Plus size={16} />Add item</button></div>
    {items.length === 0 && <div className="rounded-xl border border-dashed border-[#38526d] p-8 text-center text-sm text-[#8da3b8]">No items yet. Add the first one.</div>}
    {items.map((item, index) => <article key={item.id} draggable onDragStart={() => setDragIndex(index)} onDragOver={(event) => event.preventDefault()} onDrop={() => { if (dragIndex !== null) move(dragIndex, index); setDragIndex(null); }} className="rounded-2xl border border-[#29445f] bg-[#091a2b] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-3"><div className="flex items-center gap-2 text-sm font-semibold text-white"><GripVertical size={17} className="cursor-grab text-[#7d9bb4]" />{String(item.title || item.jobTitle || item.name || item.label || item.degree || "Item")}</div><div className="flex gap-1"><button type="button" disabled={index === 0} onClick={() => move(index, index - 1)} className="rounded-md p-1.5 text-[#b7c9d9] hover:bg-white/10 disabled:opacity-30" aria-label="Move up"><ChevronUp size={16} /></button><button type="button" disabled={index === items.length - 1} onClick={() => move(index, index + 1)} className="rounded-md p-1.5 text-[#b7c9d9] hover:bg-white/10 disabled:opacity-30" aria-label="Move down"><ChevronDown size={16} /></button><button type="button" onClick={() => remove(index)} className="rounded-md p-1.5 text-red-200 hover:bg-red-400/10" aria-label="Delete"><Trash2 size={16} /></button></div></div>
      <div className="grid gap-4 md:grid-cols-2">{fields.map((field) => <div key={field.key} className={field.type === "textarea" || field.type === "list" || field.type === "image" || field.type === "file" ? "md:col-span-2" : ""}>{field.type === "image" ? <ImageField label={field.label} value={String(item[field.key] || "")} token={token} onChange={(value) => update(index, field.key, value)} /> : field.type === "file" ? <ResourceFileField label={field.label} value={String(item[field.key] || "")} token={token} onChange={(value) => update(index, field.key, value)} /> : <TextField label={field.label} value={Array.isArray(item[field.key]) ? (item[field.key] as string[]).join("\n") : String(item[field.key] || "")} multiline={field.type === "textarea" || field.type === "list"} onChange={(value) => update(index, field.key, field.type === "list" ? value.replace(/\r/g, "").split("\n") : title === "Projects" && field.key === "link" ? value.replace(/^#(?=(?:https?:\/\/|www\.))/i, "") : value)} />}</div>)}</div>
    </article>)}
  </div>;
}

function Login({ onLogin }: { onLogin: (token: string) => void }) {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [loading, setLoading] = useState(false);
  const isSupabase = contentService.usingSupabase;
  const submit = async (event: React.FormEvent) => { event.preventDefault(); setLoading(true); try { const result = await contentService.login(password, email); sessionStorage.setItem("portfolio-admin-token", result.token); onLogin(result.token); } catch (error) { toast.error(error instanceof Error ? error.message : "Login failed."); } finally { setLoading(false); } };
  return <main className="min-h-screen bg-[#061424] px-5 py-10 text-white"><div className="mx-auto flex min-h-[80vh] max-w-md items-center"><form onSubmit={submit} className="w-full rounded-3xl border border-[#31506c] bg-[#0a1b2d] p-7 shadow-2xl sm:p-9"><div className="mb-7 flex size-12 items-center justify-center rounded-2xl bg-[#126ab0]/20 text-[#90c8ff]"><LockKeyhole size={23} /></div><h1 className="text-2xl font-semibold">Portfolio Admin</h1><p className="mt-2 text-sm leading-relaxed text-[#9ab0c2]">{isSupabase ? "Sign in with the secure Supabase admin account." : "Sign in to manage the portfolio content. Your password is verified by the local server."}</p>{isSupabase && <div className="mt-7"><FieldLabel>Admin email</FieldLabel><input autoFocus className="w-full rounded-xl border border-[#36516d] bg-[#081727] px-3 py-3 text-white outline-none focus:border-[#63adff]" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></div>}<div className={isSupabase ? "mt-4" : "mt-7"}><FieldLabel>Admin password</FieldLabel><input autoFocus={!isSupabase} className="w-full rounded-xl border border-[#36516d] bg-[#081727] px-3 py-3 text-white outline-none focus:border-[#63adff]" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></div><button disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#126ab0] px-4 py-3 text-sm font-semibold text-white hover:bg-[#197dc9] disabled:opacity-60">{loading && <LoaderCircle size={16} className="animate-spin" />}Sign in</button></form></div><Toaster theme="dark" position="top-right" /></main>;
}

export default function AdminDashboard() {
  const [token, setToken] = useState(() => sessionStorage.getItem("portfolio-admin-token") || "");
  const [saved, setSaved] = useState<PortfolioContent | null>(null); const [draft, setDraft] = useState<PortfolioContent | null>(null);
  const [active, setActive] = useState<SectionKey>("hero"); const [loading, setLoading] = useState(Boolean(token)); const [menuOpen, setMenuOpen] = useState(false); const [saving, setSaving] = useState(false);
  const [contentLanguage, setContentLanguage] = useState<SiteLanguage>("en");
  const [needsWebsiteSync, setNeedsWebsiteSync] = useState(false);
  const dirty = Boolean(saved && draft && isChanged(saved, draft)) || needsWebsiteSync;
  useEffect(() => { if (!token) return; setLoading(true); contentService.getAdmin(token).then((content) => { setSaved(clone(content)); setDraft(clone(content)); setNeedsWebsiteSync(!content.syncState?.websiteContentSyncedAt); }).catch((error) => { sessionStorage.removeItem("portfolio-admin-token"); setToken(""); toast.error(error instanceof Error ? error.message : "Session expired."); }).finally(() => setLoading(false)); }, [token]);
  useEffect(() => { const warn = (event: BeforeUnloadEvent) => { if (dirty) { event.preventDefault(); event.returnValue = ""; } }; window.addEventListener("beforeunload", warn); return () => window.removeEventListener("beforeunload", warn); }, [dirty]);
  if (!token) return <Login onLogin={setToken} />;
  if (loading || !draft || !saved) return <main className="grid min-h-screen place-items-center bg-[#061424] text-[#cde7ff]"><LoaderCircle className="animate-spin" /></main>;
  const editing = contentLanguage === "ar" ? (draft.arabic ? localizeContent(mergePortfolioContent(draft.arabic), "ar") : localizeContent(draft, "ar")) : draft;
  const setEditing = (next: PortfolioContent) => {
    if (contentLanguage === "ar") {
      const { arabic: _ignored, ...arabicContent } = next;
      setDraft({ ...draft, arabic: arabicContent });
      return;
    }
    setDraft({ ...next, arabic: draft.arabic });
  };
  const setRoot = <K extends keyof PortfolioContent>(key: K, value: PortfolioContent[K]) => setEditing({ ...editing, [key]: value });
  const updateObject = (key: "hero" | "about" | "contact" | "footer", field: string, value: string | string[]) => setRoot(key, { ...(editing[key] as object), [field]: value } as PortfolioContent[typeof key]);
  const choose = (key: SectionKey) => { if (!dirty || window.confirm("You have unsaved changes. Continue without saving?")) { setActive(key); setMenuOpen(false); } };
  const save = async () => { const isFirstSync = needsWebsiteSync; setSaving(true); try { const next = cleanContentForSave({ ...draft, syncState: { ...draft.syncState, websiteContentSyncedAt: draft.syncState?.websiteContentSyncedAt || new Date().toISOString() } }); const result = await contentService.save(next, token); setSaved(clone(result.content)); setDraft(clone(result.content)); setNeedsWebsiteSync(false); toast.success(isFirstSync ? "Website content synced to the dashboard." : "Content saved successfully."); } catch (error) { toast.error(error instanceof Error ? error.message : "Save failed."); } finally { setSaving(false); } };
  const reset = () => { if (dirty && window.confirm("Reset all unsaved changes on this page?")) setDraft(clone(saved)); };
  const logout = async () => { if (dirty && !window.confirm("You have unsaved changes. Log out anyway?")) return; await contentService.logout(token).catch(() => undefined); sessionStorage.removeItem("portfolio-admin-token"); setToken(""); };
  const body = (() => {
    if (active === "hero") return <div className="grid gap-5 md:grid-cols-2"><div className="md:col-span-2"><TextField label="Headline" value={editing.hero.title} onChange={(value) => updateObject("hero", "title", value)} /></div><div className="md:col-span-2"><TextField label="Animated words (one per line)" value={editing.hero.words.join("\n")} multiline onChange={(value) => updateObject("hero", "words", value.split("\n").map((word) => word.trim()).filter(Boolean))} /></div><div className="md:col-span-2"><TextField label="Subtitle" value={editing.hero.subtitle} multiline onChange={(value) => updateObject("hero", "subtitle", value)} /></div><ImageField label="Profile image" value={editing.hero.profileImage} token={token} onChange={(value) => updateObject("hero", "profileImage", value)} /><TextField label="CV link" value={editing.hero.cvLink} onChange={(value) => updateObject("hero", "cvLink", value)} /><TextField label="Primary CTA label" value={editing.hero.primaryCtaLabel} onChange={(value) => updateObject("hero", "primaryCtaLabel", value)} /><TextField label="Primary CTA link" value={editing.hero.primaryCtaLink} onChange={(value) => updateObject("hero", "primaryCtaLink", value)} /><TextField label="Secondary CTA label" value={editing.hero.secondaryCtaLabel} onChange={(value) => updateObject("hero", "secondaryCtaLabel", value)} /><TextField label="Secondary CTA link" value={editing.hero.secondaryCtaLink} onChange={(value) => updateObject("hero", "secondaryCtaLabel", value)} /></div>;
    if (active === "about") return <div className="grid gap-5 md:grid-cols-2"><ImageField label="Profile image" value={editing.about.profileImage} token={token} onChange={(value) => updateObject("about", "profileImage", value)} /><TextField label="Name" value={editing.about.name} onChange={(value) => updateObject("about", "name", value)} /><div className="md:col-span-2"><TextField label="Bio" value={editing.about.bio} multiline onChange={(value) => updateObject("about", "bio", value)} /></div>{(["behance", "linkedin", "whatsapp"] as const).map((key) => <TextField key={key} label={`${key[0].toUpperCase()}${key.slice(1)} URL`} value={editing.about.socialLinks[key]} onChange={(value) => setRoot("about", { ...editing.about, socialLinks: { ...editing.about.socialLinks, [key]: value } })} />)}</div>;
    if (active === "contact") return <div className="grid gap-5 md:grid-cols-2"><div className="md:col-span-2"><TextField label="Heading" value={editing.contact.heading} onChange={(value) => updateObject("contact", "heading", value)} /></div><div className="md:col-span-2"><TextField label="Description" value={editing.contact.description} multiline onChange={(value) => updateObject("contact", "description", value)} /></div>{(["email", "whatsAppNumber", "whatsAppLink", "linkedInUrl", "behanceUrl"] as const).map((key) => <TextField key={key} label={key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase())} value={editing.contact[key]} onChange={(value) => updateObject("contact", key, value)} />)}</div>;
    if (active === "footer") return <div className="grid gap-5 md:grid-cols-2"><TextField label="Copyright text" value={editing.footer.copyright} onChange={(value) => updateObject("footer", "copyright", value)} /><ImageField label="Footer logo" value={editing.footer.logo} token={token} onChange={(value) => updateObject("footer", "logo", value)} /></div>;
    const key = active as keyof PortfolioContent; return <CollectionEditor title={active} items={editing[key] as Item[]} fields={collectionFields[active]} token={token} onChange={(items) => setRoot(key, items as PortfolioContent[typeof key])} />;
  })();
  const activeLabel = sections.find((section) => section.key === active)?.label;
  return <main className="min-h-screen bg-[#061424] text-white"><Toaster theme="dark" position="top-right" richColors /><aside className={`fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r border-[#29445f] bg-[#081827] p-4 transition-transform lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}><div className="mb-7 flex items-center gap-3 px-2"><span className="grid size-10 place-items-center rounded-xl bg-[#126ab0]/20 text-[#9fd2ff]"><LayoutDashboard size={21} /></span><div><p className="font-semibold">Portfolio Admin</p><p className="text-xs text-[#8da6ba]">Content manager</p></div></div><nav className="flex-1 space-y-1 overflow-y-auto">{sections.map((section) => <button key={section.key} onClick={() => choose(section.key)} className={`flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition ${active === section.key ? "bg-[#126ab0]/20 text-white" : "text-[#a9bccd] hover:bg-white/5 hover:text-white"}`}>{section.label}</button>)}</nav><button onClick={logout} className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#38536d] px-3 py-2.5 text-sm text-[#bfd0df] hover:border-red-300/50 hover:text-red-100"><LogOut size={16} />Log out</button></aside>{menuOpen && <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-20 bg-black/50 lg:hidden" />}<div className="lg:pl-72"><header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#29445f] bg-[#071727]/95 px-5 py-4 backdrop-blur sm:px-8"><div className="flex items-center gap-3"><button onClick={() => setMenuOpen(true)} className="rounded-lg p-2 text-[#b9cde0] hover:bg-white/10 lg:hidden" aria-label="Open navigation"><Menu size={20} /></button><div><p className="text-xs text-[#91a9bf]">Content editor</p><h1 className="text-xl font-semibold">{activeLabel}</h1></div></div><div className="flex items-center gap-2"><div className="inline-flex rounded-xl border border-[#38536d] bg-[#081727] p-1" aria-label="Content language"><button onClick={() => setContentLanguage("en")} className={`rounded-lg px-2.5 py-1.5 text-xs font-medium ${contentLanguage === "en" ? "bg-[#126ab0] text-white" : "text-[#a9bccd]"}`}>English</button><button onClick={() => setContentLanguage("ar")} className={`rounded-lg px-2.5 py-1.5 text-xs font-medium ${contentLanguage === "ar" ? "bg-[#126ab0] text-white" : "text-[#a9bccd]"}`}>العربية</button></div><a href="/" className="hidden items-center gap-2 rounded-xl border border-[#38536d] px-3 py-2 text-sm text-[#c0d2e1] hover:bg-white/5 sm:inline-flex"><ArrowLeft size={16} />View site</a><button disabled={!dirty || saving} onClick={reset} className="rounded-xl border border-[#38536d] px-3 py-2 text-sm text-[#c0d2e1] disabled:opacity-40">Reset</button><button disabled={!dirty || saving} onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-[#126ab0] px-3 py-2 text-sm font-medium text-white hover:bg-[#197dc9] disabled:opacity-50">{saving ? <LoaderCircle size={16} className="animate-spin" /> : <Save size={16} />}{saving ? "Saving" : "Save"}</button></div></header><section className="mx-auto max-w-5xl px-5 py-8 sm:px-8"><div className="mb-6 flex items-center justify-between rounded-2xl border border-[#29445f] bg-[#091a2b] px-4 py-3"><p className="text-sm text-[#b9cbd9]">{dirty ? "You have unsaved changes." : "All changes are saved."}</p>{!dirty && <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300"><Check size={15} />Saved</span>}</div><div dir={contentLanguage === "ar" ? "rtl" : "ltr"} className="rounded-2xl border border-[#29445f] bg-[#091a2b] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.15)] sm:p-6">{body}</div></section></div></main>;
}
