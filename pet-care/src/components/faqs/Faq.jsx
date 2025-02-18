import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import BG from "../../assets/bg-faq.jpg";
import Doctor from "../../assets/doctor2.png";
import { vetFAQs } from "../../assets/data/data";
const Faq = () => {
  return (
    <div
      className="flex flex-col w-full"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="flex flex-row w-full bg-cover bg-center h-screen items-center ">
        <div className="w-6/12 mx-auto my-11 flex gap-8 flex-col">
          <div>
            <div className="text-lg uppercase text-[#04CE78]">Faqs</div>
            <div className="text-5xl font-semibold text-white">
              Frequently Asked Have <br />
              Any Question?
            </div>
          </div>
          <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-white'>Is it accessible?</AccordionTrigger>
    <AccordionContent className='text-white'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
          {/* <div className="flex flex-col gap-4">
          {vetFAQs.map((item,index)=>(
            <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>{item?.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               {item?.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
          ))}
          
          </div> */}
        </div>
        <div className="w-5/12 h-full">
          <img
            src={Doctor}
            className="h-full w-full object-contain"
            alt="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
