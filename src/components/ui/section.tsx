import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className = "", containerClassName = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 section-enter ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
