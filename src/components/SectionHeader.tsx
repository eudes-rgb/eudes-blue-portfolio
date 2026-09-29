export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ eyebrow, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-5">
          {subtitle}
        </p>
      )}
    </div>
  );
};
