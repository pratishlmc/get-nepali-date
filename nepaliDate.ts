function getNepaliMonthName(month) {
	const monthNames = [
		"बैशाख",
		"जेठ",
		"असार",
		"साउन",
		"भदौ",
		"आश्विन",
		"कार्तिक",
		"मंसिर",
		"पुष",
		"माघ",
		"फाल्गुण",
		"चैत",
	];
	return monthNames[month];
}

function getNepaliNumerals(n) {
	const nepaliNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
	const numStr = String(n);
	let nepaliNum = "";
	for (let i = 0; i < numStr.length; i++) {
		const digit = Number(numStr[i]);
		nepaliNum += nepaliNumerals[digit];
	}
	return nepaliNum;
}

function getNepaliDayName(day) {
	const dayNames = [
		"आइतवार",
		"सोमवार",
		"मङ्गलवार",
		"बुधवार",
		"बिहिवार",
		"शुक्रवार",
		"शनिवार",
	];
	return dayNames[day];
}

function getCurrentNepaliDate(query = "") {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear() + 57;
	const currentMonth = currentDate.getMonth() + 1;
	const currentDay = currentDate.getDate();
	const currentDayOfWeek = currentDate.getDay();

	const nepaliMonth = getNepaliMonthName(currentMonth);
	const nepaliYear = getNepaliNumerals(currentYear);
	const nepaliDay = getNepaliNumerals(currentDay);
	const nepaliDayOfWeek = getNepaliDayName(currentDayOfWeek);

	const nepaliDate = `${nepaliDayOfWeek}, ${nepaliDay} ${nepaliMonth} ${nepaliYear}`;

	const queries = ["day", "month", "year", "dayofweek"];

	if (queries.includes(query) || !query) {
		if (query === "day") {
			return nepaliDay;
		} else if (query === "month") {
			return nepaliMonth;
		} else if (query === "year") {
			return nepaliYear;
		} else if (query === "dayofweek") {
			return nepaliDayOfWeek;
		}
		return nepaliDate;
	}
	return `Query doesn't match. Pass an argument to 'getCurrentNepaliDate()' function, such as "day": to get day, "month": to get month, "year": to get year & "dayofweek": to get day of the week. Or dont pass anyting to get the full Nepali date.`;
}

console.log(getCurrentNepaliDate("Fasdf"));
