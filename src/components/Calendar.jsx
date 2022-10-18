import * as React from "react";
import Paper from "@mui/material/Paper";
import {
	ViewState,
	EditingState,
	IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	WeekView,
	MonthView,
	Appointments,
	AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = new Date();
const schedulerData = [
	{
		startDate: "2022-10-01T09:45",
		endDate: "2022-10-01T11:00",
		title: "Meeting",
	},
	{
		startDate: "2022-10-01T12:00",
		endDate: "2022-10-01T13:30",
		title: "Go to a gym",
	},
];

const Calendar = () => (
	<Scheduler data={schedulerData}>
		<ViewState currentDate={currentDate} />
		<EditingState />
		<IntegratedEditing />
		{/* <WeekView startDayHour={7} endDayHour={22.5} /> */}
		<MonthView />
		<Appointments />
		<AppointmentForm />
	</Scheduler>
);

export default Calendar;
