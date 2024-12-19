"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const privacyData = {
    keyInformation: [
      "We collect personal information when you interact with us or use our services.",
      "We use your information to provide and improve our services, communicate with you, and comply with legal obligations.",
      "We may share your information with trusted partners and service providers.",
      "You have rights regarding your personal information, including access and deletion.",
    ],
    sections: [
      {
        title: "Who we are",
        content: "National Biomedical Suppliers is a company located at Tripura Marga, Tripureshwor, Kathmandu, Nepal. We specialize in providing biomedical supplies and equipment.",
      },
      {
        title: "Information we collect",
        content: [
          "Contact information (name, address, email, phone number)",
          "Account information (username, password)",
          "Transaction data (purchase history, payment information)",
          "Technical data (IP address, browser type, device information)",
          "Usage data (how you interact with our website and services)",
        ],
      },
      {
        title: "How we use your information",
        content: [
          "To provide and manage our products and services",
          "To process transactions and fulfill orders",
          "To communicate with you about our products, services, and promotions",
          "To improve our website and services",
          "To comply with legal obligations",
          "To detect and prevent fraud",
        ],
      },
      {
        title: "How we share your information",
        content: [
          "Service providers who help us operate our business",
          "Payment processors to handle transactions",
          "Shipping companies to deliver products",
          "Legal authorities when required by law",
          "We do not sell your personal information to third parties.",
        ],
      },
      {
        title: "Your rights",
        content: [
          "Access your personal information",
          "Correct inaccurate information",
          "Request deletion of your information",
          "Object to certain processing of your information",
          "Withdraw consent where applicable",
        ],
        additionalInfo: "To exercise these rights, please contact us using the information provided below.",
      },
      {
        title: "Data security",
        content: "We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.",
      },
      {
        title: "Changes to this privacy notice",
        content: "We may update this privacy notice from time to time. We will notify you of any significant changes by posting the new privacy notice on our website or by other means of communication.",
      },
      {
        title: "Contact us",
        content: (
          <p>
            If you have any questions about this privacy notice or our privacy practices, please contact us at:
            <br />
            National Biomedical Suppliers
            <br />
            Tripura Marga, Tripureshwor
            <br />
            Kathmandu, Nepal
            <br />
            Email: privacy@nationalbiomedical.com
            <br />
            Phone: +977 1 234 5678
          </p>
        ),
      },
    ],
  }

  return (
    <div className="container max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6" data-aos="fade-up">Privacy Notice</h1>
      <p className="mb-6" data-aos="fade-up">
        This Privacy Notice explains how National Biomedical Suppliers ("we", "us", "our") collects, uses, and protects your personal information.
      </p>

      <div className="mb-6" data-aos="fade-up">
        <h2 className="text-xl font-semibold">Key Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          {privacyData.keyInformation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {privacyData.sections.map((section, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} data-aos="fade-up">
            <AccordionTrigger>{section.title}</AccordionTrigger>
            <AccordionContent>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-6 space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
              {section.additionalInfo && <p className="mt-2">{section.additionalInfo}</p>}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
