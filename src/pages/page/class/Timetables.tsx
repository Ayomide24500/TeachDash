import React from "react";

const Timetables = () => {
  return (
    <div>
      {" "}
      <div className="m-4">
        <div className="w-full bg-slate-100 h-[200px] border rounded-md p-2 overflow-x-auto gap-4">
          {/* Header */}
          <div className="flex gap-4 w-[2600px] bg-white py-3">
            <div className="w-[200px] h-6 border-r">days</div>
            <div className="w-[400px] h-6 border-r">07:45Am - 08:1AM</div>
            <div className="w-[400px] h-6 border-r">08:10Am - 08:50AM</div>
            <div className="w-[400px] h-6 border-r">08:50Am - 09:30AM</div>
            <div className="w-[400px] h-6 border-r">09:30Am - 10:10AM</div>
            <div className="w-[400px] h-6 border-r">10:10Am - 10:20AM</div>
            <div className="w-[400px] h-6 border-r">10:20Am - 11:00am</div>
            <div className="w-[400px] h-6 border-r">11:00Am - 11:40M</div>
            <div className="w-[400px] h-6 border-r">11:40AM - 12:00Noon</div>
            <div className="w-[400px] h-6 border-r">12:00Noon - 12:40pm</div>
            <div className="w-[400px] h-6 border-r">12:40PM - 1:00PM</div>
          </div>
          <div className="flex gap-4 w-[2600px] py-3">
            <div className="w-[200px] h-6 border-r">Monday</div>
            <div className="w-[400px] h-6 border-r">Assembly</div>
            <div className="w-[400px] h-6 border-r">time</div>
            <div className="w-[400px] h-6 border-r">time</div>
            <div className="w-[400px] h-6 border-r">time</div>
            <div className="w-[400px] h-6 border-r">short break</div>
            <div className="w-[400px] h-6 border-r">time</div>
            <div className="w-[400px] h-6 border-r">time</div>
            <div className="w-[400px] h-6 border-r">Lomg break</div>
            <div className="w-[400px] h-6 border-r">time</div>
            <div className="w-[400px] h-6 border-r">time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetables;
