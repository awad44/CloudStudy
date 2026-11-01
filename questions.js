window.QUESTIONS = [
  {
    "id": "c1-01",
    "chapter": 1,
    "topic": "Utility computing",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "How does utility computing charge for computing resources?",
    "options": [
      "By actual consumption",
      "By a fixed lifetime license",
      "Only through hardware ownership",
      "By the number of employees"
    ],
    "answer": 0,
    "why": "The lecture describes utility computing as on-demand provisioning billed according to actual consumption rather than a flat rate.",
    "page": 11,
    "sourceType": "course"
  },
  {
    "id": "c1-04",
    "chapter": 1,
    "topic": "Deployment models",
    "difficulty": "easy",
    "style": "scenario",
    "prompt": "An organization wants cloud infrastructure operated solely for its own use. Which deployment model fits that requirement?",
    "options": [
      "Private cloud",
      "Public cloud",
      "Community cloud",
      "Multi-tenant public cloud"
    ],
    "answer": 0,
    "why": "The lecture defines a private cloud as infrastructure operated solely for an organization and describes it as single-tenant.",
    "page": 42,
    "sourceType": "course"
  },
  {
    "id": "c1-07",
    "chapter": 1,
    "topic": "Service models",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "In IaaS, which area does the user retain control over according to the lecture?",
    "options": [
      "Operating systems, storage, and deployed applications",
      "The provider's physical data-center infrastructure",
      "All underlying cloud networking and servers",
      "The provider's entire virtualization layer"
    ],
    "answer": 0,
    "why": "IaaS users do not manage the underlying cloud infrastructure, but they can control operating systems, storage, deployed applications, and possibly limited networking components.",
    "page": 53,
    "sourceType": "course"
  },
  {
    "id": "c1-11",
    "chapter": 1,
    "topic": "SLA basics",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "What does a cloud service SLA establish between the provider and client?",
    "options": [
      "Expected service levels, performance metrics, and responsibilities",
      "Ownership of the provider's data centers",
      "A guarantee that outages can never occur",
      "The client's application source code"
    ],
    "answer": 0,
    "why": "The lecture defines an SLA as an agreement outlining expected service level, performance metrics, and responsibilities of both parties.",
    "page": 66,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-e-01",
    "chapter": 1,
    "topic": "Personal computing",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "Which statement accurately describes Personal computing, as presented in the lecture?",
    "options": [
      "Private-cloud benefits include greater resource control, customization for business needs, and stronger visibility and access control for sensitive workloads.",
      "The lecture says cloud privacy concerns are affected by sensitive information in data centers, provider practices, data-center locations, and cultural differences.",
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits."
    ],
    "answer": 2,
    "why": "The lecture contrasts personal computing's local installation and high up-front cost with cloud provisioning.",
    "optionWhy": [
      "This describes Private-cloud benefits (Chapter 1, PDF page 47), rather than Personal computing.",
      "This describes Cloud privacy concerns (Chapter 1, PDF page 64), rather than Personal computing.",
      "The lecture contrasts personal computing's local installation and high up-front cost with cloud provisioning.",
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Personal computing."
    ],
    "page": 7,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-e-04",
    "chapter": 1,
    "topic": "Green computing",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "Which statement accurately describes Green computing, as presented in the lecture?",
    "options": [
      "A private cloud is dedicated to one organization and may be hosted on-premises, in a rented off-site data center, or on a provider's infrastructure.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles.",
      "Public-cloud benefits include rapid scalability, avoiding investment in on-premises infrastructure, pay-for-use savings, and quick setup of resources.",
      "Cloud data may be stored closer to where it is used, while appearing to users to be stored in a location-independent manner."
    ],
    "answer": 1,
    "why": "The lecture defines green computing through lower energy use, carbon emissions, and e-waste across a product lifecycle.",
    "optionWhy": [
      "This describes Private-cloud hosting (Chapter 1, PDF page 46), rather than Green computing.",
      "The lecture defines green computing through lower energy use, carbon emissions, and e-waste across a product lifecycle.",
      "This describes Public-cloud benefits (Chapter 1, PDF page 45), rather than Green computing.",
      "This describes Location-independent cloud storage (Chapter 1, PDF page 32), rather than Green computing."
    ],
    "page": 13,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-e-05",
    "chapter": 1,
    "topic": "Parallel computing",
    "difficulty": "easy",
    "style": "applied",
    "prompt": "A research team splits a large computation into smaller tasks that run concurrently. Which statement about Parallel computing best applies the lecture's explanation?",
    "options": [
      "Web-based email, streaming movies, editing documents, and storing pictures are examples of cloud services used in daily routines.",
      "Cloud data may be stored closer to where it is used, while appearing to users to be stored in a location-independent manner.",
      "When applications share a system, their peak resource demands may not be synchronized, so multiplexing can increase resource utilization.",
      "Parallel computing performs many calculations simultaneously by dividing large problems into smaller ones that can be solved concurrently."
    ],
    "answer": 3,
    "why": "The notes describe splitting large problems into smaller pieces and solving them at the same time.",
    "optionWhy": [
      "This describes Everyday cloud services (Chapter 1, PDF page 26), rather than Parallel computing.",
      "This describes Location-independent cloud storage (Chapter 1, PDF page 32), rather than Parallel computing.",
      "This describes Cloud resource multiplexing (Chapter 1, PDF page 59), rather than Parallel computing.",
      "The notes describe splitting large problems into smaller pieces and solving them at the same time."
    ],
    "page": 16,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-e-07",
    "chapter": 1,
    "topic": "Everyday cloud services",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "Which statement accurately describes Everyday cloud services, as presented in the lecture?",
    "options": [
      "Hybrid-cloud architecture can provide flexible compute, network, and storage resources for data gathered from edge and IoT settings.",
      "Web-based email, streaming movies, editing documents, and storing pictures are examples of cloud services used in daily routines.",
      "A private cloud is dedicated to one organization and may be hosted on-premises, in a rented off-site data center, or on a provider's infrastructure.",
      "Public-cloud benefits include rapid scalability, avoiding investment in on-premises infrastructure, pay-for-use savings, and quick setup of resources."
    ],
    "answer": 1,
    "why": "The lecture gives web email, online movies, document editing, and picture storage as everyday cloud examples.",
    "optionWhy": [
      "This describes Hybrid cloud for edge and IoT (Chapter 1, PDF page 50), rather than Everyday cloud services.",
      "The lecture gives web email, online movies, document editing, and picture storage as everyday cloud examples.",
      "This describes Private-cloud hosting (Chapter 1, PDF page 46), rather than Everyday cloud services.",
      "This describes Public-cloud benefits (Chapter 1, PDF page 45), rather than Everyday cloud services."
    ],
    "page": 26,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-e-08",
    "chapter": 1,
    "topic": "Data center",
    "difficulty": "easy",
    "style": "applied",
    "prompt": "A provider organizes networked computers and storage to process and distribute large amounts of data. Which statement about Data center best applies the lecture's explanation?",
    "options": [
      "Hybrid-cloud architecture can provide flexible compute, network, and storage resources for data gathered from edge and IoT settings.",
      "Cloud computing offers on-demand, scalable and elastic compute and storage services; resources can be metered and users charged for what they use.",
      "A data center is made up of networked computers and storage that vendors use to organize, process, store, and disseminate large amounts of data.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles."
    ],
    "answer": 2,
    "why": "The notes describe a data center as networked computers and storage used to handle large amounts of data.",
    "optionWhy": [
      "This describes Hybrid cloud for edge and IoT (Chapter 1, PDF page 50), rather than Data center.",
      "This describes Shared and metered cloud resources (Chapter 1, PDF page 30), rather than Data center.",
      "The notes describe a data center as networked computers and storage used to handle large amounts of data.",
      "This describes Green computing (Chapter 1, PDF page 13), rather than Data center."
    ],
    "page": 27,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-e-09",
    "chapter": 1,
    "topic": "Shared and metered cloud resources",
    "difficulty": "easy",
    "style": "scenario",
    "prompt": "Scenario: An organization wants resources that can be provisioned on demand, measured, and charged by use. Which option is the course-supported explanation of Shared and metered cloud resources?",
    "options": [
      "The lecture describes microservices as an application made of loosely coupled, independently deployable smaller components; it says cloud-native applications are deployed in containers and orchestration tools schedule deployment.",
      "Cloud computing offers on-demand, scalable and elastic compute and storage services; resources can be metered and users charged for what they use.",
      "Cloud computing provides ubiquitous access to shared pools of configurable resources and higher-level services that can be rapidly provisioned with minimal management effort, often over the Internet.",
      "The lecture says cloud privacy concerns are affected by sensitive information in data centers, provider practices, data-center locations, and cultural differences."
    ],
    "answer": 1,
    "why": "The lecture connects on-demand services and scalability/elasticity with metering and charging for used resources.",
    "optionWhy": [
      "This describes Microservices in the hybrid-cloud lecture (Chapter 1, PDF page 49), rather than Shared and metered cloud resources.",
      "The lecture connects on-demand services and scalability/elasticity with metering and charging for used resources.",
      "This describes Cloud computing definition (Chapter 1, PDF page 24), rather than Shared and metered cloud resources.",
      "This describes Cloud privacy concerns (Chapter 1, PDF page 64), rather than Shared and metered cloud resources."
    ],
    "page": 30,
    "sourceType": "course"
  },
  {
    "id": "c1-02",
    "chapter": 1,
    "topic": "Cloud characteristics",
    "difficulty": "medium",
    "style": "scenario",
    "prompt": "A campus service sees a sustained rise in users. Its team adds servers to maintain performance. Which cloud characteristic does this decision demonstrate?",
    "options": [
      "Scalability",
      "Vendor lock-in",
      "Data dispersion",
      "Service availability"
    ],
    "answer": 0,
    "why": "Scalability is a system's capacity to handle growing work or users by adding resources without compromising performance.",
    "page": 31,
    "sourceType": "course"
  },
  {
    "id": "c1-08",
    "chapter": 1,
    "topic": "Service models",
    "difficulty": "medium",
    "style": "applied",
    "prompt": "A developer deploys an application using provider-supported programming languages and tools, without managing servers or the operating system. Which service model is this?",
    "options": [
      "PaaS",
      "IaaS",
      "SaaS",
      "Private cloud"
    ],
    "answer": 0,
    "why": "PaaS lets a user deploy applications with languages and tools supported by the provider; the provider manages the underlying network, servers, operating systems, and storage.",
    "page": 54,
    "sourceType": "course"
  },
  {
    "id": "c1-09",
    "chapter": 1,
    "topic": "Advantages",
    "difficulty": "medium",
    "style": "applied",
    "prompt": "Why can sharing a system among applications improve resource utilization, as described in the lecture?",
    "options": [
      "Their peak resource demands may occur at different times",
      "Every application uses identical resources continuously",
      "Sharing eliminates the need to measure usage",
      "Sharing prevents workloads from changing"
    ],
    "answer": 0,
    "why": "The lecture notes that peak demands for multiple applications are not synchronized, so multiplexing shared resources can raise utilization.",
    "page": 59,
    "sourceType": "course"
  },
  {
    "id": "c1-10",
    "chapter": 1,
    "topic": "Challenges",
    "difficulty": "medium",
    "style": "fundamental",
    "prompt": "The lecture uses which term for difficulty moving from one cloud provider to another?",
    "options": [
      "Vendor lock-in",
      "Elasticity",
      "Resource pooling",
      "Service availability"
    ],
    "answer": 0,
    "why": "The lecture identifies provider differences and migration difficulty as vendor lock-in.",
    "page": 62,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-m-01",
    "chapter": 1,
    "topic": "Personal computing",
    "difficulty": "medium",
    "style": "scenario",
    "prompt": "Scenario: A student manages software on a personal machine and pays for its hardware before using it. Which option is the course-supported explanation of Personal computing?",
    "options": [
      "Parallel computing performs many calculations simultaneously by dividing large problems into smaller ones that can be solved concurrently.",
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate.",
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits."
    ],
    "answer": 2,
    "why": "The lecture contrasts personal computing's local installation and high up-front cost with cloud provisioning.",
    "optionWhy": [
      "This describes Parallel computing (Chapter 1, PDF page 16), rather than Personal computing.",
      "This describes Utility computing (Chapter 1, PDF page 11), rather than Personal computing.",
      "The lecture contrasts personal computing's local installation and high up-front cost with cloud provisioning.",
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Personal computing."
    ],
    "page": 7,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-m-03",
    "chapter": 1,
    "topic": "Utility computing",
    "difficulty": "medium",
    "style": "applied",
    "prompt": "A team wants computing capacity on demand and a bill based on what it actually consumes. Which statement about Utility computing best applies the lecture's explanation?",
    "options": [
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate.",
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles.",
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits."
    ],
    "answer": 0,
    "why": "The lecture describes utility computing as on-demand provisioning billed by actual consumption.",
    "optionWhy": [
      "The lecture describes utility computing as on-demand provisioning billed by actual consumption.",
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Utility computing.",
      "This describes Green computing (Chapter 1, PDF page 13), rather than Utility computing.",
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Utility computing."
    ],
    "page": 11,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-m-04",
    "chapter": 1,
    "topic": "Green computing",
    "difficulty": "medium",
    "style": "scenario",
    "prompt": "Scenario: An organization evaluates its technology lifecycle by energy use, emissions, and discarded equipment. Which option is the course-supported explanation of Green computing?",
    "options": [
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits.",
      "Parallel computing performs many calculations simultaneously by dividing large problems into smaller ones that can be solved concurrently.",
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles."
    ],
    "answer": 3,
    "why": "The lecture defines green computing through lower energy use, carbon emissions, and e-waste across a product lifecycle.",
    "optionWhy": [
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Green computing.",
      "This describes Parallel computing (Chapter 1, PDF page 16), rather than Green computing.",
      "This describes Utility computing (Chapter 1, PDF page 11), rather than Green computing.",
      "The lecture defines green computing through lower energy use, carbon emissions, and e-waste across a product lifecycle."
    ],
    "page": 13,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-m-05",
    "chapter": 1,
    "topic": "Parallel computing",
    "difficulty": "medium",
    "style": "fundamental",
    "prompt": "A learner is checking a definition of Parallel computing. Which course statement is correct?",
    "options": [
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Parallel computing performs many calculations simultaneously by dividing large problems into smaller ones that can be solved concurrently.",
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate.",
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits."
    ],
    "answer": 1,
    "why": "The notes describe splitting large problems into smaller pieces and solving them at the same time.",
    "optionWhy": [
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Parallel computing.",
      "The notes describe splitting large problems into smaller pieces and solving them at the same time.",
      "This describes Utility computing (Chapter 1, PDF page 11), rather than Parallel computing.",
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Parallel computing."
    ],
    "page": 16,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-m-07",
    "chapter": 1,
    "topic": "Everyday cloud services",
    "difficulty": "medium",
    "style": "scenario",
    "prompt": "Scenario: A learner uses web email, streams a movie, edits a document, and stores photos online. Which option is the course-supported explanation of Everyday cloud services?",
    "options": [
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "A data center is made up of networked computers and storage that vendors use to organize, process, store, and disseminate large amounts of data.",
      "Cloud computing provides ubiquitous access to shared pools of configurable resources and higher-level services that can be rapidly provisioned with minimal management effort, often over the Internet.",
      "Web-based email, streaming movies, editing documents, and storing pictures are examples of cloud services used in daily routines."
    ],
    "answer": 3,
    "why": "The lecture gives web email, online movies, document editing, and picture storage as everyday cloud examples.",
    "optionWhy": [
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Everyday cloud services.",
      "This describes Data center (Chapter 1, PDF page 27), rather than Everyday cloud services.",
      "This describes Cloud computing definition (Chapter 1, PDF page 24), rather than Everyday cloud services.",
      "The lecture gives web email, online movies, document editing, and picture storage as everyday cloud examples."
    ],
    "page": 26,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-m-08",
    "chapter": 1,
    "topic": "Data center",
    "difficulty": "medium",
    "style": "fundamental",
    "prompt": "A learner is checking a definition of Data center. Which course statement is correct?",
    "options": [
      "Web-based email, streaming movies, editing documents, and storing pictures are examples of cloud services used in daily routines.",
      "A data center is made up of networked computers and storage that vendors use to organize, process, store, and disseminate large amounts of data.",
      "Cloud computing provides ubiquitous access to shared pools of configurable resources and higher-level services that can be rapidly provisioned with minimal management effort, often over the Internet.",
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost."
    ],
    "answer": 1,
    "why": "The notes describe a data center as networked computers and storage used to handle large amounts of data.",
    "optionWhy": [
      "This describes Everyday cloud services (Chapter 1, PDF page 26), rather than Data center.",
      "The notes describe a data center as networked computers and storage used to handle large amounts of data.",
      "This describes Cloud computing definition (Chapter 1, PDF page 24), rather than Data center.",
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Data center."
    ],
    "page": 27,
    "sourceType": "course"
  },
  {
    "id": "c1-06",
    "chapter": 1,
    "topic": "Deployment models",
    "difficulty": "hard",
    "style": "scenario",
    "prompt": "A company wants private infrastructure for confidential workloads but wants to use public-cloud capacity for short-term development and testing. Which model best fits the lecture's example?",
    "options": [
      "Hybrid cloud",
      "Private cloud only",
      "Public cloud only",
      "Utility computing without a deployment model"
    ],
    "answer": 0,
    "why": "The lecture presents hybrid cloud as allowing workloads to be allocated to fit business needs, such as public resources for short-term development and testing and private infrastructure for sensitive data.",
    "page": 51,
    "sourceType": "course"
  },
  {
    "id": "c1-12",
    "chapter": 1,
    "topic": "SLA basics",
    "difficulty": "hard",
    "style": "scenario",
    "prompt": "A client wants to assess uptime, response time, and latency against agreed targets. Which SLA components should they review?",
    "options": [
      "Service availability and performance metrics",
      "Only the provider's hardware inventory",
      "Only the contract termination date",
      "Virtualization and data dispersion"
    ],
    "answer": 0,
    "why": "The lecture lists availability as uptime and performance metrics such as response time, latency, and throughput.",
    "page": 67,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-01",
    "chapter": 1,
    "topic": "Personal computing",
    "difficulty": "hard",
    "style": "applied",
    "prompt": "A student manages software on a personal machine and pays for its hardware before using it. Which statement about Personal computing best applies the lecture's explanation?",
    "options": [
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles.",
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate.",
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits."
    ],
    "answer": 0,
    "why": "The lecture contrasts personal computing's local installation and high up-front cost with cloud provisioning.",
    "optionWhy": [
      "The lecture contrasts personal computing's local installation and high up-front cost with cloud provisioning.",
      "This describes Green computing (Chapter 1, PDF page 13), rather than Personal computing.",
      "This describes Utility computing (Chapter 1, PDF page 11), rather than Personal computing.",
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Personal computing."
    ],
    "page": 7,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-02",
    "chapter": 1,
    "topic": "Mobile computing",
    "difficulty": "hard",
    "style": "scenario",
    "prompt": "Scenario: A field worker values portable, real-time access but must plan around connectivity and battery limits. Which option is the course-supported explanation of Mobile computing?",
    "options": [
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits.",
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles.",
      "Parallel computing performs many calculations simultaneously by dividing large problems into smaller ones that can be solved concurrently."
    ],
    "answer": 0,
    "why": "The notes list portability and real-time access as advantages and security, connectivity, battery, and bandwidth as limitations.",
    "optionWhy": [
      "The notes list portability and real-time access as advantages and security, connectivity, battery, and bandwidth as limitations.",
      "This describes Utility computing (Chapter 1, PDF page 11), rather than Mobile computing.",
      "This describes Green computing (Chapter 1, PDF page 13), rather than Mobile computing.",
      "This describes Parallel computing (Chapter 1, PDF page 16), rather than Mobile computing."
    ],
    "page": 10,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-03",
    "chapter": 1,
    "topic": "Utility computing",
    "difficulty": "hard",
    "style": "fundamental",
    "prompt": "A reviewer must reject claims that misstate Utility computing. Which interpretation is supported by the lecture?",
    "options": [
      "Parallel computing performs many calculations simultaneously by dividing large problems into smaller ones that can be solved concurrently.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles.",
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits.",
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate."
    ],
    "answer": 3,
    "why": "The lecture describes utility computing as on-demand provisioning billed by actual consumption.",
    "optionWhy": [
      "This describes Parallel computing (Chapter 1, PDF page 16), rather than Utility computing.",
      "This describes Green computing (Chapter 1, PDF page 13), rather than Utility computing.",
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Utility computing.",
      "The lecture describes utility computing as on-demand provisioning billed by actual consumption."
    ],
    "page": 11,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-04",
    "chapter": 1,
    "topic": "Green computing",
    "difficulty": "hard",
    "style": "applied",
    "prompt": "An organization evaluates its technology lifecycle by energy use, emissions, and discarded equipment. Which statement about Green computing best applies the lecture's explanation?",
    "options": [
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Utility computing provisions resources on demand and charges users according to actual consumption rather than a flat rate.",
      "Parallel computing performs many calculations simultaneously by dividing large problems into smaller ones that can be solved concurrently.",
      "Green computing aims to reduce energy consumption, carbon emissions, and electronic waste throughout technology products' lifecycles."
    ],
    "answer": 3,
    "why": "The lecture defines green computing through lower energy use, carbon emissions, and e-waste across a product lifecycle.",
    "optionWhy": [
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Green computing.",
      "This describes Utility computing (Chapter 1, PDF page 11), rather than Green computing.",
      "This describes Parallel computing (Chapter 1, PDF page 16), rather than Green computing.",
      "The lecture defines green computing through lower energy use, carbon emissions, and e-waste across a product lifecycle."
    ],
    "page": 13,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-06",
    "chapter": 1,
    "topic": "Cloud computing definition",
    "difficulty": "hard",
    "style": "fundamental",
    "prompt": "A reviewer must reject claims that misstate Cloud computing definition. Which interpretation is supported by the lecture?",
    "options": [
      "A data center is made up of networked computers and storage that vendors use to organize, process, store, and disseminate large amounts of data.",
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Cloud computing provides ubiquitous access to shared pools of configurable resources and higher-level services that can be rapidly provisioned with minimal management effort, often over the Internet.",
      "Web-based email, streaming movies, editing documents, and storing pictures are examples of cloud services used in daily routines."
    ],
    "answer": 2,
    "why": "The lecture's definition emphasizes shared configurable resources, rapid provisioning, minimal management effort, and often Internet access.",
    "optionWhy": [
      "This describes Data center (Chapter 1, PDF page 27), rather than Cloud computing definition.",
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Cloud computing definition.",
      "The lecture's definition emphasizes shared configurable resources, rapid provisioning, minimal management effort, and often Internet access.",
      "This describes Everyday cloud services (Chapter 1, PDF page 26), rather than Cloud computing definition."
    ],
    "page": 24,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-07",
    "chapter": 1,
    "topic": "Everyday cloud services",
    "difficulty": "hard",
    "style": "applied",
    "prompt": "A learner uses web email, streams a movie, edits a document, and stores photos online. Which statement about Everyday cloud services best applies the lecture's explanation?",
    "options": [
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "A data center is made up of networked computers and storage that vendors use to organize, process, store, and disseminate large amounts of data.",
      "Cloud computing provides ubiquitous access to shared pools of configurable resources and higher-level services that can be rapidly provisioned with minimal management effort, often over the Internet.",
      "Web-based email, streaming movies, editing documents, and storing pictures are examples of cloud services used in daily routines."
    ],
    "answer": 3,
    "why": "The lecture gives web email, online movies, document editing, and picture storage as everyday cloud examples.",
    "optionWhy": [
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Everyday cloud services.",
      "This describes Data center (Chapter 1, PDF page 27), rather than Everyday cloud services.",
      "This describes Cloud computing definition (Chapter 1, PDF page 24), rather than Everyday cloud services.",
      "The lecture gives web email, online movies, document editing, and picture storage as everyday cloud examples."
    ],
    "page": 26,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-08",
    "chapter": 1,
    "topic": "Data center",
    "difficulty": "hard",
    "style": "scenario",
    "prompt": "Scenario: A provider organizes networked computers and storage to process and distribute large amounts of data. Which option is the course-supported explanation of Data center?",
    "options": [
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Cloud computing provides ubiquitous access to shared pools of configurable resources and higher-level services that can be rapidly provisioned with minimal management effort, often over the Internet.",
      "A data center is made up of networked computers and storage that vendors use to organize, process, store, and disseminate large amounts of data.",
      "Web-based email, streaming movies, editing documents, and storing pictures are examples of cloud services used in daily routines."
    ],
    "answer": 2,
    "why": "The notes describe a data center as networked computers and storage used to handle large amounts of data.",
    "optionWhy": [
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Data center.",
      "This describes Cloud computing definition (Chapter 1, PDF page 24), rather than Data center.",
      "The notes describe a data center as networked computers and storage used to handle large amounts of data.",
      "This describes Everyday cloud services (Chapter 1, PDF page 26), rather than Data center."
    ],
    "page": 27,
    "sourceType": "course"
  },
  {
    "id": "c1-extra-h-09",
    "chapter": 1,
    "topic": "Shared and metered cloud resources",
    "difficulty": "hard",
    "style": "fundamental",
    "prompt": "A reviewer must reject claims that misstate Shared and metered cloud resources. Which interpretation is supported by the lecture?",
    "options": [
      "Personal computing involves local installation and maintenance, customization to user needs, very low utilization, and high up-front cost.",
      "Cloud data may be stored closer to where it is used, while appearing to users to be stored in a location-independent manner.",
      "Mobile computing includes mobile communication, hardware, and software; it offers portability, productivity, and real-time access, while facing security, connectivity, battery-life, and bandwidth limits.",
      "Cloud computing offers on-demand, scalable and elastic compute and storage services; resources can be metered and users charged for what they use."
    ],
    "answer": 3,
    "why": "The lecture connects on-demand services and scalability/elasticity with metering and charging for used resources.",
    "optionWhy": [
      "This describes Personal computing (Chapter 1, PDF page 7), rather than Shared and metered cloud resources.",
      "This describes Location-independent cloud storage (Chapter 1, PDF page 32), rather than Shared and metered cloud resources.",
      "This describes Mobile computing (Chapter 1, PDF page 10), rather than Shared and metered cloud resources.",
      "The lecture connects on-demand services and scalability/elasticity with metering and charging for used resources."
    ],
    "page": 30,
    "sourceType": "course"
  },
  {
    "id": "c2-01",
    "chapter": 2,
    "topic": "Virtualization basics",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "What is a virtual machine in the lecture?",
    "options": [
      "A software computer that runs an operating system and applications",
      "A physical data center used by one customer",
      "A storage API with no compute resources",
      "A type of service-level agreement"
    ],
    "answer": 0,
    "why": "The lecture defines a VM as a software computer that runs an operating system and applications, with virtual hardware such as CPU, memory, disk, and a network interface.",
    "page": 14,
    "sourceType": "course"
  },
  {
    "id": "c2-03",
    "chapter": 2,
    "topic": "Hypervisors",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "What does a hypervisor (VMM) do?",
    "options": [
      "Creates and runs virtual machines by sharing host resources",
      "Stores files in a hierarchical folder structure",
      "Measures a cloud service's SLA uptime",
      "Encrypts data without using keys"
    ],
    "answer": 0,
    "why": "The lecture calls the hypervisor a virtual machine monitor: software that creates and runs VMs and shares host resources such as memory and processing.",
    "page": 16,
    "sourceType": "course"
  },
  {
    "id": "c2-06",
    "chapter": 2,
    "topic": "Storage models",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "How is object storage accessed, according to the lecture?",
    "options": [
      "Through an API rather than a network share or file system",
      "Only as a raw disk attached to one VM",
      "Only through NFS or SMB paths",
      "By mounting each object as a physical drive"
    ],
    "answer": 0,
    "why": "The lecture says object storage holds individual objects and is accessed through an API rather than a network share.",
    "page": 45,
    "sourceType": "course"
  },
  {
    "id": "c2-11",
    "chapter": 2,
    "topic": "Volume encryption",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "In externally managed volume encryption, where are encryption keys managed?",
    "options": [
      "Outside the instance, such as in a key-management service or HSM",
      "Only inside the volume beside the data",
      "In the guest's file path",
      "By the hypervisor without a key manager"
    ],
    "answer": 0,
    "why": "The lecture says externally managed encryption runs the engine in the instance while keys are handled outside it by a key-management server, service, or HSM.",
    "page": 65,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-e-01",
    "chapter": 2,
    "topic": "Application virtualization",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "Which statement accurately describes Application virtualization, as presented in the lecture?",
    "options": [
      "In the lecture's CPU virtualization model, privileged instructions trap while non-critical instructions execute identically; the VMM can intercept trapping events.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet.",
      "A hypervisor creates virtual CPUs in software and presents them to guest systems for their use.",
      "Virtual compute can reduce idle physical CPU time because a hypervisor can create virtual CPUs and schedule workloads to use physical processors more fully."
    ],
    "answer": 1,
    "why": "The lecture says the application is installed on a separate server but can be used from a local workstation.",
    "optionWhy": [
      "This describes CPU virtualization (Chapter 2, PDF page 40), rather than Application virtualization.",
      "The lecture says the application is installed on a separate server but can be used from a local workstation.",
      "This describes Virtual compute (Chapter 2, PDF page 28), rather than Application virtualization.",
      "This describes Virtual-compute utilization (Chapter 2, PDF page 29), rather than Application virtualization."
    ],
    "page": 21,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-e-03",
    "chapter": 2,
    "topic": "Desktop virtualization",
    "difficulty": "easy",
    "style": "scenario",
    "prompt": "Scenario: An employee needs the same desktop environment from different connected devices and locations. Which option is the course-supported explanation of Desktop virtualization?",
    "options": [
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location.",
      "Images are predefined storage volumes in object storage that contain operating systems and other virtual drives used to launch instances.",
      "A volume snapshot is an instant backup that copies the volume's storage blocks into a file in an object-storage container.",
      "The lecture identifies object storage as suitable for unstructured data, including images, videos, documents, backups, archives, analytics, and static website hosting."
    ],
    "answer": 0,
    "why": "The lecture emphasizes remote desktop access and user mobility.",
    "optionWhy": [
      "The lecture emphasizes remote desktop access and user mobility.",
      "This describes Instance images (Chapter 2, PDF page 51), rather than Desktop virtualization.",
      "This describes Volume snapshots (Chapter 2, PDF page 50), rather than Desktop virtualization.",
      "This describes Object storage use cases (Chapter 2, PDF page 46), rather than Desktop virtualization."
    ],
    "page": 23,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-e-05",
    "chapter": 2,
    "topic": "Server virtualization",
    "difficulty": "easy",
    "style": "applied",
    "prompt": "A data center wants several isolated server environments to run on one physical machine. Which statement about Server virtualization best applies the lecture's explanation?",
    "options": [
      "Domain 0 is Xen's privileged guest OS; it accesses hardware, manages devices, and allocates or maps hardware resources for guest domains.",
      "The lecture identifies object storage as suitable for unstructured data, including images, videos, documents, backups, archives, analytics, and static website hosting.",
      "Server virtualization divides one physical server into multiple isolated virtual servers, each able to run its own operating system independently.",
      "A hypervisor creates virtual CPUs in software and presents them to guest systems for their use."
    ],
    "answer": 2,
    "why": "The lecture says one physical server can host multiple unique and isolated virtual servers.",
    "optionWhy": [
      "This describes Xen Domain 0 (Chapter 2, PDF page 36), rather than Server virtualization.",
      "This describes Object storage use cases (Chapter 2, PDF page 46), rather than Server virtualization.",
      "The lecture says one physical server can host multiple unique and isolated virtual servers.",
      "This describes Virtual compute (Chapter 2, PDF page 28), rather than Server virtualization."
    ],
    "page": 25,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-e-06",
    "chapter": 2,
    "topic": "Data virtualization",
    "difficulty": "easy",
    "style": "scenario",
    "prompt": "Scenario: Analysts need one logical view of data from several differently stored sources. Which option is the course-supported explanation of Data virtualization?",
    "options": [
      "Data virtualization combines data from different sources into a logical view without requiring users to know the technical details of how the data was collected, stored, or formatted.",
      "Images are predefined storage volumes in object storage that contain operating systems and other virtual drives used to launch instances.",
      "VM escape occurs when a malicious user or VM gets outside VMM or hypervisor control, potentially accessing other VMs or bringing the VMM down.",
      "A volume is a virtual hard drive assigned to a VM; the lecture distinguishes persistent volumes from local ephemeral storage whose data is lost when an instance shuts down."
    ],
    "answer": 0,
    "why": "The notes emphasize a unified logical view that hides source and format details.",
    "optionWhy": [
      "The notes emphasize a unified logical view that hides source and format details.",
      "This describes Instance images (Chapter 2, PDF page 51), rather than Data virtualization.",
      "This describes VM escape (Chapter 2, PDF page 70), rather than Data virtualization.",
      "This describes Volume lifecycle (Chapter 2, PDF page 48), rather than Data virtualization."
    ],
    "page": 26,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-e-08",
    "chapter": 2,
    "topic": "Virtual compute",
    "difficulty": "easy",
    "style": "applied",
    "prompt": "Guest systems need CPU resources presented in software by a hypervisor. Which statement about Virtual compute best applies the lecture's explanation?",
    "options": [
      "Operating-system-level virtualization creates isolated containers on one physical server; the lecture says the containers behave like servers.",
      "A hypervisor creates virtual CPUs in software and presents them to guest systems for their use.",
      "Domain 0 is Xen's privileged guest OS; it accesses hardware, manages devices, and allocates or maps hardware resources for guest domains.",
      "Storage virtualization pools physical storage from multiple devices into what appears to be one storage pool managed by a virtual storage system."
    ],
    "answer": 1,
    "why": "The notes identify the hypervisor as the component that creates and presents virtual CPUs.",
    "optionWhy": [
      "This describes Operating-system virtualization (Chapter 2, PDF page 27), rather than Virtual compute.",
      "The notes identify the hypervisor as the component that creates and presents virtual CPUs.",
      "This describes Xen Domain 0 (Chapter 2, PDF page 36), rather than Virtual compute.",
      "This describes Storage virtualization (Chapter 2, PDF page 24), rather than Virtual compute."
    ],
    "page": 28,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-e-10",
    "chapter": 2,
    "topic": "Virtual storage arrays",
    "difficulty": "easy",
    "style": "fundamental",
    "prompt": "Which statement accurately describes Virtual storage arrays, as presented in the lecture?",
    "options": [
      "The lecture describes specialized storage arrays providing virtual disks to multiple servers over a high-speed storage network, following the use of RAID to combine disks.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet.",
      "The lecture warns that powerful access to virtual network interfaces in shared infrastructure can be abused for network attacks such as sniffing and spoofing.",
      "Server virtualization divides one physical server into multiple isolated virtual servers, each able to run its own operating system independently."
    ],
    "answer": 0,
    "why": "The notes describe storage moving from server-local disks and RAID to larger arrays that provide virtual disks over a storage network.",
    "optionWhy": [
      "The notes describe storage moving from server-local disks and RAID to larger arrays that provide virtual disks over a storage network.",
      "This describes Application virtualization (Chapter 2, PDF page 21), rather than Virtual storage arrays.",
      "This describes Shared communication infrastructure (Chapter 2, PDF page 68), rather than Virtual storage arrays.",
      "This describes Server virtualization (Chapter 2, PDF page 25), rather than Virtual storage arrays."
    ],
    "page": 30,
    "sourceType": "course"
  },
  {
    "id": "c2-02",
    "chapter": 2,
    "topic": "Virtualization basics",
    "difficulty": "medium",
    "style": "applied",
    "prompt": "One physical machine runs several isolated guest systems at once. What role does virtualization play in this arrangement?",
    "options": [
      "It separates services from their underlying physical delivery so multiple systems can share hardware",
      "It replaces all guest operating systems with one application",
      "It makes every guest a separate physical server",
      "It removes the need for a host machine"
    ],
    "answer": 0,
    "why": "The lecture explains that virtualization creates software versions of resources and allows multiple operating systems and applications to share the same hardware.",
    "page": 14,
    "sourceType": "course"
  },
  {
    "id": "c2-04",
    "chapter": 2,
    "topic": "Hypervisors",
    "difficulty": "medium",
    "style": "fundamental",
    "prompt": "Where does a Type 1 hypervisor run?",
    "options": [
      "Directly on the underlying host system",
      "Inside a web browser on each guest",
      "Only as an application within a host operating system",
      "Inside object storage"
    ],
    "answer": 0,
    "why": "The lecture describes Type 1 as a native or bare-metal hypervisor that runs directly on the host and has direct access to hardware resources.",
    "page": 33,
    "sourceType": "course"
  },
  {
    "id": "c2-05",
    "chapter": 2,
    "topic": "Xen architecture",
    "difficulty": "medium",
    "style": "fundamental",
    "prompt": "In the Xen architecture described, what is Domain 0?",
    "options": [
      "The privileged guest OS that accesses hardware and manages devices",
      "An unprivileged domain with no resource responsibilities",
      "The physical server's storage array",
      "A public-cloud tenant"
    ],
    "answer": 0,
    "why": "Domain 0 is the privileged guest OS. It accesses hardware directly, manages devices, and allocates or maps resources for guest domains.",
    "page": 36,
    "sourceType": "course"
  },
  {
    "id": "c2-07",
    "chapter": 2,
    "topic": "Storage models",
    "difficulty": "medium",
    "style": "applied",
    "prompt": "A workload needs fixed-size blocks that behave like a raw disk and are attached to a VM. Which storage model fits the lecture?",
    "options": [
      "Volume storage",
      "Object storage",
      "File storage",
      "Data virtualization"
    ],
    "answer": 0,
    "why": "The lecture describes volume storage as fixed-size blocks acting like a raw disk, attached to a VM and requiring a file system.",
    "page": 49,
    "sourceType": "course"
  },
  {
    "id": "c2-12",
    "chapter": 2,
    "topic": "Volume encryption",
    "difficulty": "medium",
    "style": "applied",
    "prompt": "Which option uses an inline software encryption proxy to encrypt and decrypt data?",
    "options": [
      "Proxy encryption",
      "Instance-managed encryption",
      "Externally managed encryption",
      "Data dispersion"
    ],
    "answer": 0,
    "why": "The lecture defines proxy encryption as using an inline software encryption proxy for encryption and decryption.",
    "page": 66,
    "sourceType": "course"
  },
  {
    "id": "c2-14",
    "chapter": 2,
    "topic": "IaaS security",
    "difficulty": "medium",
    "style": "fundamental",
    "prompt": "What is NoHype described as doing?",
    "options": [
      "Removing the hypervisor while retaining a virtualized cloud infrastructure",
      "Encrypting a volume with an external key service",
      "Combining public and private clouds",
      "Converting object storage into a file system"
    ],
    "answer": 0,
    "why": "The lecture introduces NoHype as removing the hypervisor while retaining the need for a virtualized cloud infrastructure.",
    "page": 59,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-m-01",
    "chapter": 2,
    "topic": "Application virtualization",
    "difficulty": "medium",
    "style": "scenario",
    "prompt": "Scenario: An administrator hosts an application on a server and lets staff use it from their workstations. Which option is the course-supported explanation of Application virtualization?",
    "options": [
      "Data virtualization combines data from different sources into a logical view without requiring users to know the technical details of how the data was collected, stored, or formatted.",
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location.",
      "Operating-system-level virtualization creates isolated containers on one physical server; the lecture says the containers behave like servers.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet."
    ],
    "answer": 3,
    "why": "The lecture says the application is installed on a separate server but can be used from a local workstation.",
    "optionWhy": [
      "This describes Data virtualization (Chapter 2, PDF page 26), rather than Application virtualization.",
      "This describes Desktop virtualization (Chapter 2, PDF page 23), rather than Application virtualization.",
      "This describes Operating-system virtualization (Chapter 2, PDF page 27), rather than Application virtualization.",
      "The lecture says the application is installed on a separate server but can be used from a local workstation."
    ],
    "page": 21,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-m-03",
    "chapter": 2,
    "topic": "Desktop virtualization",
    "difficulty": "medium",
    "style": "applied",
    "prompt": "An employee needs the same desktop environment from different connected devices and locations. Which statement about Desktop virtualization best applies the lecture's explanation?",
    "options": [
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location.",
      "Network virtualization creates multiple logically independent virtual networks on one physical network and can provide virtual switches, routers, firewalls, load balancers, and VPNs.",
      "Data virtualization combines data from different sources into a logical view without requiring users to know the technical details of how the data was collected, stored, or formatted.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet."
    ],
    "answer": 0,
    "why": "The lecture emphasizes remote desktop access and user mobility.",
    "optionWhy": [
      "The lecture emphasizes remote desktop access and user mobility.",
      "This describes Network virtualization (Chapter 2, PDF page 22), rather than Desktop virtualization.",
      "This describes Data virtualization (Chapter 2, PDF page 26), rather than Desktop virtualization.",
      "This describes Application virtualization (Chapter 2, PDF page 21), rather than Desktop virtualization."
    ],
    "page": 23,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-m-05",
    "chapter": 2,
    "topic": "Server virtualization",
    "difficulty": "medium",
    "style": "fundamental",
    "prompt": "A learner is checking a definition of Server virtualization. Which course statement is correct?",
    "options": [
      "Network virtualization creates multiple logically independent virtual networks on one physical network and can provide virtual switches, routers, firewalls, load balancers, and VPNs.",
      "Storage virtualization pools physical storage from multiple devices into what appears to be one storage pool managed by a virtual storage system.",
      "Server virtualization divides one physical server into multiple isolated virtual servers, each able to run its own operating system independently.",
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location."
    ],
    "answer": 2,
    "why": "The lecture says one physical server can host multiple unique and isolated virtual servers.",
    "optionWhy": [
      "This describes Network virtualization (Chapter 2, PDF page 22), rather than Server virtualization.",
      "This describes Storage virtualization (Chapter 2, PDF page 24), rather than Server virtualization.",
      "The lecture says one physical server can host multiple unique and isolated virtual servers.",
      "This describes Desktop virtualization (Chapter 2, PDF page 23), rather than Server virtualization."
    ],
    "page": 25,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-m-07",
    "chapter": 2,
    "topic": "Operating-system virtualization",
    "difficulty": "medium",
    "style": "scenario",
    "prompt": "Scenario: A host needs multiple isolated container environments on one physical server. Which option is the course-supported explanation of Operating-system virtualization?",
    "options": [
      "Network virtualization creates multiple logically independent virtual networks on one physical network and can provide virtual switches, routers, firewalls, load balancers, and VPNs.",
      "Storage virtualization pools physical storage from multiple devices into what appears to be one storage pool managed by a virtual storage system.",
      "Operating-system-level virtualization creates isolated containers on one physical server; the lecture says the containers behave like servers.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet."
    ],
    "answer": 2,
    "why": "The lecture describes containers as isolated environments created at the OS level that behave like servers.",
    "optionWhy": [
      "This describes Network virtualization (Chapter 2, PDF page 22), rather than Operating-system virtualization.",
      "This describes Storage virtualization (Chapter 2, PDF page 24), rather than Operating-system virtualization.",
      "The lecture describes containers as isolated environments created at the OS level that behave like servers.",
      "This describes Application virtualization (Chapter 2, PDF page 21), rather than Operating-system virtualization."
    ],
    "page": 27,
    "sourceType": "course"
  },
  {
    "id": "c2-09",
    "chapter": 2,
    "topic": "Storage models",
    "difficulty": "hard",
    "style": "scenario",
    "prompt": "A team needs a shared file repository mounted by several servers at once, organized in directories and addressed by file paths. Which model best matches the lecture?",
    "options": [
      "File storage",
      "Volume storage",
      "Object storage",
      "Ephemeral instance storage"
    ],
    "answer": 0,
    "why": "The lecture says file storage is hierarchical, can be mounted by multiple servers, and is accessed by file path; it lists shared repositories as a use case.",
    "page": 52,
    "sourceType": "course"
  },
  {
    "id": "c2-13",
    "chapter": 2,
    "topic": "IaaS security",
    "difficulty": "hard",
    "style": "scenario",
    "prompt": "A security review asks what a VM escape could allow an attacker to do. Which answer matches the lecture?",
    "options": [
      "Escape hypervisor control and potentially access other VMs or bring down the VMM",
      "Move a volume snapshot into object storage",
      "Scale resources dynamically with demand",
      "Mount shared files with NFS"
    ],
    "answer": 0,
    "why": "The lecture defines VM escape as getting outside VMM or hypervisor control, potentially enabling access to other VMs or taking down the VMM.",
    "page": 70,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-01",
    "chapter": 2,
    "topic": "Application virtualization",
    "difficulty": "hard",
    "style": "applied",
    "prompt": "An administrator hosts an application on a server and lets staff use it from their workstations. Which statement about Application virtualization best applies the lecture's explanation?",
    "options": [
      "Network virtualization creates multiple logically independent virtual networks on one physical network and can provide virtual switches, routers, firewalls, load balancers, and VPNs.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet.",
      "Operating-system-level virtualization creates isolated containers on one physical server; the lecture says the containers behave like servers.",
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location."
    ],
    "answer": 1,
    "why": "The lecture says the application is installed on a separate server but can be used from a local workstation.",
    "optionWhy": [
      "This describes Network virtualization (Chapter 2, PDF page 22), rather than Application virtualization.",
      "The lecture says the application is installed on a separate server but can be used from a local workstation.",
      "This describes Operating-system virtualization (Chapter 2, PDF page 27), rather than Application virtualization.",
      "This describes Desktop virtualization (Chapter 2, PDF page 23), rather than Application virtualization."
    ],
    "page": 21,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-03",
    "chapter": 2,
    "topic": "Desktop virtualization",
    "difficulty": "hard",
    "style": "fundamental",
    "prompt": "A reviewer must reject claims that misstate Desktop virtualization. Which interpretation is supported by the lecture?",
    "options": [
      "Data virtualization combines data from different sources into a logical view without requiring users to know the technical details of how the data was collected, stored, or formatted.",
      "Server virtualization divides one physical server into multiple isolated virtual servers, each able to run its own operating system independently.",
      "Network virtualization creates multiple logically independent virtual networks on one physical network and can provide virtual switches, routers, firewalls, load balancers, and VPNs.",
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location."
    ],
    "answer": 3,
    "why": "The lecture emphasizes remote desktop access and user mobility.",
    "optionWhy": [
      "This describes Data virtualization (Chapter 2, PDF page 26), rather than Desktop virtualization.",
      "This describes Server virtualization (Chapter 2, PDF page 25), rather than Desktop virtualization.",
      "This describes Network virtualization (Chapter 2, PDF page 22), rather than Desktop virtualization.",
      "The lecture emphasizes remote desktop access and user mobility."
    ],
    "page": 23,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-04",
    "chapter": 2,
    "topic": "Storage virtualization",
    "difficulty": "hard",
    "style": "applied",
    "prompt": "An administrator combines capacity from several physical storage devices into one managed pool. Which statement about Storage virtualization best applies the lecture's explanation?",
    "options": [
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet.",
      "Network virtualization creates multiple logically independent virtual networks on one physical network and can provide virtual switches, routers, firewalls, load balancers, and VPNs.",
      "Storage virtualization pools physical storage from multiple devices into what appears to be one storage pool managed by a virtual storage system.",
      "Data virtualization combines data from different sources into a logical view without requiring users to know the technical details of how the data was collected, stored, or formatted."
    ],
    "answer": 2,
    "why": "The notes describe software aggregating physical capacity into a centrally managed pool.",
    "optionWhy": [
      "This describes Application virtualization (Chapter 2, PDF page 21), rather than Storage virtualization.",
      "This describes Network virtualization (Chapter 2, PDF page 22), rather than Storage virtualization.",
      "The notes describe software aggregating physical capacity into a centrally managed pool.",
      "This describes Data virtualization (Chapter 2, PDF page 26), rather than Storage virtualization."
    ],
    "page": 24,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-06",
    "chapter": 2,
    "topic": "Data virtualization",
    "difficulty": "hard",
    "style": "fundamental",
    "prompt": "A reviewer must reject claims that misstate Data virtualization. Which interpretation is supported by the lecture?",
    "options": [
      "Data virtualization combines data from different sources into a logical view without requiring users to know the technical details of how the data was collected, stored, or formatted.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet.",
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location.",
      "Operating-system-level virtualization creates isolated containers on one physical server; the lecture says the containers behave like servers."
    ],
    "answer": 0,
    "why": "The notes emphasize a unified logical view that hides source and format details.",
    "optionWhy": [
      "The notes emphasize a unified logical view that hides source and format details.",
      "This describes Application virtualization (Chapter 2, PDF page 21), rather than Data virtualization.",
      "This describes Desktop virtualization (Chapter 2, PDF page 23), rather than Data virtualization.",
      "This describes Operating-system virtualization (Chapter 2, PDF page 27), rather than Data virtualization."
    ],
    "page": 26,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-07",
    "chapter": 2,
    "topic": "Operating-system virtualization",
    "difficulty": "hard",
    "style": "applied",
    "prompt": "A host needs multiple isolated container environments on one physical server. Which statement about Operating-system virtualization best applies the lecture's explanation?",
    "options": [
      "Desktop virtualization stores a user's operating system remotely in a data center so the user can access the desktop from another connected device and location.",
      "Operating-system-level virtualization creates isolated containers on one physical server; the lecture says the containers behave like servers.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet.",
      "Network virtualization creates multiple logically independent virtual networks on one physical network and can provide virtual switches, routers, firewalls, load balancers, and VPNs."
    ],
    "answer": 1,
    "why": "The lecture describes containers as isolated environments created at the OS level that behave like servers.",
    "optionWhy": [
      "This describes Desktop virtualization (Chapter 2, PDF page 23), rather than Operating-system virtualization.",
      "The lecture describes containers as isolated environments created at the OS level that behave like servers.",
      "This describes Application virtualization (Chapter 2, PDF page 21), rather than Operating-system virtualization.",
      "This describes Network virtualization (Chapter 2, PDF page 22), rather than Operating-system virtualization."
    ],
    "page": 27,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-09",
    "chapter": 2,
    "topic": "Virtual-compute utilization",
    "difficulty": "hard",
    "style": "fundamental",
    "prompt": "A reviewer must reject claims that misstate Virtual-compute utilization. Which interpretation is supported by the lecture?",
    "options": [
      "With virtualization, a layer is inserted between hardware and the operating system; it converts portions of real hardware into virtual hardware for guests.",
      "Virtual compute can reduce idle physical CPU time because a hypervisor can create virtual CPUs and schedule workloads to use physical processors more fully.",
      "The lecture describes specialized storage arrays providing virtual disks to multiple servers over a high-speed storage network, following the use of RAID to combine disks.",
      "A hypervisor creates virtual CPUs in software and presents them to guest systems for their use."
    ],
    "answer": 1,
    "why": "The lecture says virtual CPUs can help extract more performance from physical CPUs that might otherwise be idle.",
    "optionWhy": [
      "This describes Virtualization layer (Chapter 2, PDF page 32), rather than Virtual-compute utilization.",
      "The lecture says virtual CPUs can help extract more performance from physical CPUs that might otherwise be idle.",
      "This describes Virtual storage arrays (Chapter 2, PDF page 30), rather than Virtual-compute utilization.",
      "This describes Virtual compute (Chapter 2, PDF page 28), rather than Virtual-compute utilization."
    ],
    "page": 29,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-10",
    "chapter": 2,
    "topic": "Virtual storage arrays",
    "difficulty": "hard",
    "style": "applied",
    "prompt": "Several servers need virtual disks from a shared high-speed storage array. Which statement about Virtual storage arrays best applies the lecture's explanation?",
    "options": [
      "A hypervisor creates virtual CPUs in software and presents them to guest systems for their use.",
      "Virtual compute can reduce idle physical CPU time because a hypervisor can create virtual CPUs and schedule workloads to use physical processors more fully.",
      "The lecture describes specialized storage arrays providing virtual disks to multiple servers over a high-speed storage network, following the use of RAID to combine disks.",
      "With virtualization, a layer is inserted between hardware and the operating system; it converts portions of real hardware into virtual hardware for guests."
    ],
    "answer": 2,
    "why": "The notes describe storage moving from server-local disks and RAID to larger arrays that provide virtual disks over a storage network.",
    "optionWhy": [
      "This describes Virtual compute (Chapter 2, PDF page 28), rather than Virtual storage arrays.",
      "This describes Virtual-compute utilization (Chapter 2, PDF page 29), rather than Virtual storage arrays.",
      "The notes describe storage moving from server-local disks and RAID to larger arrays that provide virtual disks over a storage network.",
      "This describes Virtualization layer (Chapter 2, PDF page 32), rather than Virtual storage arrays."
    ],
    "page": 30,
    "sourceType": "course"
  },
  {
    "id": "c2-extra-h-12",
    "chapter": 2,
    "topic": "Xen architecture",
    "difficulty": "hard",
    "style": "fundamental",
    "prompt": "A reviewer must reject claims that misstate Xen architecture. Which interpretation is supported by the lecture?",
    "options": [
      "In the lecture's CPU virtualization model, privileged instructions trap while non-critical instructions execute identically; the VMM can intercept trapping events.",
      "Domain 0 is Xen's privileged guest OS; it accesses hardware, manages devices, and allocates or maps hardware resources for guest domains.",
      "The lecture describes Xen as an open-source micro-kernel hypervisor that separates policy from mechanism and relies on Domain 0 for management tasks.",
      "Application virtualization lets a user access an application from a different computer than the one where it is installed; a server can deliver the application to a local workstation over the Internet."
    ],
    "answer": 2,
    "why": "The notes distinguish Xen's mechanisms from policies handled by Domain 0.",
    "optionWhy": [
      "This describes CPU virtualization (Chapter 2, PDF page 40), rather than Xen architecture.",
      "This describes Xen Domain 0 (Chapter 2, PDF page 36), rather than Xen architecture.",
      "The notes distinguish Xen's mechanisms from policies handled by Domain 0.",
      "This describes Application virtualization (Chapter 2, PDF page 21), rather than Xen architecture."
    ],
    "page": 34,
    "sourceType": "course"
  },
  {
    "id": "b1-jr-01",
    "chapter": 1,
    "topic": "NIST cloud characteristics",
    "difficulty": "easy",
    "style": "fundamental",
    "audience": "junior",
    "sourceType": "bonus",
    "prompt": "In NIST’s cloud definition, what does on-demand self-service let a consumer do?",
    "options": [
      "Provision computing capabilities as needed without provider staff interaction",
      "Use only resources scheduled by provider staff",
      "Avoid measuring resource use",
      "Run cloud resources only on private hardware"
    ],
    "answer": 0,
    "why": "Consumers can provision capabilities automatically when needed, without requiring human interaction with each provider.",
    "sourceUrl": "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf",
    "sourceLabel": "NIST SP 800-145"
  },
  {
    "id": "b1-jr-02",
    "chapter": 1,
    "topic": "NIST cloud characteristics",
    "difficulty": "easy",
    "style": "applied",
    "audience": "junior",
    "sourceType": "bonus",
    "prompt": "A cloud customer can rapidly add resources during a busy period and release them later. Which NIST characteristic does this illustrate?",
    "options": [
      "Rapid elasticity",
      "Broad network access",
      "Measured service",
      "Resource pooling"
    ],
    "answer": 0,
    "why": "Rapid elasticity means capabilities can be provisioned and released rapidly to match demand.",
    "sourceUrl": "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf",
    "sourceLabel": "NIST SP 800-145"
  },
  {
    "id": "b1-sr-01",
    "chapter": 1,
    "topic": "NIST cloud characteristics",
    "difficulty": "hard",
    "style": "scenario",
    "audience": "senior",
    "sourceType": "bonus",
    "prompt": "A platform reports each tenant’s use of storage and processing, then uses those measurements to control and report consumption. Which cloud characteristic is most directly demonstrated?",
    "options": [
      "Measured service",
      "Broad network access",
      "On-demand self-service",
      "Rapid elasticity"
    ],
    "answer": 0,
    "why": "Measured service monitors, controls, and reports resource use, providing transparency for both provider and consumer.",
    "sourceUrl": "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf",
    "sourceLabel": "NIST SP 800-145"
  },
  {
    "id": "b1-sr-02",
    "chapter": 1,
    "topic": "NIST deployment models",
    "difficulty": "medium",
    "style": "applied",
    "audience": "senior",
    "sourceType": "bonus",
    "prompt": "An infrastructure is provisioned for the exclusive use of one organization, though it may be owned or operated by a third party. Which NIST deployment model fits?",
    "options": [
      "Private cloud",
      "Public cloud",
      "Community cloud",
      "Hybrid cloud"
    ],
    "answer": 0,
    "why": "A private cloud is provisioned for exclusive use by a single organization; ownership and location can vary.",
    "sourceUrl": "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf",
    "sourceLabel": "NIST SP 800-145"
  },
  {
    "id": "b1-int-01",
    "chapter": 1,
    "topic": "NIST service models",
    "difficulty": "medium",
    "style": "fundamental",
    "audience": "interview",
    "sourceType": "bonus",
    "prompt": "In the NIST service models, which model gives a consumer the ability to deploy applications while the provider manages the underlying infrastructure?",
    "options": [
      "Platform as a Service (PaaS)",
      "Infrastructure as a Service (IaaS)",
      "Software as a Service (SaaS)",
      "Private cloud"
    ],
    "answer": 0,
    "why": "PaaS lets consumers deploy applications using provider-supported tools while the provider manages the underlying cloud infrastructure.",
    "sourceUrl": "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf",
    "sourceLabel": "NIST SP 800-145"
  },
  {
    "id": "b1-int-02",
    "chapter": 1,
    "topic": "NIST cloud characteristics",
    "difficulty": "hard",
    "style": "scenario",
    "audience": "interview",
    "sourceType": "bonus",
    "prompt": "An interviewer asks for the complete NIST set of essential cloud characteristics. Which answer is correct?",
    "options": [
      "On-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service",
      "Virtualization, multitenancy, encryption, backups, and containers",
      "Public access, fixed capacity, manual provisioning, and monthly billing",
      "IaaS, PaaS, SaaS, and private cloud"
    ],
    "answer": 0,
    "why": "NIST identifies five essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.",
    "sourceUrl": "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf",
    "sourceLabel": "NIST SP 800-145"
  },
  {
    "id": "b2-jr-01",
    "chapter": 2,
    "topic": "Amazon S3 objects",
    "difficulty": "easy",
    "style": "fundamental",
    "audience": "junior",
    "sourceType": "bonus",
    "prompt": "In Amazon S3, where are objects stored?",
    "options": [
      "In buckets",
      "In hypervisor memory",
      "Only on an EC2 instance store volume",
      "In an IAM policy"
    ],
    "answer": 0,
    "why": "Amazon S3 stores objects in buckets; an object includes a key and its content.",
    "sourceUrl": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingObjects.html",
    "sourceLabel": "Amazon S3: Objects overview"
  },
  {
    "id": "b2-jr-02",
    "chapter": 2,
    "topic": "EC2 Auto Scaling",
    "difficulty": "easy",
    "style": "applied",
    "audience": "junior",
    "sourceType": "bonus",
    "prompt": "An EC2 Auto Scaling group is configured with a desired capacity. What does this value represent?",
    "options": [
      "The group's target number of instances",
      "The maximum size of an EBS snapshot",
      "The number of buckets an account may create",
      "The number of availability zones in a region"
    ],
    "answer": 0,
    "why": "Desired capacity is the target number of instances that the Auto Scaling group attempts to maintain, within its configured limits.",
    "sourceUrl": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
    "sourceLabel": "Amazon EC2 Auto Scaling user guide"
  },
  {
    "id": "b2-sr-01",
    "chapter": 2,
    "topic": "EC2 instance store",
    "difficulty": "hard",
    "style": "scenario",
    "audience": "senior",
    "sourceType": "bonus",
    "prompt": "An application writes its only copy of important data to an EC2 instance store volume. What happens to that data if the instance is stopped?",
    "options": [
      "It is lost; instance store data does not persist through a stop",
      "It is copied automatically to an EBS snapshot",
      "It moves with the instance to a new host",
      "It remains available in the instance RAM"
    ],
    "answer": 0,
    "why": "Instance store is temporary storage. Its data does not persist when the instance is stopped, hibernated, or terminated.",
    "sourceUrl": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-lifetime.html",
    "sourceLabel": "EC2: Instance store data persistence"
  },
  {
    "id": "b2-sr-02",
    "chapter": 2,
    "topic": "EBS snapshots",
    "difficulty": "medium",
    "style": "fundamental",
    "audience": "senior",
    "sourceType": "bonus",
    "prompt": "How does Amazon EBS describe snapshots after the first snapshot of a volume?",
    "options": [
      "They are incremental and store only blocks changed since the previous snapshot",
      "They are complete copies of every block each time",
      "They exist only while the EC2 instance is running",
      "They automatically encrypt every attached volume with a customer key"
    ],
    "answer": 0,
    "why": "EBS snapshots are incremental: subsequent snapshots save only blocks changed since the latest snapshot.",
    "sourceUrl": "https://docs.aws.amazon.com/ebs/latest/userguide/EBSFeatures.html",
    "sourceLabel": "Amazon EBS features"
  },
  {
    "id": "b2-int-01",
    "chapter": 2,
    "topic": "AWS shared responsibility",
    "difficulty": "medium",
    "style": "fundamental",
    "audience": "interview",
    "sourceType": "bonus",
    "prompt": "Under AWS’s shared responsibility model, who is responsible for security in the cloud?",
    "options": [
      "The customer, for its data, identities, applications, and configuration",
      "AWS alone, including every customer application and access policy",
      "The internet service provider",
      "The hypervisor vendor selected by the customer"
    ],
    "answer": 0,
    "why": "AWS secures the cloud infrastructure; customers remain responsible for security choices for what they run and configure in the cloud.",
    "sourceUrl": "https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html",
    "sourceLabel": "AWS shared responsibility model"
  },
  {
    "id": "b2-int-02",
    "chapter": 2,
    "topic": "IAM least privilege",
    "difficulty": "hard",
    "style": "scenario",
    "audience": "interview",
    "sourceType": "bonus",
    "prompt": "A role needs permission to read objects from one application bucket. Which IAM policy approach best follows least privilege?",
    "options": [
      "Grant only the required read actions on that bucket’s objects",
      "Grant administrator access to every AWS service",
      "Use a wildcard for all actions and all resources",
      "Share the root user credentials with the application"
    ],
    "answer": 0,
    "why": "Least privilege grants only the permissions required for a task, scoped to the needed resources where possible.",
    "sourceUrl": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html",
    "sourceLabel": "AWS IAM access policies"
  }
];
