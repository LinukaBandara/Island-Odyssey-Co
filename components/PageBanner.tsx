export default function PageBanner({ label }: { label: string }) {
  return (
    <div className="bg-primary pt-24 pb-3 px-4 sm:px-8 lg:px-12">
      <p className="max-w-6xl mx-auto text-white/35 text-[11px] font-semibold tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}
