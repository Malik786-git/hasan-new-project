import Navbar from "../../components/Navbar";
import styles from "./faqs.module.css";
import FAQItem from "../../components/FAQItem";
import FooterBar from "../../components/FooterBar";

const faqs = [
  {
    id: 1,
    question: "Why Arbitrum?",
    ans: "With the product offerings we have and will release, a portion of all revenues the protocol earns will be redirected, proportionally, to investors who have staked their $EMP tokens. This means that while you are providing governance influence via deposited $ARB, you are earning revenue as a reward. The full details on this can be found in our documentation.",
  },
  {
    id: 2,
    question: "Why become a Delegate?",
    ans: "With the product offerings we have and will release, a portion of all revenues the protocol earns will be redirected, proportionally, to investors who have staked their $EMP tokens. This means that while you are providing governance influence via deposited $ARB, you are earning revenue as a reward. The full details on this can be found in our documentation.",
  },
  {
    id: 3,
    question: "Why wrapped $ARB?",
    ans: "With the product offerings we have and will release, a portion of all revenues the protocol earns will be redirected, proportionally, to investors who have staked their $EMP tokens. This means that while you are providing governance influence via deposited $ARB, you are earning revenue as a reward. The full details on this can be found in our documentation.",
  },
  {
    id: 4,
    question: "How do I earn real yield?",
    ans: "With the product offerings we have and will release, a portion of all revenues the protocol earns will be redirected, proportionally, to investors who have staked their $EMP tokens. This means that while you are providing governance influence via deposited $ARB, you are earning revenue as a reward. The full details on this can be found in our documentation.",
  },
];



const index = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.faqs_section_wrapper} pt-5`}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-8 mx-auto mt-5">
              <h1 className={`${styles.faqs_heading} text-center`}>F.A.Q</h1>
              <div  data-aos="fade-down" className={styles.faqs_section}>
                {/* faq item mapping... */}
                {faqs &&
                  faqs?.map((item) => (
                    <FAQItem key={item.id} question={item?.question} answer={item?.ans} />
                  ))}

                {/* xxxxxxxxxxxxxxx */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default index;
