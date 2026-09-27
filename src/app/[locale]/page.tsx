import {setRequestLocale} from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import Services from '@/components/home/Services';
import Workflow from '@/components/home/Workflow';
import Projects from '@/components/home/Projects';
import Quote from '@/components/home/Quote';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Highlights />
      <Services />
      <Workflow />
      <Projects />
      <Quote />
    </div>
  );
}
