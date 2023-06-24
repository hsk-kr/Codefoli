import React, {SetStateAction, useEffect, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "Components/Footer/Footer.tsx";
import SkillServiceCards from "./ServiceCards/SkillServiceCards.tsx";
import { useSpring, animated } from "react-spring";
import HomeData from "Type/HomeData.tsx";
import UserData from "Type/UserData.tsx";
import {updateDescriptionOne, updateHeaderOne} from "./dashboardapi.tsx";

const Dashboard: React.FC<{
  pageData: HomeData;
  setPageData: React.Dispatch<SetStateAction<HomeData>>;
  userData: UserData;
}> = ({ pageData, userData, setPageData }) => {
  const navigate = useNavigate();
  const [headerOneEdit, setHeaderOneEdit] = useState(false);
  const [headerOneEditValue, setHeaderOneEditValue] = useState(pageData.headerOne);
  const [descriptionOneEdit, setDescriptionOneEdit] = useState(false);
  const [descriptionOneEditValue, setDescriptionOneEditValue] = useState(pageData.descriptionOne);

  const [animationProps, setAnimation] = useSpring(() => ({
    opacity: 0,
    transform: "translate3d(0, -20px, 0)",
  }));

  useEffect(() => {
    if (!localStorage.getItem("role")) {
      navigate("/");
    } else if (localStorage.getItem("role") === "NEWBIE") {
      navigate("/setup");
    }

    setAnimation.start({ opacity: 1, transform: "translate3d(0, 0px, 0)" });
  }, [navigate, setAnimation]);

  const headerOneTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const descriptionOneTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (headerOneEdit && headerOneTextareaRef.current) {
      headerOneTextareaRef.current.style.height = "auto";
      headerOneTextareaRef.current.style.height = `${headerOneTextareaRef.current.scrollHeight}px`;
    }
  }, [headerOneEdit, headerOneEditValue]);

  useEffect(() => {
    if (descriptionOneEdit && descriptionOneTextareaRef.current) {
      descriptionOneTextareaRef.current.style.height = "auto";
      descriptionOneTextareaRef.current.style.height = `${descriptionOneTextareaRef.current.scrollHeight}px`;
    }
  }, [descriptionOneEdit, descriptionOneEditValue]);

  const handleHeaderOneSubmit = async () => {
    //if enter button clicked
    const updateHeader = await updateHeaderOne(headerOneEditValue);
    if (updateHeader) {
      setPageData((prev) => ({ ...prev, headerOne: headerOneEditValue }));
      setHeaderOneEditValue(updateHeader);
    }
    setHeaderOneEdit(false);
  }

  const handleDescriptionOneSubmit = async () => {
    const updateDescription = await updateDescriptionOne(descriptionOneEditValue);
    if (updateDescription) {
      setPageData((prev) => ({ ...prev, descriptionOne: descriptionOneEditValue }));
      setDescriptionOneEditValue(updateDescription);
    }
    setHeaderOneEdit(false);
  }

  return (
    <>
      <animated.div style={animationProps}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row xl:mx-auto xl:justify-center">
            <div>
              <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center font-bold xl:mt-32">
                {headerOneEdit ? (
                    <textarea
                        ref={headerOneTextareaRef}
                        value={headerOneEditValue}
                        onChange={(e) => setHeaderOneEditValue(e.target.value)}

                        onBlur={() => {
                          setHeaderOneEditValue(pageData.headerOne);
                          setHeaderOneEdit(false);
                        }}
                        onKeyDown={async (e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            await handleHeaderOneSubmit();
                          }
                        }}
                        className="font-extra-bold focus:ring-0 max-w-[15ch] text-center text-4xl leading-snug md:text-5xl md:leading-relaxed xl:text-left xl:text-6xl xl:leading-normal appearance-none border-none outline-none bg-transparent resize-none overflow-hidden focus:outline-none"
                        autoFocus
                    />
                ) : (
                    <h1
                        className="cursor-pointer select-none font-extra-bold max-w-[15ch] text-center text-4xl leading-snug md:text-5xl md:leading-relaxed xl:text-left xl:text-6xl xl:leading-normal"
                        onDoubleClick={() => setHeaderOneEdit(true)}
                    >
                      {pageData.headerOne}
                    </h1>
                )}
                {descriptionOneEdit ? (
                    <textarea
                        ref={descriptionOneTextareaRef}
                        value={descriptionOneEditValue}
                        onChange={(e) => setDescriptionOneEditValue(e.target.value)}
                        onBlur={() => {
                          setDescriptionOneEditValue(pageData.descriptionOne);
                          setDescriptionOneEdit(false);
                        }}
                        onKeyDown={async (e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            await handleDescriptionOneSubmit();
                            setDescriptionOneEdit(false);
                          }
                        }}
                        className="max-w-[35ch] text-base focus:ring-0 text-center opacity-60 xl:max-w-[50ch] xl:text-left appearance-none border-none outline-none bg-transparent resize-none overflow-hidden focus:outline-none p-0"
                        autoFocus
                        maxLength={250}
                    />
                ) : (
                    <p
                        className="select-none cursor-pointer max-w-[35ch] text-base text-center opacity-60 xl:max-w-[50ch] xl:text-left"
                        onDoubleClick={() => setDescriptionOneEdit(true)}
                    >
                      {pageData.descriptionOne}
                    </p>
                )}


              </div>
              <div className="mx-auto mt-5 flex justify-center xl:justify-start">
                <Link
                  to="/contact"
                  className="mr-4 rounded-xl border-2 border-black bg-black px-6 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-500"
                >
                  Get in touch
                </Link>
                <Link
                  to="/portfolio"
                  className="rounded-xl border-2 border-black px-6 py-4 font-bold transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-10 lg:mx-0 xl:ml-20 xl:mt-32">
              <img
                className="rounded-3xl shadow-customHover"
                src={pageData.profileImage}
                alt="pfp"
              ></img>
            </div>
          </div>
          <div className="mb-10 mt-32 flex flex-col items-center text-2xl font-bold ">
            <p className="mb-10 leading-relaxed">{pageData.headerTwo}</p>
            <SkillServiceCards
              services={userData.services}
              userData={userData}
            />
          </div>
        </div>
      </animated.div>
      <Footer />
    </>
  );
};
export default Dashboard;
