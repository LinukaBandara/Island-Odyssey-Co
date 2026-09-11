export default function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-primary text-white pt-36 pb-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="kicker text-gold mb-4">{kicker}</p>
        <h1 className="font-display italic font-medium text-4xl sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="text-white/55 mt-4 max-w-lg font-light leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
