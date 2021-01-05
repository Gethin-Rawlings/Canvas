/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import CallsPerGroup from './components/callsPerGroup';
import CallsPerHour from './components/CallsPerHour';
import CallsPerDay from './components/CallsPerDay';
import Number from './components/Number';
import Lists from './components/Lists';
import './App.css';

const url = 'http://SQLDEV:5000';
const callsByUsersWeeklyUrl = `${url}/callsByUsersWeekly`;
const callsByUsersWeeklyTitle = 'Focus on this week';
const callsByUsersDailyUrl = `${url}/callsByUsersDaily`;
const callsByUsersDailyTitle = 'Focus on Today';
const callsByDayUrl = `${url}/customWidgetData`;
const callsPergroupUrl = `${url}/customOpenCalls`;
const callsByCatWeeklyUrl = `${url}/callsByCatWeekly`;
const callsByCatWeeklyTitle = 'Calls By Cat Weekly';
const callsByCatDailyurl = `${url}/callsByCatDaily`;
const callsByCatDailyTitle = 'Calls By Cat Daily';
const chartConfig = 'http://localhost:5000/chartConfig';

function App() {
  return (
    <div className="main">
      <div className="chartArea">
        <CallsPerDay url={callsByDayUrl} config={chartConfig} />
        <CallsPerHour config={chartConfig} />
        <CallsPerGroup url={callsPergroupUrl} config={chartConfig} />
        <Number title="Calls Opened Today" value="60" name="openCallsTodayNumber" config={chartConfig} />
        <Number title="Calls Closed Today" value="50" name="closedCallsTodayNumber" config={chartConfig} />
        <Lists url={callsByUsersWeeklyUrl} title={callsByUsersWeeklyTitle} name="callsByUsersWeekly" config={chartConfig} />
        <Lists url={callsByUsersDailyUrl} title={callsByUsersDailyTitle} name="callsByUsersDaily" config={chartConfig} />
        <Lists url={callsByCatWeeklyUrl} title={callsByCatWeeklyTitle} name="callsByCatWeekly" config={chartConfig} />
        <Lists url={callsByCatDailyurl} title={callsByCatDailyTitle} name="callsByCatDaily" config={chartConfig} />
      </div>
    </div>
  );
}
export default App;
