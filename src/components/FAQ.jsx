// src/components/FAQ.jsx
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FAQ({ faqData }) {
  return (
    <div className="p-8 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">常见问题</h1>
      <Accordion variant="shadow" selectionMode="multiple" className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} title={faq.title}>
            <p className="text-gray-700 dark:text-gray-300">{faq.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
