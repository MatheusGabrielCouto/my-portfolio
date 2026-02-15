"use client";

import { AnimatedSection } from "../AnimatedSection";

type Stat = { value: string; label: string };

type StatsSectionProps = {
  stats: Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="border-y border-(--border) bg-(--card-bg) py-14">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={`stat-${index}-${stat.value}`} className="text-center">
              <span className="block font-mono text-3xl font-semibold text-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-sm text-(--muted)">{stat.label}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
