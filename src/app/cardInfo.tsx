import React from "react";
import { FaCouch,FaUser} from "react-icons/fa6";

export default function ShowCard() {
  return (
    <>
      <div className=" lg:w-full xl:w-5/6 xl:ms-60 p-5  mt-10   grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2  gap-4 ">
        <div>
          <div className="card bg-white rounded-xl  relative shadow-lg">
            <div className="card-body flex justify-between">
              <p className="bg-gray-900 text-white border rounded-2xl p-8 text-center ms-7 relative bottom-5 shadow-xl">
                <FaCouch  style={{fontSize:"1.3rem"}}/>
              </p>
              <div className="pe-7 pt-3 md:text-end">
                <p>Today's Money</p>
                <h3 className="text-right font-bold text-2xl">$53k</h3>
              </div>
            </div>
            <hr/>
            <p className="m-6 pb-7 ">
              <span className="text-green-500">+55% </span> than last week
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="card bg-white rounded-xl  relative shadow-lg">
            <div className="card-body flex justify-between">
              <p className="bg-pink-500 text-white border rounded-2xl p-8 text-center ms-7 relative bottom-5 shadow-xl">
              <FaUser  style={{fontSize:"1.3rem"}}/>
              </p>
              <div className="pe-7 pt-3 md:text-end">
                <p>Today's Users</p>
                <p className="text-right font-bold text-2xl ">2,300</p>
              </div>
            </div>
            <hr />
            <p className="m-6 pb-7">
              <span className="text-green-500">+3%</span> than last month
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="card bg-white rounded-xl  relative shadow-lg">
            <div className="card-body flex justify-between">
              <p className="bg-green-500 text-white border rounded-2xl p-8 text-center ms-7 relative bottom-5 shadow-xl">
              <FaUser  style={{fontSize:"1.3rem"}}/>
              </p>
              <div className="pe-7 pt-3 md:text-end">
                <p>New Clients</p>
                <p className="text-right font-bold text-2xl">3,462</p>
              </div>
            </div>
            <hr />
            <p className="m-6 pb-7">
              <span className="text-red-500">-2%</span> than last week
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="card bg-white rounded-xl  relative shadow-lg">
            <div className="card-body flex justify-between">
              <p className="bg-blue-600 text-white border rounded-2xl p-8 text-center ms-7 relative bottom-5 shadow-xl">
              <FaCouch  style={{fontSize:"1.3rem"}}/>
              </p>
              <div className="pe-7 pt-3 md:text-end">
                <p>Sales</p>
                <p className="text-right font-bold text-2xl">$103,430</p>
              </div>
            </div>
            <hr className="dark" />
            <p className="m-6 pb-7">
              <span className="text-green-500">+5%</span> than yestarday
            </p>
          </div>
        </div>
      </div>
       </>
    
  );
}