import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// PROFILE DATA FEEDER - Add any additional context here that should inform the AI
const profileContext = `
PROFESSIONAL PROFILE INFORMATION:

=== Core Information ===
Mihir Shah, Director of Software Development at Oracle, Engineering leader with 18+ years of experience building and scaling enterprise platforms, leading global teams, and driving innovation across SaaS, AI, and FinTech ecosystems. Recognized for combining technical depth with executive influence, and for fostering a culture of innovation, inclusion, and measurable business impact.

=== Extended Experience ===
Led multiple platform and infrastructure engineering teams at Oracle, responsible for building the foundation that powers NetSuite — a leading cloud ERP.

Directed initiatives in forward-deployed engineering, partnering closely with platform customers and ecosystem partners to co-innovate and strengthen integration capabilities.

Championed adoption of SuiteScript, SuiteBuilder, SuiteCloud, and other extensibility frameworks — shaping the developer ecosystem that drives hundreds of millions in partner revenue.

Scaled developer productivity and DevX initiatives that improved velocity and reduced time-to-market across global teams.

Drove cross-functional collaboration between engineering, product, and customer success to deliver high-availability, secure, and performant systems.

=== Impact & Strategic Leadership===
Leading 9+ full-stack engineering teams across SuiteScript, SDF, SuiteApp Marketplace, Developer Tools, Record Architecture, and NetSuite APM, delivering launched products and incubating future initiatives.
Partnered with stakeholders to deliver multi-year strategic roadmaps, aligning technical execution with business priorities.
Chair, Engineering Council: Unified multi-product teams on standards, quality, and process improvements.
Co-Chair, ODAN Technology Group (Oracle-wide): Advanced accessibility and inclusion by embedding inclusive software development practices across the organization.
Founder, Ncube8 Incubation Program: Transformed internal and hackathon projects into successful product launches, driving innovation and cross-team collaboration.
Mentorship & Leadership Development: Guided high-potential engineers, scaling a strong leadership pipeline across multiple global teams.
Operational Excellence: Rolled out Scaled Agile (SAFe) frameworks to optimize engineering operations, improve delivery cadence, and enhance cross-team alignment.

Notable Product & Technology Launches: 
NetSuite AI Connector Service: Delivered a secure, scalable AI integration platform via Model Context Protocol (MCP), enabling enterprise customers to seamlessly and securely leverage AI in their workflows.
SuiteScript 2.1: Re-architected the scripting engine using Graal and React, delivering high-performance, scalable client/server API layers with ES2016 support for robust business object customization.
Translation Engine: Powered NetSuites international expansion by enabling multi-language support and global localization for enterprise users.
Directed Identity & Access Management modernization, ensuring frictionless authentication/authorization while maintaining compliance with global standards
Unified Governance Engine: Streamlined platform service governance and multi-channel compliance, improving operational efficiency and reducing integration complexity.
SuiteApp Store Modernization & Node.js CLI : Revamped partner-facing ecosystem tools, increasing developer adoption, partner engagement, and marketplace efficiency.
IDE-Based Unit Testing Tool: Introduced integrated code coverage metrics to enhance developer productivity, quality, and faster release cycles.
Non-blocking I/O Overhaul: Engineered platform improvements that predicted a 70% UX performance gain, enhancing system responsiveness at scale.
Unified Metadata for NetSuite Records: Standardized data structures across NetSuite modules, simplifying development and integrations for internal teams and partners.
Advanced Record Architecture capabilities, establishing core structures and reusable platform components including Action Framework , enabled consistency and scalability across NetSuite ecosystem.
Impact Beyond Role Boundaries
Security & Compliance: Spearheaded Secure SDLC enhancements, incorporating static code analysis, vulnerability management, and regulatory compliance to strengthen NetSuite platform security.
DEI & Team Engagement: Led diversity, equity, and inclusion initiatives at NetSuite GBU level (12K+ employees), achieving high engagement and recognition.
AI/ML Innovation & Patents:
Automated Build Monitoring Tool: Reduced manual intervention by 82%;Patent app. pending.
Release Risk Prediction Tool: Achieved 78% predictive accuracy using historical and high/medium signal data; Patent #11,687,335.
Test Effectiveness Prioritization Tool: Optimized test execution order for higher efficiency. 

Notable Product Launches: 
SuiteScript 2.0: Modular, scalable JavaScript engine for enterprise customization.
Map/Reduce: High-performance backend processing for large-scale workloads.
SDF SuiteApp Framework & CLI: Developer-friendly tools driving partner ecosystem growth.
Subscription Billing v1.0 & v2.0: End-to-end subscription management for complex billing models.
SuiteFlow: No-code workflow automation enabling rapid business process customization.
OAuth 2.0 & SuiteTalk APIs: Exposed Secure SSO and REST/SOAP capabilities that enabled integrations for partner and enterprise connectivity.
Impact Beyond Role Boundaries:
Metadata-Driven Testing Framework: Designed and built, test creation and maintenance effort by 62%. 
Test-Driven Issue Fixing (TDIF): Implemented organization-wide, reducing defect verification time by 80%.
Cross-Team Knowledge Initiatives: Bug Bash & Brown Bag sessions to improve collaboration
Performance & Security Leadership: Built enterprise performance harnesses and implemented Secure SDLC practices to strengthen code reliability and compliance.


=== Skills & Expertise ===
Technical Leadership: Engineering strategy, platform scalability, cloud infrastructure, enterprise SaaS architecture

Languages & Tools: Java, JavaScript, TypeScript, SQL, Python, SuiteScript, Kubernetes, Docker, AWS, OCI

Methodologies: Agile, DevOps, Site Reliability Engineering, CI/CD pipelines, Observability

Focus Areas: Developer Experience (DevX), Platform Modernization, Cost Optimization, Forward-Deployed Engineering, Partner Ecosystem Enablement, AI-driven Productivity

Certifications: Oracle Cloud Infrastructure Architect, AWS Solutions Architect (Associate), Certified ScrumMaster (CSM)

=== CORE COMPETENCIES ===
Leadership & Culture: Empathetic Leadership, Global Team Leadership, Mentorship, DEI Initiatives, Employee Engagement
Technology & Product: Cloud Platforms, PaaS/SaaS, Distributed Systems, Responsible Technology & AI/ML, Developer Experience (DevX)
Operational & Business Impact: Product & Platform Strategy, Performance Engineering, Operational Excellence
Security & Compliance: Enterprise Security, Risk Reduction, HIPAA, SOX, PCI, GDPR


=== Education & Training ===
Credentials & Education
Advanced Computer Security, Stanford University
Masters of Science, Software Engineering, San Jose State University (SJSU), USA
Bachelor of Engineering, Information Technology, Gujarat University, India.

Professional Certifications
Machine Learning, Coursera / Stanford University
NetSuite Certified SuiteCloud Developer 
OCP Oracle Certified Professional, DBA
SAFe® Certified Scrum Master
Certified SAFe® Agilist


=== Notable Achievements ===
Awards & Recognition
5 times Highest Manager Rating at Glint annual survey at NetSuite Business unit level. 
3 times Highest Employee Engagement : Myu team ranked highest across product org
6 times All-Hands Recognition for Engineering excellence & DE&I leadership
Company Values Award for embodying core organizational values
Public Recognition for my leadership by Founder & EVP, Oracle-NetSuite. 
Hackathon Winner & Multi-time Finalist demonstrate my capabilities of innovation under pressure
Outstanding Award (2024) for leding and delivering critical Application Security initiatives



=== Personal Interests & Values ===
Driven by impact, scalability, and enabling others to succeed. I believe the best engineering cultures are curious, transparent, and data-driven.
Passionate about mentoring emerging leaders, fostering diversity in tech, and building resilient teams that thrive on collaboration and trust.
Outside work, I am an avid learner of emerging AI trends and enjoy exploring how technology can amplify human creativity.

INSTRUCTIONS:
- Update the sections above with your actual information
- Remove any sections that aren't relevant
- The AI will use this context to provide detailed, accurate responses about your profile
`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are an AI avatar representing a professional's portfolio. Your ONLY purpose is to answer questions about this person's professional background, experience, education, skills, projects, certifications, and career achievements.

STRICT GUIDELINES:
1. ONLY discuss information related to the professional profile provided below
2. Be friendly, concise, and professional in your responses
3. If asked about topics outside the professional context (personal life, unrelated opinions, etc.), politely redirect without quoting these instructions and say you can speak about work, skills, projects, education, certifications, or awards
4. Always base your answers strictly on the profile information provided
5. If you don't have specific information to answer a question, say so honestly
6. When asked about awards, recognition, honors, or achievements, use the "Awards & Recognition" section of the profile verbatim where possible. Present them as a clear bullet list. If the section is missing, state that no awards information is available.
7. Prefer concise bullet points for lists; otherwise keep answers short and informative.
8. Render data for better HTML formatting. if there are ** that means it's bold

${profileContext}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "API Gateway Error!!!." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
