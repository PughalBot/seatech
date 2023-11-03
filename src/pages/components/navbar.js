import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {useContext} from "react";

export default function Navbar() {
    
  return (
    <>
    <header className="bg-white text-white font-algeria py-8 overflow-y-auto no-scrollbar fixed z-20 h-screen hidden md:block">
        <div className="flex flex-col items-center w-full h-full">
            {/* <Link href="/vendor">
                <div className="hover:bg-gray-700 flex items-center w-52 px-10 py-4 font-bold">
                    <div className="flex justify-start items-center py-4">
                        <h3 className="ml-2 text-black">Logout</h3>
                    </div>
                </div>
            </Link> */}

            <div className="container flex flex-wrap flex-col h-full">
                <nav className="text-sm flex flex-col items-start h-full font-bold">

                    <Link href="/vendor/dashboard">
                        <div className= "hover:bg-gray-700 flex items-center w-52 px-8">
                            <div className="flex justify-start items-center py-4">
                                <h3 className="ml-2 text-black">Dashboard</h3>
                            </div>
                        </div>
                    </Link>
                
                    <Link href="/vendor/templatelist">
                        <div className="hover:bg-gray-700 flex items-center  w-52 px-8">
                            <div className="flex justify-start items-center py-4">
                                <h3 className="ml-2 text-black">My Templates</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/vendor/productlist">
                        <div className="hover:bg-gray-700 flex items-center w-52 px-8">
                            <div className="flex justify-start items-center py-4">
                                <h3 className="ml-2 text-black">View Products</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/vendor/analytics">
                        <div className="hover:bg-gray-700 flex items-center w-52 px-8">
                            <div className="flex justify-start items-center py-4">
                                <h3 className="ml-2 text-black">Analytics</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/vendor/feedback">       
                        <div className="hover:bg-gray-700 flex items-center w-52 px-8">
                            <div className="flex justify-start items-center py-4">
                                <h3 className="ml-2 text-black">Queries</h3>
                            </div>
                        </div>
                    </Link>
                </nav>
            </div>   
        </div>
    </header>
    <header className="bg-WHITE text-white font-algeria px-8 overflow-y-auto no-scrollbar w-full fixed z-20">
    <div className="w-full flex md:hidden">
            <div className="flex flex-col w-full">
                <div className="flex">
                    <Link href="/">
                    </Link>
                    <div className="flex flex-row-reverse w-full items-center justify-start">
                        <Image src="/burger-icon.png" width={30} height={30}/>
                    </div>
                </div>
            <div className="hidden" id="mobile_menu">

                <nav className="text-sm flex flex-col items-center w-full font-bold">
                    <Link className={"hover:hover:bg-gray-700 flex items-center"} href="/vendor">
                        <div className="hover:bg-gray-700 flex items-center w-52 px-10 py-2 font-bold">
                            <div className="flex justify-start items-center py-4 space-x-3">
                                <h3 className="ml-2 text-black">Logout</h3>
                            </div>
                        </div>
                    </Link>
                    <Link href="/vendor/dashboard" className="w-full">
                        <div className= "hover:bg-gray-700 flex items-center w-full px-8">
                            <div className="flex justify-center items-center py-4">
                                <h3 className="ml-2 text-black">Dashboard</h3>
                            </div>
                        </div>
                    </Link>
                
                    <Link href="/vendor/templatelist" className="w-full">
                        <div className="hover:bg-gray-700 flex items-center w-full px-8">
                            <div className="flex justify-center items-center py-4">
                                <h3 className="ml-2 text-black">My Templates</h3>
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="/vendor/productlist" className="w-full">
                        <div className="hover:bg-gray-700 flex items-center w-full px-8">
                            <div className="flex justify-center items-center py-4">
                                <h3 className="ml-2 text-black">View Products</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/vendor/analytics" className="w-full">
                        <div className="hover:bg-gray-700 flex items-center w-full px-8">
                            <div className="flex justify-center items-center py-4">
                                <h3 className="ml-2 text-black">Analytics</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/vendor/feedback" className="w-full">       
                        <div className= "hover:bg-gray-700 flex items-center w-full px-8" >
                            <div className="flex justify-center items-center py-4">
                                <h3 className="ml-2 text-black">Feedback</h3>
                            </div>
                        </div>
                    </Link>
                </nav>
            </div>
            </div>
    </div>
    </header>
    </>
  )
}