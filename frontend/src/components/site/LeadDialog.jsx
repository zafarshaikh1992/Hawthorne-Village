import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { clinic, formspreeEndpoint } from "@/lib/site-data";

/**
 * Reusable lead-capture dialog, following the BookingDialog pattern.
 * Props:
 *  - open / onOpenChange: dialog state
 *  - icon: lucide icon component for the header
 *  - accent: { chipBg, chipText, button, buttonHover } tailwind classes
 *  - title / description: header copy
 *  - selectLabel / selectOptions: the topic dropdown
 *  - footnote: optional node under the header description (e.g. external link)
 *  - testId: prefix for data-testids
 */
export default function LeadDialog({
  open,
  onOpenChange,
  icon: Icon,
  accent,
  title,
  description,
  selectLabel,
  selectOptions,
  footnote = null,
  testId,
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", topic: "", notes: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: typeof e === "string" ? e : e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone so we can get back to you.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          topic: form.topic,
          notes: form.notes,
          source: testId,
          _subject: `Callback request (${testId}) from ${form.name}`,
        }),
      });
      setSubmitting(false);
      if (res.ok) {
        setDone(true);
        toast.success("Thanks! We'll call you within one business hour.");
      } else {
        toast.error("Something went wrong. Please call us instead.");
      }
    } catch {
      setSubmitting(false);
      toast.error("Something went wrong. Please call us instead.");
    }
  };

  const close = () => {
    onOpenChange(false);
    setTimeout(() => {
      setDone(false);
      setForm({ name: "", phone: "", email: "", topic: "", notes: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? close() : onOpenChange(v))}>
      <DialogContent data-testid={`${testId}-dialog`} className="sm:max-w-[520px] rounded-3xl p-0 overflow-hidden border-slate-200">
        {done ? (
          <div className="p-8 md:p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#E6F4EA] text-[#0F9D58] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-[#0A192F]">Got it. We&apos;ll be in touch.</h3>
            <p className="mt-3 text-[#64748B] text-[15px] leading-relaxed">
              A team member will call you within one business hour. Prefer to talk now? Call{" "}
              <a href={clinic.phoneHref} className="text-[#1A73E8] underline">{clinic.phone}</a>.
            </p>
            <Button
              data-testid={`${testId}-close-btn`}
              onClick={close}
              className="mt-6 h-11 rounded-full bg-[#0A192F] hover:bg-[#111c36] text-white px-6"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-[#F8FAFC] p-6 md:p-8 border-b border-slate-100">
              <DialogHeader>
                <div className={`w-11 h-11 rounded-xl ${accent.chipBg} ${accent.chipText} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <DialogTitle className="text-[22px] font-semibold text-[#0A192F] text-left leading-snug">{title}</DialogTitle>
                <DialogDescription className="text-[14px] text-[#64748B] text-left leading-relaxed">
                  {description}
                </DialogDescription>
              </DialogHeader>
              {footnote}
            </div>

            <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`${testId}-name`} className="text-[13px] text-[#334155]">Full name *</Label>
                  <Input id={`${testId}-name`} data-testid={`${testId}-name`} required value={form.name} onChange={update("name")} className="mt-1.5 h-11 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor={`${testId}-phone`} className="text-[13px] text-[#334155]">Phone *</Label>
                  <Input id={`${testId}-phone`} type="tel" data-testid={`${testId}-phone`} required value={form.phone} onChange={update("phone")} className="mt-1.5 h-11 rounded-xl" />
                </div>
              </div>

              <div>
                <Label htmlFor={`${testId}-email`} className="text-[13px] text-[#334155]">Email</Label>
                <Input id={`${testId}-email`} type="email" data-testid={`${testId}-email`} value={form.email} onChange={update("email")} className="mt-1.5 h-11 rounded-xl" />
              </div>

              <div>
                <Label className="text-[13px] text-[#334155]">{selectLabel}</Label>
                <Select value={form.topic} onValueChange={update("topic")}>
                  <SelectTrigger data-testid={`${testId}-topic`} className="mt-1.5 h-11 rounded-xl">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectOptions.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor={`${testId}-notes`} className="text-[13px] text-[#334155]">Anything we should know?</Label>
                <Textarea id={`${testId}-notes`} data-testid={`${testId}-notes`} rows={3} value={form.notes} onChange={update("notes")} className="mt-1.5 rounded-xl" />
              </div>

              <Button
                type="submit"
                data-testid={`${testId}-submit`}
                disabled={submitting}
                className={`w-full h-12 rounded-full ${accent.button} ${accent.buttonHover} text-white font-semibold shadow-[0_8px_24px_rgba(10,25,47,0.25)]`}
              >
                {submitting ? "Sending…" : "Request a callback"}
              </Button>
              <p className="text-[12px] text-[#94A3B8] text-center">By submitting, you agree to be contacted by our front desk.</p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
