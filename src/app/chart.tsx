import React from "react";

export default function Chart(){
    return(
        <>
        <div className=" lg:w-full xl:w-5/6  mt-10 p-5  xl:ms-60 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="card bg-white rounded-lg  relative shadow-lg  ">
            <div className="card-body">
              <div className="bg-pink-600  text-white border rounded-lg mx-5  relative bottom-5   shadow-xl">
                <div className="my-2 ">
                  <p className="p-2">60</p>
                  <p className="p-2">40</p>
                  <p className="p-2">20</p>
                  <p className="p-2">0</p>
                </div>
                <div className="flex flex-row ms-4 mb-6 uppercase font-light justify-around">
                  <p className="font-bold">m</p>
                  <p className="font-bold">t</p>
                  <p className="font-bold">w</p>
                  <p className="font-bold">t</p>
                  <p className="font-bold">f</p>
                  <p className="font-bold">s</p>
                  <p className="font-bold">s</p>
                </div>
              </div>
              <div className="ps-3 pt-3 text-lg text-cyan-900 ">
                <p>Website Views</p>
                <h3 className=" font-light text-sm pb-4 ">Last Campaign Performance</h3>
              </div>
            </div>
            <hr className="dark" />
            <p className="m-6 pb-7 text-zinc-400">
               campaign sent 2 days ago
            </p>
          </div>

          <div className="card bg-white rounded-lg  relative shadow-lg  ">
            <div className="card-body">
              <div className="bg-green-600 text-white border rounded-lg   mx-5 relative bottom-5  shadow-xl">
                <div className="my-2 ">
                  <p className="p-2">600</p>
                  <p className="p-2">400</p>
                  <p className="p-2">200</p>
                  <p className="p-2">0</p>
                </div>
                <div className="flex flex-row ms-4 mb-6 uppercase  justify-around font-bold">
                  <p >Apr</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block ">May</p>
                  <p>Jun</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block">jul</p>
                  <p>Aug</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block ">Sep</p>
                  <p>Oct</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block">Nov</p>
                  <p className="pe-3">Dec</p>
                </div>
              </div>
              <div className="ps-3 pt-3 text-lg text-cyan-900">
                <p>Daily Sales</p>
                <h3 className=" font-light text-sm pb-4 ">(+15%) increase in today sales.</h3>
              </div>
            </div>
            <hr className="dark" />
            <p className="m-6 pb-7 text-zinc-400">
            updated 4 min ago
            </p>
          </div>

          <div className="card bg-white rounded-lg   relative grid shadow-lg md:col-span-3 lg:col-span-1 xl:col-span-1 ">
            <div className="card-body">
              <div className="bg-gray-950  text-white border rounded-lg   mx-5 relative bottom-5  shadow-xl">
                <div className="my-2 ">
                  <p className="p-2">600</p>
                  <p className="p-2">400</p>
                  <p className="p-2">200</p>
                  <p className="p-2">0</p>
                </div>
                <div className="flex flex-row ms-4 mb-6 uppercase  justify-around font-bold">
                  <p >Apr</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block ">May</p>
                  <p>Jun</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block ">jul</p>
                  <p>Aug</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block ">Sep</p>
                  <p>Oct</p>
                  <p className="lg:hidden md:hidden xl:hidden 2xl:block ">Nov</p>
                  <p className="pe-3">Dec</p>
                </div>
              </div>
              <div className="ps-3 pt-3 text-lg text-cyan-900">
                <p>Completed Tasks</p>
                <h3 className=" font-light text-sm pb-4 ">Last Campaign Performance</h3>
              </div>
            </div>
            <hr className="dark" />
            <p className="m-6 pb-7 text-zinc-400 ">
            just updated
            </p>
          </div>
        </div>
        
        </>
    )
}