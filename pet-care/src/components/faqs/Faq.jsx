import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import BG from "../../assets/bg-faq.jpg";
import Doctor from "../../assets/doctor2.png";
import { vetFAQs } from "../../assets/data/data";
import useGet from "@/customHooks/useGet";
const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageError, setPageError] = useState(null);
  const URL=import.meta.env.VITE_BACKEND_URL
  const { data, loading, error } = useGet(`${URL}/user/get-faq`);
  console.log(data,'line 19')
  useEffect(() => {
    if (data) {
      setFaqs(data?.foundFaq);
      setPageLoading(false)
    }
    if(loading){
      setPageLoading(true)
    }
    if(error){
       setPageError(error)
    }
  }, [data]);
  console.log(faqs,'line 22')
  return (
    <div
      className="flex flex-col w-full"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="flex flex-row w-11/12 mx-auto my-2 lg:gap-6 bg-cover bg-center h-full md:h-screen lg:h-screen items-center ">
        <div className="w-11/12 mx-auto my-8 md:my-7 lg:my-11 flex gap-4 md:gap-8 flex-col md:w-11/12 lg:w-7/12 lg:gap-8">
          <div>
            <div className="text-sm md:text-lg lg:text-lg uppercase text-[#04CE78]">Faqs</div>
            <div className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
              Frequently Asked Have <br />
              Any Question?
            </div>
          </div>
          {faqs?.map((item,index) => (
            <Accordion type="single" className='text-start'collapsible key={index}>
              <AccordionItem className='text-start'value="item-1">
                <AccordionTrigger className="text-white text-sm md:text-lg lg:text-lg hover:no-underline">
                  <div className="w-full text-start">{item?.question}</div>
                </AccordionTrigger>
                <AccordionContent className="text-white text-sm md:text-lg lg:text-lg">
                <div className="w-full text-start">{item?.answer}</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="hidden md:flex lg:flex w-5/12 h-full">
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
