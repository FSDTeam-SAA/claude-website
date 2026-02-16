"use client"
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
// import Link from "next/link"
import { useRouter } from "next/navigation";
// import moment from 'moment';
import Image from 'next/image';
import { UsersApiResponse } from '@/components/shared/Navbar/user-data-type';
import { PlayersTableSkeleton } from './profile-skeleton';
import ClaudePagination from '@/components/ui/claude-pagination';
import NotFound from '@/components/shared/NotFound/NotFound';


const ProfilesContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();

    const { data, isLoading, isError, error } = useQuery<UsersApiResponse>({
        queryKey: ["all-users", currentPage],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/all-user?page=${currentPage}&limit=7`)
            return res.json();
        },
    })

    console.log(data)

    const totalPages = data?.meta ? Math.ceil(data.meta.total / data.meta.limit) : 0;

    let content;

    if (isLoading) {
        return <div className="container py-8">
            <PlayersTableSkeleton />
        </div>
    } else if (isError) {
        return <div className='container py-8'>
            <ErrorContainer message={error?.message || "Something went wrong!"} />
        </div>
    }

    else if (
        data &&
        data?.data &&
        data?.data?.length === 0
    ) {
        content = (
            <div>
                <NotFound message="Oops! No data available. Modify your filters or check your internet connection." />
            </div>
        );
    }
    else if (data && data?.data && data?.data?.length > 0) {
        content = (
            <Table className="rounded-[16px] border border-[#E7E7E7] overflow-hidden">
                <TableHeader>
                    <TableRow className="bg-[#079201] hover:bg-primary">
                        <TableHead className="text-xs md:text-xl font-normal text-white leading-[120%] py-3 pl-10 md:pl-14 lg:pl-16">Players</TableHead>
                        <TableHead className="text-xs md:text-xl font-normal text-white text-center leading-[120%] py-3">Position</TableHead>
                        <TableHead className="text-xs md:text-xl font-normal text-white text-center leading-[120%] py-3">Age</TableHead>
                        <TableHead className="text-xs md:text-xl font-normal text-white text-center leading-[120%] py-3 pr-10 md:pr-14 lg:pr-16">Nationality</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.data?.map((info) => {
                            return <TableRow onClick={() => router.push(`/player-profile/${info?._id}`)} key={info?._id} className="cursor-pointer">

                                <TableCell className="">
                                    {/* <Link href="/player-profile"> */}
                                    <div className="bg-[#E7F5E6] flex flex-col  md:flex-row items-center gap-3 rounded-[8px] p-2 md:p-3 lg:p-4">
                                        <Image src={info?.profileImage || "/assets/images/no-user.jpg"} alt={info?.firstName || "user name"} width={100} height={100} className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 object-contain rounded-[8px]" />
                                        <p className="text-xs md:text-sm lg:text-base text-[#131313] leading-[150%] font-normal py-2 md:py-3">{info?.firstName || "N/A"} {info?.lastName || " "}</p>
                                    </div>
                                    {/* </Link> */}
                                </TableCell>
                                {/* <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3">{moment(info?.debut).format("DD / MM / YYYY")}</TableCell> */}
                                <TableCell className="text-xs md:text-sm lg:text-base text-[#131313] leading-[150%] text-center font-normal py-3"> {info?.position?.map(p => p.toUpperCase()).join("-") || "N/A"}
                                </TableCell>
                                {/* <TableCell className="text-base text-[#131313] leading-[150%] text-center font-normal py-3">  {moment(info?.dob).format("DD / MM / YYYY")} </TableCell> */}
                                <TableCell className="text-xs md:text-sm lg:text-base text-[#131313] leading-[150%] text-center font-normal py-3"> {info?.age || 0} </TableCell>
                                <TableCell className="text-xs md:text-sm lg:text-base text-[#131313] leading-[150%] text-center font-normal py-3"> {info?.nationality || "N/A"} </TableCell>
                            </TableRow>
                        }
                        )}


                </TableBody>
            </Table>
        )
    }

    return (
        <div className='py-10'>
            <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_16px_0px_#00000014]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary h_underline     font-normal leading-[120%] pb-3 md:pb-5 lg:pb-6">All PLAYERS</h3>
                <div>
                    <div>
                        {content}
                    </div>

                    {/* pagination  */}
                    {
                        totalPages > 1 && (
                            <div className="w-full flex items-center justify-between py-6">
                                <p className="text-xs md:text-sm lg:text-base font-normal text-[#707070] leading-[150%]">
                                    Showing {currentPage} to 8 of {data?.meta?.total} results
                                </p>
                                <div>
                                    <ClaudePagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={(page) => setCurrentPage(page)}
                                    />
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default ProfilesContainer