// When a question is submitted, docCategories is used first to find the chunk of docContent most relates to the question
// Once the keywords are selected, that number is used append the resulting docContent string
export const docCategories = `
  0: ['mentor', 'mentorship'],
  1: ['CEO', 'welcome message', 'intro', 'mission', 'vision', 'value'],
  2: ['department list',
  'department heads',
  "Sales and Marketing,
    Product Development,
    Operations and Logistics,
    Finance and Accounting,
    Human Resources,
    Customer Support",
  'handbook topics'],
  3: ['code of conduct', 'office hours', 'dress code', 'complaint'],
  4: ['benefits',  'insurance',  'compensation',  'retirement', 'workspace', 'tools and software', 'security guidelines', 'company culture', 'personal growth'],
  5: ['founded', 'founder', 'Company History', 'performance evaluation', 'engagement initiatives']`


export const docContent = [
  `
    # Getting started checklist
    Below are the 6 main steps you'll go through as you experience your mentorship journey:

    ### 1. Learn about the program
    Review [Session 1: Program Info + Tips] of the [Mentorship onboarding] series for an overview of the program and to assess your readiness to join the next cohort.

    ### 2. Talk to your manager
    Your manager should be in the loop about your intention to participate in the program and what role you want to sign up for (mentor, mentee, or both). They are also a great person to help you identify strengths and opportunities for growth that you might want to focus on through mentorship.

    ### 3. Register
    Registration for the next cohort will be open during the window indicated in the [Peer Mentorship Program Dates]

    ***New participants:*** If you have not yet participated in mentorship using the Together platform, please carve out 10-15 minutes to register [here] You can check out a preview of the registration questionnaire in [Session 1: Program Info + Tips]

    ***Existing participants:*** If you have participated in a program using Together, you will still need to [register] to participate in this specific cohort. That said, your profile should be pre-populated based on your previous answers.

    🚀 Registration for the Q1-2023 cohort is now closed. We'll launch a new cohort in Q2/Q3! Look for an announcement in 

    ### 4. Get paired up
    When registration closes, the system will crunch all the registration data and spit out a list of proposed mentors to all mentees. Mentees are welcome to look beyond this list and browse all available mentors. Mentees will submit their preferences and wait for a match. As preferences are submitted, mentors will begin to receive pairing requests from mentees. Mentors will then confirm who they would like to be paired with.  Confirmed pairs will be notified by email.

    ### 5. Participate in mentorship
    The pairing process will conclude on the date identified in the [Peer Mentorship Program Dates], at which point everyone is welcome to start booking their sessions. You'll receive prompts via email from Together with excellent tips on how to prepare for your sessions as well as ideas on formats you might want to adopt for your sessions. We've also conveniently grouped these here for your reference under [Mentorship Sessions Structure and Formats]

    ### 6. Wrap up and do it all again!
    Pairs will wrap up after about three months. We hope to see you in the next cohort! 🤩

    # Mentorship onboarding
    Some (previously) live sessions have been converted to recordings where possible to make them accessible to more ABCers on their own time. Other sessions have been converted to Slack guidance which will be pushed to the [#peer-mentorship-program] channel when relevant. Be sure to join us there!

    [Mentorship onboarding workshops]

    # Mentorship Sessions Structure and Formats
    Not sure how to approach each session? See our guidance below for guidance on specific formats that work especially well for each of your mentorship sessions. We're assuming a 3-month journey during which you'll meet every other week, for a total of 6 sessions.

    [Session 1: Get to Know Each Other]
    [Session 2: Setting Goals]
    [Sessions 3, 4, 5: Ongoing Sessions]
    [Session 6: Wrap Up + Next Steps]
  `,
  `
    Welcome to ABC Corporation!

    Message from the CEO

    Dear [New Employee],

    On behalf of the entire ABC Corporation team, I am thrilled to welcome you to our family. We are excited to have you on board and look forward to your contributions as we work towards achieving our mission and vision.

    Sincerely,
    Emma Thompson
    CEO, ABC Corporation

    Company Overview

    Mission
    At ABC Corporation, our mission is to empower individuals and businesses through innovative technology solutions, enabling them to reach their full potential.

    Vision
    We envision a world where technology simplifies and enhances lives, creating meaningful impact and lasting value for our customers.

    Values

    Customer-Centricity: Putting our customers at the heart of everything we do.
    Innovation: Embracing creativity and continuous improvement.
    Integrity: Upholding honesty, transparency, and ethical behavior.
    Teamwork: Collaborating and supporting one another to achieve common goals.
    Organizational Structure
  `,
  `
    ABC Corporation is organized into several departments, each playing a vital role in our success:

    Sales and Marketing - Department Head: Alex Turner
    Product Development - Department Head: Sarah Johnson
    Operations and Logistics - Department Head: Michael Chen
    Finance and Accounting - Department Head: Emily White
    Human Resources - Department Head: Jessica Ramirez
    Customer Support - Department Head: David Lee
    CEO - Emma Thompson

    Our Employee Handbook is a comprehensive guide that outlines company policies and procedures, covering topics such as:

    Code of Conduct
    Work Hours and Attendance
    Dress Code
    Use of Company Resources (including technology and facilities)
    Confidentiality and Data Security
    Anti-Harassment and Discrimination Policies
    Time Off and Leave Policies
    Performance Expectations
    Grievance and Complaint Procedures
    Benefits and Compensation
  `,
  `
    Code of Conduct

    Be respectful and professional in all interactions with colleagues and clients.
    Avoid conflicts of interest and disclose any potential conflicts promptly.
    Maintain confidentiality of sensitive company information.
    Work Hours and Attendance
    
    Office hours are from 9:00 AM to 5:00 PM, Monday to Friday.
    Employees are expected to adhere to the attendance policy and inform their supervisor in case of any planned absence.
    Dress Code
    
    Business casual attire is expected during regular workdays.
    Casual dress is permitted on Fridays.
    Use of Company Resources (including technology and facilities)
    
    Company resources, including computers and software, should be used for work-related purposes only.
    Avoid downloading or installing unauthorized software on company devices.
    Confidentiality and Data Security
    
    Employees must sign a Non-Disclosure Agreement (NDA) to protect sensitive company information.
    Data should not be shared with unauthorized individuals or stored on personal devices.
    Anti-Harassment and Discrimination Policies
    
    XYZ Corporation maintains a zero-tolerance policy for harassment and discrimination.
    Employees are encouraged to report any incidents to HR for investigation.
    Time Off and Leave Policies
    
    Employees are entitled to 15 days of paid vacation leave per year.
    Additional leave, such as sick leave and parental leave, is provided based on applicable laws and company policies.
    Performance Expectations
    
    Employees will have quarterly performance reviews with their managers to discuss progress and set goals.
    Continuous improvement and meeting performance targets are expected.
    Grievance and Complaint Procedures
    
    If an employee has a complaint or grievance, they can follow the company's formal complaint procedure.
    All complaints will be treated confidentially and resolved promptly.

  `,
  `
    Benefits and Compensation
    
    Competitive salary packages based on experience and performance.
    Comprehensive health insurance coverage for employees and their families.
    Retirement savings plan (401(k)) with company matching.
    Employee wellness programs and various additional perks.

    As an ABC Corporation employee, you are entitled to a range of benefits and compensation packages, including:

    Competitive Salary
    Health Insurance (Medical, Dental, and Vision)
    Retirement Savings Plan (401(k), RRSP) 
    Paid Time Off (Vacation, Sick Leave, and Holidays)
    Flexible Work Hours
    Employee Wellness Program
    Professional Development Opportunities
    Employee Discounts and Perks
    Workspace and Facilities

    Your designated workspace is located on the [Floor Number] of our modern and spacious office building. Amenities include:

    Ergonomic Furniture
    High-Speed Internet Access
    Fully-Equipped Kitchen and Cafeteria
    Relaxation Areas and Game Rooms
    On-Site Gym and Fitness Classes
    Technology and Tools

    To support your work, we provide access to cutting-edge tools and software, including:

    Microsoft Office Suite
    Slack for Team Communication
    CRM (Customer Relationship Management) System
    Project Management Tools
    Internal Knowledge Base
    Security and IT Policies

    We take data security seriously at ABC Corporation. Please adhere to the following security guidelines:

    Use Strong Passwords and Enable Multi-Factor Authentication
    Do Not Share Sensitive Information via Unsecured Channels
    Regularly Update and Patch Software
    Report Any Security Concerns to IT Support Immediately
    Training and Development

    We value your growth and development. You will have access to various training programs and resources, such as:

    New Employee Orientation
    On-the-Job Training
    Leadership Development Workshops
    Online Learning Platforms
    Company Culture

    Our company culture is inclusive, supportive, and collaborative. We encourage open communication, teamwork, and celebrating each other's successes. Monthly team-building events and employee recognition programs foster a positive work environment.

    Key Contacts

    For any questions or assistance, reach out to the following key contacts:

    Manager: Mark Williams
    HR Representative: Jennifer Brown
    IT Support: TechSupport@abccorporation.com

  `,
  `

    Company History

    ABC Corporation was founded in 2001 by Wiley Bobchuk. Over the years, we have grown into a global leader in the technology industry, serving millions of customers worldwide. We have received numerous awards for our innovative products and commitment to excellence.

    Performance Evaluation

    Performance evaluations are conducted annually to assess your progress and growth. Your manager will provide feedback and set goals to help you succeed in your role.

    Employee Engagement Initiatives

    We believe in fostering a positive work culture and regularly organize employee engagement initiatives, such as:

    Quarterly Town Hall Meetings
    Volunteer Opportunities
    Team Building Activities
    Celebrating Employee Milestones
    Social and Diversity Initiatives

    At ABC Corporation, we are committed to diversity and inclusion. We support social initiatives and give back to the community through partnerships with local charities.
  `
]


// export const docContent = {

//   mentorship1: `
//     # Getting started checklist
//     Below are the 6 main steps you'll go through as you experience your mentorship journey:

//     ### 1. Learn about the program
//     Review [Session 1: Program Info + Tips] of the [Mentorship onboarding] series for an overview of the program and to assess your readiness to join the next cohort.

//     ### 2. Talk to your manager
//     Your manager should be in the loop about your intention to participate in the program and what role you want to sign up for (mentor, mentee, or both). They are also a great person to help you identify strengths and opportunities for growth that you might want to focus on through mentorship.

//     ### 3. Register
//     Registration for the next cohort will be open during the window indicated in the [Peer Mentorship Program Dates]

//     ***New participants:*** If you have not yet participated in mentorship using the Together platform, please carve out 10-15 minutes to register [here] You can check out a preview of the registration questionnaire in [Session 1: Program Info + Tips]

//     ***Existing participants:*** If you have participated in a program using Together, you will still need to [register] to participate in this specific cohort. That said, your profile should be pre-populated based on your previous answers.

//     🚀 Registration for the Q1-2023 cohort is now closed. We'll launch a new cohort in Q2/Q3! Look for an announcement in 

//     ### 4. Get paired up
//     When registration closes, the system will crunch all the registration data and spit out a list of proposed mentors to all mentees. Mentees are welcome to look beyond this list and browse all available mentors. Mentees will submit their preferences and wait for a match. As preferences are submitted, mentors will begin to receive pairing requests from mentees. Mentors will then confirm who they would like to be paired with.  Confirmed pairs will be notified by email.

//     ### 5. Participate in mentorship
//     The pairing process will conclude on the date identified in the [Peer Mentorship Program Dates], at which point everyone is welcome to start booking their sessions. You'll receive prompts via email from Together with excellent tips on how to prepare for your sessions as well as ideas on formats you might want to adopt for your sessions. We've also conveniently grouped these here for your reference under [Mentorship Sessions Structure and Formats]

//     ### 6. Wrap up and do it all again!
//     Pairs will wrap up after about three months. We hope to see you in the next cohort! 🤩

//     # Mentorship onboarding
//     Some (previously) live sessions have been converted to recordings where possible to make them accessible to more ABCers on their own time. Other sessions have been converted to Slack guidance which will be pushed to the [#peer-mentorship-program] channel when relevant. Be sure to join us there!

//     [Mentorship onboarding workshops]

//     # Mentorship Sessions Structure and Formats
//     Not sure how to approach each session? See our guidance below for guidance on specific formats that work especially well for each of your mentorship sessions. We're assuming a 3-month journey during which you'll meet every other week, for a total of 6 sessions.

//     [Session 1: Get to Know Each Other]
//     [Session 2: Setting Goals]
//     [Sessions 3, 4, 5: Ongoing Sessions]
//     [Session 6: Wrap Up + Next Steps]
//   `,
//   companyIntro2: `
//     Welcome to ABC Corporation!

//     Message from the CEO

//     Dear [New Employee],

//     On behalf of the entire ABC Corporation team, I am thrilled to welcome you to our family. We are excited to have you on board and look forward to your contributions as we work towards achieving our mission and vision.

//     Sincerely,
//     Emma Thompson
//     CEO, ABC Corporation

//     Company Overview

//     Mission
//     At ABC Corporation, our mission is to empower individuals and businesses through innovative technology solutions, enabling them to reach their full potential.

//     Vision
//     We envision a world where technology simplifies and enhances lives, creating meaningful impact and lasting value for our customers.

//     Values

//     Customer-Centricity: Putting our customers at the heart of everything we do.
//     Innovation: Embracing creativity and continuous improvement.
//     Integrity: Upholding honesty, transparency, and ethical behavior.
//     Teamwork: Collaborating and supporting one another to achieve common goals.
//     Organizational Structure
//   `,

//   deptHandbook3: `
//     ABC Corporation is organized into several departments, each playing a vital role in our success:

//     Sales and Marketing - Department Head: Alex Turner
//     Product Development - Department Head: Sarah Johnson
//     Operations and Logistics - Department Head: Michael Chen
//     Finance and Accounting - Department Head: Emily White
//     Human Resources - Department Head: Jessica Ramirez
//     Customer Support - Department Head: David Lee
//     CEO - Emma Thompson

//     Our Employee Handbook is a comprehensive guide that outlines company policies and procedures, covering topics such as:

//     Code of Conduct
//     Work Hours and Attendance
//     Dress Code
//     Use of Company Resources (including technology and facilities)
//     Confidentiality and Data Security
//     Anti-Harassment and Discrimination Policies
//     Time Off and Leave Policies
//     Performance Expectations
//     Grievance and Complaint Procedures
//     Benefits and Compensation
//   `,
//   codeOfConduct4: `

//     Code of Conduct

//     Be respectful and professional in all interactions with colleagues and clients.
//     Avoid conflicts of interest and disclose any potential conflicts promptly.
//     Maintain confidentiality of sensitive company information.
//     Work Hours and Attendance
    
//     Office hours are from 9:00 AM to 5:00 PM, Monday to Friday.
//     Employees are expected to adhere to the attendance policy and inform their supervisor in case of any planned absence.
//     Dress Code
    
//     Business casual attire is expected during regular workdays.
//     Casual dress is permitted on Fridays.
//     Use of Company Resources (including technology and facilities)
    
//     Company resources, including computers and software, should be used for work-related purposes only.
//     Avoid downloading or installing unauthorized software on company devices.
//     Confidentiality and Data Security
    
//     Employees must sign a Non-Disclosure Agreement (NDA) to protect sensitive company information.
//     Data should not be shared with unauthorized individuals or stored on personal devices.
//     Anti-Harassment and Discrimination Policies
    
//     XYZ Corporation maintains a zero-tolerance policy for harassment and discrimination.
//     Employees are encouraged to report any incidents to HR for investigation.
//     Time Off and Leave Policies
    
//     Employees are entitled to 15 days of paid vacation leave per year.
//     Additional leave, such as sick leave and parental leave, is provided based on applicable laws and company policies.
//     Performance Expectations
    
//     Employees will have quarterly performance reviews with their managers to discuss progress and set goals.
//     Continuous improvement and meeting performance targets are expected.
//     Grievance and Complaint Procedures
    
//     If an employee has a complaint or grievance, they can follow the company's formal complaint procedure.
//     All complaints will be treated confidentially and resolved promptly.

//   `,

//   empBenefits5: `
//     Benefits and Compensation
    
//     Competitive salary packages based on experience and performance.
//     Comprehensive health insurance coverage for employees and their families.
//     Retirement savings plan (401(k)) with company matching.
//     Employee wellness programs and various additional perks.

//     As an ABC Corporation employee, you are entitled to a range of benefits and compensation packages, including:

//     Competitive Salary
//     Health Insurance (Medical, Dental, and Vision)
//     Retirement Savings Plan (401(k), RRSP) 
//     Paid Time Off (Vacation, Sick Leave, and Holidays)
//     Flexible Work Hours
//     Employee Wellness Program
//     Professional Development Opportunities
//     Employee Discounts and Perks
//     Workspace and Facilities

//     Your designated workspace is located on the [Floor Number] of our modern and spacious office building. Amenities include:

//     Ergonomic Furniture
//     High-Speed Internet Access
//     Fully-Equipped Kitchen and Cafeteria
//     Relaxation Areas and Game Rooms
//     On-Site Gym and Fitness Classes
//     Technology and Tools

//     To support your work, we provide access to cutting-edge tools and software, including:

//     Microsoft Office Suite
//     Slack for Team Communication
//     CRM (Customer Relationship Management) System
//     Project Management Tools
//     Internal Knowledge Base
//     Security and IT Policies

//     We take data security seriously at ABC Corporation. Please adhere to the following security guidelines:

//     Use Strong Passwords and Enable Multi-Factor Authentication
//     Do Not Share Sensitive Information via Unsecured Channels
//     Regularly Update and Patch Software
//     Report Any Security Concerns to IT Support Immediately
//     Training and Development

//     We value your growth and development. You will have access to various training programs and resources, such as:

//     New Employee Orientation
//     On-the-Job Training
//     Leadership Development Workshops
//     Online Learning Platforms
//     Company Culture

//     Our company culture is inclusive, supportive, and collaborative. We encourage open communication, teamwork, and celebrating each other's successes. Monthly team-building events and employee recognition programs foster a positive work environment.

//     Key Contacts

//     For any questions or assistance, reach out to the following key contacts:

//     Manager: Mark Williams
//     HR Representative: Jennifer Brown
//     IT Support: TechSupport@abccorporation.com

//   `,
//   histEvalActivities6: `

//     Company History

//     ABC Corporation was founded in 2001 by Wiley Bobchuk. Over the years, we have grown into a global leader in the technology industry, serving millions of customers worldwide. We have received numerous awards for our innovative products and commitment to excellence.

//     Performance Evaluation

//     Performance evaluations are conducted annually to assess your progress and growth. Your manager will provide feedback and set goals to help you succeed in your role.

//     Employee Engagement Initiatives

//     We believe in fostering a positive work culture and regularly organize employee engagement initiatives, such as:

//     Quarterly Town Hall Meetings
//     Volunteer Opportunities
//     Team Building Activities
//     Celebrating Employee Milestones
//     Social and Diversity Initiatives

//     At ABC Corporation, we are committed to diversity and inclusion. We support social initiatives and give back to the community through partnerships with local charities.
//   `
// }

