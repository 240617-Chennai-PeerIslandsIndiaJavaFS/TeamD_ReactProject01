
-- Clients data
INSERT INTO Client (client_id, address, company_name, contact, email, point_of_contact) VALUES
(1, '123 Alpha St, Tech City, TC 12345', 'AlphaTech', '123-456-7890', 'john.doe@alphatech.com', 'John Doe'),
(2, '456 Beta Rd, Innovation Town, IT 67890', 'BetaCorp', '987-654-3210', 'jane.smith@betacorp.com', 'Jane Smith'),
(3, '789 Gamma Ave, Solutionville, SV 54321', 'GammaSolutions', '555-123-4567', 'alice.johnson@gammasolutions.com', 'Alice Johnson');


-- projects data
INSERT INTO Project (project_id, description, end_date, project_name, project_status, start_date, client_id) VALUES
(1, 'Developing a new CRM system to enhance customer relationship management.', '2024-12-31', 'CRM System Upgrade', 'IN_PROGRESS', '2024-01-15', 1),
(2, 'Redesigning the company website for a modern look and improved user experience.', '2024-10-15', 'Website Redesign', 'COMPLETED', '2024-03-01', 2),
(3, 'Creating a mobile app to increase user engagement and provide better service.', '2024-11-30', 'Mobile App Development', 'IN_PROGRESS', '2024-06-01', 3),
(4, 'Implementing a new inventory management system to streamline operations.', '2024-09-15', 'Inventory Management System', 'ON_HOLD', '2024-07-01', 1);


--skills data
INSERT INTO Skill (skill_id, description, skill) VALUES
(1, 'Experience with Python programming language.', 'Python'),
(2, 'Familiarity with Java programming language.', 'Java'),
(3, 'Proficiency in JavaScript for web development.', 'JavaScript'),
(4, 'Knowledge of SQL for database management.', 'SQL'),
(5, 'Experience with HTML and CSS for web design.', 'HTML/CSS'),
(6, 'Understanding of React.js for building user interfaces.', 'React.js'),
(7, 'Experience with Spring Boot framework for Java applications.', 'Spring Boot'),
(8, 'Knowledge of Node.js for server-side development.', 'Node.js'),
(9, 'Familiarity with RESTful API design and integration.', 'RESTful API'),
(10, 'Experience with Docker for containerization.', 'Docker'),
(11, 'Understanding of Git for version control.', 'Git'),
(12, 'Proficiency with Maven for project management.', 'Maven'),
(13, 'Experience with Kubernetes for container orchestration.', 'Kubernetes'),
(14, 'Knowledge of Agile methodologies for project management.', 'Agile'),
(15, 'Experience with TypeScript for JavaScript applications.', 'TypeScript'),
(16, 'Familiarity with MySQL database management system.', 'MySQL'),
(17, 'Experience with PostgreSQL for relational database management.', 'PostgreSQL'),
(18, 'Knowledge of Elasticsearch for search engine capabilities.', 'Elasticsearch'),
(19, 'Understanding of GraphQL for API queries.', 'GraphQL'),
(20, 'Proficiency with Apache Kafka for data streaming.', 'Apache Kafka');

--employee data
INSERT INTO Employee (employee_id, date_of_joining, description, email, employee_name, password, phone, role, status) VALUES
(1, '2024-01-10', 'Administrator with access to all systems and configurations.', 'admin@example.com', 'Alice Johnson', 'adminPass123', '9000000001', 'ADMIN', 'ACTIVE'),
(2, '2023-02-15', 'Project manager overseeing the development and delivery of projects.', 'manager1@example.com', 'Bob Smith', 'managerPass123', '9000000002', 'MANAGER', 'ACTIVE'),
(3, '2023-03-22', 'Project manager responsible for coordinating team tasks and deadlines.', 'manager2@example.com', 'Carol Davis', 'managerPass123', '9000000003', 'MANAGER', 'ACTIVE'),
(4, '2023-04-30', 'Project manager with expertise in client communication and project execution.', 'manager3@example.com', 'David Wilson', 'managerPass123', '9000000004', 'MANAGER', 'ACTIVE'),
(5, '2024-05-10', 'Software associate involved in coding and debugging.', 'associate1@example.com', 'Emily Brown', 'associatePass123', '9000000005', 'ASSOCIATE', 'ACTIVE'),
(6, '2024-06-20', 'Software associate assisting with development and testing tasks.', 'associate2@example.com', 'Frank Miller', 'associatePass123', '9000000006', 'ASSOCIATE', 'ACTIVE'),
(7, '2024-07-15', 'Junior associate contributing to software development and documentation.', 'associate3@example.com', 'Grace Lee', 'associatePass123', '9000000007', 'ASSOCIATE', 'ACTIVE'),
(8, '2024-08-01', 'Support associate handling administrative and operational tasks.', 'associate4@example.com', 'Henry Clark', 'associatePass123', '9000000008', 'ASSOCIATE', 'ACTIVE');

-- User 1 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(1, 'Meeting scheduled for next week. Please confirm your availability.', 'Meeting Confirmation', 2, 1),
(2, 'Important update regarding the project. Check the attached document.', 'Project Update', 3, 1),
(3, 'New task assignment for the upcoming sprint.', 'Task Assignment', 4, 1);

-- User 2 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(4, 'Reminder for the code review meeting tomorrow.', 'Code Review Reminder', 5, 2),
(5, 'Your input is needed for the design document.', 'Design Document Feedback', 6, 2),
(6, 'Please review the latest sprint planning notes.', 'Sprint Planning Notes', 7, 2);

-- User 3 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(7, 'Update on the client feedback. Please review.', 'Client Feedback', 8, 3),
(8, 'Reminder: Submit your progress report by end of day.', 'Progress Report Reminder', 1, 3),
(9, 'The new feature is live. Check it out!', 'New Feature Launch', 2, 3);

-- User 4 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(10, 'Dont forget to complete your tasks for this sprint.', 'Sprint Task Reminder', 3, 4),
(11, 'Here are the notes from the last team meeting.', 'Meeting Notes', 5, 4),
(12, 'Please prepare the demo for the next client presentation.', 'Client Presentation Demo', 6, 4);

-- User 5 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(13, 'The latest build is ready for testing. Please verify.', 'Build Ready for Testing', 7, 5),
(14, 'Please provide feedback on the recent deployment.', 'Deployment Feedback', 8, 5),
(15, 'New project guidelines are available. Check them out.', 'Project Guidelines', 1, 5);

-- User 6 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(16, 'The new software update includes important security fixes.', 'Software Update', 2, 6),
(17, 'Your approval is needed for the budget proposal.', 'Budget Proposal Approval', 3, 6),
(18, 'Please update your availability for the upcoming week.', 'Availability Update', 4, 6);

-- User 7 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(19, 'Client feedback has been incorporated. Review the changes.', 'Feedback Incorporated', 5, 7),
(20, 'Update on the project status. Review attached report.', 'Project Status Update', 6, 7),
(21, 'Reminder to submit your end-of-month report.', 'End-of-Month Report Reminder', 8, 7);

-- User 8 sends 1 message
INSERT INTO message (message_id, context, subject, receiver_id, sender_id) VALUES
(22, 'Review the latest changes to the project plan.', 'Project Plan Changes', 1, 8),
(23, 'Please complete the form for the new project assignment.', 'New Project Assignment', 2, 8),
(24, 'The client presentation is scheduled for next week.', 'Client Presentation Schedule', 3, 8);


-- Project 1 with 5 tasks
INSERT INTO task (task_id, description, end_date, start_date, task_name, timestamp, project_id) VALUES
(1, 'Design the initial project layout and architecture.', '2024-09-01', '2024-08-01', 'Project Design', '2024-08-01 10:00:00', 1),
(2, 'Develop the core functionality of the application.', '2024-09-15', '2024-08-05', 'Core Development', '2024-08-05 14:00:00', 1),
(3, 'Implement user authentication and authorization.', '2024-09-20', '2024-08-10', 'Authentication', '2024-08-10 09:00:00', 1),
(4, 'Create the user interface and design the front end.', '2024-09-25', '2024-08-15', 'UI Design', '2024-08-15 16:00:00', 1),
(5, 'Test the application and fix any bugs.', '2024-09-30', '2024-08-20', 'Testing and Bug Fixes', '2024-08-20 11:00:00', 1);

-- Project 2 with 5 tasks
INSERT INTO task (task_id, description, end_date, start_date, task_name, timestamp, project_id) VALUES
(6, 'Define project scope and requirements.', '2024-10-01', '2024-09-01', 'Project Scope', '2024-09-01 12:00:00', 2),
(7, 'Develop API endpoints for user management.', '2024-10-10', '2024-09-05', 'API Development', '2024-09-05 15:00:00', 2),
(8, 'Create database schema and set up tables.', '2024-10-15', '2024-09-10', 'Database Setup', '2024-09-10 10:00:00', 2),
(9, 'Integrate payment gateway and ensure security.', '2024-10-20', '2024-09-15', 'Payment Integration', '2024-09-15 13:00:00', 2),
(10, 'Deploy the application to production environment.', '2024-10-30', '2024-09-20', 'Deployment', '2024-09-20 17:00:00', 2);

-- Project 3 with 5 tasks
INSERT INTO task (task_id, description, end_date, start_date, task_name, timestamp, project_id) VALUES
(11, 'Research and select appropriate technology stack.', '2024-11-01', '2024-10-01', 'Technology Research', '2024-10-01 10:00:00', 3),
(12, 'Design database models and relationships.', '2024-11-05', '2024-10-05', 'Database Design', '2024-10-05 14:00:00', 3),
(13, 'Develop and test core business logic.', '2024-11-15', '2024-10-10', 'Business Logic Development', '2024-10-10 11:00:00', 3),
(14, 'Build user-facing features and UI components.', '2024-11-20', '2024-10-15', 'Feature Development', '2024-10-15 16:00:00', 3),
(15, 'Conduct user acceptance testing and finalize release.', '2024-11-30', '2024-10-20', 'UAT and Release', '2024-10-20 13:00:00', 3);

-- Project 4 with 5 tasks
INSERT INTO task (task_id, description, end_date, start_date, task_name, timestamp, project_id) VALUES
(16, 'Draft initial project proposal and timeline.', '2024-12-01', '2024-11-01', 'Project Proposal', '2024-11-01 09:00:00', 4),
(17, 'Develop key features and functionalities.', '2024-12-10', '2024-11-05', 'Feature Development', '2024-11-05 15:00:00', 4),
(18, 'Create and execute test plans.', '2024-12-15', '2024-11-10', 'Testing', '2024-11-10 12:00:00', 4),
(19, 'Optimize performance and ensure scalability.', '2024-12-20', '2024-11-15', 'Performance Optimization', '2024-11-15 18:00:00', 4),
(20, 'Prepare final documentation and user manuals.', '2024-12-30', '2024-11-20', 'Documentation', '2024-11-20 14:00:00', 4);

--comments data

-- Comments for Task 1
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(1, 'Initial design looks good. Please proceed with further development.', '2024-08-01 10:00:00', 'feedback', 1, 2),
(2, 'Completed the initial layout, awaiting feedback.', '2024-08-02 09:00:00', 'update', 1, 3);

-- Comments for Task 2
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(3, 'Core functionality is being developed as per the requirements.', '2024-08-06 11:00:00', 'update', 2, 4),
(4, 'Development in progress, expected to finish by the deadline.', '2024-08-07 12:00:00', 'feedback', 2, 5);

-- Comments for Task 3
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(5, 'Authentication module is being implemented. Testing will start soon.', '2024-08-11 13:00:00', 'update', 3, 6),
(6, 'Waiting for the authentication module to be completed for further integration.', '2024-08-12 14:00:00', 'feedback', 3, 7);

-- Comments for Task 4
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(7, 'UI design draft is complete. Review and suggest changes if any.', '2024-08-16 15:00:00', 'feedback', 4, 8),
(8, 'UI components are under review. Some adjustments may be needed.', '2024-08-17 16:00:00', 'update', 4, 1);

-- Comments for Task 5
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(9, 'Testing phase has begun. Major bugs need to be fixed.', '2024-08-21 17:00:00', 'update', 5, 2),
(10, 'Few bugs identified and fixed. Preparing for final testing.', '2024-08-22 18:00:00', 'feedback', 5, 3);

-- Comments for Task 6
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(11, 'Project scope defined and approved. Starting with API development.', '2024-09-02 10:00:00', 'update', 6, 4),
(12, 'API endpoints are being developed. Check the progress regularly.', '2024-09-03 11:00:00', 'feedback', 6, 5);

-- Comments for Task 7
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(13, 'Database schema designed and tables are being created.', '2024-09-06 12:00:00', 'update', 7, 6),
(14, 'Database setup almost complete. Review the schema once more.', '2024-09-07 13:00:00', 'feedback', 7, 7);

-- Comments for Task 8
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(15, 'Payment gateway integration started. Ensuring security measures.', '2024-09-11 14:00:00', 'update', 8, 8),
(16, 'Payment integration in progress. Security review next.', '2024-09-12 15:00:00', 'feedback', 8, 1);

-- Comments for Task 9
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(17, 'Deployment process has started. Monitoring for any issues.', '2024-09-21 16:00:00', 'update', 9, 2),
(18, 'Deployment completed. Preparing for final review.', '2024-09-22 17:00:00', 'feedback', 9, 3);

-- Comments for Task 10
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(19, 'Technology stack selected. Moving on to database design.', '2024-10-01 18:00:00', 'update', 10, 4),
(20, 'Review technology stack and confirm final choices.', '2024-10-02 19:00:00', 'feedback', 10, 5);

-- Comments for Task 11
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(21, 'Database models are designed. Ready for implementation.', '2024-10-05 10:00:00', 'update', 11, 6),
(22, 'Database schema needs a final review before implementation.', '2024-10-06 11:00:00', 'feedback', 11, 7);

-- Comments for Task 12
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(23, 'Business logic development in progress. Initial tests are positive.', '2024-10-10 12:00:00', 'update', 12, 8),
(24, 'Please review the business logic and provide feedback.', '2024-10-11 13:00:00', 'feedback', 12, 1);

-- Comments for Task 13
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(25, 'User-facing features development is on track. UI components are being tested.', '2024-10-15 14:00:00', 'update', 13, 2),
(26, 'Review the features and provide any required changes.', '2024-10-16 15:00:00', 'feedback', 13, 3);

-- Comments for Task 14
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(27, 'Conducting user acceptance testing. Gathering feedback from users.', '2024-10-20 16:00:00', 'update', 14, 4),
(28, 'Finalize release after addressing user feedback.', '2024-10-21 17:00:00', 'feedback', 14, 5);

-- Comments for Task 15
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(29, 'Initial project proposal drafted. Waiting for review.', '2024-11-01 18:00:00', 'update', 15, 6),
(30, 'Provide feedback on the project proposal.', '2024-11-02 19:00:00', 'feedback', 15, 7);

-- Comments for Task 16
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(31, 'Key features development started. Status updates to follow.', '2024-11-05 10:00:00', 'update', 16, 8),
(32, 'Review the key features and suggest improvements.', '2024-11-06 11:00:00', 'feedback', 16, 1);

-- Comments for Task 17
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(33, 'Test plans are being created. Execution to start soon.', '2024-11-10 12:00:00', 'update', 17, 2),
(34, 'Final review of test plans and approval needed.', '2024-11-11 13:00:00', 'feedback', 17, 3);

-- Comments for Task 18
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(35, 'Optimizing performance for scalability. Testing different scenarios.', '2024-11-15 14:00:00', 'update', 18, 4),
(36, 'Feedback on performance optimization required.', '2024-11-16 15:00:00', 'feedback', 18, 5);

-- Comments for Task 19
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(37, 'Documentation is in progress. Drafts will be ready soon.', '2024-11-20 16:00:00', 'update', 19, 6),
(38, 'Review and finalize the documentation before release.', '2024-11-21 17:00:00', 'feedback', 19, 7);

-- Comments for Task 20
INSERT INTO comment (comment_id, comment, timestamp, type, task_id, employee_id) VALUES
(39, 'Preparing user manuals. Ensure all sections are covered.', '2024-11-25 18:00:00', 'update', 20, 8),
(40, 'Final review of user manuals and documentation.', '2024-11-26 19:00:00', 'feedback', 20, 1);
