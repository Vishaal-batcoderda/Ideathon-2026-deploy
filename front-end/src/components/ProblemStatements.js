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
        description: `Organizations conducting online consultations receive a large volume of user feedback in the form of textual comments. Manually analysing this feedback to understand user satisfaction, concerns, and service quality is time-consuming and inefficient.

        Participants are challenged to design an intelligent solution that can automatically analyse consultation feedback, identify sentiment patterns (positive, negative, neutral), and generate meaningful insights to support data-driven decision-making. The proposed solution may use natural language processing, machine learning, or other innovative approaches to improve feedback analysis and service enhancement.
`
      },
      {
        id: 2,
        title: "AI-Based Skill Recommendation Engine",
        description: `Many students and professionals are faced with the challenge of determining the right skills to learn or career lines to take depending on their interests, academic history and the existing skills. Lack of a systematic orientation often leads to confusion, skills and poor career planning. 
        
        The participants will be expected to develop a smart recommendation engine that will examine user data including areas of interest, qualification, experience, and professional desires and propose pertinent skills and learning paths. It can be a solution with the help of artificial intelligence, machine learning, or rule-based solutions to provide personalized and data-driven career advice.`
      },
      {
        id: 3,
        title: "News Category Classification System",
        description: `With the rapid growth of digital media, thousands of news articles are published daily across multiple platforms. Manually organizing this content into categories such as sports, technology, politics, and entertainment is time-consuming and inefficient.

        Participants are challenged to develop an intelligent solution that can automatically analyse news content and classify it into appropriate categories. The proposed system may utilize natural language processing, machine learning, or other innovative techniques to improve content organization and information management.
`
      },
      {
        id: 4,
        title: "Document Classification and Smart Search System",
        description: `Organizations and institutions often manage large volumes of digital documents such as reports, forms, policies, and research files. Manually organizing and retrieving these documents can be difficult, time-consuming, and prone to errors, especially when the number of files grows over time. Participants are challenged to design a system that can automatically analyse document content and classify files into appropriate categories for efficient organization and retrieval. 
        
        The proposed solution may also support intelligent search capabilities that allow users to quickly locate relevant documents based on keywords, topics, or document metadata. The system may utilize natural language processing, machine learning, or rule-based techniques to improve document classification, indexing, and search efficiency, enabling faster and more reliable document management.`
      }
    ]
  },

  {
  id: 2,
  title: "Multipurpose Digital Infrastructure Systems",
  problems: [
    {
      id: 1,
      title: "Unified Digital Identity and Access Management Platform",
      description: `In modern digital environments, users often need to access multiple applications and services, each requiring separate login credentials. Managing multiple accounts can create security risks, increase password fatigue, and make access control difficult for organizations. Organizations also face difficulties in maintaining user roles, permissions, and security policies across different platforms.

Participants are expected to design a unified digital identity and access management system that enables users to securely authenticate once and access multiple services using a single identity. The solution should include features such as role-based access control, permission management, secure authentication mechanisms, and activity logging. The platform may utilize encryption, authentication protocols, and secure database management to ensure data protection and smooth user experience.`
    },
    {
      id: 2,
      title: "Smart Resource Allocation and Sharing Platform",
      description: `Institutions and organizations often manage shared resources such as classrooms, laboratories, equipment, vehicles, and workspaces. Manual scheduling and tracking often lead to conflicts, poor utilization of resources, and operational inefficiencies.

Participants are expected to develop a smart resource allocation and sharing platform that efficiently manages bookings, tracks real-time availability, and records usage history. The system should optimize resource utilization, prevent scheduling conflicts, and provide analytics for decision-making. The solution may include dashboards, booking interfaces, and automated allocation logic to ensure fair and effective distribution of shared resources.`
    },
    {
      id: 3,
      title: "Multi-Service Request Management System",
      description: `Organizations handle various service requests such as IT support, maintenance issues, administrative assistance, and infrastructure-related problems. Traditional request handling methods are often slow, fragmented, and lack transparency, leading to delays and dissatisfaction among users.

Participants are challenged to build a centralized multi-service request management system where users can easily raise requests, track their status, and receive timely updates. The platform should include features such as request categorization, priority setting, admin dashboards, task assignment, and resolution tracking. The solution should enhance service efficiency, accountability, and user satisfaction through streamlined digital workflows.`
    },
    {
      id: 4,
      title: "Fake Review and Spam Detection System",
      description: `Online platforms frequently suffer from fake reviews, spam messages, and bot-generated content, which mislead users and reduce trust. Identifying genuine feedback from fake or spam content is difficult when large volumes of data are involved.

Participants are expected to design an intelligent system that automatically detects fake reviews, spam, and suspicious activities using machine learning, natural language processing, or rule-based techniques. The system should classify content as genuine or suspicious and generate reliability scores. The platform should help organizations maintain content authenticity, enhance trust, and improve decision-making based on accurate user feedback.`
    }
  ]
},

{
  id: 3,
  title: "Agriculture, FoodTech and Rural Development",
  problems: [
    {
      id: 1,
      title: "Supply Chain Traceability Platform",
      description: `In agricultural and food supply chains, lack of transparency often leads to quality issues, food safety risks, and reduced consumer trust. Tracking products from farm to consumer is complex due to multiple intermediaries and logistics stages.

Participants are challenged to design a supply chain traceability platform that records and monitors each stage of a product’s journey, including production, storage, transportation, processing, and distribution. The system should provide transparent traceability data, quality monitoring, and real-time tracking. The solution should enhance food safety, accountability, and consumer confidence using digital records and analytics.`
    },
    {
      id: 2,
      title: "Demand and Supply Matching System",
      description: `Farmers and producers often face challenges in predicting market demand, while consumers struggle to find suitable suppliers. This mismatch often leads to wastage, price fluctuations, and inefficient distribution.

Participants are expected to develop a demand and supply matching platform that dynamically connects suppliers and consumers based on availability, demand patterns, and geographical location. The system should suggest optimal matches, display analytics, and improve logistics planning. The platform should promote efficient distribution, fair pricing, and reduced wastage using data-driven insights.`
    },
    {
      id: 3,
      title: "Smart Storage Monitoring and Loss Prevention System",
      description: `Agricultural produce and food items are highly sensitive to environmental conditions such as temperature, humidity, and storage duration. Poor storage management leads to spoilage, quality degradation, and financial losses.

Participants are challenged to build a smart storage monitoring system that continuously tracks environmental conditions and predicts potential risks using sensor data and predictive analytics. The platform should generate alerts, provide preventive recommendations, and help minimize losses. The solution should enhance storage efficiency, product quality, and sustainability in food management.`
    },
    {
      id: 4,
      title: "Digital Marketplace Analytics Dashboard",
      description: `Digital agricultural marketplaces generate large volumes of data related to sales, pricing, demand, and customer behavior. However, lack of proper analytics tools makes it difficult for stakeholders to gain useful insights.

Participants are expected to design an analytics dashboard that visualizes marketplace data through charts, graphs, and reports. The system should provide insights into sales trends, pricing fluctuations, and consumer demand patterns. The platform should support informed decision-making, business planning, and performance optimization using interactive data visualization tools.`
    }
  ]
},

{
  id: 4,
  title: "Digital Platforms and Social Innovation",
  problems: [
    {
      id: 1,
      title: "Community Collaboration Platform",
      description: `Communities, non-profit organizations, and social groups often struggle to coordinate activities, events, and initiatives efficiently. Communication gaps and lack of centralized planning tools result in reduced engagement and operational challenges.

Participants are challenged to build a community collaboration platform that enables users to organize events, manage tasks, share updates, and communicate effectively. The system should include tools for messaging, scheduling, task tracking, and event management. The platform should promote teamwork, transparency, and social engagement through digital collaboration.`
    },
    {
      id: 2,
      title: "Trust and Reputation Management System",
      description: `In digital ecosystems, establishing trust among users is crucial. Without proper credibility mechanisms, digital platforms may face fraud, misinformation, and reduced user participation.

Participants are expected to design a trust and reputation management system that assigns credibility scores based on verified activities, feedback, and user participation. The platform should maintain reputation histories, display trust ratings, and promote accountability. The solution should enhance transparency, reliability, and confidence in digital interactions.`
    },
    {
      id: 3,
      title: "Knowledge Sharing and Mentorship Platform",
      description: `Students and professionals often lack access to experienced mentors and structured knowledge-sharing platforms. This results in limited career guidance, skill development, and professional growth.

Participants are challenged to build a knowledge sharing and mentorship platform that connects mentors and learners across multiple domains. The system should support profile creation, intelligent matching, session scheduling, communication tools, and feedback tracking. The platform should foster learning, guidance, and community-driven knowledge exchange.`
    },
    {
      id: 4,
      title: "Digital Inclusion and Accessibility Assistant",
      description: `Differently-abled individuals face significant challenges while interacting with digital platforms due to complex interfaces and lack of assistive technologies. This limits their access to essential digital services.

Participants are expected to design a digital inclusion and accessibility assistant that enhances usability through voice interaction, simplified navigation, adaptive interfaces, and assistive tools. The platform should ensure inclusive digital access, user-friendly design, and improved digital participation for all users, promoting equality and social inclusion.`
    }
  ]
},

  {
  id: 5,
  title: "Industry & Business Solutions",
  problems: [
    {
      id: 1,
      title: "Workflow Automation & Process Optimization System",
      description: `In many organizations, daily operational activities such as document approvals, employee requests, internal communications, and reporting tasks are still handled through manual methods like email chains, spreadsheets, or paper-based workflows. These traditional approaches often lead to delays, lack of visibility, repeated work, and difficulty in tracking task progress across departments.

Participants are expected to design a workflow automation system that helps organizations digitize and manage their internal processes efficiently. The proposed solution should allow users to create tasks, define approval hierarchies, assign responsibilities, and track the status of each workflow step in real time. The platform may also include notification systems, activity logs, and simple analytics that help administrators identify delays or bottlenecks in processes.

The objective of this system is to simplify operational workflows, improve transparency between teams, reduce manual effort, and enhance overall organizational productivity through structured digital process management.`
    },
    {
      id: 2,
      title: "Predictive Maintenance Management Platform",
      description: `Many industries rely heavily on machines and technical equipment for daily operations. Unexpected equipment failures can interrupt production, increase maintenance expenses, and sometimes create safety concerns. Traditional maintenance approaches often involve fixing machines only after failure occurs or performing maintenance at fixed intervals without understanding the actual condition of the equipment.

Participants are challenged to develop a predictive maintenance platform that continuously monitors machine performance and helps organizations anticipate potential failures before they happen. The system should collect operational information such as machine usage patterns, temperature readings, vibration levels, and past maintenance records.

Using data analysis techniques, the platform should identify abnormal patterns that indicate possible equipment issues and provide early alerts to maintenance teams. The system may also recommend maintenance schedules based on equipment condition rather than fixed time intervals. Such a solution can help industries reduce downtime, extend equipment lifespan, and manage maintenance operations more efficiently.`
    },
    {
      id: 3,
      title: "Business Intelligence Decision Support Dashboard",
      description: `Modern organizations generate large amounts of data through their daily business activities, including sales transactions, marketing campaigns, operational reports, and financial records. Although this information is valuable, many organizations find it difficult to convert raw data into meaningful insights that support effective decision-making.

Participants are expected to design a Business Intelligence dashboard that collects and organizes data from multiple business functions into a single visual platform. The system should present key performance indicators, performance trends, and operational summaries through interactive charts, graphs, and reports.

The dashboard should enable managers and decision-makers to quickly understand business performance, monitor growth patterns, and identify areas that require improvement. Advanced implementations may include forecasting tools that help organizations anticipate future trends based on historical data. The overall objective is to support data-driven decision-making and strategic planning through clear and accessible visual analytics.`
    },
    {
      id: 4,
      title: "Customer Behavior & Retention Prediction System",
      description: `Customer retention is one of the most important factors for long-term business success. In competitive markets, organizations often struggle to understand why customers stop using their products or services. Without proper analysis, companies may lose valuable customers without recognizing the warning signs early.

Participants are challenged to develop a customer behavior analysis system that helps businesses understand customer engagement patterns and predict potential customer churn. The system should analyze various types of data such as purchase history, service usage patterns, interaction frequency, and customer feedback.

Based on this analysis, the platform should identify customers who may be at risk of leaving and provide insights that help organizations take preventive actions. The system may include dashboards that display customer segments, loyalty indicators, and risk scores for individual customers. The goal is to help organizations strengthen customer relationships, improve satisfaction, and develop effective retention strategies through better understanding of customer behavior.`
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
    <section id="problems" className="py-30 bg-white mb-12">

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
whitespace-pre-line
text-justify
text-[15.5px]
tracking-wide">
  {activeProblem.description}
</p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
