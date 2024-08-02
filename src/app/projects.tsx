import React from "react";
import {FaCheck, FaRegCommentDots ,FaArrowUp, FaRegBell ,FaHashtag,FaCartShopping , FaRegCreditCard ,FaKey,FaMoneyBill } from "react-icons/fa6";
import Image from 'next/image'

export default function Project() {
  return (
    <>
      <div className=" lg:w-full md:w-full xl:w-5/6  mt-10 px-5  justify-center xl:ms-60 grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-span-3 gap-4 ">
        <div className="card bg-white rounded-lg  relative shadow-lg md:col-span-2 lg:col-span-2 xl:col-span-3 ">
          <div className="card-body ps-5">
            <div className="flex justify-between  ">
              <h2 className="font-bold py-5">Projects</h2>
              <p className=" pe-5 font-extrabold pt-5 "><FaRegCommentDots /></p>
            </div>
            <p className="flex pb-10 text-lg "> <FaCheck style={{ color: "blue", fontSize: "1.5rem", marginRight: "0.3rem" }} /> <span className="font-bold text-gray-800">30 done</span> <span className="text-zinc-500 ps-2">this month</span></p>
          </div>

          <div className="ps-3 pt-3 text-lg max-w-lg sm:max-w-4xl   ">
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse  overflow-x-scroll  ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-solid border-blueGray-100  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    COMPANIES
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    MEMBERS
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    BUDGET
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    COMPLETION
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700 "> 
                      <div className="flex items-center">
                      <Image src="logo-xd.svg" width={50} height={50} alt="" /> 
                      <p>Material XD Version</p>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    <div className="flex">
                      <Image src="logo-slack.svg" width={50} height={50} alt=""  className="hover:z-10" />
                      <Image src="logo-xd.svg" width={50} height={50} alt="" style={{position:"relative" , right:"35px"}} />
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm font-bold whitespace-nowrap p-4">
                    $14,000
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      
                      <p className="ps-4 pb-2 font-bold">60%</p>
                  <div className="w-90 h-1 bg-gray-400 rounded-full">
                       <div className=" w-10/12 h-1  text-xs bg-blue-600  rounded-full">
                      </div>
                </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700">
                      <div className="flex items-center">
                      <Image src="logo-atlassian.svg" width={50} height={50} alt="" />
                      <p>Add Progress Track</p>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      <Image src="logo-slack.svg" width={50} height={50} alt=""  className="hover:z-10" />
                      <Image src="logo-xd.svg" width={50} height={50} alt="" style={{position:"relative" , right:"35px"}} />
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm font-bold whitespace-nowrap p-4">
                    $3,000
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  whitespace-nowrap p-4">
                    
                      <p className="ps-4 pb-2 font-bold">10%</p>
                  <div className="w-90 h-1 bg-gray-400 rounded-full">
                       <div className=" w-1/12 h-1  text-xs bg-blue-600  rounded-full">
                      </div>
                </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700">
                    <div className="flex items-center">
                      <Image src="logo-slack.svg" width={50} height={50} alt="" />
                      <p>Fix Platform Errors</p>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      <Image src="logo-slack.svg" width={50} height={50} alt=""  className="hover:z-10" />
                      <Image src="logo-xd.svg" width={50} height={50} alt="" style={{position:"relative" , right:"35px"}} />
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm font-bold  whitespace-nowrap p-4">
                    Not set
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                   
                        <p className="ps-4 pb-2 font-bold">100%</p>
                  <div className="w-90 h-1 bg-gray-400 rounded-full">
                       <div className=" w-full h-1  text-xs bg-green-600  rounded-full">
                      </div>
                </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700">
                    <div className="flex items-center">
                      <Image src="logo-spotify.svg" width={50} height={50} alt="" />
                      <p>Launch our Mobile App</p>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      <Image src="logo-slack.svg" width={50} height={50} alt=""  className="hover:z-10" />
                      <Image src="logo-xd.svg" width={50} height={50} alt="" style={{position:"relative" , right:"35px"}} />
                      </div>

                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm font-bold whitespace-nowrap p-4">
                    $20,500
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      
                      <p className="ps-4 pb-2 font-bold">100%</p>
                  <div className="w-90 h-1 bg-gray-400 rounded-full">
                       <div className=" w-full h-1  text-xs bg-green-600  rounded-full">
                      </div>
                </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700">
                    <div className="flex items-center">
                      <Image src="logo-jira.svg" width={50} height={50} alt="" />
                      <p>Add the New Pricing Page</p>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      <Image src="logo-slack.svg" width={50} height={50} alt=""  className="hover:z-10" />
                      <Image src="logo-xd.svg" width={50} height={50} alt="" style={{position:"relative" , right:"35px"}} />
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm font-bold whitespace-nowrap p-4">
                    $500
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                     
                      <p className="ps-4 pb-2 font-bold">25%</p>
                  <div className="w-90 h-1 bg-gray-400 rounded-full">
                       <div className=" w-1/4 h-1  text-xs bg-blue-600  rounded-full">
                      </div>
                </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700">
                    <div className="flex items-center">
                      <Image src="logo-invision.svg" width={50} height={50} alt="" />
                      <p>Redesign New Online Shop</p>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      <Image src="logo-slack.svg" width={50} height={50} alt=""  className="hover:z-10" />
                      <Image src="logo-xd.svg" width={50} height={50} alt="" style={{position:"relative" , right:"35px"}} />
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm font-bold whitespace-nowrap p-4">
                    $2,000
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <p className="ps-4 pb-2 font-bold">40%</p>
                  <div className="w-90 h-1 bg-gray-400 rounded-full">
                       <div className=" w-1/3 h-1  text-xs bg-blue-600  rounded-full">
                      </div>
                </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>

          </div>

        </div>
        <div className="bg-white rounded-lg shadow-lg sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
          <div className="p-6">
          <h3 className="font-bold  text-zinc-600 text-lg pb-5">Orders overview</h3>
          <div className="flex align-middle   ">
          <FaArrowUp style={{color:"green", paddingRight:"5px" , paddingTop:"2px",fontSize:"20px"}} />
          <p> 24% this month</p>
          </div>
          <div className="flex mt-5">
          <FaRegBell style={{fontSize:"20px", marginTop:"", color:"green"}} />
          <hr className="w-0.5 h-10 mt-8 my-4  border-0 rounded  relative right-2.5 bg-zinc-400"></hr>
          <div>
          <p className=" ps-5 pb-1 text-zinc-700 font-bold text-sm">$2400, Design changes</p>
          <p className="ps-5 text-zinc-400 font-bold text-xs">22 DEC 7:20 PM</p>
          </div>
        </div>
        
        <div className="flex ">
          <FaHashtag style={{fontSize:"20px", color:"red"}} />
          <hr className="w-0.5 h-10 mt-8 my-4  border-0 rounded  relative right-2.5 bg-zinc-400"></hr>
          <div>
          <p className=" ps-5 pb-1 text-zinc-700 font-bold text-sm">New order #1832412</p>
          <p className="ps-5 text-zinc-400 font-bold text-xs">21 DEC 11 PM</p>
          </div>
        </div>
        <div className="flex">
          <FaCartShopping style={{fontSize:"20px", marginTop:"", color:"blue"}} />
          <hr className="w-0.5 h-10 mt-8 my-4  border-0 rounded  relative right-2.5 bg-zinc-400"></hr>
          <div>
          <p className=" ps-5 pb-1 text-zinc-700 font-bold text-sm">Server payments for April</p>
          <p className="ps-5 text-zinc-400 font-bold text-xs">22 DEC 7:20 PM</p>
          </div>
        </div>
        <div className="flex">
          <FaRegCreditCard style={{fontSize:"20px", marginTop:"", color:"orange"}} />
          <hr className="w-0.5 h-10 mt-8 my-4  border-0 rounded  relative right-2.5 bg-zinc-400"></hr>
          <div>
          <p className=" ps-5 pb-1 text-zinc-700 font-bold text-sm">New card added for order #4395133</p>
          <p className="ps-5 text-zinc-400 font-bold">22 DEC 7:20 PM</p>
          </div>
        </div>
        <div className="flex">
          <FaKey style={{fontSize:"20px", marginTop:"", color:"red"}} />
          <hr className="w-0.5 h-10 mt-8 my-4  border-0 rounded  relative right-2.5 bg-zinc-400"></hr>
          <div>
          <p className=" ps-5 pb-1 text-zinc-700 font-bold text-sm ">Unlock packages for development</p>
          <p className="ps-5 text-zinc-400 font-bold">22 DEC 7:20 PM</p>
          </div>
        </div>
        <div className="flex">
          <FaMoneyBill style={{fontSize:"20px", marginTop:"", color:"black"}} />
          <hr className="w-0.5 h-10 mt-8 my-4  border-0 rounded  relative right-2.5 bg-zinc-400"></hr>
          <div>
          <p className=" ps-5 pb-1 text-zinc-700 font-bold text-sm">New order #9583120</p>
          <p className="ps-5 text-zinc-400 font-bold">22 DEC 7:20 PM</p>
          </div>
        </div>
        </div>
        </div>
        </div>


    </>
  )
}