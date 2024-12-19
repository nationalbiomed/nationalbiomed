
 const termsOfUseData = {
    title: "Terms of Use",
    acceptanceOfTerms: {
      title: "Acceptance of Terms",
      content: `By accessing this Website, you acknowledge that you have read, understood and agreed to the following terms. In case you do not understand or agree to any of the terms, you should immediately exit this Website. National Biomedical Suppliers and/or its affiliates (collectively "National Biomedical Suppliers") reserves the right to update the TERMS OF USE ("TOU") at any time without notice to you. In the case of any violation against the provisions of the TOU, National Biomedical Suppliers shall have the right to seek legal and fair remedies. Where the English and other language versions of these Terms conflict, the English version controls.`,
    },
    disclaimer: {
      title: "1. Disclaimer",
      content: `This site and the content available through it are provided on an "as is" and "as available" basis. All texts, drawings, pictures, designs, data, opinions, suggestions, web pages or links, etc., ("materials and information") are for reference only. National Biomedical Suppliers gives no warranty or guarantee of the accuracy, completeness, sufficiency, timeliness or reliability of the materials and information on the Website, and National Biomedical Suppliers is not liable for any error, mistake or omission found therein. Furthermore, any reliance by you on the materials and information on this Website shall be at your own risk; National Biomedical Suppliers shall not be held liable. National Biomedical Suppliers reserves the right to revise, update and delete the materials and information on this Website at any time without prior notice.`,
    },
    yourUseOfThisWebsite: {
      title: "2. Your Use of this Website",
      content: `You shall not use this Website and/or the Website Content for any purpose that is illegal or forbidden by the TOU, in connection with any illegal purposes, or to solicit the performance of any illegal activity or activities that infringe on the rights of National Biomedical Suppliers or any third party.
  
  You shall not gain unauthorized access to any portion of this Website, or to any of the services offered on or through the Website, or to any other systems or networks connected to any National Biomedical Suppliers server.
  
  When using this Website and its content, you agree to comply with applicable laws and obey social ethics. You shall not use this Website and its content to produce, read, copy, or disseminate any information that is illegal, to infringe on any other person's rights, or to disturb the social order and undermine social stability. You shall not use this Website and its content to engage in any activity that endangers cyber security and any computer system.`,
    },
    copyrightAndTrademarks: {
      title: "3. Copyright & Trademark Statements",
      content: `National Biomedical Suppliers owns the copyright to this site and all of its content, including but not limited to text, design, pictures, graphics, interfaces and code, documents and the selection and arrangement thereof, which are protected as compilations under the copyright laws of Nepal and other countries. Without prior written consent of National Biomedical Suppliers, no part or whole of any materials and information on the Website may be copied, reproduced, adapted, translated, released, distributed, photocopied, played, linked or transmitted with super-links, stored in any information retrieval system or used for any commercial purpose, including in any derivative work.`,
    },
    statementsConcerningProducts: {
      title: "4. Statements Concerning the Products or Services to be Provided",
      content: `The materials and information provided via this Website are distributed internationally, but not all the products or services found on this Website are necessarily available in your country or area. Please contact local sales representatives or agents to make sure of the availability of the relevant products or services.`,
    },
    privacy: {
      title: "5. Privacy",
      content: `You acknowledge and agree that National Biomedical Suppliers may use the data collected in the course of our relationship for the purposes identified in our Privacy Policy, which is incorporated by reference as if fully set forth in these Terms of Use. If you wish to have access to information we hold concerning you, or if you want to make any changes, or if you do not want to receive information from National Biomedical Suppliers please follow the update procedure set forth in our Privacy Policy.`,
    },
    limitationOfLiability: {
      title: "6. Limitation of Liability",
      content: `Neither National Biomedical Suppliers nor any of its affiliates, subsidiaries, directors, agents, employees, or other representatives shall be liable for any direct, indirect, special, incidental, consequential, punitive, and/or exemplary damages including without limitation, loss of profits or revenues, loss of data, and/or loss of business, in connection with this Website or the use of or inability to use this Website or reliance on the contents contained herein, even if National Biomedical Suppliers is advised of the possibility of such damages. Unless otherwise agreed in writing by National Biomedical Suppliers in any sales contract, to the extent permitted by the applicable law, National Biomedical Suppliers shall not be liable for the materials of this Website, regardless of the reason for the liability or the tort theory it is based on.`,
    },
    applicableLawAndDisputeResolution: {
      title: "7. Applicable Law and Dispute Resolution",
      content: `You agree that your access and all related activities on or through this Website shall be governed by, construed, and interpreted in accordance with the laws of Nepal. You agree that any dispute between the parties arising out of or in connection with this TOU or your access and all related activities on or through this Website shall be governed by a court with jurisdiction in Kathmandu, Nepal.`,
    },
  };
  

export default function TermsOfUse()  {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6" data-aos="fade-up">
        {termsOfUseData.title}
      </h1>
      <div className="space-y-8">
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">
            {termsOfUseData.acceptanceOfTerms.title}
          </h2>
          <p className="text-justify"> {termsOfUseData.acceptanceOfTerms.content}</p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">{termsOfUseData.disclaimer.title}</h2>
          <p className="text-justify"> {termsOfUseData.disclaimer.content}</p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">{termsOfUseData.yourUseOfThisWebsite.title}</h2>
          <p className="text-justify"> {termsOfUseData.yourUseOfThisWebsite.content}</p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">{termsOfUseData.copyrightAndTrademarks.title}</h2>
          <p className="text-justify"> {termsOfUseData.copyrightAndTrademarks.content}</p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">{termsOfUseData.statementsConcerningProducts.title}</h2>
          <p className="text-justify"> {termsOfUseData.statementsConcerningProducts.content}</p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">{termsOfUseData.privacy.title}</h2>
          <p className="text-justify"> {termsOfUseData.privacy.content}</p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">{termsOfUseData.limitationOfLiability.title}</h2>
          <p className="text-justify"> {termsOfUseData.limitationOfLiability.content}</p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold">{termsOfUseData.applicableLawAndDisputeResolution.title}</h2>
          <p className="text-justify"> {termsOfUseData.applicableLawAndDisputeResolution.content}</p>
        </section>
      </div>
    </div>
  );
};

