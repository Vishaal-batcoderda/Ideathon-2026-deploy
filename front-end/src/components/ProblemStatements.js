import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProblemStatements() {

  /* ================= DATA ================= */

  const domains = [
  {
    id: 1,
    title: "Artificial Intelligence & Data Intelligence",
    problems: [
      {
        id: 1,
        title: "Sentiment Analysis of E-Consultation Comments",
        description: `This project focuses on developing a system that analyzes feedback comments provided by users during online consultations. Organizations often receive a large number of comments, making it difficult to manually understand overall user satisfaction and concerns. The system processes textual data and identifies the emotional tone of the feedback using Artificial Intelligence techniques. This helps organizations better understand user opinions and improve service quality.`
      },
      {
        id: 2,
        title: "AI-Based Skill Recommendation Engine",
        description: `This project aims to create a smart recommendation system that guides users in choosing relevant skills and career paths. Many students and professionals are unsure about what to learn next based on their interests and current knowledge. The system collects user inputs and analyzes them using basic machine learning or logical rules to suggest suitable skills and learning directions. This supports structured career development and better decision-making.`
      },
      {
        id: 3,
        title: "News Category Classification System",
        description: `This project focuses on building a system that automatically classifies news articles into categories such as sports, technology, politics, and entertainment. With a large volume of news content published daily, manual categorization becomes inefficient. The system uses Natural Language Processing techniques to analyze article content and assign it to appropriate categories. This improves content organization and simplifies information management.`
      },
      {
        id: 4,
        title: "Document Classification and Smart Search System",
        description: `This project aims to develop a system that organizes digital documents efficiently by automatically assigning them to predefined categories. Many institutions handle large volumes of digital files, making document retrieval difficult and time-consuming. The system analyzes document content and classifies it accordingly, enabling faster and more efficient document management.`
      }
    ]
  },

  {
    id: 2,
    title: "Multipurpose Digital Infrastructure Systems",
    problems: [
      {
        id: 5,
        title: "Unified Digital Identity and Access Management Platform",
        description: `This project focuses on developing a centralized digital identity system that allows users to access multiple services using a single login. In many organizations, users must maintain separate accounts for different systems, leading to security risks and management difficulties. The platform provides controlled access based on user roles and responsibilities, ensuring secure and organized authentication across services.`
      },
      {
        id: 6,
        title: "Smart Resource Allocation and Sharing Platform",
        description: `This project aims to build a system that efficiently manages shared resources such as classrooms, equipment, vehicles, or workspaces. Manual booking systems often result in conflicts, mismanagement, and underutilization of resources. The platform helps track availability, allocate resources systematically, and maintain proper usage records to improve overall efficiency.`
      },
      {
        id: 7,
        title: "Multi-Service Request Management System",
        description: `This project focuses on developing a centralized platform where users can submit and manage various service requests such as IT support, maintenance, or administrative assistance. Traditional request handling methods often lack proper tracking and coordination. The system organizes service requests in a structured manner, ensuring better management and smoother resolution processes.`
      },
      {
        id: 8,
        title: "Fake Review and Spam Detection System",
        description: `This project aims to develop a system that identifies fake reviews and spam content in online platforms. Misleading or non-genuine reviews can negatively impact user trust and business credibility. The system analyzes textual data using Artificial Intelligence techniques to detect suspicious patterns and improve content reliability.`
      }
    ]
  },

  {
    id: 3,
    title: "Agriculture, FoodTech and Rural Development",
    problems: [
      {
        id: 9,
        title: "Supply Chain Traceability Platform",
        description: `This system tracks the complete journey of agricultural and food products from the farm to the final consumer. It records data at each stage, including storage, transportation, processing, and market distribution, ensuring transparency and accountability. By providing detailed tracking information, the platform helps verify product origin, monitor quality standards, and enhance food safety. This improves consumer trust and reduces the risk of contamination or fraud in the supply chain.`
      },
      {
        id: 10,
        title: "Demand and Supply Matching System",
        description: `This platform connects farmers and suppliers directly with buyers by matching real-time demand and supply data. It considers factors such as location, availability, quantity, and pricing to recommend suitable matches. By reducing intermediaries and improving coordination, the system helps minimize wastage, stabilize market prices, and increase farmers’ income while ensuring timely delivery of produce.`
      },
      {
        id: 11,
        title: "Smart Storage Monitoring and Loss Prevention System",
        description: `This system monitors environmental conditions such as temperature and humidity inside storage facilities to prevent spoilage and loss of agricultural products. Using sensor data and predictive analysis, it identifies potential risks and generates alerts when abnormal conditions occur. This helps reduce post-harvest losses and improve overall storage efficiency.`
      },
      {
        id: 12,
        title: "Digital Marketplace Analytics Dashboard",
        description: `This system analyzes sales data, pricing trends, and customer demand patterns from digital marketplaces. It provides meaningful insights that help sellers and administrators understand market performance and improve planning, inventory management, and pricing strategies.`
      }
    ]
  },

  {
    id: 4,
    title: "Digital Platforms and Social Innovation",
    problems: [
      {
        id: 13,
        title: "Community Collaboration Platform",
        description: `This platform provides a centralized digital space for communities and organizations to coordinate events, manage tasks, share information, and communicate effectively. It enhances participation and supports organized collaboration for social initiatives.`
      },
      {
        id: 14,
        title: "Trust and Reputation Management System",
        description: `This system evaluates user behavior, feedback, and participation to generate credibility and trust scores. By analyzing past activities and peer reviews, it promotes ethical behavior, reduces fraudulent activities, and builds confidence in digital interactions.`
      },
      {
        id: 15,
        title: "Knowledge Sharing and Mentorship Platform",
        description: `This platform connects mentors and learners to facilitate knowledge sharing, skill development, and career guidance. It enables structured interactions through profile matching and session management, supporting continuous learning and professional growth.`
      },
      {
        id: 16,
        title: "Digital Inclusion and Accessibility Assistant",
        description: `This system improves digital accessibility for differently-abled and elderly users by offering assistive features such as voice interaction, text-to-speech conversion, and simplified navigation. It promotes inclusive access to digital services and supports digital empowerment for all users.`
      }
    ]
  },

  {
    id: 5,
    title: "Industry & Business Solutions",
    problems: [
      {
        id: 17,
        title: "Workflow Automation & Process Optimization System",
        description: `Organizations across industries handle numerous internal processes such as approvals, employee requests, document verification, reporting, and task coordination. In many cases, these workflows are managed manually through emails, spreadsheets, or paper-based systems. This leads to delays, miscommunication, duplication of work, and lack of transparency.
Participants are challenged to design an intelligent workflow automation system that digitizes and
streamlines organizational processes. The solution should allow task creation, automated
assignment based on predefined rules, status tracking, and real-time notifications. The system may
include analytics to identify bottlenecks and improve process efficiency. Artificial Intelligence or
rule-based optimization techniques can be used to enhance task prioritization and workflow
management. The goal is to increase productivity, reduce operational delays, and ensure smooth
coordination across departments.`
      },
      {
        id: 18,
        title: "Predictive Maintenance Management Platform",
        description: `This project aims to build an intelligent maintenance management system that predicts equipment failures before they occur. Industries often face unexpected machine breakdowns that cause production delays and financial loss. The system collects data such as machine usage, temperature, vibration levels, and maintenance history. Using Artificial Intelligence and data analysis techniques, it predicts possible faults and sends early alerts. It can also schedule maintenance automatically based on risk levels. This helps reduce downtime, extend equipment lifespan, and optimize maintenance costs.`
      },
      {
        id: 19,
        title: "Business Intelligence Decision Support Dashboard",
        description: `This project focuses on creating a centralized dashboard that helps organizations make data-driven decisions. Businesses generate large amounts of data from sales, finance, marketing, and operations, but analyzing it manually is difficult. The system collects and integrates data from multiple sources and presents it using charts, graphs, and performance indicators. It tracks key metrics such as revenue, expenses, growth trends, and productivity. Advanced analytics can provide predictive insights for better planning. This helps managers understand business performance quickly and make informed strategic decisions.`
      },
      {
        id: 20,
        title: "Customer Behavior & Retention Prediction System",
        description: `This project aims to develop a system that analyzes customer behavior and predicts the likelihood of customers leaving a service or product (customer churn). Many businesses struggle to retain customers due to lack of behavioral insights. The system studies purchase history, usage patterns, feedback, and engagement data. Using machine learning techniques, it identifies customers who are at risk of leaving and suggests personalized offers or engagement strategies. The results are displayed in a dashboard with customer segmentation and risk scores. This helps organizations improve customer satisfaction, increase retention, and boost long-term profitability.`
      }
    ]
  }
];

  /* ================= STATES ================= */

  const [activeDomain, setActiveDomain] = useState(null);
  const [activeProblem, setActiveProblem] = useState(null);

  /* ================= SCROLL LOCK ================= */

  useEffect(() => {
    document.body.style.overflow =
      activeProblem ? "hidden" : "auto";
  }, [activeProblem]);

  /* ================= UI ================= */

  return (
    <section id="problems" className="py-32 bg-white">

      <h2 className="text-5xl font-bold text-center mb-20">
        Problem Statements
      </h2>

      <div className="max-w-6xl mx-auto px-6 space-y-6">

        {domains.map(domain => (

          <div
            key={domain.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border"
          >

            {/* ===== DOMAIN HEADER ===== */}
            <div
              onClick={() =>
                setActiveDomain(
                  activeDomain === domain.id
                    ? null
                    : domain.id
                )
              }
              className="
              cursor-pointer
              p-6
              flex justify-between items-center
              hover:bg-indigo-50
              transition"
            >
              <h3 className="text-xl font-semibold">
                Domain {domain.id} — {domain.title}
              </h3>

              <span className="text-2xl">
                {activeDomain === domain.id ? "−" : "+"}
              </span>
            </div>


            {/* ===== PROBLEM LIST ===== */}
            <motion.div
              initial={false}
              animate={{
                height:
                  activeDomain === domain.id
                    ? "auto"
                    : 0
              }}
              className="overflow-hidden"
            >
              <div className="p-6 space-y-4">

                {domain.problems.map(problem => (

                  <motion.div
                    key={problem.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() =>
                      setActiveProblem(problem)
                    }
                    className="
                    p-5
                    rounded-xl
                    bg-gray-100
                    cursor-pointer
                    hover:bg-indigo-100
                    transition"
                  >
                    {problem.id}. {problem.title}
                  </motion.div>

                ))}

              </div>
            </motion.div>

          </div>

        ))}

      </div>


      {/* ================= MODAL ================= */}

      <AnimatePresence>

        {activeProblem && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed inset-0
            bg-black/50
            backdrop-blur-sm
            flex items-center justify-center
            z-50
            px-6"
          >

            {/* MODAL BOX */}
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
              bg-white
              max-w-3xl
              w-full
              max-h-[85vh]
              overflow-y-auto
              rounded-2xl
              p-8
              shadow-2xl
              relative"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveProblem(null)}
                className="
                absolute top-4 right-5
                text-2xl font-bold
                hover:text-red-500"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-6">
                {activeProblem.title}
              </h2>

              <p className="
              text-gray-700
              leading-relaxed
              whitespace-pre-line">
                {activeProblem.description}
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}