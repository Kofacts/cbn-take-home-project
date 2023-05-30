# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket Breakdown:

Ticket 1: Create Facility Agent Custom ID field
Acceptance Criteria:
- Add a new field called "customId" to the Agents table in the database.
- The "customId" field should be a string and allow for alphanumeric values.
- Facilities should be able to save their own custom IDs for each Agent they work with.

Implementation Details:
1. Modify the Agents table schema in the database to include the "customId" field.
2. Update the data access layer to support the retrieval and update of the "customId" field for Agents.
3. Create an API endpoint that allows Facilities to save/update the custom ID for an Agent.
4. Update the existing front-end interface to include a field for entering and updating the custom ID for an Agent.

Effort Estimate: 2 hours

Ticket 2: Update getShiftsByFacility Function
Acceptance Criteria:
- Modify the getShiftsByFacility function to include the custom ID of the Agent in the returned Shifts.
- The custom ID should be retrieved from the Agents table using the Agent's internal database ID.

Implementation Details:
1. Update the getShiftsByFacility function to fetch the custom ID of each Agent along with other Shift metadata.
2. Modify the data access layer to retrieve the custom ID of Agents based on their internal database ID.

Effort Estimate: 2 hours

Ticket 3: Update generateReport Function
Acceptance Criteria:
- Modify the generateReport function to use the custom ID instead of the internal database ID for each Agent in the generated report.

Implementation Details:
1. Update the generateReport function to fetch the custom ID of each Agent from the Shifts data.
2. Replace the usage of the internal database ID with the custom ID while generating the report.

Effort Estimate: 2 hours

Ticket 4: Update Front-end Interface
Acceptance Criteria:
- Modify the front-end interface to display the custom ID of Agents in the report generation section.
- Update the input fields and form submission to handle custom IDs instead of internal database IDs.

Implementation Details:
1. Update the front-end interface to include the custom ID field for each Agent in the report generation section.
2. Modify the form submission logic to send the custom ID instead of the internal database ID.

Effort Estimate: 3 hours

Ticket 5: Unit Tests
Acceptance Criteria:
- Write unit tests to ensure the functionality of the custom ID feature.
- Cover scenarios such as saving/updating custom IDs, retrieving Shifts with custom IDs, and generating reports with custom IDs.

Implementation Details:
1. Write unit tests for the data access layer to verify the saving and retrieval of custom IDs.
2. Write unit tests for the getShiftsByFacility function to ensure the custom ID is included in the returned Shifts.
3. Write unit tests for the generateReport function to verify the usage of custom IDs in the generated report.

Effort Estimate: 4 hours
