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
      <div className="flex flex-row w-full bg-cover bg-center h-screen items-center ">
        <div className="w-6/12 mx-auto my-11 flex gap-8 flex-col">
          <div>
            <div className="text-lg uppercase text-[#04CE78]">Faqs</div>
            <div className="text-5xl font-semibold text-white">
              Frequently Asked Have <br />
              Any Question?
            </div>
          </div>
          {faqs?.map((item,index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">
                  {item?.question}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                {item?.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
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
